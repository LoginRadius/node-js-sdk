// Shared helpers for the demo pages. Loaded as an ES module; no bundler.

/** Issues a JSON request. GET when no body is supplied. */
export async function api(url, body, method) {
  const init = {
    method: method ?? (body === undefined || body === null ? 'GET' : 'POST'),
    credentials: 'same-origin',
    headers: {},
  };
  if (body !== undefined && body !== null) {
    init.headers['Content-Type'] = 'application/json';
    init.body = JSON.stringify(body);
  }
  const res = await fetch(url, init);
  const text = await res.text();
  let data;
  try {
    data = JSON.parse(text);
  } catch {
    data = { raw: text };
  }
  return { ok: res.ok, status: res.status, data };
}

/** Pulls a human-readable message out of the server's error JSON. */
export function describeError(payload, fallback) {
  if (!payload) return fallback ?? 'Request failed';
  const base = payload.message || payload.description || payload.error || payload.raw || fallback;
  return payload.hint ? `${base} — ${payload.hint}` : base;
}

export function showMsg(el, text, kind) {
  if (!el) return;
  el.textContent = text;
  el.className = `msg ${kind ?? ''}`;
  el.hidden = false;
}

/** Renders a JSON result under a section, or an error message. */
export function showOut(el, result, successText) {
  if (!el) return;
  el.hidden = false;
  if (result.ok) {
    el.className = 'out ok';
    el.textContent = `${successText ?? 'OK'}\n${JSON.stringify(result.data, null, 2)}`;
  } else {
    el.className = 'out error';
    el.textContent = `HTTP ${result.status}\n${describeError(result.data)}`;
  }
}

/** Wires a button to a request and renders the outcome. */
export function onClick(id, fn) {
  const el = document.getElementById(id);
  if (el) el.addEventListener('click', (e) => { e.preventDefault(); fn(); });
}

export const val = (id) => (document.getElementById(id)?.value ?? '').trim();

// ---- WebAuthn ---------------------------------------------------------------
// The API speaks standard WebAuthn: challenges arrive base64url-encoded and
// credentials must go back the same way. These helpers are the whole of the
// encoding work.

const b64urlToBytes = (s) => {
  const pad = s.replace(/-/g, '+').replace(/_/g, '/');
  const bin = atob(pad + '='.repeat((4 - (pad.length % 4)) % 4));
  return Uint8Array.from(bin, (c) => c.charCodeAt(0));
};

const bytesToB64url = (buf) =>
  btoa(String.fromCharCode(...new Uint8Array(buf)))
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');

/** The server hands back the options verbatim; only binary fields need decoding. */
function decodeCreationOptions(publicKey) {
  const out = { ...publicKey, challenge: b64urlToBytes(publicKey.challenge) };
  out.user = { ...publicKey.user, id: b64urlToBytes(publicKey.user.id) };
  if (publicKey.excludeCredentials) {
    out.excludeCredentials = publicKey.excludeCredentials.map((c) => ({
      ...c,
      id: b64urlToBytes(c.id),
    }));
  }
  return out;
}

function decodeRequestOptions(publicKey) {
  const out = { ...publicKey, challenge: b64urlToBytes(publicKey.challenge) };
  if (publicKey.allowCredentials) {
    out.allowCredentials = publicKey.allowCredentials.map((c) => ({
      ...c,
      id: b64urlToBytes(c.id),
    }));
  }
  return out;
}

const serializeAttestation = (c) => ({
  id: c.id,
  rawId: bytesToB64url(c.rawId),
  type: c.type,
  authenticatorAttachment: c.authenticatorAttachment || undefined,
  clientExtensionResults: c.getClientExtensionResults(),
  response: {
    clientDataJSON: bytesToB64url(c.response.clientDataJSON),
    attestationObject: bytesToB64url(c.response.attestationObject),
  },
});

const serializeAssertion = (c) => ({
  id: c.id,
  rawId: bytesToB64url(c.rawId),
  type: c.type,
  authenticatorAttachment: c.authenticatorAttachment || undefined,
  response: {
    clientDataJSON: bytesToB64url(c.response.clientDataJSON),
    authenticatorData: bytesToB64url(c.response.authenticatorData),
    signature: bytesToB64url(c.response.signature),
    userHandle: c.response.userHandle ? bytesToB64url(c.response.userHandle) : null,
  },
});

/** Runs the enrolment ceremony end to end. */
export async function passkeyRegister(identifier, out) {
  const begin = await api(`/api/passkey/register/begin?identifier=${encodeURIComponent(identifier)}`);
  if (!begin.ok) return showOut(out, begin);
  const publicKey = begin.data?.RegisterBeginCredential?.publicKey;
  if (!publicKey) {
    return showOut(out, { ok: false, status: 502, data: { error: 'no WebAuthn options returned' } });
  }
  let credential;
  try {
    credential = await navigator.credentials.create({ publicKey: decodeCreationOptions(publicKey) });
  } catch (e) {
    // A cancelled prompt lands here; so does a non-secure context.
    return showOut(out, { ok: false, status: 0, data: { error: String(e.message || e) } });
  }
  const finish = await api('/api/passkey/register/finish', {
    credential: serializeAttestation(credential),
    email: identifier,
  });
  showOut(out, finish, 'Passkey registered.');
  return finish;
}

/** Runs the login ceremony end to end. */
export async function passkeyLogin(identifier, out) {
  const begin = await api(`/api/passkey/login/begin?identifier=${encodeURIComponent(identifier)}`);
  if (!begin.ok) return showOut(out, begin);
  const publicKey = begin.data?.LoginBeginCredential?.publicKey;
  if (!publicKey) {
    return showOut(out, { ok: false, status: 502, data: { error: 'no WebAuthn options returned' } });
  }
  let assertion;
  try {
    assertion = await navigator.credentials.get({ publicKey: decodeRequestOptions(publicKey) });
  } catch (e) {
    return showOut(out, { ok: false, status: 0, data: { error: String(e.message || e) } });
  }
  const finish = await api('/api/passkey/login/finish', {
    credential: serializeAssertion(assertion),
    email: identifier,
  });
  showOut(out, finish, 'Signed in with passkey.');
  return finish;
}

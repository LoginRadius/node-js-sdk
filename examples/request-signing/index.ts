/**
 * Request signing — the `digest` and `x-Request-Expires` headers the
 * LoginRadius API accepts on management endpoints.
 *
 * RUNS OFFLINE. Real SDK operations are called; a stub axios adapter captures
 * the request the SDK produced instead of sending it, so you can inspect the
 * headers without a tenant or a network call:
 *
 *   npm start
 *
 * What to look for:
 *   - emailTemplates.getEmailTemplates (/v2/manage/...) carries `digest`
 *   - login.checkUserNameAvailability (/identity/v2/auth/...) does NOT —
 *     only management paths are signed
 *   - accounts.getImpersonationToken is excluded even though its path is under
 *     /manage/, because it is the access-token exchange
 *   - `apisecret` is stripped from the signed request
 */
import axios, { type InternalAxiosRequestConfig } from 'axios';
import { LoginRadius } from 'loginradius-sdk';

/** Runs one real SDK operation and reports what went on the wire. */
async function call(
  label: string,
  signing: boolean,
  op: (c: LoginRadius) => Promise<unknown>,
): Promise<void> {
  let seen: InternalAxiosRequestConfig | undefined;
  const http = axios.create({
    adapter: async (cfg) => {
      seen = cfg as InternalAxiosRequestConfig;
      return { data: {}, status: 200, statusText: 'OK', headers: {}, config: cfg };
    },
  });

  const client = new LoginRadius({
    apiKey: 'demo-api-key',
    apiSecret: 'demo-api-secret',
    httpClient: http,
    apiRequestSigning: signing,
  });

  // The call itself resolves against an empty stub response, which is fine —
  // we only care about the request the SDK built.
  await op(client).catch(() => undefined);
  if (!seen) {
    console.log(`${label}\n  (no request reached the transport)\n`);
    return;
  }

  const headers = seen.headers as unknown as { get(n: string): unknown };
  const digest = headers.get('digest');
  console.log(label);
  console.log(`  ${new URL(seen.url ?? '', 'http://x').pathname}`);
  if (!digest) {
    console.log('  digest:            (not signed)');
  } else {
    console.log(`  digest:            ${String(digest)}`);
    console.log(`  x-Request-Expires: ${String(headers.get('x-Request-Expires'))}`);
  }
  console.log(`  query keys:        [${Object.keys(seen.params ?? {}).sort().join(' ')}]\n`);
}

// The three operations below are chosen for the path each one sits on.
const getEmailTemplates = (c: LoginRadius) => c.emailTemplates.getEmailTemplates({});
const checkUsername = (c: LoginRadius) => c.login.checkUserNameAvailability({ username: 'alice' });
const impersonationToken = (c: LoginRadius) => c.accounts.getImpersonationToken({ uid: 'demo-uid' });

async function main(): Promise<void> {
  console.log('=== signing DISABLED (the default) ===');
  await call('emailTemplates.getEmailTemplates', false, getEmailTemplates);

  console.log('=== signing ENABLED ===');
  await call('emailTemplates.getEmailTemplates  -> signed', true, getEmailTemplates);
  await call('login.checkUserNameAvailability   -> not signed (auth path)', true, checkUsername);
  await call('accounts.getImpersonationToken    -> excluded (access-token exchange)', true, impersonationToken);

  console.log('Note: `apisecret` is absent from the query keys of the signed request.');
  console.log('The secret is stripped before signing and never sent on a signed call.');
}

void main();

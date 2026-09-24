import { signRequest, shouldSignRequest, stripSigningParam, SIGNING_EXPIRY_MS } from '../src/signing';

/**
 * CROSS-LANGUAGE PARITY.
 *
 * The golden digests below were produced by running the REFERENCE
 * implementation — `creatHashForApplicationSignig` in
 * admin-console-backend/lib/services/loginradius-v2-sdk/lr.js — against these
 * exact inputs. They are not copied from this SDK's own output, so this test
 * proves the port matches the known-working algorithm rather than merely
 * matching itself.
 *
 * The Go SDK asserts the same values in TestSigningGoldenValue. If either
 * fails, fix the implementation, not the expectation; the shared parameters
 * live in the SDK generator's shared configuration under `signing:`.
 *
 * NOT ported from the v11 Node SDK: its helper.js signs `options.uri` and
 * `options.body`, neither of which that path ever sets, so every v11 signature
 * is computed over the literal string "undefined".
 */
const SECRET = 'test-api-secret';
const URI = 'https://api.loginradius.com/identity/v2/manage/account/uid?apikey=test-api-key';
// signRequest adds the 20-minute window, so `now` is the golden expiry minus 20m.
const NOW = new Date(Date.UTC(2026, 0, 2, 3, 4, 5));

const GOLDEN_NO_BODY = 'SHA-256=WhdnDwiFzLUkrhBOUQYzrec+ZllDrY6X0hdovov8bKY=';
const GOLDEN_WITH_BODY = 'SHA-256=cVEPKKM+Dd1fzQePAPDKMKCn+2QollSbzWfVx8YxSzM=';
const GOLDEN_EXPIRES = '2026-01-02 03:24:05';

describe('signRequest', () => {
  it('matches the reference implementation with no body', () => {
    expect(signRequest(SECRET, URI, undefined, NOW).digest).toBe(GOLDEN_NO_BODY);
  });

  it('matches the reference implementation with a body', () => {
    expect(signRequest(SECRET, URI, '{"Uid":"abc123"}', NOW).digest).toBe(GOLDEN_WITH_BODY);
  });

  it('stamps a fully zero-padded UTC expiry 20 minutes ahead', () => {
    // Distinct from the SOTT format, which pads the hour only.
    expect(signRequest(SECRET, URI, undefined, NOW).expires).toBe(GOLDEN_EXPIRES);
    expect(SIGNING_EXPIRY_MS).toBe(20 * 60 * 1000);
  });

  it('changes when the body changes', () => {
    expect(signRequest(SECRET, URI, '{"Uid":"other"}', NOW).digest).not.toBe(GOLDEN_WITH_BODY);
  });

  it('changes when the secret changes', () => {
    expect(signRequest('other-secret', URI, undefined, NOW).digest).not.toBe(GOLDEN_NO_BODY);
  });

  it('is stable across equivalent URL escapings', () => {
    // decode-then-encode normalises, so a pre-encoded URL signs identically.
    const encoded = 'https://api.loginradius.com/identity/v2/manage/account/uid%3Fapikey%3Dtest-api-key';
    expect(signRequest(SECRET, encoded, undefined, NOW).digest).toBe(
      signRequest(SECRET, decodeURIComponent(encoded), undefined, NOW).digest,
    );
  });
});

describe('shouldSignRequest', () => {
  it.each([
    ['/identity/v2/manage/account/uid', true],
    ['/v2/manage/roles', true],
    ['/identity/v2/auth/login', false],
    ['/identity/v2/auth/register', false],
    // The access-token exchange is explicitly excluded by the reference.
    ['/identity/v2/manage/account/access_token', false],
  ])('%s -> %s', (path, expected) => {
    expect(shouldSignRequest(path)).toBe(expected);
  });
});

describe('stripSigningParam', () => {
  it('removes apisecret so it is neither signed nor sent', () => {
    const out = stripSigningParam(`${URI}&apisecret=SHOULD_NOT_APPEAR`);
    expect(out).not.toContain('SHOULD_NOT_APPEAR');
    expect(out).not.toContain('apisecret');
    expect(out).toContain('apikey=test-api-key');
  });

  it('leaves a URL without the parameter untouched', () => {
    expect(stripSigningParam(URI)).toBe(URI);
  });

  it('handles a relative URL', () => {
    expect(stripSigningParam('/identity/v2/manage/x?apisecret=s&a=1')).toBe(
      '/identity/v2/manage/x?a=1',
    );
  });
});

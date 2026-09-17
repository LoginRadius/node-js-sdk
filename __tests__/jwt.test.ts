import { createHmac, createSign, generateKeyPairSync, sign as cryptoSign } from 'node:crypto';
import { validateJWT, JwtValidationError, type JwtAlgorithm } from '../src/jwt';

const SECRET = 'a-shared-secret-at-least-32-bytes-long!!';

const b64url = (b: Buffer | string): string =>
  Buffer.from(b).toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');

const liveClaims = () => ({
  sub: 'uid-123',
  iss: 'LoginRadius',
  aud: 'my-app',
  exp: Math.floor(Date.now() / 1000) + 3600,
  nbf: Math.floor(Date.now() / 1000) - 60,
});

/** Assembles a token by hand — the same way an attacker would. */
function assemble(alg: string, claims: object, signer: (input: string) => Buffer | string): string {
  const head = b64url(JSON.stringify({ alg, typ: 'JWT' }));
  const body = b64url(JSON.stringify(claims));
  return `${head}.${body}.${String(signer(`${head}.${body}`))}`;
}

const hs = (alg: JwtAlgorithm, claims: object, secret: string | Buffer) =>
  assemble(alg, claims, (input) =>
    b64url(createHmac(`sha${alg.slice(2)}`, secret).update(input).digest()),
  );

describe('validateJWT', () => {
  it('accepts a well-formed token and returns its claims', () => {
    const claims = validateJWT(hs('HS256', liveClaims(), SECRET), {
      algorithm: 'HS256',
      key: SECRET,
      issuer: 'LoginRadius',
      audience: 'my-app',
    });
    expect(claims.sub).toBe('uid-123');
  });

  // THE attack this utility exists to stop. Against an RS256-configured app an
  // attacker signs with HS256 using the PUBLIC key as the HMAC secret. A
  // validator that reads the algorithm from the token header accepts it.
  it('rejects algorithm confusion (HS256 forgery against an RS256 app)', () => {
    const { publicKey } = generateKeyPairSync('rsa', { modulusLength: 2048 });
    const pem = publicKey.export({ type: 'spki', format: 'pem' }) as string;
    const forged = hs('HS256', liveClaims(), pem);
    expect(() => validateJWT(forged, { algorithm: 'RS256', key: pem })).toThrow(JwtValidationError);
  });

  it('rejects alg: none', () => {
    const unsigned = assemble('none', liveClaims(), () => '');
    for (const algorithm of ['HS256', 'RS256'] as JwtAlgorithm[]) {
      expect(() => validateJWT(unsigned, { algorithm, key: SECRET })).toThrow(JwtValidationError);
    }
  });

  it('rejects a signature made with a different secret', () => {
    const token = hs('HS256', liveClaims(), 'a-different-secret-entirely-32-bytes');
    expect(() => validateJWT(token, { algorithm: 'HS256', key: SECRET })).toThrow(/signature/);
  });

  it('rejects an expired token', () => {
    const claims = { ...liveClaims(), exp: Math.floor(Date.now() / 1000) - 600 };
    expect(() => validateJWT(hs('HS256', claims, SECRET), { algorithm: 'HS256', key: SECRET })).toThrow(
      /expired/,
    );
  });

  it('rejects a not-yet-valid token', () => {
    const claims = { ...liveClaims(), nbf: Math.floor(Date.now() / 1000) + 600 };
    expect(() => validateJWT(hs('HS256', claims, SECRET), { algorithm: 'HS256', key: SECRET })).toThrow(
      /not valid yet/,
    );
  });

  // A token with no exp never stops being valid.
  it('requires an exp claim', () => {
    const token = hs('HS256', { sub: 'uid-123' }, SECRET);
    expect(() => validateJWT(token, { algorithm: 'HS256', key: SECRET })).toThrow(/no exp claim/);
  });

  it('checks issuer and audience when supplied', () => {
    const token = hs('HS256', liveClaims(), SECRET);
    expect(() =>
      validateJWT(token, { algorithm: 'HS256', key: SECRET, issuer: 'SomeoneElse' }),
    ).toThrow(/issuer/);
    expect(() =>
      validateJWT(token, { algorithm: 'HS256', key: SECRET, audience: 'another-app' }),
    ).toThrow(/audience/);
  });

  // Omitting them must not silently disable the checks that are NOT optional.
  it('treats issuer and audience as optional', () => {
    expect(validateJWT(hs('HS256', liveClaims(), SECRET), { algorithm: 'HS256', key: SECRET }).sub).toBe(
      'uid-123',
    );
  });

  it('verifies RS256 and ES256 signatures', () => {
    const rsa = generateKeyPairSync('rsa', { modulusLength: 2048 });
    const rsaPem = rsa.publicKey.export({ type: 'spki', format: 'pem' }) as string;
    const rsaToken = assemble('RS256', liveClaims(), (input) =>
      b64url(createSign('sha256').update(input).sign(rsa.privateKey)),
    );
    expect(validateJWT(rsaToken, { algorithm: 'RS256', key: rsaPem }).sub).toBe('uid-123');

    const ec = generateKeyPairSync('ec', { namedCurve: 'prime256v1' });
    const ecPem = ec.publicKey.export({ type: 'spki', format: 'pem' }) as string;
    const ecToken = assemble('ES256', liveClaims(), (input) =>
      b64url(
        cryptoSign('sha256', Buffer.from(input), {
          key: ec.privateKey,
          dsaEncoding: 'ieee-p1363',
        }),
      ),
    );
    expect(validateJWT(ecToken, { algorithm: 'ES256', key: ecPem }).sub).toBe('uid-123');
  });

  it('refuses a private key as the verification key', () => {
    const { privateKey } = generateKeyPairSync('rsa', { modulusLength: 2048 });
    const pem = privateKey.export({ type: 'pkcs8', format: 'pem' }) as string;
    const token = hs('RS256', liveClaims(), SECRET);
    expect(() => validateJWT(token, { algorithm: 'RS256', key: pem })).toThrow(/PRIVATE key/);
  });

  it('rejects an unknown algorithm, an empty key and a malformed token', () => {
    const token = hs('HS256', liveClaims(), SECRET);
    expect(() => validateJWT(token, { algorithm: 'HS1024' as JwtAlgorithm, key: SECRET })).toThrow(
      /unsupported/,
    );
    expect(() => validateJWT(token, { algorithm: 'HS256', key: '' })).toThrow(/no key/);
    expect(() => validateJWT('not.a', { algorithm: 'HS256', key: SECRET })).toThrow(/three/);
  });
});

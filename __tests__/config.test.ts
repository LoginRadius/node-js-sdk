import {
  DEFAULT_BASE_URL,
  resolveBaseURL,
  validate,
  type ClientOptions,
} from '../src/config';

describe('resolveBaseURL precedence', () => {
  // Precedence: baseURL > customDomain > domain > default. The test order
  // mirrors how each option overrides the others.

  it('falls back to the production base URL when nothing is supplied', () => {
    expect(resolveBaseURL({})).toBe(DEFAULT_BASE_URL);
  });

  it('uses the domain when only domain is set', () => {
    expect(resolveBaseURL({ domain: 'acme' })).toBe('https://acme.hub.loginradius.com');
  });

  it('customDomain wins over domain', () => {
    expect(resolveBaseURL({ domain: 'acme', customDomain: 'auth.acme.com' })).toBe(
      'https://auth.acme.com',
    );
  });

  it('baseURL wins over both', () => {
    expect(
      resolveBaseURL({
        baseURL: 'https://staging.api.loginradius.com',
        customDomain: 'auth.acme.com',
        domain: 'acme',
      }),
    ).toBe('https://staging.api.loginradius.com');
  });

  it('strips trailing slashes from baseURL', () => {
    expect(resolveBaseURL({ baseURL: 'https://staging.api.loginradius.com///' })).toBe(
      'https://staging.api.loginradius.com',
    );
  });
});

describe('validate', () => {
  it('throws when no credential is supplied', () => {
    expect(() => validate({})).toThrow(/at least one credential is required/);
  });

  it('throws when only server options are supplied', () => {
    expect(() => validate({ domain: 'acme', timeout: 5000 } as ClientOptions)).toThrow();
  });

  it('accepts apiKey alone', () => {
    expect(() => validate({ apiKey: 'k' })).not.toThrow();
  });

  it('accepts accessToken alone', () => {
    expect(() => validate({ accessToken: 't' })).not.toThrow();
  });

  it('accepts bearerToken alone', () => {
    expect(() => validate({ bearerToken: 't' })).not.toThrow();
  });

  it('accepts m2mBearerToken alone', () => {
    expect(() => validate({ m2mBearerToken: 't' })).not.toThrow();
  });

  it('accepts clientId alone', () => {
    expect(() => validate({ clientId: 'c' })).not.toThrow();
  });

  it('accepts xLoginRadiusApiKey alone (header-only override)', () => {
    expect(() => validate({ xLoginRadiusApiKey: 'k' })).not.toThrow();
  });
});

import { LoginRadius } from '../src/client';

describe('LoginRadius constructor', () => {
  it('throws when no credentials are supplied', () => {
    expect(() => new LoginRadius({})).toThrow(/at least one credential/);
  });

  it('exposes every documented service field', () => {
    const client = new LoginRadius({ apiKey: 'k' });
    // Smoke-check a sample of services across the major API groups.
    expect(client.login).toBeDefined();
    expect(client.accounts).toBeDefined();
    expect(client.oauth).toBeDefined();
    expect(client.oidc).toBeDefined();
    expect(client.saml).toBeDefined();
    expect(client.webhooks).toBeDefined();
    expect(client.workflows).toBeDefined();
    expect(client.organization).toBeDefined();
    expect(client.userMigration).toBeDefined();
  });

  it('uses a single shared axios instance across services', () => {
    const client = new LoginRadius({ apiKey: 'k' });
    // Both services should hold a reference to the same axios instance the
    // facade owns. Internally typescript-axios stores it as `.axios`.
    const sharedAxios = client.getHttpClient();
    expect((client.login as unknown as { axios: unknown }).axios).toBe(sharedAxios);
    expect((client.accounts as unknown as { axios: unknown }).axios).toBe(sharedAxios);
  });

  it('honours a caller-supplied axios instance', () => {
    const customAxios = require('axios').default.create({ baseURL: 'https://example.test' });
    const client = new LoginRadius({ apiKey: 'k', httpClient: customAxios });
    expect(client.getHttpClient()).toBe(customAxios);
  });
});

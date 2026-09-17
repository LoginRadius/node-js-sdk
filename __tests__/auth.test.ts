import axios, { AxiosHeaders, type InternalAxiosRequestConfig } from 'axios';
import { installAuthInterceptor } from '../src/auth';
import type { ClientOptions } from '../src/config';

/**
 * Run the request interceptor that {@link installAuthInterceptor} installs
 * against a synthetic config so we can assert what headers/params it sets,
 * without actually making a network call.
 */
async function runInterceptor(
  opts: ClientOptions,
  initial: Partial<InternalAxiosRequestConfig> = {},
): Promise<InternalAxiosRequestConfig> {
  const http = axios.create();
  installAuthInterceptor(http, opts);

  const handler = http.interceptors.request as unknown as {
    handlers: Array<{ fulfilled: (cfg: InternalAxiosRequestConfig) => InternalAxiosRequestConfig }>;
  };
  const interceptor = handler.handlers[0]?.fulfilled;
  if (!interceptor) {
    throw new Error('expected interceptor to be installed');
  }

  const cfg: InternalAxiosRequestConfig = {
    headers: new AxiosHeaders(),
    params: {},
    url: '/',
    method: 'get',
    ...initial,
  } as InternalAxiosRequestConfig;
  return interceptor(cfg);
}

describe('auth interceptor', () => {
  it('sets X-LoginRadius-ApiKey header and apikey query when apiKey provided', async () => {
    const cfg = await runInterceptor({ apiKey: 'KEY' });
    expect(cfg.headers.get('X-LoginRadius-ApiKey')).toBe('KEY');
    expect(cfg.params).toEqual(expect.objectContaining({ apikey: 'KEY' }));
  });

  it('sets X-LoginRadius-ApiSecret header and apisecret query when apiSecret provided', async () => {
    const cfg = await runInterceptor({ apiKey: 'k', apiSecret: 'SECRET' });
    expect(cfg.headers.get('X-LoginRadius-ApiSecret')).toBe('SECRET');
    expect(cfg.params).toEqual(expect.objectContaining({ apisecret: 'SECRET' }));
  });

  it('xLoginRadiusApiKey overrides the header without touching the query', async () => {
    const cfg = await runInterceptor({ apiKey: 'QUERY_KEY', xLoginRadiusApiKey: 'HEADER_KEY' });
    expect(cfg.headers.get('X-LoginRadius-ApiKey')).toBe('HEADER_KEY');
    expect(cfg.params).toEqual(expect.objectContaining({ apikey: 'QUERY_KEY' }));
  });

  it('xLoginRadiusApiSecret overrides the header without touching the query', async () => {
    const cfg = await runInterceptor({
      apiKey: 'k',
      apiSecret: 'QUERY_SECRET',
      xLoginRadiusApiSecret: 'HEADER_SECRET',
    });
    expect(cfg.headers.get('X-LoginRadius-ApiSecret')).toBe('HEADER_SECRET');
    expect(cfg.params).toEqual(expect.objectContaining({ apisecret: 'QUERY_SECRET' }));
  });

  it('bearerToken wins over m2mBearerToken when both are set', async () => {
    const cfg = await runInterceptor({ bearerToken: 'BEARER', m2mBearerToken: 'M2M' });
    expect(cfg.headers.get('Authorization')).toBe('Bearer BEARER');
  });

  it('falls back to m2mBearerToken when bearerToken is absent', async () => {
    const cfg = await runInterceptor({ m2mBearerToken: 'M2M' });
    expect(cfg.headers.get('Authorization')).toBe('Bearer M2M');
  });

  it('sets clientId, clientSecret, accessToken as query params', async () => {
    const cfg = await runInterceptor({
      clientId: 'CID',
      clientSecret: 'CSECRET',
      accessToken: 'AT',
    });
    expect(cfg.params).toEqual(
      expect.objectContaining({ client_id: 'CID', client_secret: 'CSECRET', access_token: 'AT' }),
    );
  });

  it('preserves per-call query overrides (does not overwrite)', async () => {
    const cfg = await runInterceptor(
      { apiKey: 'KEY', accessToken: 'AT' },
      { params: { apikey: 'PER_CALL_KEY', access_token: 'PER_CALL_AT' } },
    );
    expect(cfg.params).toEqual(
      expect.objectContaining({ apikey: 'PER_CALL_KEY', access_token: 'PER_CALL_AT' }),
    );
  });

  it('sets User-Agent header', async () => {
    const cfg = await runInterceptor({ apiKey: 'k', userAgent: 'acme/1.0' });
    expect(cfg.headers.get('User-Agent')).toBe('acme/1.0');
  });

  it('does not set Authorization when no bearer token is supplied', async () => {
    const cfg = await runInterceptor({ apiKey: 'k' });
    expect(cfg.headers.get('Authorization')).toBeUndefined();
  });
});

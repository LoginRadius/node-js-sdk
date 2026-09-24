import axios, { AxiosHeaders, type InternalAxiosRequestConfig } from 'axios';
import { installAuthInterceptor } from '../src/auth';
import type { ClientOptions } from '../src/config';
import { LoginRadius } from '../src/client';

/**
 * Mirrors the Go SDK's cross-cutting request-option tests. Both suites assert
 * the same manifest-declared behaviour: if you change a header or query name
 * in the shared SDK manifest, both should fail together.
 */
function run(
  opts: ClientOptions,
  initial: Partial<InternalAxiosRequestConfig> = {},
): InternalAxiosRequestConfig {
  const http = axios.create();
  installAuthInterceptor(http, opts);
  const handler = http.interceptors.request as unknown as {
    handlers: Array<{ fulfilled: (c: InternalAxiosRequestConfig) => InternalAxiosRequestConfig }>;
  };
  const cfg: InternalAxiosRequestConfig = {
    headers: new AxiosHeaders(),
    params: {},
    url: '/identity/v2/auth/login',
    method: 'get',
    ...initial,
  } as InternalAxiosRequestConfig;
  return handler.handlers[0]!.fulfilled(cfg);
}

describe('cross-cutting request options', () => {
  it('applies every option to the request', () => {
    const cfg = run({
      apiKey: 'KEY',
      originIp: '203.0.113.7',
      serverRegion: 'eu',
      fields: 'Email,Uid',
      preventWebhook: true,
    });
    expect(cfg.headers.get('X-Origin-IP')).toBe('203.0.113.7');
    expect(cfg.headers.get('X-PreventWebhook')).toBe('true');
    expect(cfg.params.region).toBe('eu');
    expect(cfg.params.fields).toBe('Email,Uid');
  });

  it('omits them when unset', () => {
    const cfg = run({ apiKey: 'KEY' });
    expect(cfg.headers.get('X-Origin-IP')).toBeFalsy();
    expect(cfg.headers.get('X-PreventWebhook')).toBeFalsy();
    expect(cfg.params.region).toBeUndefined();
    expect(cfg.params.fields).toBeUndefined();
  });
});

describe('defaultHeaders', () => {
  it('merges caller headers but never masks a credential', () => {
    // Applied first so the SDK's own headers overwrite them. Letting a caller
    // override the API key header would silently send the wrong credential.
    const cfg = run({
      apiKey: 'REAL_KEY',
      defaultHeaders: {
        'X-Tenant-Trace': 'abc123',
        'X-LoginRadius-ApiKey': 'HIJACKED',
        'User-Agent': 'HIJACKED',
      },
      userAgent: 'loginradius-node/test',
    });
    expect(cfg.headers.get('X-Tenant-Trace')).toBe('abc123');
    expect(cfg.headers.get('X-LoginRadius-ApiKey')).toBe('REAL_KEY');
    expect(cfg.headers.get('User-Agent')).not.toBe('HIJACKED');
  });
});

describe('request signing', () => {
  const base = { apiKey: 'KEY', apiSecret: 'SECRET', apiRequestSigning: true } as ClientOptions;

  it('signs management paths', () => {
    const cfg = run(base, { url: '/identity/v2/manage/account/uid' });
    expect(cfg.headers.get('digest')).toBeTruthy();
    expect(cfg.headers.get('x-Request-Expires')).toBeTruthy();
  });

  it('does not sign auth paths', () => {
    const cfg = run(base, { url: '/identity/v2/auth/login' });
    expect(cfg.headers.get('digest')).toBeFalsy();
  });

  it('does not sign the access-token exchange', () => {
    const cfg = run(base, { url: '/identity/v2/manage/account/access_token' });
    expect(cfg.headers.get('digest')).toBeFalsy();
  });

  it('strips apisecret so it is neither signed nor sent', () => {
    const cfg = run(base, { url: '/identity/v2/manage/account/uid' });
    expect(cfg.params.apisecret).toBeUndefined();
    expect(JSON.stringify(cfg.params)).not.toContain('SECRET');
  });

  it('requires both opt-in and a secret', () => {
    expect(
      run({ apiKey: 'KEY', apiRequestSigning: true }, { url: '/identity/v2/manage/account/uid' })
        .headers.get('digest'),
    ).toBeFalsy();
    expect(
      run({ apiKey: 'KEY', apiSecret: 'SECRET' }, { url: '/identity/v2/manage/account/uid' })
        .headers.get('digest'),
    ).toBeFalsy();
  });
});

describe('debug logging', () => {
  it('redacts credential values', () => {
    const lines: string[] = [];
    run({
      apiKey: 'SUPER_SECRET_KEY',
      apiSecret: 'SUPER_SECRET_VALUE',
      bearerToken: 'SUPER_SECRET_TOKEN',
      debug: (m) => lines.push(m),
    });
    const out = lines.join('\n');
    expect(out).not.toBe('');
    for (const secret of ['SUPER_SECRET_KEY', 'SUPER_SECRET_VALUE', 'SUPER_SECRET_TOKEN']) {
      expect(out).not.toContain(secret);
    }
    expect(out.toLowerCase()).toContain('x-loginradius-apikey');
    expect(out).toContain('[REDACTED]');
  });
});

describe('timeout with an injected httpClient', () => {
  it('applies an explicit timeout to the caller instance', () => {
    const caller = axios.create({ timeout: 5000 });
    new LoginRadius({ apiKey: 'k', httpClient: caller, timeout: 90_000 });
    expect(caller.defaults.timeout).toBe(90_000);
  });

  it('leaves the caller instance alone when no timeout is given', () => {
    const caller = axios.create({ timeout: 5000 });
    new LoginRadius({ apiKey: 'k', httpClient: caller });
    expect(caller.defaults.timeout).toBe(5000);
  });
});

describe('per-call params win over client-wide', () => {
  /**
   * The generated layer serialises an operation's own parameters into the URL,
   * not into `cfg.params`, so a guard that inspects only `cfg.params` would
   * append the client-wide value alongside the per-call one and send the key
   * TWICE. For `access_token` that means the server picks between two
   * different credentials non-deterministically.
   *
   * The Go SDK asserts the same cases in TestPerCallParamsWinOverClientWide.
   */
  async function sentUrl(opts: ClientOptions, call: (c: LoginRadius) => Promise<unknown>) {
    let seen: InternalAxiosRequestConfig | undefined;
    const http = axios.create({
      adapter: async (cfg) => {
        seen = cfg as InternalAxiosRequestConfig;
        return { data: {}, status: 200, statusText: 'OK', headers: {}, config: cfg };
      },
    });
    const client = new LoginRadius({ apiKey: 'k', httpClient: http, ...opts });
    await call(client).catch(() => undefined);
    const params = (seen?.params ?? {}) as Record<string, unknown>;
    const qs = new URLSearchParams(
      Object.entries(params)
        .filter(([, v]) => v !== undefined && v !== null && v !== '')
        .map(([k, v]) => [k, String(v)]),
    ).toString();
    const url = seen?.url ?? '';
    return `${url}${qs ? (url.includes('?') ? '&' : '?') + qs : ''}`;
  }

  const occurrences = (url: string, key: string) =>
    (url.match(new RegExp(`[?&]${key}=`, 'g')) ?? []).length;

  it('applies a client-wide fields when the call has none', async () => {
    const url = await sentUrl({ apiSecret: 's', fields: 'Email,Uid' } as ClientOptions, (c) =>
      c.accounts.getIdentities({ email: 'a@b.c' }),
    );
    expect(occurrences(url, 'fields')).toBe(1);
    expect(url).toContain('fields=Email%2CUid');
  });

  it('lets a per-call fields win without duplicating the key', async () => {
    const url = await sentUrl({ apiSecret: 's', fields: 'Email,Uid' } as ClientOptions, (c) =>
      c.accounts.getIdentities({ email: 'a@b.c', fields: 'FirstName' }),
    );
    expect(occurrences(url, 'fields')).toBe(1);
    expect(url).toContain('fields=FirstName');
    expect(url).not.toContain('Email%2CUid');
  });

  it('never sends access_token twice', async () => {
    const url = await sentUrl({ accessToken: 'CLIENT_TOKEN' } as ClientOptions, (c) =>
      c.user.getAccountDetails({ accessToken: 'PER_CALL_TOKEN' }),
    );
    expect(occurrences(url, 'access_token')).toBe(1);
    expect(url).toContain('PER_CALL_TOKEN');
    expect(url).not.toContain('CLIENT_TOKEN');
  });
});

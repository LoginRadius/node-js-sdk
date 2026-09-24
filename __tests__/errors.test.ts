import axios, { AxiosError, AxiosHeaders } from 'axios';
import { LoginRadiusError, installErrorInterceptor } from '../src/errors';

function makeAxiosError(status: number, data: unknown): AxiosError {
  const err = new AxiosError('Request failed');
  err.response = {
    status,
    statusText: '',
    headers: {},
    config: { headers: new AxiosHeaders() } as never,
    data,
  };
  return err;
}

async function rejectThrough(http: ReturnType<typeof axios.create>, err: AxiosError) {
  const handler = http.interceptors.response as unknown as {
    handlers: Array<{ rejected: (e: unknown) => unknown }>;
  };
  const rejected = handler.handlers[0]?.rejected;
  if (!rejected) {
    throw new Error('expected response interceptor to be installed');
  }
  try {
    await rejected(err);
    throw new Error('expected rejection');
  } catch (e) {
    return e;
  }
}

describe('LoginRadiusError predicates', () => {
  it('isAuth flags 401 only (not 403)', () => {
    expect(new LoginRadiusError({ message: '', statusCode: 401 }).isAuth()).toBe(true);
    expect(new LoginRadiusError({ message: '', statusCode: 403 }).isAuth()).toBe(false);
    expect(new LoginRadiusError({ message: '', statusCode: 400 }).isAuth()).toBe(false);
  });

  it('isForbidden flags 403 only', () => {
    expect(new LoginRadiusError({ message: '', statusCode: 403 }).isForbidden()).toBe(true);
    expect(new LoginRadiusError({ message: '', statusCode: 401 }).isForbidden()).toBe(false);
    expect(new LoginRadiusError({ message: '', statusCode: 400 }).isForbidden()).toBe(false);
  });

  it('isRateLimit flags 429', () => {
    expect(new LoginRadiusError({ message: '', statusCode: 429 }).isRateLimit()).toBe(true);
    expect(new LoginRadiusError({ message: '', statusCode: 400 }).isRateLimit()).toBe(false);
  });

  it('isServer flags 5xx', () => {
    expect(new LoginRadiusError({ message: '', statusCode: 500 }).isServer()).toBe(true);
    expect(new LoginRadiusError({ message: '', statusCode: 599 }).isServer()).toBe(true);
    expect(new LoginRadiusError({ message: '', statusCode: 600 }).isServer()).toBe(false);
    expect(new LoginRadiusError({ message: '', statusCode: 499 }).isServer()).toBe(false);
  });
});

describe('error interceptor', () => {
  it('parses the standard LoginRadius envelope', async () => {
    const http = axios.create();
    installErrorInterceptor(http);
    const err = await rejectThrough(
      http,
      makeAxiosError(401, {
        ErrorCode: 906,
        Message: 'Invalid Access Token',
        Description: 'The access token has expired',
      }),
    );
    expect(err).toBeInstanceOf(LoginRadiusError);
    const lr = err as LoginRadiusError;
    expect(lr.statusCode).toBe(401);
    expect(lr.code).toBe('906');
    expect(lr.description).toBe('The access token has expired');
    expect(lr.isAuth()).toBe(true);
    expect(lr.message).toContain('Invalid Access Token');
  });

  it('parses string JSON bodies', async () => {
    const http = axios.create();
    installErrorInterceptor(http);
    const err = await rejectThrough(
      http,
      makeAxiosError(429, JSON.stringify({ ErrorCode: 12, Message: 'Too many' })),
    );
    const lr = err as LoginRadiusError;
    expect(lr.code).toBe('12');
    expect(lr.statusCode).toBe(429);
    expect(lr.isRateLimit()).toBe(true);
  });

  it('parses the camelCase ErrorResponseNative envelope (/api/v2/*)', async () => {
    // /api/v2/access_token/* returns lowercase field names. The extractor
    // must populate `code`, `message`, and `description` regardless of casing.
    const http = axios.create();
    installErrorInterceptor(http);
    const err = await rejectThrough(
      http,
      makeAxiosError(400, {
        errorCode: 905,
        message: 'Invalid access token',
        description: 'The token is malformed',
      }),
    );
    const lr = err as LoginRadiusError;
    expect(lr.code).toBe('905');
    expect(lr.message).toContain('Invalid access token');
    expect(lr.description).toBe('The token is malformed');
  });

  it('parses snake_case OAuth-style error envelopes', async () => {
    const http = axios.create();
    installErrorInterceptor(http);
    const err = await rejectThrough(
      http,
      makeAxiosError(400, {
        error: 'invalid_grant',
        error_description: 'The refresh token has expired',
      }),
    );
    const lr = err as LoginRadiusError;
    expect(lr.code).toBe('invalid_grant');
    expect(lr.description).toBe('The refresh token has expired');
  });

  it('parses mixed-case keys (e.g. ERRORCODE)', async () => {
    const http = axios.create();
    installErrorInterceptor(http);
    const err = await rejectThrough(
      http,
      makeAxiosError(400, { ERRORCODE: 1, MESSAGE: 'oops', DESCRIPTION: 'd' }),
    );
    const lr = err as LoginRadiusError;
    expect(lr.code).toBe('1');
    expect(lr.message).toContain('oops');
    expect(lr.description).toBe('d');
  });

  it('falls back to the axios message for non-JSON bodies', async () => {
    const http = axios.create();
    installErrorInterceptor(http);
    const err = await rejectThrough(http, makeAxiosError(500, '<html>oops</html>'));
    const lr = err as LoginRadiusError;
    expect(lr.statusCode).toBe(500);
    expect(lr.code).toBe('');
    expect(lr.rawBody).toBe('<html>oops</html>');
    expect(lr.isServer()).toBe(true);
  });

  it('handles transport errors with no response', async () => {
    const http = axios.create();
    installErrorInterceptor(http);
    const err = await rejectThrough(http, new AxiosError('ECONNREFUSED'));
    const lr = err as LoginRadiusError;
    expect(lr.statusCode).toBe(0);
    expect(lr.message).toMatch(/ECONNREFUSED/);
  });

  it('preserves the cause for unwrap', async () => {
    const http = axios.create();
    installErrorInterceptor(http);
    const original = makeAxiosError(400, { ErrorCode: 1, Message: 'bad' });
    const err = await rejectThrough(http, original);
    expect((err as LoginRadiusError).cause).toBe(original);
  });
});

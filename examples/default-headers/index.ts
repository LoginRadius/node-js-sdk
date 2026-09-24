/**
 * defaultHeaders — headers merged into every outgoing request.
 *
 * The important property this example proves: default headers are applied at
 * the LOWEST precedence. The SDK's own credential, User-Agent, and signing
 * headers always win, so a default header can never mask a credential and
 * silently send the wrong one.
 *
 * RUNS OFFLINE — a real SDK operation is called and the request captured
 * rather than sent:  npm start
 */
import axios, { type InternalAxiosRequestConfig } from 'axios';
import { LoginRadius } from 'loginradius-sdk';

async function main(): Promise<void> {
  let seen!: InternalAxiosRequestConfig;
  const http = axios.create({
    adapter: async (cfg) => {
      seen = cfg as InternalAxiosRequestConfig;
      return { data: {}, status: 200, statusText: 'OK', headers: {}, config: cfg };
    },
  });

  const client = new LoginRadius({
    apiKey: 'REAL-API-KEY',
    httpClient: http,
    defaultHeaders: {
      // A genuinely useful default: a correlation ID for your logs.
      'X-Tenant-Trace': 'trace-abc123',
      // These two ATTEMPT to override values the SDK owns. Both must lose.
      'X-LoginRadius-ApiKey': 'HIJACKED',
      'User-Agent': 'HIJACKED',
    },
  });

  // A real SDK operation, not a hand-built request.
  await client.login.checkUserNameAvailability({ username: 'alice' }).catch(() => undefined);
  const headers = seen.headers as unknown as { get(n: string): unknown };

  console.log('login.checkUserNameAvailability ->', new URL(seen.url ?? '', 'http://x').pathname);
  console.log();
  console.log('X-Tenant-Trace:      ', String(headers.get('X-Tenant-Trace')), '  <- merged');
  console.log('X-LoginRadius-ApiKey:', String(headers.get('X-LoginRadius-ApiKey')), '<- SDK wins, not HIJACKED');
  console.log('User-Agent:          ', String(headers.get('User-Agent')), '<- SDK wins, not HIJACKED');
}

void main();

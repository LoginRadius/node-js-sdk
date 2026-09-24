/**
 * The four client-wide request options the legacy v11 SDK had and v12 was
 * missing: originIp, serverRegion, fields, and preventWebhook.
 *
 * Each is applied to EVERY outgoing request by the same interceptor that
 * injects credentials, so there is one place to audit rather than 210
 * hand-written call sites.
 *
 * RUNS OFFLINE — a real SDK operation is called and the request captured
 * rather than sent:  npm start
 */
import axios, { type InternalAxiosRequestConfig } from 'axios';
import { LoginRadius, type ClientOptions } from 'loginradius-sdk';

async function capture(extra: Partial<ClientOptions>): Promise<InternalAxiosRequestConfig> {
  let seen!: InternalAxiosRequestConfig;
  const http = axios.create({
    adapter: async (cfg) => {
      seen = cfg as InternalAxiosRequestConfig;
      return { data: {}, status: 200, statusText: 'OK', headers: {}, config: cfg };
    },
  });
  const client = new LoginRadius({ apiKey: 'demo-api-key', httpClient: http, ...extra });
  // Any operation would do — the options below apply to every request.
  await client.login.checkUserNameAvailability({ username: 'alice' }).catch(() => undefined);
  return seen;
}

function report(label: string, cfg: InternalAxiosRequestConfig): void {
  const headers = cfg.headers as unknown as { get(n: string): unknown };
  const params = (cfg.params ?? {}) as Record<string, unknown>;
  console.log(label);
  for (const h of ['X-Origin-IP', 'X-PreventWebhook']) {
    console.log(`  ${(h + ':').padEnd(18)} ${String(headers.get(h) ?? '(unset)')}`);
  }
  for (const p of ['region', 'fields']) {
    console.log(`  ${(p + '=').padEnd(18)} ${String(params[p] ?? '(unset)')}`);
  }
  console.log(`  all query keys:    [${Object.keys(params).sort().join(' ')}]\n`);
}

async function main(): Promise<void> {
  console.log('=== nothing set: the SDK adds only what it must ===');
  report('login.checkUserNameAvailability', await capture({}));

  console.log('=== all four options set ===');
  report(
    'login.checkUserNameAvailability',
    await capture({
      // Forwards the end user's IP for risk-based auth and audit trails.
      originIp: '203.0.113.7',
      // Routes to a regional host. Distinct from `domain`, which selects a
      // tenant rather than a region.
      serverRegion: 'eu',
      // Trims every response to these fields.
      fields: 'Email,Uid',
      // Suppresses webhooks for every call from this client.
      preventWebhook: true,
    }),
  );
}

void main();

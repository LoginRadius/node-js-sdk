/**
 * The fix for a defect that silently ignored your server configuration.
 *
 * The OpenAPI spec pins 42 operations to their own hosts (cloud-api,
 * migration.loginradius.com, and tenant-hub / custom-domain templates). The
 * generated layer resolves those independently of the client's base URL, so
 * before this fix an explicitly configured `baseURL` was ignored for all 42,
 * and tenant-templated hosts always resolved to the spec's placeholder tenant
 * ("example").
 *
 * RUNS OFFLINE:  npm start
 *
 * NOTE: `operationServerMap` is module-level generated state, so each case
 * below constructs its client in isolation. Two clients in one process with
 * different server options share that map — construct one client per
 * configuration, or pass `baseURL`.
 */
import axios, { type InternalAxiosRequestConfig } from 'axios';
import { LoginRadius, type ClientOptions } from 'loginradius-sdk';

async function hostFor(label: string, extra: Partial<ClientOptions>): Promise<void> {
  let seen: InternalAxiosRequestConfig | undefined;
  const http = axios.create({
    adapter: async (cfg) => {
      seen = cfg as InternalAxiosRequestConfig;
      return { data: {}, status: 200, statusText: 'OK', headers: {}, config: cfg };
    },
  });

  const client = new LoginRadius({ apiKey: 'demo-api-key', httpClient: http, ...extra });
  // getBigCommerceLoginUrl is one of the 42: the spec pins it to
  // https://{domain}.hub.loginradius.com rather than the tenant API host.
  await client.bigCommerceSSO
    .getBigCommerceLoginUrl({ accessToken: 'demo-token', store: 'demo-store' })
    .catch(() => undefined);

  const url = seen ? `${seen.baseURL ?? ''}${seen.url ?? ''}` : '(no request)';
  let host = url;
  try {
    host = new URL(url).host;
  } catch {
    /* leave as-is */
  }
  console.log(`  ${label.padEnd(28)} ${host}`);
}

async function main(): Promise<void> {
  console.log('Host used by a pinned operation (bigCommerceSSO.getBigCommerceLoginUrl):\n');
  await hostFor('no server options', {});
  await hostFor('domain: "acme"', { domain: 'acme' });
  await hostFor('baseURL: staging', { baseURL: 'https://staging.internal' });
  console.log('\nBefore the fix every line above showed example.hub.loginradius.com.');
}

void main();

/**
 * How `timeout` interacts with an injected `httpClient`.
 *
 * Previously `timeout` was silently dropped whenever `httpClient` was
 * supplied, so a caller who injected an instance to configure a proxy also had
 * to remember to set their own timeout, with nothing warning them.
 *
 * The rule now: an explicit `timeout` is applied to your instance, because you
 * asked for it. Without one, your instance is left exactly as you configured
 * it — the SDK does not impose its 30s default on an object it does not own.
 *
 * RUNS OFFLINE:  npm start
 */
import axios from 'axios';
import { LoginRadius, DEFAULT_TIMEOUT_MS } from 'loginradius-sdk';

function main(): void {
  // 1. Your instance, no timeout option -> untouched.
  const yours = axios.create({ timeout: 5000 });
  new LoginRadius({ apiKey: 'demo-api-key', httpClient: yours });
  console.log(`injected client, no timeout:      ${yours.defaults.timeout}ms  (your value preserved)`);

  // 2. Your instance + an explicit timeout -> applied.
  const both = axios.create({ timeout: 5000 });
  new LoginRadius({ apiKey: 'demo-api-key', httpClient: both, timeout: 90_000 });
  console.log(`injected client + timeout 90000:  ${both.defaults.timeout}ms  (explicitly applied)`);

  // 3. No instance at all -> the SDK builds one with its default.
  const client = new LoginRadius({ apiKey: 'demo-api-key' });
  console.log(`no injected client:               ${client.getHttpClient().defaults.timeout}ms  (SDK default ${DEFAULT_TIMEOUT_MS}ms)`);
}

main();

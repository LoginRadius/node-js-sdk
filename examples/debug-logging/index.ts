/**
 * debug — a one-line summary of every request.
 *
 * The property worth verifying here is REDACTION: credential header values are
 * replaced with [REDACTED] before anything reaches your logger, and query
 * parameters are logged by key only. Writing a tenant secret into application
 * logs would be a disclosure, so the logger never sees one.
 *
 * RUNS OFFLINE — a real SDK operation is called and the request captured
 * rather than sent:  npm start
 *
 * Exits non-zero if any credential value appears in the log.
 */
import axios from 'axios';
import { LoginRadius } from 'loginradius-sdk';

async function main(): Promise<void> {
  const lines: string[] = [];
  const http = axios.create({
    adapter: async (cfg) => ({ data: {}, status: 200, statusText: 'OK', headers: {}, config: cfg }),
  });

  const client = new LoginRadius({
    apiKey: 'SUPER-SECRET-KEY',
    apiSecret: 'SUPER-SECRET-SECRET',
    bearerToken: 'SUPER-SECRET-TOKEN',
    httpClient: http,
    // Pass `true` for console.error, or a function to route it anywhere.
    debug: (message) => lines.push(message),
  });

  // A real SDK operation, not a hand-built request.
  await client.login.checkUserNameAvailability({ username: 'alice' }).catch(() => undefined);

  const out = lines.join('\n');
  console.log('--- what the debug logger received ---');
  console.log(out);
  console.log('--------------------------------------');

  const leaked = ['SUPER-SECRET-KEY', 'SUPER-SECRET-SECRET', 'SUPER-SECRET-TOKEN'].filter((s) =>
    out.includes(s),
  );
  if (leaked.length > 0) {
    console.error('FAIL: credential values leaked:', leaked);
    process.exit(1);
  }
  console.log('OK: no credential value appears in the log — only header names.');
}

void main();

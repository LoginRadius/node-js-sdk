/**
 * Passwordless email login. Run with:
 *
 *   npm start
 *
 * Loads credentials from v12/.env (shared by all examples). Required keys:
 *   LR_API_KEY=<your_api_key>
 *
 * Demonstrates the typed error path: branch on LoginRadiusError predicates
 * (isAuth/isRateLimit/isServer) for common error categories, fall through to
 * generic handling for everything else.
 */
import * as path from 'path';
import * as dotenv from 'dotenv';
// Load the shared v12/.env (two levels up from examples/login/).
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

import { LoginRadius, LoginRadiusError } from 'loginradius-sdk';

async function main(): Promise<void> {
  const apiKey = process.env.LR_API_KEY;
  const email = process.argv[2];
  if (!apiKey) {
    console.error('Set LR_API_KEY in the environment before running this example.');
    process.exit(2);
  }
  if (!email) {
    console.error('Usage: npm run example:login -- <email>');
    process.exit(2);
  }

  const client = new LoginRadius({ apiKey });

  try {
    const res = await client.login.passwordlessLoginByEmail({
      email,
    });
    console.log('Passwordless login link sent. Response:', res.data);
  } catch (err) {
    if (err instanceof LoginRadiusError) {
      if (err.isAuth()) {
        console.error('Authentication failed (401) — check LR_API_KEY.');
      } else if (err.isForbidden()) {
        // 403: authenticated but not allowed — IP/domain restriction, plan limit, etc.
        console.error(`Forbidden (403): ${err.code} ${err.description}`);
      } else if (err.isRateLimit()) {
        console.error('Rate limited — back off and retry.');
      } else if (err.isServer()) {
        console.error('LoginRadius backend error — retry after a delay.');
      } else {
        console.error(`Request failed: ${err.statusCode} ${err.code} ${err.description}`);
      }
      process.exit(1);
    }
    throw err;
  }
}

void main();

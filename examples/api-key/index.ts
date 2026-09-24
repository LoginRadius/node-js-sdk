/**
 * Auth scheme: APIKey (query `apikey` + `X-LoginRadius-ApiKey` header).
 *
 * The simplest LoginRadius auth setup — most "public" operations (availability
 * checks, login flows, registration) accept just the tenant API key. The SDK
 * sends it as a header by default with a query-param fallback for the legacy
 * operations that only accept the query scheme.
 *
 * Required .env keys:
 *   LR_API_KEY=<your_api_key>
 */
import * as path from 'path';
import * as dotenv from 'dotenv';
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

import { LoginRadius, LoginRadiusError } from 'loginradius-sdk';

async function main(): Promise<void> {
  const apiKey = process.env.LR_API_KEY;
  if (!apiKey) {
    console.error('Set LR_API_KEY in v12/.env before running this example.');
    process.exit(2);
  }

  const client = new LoginRadius({ apiKey });

  try {
    const res = await client.login.checkUserNameAvailability({ username: 'alice' });
    console.log('IsExist =', res.data.IsExist);
  } catch (err) {
    if (err instanceof LoginRadiusError) {
      console.error(`LoginRadius error: ${err.statusCode} ${err.code} ${err.description}`);
      process.exit(1);
    }
    throw err;
  }
}

void main();

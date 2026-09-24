/**
 * Auth scheme: BearerToken (`Authorization: Bearer <token>`).
 *
 * Endpoints protected with the HTTP bearer scheme accept a bearer token in
 * the Authorization header. The SDK sets the header on every request when
 * `bearerToken` is supplied at construction.
 *
 * Required .env keys:
 *   LR_API_KEY=<your_api_key>
 *   LR_BEARER_TOKEN=<bearer_token>
 */
import * as path from 'path';
import * as dotenv from 'dotenv';
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

import { LoginRadius, LoginRadiusError } from 'loginradius-sdk';

async function main(): Promise<void> {
  const apiKey = process.env.LR_API_KEY;
  const bearerToken = process.env.LR_BEARER_TOKEN;
  if (!apiKey || !bearerToken) {
    console.error('Set LR_API_KEY and LR_BEARER_TOKEN in v12/.env.');
    process.exit(2);
  }

  const client = new LoginRadius({ apiKey, bearerToken });

  try {
    // Retrieve the signed-in user's profile via a bearer-token-protected endpoint.
    const res = await client.user.getAccountDetails({});
    console.log('user =', res.data);
  } catch (err) {
    if (err instanceof LoginRadiusError) {
      console.error(`LoginRadius error: ${err.statusCode} ${err.code} ${err.description}`);
      process.exit(1);
    }
    throw err;
  }
}

void main();

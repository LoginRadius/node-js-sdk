/**
 * Auth scheme: APIKey + APISecret.
 *
 * Server-side-only operations (token exchange, account lookup, management)
 * additionally require the tenant API secret. The SDK sends the secret as the
 * `X-LoginRadius-ApiSecret` header (preferred) with `apisecret=` query
 * fallback for legacy endpoints. NEVER expose the API secret in a browser or
 * mobile context.
 *
 * Required .env keys:
 *   LR_API_KEY=<your_api_key>
 *   LR_API_SECRET=<your_api_secret>
 *   LR_SOCIAL_TOKEN=<social-provider-access-token>   # token returned by a social login flow
 */
import * as path from 'path';
import * as dotenv from 'dotenv';
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

import { LoginRadius, LoginRadiusError } from 'loginradius-sdk';

async function main(): Promise<void> {
  const apiKey = process.env.LR_API_KEY;
  const apiSecret = process.env.LR_API_SECRET;
  const socialToken = process.env.LR_SOCIAL_TOKEN;
  if (!apiKey || !apiSecret || !socialToken) {
    console.error('Set LR_API_KEY, LR_API_SECRET, and LR_SOCIAL_TOKEN in v12/.env.');
    process.exit(2);
  }

  const client = new LoginRadius({ apiKey, apiSecret });

  try {
    // Exchange a social-provider token for a LoginRadius access_token. This
    // operation requires both apiKey AND apiSecret per the OpenAPI spec.
    const res = await client.accountSession.getAccessToken({ token: socialToken });
    console.log('LoginRadius access_token =', res.data.access_token);
  } catch (err) {
    if (err instanceof LoginRadiusError) {
      console.error(`LoginRadius error: ${err.statusCode} ${err.code} ${err.description}`);
      process.exit(1);
    }
    throw err;
  }
}

void main();

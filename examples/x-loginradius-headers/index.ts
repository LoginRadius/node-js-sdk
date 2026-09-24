/**
 * Auth scheme: XLoginRadiusAPIKey + XLoginRadiusAPISecret (header-only).
 *
 * Use this when the header credentials must differ from the query-param
 * credentials — typically when traffic flows through an internal gateway that
 * rewrites one but not the other. Setting `xLoginRadiusApiKey` /
 * `xLoginRadiusApiSecret` overrides ONLY the header values; the query params
 * still come from `apiKey` / `apiSecret`.
 *
 * If both header and query credentials are identical, just use `apiKey` /
 * `apiSecret` — the SDK populates both transparently.
 *
 * Required .env keys:
 *   LR_API_KEY=<query-side_api_key>
 *   LR_API_SECRET=<query-side_api_secret>
 *   LR_X_API_KEY=<header-side_api_key>
 *   LR_X_API_SECRET=<header-side_api_secret>
 *   LR_SOCIAL_TOKEN=<social-provider-access-token>
 */
import * as path from 'path';
import * as dotenv from 'dotenv';
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

import { LoginRadius, LoginRadiusError } from 'loginradius-sdk';

async function main(): Promise<void> {
  const xApiKey = process.env.LR_X_API_KEY;
  const xApiSecret = process.env.LR_X_API_SECRET;
  const socialToken = "aaa";
  if (!xApiKey || !xApiSecret || !socialToken) {
    console.error('Set LR_X_API_KEY, LR_X_API_SECRET, and LR_SOCIAL_TOKEN in v12/.env.');
    process.exit(2);
  }

  const client = new LoginRadius({
    xLoginRadiusApiKey: xApiKey,         // header: X-LoginRadius-ApiKey
    xLoginRadiusApiSecret: xApiSecret,   // header: X-LoginRadius-ApiSecret
  });

  try {
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

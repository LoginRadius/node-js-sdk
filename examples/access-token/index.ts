/**
 * Auth scheme: AccessToken (query `access_token`).
 *
 * User-context endpoints operate on the signed-in user's own profile/session
 * and require a LoginRadius access_token obtained from a prior login flow.
 * The SDK sends it as the `access_token=` query parameter.
 *
 * Required .env keys:
 *   LR_API_KEY=<your_api_key>
 *   LR_ACCESS_TOKEN=<user_access_token>
 *   LR_OIDC_APP_NAME=<your_oidc_app_name>
 */
import * as path from 'path';
import * as dotenv from 'dotenv';
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

import { LoginRadius, LoginRadiusError } from 'loginradius-sdk';

async function main(): Promise<void> {
  const apiKey = process.env.LR_API_KEY;
  const accessToken = process.env.LR_ACCESS_TOKEN;
  const oidcAppName = process.env.LR_OIDC_APP_NAME;
  if (!apiKey || !accessToken || !oidcAppName) {
    console.error('Set LR_API_KEY, LR_ACCESS_TOKEN, and LR_OIDC_APP_NAME in v12/.env.');
    process.exit(2);
  }

  const client = new LoginRadius({ apiKey, accessToken });

  try {
    // OIDC userinfo endpoint — requires access_token in the query string.
    const res = await client.oidc.getOIDCUserinfo({ oIDCAppName: oidcAppName });
    console.log('userinfo =', res.data);
  } catch (err) {
    if (err instanceof LoginRadiusError) {
      console.error(`LoginRadius error: ${err.statusCode} ${err.code} ${err.description}`);
      process.exit(1);
    }
    throw err;
  }
}

void main();

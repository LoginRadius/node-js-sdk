/**
 * Auth scheme: ClientId + ClientSecret (query parameters).
 *
 * OAuth-style endpoints — typically multipurpose token operations and account
 * management calls that act on behalf of a registered application rather than
 * a tenant — require the application's `client_id` and `client_secret`. The
 * SDK sends both as query parameters on every request.
 *
 * Required .env keys:
 *   LR_API_KEY=<your_api_key>
 *   LR_CLIENT_ID=<oauth_client_id>
 *   LR_CLIENT_SECRET=<oauth_client_secret>
 *   LR_TARGET_UID=<uid_of_target_user>
 */
import * as path from 'path';
import * as dotenv from 'dotenv';
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

import {
  LoginRadius,
  LoginRadiusError,
  MultipurposeEmailTokenAPITokentypeEnum,
} from 'loginradius-sdk';

async function main(): Promise<void> {
  const clientId = process.env.LR_CLIENT_ID;
  const clientSecret = process.env.LR_CLIENT_SECRET;
  const targetUid = "aaa"
  if (!clientId || !clientSecret || !targetUid) {
    console.error('Set LR_CLIENT_ID, LR_CLIENT_SECRET, and LR_TARGET_UID in v12/.env.');
    process.exit(2);
  }

  const client = new LoginRadius({ clientId, clientSecret });

  try {
    // Generate an email-verification token for a target user — uses ClientId + ClientSecret.
    const res = await client.multipurposeTokens.multipurposeEmailTokenAPI({
      tokentype: MultipurposeEmailTokenAPITokentypeEnum.emailverification,
      multipurposeEmailTokenAPIRequest: { uid: targetUid },
    });
    console.log('verification token =', res.data);
  } catch (err) {
    if (err instanceof LoginRadiusError) {
      console.error(`LoginRadius error: ${err.statusCode} ${err.code} ${err.description}`);
      process.exit(1);
    }
    throw err;
  }
}

void main();

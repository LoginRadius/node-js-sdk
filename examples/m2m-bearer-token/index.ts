/**
 * Auth scheme: M2MBearerToken (`Authorization: Bearer <JWT>`).
 *
 * Machine-to-machine endpoints (`/v2/manage/*`) require a M2M JWT obtained
 * via `client.oauthM2M.generateM2MToken(...)`. The SDK sends it on the
 * Authorization header. `bearerToken` and `m2mBearerToken` share the same
 * header — set `m2mBearerToken` here so the intent is explicit.
 *
 * Required .env keys:
 *   LR_API_KEY=<your_api_key>
 *   LR_M2M_BEARER_TOKEN=<m2m_jwt>
 */
import * as path from 'path';
import * as dotenv from 'dotenv';
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

import { LoginRadius, LoginRadiusError } from 'loginradius-sdk';

async function main(): Promise<void> {
  const apiKey = process.env.LR_API_KEY;
  const m2mBearerToken = process.env.LR_M2M_BEARER_TOKEN;
  if (!apiKey || !m2mBearerToken) {
    console.error('Set LR_API_KEY and LR_M2M_BEARER_TOKEN in v12/.env.');
    process.exit(2);
  }

  const client = new LoginRadius({ apiKey, m2mBearerToken });

  try {
    // List all SOTT (Secure One-Time Tokens) — an M2M-protected management endpoint.
    const res = await client.sott.getAllSOTT();
    console.log('SOTT entries =', res.data);
  } catch (err) {
    if (err instanceof LoginRadiusError) {
      console.error(`LoginRadius error: ${err.statusCode} ${err.code} ${err.description}`);
      process.exit(1);
    }
    throw err;
  }
}

void main();

/**
 * Quickstart — minimum setup. Run with:
 *
 *   npm start
 *
 * Loads LR_API_KEY from v12/.env (shared by all examples).
 *
 * Demonstrates the smallest amount of code needed to call a LoginRadius API.
 * `checkUserNameAvailability` is a public endpoint that only needs an apiKey.
 */
import * as path from 'path';
import * as dotenv from 'dotenv';
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

import { LoginRadius, LoginRadiusError } from 'loginradius-sdk';

async function main(): Promise<void> {
  const apiKey = process.env.LR_API_KEY;
  if (!apiKey) {
    console.error('Set LR_API_KEY in the environment before running this example.');
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

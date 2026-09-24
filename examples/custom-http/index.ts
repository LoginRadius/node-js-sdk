/**
 * Custom HTTP — supply a pre-configured axios instance with proxy support,
 * shorter timeout, custom retry behaviour, etc. Run with:
 *
 *   npm start
 *
 * Loads LR_API_KEY (and optional HTTPS_PROXY) from v12/.env.
 *
 * The SDK installs its credential-injection and error-mapping interceptors on
 * top of the caller's axios instance — the caller's proxy, timeout, dns/agent
 * config, and any of their own interceptors continue to apply.
 */
import * as path from 'path';
import * as dotenv from 'dotenv';
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

import axios from 'axios';
import { LoginRadius, LoginRadiusError } from 'loginradius-sdk';

async function main(): Promise<void> {
  const apiKey = process.env.LR_API_KEY;
  if (!apiKey) {
    console.error('Set LR_API_KEY in the environment before running this example.');
    process.exit(2);
  }

  // Custom axios with a shorter timeout, optional proxy from HTTPS_PROXY, and a
  // request-id logging interceptor that fires BEFORE the SDK's auth interceptor.
  const customAxios = axios.create({
    timeout: 10_000,
    proxy: process.env.HTTPS_PROXY
      ? false // axios picks up HTTPS_PROXY via env when proxy is false
      : undefined,
  });
  customAxios.interceptors.request.use((cfg) => {
    console.log(`-> ${cfg.method?.toUpperCase()} ${cfg.url}`);
    return cfg;
  });

  const client = new LoginRadius({
    apiKey,
    httpClient: customAxios,
    userAgent: 'acme-corp-integration/1.0 loginradius-sdk',
  });

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

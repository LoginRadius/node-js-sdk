// Singleton LoginRadius client + per-user-token helper.
//
// This file is compiled TWICE from one source, which is why it imports the SDK
// with a plain `import` rather than forcing a module system:
//
//   demo/     — tsconfig emits CommonJS, so `import` becomes require() and Node
//               resolves the SDK through `exports.require` -> dist/cjs
//   demo-esm/ — tsconfig emits ESM, so it stays `import` and Node resolves
//               through `exports.import` -> dist/esm
//
// Both demos therefore exercise a different half of the dual build from
// identical source, and cannot drift apart in what they demonstrate.
//
// Relative imports in this tree carry an explicit `.js` extension. That is
// what lets one source compile to both: pure ESM requires the extension,
// and CommonJS resolves `require('./x.js')` to the emitted x.js just as
// happily. Without it the ESM build needs a post-compile rewrite step.

import { LoginRadius, LoginRadiusError, generateSOTT, type ClientOptions } from 'loginradius-sdk';

export { LoginRadiusError, generateSOTT };

if (!process.env.LR_API_KEY || !process.env.LR_API_SECRET) {
  throw new Error('LR_API_KEY and LR_API_SECRET must be set in .env');
}

/**
 * Tenant client — has apiKey + apiSecret. Use for operations that act on
 * behalf of your tenant (registration, login, forgot-password, etc.).
 *
 * Never expose this client's underlying secret to the browser.
 */
export const tenantClient = new LoginRadius({
  apiKey: process.env.LR_API_KEY,
  apiSecret: process.env.LR_API_SECRET,
  ...serverSelection(),
});

/**
 * Builds a per-request user-context client carrying the signed-in user's
 * access token.
 *
 * Most user-context operations also accept the token as a per-call argument,
 * and the demo prefers that. This exists for the few that read it only from
 * client configuration — Session.invalidateAccessToken and
 * User.deleteemailbyaccesstoken.
 *
 * Note `accessToken`, NOT `bearerToken`. They are different credential schemes:
 * `accessToken` is sent as the `access_token` parameter these endpoints
 * declare, while `bearerToken` is `Authorization: Bearer` for the separate
 * BearerToken scheme. Passing a LoginRadius access token as a Bearer sends a
 * credential the operation never asked for and omits the one it did.
 */
export function userClient(accessToken: string): InstanceType<typeof LoginRadius> {
  return new LoginRadius({
    apiKey: process.env.LR_API_KEY,
    accessToken,
    ...serverSelection(),
  });
}

/**
 * Resolves the API server from the environment, mirroring the Go demo.
 * Precedence matches the SDK's own `resolveBaseURL`, highest first:
 *
 *   LR_BASE_URL       -> used verbatim (staging / proxy)
 *   LR_CUSTOM_DOMAIN  -> https://{value}
 *   LR_DOMAIN         -> https://{value}.hub.loginradius.com
 *   (unset)           -> https://api.loginradius.com
 *
 * Only set keys are returned, so an unset variable never overrides the SDK
 * default with an empty string.
 */
function serverSelection(): Partial<ClientOptions> {
  const opts: Partial<ClientOptions> = {};
  if (process.env.LR_DOMAIN) opts.domain = process.env.LR_DOMAIN;
  if (process.env.LR_CUSTOM_DOMAIN) opts.customDomain = process.env.LR_CUSTOM_DOMAIN;
  if (process.env.LR_BASE_URL) opts.baseURL = process.env.LR_BASE_URL;
  return opts;
}

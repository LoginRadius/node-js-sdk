# LoginRadius Node.js SDK — v12

[![npm version](https://img.shields.io/npm/v/loginradius-sdk?label=npm)](https://www.npmjs.com/package/loginradius-sdk)
[![License: MIT](https://img.shields.io/badge/license-MIT-green.svg)](./LICENSE)
[![Types: included](https://img.shields.io/npm/types/loginradius-sdk.svg)](#)
[![CI](https://github.com/LoginRadius/node-js-sdk/actions/workflows/ci.yml/badge.svg)](https://github.com/LoginRadius/node-js-sdk/actions/workflows/ci.yml)
[![Node](https://img.shields.io/node/v/loginradius-sdk.svg)](#)

`loginradius-sdk@12` is a fully typed Node.js SDK generated from the
[LoginRadius OpenAPI specification](./LoginRadius-Public-APIs.yaml). It
covers every public LoginRadius operation (392 operations across 57 service
groups) and stays in lockstep with the spec — when the API gains an endpoint,
running `npm run generate` adds it here.

The hand-written `loginradius-sdk@11.x` SDK (in [`../loginradius-sdk/`](../loginradius-sdk))
remains supported. Install `loginradius-sdk@11` if you're on the older line.

## Installation

```bash
# 12.0.0-rc.1 is a prerelease. A range like @12 never selects one, so pin
# the exact version; @12 works once a GA version is published.
npm install loginradius-sdk@12.0.0-rc.1
```

Requires **Node.js 18+**. The SDK ships as CommonJS with `.d.ts` declarations,
so it works equally well from TypeScript and plain JavaScript.

## Quickstart

```ts
import { LoginRadius, LoginRadiusError } from 'loginradius-sdk';

const client = new LoginRadius({
  apiKey: process.env.LR_API_KEY!,
  apiSecret: process.env.LR_API_SECRET!,   // optional — only needed for secret-protected operations
});

try {
  const res = await client.login.checkUserNameAvailability({ username: 'alice' });
  console.log('IsExist =', res.data.IsExist);
} catch (err) {
  if (err instanceof LoginRadiusError && err.isAuth()) {
    console.error('Invalid credentials.');
  } else {
    throw err;
  }
}
```

Every service field on `client` is fully typed: IDE autocomplete shows the
exact operations, request parameters, and response shape for the LoginRadius
endpoint you're calling.

## Configuration

Pass a `ClientOptions` object to the constructor. Set whichever credentials
the endpoints you call require — `validate()` only requires at least one.

| Option                  | Purpose                                                                                  |
| ----------------------- | ---------------------------------------------------------------------------------------- |
| `apiKey`                | Tenant API key. Sent as `X-LoginRadius-ApiKey` header + `apikey` query fallback.        |
| `apiSecret`             | Tenant API secret (server-side). `X-LoginRadius-ApiSecret` + `apisecret` query.         |
| `clientId`              | OAuth `client_id`.                                                                       |
| `clientSecret`          | OAuth `client_secret` (server-side).                                                     |
| `accessToken`           | User-context `access_token` for endpoints that operate on the signed-in user.            |
| `bearerToken`           | Generic `Authorization: Bearer <token>` value.                                           |
| `m2mBearerToken`        | JWT for machine-to-machine endpoints.                                                    |
| `xLoginRadiusApiKey`    | Override for `X-LoginRadius-ApiKey` header only (uncommon).                              |
| `xLoginRadiusApiSecret` | Override for `X-LoginRadius-ApiSecret` header only (uncommon).                           |
| `domain`                | Multi-tenant hosted page: resolves to `https://{domain}.hub.loginradius.com`.            |
| `customDomain`          | `https://{customDomain}` for customer-owned DNS.                                         |
| `baseURL`               | Explicit base-URL override (staging/proxy). Wins over `domain` and `customDomain`.       |
| `httpClient`            | Caller-supplied `AxiosInstance` (preserves your proxy/agent/transformRequest config).    |
| `timeout`               | Request timeout in ms. Default `30_000`. Ignored when `httpClient` is set.               |
| `userAgent`             | Override the default `loginradius-node/12.0.0-rc.1`.                                          |

Credentials are sent as HTTP headers wherever the API accepts them — this
keeps tokens out of access logs and proxy URL caches. The legacy query-string
schemes (`apikey=`, `apisecret=`, `client_id=`, `client_secret=`,
`access_token=`) are populated as a fallback because ~56 LoginRadius
operations still only accept the query scheme.

## Error handling

All non-2xx responses and transport failures surface as `LoginRadiusError`:

```ts
import { LoginRadiusError } from 'loginradius-sdk';

try {
  await client.accounts.getAccountProfileByEmail({ email: 'user@example.com' });
} catch (err) {
  if (err instanceof LoginRadiusError) {
    if (err.isAuth())           console.error('401 — re-authenticate');
    else if (err.isForbidden()) console.error('403 — IP/domain restriction or plan limit');
    else if (err.isRateLimit()) console.error('429 — back off');
    else if (err.isServer())    console.error('5xx — retry later');
    else console.error(`${err.statusCode} ${err.code} — ${err.description}`);
  } else {
    throw err;
  }
}
```

Fields on `LoginRadiusError`:

- `statusCode` — HTTP status, `0` if the request never reached the server
- `code` — LoginRadius `ErrorCode` from the response envelope
- `description` — long-form description from the envelope
- `rawBody` — verbatim response body for diagnostics
- `cause` — underlying axios / decode error

## Services

The `LoginRadius` client exposes 57 service fields, one per OpenAPI tag.
A non-exhaustive sample:

| Field                       | What it covers                                                |
| --------------------------- | ------------------------------------------------------------- |
| `client.login`              | Login flows — passwordless, passkey, smart login, OTP         |
| `client.registration`       | Sign-up, email/phone verification                             |
| `client.accounts`           | Server-side account management                                |
| `client.password`           | Forgot/reset password, set/change password                    |
| `client.session`            | Session lifecycle, token refresh                              |
| `client.oauth`              | OAuth 2.0 — authorization, token, introspection, revoke       |
| `client.oidc`               | OpenID Connect — discovery, JWKS, dynamic client registration |
| `client.saml`               | SAML 2.0 IdP                                                  |
| `client.oauthM2M`           | Machine-to-machine OAuth                                      |
| `client.jwt`                | JWT issuance and configuration                                |
| `client.webhooks`           | Webhook subscriptions                                         |
| `client.workflows`          | Workflow management                                           |
| `client.organization*`      | Partner IAM — orgs, connections, roles, invitations, domains  |
| `client.customObject(s)`    | Custom-object storage                                         |
| `client.identity`           | Identity profile reads                                        |
| `client.userMigration`      | Bulk user migration                                           |
| `client.shopifySSO`         | Shopify hosted plugin                                         |
| `client.bigCommerceSSO`     | BigCommerce hosted plugin                                     |
| `client.perfectMindSSO`     | PerfectMind hosted plugin                                     |
| `client.crossDeviceSSO`     | QR-code cross-device SSO                                      |

See `examples/` for runnable end-to-end demos.

## API reference

The API itself is documented at
[https://www.loginradius.com/docs/api/openapi/customer-identity-api](https://www.loginradius.com/docs/api/openapi/customer-identity-api) — endpoint behaviour, request and response fields, and what
each operation does. This SDK is generated from the same specification, so the
two stay in step.

[`docs/API.md`](./docs/API.md) is the index: every one of the
392 operations with its method name, HTTP verb and path,
grouped by service.

[`docs/`](./docs) alongside it holds the full TypeScript reference — one page
per class, interface, model and enum — generated by TypeDoc from the SDK's own
TSDoc. Use the index to find an operation, the reference for its types.

Your editor shows the same content inline: the shipped `.d.ts` carries every
comment, so hovering a method gives its description and parameters without
leaving the file.

## Validating a LoginRadius JWT

`validateJWT` verifies a token issued by one of your JWT apps. It is entirely
local — no network call, no credentials, no client.

```ts
import { validateJWT } from 'loginradius-sdk';

const claims = validateJWT(token, {
  algorithm: 'HS256',                 // the algorithm YOUR app is configured for
  key: process.env.LR_JWT_SECRET!,
  issuer: 'LoginRadius',              // optional
});
```

Signature, `exp` and `nbf` are always checked; issuer and audience are checked
when supplied. HS256/384/512 take the shared secret; RS*/ES* take the
PEM-encoded **public** key. Throws `JwtValidationError` on any failure.

> **The algorithm is yours to state, and is never read from the token.** A
> validator that trusts the token's own `alg` header can be attacked: against an
> RS256 app, an attacker signs with HS256 using the public key as the HMAC
> secret. Passing the algorithm your app is configured for is what prevents it.

## Custom HTTP

Pass an `AxiosInstance` to use your own proxy/agent/timeout/interceptors:

```ts
import axios from 'axios';
import { LoginRadius } from 'loginradius-sdk';

const customAxios = axios.create({ timeout: 10_000, httpsAgent });
customAxios.interceptors.request.use((cfg) => { /* request-id logging, etc. */ return cfg; });

const client = new LoginRadius({
  apiKey: process.env.LR_API_KEY!,
  httpClient: customAxios,
  userAgent: 'acme-corp/1.0 loginradius-sdk',
});
```

The SDK installs its credential-injection and error-mapping interceptors on
top of your instance; your existing config and interceptors keep working.

## Migrating from v11

See [`MIGRATION_GUIDE.md`](./MIGRATION_GUIDE.md) for the full v11 → v12
mapping (config fields, namespace → service translation, side-by-side method
examples, error handling diff, what's not in v12 yet).

`loginradius-sdk@12` is a new package surface — the v11.x API namespaces
(`lrv2.authenticationApi.loginByEmail(...)`) do not exist on the v12 client.
Instead, every operation lives on a typed service field:

```ts
// v11
const lrv2 = require('loginradius-sdk')({ apiKey, apiSecret, /* … */ });
lrv2.authenticationApi.loginByEmail(model, /* … */);

// v12
import { LoginRadius } from 'loginradius-sdk';
const client = new LoginRadius({ apiKey, apiSecret });
await client.login.loginByEmail({ /* typed request */ });
```

Operations carry the same names as the LoginRadius API documentation; the
typed `*Request` objects mean your IDE will show you exactly which fields a
given endpoint accepts.

If you can't migrate yet, pin `loginradius-sdk@11`:

```bash
npm install loginradius-sdk@11
```

## Running the demos

Two end-to-end reference apps under this directory, each exercising the
same 6 flows (register, login, profile view + update, change password,
forgot/reset password, logout) on a different stack:

| Demo                       | Stack                                   | Module path the SDK loads from |
| -------------------------- | --------------------------------------- | ------------------------------ |
| [`demo/`](./demo)          | Express + TypeScript, vanilla HTML      | **CJS** (`require()` → `dist/cjs/`) |

```bash
# Express (CJS)
cd demo && cp .env.example .env && npm install && npm run dev

```

Both bind to `http://localhost:3000` — run one at a time.

## Generated code

This SDK is generated from the LoginRadius OpenAPI specification, so the client,
the facade, the tests and the docs all stay in step with the API and with the
other LoginRadius SDKs.

Files under `v12/` are not edited by hand — a change made here would be lost on
the next release. If something is wrong, please open an issue rather than a pull
request against generated files; see [`GENERATED.md`](./GENERATED.md).

## Support

- Bugs and feature requests: <https://github.com/LoginRadius/node-js-sdk/issues>
- Account or integration questions: <support@loginradius.com>
- API documentation: <https://www.loginradius.com/docs/api/openapi/customer-identity-api>

## License

MIT — see [`LICENSE`](../LICENSE).

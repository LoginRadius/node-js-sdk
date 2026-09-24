# Changelog

## 12.0.0-rc.1

Initial release of the OpenAPI-generated `loginradius-sdk@12` line.

### What's new

- **Full endpoint coverage.** 392 LoginRadius operations across 57 service
  groups, generated from `LoginRadius-Public-APIs.yaml`. Hand-written v11.x
  covered 19 of the 57 groups.
- **TypeScript-first.** Strong types for every request/response — IDE
  autocomplete and compile-time errors when an operation's shape changes.
- **Single `LoginRadius` client.** One constructor, one set of credentials,
  56 typed service fields (`client.login`, `client.oauth`, `client.saml`, …).
- **Centralised credential injection.** All credentials (apiKey, apiSecret,
  clientId/Secret, accessToken, bearerToken, m2mBearerToken) are applied via
  a single axios request interceptor — one audit point, no per-operation
  context plumbing. Credentials sent as headers (preferred) with query-param
  fallback for the ~56 legacy operations that only accept query schemes.
- **Typed errors.** `LoginRadiusError` exposes `statusCode`, `code`,
  `description`, `rawBody`, `cause`, plus
  `isAuth()/isForbidden()/isRateLimit()/isServer()` predicates for common
  branches. `isAuth()` flags 401 only — 403 is reported separately via
  `isForbidden()` because in LoginRadius it usually means an IP/domain
  restriction or plan-level limit rather than an auth-credential problem.
- **Custom HTTP.** Pass any pre-configured `AxiosInstance` — proxy, custom
  agent, timeout, interceptors — and the SDK layers its own interceptors on
  top without trampling yours.
- **Dual CJS + ESM build.** Both `require('loginradius-sdk')` and
  `import 'loginradius-sdk'` resolve via the `exports` field with
  type-condition support. CJS consumers get `dist/cjs/`; ESM consumers get
  `dist/esm/` with native `.js` import extensions.
- **Reference demo.** `demo/` (Express + TypeScript, CJS) covers the full
  demo contract end to end — registration and login, profile and identifier
  management, password reset by token or OTP, the access-token lifecycle, MFA
  enrolment and challenge, and passkey (WebAuthn). It resolves the SDK through
  `require()`, exercising the CJS half of the dual build;
  `npm run check:exports` covers the ESM half.

### Breaking changes from v11

This is a new package surface, not an in-place upgrade. v11 namespaces
(`authenticationApi`, `accountApi`, `socialApi`, …) do not exist. Endpoints
are reachable via the typed `LoginRadius` client. See the
[Migrating from v11 section in the README](./README.md#migrating-from-v11).

`loginradius-sdk@11` remains supported on npm; existing installations
continue to work unchanged. Install with `npm install loginradius-sdk@11`.

### Generator details

- Generator: `openapi-generator-cli` `v7.10.0` (`typescript-axios`)
- Spec: `LoginRadius-Public-APIs.yaml` (OpenAPI 3.0.1)
- HTTP client: `axios` `^1.7.7`
- Minimum Node.js: 18

### Known issues

- `typescript-axios` v7.10.0 emits an incomplete `ServerMap` interface in
  `base.ts`. The generator's `operationServerMap` entries include a
  `variables` field that the inline type omits. `codegen/patch-server-map.sh`
  runs after every regeneration to add it back.
  ([openapi-generator#17969](https://github.com/OpenAPITools/openapi-generator/issues/17969))

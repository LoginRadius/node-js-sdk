# Examples

Each subdirectory is a self-contained runnable example. Pick the one that
matches the LoginRadius auth scheme(s) your operation uses.

All examples load credentials from `v12/.env` (shared across examples). See
`.env.example` at the root of `v12/` for the keys each example needs.

To run any example:

```bash
cd examples/<name>
npm install           # only needed once per example
npm start
```

## By concept

| Directory       | Demonstrates                                                          |
| --------------- | --------------------------------------------------------------------- |
| `quickstart/`   | Minimum setup — `new LoginRadius({ apiKey })` + one API call          |
| `login/`        | Passwordless email login + typed `LoginRadiusError` branching         |
| `custom-http/`  | Caller-supplied `AxiosInstance` (proxy, timeout, your own interceptor)|

## By auth scheme

Match the example to the security scheme(s) listed for the LoginRadius
operation you're calling.

| Directory                 | Auth scheme(s)                              | Sample operation                                       |
| ------------------------- | ------------------------------------------- | ------------------------------------------------------ |
| `api-key/`                | `APIKey`                                    | `login.checkUserNameAvailability`                      |
| `api-key-secret/`         | `APIKey` + `APISecret`                      | `accountSession.getAccessToken`                        |
| `access-token/`           | `AccessToken` (query)                       | `oidc.getOIDCUserinfo`                                 |
| `bearer-token/`           | `BearerToken` (`Authorization: Bearer …`)   | `user.getAccountDetails`                               |
| `m2m-bearer-token/`       | `M2MBearerToken` (JWT bearer)               | `sott.getAllSOTT`                                      |
| `client-id-secret/`       | `ClientId` + `ClientSecret` (query)         | `multipurposeTokens.multipurposeEmailTokenAPI`         |
| `x-loginradius-headers/`  | `XLoginRadiusAPIKey` + `XLoginRadiusAPISecret` (header overrides) | `accountSession.getAccessToken` |

## Combining schemes

The SDK accepts every credential at once — supply whichever schemes the
operation you're calling lists in the OpenAPI spec:

```ts
const client = new LoginRadius({
  apiKey:    process.env.LR_API_KEY!,
  apiSecret: process.env.LR_API_SECRET!,
  accessToken: process.env.LR_ACCESS_TOKEN,
  bearerToken: process.env.LR_BEARER_TOKEN,
});
```

The credential injection interceptor only sends the schemes that an endpoint
accepts — unused values stay on the headers/query but most servers ignore
them. If you're worried about cross-tenant credential bleeding, construct one
`LoginRadius` per scheme instead.

## A note on `axios` in these examples

Examples that need an axios instance deliberately do **not** declare `axios` as
a dependency. They resolve the SDK's own copy by walking up `node_modules`.

Declaring it locally installs a second copy, and TypeScript then treats the two
`AxiosInstance` types as unrelated — so passing your instance as `httpClient`
fails to compile with a wall of structural-mismatch errors. One axios, one set
of types.

## Cross-cutting request options

These six examples cover the client-wide features the legacy v11 SDK had and
v12 was missing, plus two defects that silently ignored your configuration.

**They run offline.** Each installs a stub axios adapter instead of sending
anything, so you can inspect exactly what the SDK put on the wire without a
tenant, credentials, or network access:

```bash
cd examples/request-signing
npm install && npm start
```

| Directory               | Verifies                                                                                   |
| ----------------------- | ------------------------------------------------------------------------------------------ |
| `request-signing/`      | `apiRequestSigning` — `digest` + `x-Request-Expires` on `/manage/` paths only, `apisecret` stripped before signing |
| `request-options/`      | `originIp`, `serverRegion`, `fields`, `preventWebhook` applied to every request             |
| `default-headers/`      | `defaultHeaders` merges, but can never mask a credential or the User-Agent                  |
| `debug-logging/`        | `debug` redacts every credential value; exits non-zero if one leaks                         |
| `operation-servers/`    | The 42 spec-pinned operations now honour `baseURL` / `domain` instead of the spec's placeholder tenant |
| `timeout-http-client/`  | `timeout` applies to an injected `httpClient` only when set explicitly                       |

Each example prints what it sent and what came back, so its output can be
compared directly against the request you expected.

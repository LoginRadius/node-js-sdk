# Migrating from `loginradius-sdk@11` to `@12`

`loginradius-sdk@12` is a fresh package surface, not an in-place upgrade. v12
is generated from the LoginRadius OpenAPI spec — every operation is typed
end-to-end, errors are class-based, and the client is one `LoginRadius`
object with ~56 typed service fields instead of a factory function returning
20 hand-written namespaces.

Existing `11.x` consumers keep working exactly as before — `npm install
loginradius-sdk@11` still installs the legacy line. Migrate at your own pace.

## Decide whether to migrate

| Reason to migrate now                                    | Reason to defer                                       |
| -------------------------------------------------------- | ----------------------------------------------------- |
| You want IDE autocomplete + compile-time safety.         | Your integration is stable and on `11.x` long-term.   |
| You're calling endpoints not covered by v11 (392 vs 210).| You can't take a major-version bump right now.         |
| You want typed error branching (`isAuth`, `isForbidden`).| You can't take a major-version bump right now.        |
| You're starting a new integration.                       |                                                       |

You can pin to `loginradius-sdk@^11.7` indefinitely. v11 stays in maintenance
for security fixes only.

## 1. Install

```bash
# v11
npm install loginradius-sdk@11

# v12
npm install loginradius-sdk@12
```

Both publish under the same `loginradius-sdk` npm name. Lockfiles pin the
major, so an `npm install` against an existing project won't accidentally
jump to v12.

**Node 18+** is required for v12. v11 supported older Node.

## 2. Initialise the client

The shape changes from a factory function to a class constructor.

```js
// v11 — factory returns an object with namespaces
const lrv2 = require('loginradius-sdk')({
  apiKey: process.env.LR_API_KEY,
  apiSecret: process.env.LR_API_SECRET,
  apiDomain: 'api.loginradius.com',
  siteName: 'YourSiteName',
  apiRequestSigning: false,
  proxy: { host: '', port: '', user: '', password: '' },
});
```

```ts
// v12 — class constructor, typed options
import { LoginRadius } from 'loginradius-sdk';

const client = new LoginRadius({
  apiKey: process.env.LR_API_KEY!,
  apiSecret: process.env.LR_API_SECRET!,
});
```

### Config field mapping

| v11                  | v12                              | Notes                                                                                  |
| -------------------- | -------------------------------- | -------------------------------------------------------------------------------------- |
| `apiKey`             | `apiKey`                         | Same. Sent as `X-LoginRadius-ApiKey` header + `apikey` query fallback.                 |
| `apiSecret`          | `apiSecret`                      | Same. Sent as `X-LoginRadius-ApiSecret` header + `apisecret` query fallback.           |
| `apiDomain`          | `baseURL`                        | Only set if you target a non-production URL. Default `https://api.loginradius.com`.    |
| `siteName`           | *(removed)*                      | Was used to stamp some emails. Templates now configure this server-side.               |
| `serverRegion`       | `domain` / `customDomain` / `baseURL` | `domain` is the **tenant name** on the LoginRadius hub — e.g. `domain: 'acme'` → `https://acme.hub.loginradius.com`. Use `customDomain: 'auth.acme.com'` for your own DNS, or `baseURL` to target a region-specific API URL directly. |
| `apiRequestSigning`  | `apiRequestSigning`              | Supported. Opt-in, off by default; applies to `/manage/` paths excluding `/account/access_token`. Do **not** assume parity with v11's implementation — v11 signed the literal string `"undefined"`, so any v11 signature you have recorded is not a valid reference. Validate against your own tenant before relying on it. |
| `originIp`           | `originIp`                       | `X-Origin-IP` header on every request. Note this header is **not** in the OpenAPI spec — the facade sends it to match v11. |
| `fieldsParam` / `fieldsValue` | `fields`                | `fields=` query parameter on every request. v11 made you supply the separator (`?fields=` vs `&fields=`); pass only the value now. |
| `preventWebhook`     | `preventWebhook`                 | `X-PreventWebhook: true` on every request. v12 also has a per-operation parameter. |
| *(implicit)*         | `defaultHeaders`                 | Headers merged into every request at the **lowest** precedence — the SDK's own credential and User-Agent headers always win. |
| *(implicit)*         | `debug`                          | Request/response logging with credentials redacted. Pass `true` or your own sink. |
| *(implicit)*         | `serverIndex`                    | Escape hatch for the 42 operations the spec pins to their own host. An explicit `baseURL` already overrides those pins. |
| `proxy`              | `httpClient` (custom axios)      | Build your own `axios.create({ proxy, httpsAgent, ... })` and pass it via `httpClient`. See `examples/custom-http/`. |
| *(implicit)*         | `bearerToken` / `m2mBearerToken` | New first-class support for Bearer schemes. v11 had no built-in support.               |
| *(implicit)*         | `accessToken`                    | First-class — was previously passed per-call.                                          |
| *(implicit)*         | `userAgent`                      | Override the default `loginradius-node/12.x.y`.                                        |

## 3. Method calls

### Big-picture shape change

```js
// v11 — positional args, returns Promise<any>
lrv2.authenticationApi
  .loginByEmail(emailAuthenticationModel, emailTemplate, fields, loginUrl, verificationUrl)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
```

```ts
// v12 — single typed request object, returns Promise<AxiosResponse<TypedModel>>
const res = await client.login.emailByLoginUserNamePhone({
  emailByLoginUserNamePhoneRequest: { email, password },
  emailTemplate,
  fields,
  loginUrl,
  verificationUrl,
});
console.log(res.data);
```

Three universal changes:

1. **Single object parameter.** Every v12 method takes one object whose
   property names match the OpenAPI parameter names (camelCase). No more
   guessing positional order.
2. **`.data` for the response body.** v12 returns the full axios response;
   the typed body is on `.data`. Use `const { data } = await ...` for terser
   call sites.
3. **Promises throw, not reject with bare objects.** Use `try/catch` and
   branch on `instanceof LoginRadiusError` — no more `.catch((err) => …)`
   with an untyped argument.

### Namespace mapping

v11 grouped methods by hand-curated namespace. v12 groups by OpenAPI tag —
some v11 namespaces split across multiple v12 services, and a few names
diverge. Common mappings:

| v11 namespace                                            | v12 service field(s)                                              |
| -------------------------------------------------------- | ----------------------------------------------------------------- |
| `lrv2.authenticationApi`                                 | `client.login`, `client.user`, `client.password`, `client.session`, `client.security` |
| `lrv2.passwordLessLoginApi`                              | `client.login` (passwordless methods)                             |
| `lrv2.phoneAuthenticationApi`                            | `client.login`, `client.user`                                     |
| `lrv2.oneTouchLoginApi`                                  | `client.login` (`oneTouchLogin*` methods)                         |
| `lrv2.smartLoginApi`                                     | `client.login` (`*SmartLogin` methods)                            |
| `lrv2.slidingTokenApi`                                   | `client.session`                                                  |
| `lrv2.pinAuthenticationApi`                              | `client.login`, `client.password`                                 |
| `lrv2.riskBasedAuthenticationApi`                        | `client.security`                                                 |
| `lrv2.accountApi`                                        | `client.accounts`, `client.accountSession`, `client.accountSecurity` |
| `lrv2.roleApi`                                           | `client.roles`, `client.rolesManagement`, `client.permissions`    |
| `lrv2.sottApi`                                           | `client.sott`                                                     |
| `lrv2.socialApi` / `lrv2.nativeSocialApi`                | `client.accountSession`, `client.socialProviders`, `client.login` |
| `lrv2.configurationApi`                                  | `client.captchaConfiguration`, `client.passwordPolicy`, `client.secondFactorConfiguration`, … |
| `lrv2.webHookApi`                                        | `client.webhooks`                                                 |
| `lrv2.multiFactorAuthenticationApi`                      | `client.secondFactorConfiguration`, `client.user`, `client.login` (passkey/MFA methods)  |
| `lrv2.consentManagementApi`                              | `client.consent`                                                  |
| `lrv2.customObjectApi`                                   | `client.customObject`, `client.customObjects`, `client.accountCustomObject` |
| `lrv2.reAuthenticationApi`                               | `client.security`                                                 |

When in doubt, the IDE is authoritative — `client.` shows you the full list,
and each service has full JSDoc for the underlying endpoint.

### Side-by-side examples

#### Login by email

```js
// v11
const emailAuthenticationModel = { email, password };
lrv2.authenticationApi
  .loginByEmail(emailAuthenticationModel, '', '', '', '')
  .then((res) => console.log(res));
```

```ts
// v12
const { data } = await client.login.emailByLoginUserNamePhone({
  emailByLoginUserNamePhoneRequest: { email, password },
});
console.log(data);
```

#### Passwordless login (email)

```js
// v11
lrv2.passwordLessLoginApi.passwordlessLoginByEmail(email, '', '').then(console.log);
```

```ts
// v12
const { data } = await client.login.passwordlessLoginByEmail({ email });
console.log(data);
```

#### Get user profile by access token

```js
// v11
lrv2.authenticationApi.getProfileByAccessToken(accessToken, '', '').then(console.log);
```

```ts
// v12 — bearer-token style; pass the user's LR access_token as bearerToken
const userClient = new LoginRadius({ apiKey, bearerToken: accessToken });
const { data } = await userClient.user.getAccountDetails({});
console.log(data);
```

#### Account lookup by identity / email (server-side)

The v11 namespaced lookups (`getAccountProfileByEmail`, `getAccountProfileByUserName`,
`getAccountProfileByPhone`) collapse into a single identity query in v12.

```js
// v11
lrv2.accountApi.getAccountProfileByEmail(email, '').then(console.log);
```

```ts
// v12 — query identities, then read by UID
const { data: identities } = await client.accounts.getIdentities({ email });
if (identities.Data?.length) {
  const { data: profile } = await client.accounts.getAccountIdentityByUID({
    uid: identities.Data[0].Uid,
  });
  console.log(profile);
}
```

#### Forgot password

```js
// v11
lrv2.authenticationApi.forgotPassword(email, resetPasswordUrl, '').then(console.log);
```

```ts
// v12
const { data } = await client.password.forgotPassword({
  forgotPasswordRequest: { email },
  resetPasswordUrl,
});
console.log(data);
```

#### Change password

```js
// v11
lrv2.authenticationApi.changePassword(accessToken, newPassword, oldPassword).then(console.log);
```

```ts
// v12
const userClient = new LoginRadius({ apiKey, bearerToken: accessToken });
const { data } = await userClient.password.changePassword({
  changePassword: { newPassword, oldPassword },
});
```

#### Webhook subscription

v11's webhook method names were renamed in v12 to match the spec — the
shape is identical, only the operation name changed.

```js
// v11
lrv2.webHookApi.listAllWebhooks().then(console.log);
lrv2.webHookApi.createWebhookSubscription(payload).then(console.log);
```

```ts
// v12
const { data } = await client.webhooks.getAllWebhooksConfigurations();
const { data: created } = await client.webhooks.createWebhookConfiguration({
  webhookConfigurationRequest: payload,
});
```

Mapping cheat sheet:

| v11 method                      | v12 method                              |
| ------------------------------- | --------------------------------------- |
| `listAllWebhooks`               | `getAllWebhooksConfigurations`          |
| `createWebhookSubscription`     | `createWebhookConfiguration`            |
| `updateWebhookSubscription`     | `updateWebhookConfigurationById`        |
| `deleteWebhookSubscription`     | `deleteWebhookConfigurationById`        |
| `getWebhookSubscriptionDetail`  | `getWebhookConfigurationById`           |
| `getWebhookEvents`              | `getAllEvents`                          |

#### Custom object by access token

v11's `customObjectApi` split into three v12 services in the OpenAPI spec:

- `client.customObject` — token-context operations (`*ByToken`)
- `client.accountCustomObject` — server-side UID-context operations (`*ByUid`)
- `client.customObjects` — query-style bulk operations

```js
// v11
lrv2.customObjectApi.getCustomObjectByToken(accessToken, objectName).then(console.log);
```

```ts
// v12 — pass the user's access_token via ClientOptions
const userClient = new LoginRadius({ apiKey, accessToken });
const { data } = await userClient.customObject.getCustomObjectByToken({
  objectName,
});
```

## 4. Error handling

```js
// v11 — bare object/string in .catch
lrv2.authenticationApi.loginByEmail(model)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));   // err shape depends on the failure
```

```ts
// v12 — typed LoginRadiusError, branch on HTTP semantics
import { LoginRadius, LoginRadiusError } from 'loginradius-sdk';

try {
  const { data } = await client.login.emailByLoginUserNamePhone({ ... });
  console.log(data);
} catch (err) {
  if (err instanceof LoginRadiusError) {
    if (err.isAuth())            // 401 — re-authenticate
    else if (err.isForbidden())  // 403 — IP/domain restriction or plan limit
    else if (err.isRateLimit())  // 429 — back off
    else if (err.isServer())     // 5xx — retry later
    else console.error(err.code, err.description);
    return;
  }
  throw err;
}
```

`LoginRadiusError` populates `code`, `description`, `message`, and
`rawBody` **regardless of the response envelope shape** — both
`/identity/v2/` (capitalised `ErrorCode`) and `/api/v2/access_token/*`
(lowercase `errorCode`) are parsed transparently.

## 5. Headers and per-call overrides

v11 had no first-class header overrides — you'd reach into the request
helper. v12 exposes them as `ClientOptions`:

```ts
// Header-only credential override (uncommon — useful behind a gateway)
const client = new LoginRadius({
  apiKey: 'query-side-key',
  xLoginRadiusApiKey: 'header-side-key',     // overrides X-LoginRadius-ApiKey only
  xLoginRadiusApiSecret: 'header-side-secret',
});
```

Per-call axios overrides go through the second argument every generated
method accepts:

```ts
const { data } = await client.login.checkUserNameAvailability(
  { username: 'alice' },
  { timeout: 5000, headers: { 'X-Trace-Id': traceId } },
);
```

## 6. Deliberate differences from v11

These are settled decisions, not gaps waiting on a release.

- **Built-in proxy config** — set `proxy` on a custom axios instance and pass
  via `httpClient` instead. See `examples/custom-http/`. Note v11's `proxy`
  option was a **no-op**: it assigned `options.proxy` to `https.request`, which
  has no such option. `httpClient` is the first working proxy support in the
  Node line.
- **`siteName`-driven email template selection** — configure server-side or
  pass the relevant template names per call. v11 accepted `siteName` but never
  read it.

### Available since v12.0

Earlier drafts of this guide listed these as missing. They ship today:

| v11 concept | v12 |
|---|---|
| `apiRequestSigning` | `apiRequestSigning: true` — opt-in, off by default. Do **not** treat v11 as a reference implementation: it signed `options.uri`/`options.body`, neither of which was ever set, so every v11 signature was computed over the literal string `"undefined"`. |
| `serverRegion` | `serverRegion` — sets the `region` query parameter. (`domain`/`customDomain` select a *tenant* on the hub, not a region.) |
| *(none — new)* | `validateJWT(token, { algorithm, key })` verifies a LoginRadius-issued JWT locally: signature, `exp`, `nbf`, optional issuer and audience. Neither v11 nor early v12 had it. The algorithm is supplied by you and never read from the token header — see the README for why that matters. |

## 7. Migration recipe

A pragmatic order if you're moving a large integration:

1. **Inventory.** `grep` your codebase for `loginradius-sdk` and list every
   namespace + method you call.
2. **Install v12 in parallel.** Don't remove v11 yet — keep both in
   `package.json` under separate names if you want. (You can `npm install
   loginradius-sdk-v11@npm:loginradius-sdk@11` to alias.)
3. **Port one flow at a time.** Pick the smallest one — usually
   `checkUserNameAvailability` or a public availability check.
4. **Update error handling** from `.catch(err => ...)` to
   `instanceof LoginRadiusError`. Lift error-branching into a small helper.
5. **Switch to `try/catch` + `async/await`.** v12 is async-first; you'll see
   the typed responses better.
6. **Remove `loginradius-sdk@11`** once every flow is on v12.

## 8. Getting help

- Per-auth-scheme runnable demos live under `v12/examples/`.
- File an issue: <https://github.com/LoginRadius/node-js-sdk/issues> —
  include both v11 and v12 snippets so we can confirm the mapping.
- Security-sensitive concerns: `security@loginradius.com` — please email rather
  than opening a public issue.

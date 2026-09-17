[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / ClientOptions

# Interface: ClientOptions

Options accepted by the [LoginRadius](../classes/LoginRadius.md) constructor. Supply only the
credentials your endpoints require — the SDK validates that at least one is
present and injects each one on every outgoing request.

Credentials are sent as headers wherever the API accepts them, and as
fallback query parameters for the legacy operations that only accept
query-scheme credentials.

## Properties

### accessToken?

> `optional` **accessToken?**: `string`

The user-context access_token. Required for endpoints that operate on
the signed-in user's own profile or sessions.

***

### apiKey?

> `optional` **apiKey?**: `string`

Tenant API key. Sent as the `X-LoginRadius-ApiKey` header (preferred)
with the legacy `apikey=` query parameter as a compatibility fallback.

***

### apiRequestSigning?

> `optional` **apiRequestSigning?**: `boolean`

Enables request signing (the `digest` and `x-Request-Expires`
headers) for management endpoints.

Off by default. Requires [apiSecret](#apisecret) — the signature is an HMAC over
the tenant secret. Server-side only.

***

### apiSecret?

> `optional` **apiSecret?**: `string`

Tenant API secret. Sent as the `X-LoginRadius-ApiSecret` header
(preferred) with the legacy `apisecret=` query parameter as a
compatibility fallback.

Server-side only — never expose this in a browser or mobile context.

***

### baseURL?

> `optional` **baseURL?**: `string`

Explicit base URL override. Use only for staging or proxy environments —
production traffic should rely on `domain`.

Resolves to `<baseURL>`.

***

### bearerToken?

> `optional` **bearerToken?**: `string`

The token used by endpoints secured with the BearerToken scheme, sent as
`Authorization: Bearer <token>`. Wins over m2mBearerToken when both are
set.

***

### clientId?

> `optional` **clientId?**: `string`

The application client_id used by OAuth-style endpoints.

***

### clientSecret?

> `optional` **clientSecret?**: `string`

The application client_secret used by OAuth-style endpoints.

Server-side only — never expose this in a browser or mobile context.

***

### customDomain?

> `optional` **customDomain?**: `string`

Customer-hosted base URL.

Resolves to `https://<customDomain>`.

***

### debug?

> `optional` **debug?**: `boolean` \| ((`message`) => `void`)

Logs a one-line summary of every request and response.

Credential and signing header VALUES are replaced with
`[REDACTED]` — the logger only ever sees header names. Pass a
function to route the output, or `true` for `console.error`.

***

### defaultHeaders?

> `optional` **defaultHeaders?**: `Record`\<`string`, `string`\>

Headers merged into every outgoing request.

Applied at the LOWEST precedence: the SDK's own credential, User-Agent,
and signing headers always win, so a default header can never mask a
credential.

***

### domain?

> `optional` **domain?**: `string`

Multi-tenant hosted-page server.

Resolves to `https://<domain>.hub.loginradius.com`.

***

### fields?

> `optional` **fields?**: `string`

Global response-field selector applied to every request. Replaces v11's
fieldsParam/fieldsValue pair, which required the caller to supply the
query separator; pass only the value here.

***

### httpClient?

> `optional` **httpClient?**: `AxiosInstance`

Caller-supplied axios instance. The SDK installs request/response
interceptors on it for credential injection and error mapping; existing
config (proxy, httpsAgent, transformRequest, etc.) is preserved.

[timeout](#timeout) is applied to this instance only when you set it
explicitly — the SDK will not impose its own default on an instance you
configured yourself.

***

### m2mBearerToken?

> `optional` **m2mBearerToken?**: `string`

The JWT used for machine-to-machine endpoints.

***

### originIp?

> `optional` **originIp?**: `string`

The end user's IP address, forwarded for risk-based authentication and
audit trails. Deliberately NOT in the OpenAPI spec — v11 sent it as a
client-wide header, so the facade does the same.

***

### preventWebhook?

> `optional` **preventWebhook?**: `boolean`

Suppresses webhook delivery for every request from this client.
Individual operations also accept a per-call parameter.

***

### serverIndex?

> `optional` **serverIndex?**: `number`

Selects which server entry to use for the operations the spec pins to
their own host list.

You rarely need this: an explicit [baseURL](#baseurl) already overrides those
pins, and [domain](#domain) / [customDomain](#customdomain) fill their template
variables. Use it only to target a specific alternate host the spec
declares.

***

### serverRegion?

> `optional` **serverRegion?**: `string`

Routes requests to a regional API host. Distinct from domain and
customDomain, which select a tenant rather than a region.

***

### timeout?

> `optional` **timeout?**: `number`

Request timeout in milliseconds. Default 30000. Ignored when [httpClient](#httpclient) is set.

***

### userAgent?

> `optional` **userAgent?**: `string`

User-Agent header. Default `loginradius-node/12.0.0-rc.1`.

***

### xLoginRadiusApiKey?

> `optional` **xLoginRadiusApiKey?**: `string`

Overrides the value sent in the `X-LoginRadius-ApiKey` header. Normally
unnecessary — `apiKey` already populates the header. Use this only when
the header credential must differ from the query-param credential (e.g.
routing through an internal gateway that rewrites one but not the
other).

***

### xLoginRadiusApiSecret?

> `optional` **xLoginRadiusApiSecret?**: `string`

Overrides the value sent in the `X-LoginRadius-ApiSecret` header. See
`xLoginRadiusApiKey` for when this is useful.

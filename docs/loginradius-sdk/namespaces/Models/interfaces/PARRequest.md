[**loginradius-sdk**](../../../../README.md)

***

[loginradius-sdk](../../../../README.md) / [Models](../README.md) / PARRequest

# Interface: PARRequest

## Export

PARRequest

## Properties

### acr\_values?

> `optional` **acr\_values?**: `string`

Space-separated list of requested Authentication Context Class Reference values.

#### Memberof

PARRequest

***

### authorization\_details?

> `optional` **authorization\_details?**: `string`

JSON-encoded array of authorization detail objects per RFC 9396 (Rich Authorization Requests). Requires RAR to be enabled on the application.

#### Memberof

PARRequest

***

### claims?

> `optional` **claims?**: `string`

JSON-encoded claims request object specifying desired claims in the ID Token or userinfo response.

#### Memberof

PARRequest

***

### client\_id

> **client\_id**: `string`

OAuth 2.0 client identifier.

#### Memberof

PARRequest

***

### client\_secret?

> `optional` **client\_secret?**: `string`

Client secret. Optional when client credentials are provided via HTTP Basic Authentication in the Authorization header.

#### Memberof

PARRequest

***

### code\_challenge?

> `optional` **code\_challenge?**: `string`

PKCE code challenge derived from the code_verifier (RFC 7636).

#### Memberof

PARRequest

***

### code\_challenge\_method?

> `optional` **code\_challenge\_method?**: [`PARRequestCodeChallengeMethodEnum`](../enumerations/PARRequestCodeChallengeMethodEnum.md)

PKCE code challenge transformation method.

#### Memberof

PARRequest

***

### display?

> `optional` **display?**: [`PARRequestDisplayEnum`](../enumerations/PARRequestDisplayEnum.md)

How the authorization server displays the authentication UI to the end-user.

#### Memberof

PARRequest

***

### id\_token\_hint?

> `optional` **id\_token\_hint?**: `string`

Previously issued ID Token passed as a hint about the authenticated end-user.

#### Memberof

PARRequest

***

### login\_hint?

> `optional` **login\_hint?**: `string`

Hint about the end-user login identifier (email or phone).

#### Memberof

PARRequest

***

### max\_age?

> `optional` **max\_age?**: `string`

Maximum authentication age in seconds. Requires re-authentication if exceeded.

#### Memberof

PARRequest

***

### nonce?

> `optional` **nonce?**: `string`

String associating a client session with an ID Token. Required when response_type includes id_token.

#### Memberof

PARRequest

***

### org\_id?

> `optional` **org\_id?**: `string`

B2B organization identifier. Only valid when B2B features are enabled on the app.

#### Memberof

PARRequest

***

### prompt?

> `optional` **prompt?**: [`PARRequestPromptEnum`](../enumerations/PARRequestPromptEnum.md)

Controls whether the authorization server prompts the user for re-authentication.

#### Memberof

PARRequest

***

### redirect\_uri

> **redirect\_uri**: `string`

Redirect URI registered for the client.

#### Memberof

PARRequest

***

### resource?

> `optional` **resource?**: `string`

Resource indicator (RFC 8707) identifying the target API. Must match a configured API resource on the authorization server.

#### Memberof

PARRequest

***

### response\_mode?

> `optional` **response\_mode?**: [`PARRequestResponseModeEnum`](../enumerations/PARRequestResponseModeEnum.md)

Mechanism for returning authorization response parameters to the client.

#### Memberof

PARRequest

***

### response\_type

> **response\_type**: `string`

Space-separated list of desired response types. Valid values: code, token, id_token.

#### Memberof

PARRequest

***

### scope

> **scope**: `string`

Space-separated list of requested scopes. Must include openid for OIDC flows.

#### Memberof

PARRequest

***

### state?

> `optional` **state?**: `string`

Opaque value to maintain state between the request and the callback.

#### Memberof

PARRequest

***

### ui\_locales?

> `optional` **ui\_locales?**: `string`

Space-separated list of preferred UI display locales.

#### Memberof

PARRequest

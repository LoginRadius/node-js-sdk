[**loginradius-sdk**](../../../../README.md)

***

[loginradius-sdk](../../../../README.md) / [Models](../README.md) / OAuthDynamicClientRequest

# Interface: OAuthDynamicClientRequest

## Export

OAuthDynamicClientRequest

## Properties

### application\_type?

> `optional` **application\_type?**: [`OAuthDynamicClientRequestApplicationTypeEnum`](../enumerations/OAuthDynamicClientRequestApplicationTypeEnum.md)

Kind of application. Defaults to \"web\".

#### Memberof

OAuthDynamicClientRequest

***

### backchannel\_logout\_session\_required?

> `optional` **backchannel\_logout\_session\_required?**: `boolean`

Whether the OP must include a sid claim in logout tokens.

#### Memberof

OAuthDynamicClientRequest

***

### backchannel\_logout\_uri?

> `optional` **backchannel\_logout\_uri?**: `string`

URL to which the OP sends logout tokens (OIDC Back-Channel Logout).

#### Memberof

OAuthDynamicClientRequest

***

### client\_name

> **client\_name**: `string`

Human-readable name of the client.

#### Memberof

OAuthDynamicClientRequest

***

### client\_uri?

> `optional` **client\_uri?**: `string`

URL of the client\'s home page.

#### Memberof

OAuthDynamicClientRequest

***

### contacts?

> `optional` **contacts?**: `string`[]

Contact email addresses for the client.

#### Memberof

OAuthDynamicClientRequest

***

### grant\_types?

> `optional` **grant\_types?**: `string`[]

OAuth 2.0 grant types the client will use. Defaults to [\"authorization_code\"].

#### Memberof

OAuthDynamicClientRequest

***

### id\_token\_signed\_response\_alg?

> `optional` **id\_token\_signed\_response\_alg?**: `string`

JWS algorithm for signing ID tokens. Defaults to RS256.

#### Memberof

OAuthDynamicClientRequest

***

### jwks?

> `optional` **jwks?**: `object`

Inline JSON Web Key Set. Mutually exclusive with jwks_uri.

#### Memberof

OAuthDynamicClientRequest

***

### jwks\_uri?

> `optional` **jwks\_uri?**: `string`

URL of the client\'s JWKS document. Mutually exclusive with jwks.

#### Memberof

OAuthDynamicClientRequest

***

### logo\_uri?

> `optional` **logo\_uri?**: `string`

URL of the client\'s logo image.

#### Memberof

OAuthDynamicClientRequest

***

### policy\_uri?

> `optional` **policy\_uri?**: `string`

URL of the client\'s Privacy Policy.

#### Memberof

OAuthDynamicClientRequest

***

### post\_logout\_redirect\_uris?

> `optional` **post\_logout\_redirect\_uris?**: `string`[]

Post-logout redirect URIs.

#### Memberof

OAuthDynamicClientRequest

***

### redirect\_uris

> **redirect\_uris**: `string`[]

Redirect URIs for redirect-based flows. Required.

#### Memberof

OAuthDynamicClientRequest

***

### request\_uris?

> `optional` **request\_uris?**: `string`[]

Pre-registered request_uri values for JAR (JWT Authorization Request).

#### Memberof

OAuthDynamicClientRequest

***

### response\_types?

> `optional` **response\_types?**: `string`[]

OAuth 2.0 response types. Defaults to [\"code\"].

#### Memberof

OAuthDynamicClientRequest

***

### scope?

> `optional` **scope?**: `string`

Space-separated scopes the client may request.

#### Memberof

OAuthDynamicClientRequest

***

### software\_id?

> `optional` **software\_id?**: `string`

Unique identifier for the client software.

#### Memberof

OAuthDynamicClientRequest

***

### software\_version?

> `optional` **software\_version?**: `string`

Version of the client software.

#### Memberof

OAuthDynamicClientRequest

***

### token\_endpoint\_auth\_method?

> `optional` **token\_endpoint\_auth\_method?**: [`OAuthDynamicClientRequestTokenEndpointAuthMethodEnum`](../enumerations/OAuthDynamicClientRequestTokenEndpointAuthMethodEnum.md)

Client authentication method at the token endpoint.

#### Memberof

OAuthDynamicClientRequest

***

### tos\_uri?

> `optional` **tos\_uri?**: `string`

URL of the client\'s Terms of Service.

#### Memberof

OAuthDynamicClientRequest

***

### userinfo\_signed\_response\_alg?

> `optional` **userinfo\_signed\_response\_alg?**: `string`

JWS algorithm for signing UserInfo responses. If set, UserInfo returns a signed JWT.

#### Memberof

OAuthDynamicClientRequest

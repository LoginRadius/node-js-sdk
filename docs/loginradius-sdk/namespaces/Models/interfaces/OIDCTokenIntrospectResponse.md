[**loginradius-sdk**](../../../../README.md)

***

[loginradius-sdk](../../../../README.md) / [Models](../README.md) / OIDCTokenIntrospectResponse

# Interface: OIDCTokenIntrospectResponse

OIDC Token Introspection Response (RFC 7662). When active is false, only active is returned. When active is true, standard claims may be included.

## Export

OIDCTokenIntrospectResponse

## Properties

### active

> **active**: `boolean`

True if the token is valid and active; false otherwise.

#### Memberof

OIDCTokenIntrospectResponse

***

### aud?

> `optional` **aud?**: `string`[]

Audience

#### Memberof

OIDCTokenIntrospectResponse

***

### azp?

> `optional` **azp?**: `string`

Authorized party

#### Memberof

OIDCTokenIntrospectResponse

***

### cid?

> `optional` **cid?**: `string`

Client ID (audience/client)

#### Memberof

OIDCTokenIntrospectResponse

***

### exp?

> `optional` **exp?**: `number`

Expiration time (Unix)

#### Memberof

OIDCTokenIntrospectResponse

***

### gty?

> `optional` **gty?**: `string`

Grant type (e.g. authorization_code, refresh_token, password)

#### Memberof

OIDCTokenIntrospectResponse

***

### iat?

> `optional` **iat?**: `number`

Issued at (Unix)

#### Memberof

OIDCTokenIntrospectResponse

***

### iss?

> `optional` **iss?**: `string`

Issuer

#### Memberof

OIDCTokenIntrospectResponse

***

### jti?

> `optional` **jti?**: `string`

JWT ID

#### Memberof

OIDCTokenIntrospectResponse

***

### nbf?

> `optional` **nbf?**: `number`

Not before (Unix)

#### Memberof

OIDCTokenIntrospectResponse

***

### scp?

> `optional` **scp?**: `string`[]

Scopes

#### Memberof

OIDCTokenIntrospectResponse

***

### sub?

> `optional` **sub?**: `string`

Subject (e.g. user or client identifier)

#### Memberof

OIDCTokenIntrospectResponse

[**loginradius-sdk**](../../../../README.md)

***

[loginradius-sdk](../../../../README.md) / [Models](../README.md) / OidcConnectionBase

# Interface: OidcConnectionBase

## Export

OidcConnectionBase

## Properties

### AuthorizationUrl?

> `optional` **AuthorizationUrl?**: `string`

The URL to the OpenID Connect provider\'s authorization endpoint. This is where users are redirected to authenticate and authorize access.

#### Memberof

OidcConnectionBase

***

### ClientId?

> `optional` **ClientId?**: `string`

The client identifier issued to the application by the OpenID Connect provider. This is used to identify the application during the authentication process.

#### Memberof

OidcConnectionBase

***

### ClientSecret?

> `optional` **ClientSecret?**: `string`

The client secret issued to the application by the OpenID Connect provider. This is used to authenticate the application when requesting tokens.

#### Memberof

OidcConnectionBase

***

### Issuer?

> `optional` **Issuer?**: `string`

The issuer identifier for the OpenID Connect provider. This is typically the base URL of the provider and is used to validate tokens.

#### Memberof

OidcConnectionBase

***

### JWKSEndpoint?

> `optional` **JWKSEndpoint?**: `string`

The JWKS endpoint for verifying the ID token.

#### Memberof

OidcConnectionBase

***

### Scopes?

> `optional` **Scopes?**: `string`[]

The scopes requested by the application during the authentication process. Scopes define the access level and Permissions granted to the application.

#### Memberof

OidcConnectionBase

***

### TokenAuthMethod?

> `optional` **TokenAuthMethod?**: `string`

The method used to authenticate the application when requesting tokens. Common methods include `client_secret_post` and `client_secret_basic`.

#### Memberof

OidcConnectionBase

***

### TokenUrl?

> `optional` **TokenUrl?**: `string`

The URL to the OpenID Connect provider\'s token endpoint. This is where the application exchanges the authorization code for tokens.

#### Memberof

OidcConnectionBase

***

### UserInfoExtractByIdToken?

> `optional` **UserInfoExtractByIdToken?**: `boolean` \| `null`

Indicates if user info should be extracted by ID token.

#### Memberof

OidcConnectionBase

***

### UserInfoUrl?

> `optional` **UserInfoUrl?**: `string`

The URL to the OpenID Connect provider\'s UserInfo endpoint.

#### Memberof

OidcConnectionBase

[**loginradius-sdk**](../../../../README.md)

***

[loginradius-sdk](../../../../README.md) / [Models](../README.md) / OAuthClientRequest

# Interface: OAuthClientRequest

## Export

OAuthClientRequest

## Properties

### AccessTokenMappingTemplate?

> `optional` **AccessTokenMappingTemplate?**: `string`

#### Memberof

OAuthClientRequest

***

### AllowedCorsOrigin?

> `optional` **AllowedCorsOrigin?**: `string`[]

#### Memberof

OAuthClientRequest

***

### AllowedScopes?

> `optional` **AllowedScopes?**: [`OAuthClientRequestAllowedScopesEnum`](../enumerations/OAuthClientRequestAllowedScopesEnum.md)[]

#### Memberof

OAuthClientRequest

***

### AudienceScopes?

> `optional` **AudienceScopes?**: `object`

#### Index Signature

\[`key`: `string`\]: `string`[]

#### Memberof

OAuthClientRequest

***

### BackChannelLogout?

> `optional` **BackChannelLogout?**: [`OAuthClientRequestBackChannelLogout`](OAuthClientRequestBackChannelLogout.md) \| `null`

#### Memberof

OAuthClientRequest

***

### ClientType?

> `optional` **ClientType?**: [`OAuthClientRequestClientTypeEnum`](../enumerations/OAuthClientRequestClientTypeEnum.md)

Whether the client can keep a secret confidential. `confidential` clients (server-side / M2M) authenticate with their secret; `public` clients (SPA / native) default to token endpoint auth method `none` and rely on PKCE. When omitted it is derived server-side from the resolved token endpoint auth method.

#### Memberof

OAuthClientRequest

***

### Connections?

> `optional` **Connections?**: [`OAuthClientRequestConnections`](OAuthClientRequestConnections.md)

#### Memberof

OAuthClientRequest

***

### Description?

> `optional` **Description?**: `string`

Optional free-text description of the application, shown only in the admin console (never exposed to end users).

#### Memberof

OAuthClientRequest

***

### DeviceCodeConfig?

> `optional` **DeviceCodeConfig?**: [`OAuthClientRequestDeviceCodeConfig`](OAuthClientRequestDeviceCodeConfig.md) \| `null`

#### Memberof

OAuthClientRequest

***

### EnableCorsOrigin?

> `optional` **EnableCorsOrigin?**: `boolean`

#### Memberof

OAuthClientRequest

***

### ForceReAuthentication?

> `optional` **ForceReAuthentication?**: `boolean`

#### Memberof

OAuthClientRequest

***

### GrantTypes?

> `optional` **GrantTypes?**: [`OAuthClientRequestGrantTypesEnum`](../enumerations/OAuthClientRequestGrantTypesEnum.md)[]

#### Memberof

OAuthClientRequest

***

### IdTokenAudiences?

> `optional` **IdTokenAudiences?**: `string`[]

#### Memberof

OAuthClientRequest

***

### IdTokenMappingTemplate?

> `optional` **IdTokenMappingTemplate?**: `string`

#### Memberof

OAuthClientRequest

***

### JwtTokenConfig?

> `optional` **JwtTokenConfig?**: [`OAuthClientRequestJwtTokenConfig`](OAuthClientRequestJwtTokenConfig.md) \| `null`

#### Memberof

OAuthClientRequest

***

### LoginRedirectUri?

> `optional` **LoginRedirectUri?**: `string`[]

#### Memberof

OAuthClientRequest

***

### LoginUrl?

> `optional` **LoginUrl?**: `string` \| `null`

#### Memberof

OAuthClientRequest

***

### LogoutRedirectUri?

> `optional` **LogoutRedirectUri?**: `string`[]

#### Memberof

OAuthClientRequest

***

### Mapping?

> `optional` **Mapping?**: `object`

#### Index Signature

\[`key`: `string`\]: `string`

#### Memberof

OAuthClientRequest

***

### Metadata?

> `optional` **Metadata?**: `object`

#### Index Signature

\[`key`: `string`\]: `string`

#### Memberof

OAuthClientRequest

***

### RedirectURIExactMatch?

> `optional` **RedirectURIExactMatch?**: `boolean`

#### Memberof

OAuthClientRequest

***

### RefreshTokenRotation?

> `optional` **RefreshTokenRotation?**: [`OAuthClientResponseRefreshTokenRotation`](OAuthClientResponseRefreshTokenRotation.md) \| `null`

#### Memberof

OAuthClientRequest

***

### RefreshTokenTTL?

> `optional` **RefreshTokenTTL?**: `number` \| `null`

#### Memberof

OAuthClientRequest

***

### Secret?

> `optional` **Secret?**: `string`

#### Memberof

OAuthClientRequest

***

### SessionTokenTTL?

> `optional` **SessionTokenTTL?**: `number` \| `null`

#### Memberof

OAuthClientRequest

***

### SignedUserInfo?

> `optional` **SignedUserInfo?**: `boolean`

#### Memberof

OAuthClientRequest

***

### TokenAuthMethod?

> `optional` **TokenAuthMethod?**: [`OAuthClientRequestTokenAuthMethodEnum`](../enumerations/OAuthClientRequestTokenAuthMethodEnum.md)

#### Memberof

OAuthClientRequest

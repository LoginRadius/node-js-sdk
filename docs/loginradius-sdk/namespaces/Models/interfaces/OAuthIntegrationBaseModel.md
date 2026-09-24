[**loginradius-sdk**](../../../../README.md)

***

[loginradius-sdk](../../../../README.md) / [Models](../README.md) / OAuthIntegrationBaseModel

# Interface: OAuthIntegrationBaseModel

## Export

OAuthIntegrationBaseModel

## Properties

### AccessTokenMappingTemplate?

> `optional` **AccessTokenMappingTemplate?**: `string`

#### Memberof

OAuthIntegrationBaseModel

***

### AccessTokenTTL?

> `optional` **AccessTokenTTL?**: `number`

Access token lifetime in seconds. Defaults to 3600 when omitted.

#### Memberof

OAuthIntegrationBaseModel

***

### AllowedScopes?

> `optional` **AllowedScopes?**: [`OAuthIntegrationBaseModelAllowedScopesEnum`](../enumerations/OAuthIntegrationBaseModelAllowedScopesEnum.md)[]

#### Memberof

OAuthIntegrationBaseModel

***

### Connections?

> `optional` **Connections?**: [`OAuthIntegrationBaseModelConnections`](OAuthIntegrationBaseModelConnections.md)

#### Memberof

OAuthIntegrationBaseModel

***

### DefaultWorkflow?

> `optional` **DefaultWorkflow?**: `string`

Name of the identity-orchestration workflow the authorize request falls back to when it carries no workflow parameter. Requires the IDENTITY_ORCHESTRATION feature; ignored when it is disabled. The workflow must already exist on the tenant, otherwise the request is rejected as an invalid integration configuration. Surrounding whitespace is trimmed; send an empty or blank string to clear it.

#### Memberof

OAuthIntegrationBaseModel

***

### EnablePKCE?

> `optional` **EnablePKCE?**: `boolean`

#### Memberof

OAuthIntegrationBaseModel

***

### GrantTypes?

> `optional` **GrantTypes?**: [`OAuthIntegrationBaseModelGrantTypesEnum`](../enumerations/OAuthIntegrationBaseModelGrantTypesEnum.md)[]

Only authorization_code and refresh_token are permitted for OAuth integrations.

#### Memberof

OAuthIntegrationBaseModel

***

### IdTokenMappingTemplate?

> `optional` **IdTokenMappingTemplate?**: `string`

#### Memberof

OAuthIntegrationBaseModel

***

### IDTokenTTL?

> `optional` **IDTokenTTL?**: `number`

ID token lifetime in seconds. Defaults to 3600 when omitted.

#### Memberof

OAuthIntegrationBaseModel

***

### IntegrationType?

> `optional` **IntegrationType?**: `string`

#### Memberof

OAuthIntegrationBaseModel

***

### IsPrebuiltIntegration?

> `optional` **IsPrebuiltIntegration?**: `boolean`

#### Memberof

OAuthIntegrationBaseModel

***

### RedirectURIs?

> `optional` **RedirectURIs?**: `string`[]

#### Memberof

OAuthIntegrationBaseModel

***

### RefreshTokenTTL?

> `optional` **RefreshTokenTTL?**: `number`

Refresh token lifetime in seconds. Defaults to 86400 when omitted.

#### Memberof

OAuthIntegrationBaseModel

***

### TokenAuthMethod?

> `optional` **TokenAuthMethod?**: [`OAuthIntegrationBaseModelTokenAuthMethodEnum`](../enumerations/OAuthIntegrationBaseModelTokenAuthMethodEnum.md)

Token-endpoint client authentication method. Defaults to client_secret_post when omitted.

#### Memberof

OAuthIntegrationBaseModel

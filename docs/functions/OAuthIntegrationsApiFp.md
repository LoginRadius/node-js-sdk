[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / OAuthIntegrationsApiFp

# Function: OAuthIntegrationsApiFp()

> **OAuthIntegrationsApiFp**(`configuration?`): `object`

OAuthIntegrationsApi - functional programming interface

## Parameters

### configuration?

`Configuration`

## Returns

### createOAuthIntegration()

> **createOAuthIntegration**(`createOAuthIntegrationRequest`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`OAuthIntegrationResponse`](../loginradius-sdk/namespaces/Models/type-aliases/OAuthIntegrationResponse.md)\>\>

Creates a new OAuth/OIDC integration configuration for the Tenant. The response returns the integration\'s identifier (Id), which is also the {oAuthApp} segment of the runtime OAuth/OIDC endpoints. Only the authorization_code and refresh_token grant types are permitted.

#### Parameters

##### createOAuthIntegrationRequest

[`CreateOAuthIntegrationRequest`](../loginradius-sdk/namespaces/Models/type-aliases/CreateOAuthIntegrationRequest.md)

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`OAuthIntegrationResponse`](../loginradius-sdk/namespaces/Models/type-aliases/OAuthIntegrationResponse.md)\>\>

#### Throws

### deleteOAuthIntegration()

> **deleteOAuthIntegration**(`integrationId`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md)\>\>

Deletes an existing OAuth/OIDC integration configuration for the Tenant using its Id, permanently removing it.

#### Parameters

##### integrationId

`string`

The OAuth integration identifier. It is the integration\&#39;s OAuth application name, so the same value is the {oAuthApp} path segment of the runtime OAuth/OIDC endpoints (e.g. /api/oidc/{integrationId}/token).

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md)\>\>

#### Throws

### getAllOAuthIntegrations()

> **getAllOAuthIntegrations**(`options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`GetAllOAuthIntegrations200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetAllOAuthIntegrations200Response.md)\>\>

Retrieves a list of all configured OAuth/OIDC integrations for the Tenant, including redirect URIs, allowed scopes, grant types, claim mappings, and token settings.

#### Parameters

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`GetAllOAuthIntegrations200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetAllOAuthIntegrations200Response.md)\>\>

#### Throws

### getOAuthIntegrationById()

> **getOAuthIntegrationById**(`integrationId`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`OAuthIntegrationResponse`](../loginradius-sdk/namespaces/Models/type-aliases/OAuthIntegrationResponse.md)\>\>

Retrieves the details of a specific OAuth/OIDC integration configuration for the Tenant using its Id, including redirect URIs, scopes, grant types, claim mappings, and token settings.

#### Parameters

##### integrationId

`string`

The OAuth integration identifier. It is the integration\&#39;s OAuth application name, so the same value is the {oAuthApp} path segment of the runtime OAuth/OIDC endpoints (e.g. /api/oidc/{integrationId}/token).

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`OAuthIntegrationResponse`](../loginradius-sdk/namespaces/Models/type-aliases/OAuthIntegrationResponse.md)\>\>

#### Throws

### rotateOAuthIntegrationCredentials()

> **rotateOAuthIntegrationCredentials**(`integrationId`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`OAuthIntegrationCredentialsResponse`](../loginradius-sdk/namespaces/Models/interfaces/OAuthIntegrationCredentialsResponse.md)\>\>

Regenerates the client secret for an existing OAuth/OIDC integration identified by its Id. The ClientId and Id are unchanged; only the secret is rotated. The new plaintext ClientSecret is returned once in this response, and only its hash is persisted server-side.

#### Parameters

##### integrationId

`string`

The OAuth integration identifier. It is the integration\&#39;s OAuth application name, so the same value is the {oAuthApp} path segment of the runtime OAuth/OIDC endpoints (e.g. /api/oidc/{integrationId}/token).

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`OAuthIntegrationCredentialsResponse`](../loginradius-sdk/namespaces/Models/interfaces/OAuthIntegrationCredentialsResponse.md)\>\>

#### Throws

### updateOAuthIntegrationById()

> **updateOAuthIntegrationById**(`integrationId`, `oAuthIntegrationBaseModel`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`OAuthIntegrationResponse`](../loginradius-sdk/namespaces/Models/type-aliases/OAuthIntegrationResponse.md)\>\>

Updates an existing OAuth/OIDC integration configuration for the Tenant identified by its Id. Id and DisplayName are immutable; only configuration fields are updated. Omitting a field leaves its stored value unchanged, as does a token lifetime of 0; passing an explicit empty AllowedScopes array removes all scopes from the integration.

#### Parameters

##### integrationId

`string`

The OAuth integration identifier. It is the integration\&#39;s OAuth application name, so the same value is the {oAuthApp} path segment of the runtime OAuth/OIDC endpoints (e.g. /api/oidc/{integrationId}/token).

##### oAuthIntegrationBaseModel

[`OAuthIntegrationBaseModel`](../loginradius-sdk/namespaces/Models/interfaces/OAuthIntegrationBaseModel.md)

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`OAuthIntegrationResponse`](../loginradius-sdk/namespaces/Models/type-aliases/OAuthIntegrationResponse.md)\>\>

#### Throws

## Export

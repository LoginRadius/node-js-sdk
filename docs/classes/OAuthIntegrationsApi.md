[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / OAuthIntegrationsApi

# Class: OAuthIntegrationsApi

OAuthIntegrationsApi - object-oriented interface

## Export

OAuthIntegrationsApi

## Extends

- `BaseAPI`

## Implements

- [`OAuthIntegrationsApiInterface`](../interfaces/OAuthIntegrationsApiInterface.md)

## Constructors

### Constructor

> **new OAuthIntegrationsApi**(`configuration?`, `basePath?`, `axios?`): `OAuthIntegrationsApi`

#### Parameters

##### configuration?

`Configuration`

##### basePath?

`string` = `BASE_PATH`

##### axios?

`AxiosInstance` = `globalAxios`

#### Returns

`OAuthIntegrationsApi`

#### Inherited from

`BaseAPI.constructor`

## Properties

### axios

> `protected` **axios**: `AxiosInstance` = `globalAxios`

#### Inherited from

`BaseAPI.axios`

***

### basePath

> `protected` **basePath**: `string` = `BASE_PATH`

#### Inherited from

`BaseAPI.basePath`

***

### configuration

> `protected` **configuration**: `Configuration` \| `undefined`

#### Inherited from

`BaseAPI.configuration`

## Methods

### createOAuthIntegration()

> **createOAuthIntegration**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`OAuthIntegrationResponse`](../loginradius-sdk/namespaces/Models/type-aliases/OAuthIntegrationResponse.md), `any`, \{ \}, `any`\>\>

Creates a new OAuth/OIDC integration configuration for the Tenant. The response returns the integration\'s identifier (Id), which is also the {oAuthApp} segment of the runtime OAuth/OIDC endpoints. Only the authorization_code and refresh_token grant types are permitted.

#### Parameters

##### requestParameters

[`OAuthIntegrationsApiCreateOAuthIntegrationRequest`](../interfaces/OAuthIntegrationsApiCreateOAuthIntegrationRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`OAuthIntegrationResponse`](../loginradius-sdk/namespaces/Models/type-aliases/OAuthIntegrationResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

OAuthIntegrationsApi

#### Implementation of

[`OAuthIntegrationsApiInterface`](../interfaces/OAuthIntegrationsApiInterface.md).[`createOAuthIntegration`](../interfaces/OAuthIntegrationsApiInterface.md#createoauthintegration)

***

### deleteOAuthIntegration()

> **deleteOAuthIntegration**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md), `any`, \{ \}, `any`\>\>

Deletes an existing OAuth/OIDC integration configuration for the Tenant using its Id, permanently removing it.

#### Parameters

##### requestParameters

[`OAuthIntegrationsApiDeleteOAuthIntegrationRequest`](../interfaces/OAuthIntegrationsApiDeleteOAuthIntegrationRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

OAuthIntegrationsApi

#### Implementation of

[`OAuthIntegrationsApiInterface`](../interfaces/OAuthIntegrationsApiInterface.md).[`deleteOAuthIntegration`](../interfaces/OAuthIntegrationsApiInterface.md#deleteoauthintegration)

***

### getAllOAuthIntegrations()

> **getAllOAuthIntegrations**(`options?`): `Promise`\<`AxiosResponse`\<[`GetAllOAuthIntegrations200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetAllOAuthIntegrations200Response.md), `any`, \{ \}, `any`\>\>

Retrieves a list of all configured OAuth/OIDC integrations for the Tenant, including redirect URIs, allowed scopes, grant types, claim mappings, and token settings.

#### Parameters

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`GetAllOAuthIntegrations200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetAllOAuthIntegrations200Response.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

OAuthIntegrationsApi

#### Implementation of

[`OAuthIntegrationsApiInterface`](../interfaces/OAuthIntegrationsApiInterface.md).[`getAllOAuthIntegrations`](../interfaces/OAuthIntegrationsApiInterface.md#getalloauthintegrations)

***

### getOAuthIntegrationById()

> **getOAuthIntegrationById**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`OAuthIntegrationResponse`](../loginradius-sdk/namespaces/Models/type-aliases/OAuthIntegrationResponse.md), `any`, \{ \}, `any`\>\>

Retrieves the details of a specific OAuth/OIDC integration configuration for the Tenant using its Id, including redirect URIs, scopes, grant types, claim mappings, and token settings.

#### Parameters

##### requestParameters

[`OAuthIntegrationsApiGetOAuthIntegrationByIdRequest`](../interfaces/OAuthIntegrationsApiGetOAuthIntegrationByIdRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`OAuthIntegrationResponse`](../loginradius-sdk/namespaces/Models/type-aliases/OAuthIntegrationResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

OAuthIntegrationsApi

#### Implementation of

[`OAuthIntegrationsApiInterface`](../interfaces/OAuthIntegrationsApiInterface.md).[`getOAuthIntegrationById`](../interfaces/OAuthIntegrationsApiInterface.md#getoauthintegrationbyid)

***

### rotateOAuthIntegrationCredentials()

> **rotateOAuthIntegrationCredentials**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`OAuthIntegrationCredentialsResponse`](../loginradius-sdk/namespaces/Models/interfaces/OAuthIntegrationCredentialsResponse.md), `any`, \{ \}, `any`\>\>

Regenerates the client secret for an existing OAuth/OIDC integration identified by its Id. The ClientId and Id are unchanged; only the secret is rotated. The new plaintext ClientSecret is returned once in this response, and only its hash is persisted server-side.

#### Parameters

##### requestParameters

[`OAuthIntegrationsApiRotateOAuthIntegrationCredentialsRequest`](../interfaces/OAuthIntegrationsApiRotateOAuthIntegrationCredentialsRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`OAuthIntegrationCredentialsResponse`](../loginradius-sdk/namespaces/Models/interfaces/OAuthIntegrationCredentialsResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

OAuthIntegrationsApi

#### Implementation of

[`OAuthIntegrationsApiInterface`](../interfaces/OAuthIntegrationsApiInterface.md).[`rotateOAuthIntegrationCredentials`](../interfaces/OAuthIntegrationsApiInterface.md#rotateoauthintegrationcredentials)

***

### updateOAuthIntegrationById()

> **updateOAuthIntegrationById**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`OAuthIntegrationResponse`](../loginradius-sdk/namespaces/Models/type-aliases/OAuthIntegrationResponse.md), `any`, \{ \}, `any`\>\>

Updates an existing OAuth/OIDC integration configuration for the Tenant identified by its Id. Id and DisplayName are immutable; only configuration fields are updated. Omitting a field leaves its stored value unchanged, as does a token lifetime of 0; passing an explicit empty AllowedScopes array removes all scopes from the integration.

#### Parameters

##### requestParameters

[`OAuthIntegrationsApiUpdateOAuthIntegrationByIdRequest`](../interfaces/OAuthIntegrationsApiUpdateOAuthIntegrationByIdRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`OAuthIntegrationResponse`](../loginradius-sdk/namespaces/Models/type-aliases/OAuthIntegrationResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

OAuthIntegrationsApi

#### Implementation of

[`OAuthIntegrationsApiInterface`](../interfaces/OAuthIntegrationsApiInterface.md).[`updateOAuthIntegrationById`](../interfaces/OAuthIntegrationsApiInterface.md#updateoauthintegrationbyid)

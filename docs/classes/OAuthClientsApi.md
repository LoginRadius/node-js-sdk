[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / OAuthClientsApi

# Class: OAuthClientsApi

OAuthClientsApi - object-oriented interface

## Export

OAuthClientsApi

## Extends

- `BaseAPI`

## Implements

- [`OAuthClientsApiInterface`](../interfaces/OAuthClientsApiInterface.md)

## Constructors

### Constructor

> **new OAuthClientsApi**(`configuration?`, `basePath?`, `axios?`): `OAuthClientsApi`

#### Parameters

##### configuration?

`Configuration`

##### basePath?

`string` = `BASE_PATH`

##### axios?

`AxiosInstance` = `globalAxios`

#### Returns

`OAuthClientsApi`

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

### createOAuthClientConfiguration()

> **createOAuthClientConfiguration**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`OAuthClientResponse`](../loginradius-sdk/namespaces/Models/interfaces/OAuthClientResponse.md), `any`, \{ \}, `any`\>\>

Creates a new OAuth client configuration for the Tenant by specifying redirect URIs, scopes, and other necessary settings to enable OAuth authentication and authorization.

#### Parameters

##### requestParameters

[`OAuthClientsApiCreateOAuthClientConfigurationRequest`](../interfaces/OAuthClientsApiCreateOAuthClientConfigurationRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`OAuthClientResponse`](../loginradius-sdk/namespaces/Models/interfaces/OAuthClientResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

OAuthClientsApi

#### Implementation of

[`OAuthClientsApiInterface`](../interfaces/OAuthClientsApiInterface.md).[`createOAuthClientConfiguration`](../interfaces/OAuthClientsApiInterface.md#createoauthclientconfiguration)

***

### deleteOAuthClient()

> **deleteOAuthClient**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md), `any`, \{ \}, `any`\>\>

Deletes the OAuth client configuration for the Tenant identified by the application name.

#### Parameters

##### requestParameters

[`OAuthClientsApiDeleteOAuthClientRequest`](../interfaces/OAuthClientsApiDeleteOAuthClientRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

OAuthClientsApi

#### Implementation of

[`OAuthClientsApiInterface`](../interfaces/OAuthClientsApiInterface.md).[`deleteOAuthClient`](../interfaces/OAuthClientsApiInterface.md#deleteoauthclient)

***

### getAllOAuthClientsConfigurations()

> **getAllOAuthClientsConfigurations**(`options?`): `Promise`\<`AxiosResponse`\<[`GetAllOAuthClientsConfigurations200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetAllOAuthClientsConfigurations200Response.md), `any`, \{ \}, `any`\>\>

Retrieves a comprehensive list of OAuth client configurations for the Tenant, including client IDs, redirect URIs, scopes, and other relevant settings.

#### Parameters

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`GetAllOAuthClientsConfigurations200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetAllOAuthClientsConfigurations200Response.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

OAuthClientsApi

#### Implementation of

[`OAuthClientsApiInterface`](../interfaces/OAuthClientsApiInterface.md).[`getAllOAuthClientsConfigurations`](../interfaces/OAuthClientsApiInterface.md#getalloauthclientsconfigurations)

***

### getOAuthClientConfigurationByAppName()

> **getOAuthClientConfigurationByAppName**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`OAuthClientResponse`](../loginradius-sdk/namespaces/Models/interfaces/OAuthClientResponse.md), `any`, \{ \}, `any`\>\>

Retrieves the OAuth client configuration details for the Tenant using the application name.

#### Parameters

##### requestParameters

[`OAuthClientsApiGetOAuthClientConfigurationByAppNameRequest`](../interfaces/OAuthClientsApiGetOAuthClientConfigurationByAppNameRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`OAuthClientResponse`](../loginradius-sdk/namespaces/Models/interfaces/OAuthClientResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

OAuthClientsApi

#### Implementation of

[`OAuthClientsApiInterface`](../interfaces/OAuthClientsApiInterface.md).[`getOAuthClientConfigurationByAppName`](../interfaces/OAuthClientsApiInterface.md#getoauthclientconfigurationbyappname)

***

### getOAuthClientConnectionsMetadata()

> **getOAuthClientConnectionsMetadata**(`options?`): `Promise`\<`AxiosResponse`\<[`GetOAuthClientConnectionsMetadata200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetOAuthClientConnectionsMetadata200Response.md), `any`, \{ \}, `any`\>\>

Retrieves metadata for OAuth client connections within the Tenant.

#### Parameters

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`GetOAuthClientConnectionsMetadata200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetOAuthClientConnectionsMetadata200Response.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

OAuthClientsApi

#### Implementation of

[`OAuthClientsApiInterface`](../interfaces/OAuthClientsApiInterface.md).[`getOAuthClientConnectionsMetadata`](../interfaces/OAuthClientsApiInterface.md#getoauthclientconnectionsmetadata)

***

### resetOAuthClientConfigurationSecretByAppName()

> **resetOAuthClientConfigurationSecretByAppName**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`OAuthClientSecretResetResponse`](../loginradius-sdk/namespaces/Models/interfaces/OAuthClientSecretResetResponse.md), `any`, \{ \}, `any`\>\>

Resets the client secret for the OAuth client configuration identified by the AppName within the Tenant, generating a new client secret and invalidating the previous one to enhance security.

#### Parameters

##### requestParameters

[`OAuthClientsApiResetOAuthClientConfigurationSecretByAppNameRequest`](../interfaces/OAuthClientsApiResetOAuthClientConfigurationSecretByAppNameRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`OAuthClientSecretResetResponse`](../loginradius-sdk/namespaces/Models/interfaces/OAuthClientSecretResetResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

OAuthClientsApi

#### Implementation of

[`OAuthClientsApiInterface`](../interfaces/OAuthClientsApiInterface.md).[`resetOAuthClientConfigurationSecretByAppName`](../interfaces/OAuthClientsApiInterface.md#resetoauthclientconfigurationsecretbyappname)

***

### updateOAuthClientConfigurationByAppName()

> **updateOAuthClientConfigurationByAppName**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`OAuthClientResponse`](../loginradius-sdk/namespaces/Models/interfaces/OAuthClientResponse.md), `any`, \{ \}, `any`\>\>

Updates the OAuth client configuration for the Tenant identified by the application name.

#### Parameters

##### requestParameters

[`OAuthClientsApiUpdateOAuthClientConfigurationByAppNameRequest`](../interfaces/OAuthClientsApiUpdateOAuthClientConfigurationByAppNameRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`OAuthClientResponse`](../loginradius-sdk/namespaces/Models/interfaces/OAuthClientResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

OAuthClientsApi

#### Implementation of

[`OAuthClientsApiInterface`](../interfaces/OAuthClientsApiInterface.md).[`updateOAuthClientConfigurationByAppName`](../interfaces/OAuthClientsApiInterface.md#updateoauthclientconfigurationbyappname)

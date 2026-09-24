[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / OAuthClientsApiInterface

# Interface: OAuthClientsApiInterface

OAuthClientsApi - interface

## Export

OAuthClientsApi

## Methods

### createOAuthClientConfiguration()

> **createOAuthClientConfiguration**(`requestParameters`, `options?`): `AxiosPromise`\<[`OAuthClientResponse`](../loginradius-sdk/namespaces/Models/interfaces/OAuthClientResponse.md)\>

Creates a new OAuth client configuration for the Tenant by specifying redirect URIs, scopes, and other necessary settings to enable OAuth authentication and authorization.

#### Parameters

##### requestParameters

[`OAuthClientsApiCreateOAuthClientConfigurationRequest`](OAuthClientsApiCreateOAuthClientConfigurationRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`OAuthClientResponse`](../loginradius-sdk/namespaces/Models/interfaces/OAuthClientResponse.md)\>

#### Throws

#### Memberof

OAuthClientsApiInterface

***

### deleteOAuthClient()

> **deleteOAuthClient**(`requestParameters`, `options?`): `AxiosPromise`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md)\>

Deletes the OAuth client configuration for the Tenant identified by the application name.

#### Parameters

##### requestParameters

[`OAuthClientsApiDeleteOAuthClientRequest`](OAuthClientsApiDeleteOAuthClientRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md)\>

#### Throws

#### Memberof

OAuthClientsApiInterface

***

### getAllOAuthClientsConfigurations()

> **getAllOAuthClientsConfigurations**(`options?`): `AxiosPromise`\<[`GetAllOAuthClientsConfigurations200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetAllOAuthClientsConfigurations200Response.md)\>

Retrieves a comprehensive list of OAuth client configurations for the Tenant, including client IDs, redirect URIs, scopes, and other relevant settings.

#### Parameters

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`GetAllOAuthClientsConfigurations200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetAllOAuthClientsConfigurations200Response.md)\>

#### Throws

#### Memberof

OAuthClientsApiInterface

***

### getOAuthClientConfigurationByAppName()

> **getOAuthClientConfigurationByAppName**(`requestParameters`, `options?`): `AxiosPromise`\<[`OAuthClientResponse`](../loginradius-sdk/namespaces/Models/interfaces/OAuthClientResponse.md)\>

Retrieves the OAuth client configuration details for the Tenant using the application name.

#### Parameters

##### requestParameters

[`OAuthClientsApiGetOAuthClientConfigurationByAppNameRequest`](OAuthClientsApiGetOAuthClientConfigurationByAppNameRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`OAuthClientResponse`](../loginradius-sdk/namespaces/Models/interfaces/OAuthClientResponse.md)\>

#### Throws

#### Memberof

OAuthClientsApiInterface

***

### getOAuthClientConnectionsMetadata()

> **getOAuthClientConnectionsMetadata**(`options?`): `AxiosPromise`\<[`GetOAuthClientConnectionsMetadata200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetOAuthClientConnectionsMetadata200Response.md)\>

Retrieves metadata for OAuth client connections within the Tenant.

#### Parameters

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`GetOAuthClientConnectionsMetadata200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetOAuthClientConnectionsMetadata200Response.md)\>

#### Throws

#### Memberof

OAuthClientsApiInterface

***

### resetOAuthClientConfigurationSecretByAppName()

> **resetOAuthClientConfigurationSecretByAppName**(`requestParameters`, `options?`): `AxiosPromise`\<[`OAuthClientSecretResetResponse`](../loginradius-sdk/namespaces/Models/interfaces/OAuthClientSecretResetResponse.md)\>

Resets the client secret for the OAuth client configuration identified by the AppName within the Tenant, generating a new client secret and invalidating the previous one to enhance security.

#### Parameters

##### requestParameters

[`OAuthClientsApiResetOAuthClientConfigurationSecretByAppNameRequest`](OAuthClientsApiResetOAuthClientConfigurationSecretByAppNameRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`OAuthClientSecretResetResponse`](../loginradius-sdk/namespaces/Models/interfaces/OAuthClientSecretResetResponse.md)\>

#### Throws

#### Memberof

OAuthClientsApiInterface

***

### updateOAuthClientConfigurationByAppName()

> **updateOAuthClientConfigurationByAppName**(`requestParameters`, `options?`): `AxiosPromise`\<[`OAuthClientResponse`](../loginradius-sdk/namespaces/Models/interfaces/OAuthClientResponse.md)\>

Updates the OAuth client configuration for the Tenant identified by the application name.

#### Parameters

##### requestParameters

[`OAuthClientsApiUpdateOAuthClientConfigurationByAppNameRequest`](OAuthClientsApiUpdateOAuthClientConfigurationByAppNameRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`OAuthClientResponse`](../loginradius-sdk/namespaces/Models/interfaces/OAuthClientResponse.md)\>

#### Throws

#### Memberof

OAuthClientsApiInterface

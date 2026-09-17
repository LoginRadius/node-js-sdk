[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / OAuthClientsApiFp

# Function: OAuthClientsApiFp()

> **OAuthClientsApiFp**(`configuration?`): `object`

OAuthClientsApi - functional programming interface

## Parameters

### configuration?

`Configuration`

## Returns

### createOAuthClientConfiguration()

> **createOAuthClientConfiguration**(`createOAuthClientConfigurationRequest`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`OAuthClientResponse`](../loginradius-sdk/namespaces/Models/interfaces/OAuthClientResponse.md)\>\>

Creates a new OAuth client configuration for the Tenant by specifying redirect URIs, scopes, and other necessary settings to enable OAuth authentication and authorization.

#### Parameters

##### createOAuthClientConfigurationRequest

[`CreateOAuthClientConfigurationRequest`](../loginradius-sdk/namespaces/Models/type-aliases/CreateOAuthClientConfigurationRequest.md)

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`OAuthClientResponse`](../loginradius-sdk/namespaces/Models/interfaces/OAuthClientResponse.md)\>\>

#### Throws

### deleteOAuthClient()

> **deleteOAuthClient**(`oAuthClientName`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md)\>\>

Deletes the OAuth client configuration for the Tenant identified by the application name.

#### Parameters

##### oAuthClientName

`string`

Name of the OAuth Client

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md)\>\>

#### Throws

### getAllOAuthClientsConfigurations()

> **getAllOAuthClientsConfigurations**(`options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`GetAllOAuthClientsConfigurations200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetAllOAuthClientsConfigurations200Response.md)\>\>

Retrieves a comprehensive list of OAuth client configurations for the Tenant, including client IDs, redirect URIs, scopes, and other relevant settings.

#### Parameters

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`GetAllOAuthClientsConfigurations200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetAllOAuthClientsConfigurations200Response.md)\>\>

#### Throws

### getOAuthClientConfigurationByAppName()

> **getOAuthClientConfigurationByAppName**(`oAuthClientName`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`OAuthClientResponse`](../loginradius-sdk/namespaces/Models/interfaces/OAuthClientResponse.md)\>\>

Retrieves the OAuth client configuration details for the Tenant using the application name.

#### Parameters

##### oAuthClientName

`string`

Name of the OAuth Client

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`OAuthClientResponse`](../loginradius-sdk/namespaces/Models/interfaces/OAuthClientResponse.md)\>\>

#### Throws

### getOAuthClientConnectionsMetadata()

> **getOAuthClientConnectionsMetadata**(`options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`GetOAuthClientConnectionsMetadata200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetOAuthClientConnectionsMetadata200Response.md)\>\>

Retrieves metadata for OAuth client connections within the Tenant.

#### Parameters

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`GetOAuthClientConnectionsMetadata200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetOAuthClientConnectionsMetadata200Response.md)\>\>

#### Throws

### resetOAuthClientConfigurationSecretByAppName()

> **resetOAuthClientConfigurationSecretByAppName**(`oAuthClientName`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`OAuthClientSecretResetResponse`](../loginradius-sdk/namespaces/Models/interfaces/OAuthClientSecretResetResponse.md)\>\>

Resets the client secret for the OAuth client configuration identified by the AppName within the Tenant, generating a new client secret and invalidating the previous one to enhance security.

#### Parameters

##### oAuthClientName

`string`

Name of the OAuth Client

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`OAuthClientSecretResetResponse`](../loginradius-sdk/namespaces/Models/interfaces/OAuthClientSecretResetResponse.md)\>\>

#### Throws

### updateOAuthClientConfigurationByAppName()

> **updateOAuthClientConfigurationByAppName**(`oAuthClientName`, `oAuthClientRequest`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`OAuthClientResponse`](../loginradius-sdk/namespaces/Models/interfaces/OAuthClientResponse.md)\>\>

Updates the OAuth client configuration for the Tenant identified by the application name.

#### Parameters

##### oAuthClientName

`string`

Name of the OAuth Client

##### oAuthClientRequest

[`OAuthClientRequest`](../loginradius-sdk/namespaces/Models/interfaces/OAuthClientRequest.md)

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`OAuthClientResponse`](../loginradius-sdk/namespaces/Models/interfaces/OAuthClientResponse.md)\>\>

#### Throws

## Export

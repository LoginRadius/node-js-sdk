[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / OAuthClientsApiAxiosParamCreator

# Function: OAuthClientsApiAxiosParamCreator()

> **OAuthClientsApiAxiosParamCreator**(`configuration?`): `object`

OAuthClientsApi - axios parameter creator

## Parameters

### configuration?

`Configuration`

## Returns

### createOAuthClientConfiguration

> **createOAuthClientConfiguration**: (`createOAuthClientConfigurationRequest`, `options?`) => `Promise`\<`RequestArgs`\>

Creates a new OAuth client configuration for the Tenant by specifying redirect URIs, scopes, and other necessary settings to enable OAuth authentication and authorization.

#### Parameters

##### createOAuthClientConfigurationRequest

[`CreateOAuthClientConfigurationRequest`](../loginradius-sdk/namespaces/Models/type-aliases/CreateOAuthClientConfigurationRequest.md)

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### deleteOAuthClient

> **deleteOAuthClient**: (`oAuthClientName`, `options?`) => `Promise`\<`RequestArgs`\>

Deletes the OAuth client configuration for the Tenant identified by the application name.

#### Parameters

##### oAuthClientName

`string`

Name of the OAuth Client

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### getAllOAuthClientsConfigurations

> **getAllOAuthClientsConfigurations**: (`options?`) => `Promise`\<`RequestArgs`\>

Retrieves a comprehensive list of OAuth client configurations for the Tenant, including client IDs, redirect URIs, scopes, and other relevant settings.

#### Parameters

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### getOAuthClientConfigurationByAppName

> **getOAuthClientConfigurationByAppName**: (`oAuthClientName`, `options?`) => `Promise`\<`RequestArgs`\>

Retrieves the OAuth client configuration details for the Tenant using the application name.

#### Parameters

##### oAuthClientName

`string`

Name of the OAuth Client

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### getOAuthClientConnectionsMetadata

> **getOAuthClientConnectionsMetadata**: (`options?`) => `Promise`\<`RequestArgs`\>

Retrieves metadata for OAuth client connections within the Tenant.

#### Parameters

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### resetOAuthClientConfigurationSecretByAppName

> **resetOAuthClientConfigurationSecretByAppName**: (`oAuthClientName`, `options?`) => `Promise`\<`RequestArgs`\>

Resets the client secret for the OAuth client configuration identified by the AppName within the Tenant, generating a new client secret and invalidating the previous one to enhance security.

#### Parameters

##### oAuthClientName

`string`

Name of the OAuth Client

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### updateOAuthClientConfigurationByAppName

> **updateOAuthClientConfigurationByAppName**: (`oAuthClientName`, `oAuthClientRequest`, `options?`) => `Promise`\<`RequestArgs`\>

Updates the OAuth client configuration for the Tenant identified by the application name.

#### Parameters

##### oAuthClientName

`string`

Name of the OAuth Client

##### oAuthClientRequest

[`OAuthClientRequest`](../loginradius-sdk/namespaces/Models/interfaces/OAuthClientRequest.md)

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

## Export

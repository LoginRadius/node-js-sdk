[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / JWTCustomProvidersApiFp

# Function: JWTCustomProvidersApiFp()

> **JWTCustomProvidersApiFp**(`configuration?`): `object`

JWTCustomProvidersApi - functional programming interface

## Parameters

### configuration?

`Configuration`

## Returns

### createJwtSPClientConfiguration()

> **createJwtSPClientConfiguration**(`createJwtSPClientConfigurationRequest`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`JwtSpConfig`](../loginradius-sdk/namespaces/Models/interfaces/JwtSpConfig.md)\>\>

Creates a new Service Provider (SP) configuration for a JWT client in the Tenant, defining details such as endpoints, mapping, and other required settings.

#### Parameters

##### createJwtSPClientConfigurationRequest

[`CreateJwtSPClientConfigurationRequest`](../loginradius-sdk/namespaces/Models/type-aliases/CreateJwtSPClientConfigurationRequest.md)

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`JwtSpConfig`](../loginradius-sdk/namespaces/Models/interfaces/JwtSpConfig.md)\>\>

#### Throws

### deleteJwtSPClientConfigurationByAppName()

> **deleteJwtSPClientConfigurationByAppName**(`jwtApp`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md)\>\>

Deletes the Service Provider (SP) configuration for a JWT client in the Tenant identified by the AppName, permanently disabling the application\'s service provider integration.

#### Parameters

##### jwtApp

`string`

The jwt App identifier

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md)\>\>

#### Throws

### getAllJwtConfigSPConfigurations()

> **getAllJwtConfigSPConfigurations**(`options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`GetAllJwtConfigSPConfigurations200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetAllJwtConfigSPConfigurations200Response.md)\>\>

Retrieves a list of all Service Provider (SP) configurations associated with JWT clients for the Tenant, including endpoints, mapping, and other settings for each SP setup.

#### Parameters

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`GetAllJwtConfigSPConfigurations200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetAllJwtConfigSPConfigurations200Response.md)\>\>

#### Throws

### getJwtSPClientConfigurationByAppName()

> **getJwtSPClientConfigurationByAppName**(`jwtApp`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`JwtSpConfig`](../loginradius-sdk/namespaces/Models/interfaces/JwtSpConfig.md)\>\>

Retrieves the Service Provider (SP) configuration details for a JWT client in the Tenant using the AppName, including endpoints, mapping, and other configured settings.

#### Parameters

##### jwtApp

`string`

The jwt App identifier

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`JwtSpConfig`](../loginradius-sdk/namespaces/Models/interfaces/JwtSpConfig.md)\>\>

#### Throws

### updateJwtSPClientConfigurationByAppName()

> **updateJwtSPClientConfigurationByAppName**(`jwtApp`, `jwtSpConfigBaseModel`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`JwtSpConfig`](../loginradius-sdk/namespaces/Models/interfaces/JwtSpConfig.md)\>\>

Updates an existing Service Provider (SP) configuration for a JWT client in the Tenant identified by the AppName, modifying settings such as endpoints, mapping, or other configuration details.

#### Parameters

##### jwtApp

`string`

The jwt App identifier

##### jwtSpConfigBaseModel

[`JwtSpConfigBaseModel`](../loginradius-sdk/namespaces/Models/interfaces/JwtSpConfigBaseModel.md)

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`JwtSpConfig`](../loginradius-sdk/namespaces/Models/interfaces/JwtSpConfig.md)\>\>

#### Throws

## Export

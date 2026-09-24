[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / JWTCustomProvidersApiFactory

# Function: JWTCustomProvidersApiFactory()

> **JWTCustomProvidersApiFactory**(`configuration?`, `basePath?`, `axios?`): `object`

JWTCustomProvidersApi - factory interface

## Parameters

### configuration?

`Configuration`

### basePath?

`string`

### axios?

`AxiosInstance`

## Returns

### createJwtSPClientConfiguration()

> **createJwtSPClientConfiguration**(`requestParameters`, `options?`): `AxiosPromise`\<[`JwtSpConfig`](../loginradius-sdk/namespaces/Models/interfaces/JwtSpConfig.md)\>

Creates a new Service Provider (SP) configuration for a JWT client in the Tenant, defining details such as endpoints, mapping, and other required settings.

#### Parameters

##### requestParameters

[`JWTCustomProvidersApiCreateJwtSPClientConfigurationRequest`](../interfaces/JWTCustomProvidersApiCreateJwtSPClientConfigurationRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`JwtSpConfig`](../loginradius-sdk/namespaces/Models/interfaces/JwtSpConfig.md)\>

#### Throws

### deleteJwtSPClientConfigurationByAppName()

> **deleteJwtSPClientConfigurationByAppName**(`requestParameters`, `options?`): `AxiosPromise`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md)\>

Deletes the Service Provider (SP) configuration for a JWT client in the Tenant identified by the AppName, permanently disabling the application\'s service provider integration.

#### Parameters

##### requestParameters

[`JWTCustomProvidersApiDeleteJwtSPClientConfigurationByAppNameRequest`](../interfaces/JWTCustomProvidersApiDeleteJwtSPClientConfigurationByAppNameRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md)\>

#### Throws

### getAllJwtConfigSPConfigurations()

> **getAllJwtConfigSPConfigurations**(`options?`): `AxiosPromise`\<[`GetAllJwtConfigSPConfigurations200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetAllJwtConfigSPConfigurations200Response.md)\>

Retrieves a list of all Service Provider (SP) configurations associated with JWT clients for the Tenant, including endpoints, mapping, and other settings for each SP setup.

#### Parameters

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`GetAllJwtConfigSPConfigurations200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetAllJwtConfigSPConfigurations200Response.md)\>

#### Throws

### getJwtSPClientConfigurationByAppName()

> **getJwtSPClientConfigurationByAppName**(`requestParameters`, `options?`): `AxiosPromise`\<[`JwtSpConfig`](../loginradius-sdk/namespaces/Models/interfaces/JwtSpConfig.md)\>

Retrieves the Service Provider (SP) configuration details for a JWT client in the Tenant using the AppName, including endpoints, mapping, and other configured settings.

#### Parameters

##### requestParameters

[`JWTCustomProvidersApiGetJwtSPClientConfigurationByAppNameRequest`](../interfaces/JWTCustomProvidersApiGetJwtSPClientConfigurationByAppNameRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`JwtSpConfig`](../loginradius-sdk/namespaces/Models/interfaces/JwtSpConfig.md)\>

#### Throws

### updateJwtSPClientConfigurationByAppName()

> **updateJwtSPClientConfigurationByAppName**(`requestParameters`, `options?`): `AxiosPromise`\<[`JwtSpConfig`](../loginradius-sdk/namespaces/Models/interfaces/JwtSpConfig.md)\>

Updates an existing Service Provider (SP) configuration for a JWT client in the Tenant identified by the AppName, modifying settings such as endpoints, mapping, or other configuration details.

#### Parameters

##### requestParameters

[`JWTCustomProvidersApiUpdateJwtSPClientConfigurationByAppNameRequest`](../interfaces/JWTCustomProvidersApiUpdateJwtSPClientConfigurationByAppNameRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`JwtSpConfig`](../loginradius-sdk/namespaces/Models/interfaces/JwtSpConfig.md)\>

#### Throws

## Export

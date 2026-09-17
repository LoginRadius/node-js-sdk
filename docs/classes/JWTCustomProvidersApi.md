[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / JWTCustomProvidersApi

# Class: JWTCustomProvidersApi

JWTCustomProvidersApi - object-oriented interface

## Export

JWTCustomProvidersApi

## Extends

- `BaseAPI`

## Implements

- [`JWTCustomProvidersApiInterface`](../interfaces/JWTCustomProvidersApiInterface.md)

## Constructors

### Constructor

> **new JWTCustomProvidersApi**(`configuration?`, `basePath?`, `axios?`): `JWTCustomProvidersApi`

#### Parameters

##### configuration?

`Configuration`

##### basePath?

`string` = `BASE_PATH`

##### axios?

`AxiosInstance` = `globalAxios`

#### Returns

`JWTCustomProvidersApi`

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

### createJwtSPClientConfiguration()

> **createJwtSPClientConfiguration**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`JwtSpConfig`](../loginradius-sdk/namespaces/Models/interfaces/JwtSpConfig.md), `any`, \{ \}, `any`\>\>

Creates a new Service Provider (SP) configuration for a JWT client in the Tenant, defining details such as endpoints, mapping, and other required settings.

#### Parameters

##### requestParameters

[`JWTCustomProvidersApiCreateJwtSPClientConfigurationRequest`](../interfaces/JWTCustomProvidersApiCreateJwtSPClientConfigurationRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`JwtSpConfig`](../loginradius-sdk/namespaces/Models/interfaces/JwtSpConfig.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

JWTCustomProvidersApi

#### Implementation of

[`JWTCustomProvidersApiInterface`](../interfaces/JWTCustomProvidersApiInterface.md).[`createJwtSPClientConfiguration`](../interfaces/JWTCustomProvidersApiInterface.md#createjwtspclientconfiguration)

***

### deleteJwtSPClientConfigurationByAppName()

> **deleteJwtSPClientConfigurationByAppName**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md), `any`, \{ \}, `any`\>\>

Deletes the Service Provider (SP) configuration for a JWT client in the Tenant identified by the AppName, permanently disabling the application\'s service provider integration.

#### Parameters

##### requestParameters

[`JWTCustomProvidersApiDeleteJwtSPClientConfigurationByAppNameRequest`](../interfaces/JWTCustomProvidersApiDeleteJwtSPClientConfigurationByAppNameRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

JWTCustomProvidersApi

#### Implementation of

[`JWTCustomProvidersApiInterface`](../interfaces/JWTCustomProvidersApiInterface.md).[`deleteJwtSPClientConfigurationByAppName`](../interfaces/JWTCustomProvidersApiInterface.md#deletejwtspclientconfigurationbyappname)

***

### getAllJwtConfigSPConfigurations()

> **getAllJwtConfigSPConfigurations**(`options?`): `Promise`\<`AxiosResponse`\<[`GetAllJwtConfigSPConfigurations200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetAllJwtConfigSPConfigurations200Response.md), `any`, \{ \}, `any`\>\>

Retrieves a list of all Service Provider (SP) configurations associated with JWT clients for the Tenant, including endpoints, mapping, and other settings for each SP setup.

#### Parameters

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`GetAllJwtConfigSPConfigurations200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetAllJwtConfigSPConfigurations200Response.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

JWTCustomProvidersApi

#### Implementation of

[`JWTCustomProvidersApiInterface`](../interfaces/JWTCustomProvidersApiInterface.md).[`getAllJwtConfigSPConfigurations`](../interfaces/JWTCustomProvidersApiInterface.md#getalljwtconfigspconfigurations)

***

### getJwtSPClientConfigurationByAppName()

> **getJwtSPClientConfigurationByAppName**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`JwtSpConfig`](../loginradius-sdk/namespaces/Models/interfaces/JwtSpConfig.md), `any`, \{ \}, `any`\>\>

Retrieves the Service Provider (SP) configuration details for a JWT client in the Tenant using the AppName, including endpoints, mapping, and other configured settings.

#### Parameters

##### requestParameters

[`JWTCustomProvidersApiGetJwtSPClientConfigurationByAppNameRequest`](../interfaces/JWTCustomProvidersApiGetJwtSPClientConfigurationByAppNameRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`JwtSpConfig`](../loginradius-sdk/namespaces/Models/interfaces/JwtSpConfig.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

JWTCustomProvidersApi

#### Implementation of

[`JWTCustomProvidersApiInterface`](../interfaces/JWTCustomProvidersApiInterface.md).[`getJwtSPClientConfigurationByAppName`](../interfaces/JWTCustomProvidersApiInterface.md#getjwtspclientconfigurationbyappname)

***

### updateJwtSPClientConfigurationByAppName()

> **updateJwtSPClientConfigurationByAppName**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`JwtSpConfig`](../loginradius-sdk/namespaces/Models/interfaces/JwtSpConfig.md), `any`, \{ \}, `any`\>\>

Updates an existing Service Provider (SP) configuration for a JWT client in the Tenant identified by the AppName, modifying settings such as endpoints, mapping, or other configuration details.

#### Parameters

##### requestParameters

[`JWTCustomProvidersApiUpdateJwtSPClientConfigurationByAppNameRequest`](../interfaces/JWTCustomProvidersApiUpdateJwtSPClientConfigurationByAppNameRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`JwtSpConfig`](../loginradius-sdk/namespaces/Models/interfaces/JwtSpConfig.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

JWTCustomProvidersApi

#### Implementation of

[`JWTCustomProvidersApiInterface`](../interfaces/JWTCustomProvidersApiInterface.md).[`updateJwtSPClientConfigurationByAppName`](../interfaces/JWTCustomProvidersApiInterface.md#updatejwtspclientconfigurationbyappname)

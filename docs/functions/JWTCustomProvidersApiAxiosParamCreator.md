[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / JWTCustomProvidersApiAxiosParamCreator

# Function: JWTCustomProvidersApiAxiosParamCreator()

> **JWTCustomProvidersApiAxiosParamCreator**(`configuration?`): `object`

JWTCustomProvidersApi - axios parameter creator

## Parameters

### configuration?

`Configuration`

## Returns

### createJwtSPClientConfiguration

> **createJwtSPClientConfiguration**: (`createJwtSPClientConfigurationRequest`, `options?`) => `Promise`\<`RequestArgs`\>

Creates a new Service Provider (SP) configuration for a JWT client in the Tenant, defining details such as endpoints, mapping, and other required settings.

#### Parameters

##### createJwtSPClientConfigurationRequest

[`CreateJwtSPClientConfigurationRequest`](../loginradius-sdk/namespaces/Models/type-aliases/CreateJwtSPClientConfigurationRequest.md)

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### deleteJwtSPClientConfigurationByAppName

> **deleteJwtSPClientConfigurationByAppName**: (`jwtApp`, `options?`) => `Promise`\<`RequestArgs`\>

Deletes the Service Provider (SP) configuration for a JWT client in the Tenant identified by the AppName, permanently disabling the application\'s service provider integration.

#### Parameters

##### jwtApp

`string`

The jwt App identifier

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### getAllJwtConfigSPConfigurations

> **getAllJwtConfigSPConfigurations**: (`options?`) => `Promise`\<`RequestArgs`\>

Retrieves a list of all Service Provider (SP) configurations associated with JWT clients for the Tenant, including endpoints, mapping, and other settings for each SP setup.

#### Parameters

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### getJwtSPClientConfigurationByAppName

> **getJwtSPClientConfigurationByAppName**: (`jwtApp`, `options?`) => `Promise`\<`RequestArgs`\>

Retrieves the Service Provider (SP) configuration details for a JWT client in the Tenant using the AppName, including endpoints, mapping, and other configured settings.

#### Parameters

##### jwtApp

`string`

The jwt App identifier

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### updateJwtSPClientConfigurationByAppName

> **updateJwtSPClientConfigurationByAppName**: (`jwtApp`, `jwtSpConfigBaseModel`, `options?`) => `Promise`\<`RequestArgs`\>

Updates an existing Service Provider (SP) configuration for a JWT client in the Tenant identified by the AppName, modifying settings such as endpoints, mapping, or other configuration details.

#### Parameters

##### jwtApp

`string`

The jwt App identifier

##### jwtSpConfigBaseModel

[`JwtSpConfigBaseModel`](../loginradius-sdk/namespaces/Models/interfaces/JwtSpConfigBaseModel.md)

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

## Export

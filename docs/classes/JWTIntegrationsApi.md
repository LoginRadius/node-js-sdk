[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / JWTIntegrationsApi

# Class: JWTIntegrationsApi

JWTIntegrationsApi - object-oriented interface

## Export

JWTIntegrationsApi

## Extends

- `BaseAPI`

## Implements

- [`JWTIntegrationsApiInterface`](../interfaces/JWTIntegrationsApiInterface.md)

## Constructors

### Constructor

> **new JWTIntegrationsApi**(`configuration?`, `basePath?`, `axios?`): `JWTIntegrationsApi`

#### Parameters

##### configuration?

`Configuration`

##### basePath?

`string` = `BASE_PATH`

##### axios?

`AxiosInstance` = `globalAxios`

#### Returns

`JWTIntegrationsApi`

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

### createJwtIntegration()

> **createJwtIntegration**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`JwtIntegrationResponse`](../loginradius-sdk/namespaces/Models/type-aliases/JwtIntegrationResponse.md), `any`, \{ \}, `any`\>\>

Creates a new JWT-based Integration configuration for the Tenant by specifying algorithms, mapping, and endpoint information, enabling authentication and federation with the specified IdP.

#### Parameters

##### requestParameters

[`JWTIntegrationsApiCreateJwtIntegrationRequest`](../interfaces/JWTIntegrationsApiCreateJwtIntegrationRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`JwtIntegrationResponse`](../loginradius-sdk/namespaces/Models/type-aliases/JwtIntegrationResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

JWTIntegrationsApi

#### Implementation of

[`JWTIntegrationsApiInterface`](../interfaces/JWTIntegrationsApiInterface.md).[`createJwtIntegration`](../interfaces/JWTIntegrationsApiInterface.md#createjwtintegration)

***

### deleteJwtIntegration()

> **deleteJwtIntegration**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md), `any`, \{ \}, `any`\>\>

Deletes an existing JWT-based integration configuration for the Tenant using its AppName, permanently disabling authentication and federation with that IdP.

#### Parameters

##### requestParameters

[`JWTIntegrationsApiDeleteJwtIntegrationRequest`](../interfaces/JWTIntegrationsApiDeleteJwtIntegrationRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

JWTIntegrationsApi

#### Implementation of

[`JWTIntegrationsApiInterface`](../interfaces/JWTIntegrationsApiInterface.md).[`deleteJwtIntegration`](../interfaces/JWTIntegrationsApiInterface.md#deletejwtintegration)

***

### getAllJwtIntegrations()

> **getAllJwtIntegrations**(`options?`): `Promise`\<`AxiosResponse`\<[`GetAllJwtIntegrations200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetAllJwtIntegrations200Response.md), `any`, \{ \}, `any`\>\>

Retrieves a list of all configured JWT-based integrations for the Tenant, including algorithms, mapping, endpoints, and settings used for authentication and federation.

#### Parameters

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`GetAllJwtIntegrations200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetAllJwtIntegrations200Response.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

JWTIntegrationsApi

#### Implementation of

[`JWTIntegrationsApiInterface`](../interfaces/JWTIntegrationsApiInterface.md).[`getAllJwtIntegrations`](../interfaces/JWTIntegrationsApiInterface.md#getalljwtintegrations)

***

### getJwtIntegrationByAppName()

> **getJwtIntegrationByAppName**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`JwtIntegrationResponse`](../loginradius-sdk/namespaces/Models/type-aliases/JwtIntegrationResponse.md), `any`, \{ \}, `any`\>\>

Retrieves the details of a specific JWT-based integration configuration for the Tenant using the AppName, including algorithms, mapping, and endpoints associated with the application.

#### Parameters

##### requestParameters

[`JWTIntegrationsApiGetJwtIntegrationByAppNameRequest`](../interfaces/JWTIntegrationsApiGetJwtIntegrationByAppNameRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`JwtIntegrationResponse`](../loginradius-sdk/namespaces/Models/type-aliases/JwtIntegrationResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

JWTIntegrationsApi

#### Implementation of

[`JWTIntegrationsApiInterface`](../interfaces/JWTIntegrationsApiInterface.md).[`getJwtIntegrationByAppName`](../interfaces/JWTIntegrationsApiInterface.md#getjwtintegrationbyappname)

***

### getJwtIntegrationDataMappingFieldsList()

> **getJwtIntegrationDataMappingFieldsList**(`options?`): `Promise`\<`AxiosResponse`\<[`GetJwtIntegrationSupportedAlgoList200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetJwtIntegrationSupportedAlgoList200Response.md), `any`, \{ \}, `any`\>\>

Retrieves a list of available data mapping fields that can be used when configuring JWT-based Identity Provider (IdP) integrations for the Tenant, including all supported fields for mapping JWT claims to User profile attributes.

#### Parameters

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`GetJwtIntegrationSupportedAlgoList200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetJwtIntegrationSupportedAlgoList200Response.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

JWTIntegrationsApi

#### Implementation of

[`JWTIntegrationsApiInterface`](../interfaces/JWTIntegrationsApiInterface.md).[`getJwtIntegrationDataMappingFieldsList`](../interfaces/JWTIntegrationsApiInterface.md#getjwtintegrationdatamappingfieldslist)

***

### getJwtIntegrationSupportedAlgoList()

> **getJwtIntegrationSupportedAlgoList**(`options?`): `Promise`\<`AxiosResponse`\<[`GetJwtIntegrationSupportedAlgoList200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetJwtIntegrationSupportedAlgoList200Response.md), `any`, \{ \}, `any`\>\>

Retrieves a list of all supported cryptographic algorithms that can be used by JWT clients for signing and verification when configuring a JWT-based Identity Provider (IdP) for the Tenant.

#### Parameters

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`GetJwtIntegrationSupportedAlgoList200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetJwtIntegrationSupportedAlgoList200Response.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

JWTIntegrationsApi

#### Implementation of

[`JWTIntegrationsApiInterface`](../interfaces/JWTIntegrationsApiInterface.md).[`getJwtIntegrationSupportedAlgoList`](../interfaces/JWTIntegrationsApiInterface.md#getjwtintegrationsupportedalgolist)

***

### updateJwtIntegrationByAppName()

> **updateJwtIntegrationByAppName**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`JwtIntegrationResponse`](../loginradius-sdk/namespaces/Models/type-aliases/JwtIntegrationResponse.md), `any`, \{ \}, `any`\>\>

Updates an existing JWT-based integration configuration for the Tenant identified by the AppName, modifying details such as algorithms, mapping, or endpoint information.

#### Parameters

##### requestParameters

[`JWTIntegrationsApiUpdateJwtIntegrationByAppNameRequest`](../interfaces/JWTIntegrationsApiUpdateJwtIntegrationByAppNameRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`JwtIntegrationResponse`](../loginradius-sdk/namespaces/Models/type-aliases/JwtIntegrationResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

JWTIntegrationsApi

#### Implementation of

[`JWTIntegrationsApiInterface`](../interfaces/JWTIntegrationsApiInterface.md).[`updateJwtIntegrationByAppName`](../interfaces/JWTIntegrationsApiInterface.md#updatejwtintegrationbyappname)

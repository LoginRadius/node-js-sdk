[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / JWTIntegrationsApiInterface

# Interface: JWTIntegrationsApiInterface

JWTIntegrationsApi - interface

## Export

JWTIntegrationsApi

## Methods

### createJwtIntegration()

> **createJwtIntegration**(`requestParameters`, `options?`): `AxiosPromise`\<[`JwtIntegrationResponse`](../loginradius-sdk/namespaces/Models/type-aliases/JwtIntegrationResponse.md)\>

Creates a new JWT-based Integration configuration for the Tenant by specifying algorithms, mapping, and endpoint information, enabling authentication and federation with the specified IdP.

#### Parameters

##### requestParameters

[`JWTIntegrationsApiCreateJwtIntegrationRequest`](JWTIntegrationsApiCreateJwtIntegrationRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`JwtIntegrationResponse`](../loginradius-sdk/namespaces/Models/type-aliases/JwtIntegrationResponse.md)\>

#### Throws

#### Memberof

JWTIntegrationsApiInterface

***

### deleteJwtIntegration()

> **deleteJwtIntegration**(`requestParameters`, `options?`): `AxiosPromise`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md)\>

Deletes an existing JWT-based integration configuration for the Tenant using its AppName, permanently disabling authentication and federation with that IdP.

#### Parameters

##### requestParameters

[`JWTIntegrationsApiDeleteJwtIntegrationRequest`](JWTIntegrationsApiDeleteJwtIntegrationRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md)\>

#### Throws

#### Memberof

JWTIntegrationsApiInterface

***

### getAllJwtIntegrations()

> **getAllJwtIntegrations**(`options?`): `AxiosPromise`\<[`GetAllJwtIntegrations200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetAllJwtIntegrations200Response.md)\>

Retrieves a list of all configured JWT-based integrations for the Tenant, including algorithms, mapping, endpoints, and settings used for authentication and federation.

#### Parameters

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`GetAllJwtIntegrations200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetAllJwtIntegrations200Response.md)\>

#### Throws

#### Memberof

JWTIntegrationsApiInterface

***

### getJwtIntegrationByAppName()

> **getJwtIntegrationByAppName**(`requestParameters`, `options?`): `AxiosPromise`\<[`JwtIntegrationResponse`](../loginradius-sdk/namespaces/Models/type-aliases/JwtIntegrationResponse.md)\>

Retrieves the details of a specific JWT-based integration configuration for the Tenant using the AppName, including algorithms, mapping, and endpoints associated with the application.

#### Parameters

##### requestParameters

[`JWTIntegrationsApiGetJwtIntegrationByAppNameRequest`](JWTIntegrationsApiGetJwtIntegrationByAppNameRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`JwtIntegrationResponse`](../loginradius-sdk/namespaces/Models/type-aliases/JwtIntegrationResponse.md)\>

#### Throws

#### Memberof

JWTIntegrationsApiInterface

***

### getJwtIntegrationDataMappingFieldsList()

> **getJwtIntegrationDataMappingFieldsList**(`options?`): `AxiosPromise`\<[`GetJwtIntegrationSupportedAlgoList200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetJwtIntegrationSupportedAlgoList200Response.md)\>

Retrieves a list of available data mapping fields that can be used when configuring JWT-based Identity Provider (IdP) integrations for the Tenant, including all supported fields for mapping JWT claims to User profile attributes.

#### Parameters

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`GetJwtIntegrationSupportedAlgoList200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetJwtIntegrationSupportedAlgoList200Response.md)\>

#### Throws

#### Memberof

JWTIntegrationsApiInterface

***

### getJwtIntegrationSupportedAlgoList()

> **getJwtIntegrationSupportedAlgoList**(`options?`): `AxiosPromise`\<[`GetJwtIntegrationSupportedAlgoList200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetJwtIntegrationSupportedAlgoList200Response.md)\>

Retrieves a list of all supported cryptographic algorithms that can be used by JWT clients for signing and verification when configuring a JWT-based Identity Provider (IdP) for the Tenant.

#### Parameters

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`GetJwtIntegrationSupportedAlgoList200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetJwtIntegrationSupportedAlgoList200Response.md)\>

#### Throws

#### Memberof

JWTIntegrationsApiInterface

***

### updateJwtIntegrationByAppName()

> **updateJwtIntegrationByAppName**(`requestParameters`, `options?`): `AxiosPromise`\<[`JwtIntegrationResponse`](../loginradius-sdk/namespaces/Models/type-aliases/JwtIntegrationResponse.md)\>

Updates an existing JWT-based integration configuration for the Tenant identified by the AppName, modifying details such as algorithms, mapping, or endpoint information.

#### Parameters

##### requestParameters

[`JWTIntegrationsApiUpdateJwtIntegrationByAppNameRequest`](JWTIntegrationsApiUpdateJwtIntegrationByAppNameRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`JwtIntegrationResponse`](../loginradius-sdk/namespaces/Models/type-aliases/JwtIntegrationResponse.md)\>

#### Throws

#### Memberof

JWTIntegrationsApiInterface

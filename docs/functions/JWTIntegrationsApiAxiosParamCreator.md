[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / JWTIntegrationsApiAxiosParamCreator

# Function: JWTIntegrationsApiAxiosParamCreator()

> **JWTIntegrationsApiAxiosParamCreator**(`configuration?`): `object`

JWTIntegrationsApi - axios parameter creator

## Parameters

### configuration?

`Configuration`

## Returns

### createJwtIntegration

> **createJwtIntegration**: (`createJwtIntegrationRequest`, `options?`) => `Promise`\<`RequestArgs`\>

Creates a new JWT-based Integration configuration for the Tenant by specifying algorithms, mapping, and endpoint information, enabling authentication and federation with the specified IdP.

#### Parameters

##### createJwtIntegrationRequest

[`CreateJwtIntegrationRequest`](../loginradius-sdk/namespaces/Models/type-aliases/CreateJwtIntegrationRequest.md)

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### deleteJwtIntegration

> **deleteJwtIntegration**: (`jwtApp`, `options?`) => `Promise`\<`RequestArgs`\>

Deletes an existing JWT-based integration configuration for the Tenant using its AppName, permanently disabling authentication and federation with that IdP.

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

### getAllJwtIntegrations

> **getAllJwtIntegrations**: (`options?`) => `Promise`\<`RequestArgs`\>

Retrieves a list of all configured JWT-based integrations for the Tenant, including algorithms, mapping, endpoints, and settings used for authentication and federation.

#### Parameters

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### getJwtIntegrationByAppName

> **getJwtIntegrationByAppName**: (`jwtApp`, `options?`) => `Promise`\<`RequestArgs`\>

Retrieves the details of a specific JWT-based integration configuration for the Tenant using the AppName, including algorithms, mapping, and endpoints associated with the application.

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

### getJwtIntegrationDataMappingFieldsList

> **getJwtIntegrationDataMappingFieldsList**: (`options?`) => `Promise`\<`RequestArgs`\>

Retrieves a list of available data mapping fields that can be used when configuring JWT-based Identity Provider (IdP) integrations for the Tenant, including all supported fields for mapping JWT claims to User profile attributes.

#### Parameters

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### getJwtIntegrationSupportedAlgoList

> **getJwtIntegrationSupportedAlgoList**: (`options?`) => `Promise`\<`RequestArgs`\>

Retrieves a list of all supported cryptographic algorithms that can be used by JWT clients for signing and verification when configuring a JWT-based Identity Provider (IdP) for the Tenant.

#### Parameters

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### updateJwtIntegrationByAppName

> **updateJwtIntegrationByAppName**: (`jwtApp`, `jwtIntegrationBaseModel`, `options?`) => `Promise`\<`RequestArgs`\>

Updates an existing JWT-based integration configuration for the Tenant identified by the AppName, modifying details such as algorithms, mapping, or endpoint information.

#### Parameters

##### jwtApp

`string`

The jwt App identifier

##### jwtIntegrationBaseModel

[`JwtIntegrationBaseModel`](../loginradius-sdk/namespaces/Models/interfaces/JwtIntegrationBaseModel.md)

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

## Export

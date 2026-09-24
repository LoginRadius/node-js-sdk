[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / SAMLIntegrationsApi

# Class: SAMLIntegrationsApi

SAMLIntegrationsApi - object-oriented interface

## Export

SAMLIntegrationsApi

## Extends

- `BaseAPI`

## Implements

- [`SAMLIntegrationsApiInterface`](../interfaces/SAMLIntegrationsApiInterface.md)

## Constructors

### Constructor

> **new SAMLIntegrationsApi**(`configuration?`, `basePath?`, `axios?`): `SAMLIntegrationsApi`

#### Parameters

##### configuration?

`Configuration`

##### basePath?

`string` = `BASE_PATH`

##### axios?

`AxiosInstance` = `globalAxios`

#### Returns

`SAMLIntegrationsApi`

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

### createSamlIntegration()

> **createSamlIntegration**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`SamlIntegrationResponse`](../loginradius-sdk/namespaces/Models/interfaces/SamlIntegrationResponse.md), `any`, \{ \}, `any`\>\>

Creates a new SAML-based Identity Provider integration for the Tenant, enabling authentication and federation with the specified IdP.

#### Parameters

##### requestParameters

[`SAMLIntegrationsApiCreateSamlIntegrationRequest`](../interfaces/SAMLIntegrationsApiCreateSamlIntegrationRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`SamlIntegrationResponse`](../loginradius-sdk/namespaces/Models/interfaces/SamlIntegrationResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

SAMLIntegrationsApi

#### Implementation of

[`SAMLIntegrationsApiInterface`](../interfaces/SAMLIntegrationsApiInterface.md).[`createSamlIntegration`](../interfaces/SAMLIntegrationsApiInterface.md#createsamlintegration)

***

### deleteSamlIntegrationByAppName()

> **deleteSamlIntegrationByAppName**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md), `any`, \{ \}, `any`\>\>

Deletes the SAML-based Identity Provider configuration for the Tenant identified by the application name, disabling authentication for the specified application.

#### Parameters

##### requestParameters

[`SAMLIntegrationsApiDeleteSamlIntegrationByAppNameRequest`](../interfaces/SAMLIntegrationsApiDeleteSamlIntegrationByAppNameRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

SAMLIntegrationsApi

#### Implementation of

[`SAMLIntegrationsApiInterface`](../interfaces/SAMLIntegrationsApiInterface.md).[`deleteSamlIntegrationByAppName`](../interfaces/SAMLIntegrationsApiInterface.md#deletesamlintegrationbyappname)

***

### getAllSamlIntegrations()

> **getAllSamlIntegrations**(`options?`): `Promise`\<`AxiosResponse`\<[`GetAllSamlIntegrations200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetAllSamlIntegrations200Response.md), `any`, \{ \}, `any`\>\>

Retrieves a list of all configured SAML-based Identity Provider integrations for the Tenant, including metadata and settings for authentication.

#### Parameters

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`GetAllSamlIntegrations200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetAllSamlIntegrations200Response.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

SAMLIntegrationsApi

#### Implementation of

[`SAMLIntegrationsApiInterface`](../interfaces/SAMLIntegrationsApiInterface.md).[`getAllSamlIntegrations`](../interfaces/SAMLIntegrationsApiInterface.md#getallsamlintegrations)

***

### getSamlIntegrationByAppName()

> **getSamlIntegrationByAppName**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`SamlIntegrationResponse`](../loginradius-sdk/namespaces/Models/interfaces/SamlIntegrationResponse.md), `any`, \{ \}, `any`\>\>

Retrieves the SAML-based Identity Provider configuration details for the Tenant using the application name, including metadata and settings.

#### Parameters

##### requestParameters

[`SAMLIntegrationsApiGetSamlIntegrationByAppNameRequest`](../interfaces/SAMLIntegrationsApiGetSamlIntegrationByAppNameRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`SamlIntegrationResponse`](../loginradius-sdk/namespaces/Models/interfaces/SamlIntegrationResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

SAMLIntegrationsApi

#### Implementation of

[`SAMLIntegrationsApiInterface`](../interfaces/SAMLIntegrationsApiInterface.md).[`getSamlIntegrationByAppName`](../interfaces/SAMLIntegrationsApiInterface.md#getsamlintegrationbyappname)

***

### renewSamlIntegrationCertificate()

> **renewSamlIntegrationCertificate**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`SamlIntegrationResponse`](../loginradius-sdk/namespaces/Models/interfaces/SamlIntegrationResponse.md), `any`, \{ \}, `any`\>\>

Renews the SAML Identity Provider certificate to replace an expiring or compromised signing certificate.

#### Parameters

##### requestParameters

[`SAMLIntegrationsApiRenewSamlIntegrationCertificateRequest`](../interfaces/SAMLIntegrationsApiRenewSamlIntegrationCertificateRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`SamlIntegrationResponse`](../loginradius-sdk/namespaces/Models/interfaces/SamlIntegrationResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

SAMLIntegrationsApi

#### Implementation of

[`SAMLIntegrationsApiInterface`](../interfaces/SAMLIntegrationsApiInterface.md).[`renewSamlIntegrationCertificate`](../interfaces/SAMLIntegrationsApiInterface.md#renewsamlintegrationcertificate)

***

### updateSamlIntegrationByAppName()

> **updateSamlIntegrationByAppName**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`SamlIntegrationResponse`](../loginradius-sdk/namespaces/Models/interfaces/SamlIntegrationResponse.md), `any`, \{ \}, `any`\>\>

Updates an existing SAML-based Identity Provider configuration for the Tenant identified by the application name, modifying necessary settings.

#### Parameters

##### requestParameters

[`SAMLIntegrationsApiUpdateSamlIntegrationByAppNameRequest`](../interfaces/SAMLIntegrationsApiUpdateSamlIntegrationByAppNameRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`SamlIntegrationResponse`](../loginradius-sdk/namespaces/Models/interfaces/SamlIntegrationResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

SAMLIntegrationsApi

#### Implementation of

[`SAMLIntegrationsApiInterface`](../interfaces/SAMLIntegrationsApiInterface.md).[`updateSamlIntegrationByAppName`](../interfaces/SAMLIntegrationsApiInterface.md#updatesamlintegrationbyappname)

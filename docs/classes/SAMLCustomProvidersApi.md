[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / SAMLCustomProvidersApi

# Class: SAMLCustomProvidersApi

SAMLCustomProvidersApi - object-oriented interface

## Export

SAMLCustomProvidersApi

## Extends

- `BaseAPI`

## Implements

- [`SAMLCustomProvidersApiInterface`](../interfaces/SAMLCustomProvidersApiInterface.md)

## Constructors

### Constructor

> **new SAMLCustomProvidersApi**(`configuration?`, `basePath?`, `axios?`): `SAMLCustomProvidersApi`

#### Parameters

##### configuration?

`Configuration`

##### basePath?

`string` = `BASE_PATH`

##### axios?

`AxiosInstance` = `globalAxios`

#### Returns

`SAMLCustomProvidersApi`

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

### createSAMLSPClientConfiguration()

> **createSAMLSPClientConfiguration**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`SamlSpConfig`](../loginradius-sdk/namespaces/Models/interfaces/SamlSpConfig.md), `any`, \{ \}, `any`\>\>

Creates a new Service Provider configuration for a SAML client within the Tenant, defining necessary settings for SAML authentication flows.

#### Parameters

##### requestParameters

[`SAMLCustomProvidersApiCreateSAMLSPClientConfigurationRequest`](../interfaces/SAMLCustomProvidersApiCreateSAMLSPClientConfigurationRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`SamlSpConfig`](../loginradius-sdk/namespaces/Models/interfaces/SamlSpConfig.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

SAMLCustomProvidersApi

#### Implementation of

[`SAMLCustomProvidersApiInterface`](../interfaces/SAMLCustomProvidersApiInterface.md).[`createSAMLSPClientConfiguration`](../interfaces/SAMLCustomProvidersApiInterface.md#createsamlspclientconfiguration)

***

### deleteSAMLSPClientConfigurationByAppName()

> **deleteSAMLSPClientConfigurationByAppName**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md), `any`, \{ \}, `any`\>\>

Deletes the Service Provider configuration for a SAML client within the Tenant, identified by the application name.

#### Parameters

##### requestParameters

[`SAMLCustomProvidersApiDeleteSAMLSPClientConfigurationByAppNameRequest`](../interfaces/SAMLCustomProvidersApiDeleteSAMLSPClientConfigurationByAppNameRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

SAMLCustomProvidersApi

#### Implementation of

[`SAMLCustomProvidersApiInterface`](../interfaces/SAMLCustomProvidersApiInterface.md).[`deleteSAMLSPClientConfigurationByAppName`](../interfaces/SAMLCustomProvidersApiInterface.md#deletesamlspclientconfigurationbyappname)

***

### getAllSAMLSPClientConfigurations()

> **getAllSAMLSPClientConfigurations**(`options?`): `Promise`\<`AxiosResponse`\<[`GetAllSAMLSPClientConfigurations200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetAllSAMLSPClientConfigurations200Response.md), `any`, \{ \}, `any`\>\>

Retrieves a list of all Service Provider configurations for SAML clients within the Tenant, including details such as datamap, endpoints, and certificates.

#### Parameters

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`GetAllSAMLSPClientConfigurations200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetAllSAMLSPClientConfigurations200Response.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

SAMLCustomProvidersApi

#### Implementation of

[`SAMLCustomProvidersApiInterface`](../interfaces/SAMLCustomProvidersApiInterface.md).[`getAllSAMLSPClientConfigurations`](../interfaces/SAMLCustomProvidersApiInterface.md#getallsamlspclientconfigurations)

***

### getSAMLSPClientConfigurationByAppName()

> **getSAMLSPClientConfigurationByAppName**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`SamlSpConfig`](../loginradius-sdk/namespaces/Models/interfaces/SamlSpConfig.md), `any`, \{ \}, `any`\>\>

Retrieves the Service Provider configuration details for a SAML client within the Tenant, identified by the application name.

#### Parameters

##### requestParameters

[`SAMLCustomProvidersApiGetSAMLSPClientConfigurationByAppNameRequest`](../interfaces/SAMLCustomProvidersApiGetSAMLSPClientConfigurationByAppNameRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`SamlSpConfig`](../loginradius-sdk/namespaces/Models/interfaces/SamlSpConfig.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

SAMLCustomProvidersApi

#### Implementation of

[`SAMLCustomProvidersApiInterface`](../interfaces/SAMLCustomProvidersApiInterface.md).[`getSAMLSPClientConfigurationByAppName`](../interfaces/SAMLCustomProvidersApiInterface.md#getsamlspclientconfigurationbyappname)

***

### getSamlSPClientMappingKeys()

> **getSamlSPClientMappingKeys**(`options?`): `Promise`\<`AxiosResponse`\<[`GetSamlSPClientMappingKeys200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetSamlSPClientMappingKeys200Response.md), `any`, \{ \}, `any`\>\>

Retrieves a list of mapping keys available for configuring attribute mappings in SAML Service Provider clients within the Tenant.

#### Parameters

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`GetSamlSPClientMappingKeys200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetSamlSPClientMappingKeys200Response.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

SAMLCustomProvidersApi

#### Implementation of

[`SAMLCustomProvidersApiInterface`](../interfaces/SAMLCustomProvidersApiInterface.md).[`getSamlSPClientMappingKeys`](../interfaces/SAMLCustomProvidersApiInterface.md#getsamlspclientmappingkeys)

***

### renewSAMLSppCertificate()

> **renewSAMLSppCertificate**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`SamlSpConfig`](../loginradius-sdk/namespaces/Models/interfaces/SamlSpConfig.md), `any`, \{ \}, `any`\>\>

Renews the SAML Service Provider certificate to replace an expiring or compromised certificate.

#### Parameters

##### requestParameters

[`SAMLCustomProvidersApiRenewSAMLSppCertificateRequest`](../interfaces/SAMLCustomProvidersApiRenewSAMLSppCertificateRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`SamlSpConfig`](../loginradius-sdk/namespaces/Models/interfaces/SamlSpConfig.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

SAMLCustomProvidersApi

#### Implementation of

[`SAMLCustomProvidersApiInterface`](../interfaces/SAMLCustomProvidersApiInterface.md).[`renewSAMLSppCertificate`](../interfaces/SAMLCustomProvidersApiInterface.md#renewsamlsppcertificate)

***

### updateSAMLSPClientConfigurationByAppName()

> **updateSAMLSPClientConfigurationByAppName**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`SamlSpConfig`](../loginradius-sdk/namespaces/Models/interfaces/SamlSpConfig.md), `any`, \{ \}, `any`\>\>

Updates an existing Service Provider configuration for a SAML client within the Tenant, identified by the application name.

#### Parameters

##### requestParameters

[`SAMLCustomProvidersApiUpdateSAMLSPClientConfigurationByAppNameRequest`](../interfaces/SAMLCustomProvidersApiUpdateSAMLSPClientConfigurationByAppNameRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`SamlSpConfig`](../loginradius-sdk/namespaces/Models/interfaces/SamlSpConfig.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

SAMLCustomProvidersApi

#### Implementation of

[`SAMLCustomProvidersApiInterface`](../interfaces/SAMLCustomProvidersApiInterface.md).[`updateSAMLSPClientConfigurationByAppName`](../interfaces/SAMLCustomProvidersApiInterface.md#updatesamlspclientconfigurationbyappname)

[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / SAMLCustomProvidersApiInterface

# Interface: SAMLCustomProvidersApiInterface

SAMLCustomProvidersApi - interface

## Export

SAMLCustomProvidersApi

## Methods

### createSAMLSPClientConfiguration()

> **createSAMLSPClientConfiguration**(`requestParameters`, `options?`): `AxiosPromise`\<[`SamlSpConfig`](../loginradius-sdk/namespaces/Models/interfaces/SamlSpConfig.md)\>

Creates a new Service Provider configuration for a SAML client within the Tenant, defining necessary settings for SAML authentication flows.

#### Parameters

##### requestParameters

[`SAMLCustomProvidersApiCreateSAMLSPClientConfigurationRequest`](SAMLCustomProvidersApiCreateSAMLSPClientConfigurationRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`SamlSpConfig`](../loginradius-sdk/namespaces/Models/interfaces/SamlSpConfig.md)\>

#### Throws

#### Memberof

SAMLCustomProvidersApiInterface

***

### deleteSAMLSPClientConfigurationByAppName()

> **deleteSAMLSPClientConfigurationByAppName**(`requestParameters`, `options?`): `AxiosPromise`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md)\>

Deletes the Service Provider configuration for a SAML client within the Tenant, identified by the application name.

#### Parameters

##### requestParameters

[`SAMLCustomProvidersApiDeleteSAMLSPClientConfigurationByAppNameRequest`](SAMLCustomProvidersApiDeleteSAMLSPClientConfigurationByAppNameRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md)\>

#### Throws

#### Memberof

SAMLCustomProvidersApiInterface

***

### getAllSAMLSPClientConfigurations()

> **getAllSAMLSPClientConfigurations**(`options?`): `AxiosPromise`\<[`GetAllSAMLSPClientConfigurations200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetAllSAMLSPClientConfigurations200Response.md)\>

Retrieves a list of all Service Provider configurations for SAML clients within the Tenant, including details such as datamap, endpoints, and certificates.

#### Parameters

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`GetAllSAMLSPClientConfigurations200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetAllSAMLSPClientConfigurations200Response.md)\>

#### Throws

#### Memberof

SAMLCustomProvidersApiInterface

***

### getSAMLSPClientConfigurationByAppName()

> **getSAMLSPClientConfigurationByAppName**(`requestParameters`, `options?`): `AxiosPromise`\<[`SamlSpConfig`](../loginradius-sdk/namespaces/Models/interfaces/SamlSpConfig.md)\>

Retrieves the Service Provider configuration details for a SAML client within the Tenant, identified by the application name.

#### Parameters

##### requestParameters

[`SAMLCustomProvidersApiGetSAMLSPClientConfigurationByAppNameRequest`](SAMLCustomProvidersApiGetSAMLSPClientConfigurationByAppNameRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`SamlSpConfig`](../loginradius-sdk/namespaces/Models/interfaces/SamlSpConfig.md)\>

#### Throws

#### Memberof

SAMLCustomProvidersApiInterface

***

### getSamlSPClientMappingKeys()

> **getSamlSPClientMappingKeys**(`options?`): `AxiosPromise`\<[`GetSamlSPClientMappingKeys200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetSamlSPClientMappingKeys200Response.md)\>

Retrieves a list of mapping keys available for configuring attribute mappings in SAML Service Provider clients within the Tenant.

#### Parameters

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`GetSamlSPClientMappingKeys200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetSamlSPClientMappingKeys200Response.md)\>

#### Throws

#### Memberof

SAMLCustomProvidersApiInterface

***

### renewSAMLSppCertificate()

> **renewSAMLSppCertificate**(`requestParameters`, `options?`): `AxiosPromise`\<[`SamlSpConfig`](../loginradius-sdk/namespaces/Models/interfaces/SamlSpConfig.md)\>

Renews the SAML Service Provider certificate to replace an expiring or compromised certificate.

#### Parameters

##### requestParameters

[`SAMLCustomProvidersApiRenewSAMLSppCertificateRequest`](SAMLCustomProvidersApiRenewSAMLSppCertificateRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`SamlSpConfig`](../loginradius-sdk/namespaces/Models/interfaces/SamlSpConfig.md)\>

#### Throws

#### Memberof

SAMLCustomProvidersApiInterface

***

### updateSAMLSPClientConfigurationByAppName()

> **updateSAMLSPClientConfigurationByAppName**(`requestParameters`, `options?`): `AxiosPromise`\<[`SamlSpConfig`](../loginradius-sdk/namespaces/Models/interfaces/SamlSpConfig.md)\>

Updates an existing Service Provider configuration for a SAML client within the Tenant, identified by the application name.

#### Parameters

##### requestParameters

[`SAMLCustomProvidersApiUpdateSAMLSPClientConfigurationByAppNameRequest`](SAMLCustomProvidersApiUpdateSAMLSPClientConfigurationByAppNameRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`SamlSpConfig`](../loginradius-sdk/namespaces/Models/interfaces/SamlSpConfig.md)\>

#### Throws

#### Memberof

SAMLCustomProvidersApiInterface

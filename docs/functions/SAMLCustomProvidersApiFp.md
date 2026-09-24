[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / SAMLCustomProvidersApiFp

# Function: SAMLCustomProvidersApiFp()

> **SAMLCustomProvidersApiFp**(`configuration?`): `object`

SAMLCustomProvidersApi - functional programming interface

## Parameters

### configuration?

`Configuration`

## Returns

### createSAMLSPClientConfiguration()

> **createSAMLSPClientConfiguration**(`samlSpConfigModel`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`SamlSpConfig`](../loginradius-sdk/namespaces/Models/interfaces/SamlSpConfig.md)\>\>

Creates a new Service Provider configuration for a SAML client within the Tenant, defining necessary settings for SAML authentication flows.

#### Parameters

##### samlSpConfigModel

[`SamlSpConfigModel`](../loginradius-sdk/namespaces/Models/interfaces/SamlSpConfigModel.md)

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`SamlSpConfig`](../loginradius-sdk/namespaces/Models/interfaces/SamlSpConfig.md)\>\>

#### Throws

### deleteSAMLSPClientConfigurationByAppName()

> **deleteSAMLSPClientConfigurationByAppName**(`samlApp`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md)\>\>

Deletes the Service Provider configuration for a SAML client within the Tenant, identified by the application name.

#### Parameters

##### samlApp

`string`

The SAML App identifier

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md)\>\>

#### Throws

### getAllSAMLSPClientConfigurations()

> **getAllSAMLSPClientConfigurations**(`options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`GetAllSAMLSPClientConfigurations200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetAllSAMLSPClientConfigurations200Response.md)\>\>

Retrieves a list of all Service Provider configurations for SAML clients within the Tenant, including details such as datamap, endpoints, and certificates.

#### Parameters

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`GetAllSAMLSPClientConfigurations200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetAllSAMLSPClientConfigurations200Response.md)\>\>

#### Throws

### getSAMLSPClientConfigurationByAppName()

> **getSAMLSPClientConfigurationByAppName**(`samlApp`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`SamlSpConfig`](../loginradius-sdk/namespaces/Models/interfaces/SamlSpConfig.md)\>\>

Retrieves the Service Provider configuration details for a SAML client within the Tenant, identified by the application name.

#### Parameters

##### samlApp

`string`

The SAML App identifier

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`SamlSpConfig`](../loginradius-sdk/namespaces/Models/interfaces/SamlSpConfig.md)\>\>

#### Throws

### getSamlSPClientMappingKeys()

> **getSamlSPClientMappingKeys**(`options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`GetSamlSPClientMappingKeys200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetSamlSPClientMappingKeys200Response.md)\>\>

Retrieves a list of mapping keys available for configuring attribute mappings in SAML Service Provider clients within the Tenant.

#### Parameters

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`GetSamlSPClientMappingKeys200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetSamlSPClientMappingKeys200Response.md)\>\>

#### Throws

### renewSAMLSppCertificate()

> **renewSAMLSppCertificate**(`samlApp`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`SamlSpConfig`](../loginradius-sdk/namespaces/Models/interfaces/SamlSpConfig.md)\>\>

Renews the SAML Service Provider certificate to replace an expiring or compromised certificate.

#### Parameters

##### samlApp

`string`

The SAML App identifier

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`SamlSpConfig`](../loginradius-sdk/namespaces/Models/interfaces/SamlSpConfig.md)\>\>

#### Throws

### updateSAMLSPClientConfigurationByAppName()

> **updateSAMLSPClientConfigurationByAppName**(`samlApp`, `samlSpConfigModel`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`SamlSpConfig`](../loginradius-sdk/namespaces/Models/interfaces/SamlSpConfig.md)\>\>

Updates an existing Service Provider configuration for a SAML client within the Tenant, identified by the application name.

#### Parameters

##### samlApp

`string`

The SAML App identifier

##### samlSpConfigModel

[`SamlSpConfigModel`](../loginradius-sdk/namespaces/Models/interfaces/SamlSpConfigModel.md)

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`SamlSpConfig`](../loginradius-sdk/namespaces/Models/interfaces/SamlSpConfig.md)\>\>

#### Throws

## Export

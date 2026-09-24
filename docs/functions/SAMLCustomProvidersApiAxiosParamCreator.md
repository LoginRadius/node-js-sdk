[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / SAMLCustomProvidersApiAxiosParamCreator

# Function: SAMLCustomProvidersApiAxiosParamCreator()

> **SAMLCustomProvidersApiAxiosParamCreator**(`configuration?`): `object`

SAMLCustomProvidersApi - axios parameter creator

## Parameters

### configuration?

`Configuration`

## Returns

### createSAMLSPClientConfiguration

> **createSAMLSPClientConfiguration**: (`samlSpConfigModel`, `options?`) => `Promise`\<`RequestArgs`\>

Creates a new Service Provider configuration for a SAML client within the Tenant, defining necessary settings for SAML authentication flows.

#### Parameters

##### samlSpConfigModel

[`SamlSpConfigModel`](../loginradius-sdk/namespaces/Models/interfaces/SamlSpConfigModel.md)

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### deleteSAMLSPClientConfigurationByAppName

> **deleteSAMLSPClientConfigurationByAppName**: (`samlApp`, `options?`) => `Promise`\<`RequestArgs`\>

Deletes the Service Provider configuration for a SAML client within the Tenant, identified by the application name.

#### Parameters

##### samlApp

`string`

The SAML App identifier

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### getAllSAMLSPClientConfigurations

> **getAllSAMLSPClientConfigurations**: (`options?`) => `Promise`\<`RequestArgs`\>

Retrieves a list of all Service Provider configurations for SAML clients within the Tenant, including details such as datamap, endpoints, and certificates.

#### Parameters

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### getSAMLSPClientConfigurationByAppName

> **getSAMLSPClientConfigurationByAppName**: (`samlApp`, `options?`) => `Promise`\<`RequestArgs`\>

Retrieves the Service Provider configuration details for a SAML client within the Tenant, identified by the application name.

#### Parameters

##### samlApp

`string`

The SAML App identifier

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### getSamlSPClientMappingKeys

> **getSamlSPClientMappingKeys**: (`options?`) => `Promise`\<`RequestArgs`\>

Retrieves a list of mapping keys available for configuring attribute mappings in SAML Service Provider clients within the Tenant.

#### Parameters

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### renewSAMLSppCertificate

> **renewSAMLSppCertificate**: (`samlApp`, `options?`) => `Promise`\<`RequestArgs`\>

Renews the SAML Service Provider certificate to replace an expiring or compromised certificate.

#### Parameters

##### samlApp

`string`

The SAML App identifier

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### updateSAMLSPClientConfigurationByAppName

> **updateSAMLSPClientConfigurationByAppName**: (`samlApp`, `samlSpConfigModel`, `options?`) => `Promise`\<`RequestArgs`\>

Updates an existing Service Provider configuration for a SAML client within the Tenant, identified by the application name.

#### Parameters

##### samlApp

`string`

The SAML App identifier

##### samlSpConfigModel

[`SamlSpConfigModel`](../loginradius-sdk/namespaces/Models/interfaces/SamlSpConfigModel.md)

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

## Export

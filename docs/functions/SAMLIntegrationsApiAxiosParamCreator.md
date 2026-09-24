[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / SAMLIntegrationsApiAxiosParamCreator

# Function: SAMLIntegrationsApiAxiosParamCreator()

> **SAMLIntegrationsApiAxiosParamCreator**(`configuration?`): `object`

SAMLIntegrationsApi - axios parameter creator

## Parameters

### configuration?

`Configuration`

## Returns

### createSamlIntegration

> **createSamlIntegration**: (`createSamlIntegrationRequest`, `options?`) => `Promise`\<`RequestArgs`\>

Creates a new SAML-based Identity Provider integration for the Tenant, enabling authentication and federation with the specified IdP.

#### Parameters

##### createSamlIntegrationRequest

[`CreateSamlIntegrationRequest`](../loginradius-sdk/namespaces/Models/type-aliases/CreateSamlIntegrationRequest.md)

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### deleteSamlIntegrationByAppName

> **deleteSamlIntegrationByAppName**: (`samlApp`, `options?`) => `Promise`\<`RequestArgs`\>

Deletes the SAML-based Identity Provider configuration for the Tenant identified by the application name, disabling authentication for the specified application.

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

### getAllSamlIntegrations

> **getAllSamlIntegrations**: (`options?`) => `Promise`\<`RequestArgs`\>

Retrieves a list of all configured SAML-based Identity Provider integrations for the Tenant, including metadata and settings for authentication.

#### Parameters

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### getSamlIntegrationByAppName

> **getSamlIntegrationByAppName**: (`samlApp`, `options?`) => `Promise`\<`RequestArgs`\>

Retrieves the SAML-based Identity Provider configuration details for the Tenant using the application name, including metadata and settings.

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

### renewSamlIntegrationCertificate

> **renewSamlIntegrationCertificate**: (`samlApp`, `options?`) => `Promise`\<`RequestArgs`\>

Renews the SAML Identity Provider certificate to replace an expiring or compromised signing certificate.

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

### updateSamlIntegrationByAppName

> **updateSamlIntegrationByAppName**: (`samlApp`, `samlIntegrationRequest`, `options?`) => `Promise`\<`RequestArgs`\>

Updates an existing SAML-based Identity Provider configuration for the Tenant identified by the application name, modifying necessary settings.

#### Parameters

##### samlApp

`string`

The SAML App identifier

##### samlIntegrationRequest

[`SamlIntegrationRequest`](../loginradius-sdk/namespaces/Models/interfaces/SamlIntegrationRequest.md)

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

## Export

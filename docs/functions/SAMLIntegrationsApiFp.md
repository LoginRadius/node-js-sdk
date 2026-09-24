[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / SAMLIntegrationsApiFp

# Function: SAMLIntegrationsApiFp()

> **SAMLIntegrationsApiFp**(`configuration?`): `object`

SAMLIntegrationsApi - functional programming interface

## Parameters

### configuration?

`Configuration`

## Returns

### createSamlIntegration()

> **createSamlIntegration**(`createSamlIntegrationRequest`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`SamlIntegrationResponse`](../loginradius-sdk/namespaces/Models/interfaces/SamlIntegrationResponse.md)\>\>

Creates a new SAML-based Identity Provider integration for the Tenant, enabling authentication and federation with the specified IdP.

#### Parameters

##### createSamlIntegrationRequest

[`CreateSamlIntegrationRequest`](../loginradius-sdk/namespaces/Models/type-aliases/CreateSamlIntegrationRequest.md)

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`SamlIntegrationResponse`](../loginradius-sdk/namespaces/Models/interfaces/SamlIntegrationResponse.md)\>\>

#### Throws

### deleteSamlIntegrationByAppName()

> **deleteSamlIntegrationByAppName**(`samlApp`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md)\>\>

Deletes the SAML-based Identity Provider configuration for the Tenant identified by the application name, disabling authentication for the specified application.

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

### getAllSamlIntegrations()

> **getAllSamlIntegrations**(`options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`GetAllSamlIntegrations200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetAllSamlIntegrations200Response.md)\>\>

Retrieves a list of all configured SAML-based Identity Provider integrations for the Tenant, including metadata and settings for authentication.

#### Parameters

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`GetAllSamlIntegrations200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetAllSamlIntegrations200Response.md)\>\>

#### Throws

### getSamlIntegrationByAppName()

> **getSamlIntegrationByAppName**(`samlApp`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`SamlIntegrationResponse`](../loginradius-sdk/namespaces/Models/interfaces/SamlIntegrationResponse.md)\>\>

Retrieves the SAML-based Identity Provider configuration details for the Tenant using the application name, including metadata and settings.

#### Parameters

##### samlApp

`string`

The SAML App identifier

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`SamlIntegrationResponse`](../loginradius-sdk/namespaces/Models/interfaces/SamlIntegrationResponse.md)\>\>

#### Throws

### renewSamlIntegrationCertificate()

> **renewSamlIntegrationCertificate**(`samlApp`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`SamlIntegrationResponse`](../loginradius-sdk/namespaces/Models/interfaces/SamlIntegrationResponse.md)\>\>

Renews the SAML Identity Provider certificate to replace an expiring or compromised signing certificate.

#### Parameters

##### samlApp

`string`

The SAML App identifier

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`SamlIntegrationResponse`](../loginradius-sdk/namespaces/Models/interfaces/SamlIntegrationResponse.md)\>\>

#### Throws

### updateSamlIntegrationByAppName()

> **updateSamlIntegrationByAppName**(`samlApp`, `samlIntegrationRequest`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`SamlIntegrationResponse`](../loginradius-sdk/namespaces/Models/interfaces/SamlIntegrationResponse.md)\>\>

Updates an existing SAML-based Identity Provider configuration for the Tenant identified by the application name, modifying necessary settings.

#### Parameters

##### samlApp

`string`

The SAML App identifier

##### samlIntegrationRequest

[`SamlIntegrationRequest`](../loginradius-sdk/namespaces/Models/interfaces/SamlIntegrationRequest.md)

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`SamlIntegrationResponse`](../loginradius-sdk/namespaces/Models/interfaces/SamlIntegrationResponse.md)\>\>

#### Throws

## Export

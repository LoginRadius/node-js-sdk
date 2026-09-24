[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / SAMLIntegrationsApiFactory

# Function: SAMLIntegrationsApiFactory()

> **SAMLIntegrationsApiFactory**(`configuration?`, `basePath?`, `axios?`): `object`

SAMLIntegrationsApi - factory interface

## Parameters

### configuration?

`Configuration`

### basePath?

`string`

### axios?

`AxiosInstance`

## Returns

### createSamlIntegration()

> **createSamlIntegration**(`requestParameters`, `options?`): `AxiosPromise`\<[`SamlIntegrationResponse`](../loginradius-sdk/namespaces/Models/interfaces/SamlIntegrationResponse.md)\>

Creates a new SAML-based Identity Provider integration for the Tenant, enabling authentication and federation with the specified IdP.

#### Parameters

##### requestParameters

[`SAMLIntegrationsApiCreateSamlIntegrationRequest`](../interfaces/SAMLIntegrationsApiCreateSamlIntegrationRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`SamlIntegrationResponse`](../loginradius-sdk/namespaces/Models/interfaces/SamlIntegrationResponse.md)\>

#### Throws

### deleteSamlIntegrationByAppName()

> **deleteSamlIntegrationByAppName**(`requestParameters`, `options?`): `AxiosPromise`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md)\>

Deletes the SAML-based Identity Provider configuration for the Tenant identified by the application name, disabling authentication for the specified application.

#### Parameters

##### requestParameters

[`SAMLIntegrationsApiDeleteSamlIntegrationByAppNameRequest`](../interfaces/SAMLIntegrationsApiDeleteSamlIntegrationByAppNameRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md)\>

#### Throws

### getAllSamlIntegrations()

> **getAllSamlIntegrations**(`options?`): `AxiosPromise`\<[`GetAllSamlIntegrations200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetAllSamlIntegrations200Response.md)\>

Retrieves a list of all configured SAML-based Identity Provider integrations for the Tenant, including metadata and settings for authentication.

#### Parameters

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`GetAllSamlIntegrations200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetAllSamlIntegrations200Response.md)\>

#### Throws

### getSamlIntegrationByAppName()

> **getSamlIntegrationByAppName**(`requestParameters`, `options?`): `AxiosPromise`\<[`SamlIntegrationResponse`](../loginradius-sdk/namespaces/Models/interfaces/SamlIntegrationResponse.md)\>

Retrieves the SAML-based Identity Provider configuration details for the Tenant using the application name, including metadata and settings.

#### Parameters

##### requestParameters

[`SAMLIntegrationsApiGetSamlIntegrationByAppNameRequest`](../interfaces/SAMLIntegrationsApiGetSamlIntegrationByAppNameRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`SamlIntegrationResponse`](../loginradius-sdk/namespaces/Models/interfaces/SamlIntegrationResponse.md)\>

#### Throws

### renewSamlIntegrationCertificate()

> **renewSamlIntegrationCertificate**(`requestParameters`, `options?`): `AxiosPromise`\<[`SamlIntegrationResponse`](../loginradius-sdk/namespaces/Models/interfaces/SamlIntegrationResponse.md)\>

Renews the SAML Identity Provider certificate to replace an expiring or compromised signing certificate.

#### Parameters

##### requestParameters

[`SAMLIntegrationsApiRenewSamlIntegrationCertificateRequest`](../interfaces/SAMLIntegrationsApiRenewSamlIntegrationCertificateRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`SamlIntegrationResponse`](../loginradius-sdk/namespaces/Models/interfaces/SamlIntegrationResponse.md)\>

#### Throws

### updateSamlIntegrationByAppName()

> **updateSamlIntegrationByAppName**(`requestParameters`, `options?`): `AxiosPromise`\<[`SamlIntegrationResponse`](../loginradius-sdk/namespaces/Models/interfaces/SamlIntegrationResponse.md)\>

Updates an existing SAML-based Identity Provider configuration for the Tenant identified by the application name, modifying necessary settings.

#### Parameters

##### requestParameters

[`SAMLIntegrationsApiUpdateSamlIntegrationByAppNameRequest`](../interfaces/SAMLIntegrationsApiUpdateSamlIntegrationByAppNameRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`SamlIntegrationResponse`](../loginradius-sdk/namespaces/Models/interfaces/SamlIntegrationResponse.md)\>

#### Throws

## Export

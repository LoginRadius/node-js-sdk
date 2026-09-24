[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / SAMLApiFp

# Function: SAMLApiFp()

> **SAMLApiFp**(`configuration?`): `object`

SAMLApi - functional programming interface

## Parameters

### configuration?

`Configuration`

## Returns

### getSAMLIDPMetadata()

> **getSAMLIDPMetadata**(`appName`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`SamlIdpMetadataResponse`](../loginradius-sdk/namespaces/Models/interfaces/SamlIdpMetadataResponse.md)\>\>

Retrieves metadata for a SAML Identity Provider (IDP).

#### Parameters

##### appName

`string`

Saml App Name

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`SamlIdpMetadataResponse`](../loginradius-sdk/namespaces/Models/interfaces/SamlIdpMetadataResponse.md)\>\>

#### Throws

## Export

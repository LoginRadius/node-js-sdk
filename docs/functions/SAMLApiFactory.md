[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / SAMLApiFactory

# Function: SAMLApiFactory()

> **SAMLApiFactory**(`configuration?`, `basePath?`, `axios?`): `object`

SAMLApi - factory interface

## Parameters

### configuration?

`Configuration`

### basePath?

`string`

### axios?

`AxiosInstance`

## Returns

### getSAMLIDPMetadata()

> **getSAMLIDPMetadata**(`requestParameters`, `options?`): `AxiosPromise`\<[`SamlIdpMetadataResponse`](../loginradius-sdk/namespaces/Models/interfaces/SamlIdpMetadataResponse.md)\>

Retrieves metadata for a SAML Identity Provider (IDP).

#### Parameters

##### requestParameters

[`SAMLApiGetSAMLIDPMetadataRequest`](../interfaces/SAMLApiGetSAMLIDPMetadataRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`SamlIdpMetadataResponse`](../loginradius-sdk/namespaces/Models/interfaces/SamlIdpMetadataResponse.md)\>

#### Throws

## Export

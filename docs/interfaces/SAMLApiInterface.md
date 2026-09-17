[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / SAMLApiInterface

# Interface: SAMLApiInterface

SAMLApi - interface

## Export

SAMLApi

## Methods

### getSAMLIDPMetadata()

> **getSAMLIDPMetadata**(`requestParameters`, `options?`): `AxiosPromise`\<[`SamlIdpMetadataResponse`](../loginradius-sdk/namespaces/Models/interfaces/SamlIdpMetadataResponse.md)\>

Retrieves metadata for a SAML Identity Provider (IDP).

#### Parameters

##### requestParameters

[`SAMLApiGetSAMLIDPMetadataRequest`](SAMLApiGetSAMLIDPMetadataRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`SamlIdpMetadataResponse`](../loginradius-sdk/namespaces/Models/interfaces/SamlIdpMetadataResponse.md)\>

#### Throws

#### Memberof

SAMLApiInterface

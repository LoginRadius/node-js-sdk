[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / SAMLApi

# Class: SAMLApi

SAMLApi - object-oriented interface

## Export

SAMLApi

## Extends

- `BaseAPI`

## Implements

- [`SAMLApiInterface`](../interfaces/SAMLApiInterface.md)

## Constructors

### Constructor

> **new SAMLApi**(`configuration?`, `basePath?`, `axios?`): `SAMLApi`

#### Parameters

##### configuration?

`Configuration`

##### basePath?

`string` = `BASE_PATH`

##### axios?

`AxiosInstance` = `globalAxios`

#### Returns

`SAMLApi`

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

### getSAMLIDPMetadata()

> **getSAMLIDPMetadata**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`SamlIdpMetadataResponse`](../loginradius-sdk/namespaces/Models/interfaces/SamlIdpMetadataResponse.md), `any`, \{ \}, `any`\>\>

Retrieves metadata for a SAML Identity Provider (IDP).

#### Parameters

##### requestParameters

[`SAMLApiGetSAMLIDPMetadataRequest`](../interfaces/SAMLApiGetSAMLIDPMetadataRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`SamlIdpMetadataResponse`](../loginradius-sdk/namespaces/Models/interfaces/SamlIdpMetadataResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

SAMLApi

#### Implementation of

[`SAMLApiInterface`](../interfaces/SAMLApiInterface.md).[`getSAMLIDPMetadata`](../interfaces/SAMLApiInterface.md#getsamlidpmetadata)

[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / BigCommerceSSOApi

# Class: BigCommerceSSOApi

BigCommerceSSOApi - object-oriented interface

## Export

BigCommerceSSOApi

## Extends

- `BaseAPI`

## Implements

- [`BigCommerceSSOApiInterface`](../interfaces/BigCommerceSSOApiInterface.md)

## Constructors

### Constructor

> **new BigCommerceSSOApi**(`configuration?`, `basePath?`, `axios?`): `BigCommerceSSOApi`

#### Parameters

##### configuration?

`Configuration`

##### basePath?

`string` = `BASE_PATH`

##### axios?

`AxiosInstance` = `globalAxios`

#### Returns

`BigCommerceSSOApi`

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

### bigCommerceAuth()

> **bigCommerceAuth**(`requestParameters?`, `options?`): `Promise`\<`AxiosResponse`\<`string`, `any`, \{ \}, `any`\>\>

Handles BigCommerce OAuth authorization callbacks. Accepts either an authorization code (for install flow) or a signed_payload (for load/uninstall callbacks). Returns an HTML page on success.

#### Parameters

##### requestParameters?

[`BigCommerceSSOApiBigCommerceAuthRequest`](../interfaces/BigCommerceSSOApiBigCommerceAuthRequest.md) = `{}`

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<`string`, `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

BigCommerceSSOApi

#### Implementation of

[`BigCommerceSSOApiInterface`](../interfaces/BigCommerceSSOApiInterface.md).[`bigCommerceAuth`](../interfaces/BigCommerceSSOApiInterface.md#bigcommerceauth)

***

### getBigCommerceLoginUrl()

> **getBigCommerceLoginUrl**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`BigCommerceLoginUrlResponse`](../loginradius-sdk/namespaces/Models/interfaces/BigCommerceLoginUrlResponse.md), `any`, \{ \}, `any`\>\>

Generates a BigCommerce customer login URL using the provided LoginRadius access token. If the customer does not exist in BigCommerce, it creates one. Returns a login URL that can be used to authenticate the user into BigCommerce.

#### Parameters

##### requestParameters

[`BigCommerceSSOApiGetBigCommerceLoginUrlRequest`](../interfaces/BigCommerceSSOApiGetBigCommerceLoginUrlRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`BigCommerceLoginUrlResponse`](../loginradius-sdk/namespaces/Models/interfaces/BigCommerceLoginUrlResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

BigCommerceSSOApi

#### Implementation of

[`BigCommerceSSOApiInterface`](../interfaces/BigCommerceSSOApiInterface.md).[`getBigCommerceLoginUrl`](../interfaces/BigCommerceSSOApiInterface.md#getbigcommerceloginurl)

***

### postBigCommerceLoginUrl()

> **postBigCommerceLoginUrl**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`BigCommerceLoginUrlResponse`](../loginradius-sdk/namespaces/Models/interfaces/BigCommerceLoginUrlResponse.md), `any`, \{ \}, `any`\>\>

Generates a BigCommerce customer login URL using the provided LoginRadius access token sent in the request body. If the customer does not exist in BigCommerce, it creates one. Returns a login URL that can be used to authenticate the user into BigCommerce.

#### Parameters

##### requestParameters

[`BigCommerceSSOApiPostBigCommerceLoginUrlRequest`](../interfaces/BigCommerceSSOApiPostBigCommerceLoginUrlRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`BigCommerceLoginUrlResponse`](../loginradius-sdk/namespaces/Models/interfaces/BigCommerceLoginUrlResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

BigCommerceSSOApi

#### Implementation of

[`BigCommerceSSOApiInterface`](../interfaces/BigCommerceSSOApiInterface.md).[`postBigCommerceLoginUrl`](../interfaces/BigCommerceSSOApiInterface.md#postbigcommerceloginurl)

***

### validateBigCommercePassword()

> **validateBigCommercePassword**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`BigCommerceValidatePasswordResponse`](../loginradius-sdk/namespaces/Models/interfaces/BigCommerceValidatePasswordResponse.md), `any`, \{ \}, `any`\>\>

Validates a BigCommerce customer\'s password by checking the provided email and password against the BigCommerce store\'s customer records.

#### Parameters

##### requestParameters

[`BigCommerceSSOApiValidateBigCommercePasswordRequest`](../interfaces/BigCommerceSSOApiValidateBigCommercePasswordRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`BigCommerceValidatePasswordResponse`](../loginradius-sdk/namespaces/Models/interfaces/BigCommerceValidatePasswordResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

BigCommerceSSOApi

#### Implementation of

[`BigCommerceSSOApiInterface`](../interfaces/BigCommerceSSOApiInterface.md).[`validateBigCommercePassword`](../interfaces/BigCommerceSSOApiInterface.md#validatebigcommercepassword)

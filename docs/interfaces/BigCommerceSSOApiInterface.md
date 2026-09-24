[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / BigCommerceSSOApiInterface

# Interface: BigCommerceSSOApiInterface

BigCommerceSSOApi - interface

## Export

BigCommerceSSOApi

## Methods

### bigCommerceAuth()

> **bigCommerceAuth**(`requestParameters?`, `options?`): `AxiosPromise`\<`string`\>

Handles BigCommerce OAuth authorization callbacks. Accepts either an authorization code (for install flow) or a signed_payload (for load/uninstall callbacks). Returns an HTML page on success.

#### Parameters

##### requestParameters?

[`BigCommerceSSOApiBigCommerceAuthRequest`](BigCommerceSSOApiBigCommerceAuthRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<`string`\>

#### Throws

#### Memberof

BigCommerceSSOApiInterface

***

### getBigCommerceLoginUrl()

> **getBigCommerceLoginUrl**(`requestParameters`, `options?`): `AxiosPromise`\<[`BigCommerceLoginUrlResponse`](../loginradius-sdk/namespaces/Models/interfaces/BigCommerceLoginUrlResponse.md)\>

Generates a BigCommerce customer login URL using the provided LoginRadius access token. If the customer does not exist in BigCommerce, it creates one. Returns a login URL that can be used to authenticate the user into BigCommerce.

#### Parameters

##### requestParameters

[`BigCommerceSSOApiGetBigCommerceLoginUrlRequest`](BigCommerceSSOApiGetBigCommerceLoginUrlRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`BigCommerceLoginUrlResponse`](../loginradius-sdk/namespaces/Models/interfaces/BigCommerceLoginUrlResponse.md)\>

#### Throws

#### Memberof

BigCommerceSSOApiInterface

***

### postBigCommerceLoginUrl()

> **postBigCommerceLoginUrl**(`requestParameters`, `options?`): `AxiosPromise`\<[`BigCommerceLoginUrlResponse`](../loginradius-sdk/namespaces/Models/interfaces/BigCommerceLoginUrlResponse.md)\>

Generates a BigCommerce customer login URL using the provided LoginRadius access token sent in the request body. If the customer does not exist in BigCommerce, it creates one. Returns a login URL that can be used to authenticate the user into BigCommerce.

#### Parameters

##### requestParameters

[`BigCommerceSSOApiPostBigCommerceLoginUrlRequest`](BigCommerceSSOApiPostBigCommerceLoginUrlRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`BigCommerceLoginUrlResponse`](../loginradius-sdk/namespaces/Models/interfaces/BigCommerceLoginUrlResponse.md)\>

#### Throws

#### Memberof

BigCommerceSSOApiInterface

***

### validateBigCommercePassword()

> **validateBigCommercePassword**(`requestParameters`, `options?`): `AxiosPromise`\<[`BigCommerceValidatePasswordResponse`](../loginradius-sdk/namespaces/Models/interfaces/BigCommerceValidatePasswordResponse.md)\>

Validates a BigCommerce customer\'s password by checking the provided email and password against the BigCommerce store\'s customer records.

#### Parameters

##### requestParameters

[`BigCommerceSSOApiValidateBigCommercePasswordRequest`](BigCommerceSSOApiValidateBigCommercePasswordRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`BigCommerceValidatePasswordResponse`](../loginradius-sdk/namespaces/Models/interfaces/BigCommerceValidatePasswordResponse.md)\>

#### Throws

#### Memberof

BigCommerceSSOApiInterface

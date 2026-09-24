[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / BigCommerceSSOApiFactory

# Function: BigCommerceSSOApiFactory()

> **BigCommerceSSOApiFactory**(`configuration?`, `basePath?`, `axios?`): `object`

BigCommerceSSOApi - factory interface

## Parameters

### configuration?

`Configuration`

### basePath?

`string`

### axios?

`AxiosInstance`

## Returns

### bigCommerceAuth()

> **bigCommerceAuth**(`requestParameters?`, `options?`): `AxiosPromise`\<`string`\>

Handles BigCommerce OAuth authorization callbacks. Accepts either an authorization code (for install flow) or a signed_payload (for load/uninstall callbacks). Returns an HTML page on success.

#### Parameters

##### requestParameters?

[`BigCommerceSSOApiBigCommerceAuthRequest`](../interfaces/BigCommerceSSOApiBigCommerceAuthRequest.md) = `{}`

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<`string`\>

#### Throws

### getBigCommerceLoginUrl()

> **getBigCommerceLoginUrl**(`requestParameters`, `options?`): `AxiosPromise`\<[`BigCommerceLoginUrlResponse`](../loginradius-sdk/namespaces/Models/interfaces/BigCommerceLoginUrlResponse.md)\>

Generates a BigCommerce customer login URL using the provided LoginRadius access token. If the customer does not exist in BigCommerce, it creates one. Returns a login URL that can be used to authenticate the user into BigCommerce.

#### Parameters

##### requestParameters

[`BigCommerceSSOApiGetBigCommerceLoginUrlRequest`](../interfaces/BigCommerceSSOApiGetBigCommerceLoginUrlRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`BigCommerceLoginUrlResponse`](../loginradius-sdk/namespaces/Models/interfaces/BigCommerceLoginUrlResponse.md)\>

#### Throws

### postBigCommerceLoginUrl()

> **postBigCommerceLoginUrl**(`requestParameters`, `options?`): `AxiosPromise`\<[`BigCommerceLoginUrlResponse`](../loginradius-sdk/namespaces/Models/interfaces/BigCommerceLoginUrlResponse.md)\>

Generates a BigCommerce customer login URL using the provided LoginRadius access token sent in the request body. If the customer does not exist in BigCommerce, it creates one. Returns a login URL that can be used to authenticate the user into BigCommerce.

#### Parameters

##### requestParameters

[`BigCommerceSSOApiPostBigCommerceLoginUrlRequest`](../interfaces/BigCommerceSSOApiPostBigCommerceLoginUrlRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`BigCommerceLoginUrlResponse`](../loginradius-sdk/namespaces/Models/interfaces/BigCommerceLoginUrlResponse.md)\>

#### Throws

### validateBigCommercePassword()

> **validateBigCommercePassword**(`requestParameters`, `options?`): `AxiosPromise`\<[`BigCommerceValidatePasswordResponse`](../loginradius-sdk/namespaces/Models/interfaces/BigCommerceValidatePasswordResponse.md)\>

Validates a BigCommerce customer\'s password by checking the provided email and password against the BigCommerce store\'s customer records.

#### Parameters

##### requestParameters

[`BigCommerceSSOApiValidateBigCommercePasswordRequest`](../interfaces/BigCommerceSSOApiValidateBigCommercePasswordRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`BigCommerceValidatePasswordResponse`](../loginradius-sdk/namespaces/Models/interfaces/BigCommerceValidatePasswordResponse.md)\>

#### Throws

## Export

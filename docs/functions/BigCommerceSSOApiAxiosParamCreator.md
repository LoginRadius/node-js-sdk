[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / BigCommerceSSOApiAxiosParamCreator

# Function: BigCommerceSSOApiAxiosParamCreator()

> **BigCommerceSSOApiAxiosParamCreator**(`configuration?`): `object`

BigCommerceSSOApi - axios parameter creator

## Parameters

### configuration?

`Configuration`

## Returns

### bigCommerceAuth

> **bigCommerceAuth**: (`code?`, `signedPayload?`, `options?`) => `Promise`\<`RequestArgs`\>

Handles BigCommerce OAuth authorization callbacks. Accepts either an authorization code (for install flow) or a signed_payload (for load/uninstall callbacks). Returns an HTML page on success.

#### Parameters

##### code?

`string`

BigCommerce OAuth authorization code

##### signedPayload?

`string`

BigCommerce signed payload for load/uninstall callbacks

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### getBigCommerceLoginUrl

> **getBigCommerceLoginUrl**: (`accessToken`, `store`, `password?`, `returnUrl?`, `options?`) => `Promise`\<`RequestArgs`\>

Generates a BigCommerce customer login URL using the provided LoginRadius access token. If the customer does not exist in BigCommerce, it creates one. Returns a login URL that can be used to authenticate the user into BigCommerce.

#### Parameters

##### accessToken

`string`

Access Token of the User

##### store

`string`

BigCommerce store hash identifier

##### password?

`string`

User\&#39;s password

##### returnUrl?

`string`

URL to redirect the user to after login

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### postBigCommerceLoginUrl

> **postBigCommerceLoginUrl**: (`store`, `bigCommerceTokenPostRequest`, `options?`) => `Promise`\<`RequestArgs`\>

Generates a BigCommerce customer login URL using the provided LoginRadius access token sent in the request body. If the customer does not exist in BigCommerce, it creates one. Returns a login URL that can be used to authenticate the user into BigCommerce.

#### Parameters

##### store

`string`

BigCommerce store hash identifier

##### bigCommerceTokenPostRequest

[`BigCommerceTokenPostRequest`](../loginradius-sdk/namespaces/Models/interfaces/BigCommerceTokenPostRequest.md)

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### validateBigCommercePassword

> **validateBigCommercePassword**: (`store`, `bigCommerceValidatePasswordRequest`, `options?`) => `Promise`\<`RequestArgs`\>

Validates a BigCommerce customer\'s password by checking the provided email and password against the BigCommerce store\'s customer records.

#### Parameters

##### store

`string`

BigCommerce store hash identifier

##### bigCommerceValidatePasswordRequest

[`BigCommerceValidatePasswordRequest`](../loginradius-sdk/namespaces/Models/interfaces/BigCommerceValidatePasswordRequest.md)

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

## Export

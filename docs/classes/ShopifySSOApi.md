[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / ShopifySSOApi

# Class: ShopifySSOApi

ShopifySSOApi - object-oriented interface

## Export

ShopifySSOApi

## Extends

- `BaseAPI`

## Implements

- [`ShopifySSOApiInterface`](../interfaces/ShopifySSOApiInterface.md)

## Constructors

### Constructor

> **new ShopifySSOApi**(`configuration?`, `basePath?`, `axios?`): `ShopifySSOApi`

#### Parameters

##### configuration?

`Configuration`

##### basePath?

`string` = `BASE_PATH`

##### axios?

`AxiosInstance` = `globalAxios`

#### Returns

`ShopifySSOApi`

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

### getShopifyLoginUrl()

> **getShopifyLoginUrl**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`ShopifyLoginUrlResponse`](../loginradius-sdk/namespaces/Models/interfaces/ShopifyLoginUrlResponse.md), `any`, \{ \}, `any`\>\>

Generates a Shopify Multipass login URL using the provided LoginRadius access token. Uses Shopify\'s Multipass feature to create a single sign-on URL that authenticates the user into the Shopify store.

#### Parameters

##### requestParameters

[`ShopifySSOApiGetShopifyLoginUrlRequest`](../interfaces/ShopifySSOApiGetShopifyLoginUrlRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`ShopifyLoginUrlResponse`](../loginradius-sdk/namespaces/Models/interfaces/ShopifyLoginUrlResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

ShopifySSOApi

#### Implementation of

[`ShopifySSOApiInterface`](../interfaces/ShopifySSOApiInterface.md).[`getShopifyLoginUrl`](../interfaces/ShopifySSOApiInterface.md#getshopifyloginurl)

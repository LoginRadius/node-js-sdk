[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / ShopifySSOApiInterface

# Interface: ShopifySSOApiInterface

ShopifySSOApi - interface

## Export

ShopifySSOApi

## Methods

### getShopifyLoginUrl()

> **getShopifyLoginUrl**(`requestParameters`, `options?`): `AxiosPromise`\<[`ShopifyLoginUrlResponse`](../loginradius-sdk/namespaces/Models/interfaces/ShopifyLoginUrlResponse.md)\>

Generates a Shopify Multipass login URL using the provided LoginRadius access token. Uses Shopify\'s Multipass feature to create a single sign-on URL that authenticates the user into the Shopify store.

#### Parameters

##### requestParameters

[`ShopifySSOApiGetShopifyLoginUrlRequest`](ShopifySSOApiGetShopifyLoginUrlRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`ShopifyLoginUrlResponse`](../loginradius-sdk/namespaces/Models/interfaces/ShopifyLoginUrlResponse.md)\>

#### Throws

#### Memberof

ShopifySSOApiInterface

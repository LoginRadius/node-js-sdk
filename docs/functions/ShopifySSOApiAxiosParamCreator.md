[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / ShopifySSOApiAxiosParamCreator

# Function: ShopifySSOApiAxiosParamCreator()

> **ShopifySSOApiAxiosParamCreator**(`configuration?`): `object`

ShopifySSOApi - axios parameter creator

## Parameters

### configuration?

`Configuration`

## Returns

### getShopifyLoginUrl

> **getShopifyLoginUrl**: (`accessToken`, `store`, `returnUrl?`, `options?`) => `Promise`\<`RequestArgs`\>

Generates a Shopify Multipass login URL using the provided LoginRadius access token. Uses Shopify\'s Multipass feature to create a single sign-on URL that authenticates the user into the Shopify store.

#### Parameters

##### accessToken

`string`

Access Token of the User

##### store

`string`

Shopify store domain (e.g., mystore.myshopify.com)

##### returnUrl?

`string`

URL to redirect the user to after login

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

## Export

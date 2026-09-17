[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / OAuthCustomProvidersApi

# Class: OAuthCustomProvidersApi

OAuthCustomProvidersApi - object-oriented interface

## Export

OAuthCustomProvidersApi

## Extends

- `BaseAPI`

## Implements

- [`OAuthCustomProvidersApiInterface`](../interfaces/OAuthCustomProvidersApiInterface.md)

## Constructors

### Constructor

> **new OAuthCustomProvidersApi**(`configuration?`, `basePath?`, `axios?`): `OAuthCustomProvidersApi`

#### Parameters

##### configuration?

`Configuration`

##### basePath?

`string` = `BASE_PATH`

##### axios?

`AxiosInstance` = `globalAxios`

#### Returns

`OAuthCustomProvidersApi`

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

### createCustomProvider()

> **createCustomProvider**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`OAuth2Provider`](../loginradius-sdk/namespaces/Models/interfaces/OAuth2Provider.md), `any`, \{ \}, `any`\>\>

Creates a new Custom OAuth provider for the Tenant.

#### Parameters

##### requestParameters

[`OAuthCustomProvidersApiCreateCustomProviderRequest`](../interfaces/OAuthCustomProvidersApiCreateCustomProviderRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`OAuth2Provider`](../loginradius-sdk/namespaces/Models/interfaces/OAuth2Provider.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

OAuthCustomProvidersApi

#### Implementation of

[`OAuthCustomProvidersApiInterface`](../interfaces/OAuthCustomProvidersApiInterface.md).[`createCustomProvider`](../interfaces/OAuthCustomProvidersApiInterface.md#createcustomprovider)

***

### deleteCustomProvider()

> **deleteCustomProvider**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md), `any`, \{ \}, `any`\>\>

Deletes an existing Custom OAuth provider for the Tenant using the provider name specified in the request body.

#### Parameters

##### requestParameters

[`OAuthCustomProvidersApiDeleteCustomProviderRequest`](../interfaces/OAuthCustomProvidersApiDeleteCustomProviderRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

OAuthCustomProvidersApi

#### Implementation of

[`OAuthCustomProvidersApiInterface`](../interfaces/OAuthCustomProvidersApiInterface.md).[`deleteCustomProvider`](../interfaces/OAuthCustomProvidersApiInterface.md#deletecustomprovider)

***

### getAllCustomOAuthProviders()

> **getAllCustomOAuthProviders**(`options?`): `Promise`\<`AxiosResponse`\<[`GetAllCustomOAuthProviders200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetAllCustomOAuthProviders200Response.md), `any`, \{ \}, `any`\>\>

Retrieves all custom OAuth providers configured for the Tenant.

#### Parameters

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`GetAllCustomOAuthProviders200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetAllCustomOAuthProviders200Response.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

OAuthCustomProvidersApi

#### Implementation of

[`OAuthCustomProvidersApiInterface`](../interfaces/OAuthCustomProvidersApiInterface.md).[`getAllCustomOAuthProviders`](../interfaces/OAuthCustomProvidersApiInterface.md#getallcustomoauthproviders)

***

### getCustomProviderKeys()

> **getCustomProviderKeys**(`options?`): `Promise`\<`AxiosResponse`\<[`GetCustomProviderKeys200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetCustomProviderKeys200Response.md), `any`, \{ \}, `any`\>\>

Retrieves all custom OAuth provider keys for the Tenant.

#### Parameters

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`GetCustomProviderKeys200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetCustomProviderKeys200Response.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

OAuthCustomProvidersApi

#### Implementation of

[`OAuthCustomProvidersApiInterface`](../interfaces/OAuthCustomProvidersApiInterface.md).[`getCustomProviderKeys`](../interfaces/OAuthCustomProvidersApiInterface.md#getcustomproviderkeys)

***

### updateCustomProvider()

> **updateCustomProvider**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`OAuth2Provider`](../loginradius-sdk/namespaces/Models/interfaces/OAuth2Provider.md), `any`, \{ \}, `any`\>\>

Updates an existing Custom OAuth provider for the Tenant using the provider name specified in the request body.

#### Parameters

##### requestParameters

[`OAuthCustomProvidersApiUpdateCustomProviderRequest`](../interfaces/OAuthCustomProvidersApiUpdateCustomProviderRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`OAuth2Provider`](../loginradius-sdk/namespaces/Models/interfaces/OAuth2Provider.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

OAuthCustomProvidersApi

#### Implementation of

[`OAuthCustomProvidersApiInterface`](../interfaces/OAuthCustomProvidersApiInterface.md).[`updateCustomProvider`](../interfaces/OAuthCustomProvidersApiInterface.md#updatecustomprovider)

[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / SessionApi

# Class: SessionApi

SessionApi - object-oriented interface

## Export

SessionApi

## Extends

- `BaseAPI`

## Implements

- [`SessionApiInterface`](../interfaces/SessionApiInterface.md)

## Constructors

### Constructor

> **new SessionApi**(`configuration?`, `basePath?`, `axios?`): `SessionApi`

#### Parameters

##### configuration?

`Configuration`

##### basePath?

`string` = `BASE_PATH`

##### axios?

`AxiosInstance` = `globalAxios`

#### Returns

`SessionApi`

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

### authValidateAccessToken()

> **authValidateAccessToken**(`requestParameters?`, `options?`): `Promise`\<`AxiosResponse`\<[`AccessTokenResponse`](../loginradius-sdk/namespaces/Models/interfaces/AccessTokenResponse.md), `any`, \{ \}, `any`\>\>

Validates an Access Token, returning its expiry if valid, or an error if invalid.

#### Parameters

##### requestParameters?

[`SessionApiAuthValidateAccessTokenRequest`](../interfaces/SessionApiAuthValidateAccessTokenRequest.md) = `{}`

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`AccessTokenResponse`](../loginradius-sdk/namespaces/Models/interfaces/AccessTokenResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

SessionApi

#### Implementation of

[`SessionApiInterface`](../interfaces/SessionApiInterface.md).[`authValidateAccessToken`](../interfaces/SessionApiInterface.md#authvalidateaccesstoken)

***

### getAccessTokenInfo()

> **getAccessTokenInfo**(`options?`): `Promise`\<`AxiosResponse`\<[`AccessTokenInfo`](../loginradius-sdk/namespaces/Models/interfaces/AccessTokenInfo.md), `any`, \{ \}, `any`\>\>

Obtains detailed information about the provided Access Token.

#### Parameters

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`AccessTokenInfo`](../loginradius-sdk/namespaces/Models/interfaces/AccessTokenInfo.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

SessionApi

#### Implementation of

[`SessionApiInterface`](../interfaces/SessionApiInterface.md).[`getAccessTokenInfo`](../interfaces/SessionApiInterface.md#getaccesstokeninfo)

***

### invalidateAccessToken()

> **invalidateAccessToken**(`requestParameters?`, `options?`): `Promise`\<`AxiosResponse`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md), `any`, \{ \}, `any`\>\>

Invalidates an active Access Token, expiring its validity.

#### Parameters

##### requestParameters?

[`SessionApiInvalidateAccessTokenRequest`](../interfaces/SessionApiInvalidateAccessTokenRequest.md) = `{}`

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

SessionApi

#### Implementation of

[`SessionApiInterface`](../interfaces/SessionApiInterface.md).[`invalidateAccessToken`](../interfaces/SessionApiInterface.md#invalidateaccesstoken)

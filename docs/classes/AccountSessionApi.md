[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / AccountSessionApi

# Class: AccountSessionApi

AccountSessionApi - object-oriented interface

## Export

AccountSessionApi

## Extends

- `BaseAPI`

## Implements

- [`AccountSessionApiInterface`](../interfaces/AccountSessionApiInterface.md)

## Constructors

### Constructor

> **new AccountSessionApi**(`configuration?`, `basePath?`, `axios?`): `AccountSessionApi`

#### Parameters

##### configuration?

`Configuration`

##### basePath?

`string` = `BASE_PATH`

##### axios?

`AxiosInstance` = `globalAxios`

#### Returns

`AccountSessionApi`

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

### getAccessToken()

> **getAccessToken**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`AccessTokenResponse`](../loginradius-sdk/namespaces/Models/interfaces/AccessTokenResponse.md), `any`, \{ \}, `any`\>\>

Translates the Request Token obtained during authentication into an Access Token for use with other API calls.

#### Parameters

##### requestParameters

[`AccountSessionApiGetAccessTokenRequest`](../interfaces/AccountSessionApiGetAccessTokenRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`AccessTokenResponse`](../loginradius-sdk/namespaces/Models/interfaces/AccessTokenResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

AccountSessionApi

#### Implementation of

[`AccountSessionApiInterface`](../interfaces/AccountSessionApiInterface.md).[`getAccessToken`](../interfaces/AccountSessionApiInterface.md#getaccesstoken)

***

### getActiveSession()

> **getActiveSession**(`requestParameters?`, `options?`): `Promise`\<`AxiosResponse`\<[`ActiveSessionResponse`](../loginradius-sdk/namespaces/Models/interfaces/ActiveSessionResponse.md), `any`, \{ \}, `any`\>\>

Retrieves details of the current active session for the authenticated User.

#### Parameters

##### requestParameters?

[`AccountSessionApiGetActiveSessionRequest`](../interfaces/AccountSessionApiGetActiveSessionRequest.md) = `{}`

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`ActiveSessionResponse`](../loginradius-sdk/namespaces/Models/interfaces/ActiveSessionResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

AccountSessionApi

#### Implementation of

[`AccountSessionApiInterface`](../interfaces/AccountSessionApiInterface.md).[`getActiveSession`](../interfaces/AccountSessionApiInterface.md#getactivesession)

***

### nativeInvalidateAccessToken()

> **nativeInvalidateAccessToken**(`requestParameters?`, `options?`): `Promise`\<`AxiosResponse`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md), `any`, \{ \}, `any`\>\>

Invalidates the specified Access Token, terminating its validity.

#### Parameters

##### requestParameters?

[`AccountSessionApiNativeInvalidateAccessTokenRequest`](../interfaces/AccountSessionApiNativeInvalidateAccessTokenRequest.md) = `{}`

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

AccountSessionApi

#### Implementation of

[`AccountSessionApiInterface`](../interfaces/AccountSessionApiInterface.md).[`nativeInvalidateAccessToken`](../interfaces/AccountSessionApiInterface.md#nativeinvalidateaccesstoken)

***

### nativeRefreshAccessToken()

> **nativeRefreshAccessToken**(`requestParameters?`, `options?`): `Promise`\<`AxiosResponse`\<[`AccessTokenResponse`](../loginradius-sdk/namespaces/Models/interfaces/AccessTokenResponse.md), `any`, \{ \}, `any`\>\>

Refreshes the Access Token using a valid Refresh Token to extend session validity. The resulting token lifetime depends on the `expiresin` parameter and the User\'s registration profile (see the `expiresin` parameter).

#### Parameters

##### requestParameters?

[`AccountSessionApiNativeRefreshAccessTokenRequest`](../interfaces/AccountSessionApiNativeRefreshAccessTokenRequest.md) = `{}`

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`AccessTokenResponse`](../loginradius-sdk/namespaces/Models/interfaces/AccessTokenResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

AccountSessionApi

#### Implementation of

[`AccountSessionApiInterface`](../interfaces/AccountSessionApiInterface.md).[`nativeRefreshAccessToken`](../interfaces/AccountSessionApiInterface.md#nativerefreshaccesstoken)

***

### refreshAccessToken()

> **refreshAccessToken**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`AccessTokenResponse`](../loginradius-sdk/namespaces/Models/interfaces/AccessTokenResponse.md), `any`, \{ \}, `any`\>\>

Refreshes the Access Token using a Refresh Token.

#### Parameters

##### requestParameters

[`AccountSessionApiRefreshAccessTokenRequest`](../interfaces/AccountSessionApiRefreshAccessTokenRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`AccessTokenResponse`](../loginradius-sdk/namespaces/Models/interfaces/AccessTokenResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

AccountSessionApi

#### Implementation of

[`AccountSessionApiInterface`](../interfaces/AccountSessionApiInterface.md).[`refreshAccessToken`](../interfaces/AccountSessionApiInterface.md#refreshaccesstoken)

***

### revokeAllRefreshToken()

> **revokeAllRefreshToken**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md), `any`, \{ \}, `any`\>\>

Revokes all active refresh tokens for a specified User.

#### Parameters

##### requestParameters

[`AccountSessionApiRevokeAllRefreshTokenRequest`](../interfaces/AccountSessionApiRevokeAllRefreshTokenRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

AccountSessionApi

#### Implementation of

[`AccountSessionApiInterface`](../interfaces/AccountSessionApiInterface.md).[`revokeAllRefreshToken`](../interfaces/AccountSessionApiInterface.md#revokeallrefreshtoken)

***

### revokeRefreshToken()

> **revokeRefreshToken**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md), `any`, \{ \}, `any`\>\>

Revokes the specified Refresh Token.

#### Parameters

##### requestParameters

[`AccountSessionApiRevokeRefreshTokenRequest`](../interfaces/AccountSessionApiRevokeRefreshTokenRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

AccountSessionApi

#### Implementation of

[`AccountSessionApiInterface`](../interfaces/AccountSessionApiInterface.md).[`revokeRefreshToken`](../interfaces/AccountSessionApiInterface.md#revokerefreshtoken)

***

### validateAccessToken()

> **validateAccessToken**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`AccessTokenResponse`](../loginradius-sdk/namespaces/Models/interfaces/AccessTokenResponse.md), `any`, \{ \}, `any`\>\>

Validates the provided Access Token to ensure its authenticity and validity.

#### Parameters

##### requestParameters

[`AccountSessionApiValidateAccessTokenRequest`](../interfaces/AccountSessionApiValidateAccessTokenRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`AccessTokenResponse`](../loginradius-sdk/namespaces/Models/interfaces/AccessTokenResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

AccountSessionApi

#### Implementation of

[`AccountSessionApiInterface`](../interfaces/AccountSessionApiInterface.md).[`validateAccessToken`](../interfaces/AccountSessionApiInterface.md#validateaccesstoken)

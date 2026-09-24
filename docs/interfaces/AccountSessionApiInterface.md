[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / AccountSessionApiInterface

# Interface: AccountSessionApiInterface

AccountSessionApi - interface

## Export

AccountSessionApi

## Methods

### getAccessToken()

> **getAccessToken**(`requestParameters`, `options?`): `AxiosPromise`\<[`AccessTokenResponse`](../loginradius-sdk/namespaces/Models/interfaces/AccessTokenResponse.md)\>

Translates the Request Token obtained during authentication into an Access Token for use with other API calls.

#### Parameters

##### requestParameters

[`AccountSessionApiGetAccessTokenRequest`](AccountSessionApiGetAccessTokenRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`AccessTokenResponse`](../loginradius-sdk/namespaces/Models/interfaces/AccessTokenResponse.md)\>

#### Throws

#### Memberof

AccountSessionApiInterface

***

### getActiveSession()

> **getActiveSession**(`requestParameters?`, `options?`): `AxiosPromise`\<[`ActiveSessionResponse`](../loginradius-sdk/namespaces/Models/interfaces/ActiveSessionResponse.md)\>

Retrieves details of the current active session for the authenticated User.

#### Parameters

##### requestParameters?

[`AccountSessionApiGetActiveSessionRequest`](AccountSessionApiGetActiveSessionRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`ActiveSessionResponse`](../loginradius-sdk/namespaces/Models/interfaces/ActiveSessionResponse.md)\>

#### Throws

#### Memberof

AccountSessionApiInterface

***

### nativeInvalidateAccessToken()

> **nativeInvalidateAccessToken**(`requestParameters?`, `options?`): `AxiosPromise`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md)\>

Invalidates the specified Access Token, terminating its validity.

#### Parameters

##### requestParameters?

[`AccountSessionApiNativeInvalidateAccessTokenRequest`](AccountSessionApiNativeInvalidateAccessTokenRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md)\>

#### Throws

#### Memberof

AccountSessionApiInterface

***

### nativeRefreshAccessToken()

> **nativeRefreshAccessToken**(`requestParameters?`, `options?`): `AxiosPromise`\<[`AccessTokenResponse`](../loginradius-sdk/namespaces/Models/interfaces/AccessTokenResponse.md)\>

Refreshes the Access Token using a valid Refresh Token to extend session validity. The resulting token lifetime depends on the `expiresin` parameter and the User\'s registration profile (see the `expiresin` parameter).

#### Parameters

##### requestParameters?

[`AccountSessionApiNativeRefreshAccessTokenRequest`](AccountSessionApiNativeRefreshAccessTokenRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`AccessTokenResponse`](../loginradius-sdk/namespaces/Models/interfaces/AccessTokenResponse.md)\>

#### Throws

#### Memberof

AccountSessionApiInterface

***

### refreshAccessToken()

> **refreshAccessToken**(`requestParameters`, `options?`): `AxiosPromise`\<[`AccessTokenResponse`](../loginradius-sdk/namespaces/Models/interfaces/AccessTokenResponse.md)\>

Refreshes the Access Token using a Refresh Token.

#### Parameters

##### requestParameters

[`AccountSessionApiRefreshAccessTokenRequest`](AccountSessionApiRefreshAccessTokenRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`AccessTokenResponse`](../loginradius-sdk/namespaces/Models/interfaces/AccessTokenResponse.md)\>

#### Throws

#### Memberof

AccountSessionApiInterface

***

### revokeAllRefreshToken()

> **revokeAllRefreshToken**(`requestParameters`, `options?`): `AxiosPromise`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md)\>

Revokes all active refresh tokens for a specified User.

#### Parameters

##### requestParameters

[`AccountSessionApiRevokeAllRefreshTokenRequest`](AccountSessionApiRevokeAllRefreshTokenRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md)\>

#### Throws

#### Memberof

AccountSessionApiInterface

***

### revokeRefreshToken()

> **revokeRefreshToken**(`requestParameters`, `options?`): `AxiosPromise`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md)\>

Revokes the specified Refresh Token.

#### Parameters

##### requestParameters

[`AccountSessionApiRevokeRefreshTokenRequest`](AccountSessionApiRevokeRefreshTokenRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md)\>

#### Throws

#### Memberof

AccountSessionApiInterface

***

### validateAccessToken()

> **validateAccessToken**(`requestParameters`, `options?`): `AxiosPromise`\<[`AccessTokenResponse`](../loginradius-sdk/namespaces/Models/interfaces/AccessTokenResponse.md)\>

Validates the provided Access Token to ensure its authenticity and validity.

#### Parameters

##### requestParameters

[`AccountSessionApiValidateAccessTokenRequest`](AccountSessionApiValidateAccessTokenRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`AccessTokenResponse`](../loginradius-sdk/namespaces/Models/interfaces/AccessTokenResponse.md)\>

#### Throws

#### Memberof

AccountSessionApiInterface

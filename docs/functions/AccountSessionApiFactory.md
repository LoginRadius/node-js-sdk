[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / AccountSessionApiFactory

# Function: AccountSessionApiFactory()

> **AccountSessionApiFactory**(`configuration?`, `basePath?`, `axios?`): `object`

AccountSessionApi - factory interface

## Parameters

### configuration?

`Configuration`

### basePath?

`string`

### axios?

`AxiosInstance`

## Returns

### getAccessToken()

> **getAccessToken**(`requestParameters`, `options?`): `AxiosPromise`\<[`AccessTokenResponse`](../loginradius-sdk/namespaces/Models/interfaces/AccessTokenResponse.md)\>

Translates the Request Token obtained during authentication into an Access Token for use with other API calls.

#### Parameters

##### requestParameters

[`AccountSessionApiGetAccessTokenRequest`](../interfaces/AccountSessionApiGetAccessTokenRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`AccessTokenResponse`](../loginradius-sdk/namespaces/Models/interfaces/AccessTokenResponse.md)\>

#### Throws

### getActiveSession()

> **getActiveSession**(`requestParameters?`, `options?`): `AxiosPromise`\<[`ActiveSessionResponse`](../loginradius-sdk/namespaces/Models/interfaces/ActiveSessionResponse.md)\>

Retrieves details of the current active session for the authenticated User.

#### Parameters

##### requestParameters?

[`AccountSessionApiGetActiveSessionRequest`](../interfaces/AccountSessionApiGetActiveSessionRequest.md) = `{}`

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`ActiveSessionResponse`](../loginradius-sdk/namespaces/Models/interfaces/ActiveSessionResponse.md)\>

#### Throws

### nativeInvalidateAccessToken()

> **nativeInvalidateAccessToken**(`requestParameters?`, `options?`): `AxiosPromise`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md)\>

Invalidates the specified Access Token, terminating its validity.

#### Parameters

##### requestParameters?

[`AccountSessionApiNativeInvalidateAccessTokenRequest`](../interfaces/AccountSessionApiNativeInvalidateAccessTokenRequest.md) = `{}`

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md)\>

#### Throws

### nativeRefreshAccessToken()

> **nativeRefreshAccessToken**(`requestParameters?`, `options?`): `AxiosPromise`\<[`AccessTokenResponse`](../loginradius-sdk/namespaces/Models/interfaces/AccessTokenResponse.md)\>

Refreshes the Access Token using a valid Refresh Token to extend session validity. The resulting token lifetime depends on the `expiresin` parameter and the User\'s registration profile (see the `expiresin` parameter).

#### Parameters

##### requestParameters?

[`AccountSessionApiNativeRefreshAccessTokenRequest`](../interfaces/AccountSessionApiNativeRefreshAccessTokenRequest.md) = `{}`

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`AccessTokenResponse`](../loginradius-sdk/namespaces/Models/interfaces/AccessTokenResponse.md)\>

#### Throws

### refreshAccessToken()

> **refreshAccessToken**(`requestParameters`, `options?`): `AxiosPromise`\<[`AccessTokenResponse`](../loginradius-sdk/namespaces/Models/interfaces/AccessTokenResponse.md)\>

Refreshes the Access Token using a Refresh Token.

#### Parameters

##### requestParameters

[`AccountSessionApiRefreshAccessTokenRequest`](../interfaces/AccountSessionApiRefreshAccessTokenRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`AccessTokenResponse`](../loginradius-sdk/namespaces/Models/interfaces/AccessTokenResponse.md)\>

#### Throws

### revokeAllRefreshToken()

> **revokeAllRefreshToken**(`requestParameters`, `options?`): `AxiosPromise`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md)\>

Revokes all active refresh tokens for a specified User.

#### Parameters

##### requestParameters

[`AccountSessionApiRevokeAllRefreshTokenRequest`](../interfaces/AccountSessionApiRevokeAllRefreshTokenRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md)\>

#### Throws

### revokeRefreshToken()

> **revokeRefreshToken**(`requestParameters`, `options?`): `AxiosPromise`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md)\>

Revokes the specified Refresh Token.

#### Parameters

##### requestParameters

[`AccountSessionApiRevokeRefreshTokenRequest`](../interfaces/AccountSessionApiRevokeRefreshTokenRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md)\>

#### Throws

### validateAccessToken()

> **validateAccessToken**(`requestParameters`, `options?`): `AxiosPromise`\<[`AccessTokenResponse`](../loginradius-sdk/namespaces/Models/interfaces/AccessTokenResponse.md)\>

Validates the provided Access Token to ensure its authenticity and validity.

#### Parameters

##### requestParameters

[`AccountSessionApiValidateAccessTokenRequest`](../interfaces/AccountSessionApiValidateAccessTokenRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`AccessTokenResponse`](../loginradius-sdk/namespaces/Models/interfaces/AccessTokenResponse.md)\>

#### Throws

## Export

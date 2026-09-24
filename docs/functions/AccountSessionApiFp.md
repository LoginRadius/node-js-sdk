[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / AccountSessionApiFp

# Function: AccountSessionApiFp()

> **AccountSessionApiFp**(`configuration?`): `object`

AccountSessionApi - functional programming interface

## Parameters

### configuration?

`Configuration`

## Returns

### getAccessToken()

> **getAccessToken**(`token`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`AccessTokenResponse`](../loginradius-sdk/namespaces/Models/interfaces/AccessTokenResponse.md)\>\>

Translates the Request Token obtained during authentication into an Access Token for use with other API calls.

#### Parameters

##### token

`string`

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`AccessTokenResponse`](../loginradius-sdk/namespaces/Models/interfaces/AccessTokenResponse.md)\>\>

#### Throws

### getActiveSession()

> **getActiveSession**(`token?`, `profileid?`, `accountid?`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`ActiveSessionResponse`](../loginradius-sdk/namespaces/Models/interfaces/ActiveSessionResponse.md)\>\>

Retrieves details of the current active session for the authenticated User.

#### Parameters

##### token?

`string`

##### profileid?

`string`

Account ID of the User

##### accountid?

`string`

Account ID of the User

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`ActiveSessionResponse`](../loginradius-sdk/namespaces/Models/interfaces/ActiveSessionResponse.md)\>\>

#### Throws

### nativeInvalidateAccessToken()

> **nativeInvalidateAccessToken**(`accessToken?`, `preventRefresh?`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md)\>\>

Invalidates the specified Access Token, terminating its validity.

#### Parameters

##### accessToken?

`string`

Access Token of the User

##### preventRefresh?

`boolean`

Whether to prevent the token from being refreshed (true/false).

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md)\>\>

#### Throws

### nativeRefreshAccessToken()

> **nativeRefreshAccessToken**(`accessToken?`, `isweb?`, `expiresin?`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`AccessTokenResponse`](../loginradius-sdk/namespaces/Models/interfaces/AccessTokenResponse.md)\>\>

Refreshes the Access Token using a valid Refresh Token to extend session validity. The resulting token lifetime depends on the `expiresin` parameter and the User\'s registration profile (see the `expiresin` parameter).

#### Parameters

##### accessToken?

`string`

Access Token of the User

##### isweb?

`string`

Indicates if the request is from a web client

##### expiresin?

`number`

Overrides the default lifetime of the Access Token. The unit and the default applied when this parameter is omitted depend on the User\&#39;s registration profile: * Email profiles: the value is interpreted in minutes. When omitted,   the Access Token uses the application\&#39;s configured token expiry.  * Social login profiles: the value is interpreted in seconds. When omitted,   the Access Token adopts the expiry returned by the social provider, falling   back to the application\&#39;s configured token expiry if the provider returns none.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`AccessTokenResponse`](../loginradius-sdk/namespaces/Models/interfaces/AccessTokenResponse.md)\>\>

#### Throws

### refreshAccessToken()

> **refreshAccessToken**(`refreshToken`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`AccessTokenResponse`](../loginradius-sdk/namespaces/Models/interfaces/AccessTokenResponse.md)\>\>

Refreshes the Access Token using a Refresh Token.

#### Parameters

##### refreshToken

`string`

Refresh Token

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`AccessTokenResponse`](../loginradius-sdk/namespaces/Models/interfaces/AccessTokenResponse.md)\>\>

#### Throws

### revokeAllRefreshToken()

> **revokeAllRefreshToken**(`uid`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md)\>\>

Revokes all active refresh tokens for a specified User.

#### Parameters

##### uid

`string`

The UID associated with the User

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md)\>\>

#### Throws

### revokeRefreshToken()

> **revokeRefreshToken**(`refreshToken`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md)\>\>

Revokes the specified Refresh Token.

#### Parameters

##### refreshToken

`string`

Refresh Token

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md)\>\>

#### Throws

### validateAccessToken()

> **validateAccessToken**(`accessToken`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`AccessTokenResponse`](../loginradius-sdk/namespaces/Models/interfaces/AccessTokenResponse.md)\>\>

Validates the provided Access Token to ensure its authenticity and validity.

#### Parameters

##### accessToken

`string`

Access Token of the User

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`AccessTokenResponse`](../loginradius-sdk/namespaces/Models/interfaces/AccessTokenResponse.md)\>\>

#### Throws

## Export

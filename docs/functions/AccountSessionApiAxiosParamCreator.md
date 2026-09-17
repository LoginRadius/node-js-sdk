[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / AccountSessionApiAxiosParamCreator

# Function: AccountSessionApiAxiosParamCreator()

> **AccountSessionApiAxiosParamCreator**(`configuration?`): `object`

AccountSessionApi - axios parameter creator

## Parameters

### configuration?

`Configuration`

## Returns

### getAccessToken

> **getAccessToken**: (`token`, `options?`) => `Promise`\<`RequestArgs`\>

Translates the Request Token obtained during authentication into an Access Token for use with other API calls.

#### Parameters

##### token

`string`

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### getActiveSession

> **getActiveSession**: (`token?`, `profileid?`, `accountid?`, `options?`) => `Promise`\<`RequestArgs`\>

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

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### nativeInvalidateAccessToken

> **nativeInvalidateAccessToken**: (`accessToken?`, `preventRefresh?`, `options?`) => `Promise`\<`RequestArgs`\>

Invalidates the specified Access Token, terminating its validity.

#### Parameters

##### accessToken?

`string`

Access Token of the User

##### preventRefresh?

`boolean`

Whether to prevent the token from being refreshed (true/false).

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### nativeRefreshAccessToken

> **nativeRefreshAccessToken**: (`accessToken?`, `isweb?`, `expiresin?`, `options?`) => `Promise`\<`RequestArgs`\>

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

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### refreshAccessToken

> **refreshAccessToken**: (`refreshToken`, `options?`) => `Promise`\<`RequestArgs`\>

Refreshes the Access Token using a Refresh Token.

#### Parameters

##### refreshToken

`string`

Refresh Token

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### revokeAllRefreshToken

> **revokeAllRefreshToken**: (`uid`, `options?`) => `Promise`\<`RequestArgs`\>

Revokes all active refresh tokens for a specified User.

#### Parameters

##### uid

`string`

The UID associated with the User

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### revokeRefreshToken

> **revokeRefreshToken**: (`refreshToken`, `options?`) => `Promise`\<`RequestArgs`\>

Revokes the specified Refresh Token.

#### Parameters

##### refreshToken

`string`

Refresh Token

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### validateAccessToken

> **validateAccessToken**: (`accessToken`, `options?`) => `Promise`\<`RequestArgs`\>

Validates the provided Access Token to ensure its authenticity and validity.

#### Parameters

##### accessToken

`string`

Access Token of the User

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

## Export

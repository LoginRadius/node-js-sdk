[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / SessionApiFp

# Function: SessionApiFp()

> **SessionApiFp**(`configuration?`): `object`

SessionApi - functional programming interface

## Parameters

### configuration?

`Configuration`

## Returns

### authValidateAccessToken()

> **authValidateAccessToken**(`accessToken?`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`AccessTokenResponse`](../loginradius-sdk/namespaces/Models/interfaces/AccessTokenResponse.md)\>\>

Validates an Access Token, returning its expiry if valid, or an error if invalid.

#### Parameters

##### accessToken?

`string`

Access Token of the User

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`AccessTokenResponse`](../loginradius-sdk/namespaces/Models/interfaces/AccessTokenResponse.md)\>\>

#### Throws

### getAccessTokenInfo()

> **getAccessTokenInfo**(`options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`AccessTokenInfo`](../loginradius-sdk/namespaces/Models/interfaces/AccessTokenInfo.md)\>\>

Obtains detailed information about the provided Access Token.

#### Parameters

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`AccessTokenInfo`](../loginradius-sdk/namespaces/Models/interfaces/AccessTokenInfo.md)\>\>

#### Throws

### invalidateAccessToken()

> **invalidateAccessToken**(`preventRefresh?`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md)\>\>

Invalidates an active Access Token, expiring its validity.

#### Parameters

##### preventRefresh?

`boolean`

Whether to prevent the token from being refreshed (true/false).

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md)\>\>

#### Throws

## Export

[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / SessionApiFactory

# Function: SessionApiFactory()

> **SessionApiFactory**(`configuration?`, `basePath?`, `axios?`): `object`

SessionApi - factory interface

## Parameters

### configuration?

`Configuration`

### basePath?

`string`

### axios?

`AxiosInstance`

## Returns

### authValidateAccessToken()

> **authValidateAccessToken**(`requestParameters?`, `options?`): `AxiosPromise`\<[`AccessTokenResponse`](../loginradius-sdk/namespaces/Models/interfaces/AccessTokenResponse.md)\>

Validates an Access Token, returning its expiry if valid, or an error if invalid.

#### Parameters

##### requestParameters?

[`SessionApiAuthValidateAccessTokenRequest`](../interfaces/SessionApiAuthValidateAccessTokenRequest.md) = `{}`

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`AccessTokenResponse`](../loginradius-sdk/namespaces/Models/interfaces/AccessTokenResponse.md)\>

#### Throws

### getAccessTokenInfo()

> **getAccessTokenInfo**(`options?`): `AxiosPromise`\<[`AccessTokenInfo`](../loginradius-sdk/namespaces/Models/interfaces/AccessTokenInfo.md)\>

Obtains detailed information about the provided Access Token.

#### Parameters

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`AccessTokenInfo`](../loginradius-sdk/namespaces/Models/interfaces/AccessTokenInfo.md)\>

#### Throws

### invalidateAccessToken()

> **invalidateAccessToken**(`requestParameters?`, `options?`): `AxiosPromise`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md)\>

Invalidates an active Access Token, expiring its validity.

#### Parameters

##### requestParameters?

[`SessionApiInvalidateAccessTokenRequest`](../interfaces/SessionApiInvalidateAccessTokenRequest.md) = `{}`

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`IsPostedResponse`](../loginradius-sdk/namespaces/Models/interfaces/IsPostedResponse.md)\>

#### Throws

## Export

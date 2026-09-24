[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / SessionApiAxiosParamCreator

# Function: SessionApiAxiosParamCreator()

> **SessionApiAxiosParamCreator**(`configuration?`): `object`

SessionApi - axios parameter creator

## Parameters

### configuration?

`Configuration`

## Returns

### authValidateAccessToken

> **authValidateAccessToken**: (`accessToken?`, `options?`) => `Promise`\<`RequestArgs`\>

Validates an Access Token, returning its expiry if valid, or an error if invalid.

#### Parameters

##### accessToken?

`string`

Access Token of the User

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### getAccessTokenInfo

> **getAccessTokenInfo**: (`options?`) => `Promise`\<`RequestArgs`\>

Obtains detailed information about the provided Access Token.

#### Parameters

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### invalidateAccessToken

> **invalidateAccessToken**: (`preventRefresh?`, `options?`) => `Promise`\<`RequestArgs`\>

Invalidates an active Access Token, expiring its validity.

#### Parameters

##### preventRefresh?

`boolean`

Whether to prevent the token from being refreshed (true/false).

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

## Export

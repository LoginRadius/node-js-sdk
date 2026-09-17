[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / AccountSessionApiNativeRefreshAccessTokenRequest

# Interface: AccountSessionApiNativeRefreshAccessTokenRequest

Request parameters for nativeRefreshAccessToken operation in AccountSessionApi.

## Export

AccountSessionApiNativeRefreshAccessTokenRequest

## Properties

### accessToken?

> `readonly` `optional` **accessToken?**: `string`

Access Token of the User

#### Memberof

AccountSessionApiNativeRefreshAccessToken

***

### expiresin?

> `readonly` `optional` **expiresin?**: `number`

Overrides the default lifetime of the Access Token. The unit and the default applied when this parameter is omitted depend on the User\&#39;s registration profile: * Email profiles: the value is interpreted in minutes. When omitted,   the Access Token uses the application\&#39;s configured token expiry.  * Social login profiles: the value is interpreted in seconds. When omitted,   the Access Token adopts the expiry returned by the social provider, falling   back to the application\&#39;s configured token expiry if the provider returns none.

#### Memberof

AccountSessionApiNativeRefreshAccessToken

***

### isweb?

> `readonly` `optional` **isweb?**: `string`

Indicates if the request is from a web client

#### Memberof

AccountSessionApiNativeRefreshAccessToken

[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / LoginApiNativeProviderAccessTokenRequest

# Interface: LoginApiNativeProviderAccessTokenRequest

Request parameters for nativeProviderAccessToken operation in LoginApi.

## Export

LoginApiNativeProviderAccessTokenRequest

## Properties

### clientId?

> `readonly` `optional` **clientId?**: `string`

OIDC application Client ID for request authentication.

#### Memberof

LoginApiNativeProviderAccessToken

***

### code?

> `readonly` `optional` **code?**: `string`

The authorization code received from the apple, wechat, qq provider. The parameter is used to exchange the authorization code for an Access Token.

#### Memberof

LoginApiNativeProviderAccessToken

***

### fbAccessToken?

> `readonly` `optional` **fbAccessToken?**: `string`

The Access Token used for Facebook authentication. The parameter is used to authenticate the User with Facebook.

#### Memberof

LoginApiNativeProviderAccessToken

***

### fsAccessToken?

> `readonly` `optional` **fsAccessToken?**: `string`

The Access Token used for Foursquare authentication. The parameter is used to authenticate the User with Foursquare.

#### Memberof

LoginApiNativeProviderAccessToken

***

### googleAccessToken?

> `readonly` `optional` **googleAccessToken?**: `string`

The Access Token received from Google. The parameter is used to authenticate the User with Google services.

#### Memberof

LoginApiNativeProviderAccessToken

***

### googleAuthcode?

> `readonly` `optional` **googleAuthcode?**: `string`

The authorization code received from Google. This parameter is used to exchange the authorization code for an Access Token.

#### Memberof

LoginApiNativeProviderAccessToken

***

### idToken?

> `readonly` `optional` **idToken?**: `string`

The ID token used for googlejwt, facebookjwt, applejwt authentication. The parameter is used to verify the User\&#39;s identity.

#### Memberof

LoginApiNativeProviderAccessToken

***

### invitationToken?

> `readonly` `optional` **invitationToken?**: `string`

Invitation token of an organization

#### Memberof

LoginApiNativeProviderAccessToken

***

### lnAccessToken?

> `readonly` `optional` **lnAccessToken?**: `string`

The Access Token used for LinkedIn authentication. The parameter is used to authenticate the User with LinkedIn.

#### Memberof

LoginApiNativeProviderAccessToken

***

### nativeProvider

> `readonly` **nativeProvider**: [`NativeProviderAccessTokenNativeProviderEnum`](../enumerations/NativeProviderAccessTokenNativeProviderEnum.md)

Indicates the provider for the native application. This parameter is used to specify the authentication provider for the native app.

#### Memberof

LoginApiNativeProviderAccessToken

***

### providername?

> `readonly` `optional` **providername?**: `string`

The name of the provider. This parameter is used to specify the provider for authentication.

#### Memberof

LoginApiNativeProviderAccessToken

***

### redirectUri?

> `readonly` `optional` **redirectUri?**: `string`

Redirect URI for the OAuth/OIDC callback

#### Memberof

LoginApiNativeProviderAccessToken

***

### refreshToken

> `readonly` **refreshToken**: `string`

Refresh Token

#### Memberof

LoginApiNativeProviderAccessToken

***

### socialappname?

> `readonly` `optional` **socialappname?**: `string`

Indicates the name of the social application. This parameter is used to specify the social app for which the Access Token is being requested.

#### Memberof

LoginApiNativeProviderAccessToken

***

### twAccessToken?

> `readonly` `optional` **twAccessToken?**: `string`

The Access Token used for Twitter authentication. The parameter is used to authenticate the User with Twitter.

#### Memberof

LoginApiNativeProviderAccessToken

***

### twTokenSecret?

> `readonly` `optional` **twTokenSecret?**: `string`

The secret token used for Twitter authentication. The parameter is used to authenticate the User with Twitter.

#### Memberof

LoginApiNativeProviderAccessToken

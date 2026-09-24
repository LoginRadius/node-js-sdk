[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / OAuthApiAxiosParamCreator

# Function: OAuthApiAxiosParamCreator()

> **OAuthApiAxiosParamCreator**(`configuration?`): `object`

OAuthApi - axios parameter creator

## Parameters

### configuration?

`Configuration`

## Returns

### getOAuthAuthorizationServerMetadataOAuth

> **getOAuthAuthorizationServerMetadataOAuth**: (`oAuthAppName`, `options?`) => `Promise`\<`RequestArgs`\>

Returns OAuth 2.0 Authorization Server Metadata (RFC 8414) for the given OAuth app. Use this endpoint for OAuth 2.0 client discovery when using the OAuth flow path.

#### Parameters

##### oAuthAppName

`string`

OAuth App Name

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### getOAuthDeviceCode

> **getOAuthDeviceCode**: (`oAuthAppName`, `oAuthDeviceCode`, `options?`) => `Promise`\<`RequestArgs`\>

Initiates the OAuth 2.0 Device Authorization Grant per RFC 8628. Returns a device_code and user_code that the client displays to the end-user for out-of-band authorization on a secondary device. The client then polls the token endpoint with the device_code until the user completes authorization.

#### Parameters

##### oAuthAppName

`string`

OAuth App Name

##### oAuthDeviceCode

[`OAuthDeviceCode`](../loginradius-sdk/namespaces/Models/interfaces/OAuthDeviceCode.md)

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### getOAuthTokens

> **getOAuthTokens**: (`oAuthAppName`, `getOAuthTokensRequest`, `options?`) => `Promise`\<`RequestArgs`\>

Retrieves OAuth tokens for authentication and authorization purposes.

#### Parameters

##### oAuthAppName

`string`

OAuth App Name

##### getOAuthTokensRequest

[`GetOAuthTokensRequest`](../loginradius-sdk/namespaces/Models/type-aliases/GetOAuthTokensRequest.md)

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### introspectOAuthToken

> **introspectOAuthToken**: (`oAuthAppName`, `oAuthRevokeRefreshToken`, `options?`) => `Promise`\<`RequestArgs`\>

Returns the active state and metadata of an OAuth access or refresh token per RFC 7662 (OAuth 2.0 Token Introspection). The client must authenticate using either HTTP Basic authentication (Authorization: Basic base64(client_id:client_secret)) or by including client_id and client_secret in the POST body, depending on the token_endpoint_auth_method configured for the OAuth application. Returns active: true with associated claims for valid tokens, or active: false for invalid, expired, or revoked tokens.

#### Parameters

##### oAuthAppName

`string`

OAuth App Name

##### oAuthRevokeRefreshToken

[`OAuthRevokeRefreshToken`](../loginradius-sdk/namespaces/Models/interfaces/OAuthRevokeRefreshToken.md)

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### oAuthPushedAuthorizationRequest

> **oAuthPushedAuthorizationRequest**: (`oAuthAppName`, `pARRequest`, `options?`) => `Promise`\<`RequestArgs`\>

Accepts an OAuth 2.0 authorization request and stores it server-side per RFC 9126 (OAuth 2.0 Pushed Authorization Requests). Returns a short-lived request_uri that the client passes as the sole parameter to the authorization endpoint, keeping all sensitive request parameters out of the browser URL. This feature must be explicitly enabled on the OAuth application configuration.

#### Parameters

##### oAuthAppName

`string`

OAuth App Name

##### pARRequest

[`PARRequest`](../loginradius-sdk/namespaces/Models/interfaces/PARRequest.md)

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### revokeOAuthRefreshToken

> **revokeOAuthRefreshToken**: (`oAuthAppName`, `oAuthRevokeRefreshToken`, `options?`) => `Promise`\<`RequestArgs`\>

Revokes an OAuth refresh token per RFC 7009 (OAuth 2.0 Token Revocation), invalidating it and preventing any further use. The client must authenticate using client_id and client_secret via HTTP Basic or POST body.

#### Parameters

##### oAuthAppName

`string`

OAuth App Name

##### oAuthRevokeRefreshToken

[`OAuthRevokeRefreshToken`](../loginradius-sdk/namespaces/Models/interfaces/OAuthRevokeRefreshToken.md)

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

## Export

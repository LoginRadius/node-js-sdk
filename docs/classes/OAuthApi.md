[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / OAuthApi

# Class: OAuthApi

OAuthApi - object-oriented interface

## Export

OAuthApi

## Extends

- `BaseAPI`

## Implements

- [`OAuthApiInterface`](../interfaces/OAuthApiInterface.md)

## Constructors

### Constructor

> **new OAuthApi**(`configuration?`, `basePath?`, `axios?`): `OAuthApi`

#### Parameters

##### configuration?

`Configuration`

##### basePath?

`string` = `BASE_PATH`

##### axios?

`AxiosInstance` = `globalAxios`

#### Returns

`OAuthApi`

#### Inherited from

`BaseAPI.constructor`

## Properties

### axios

> `protected` **axios**: `AxiosInstance` = `globalAxios`

#### Inherited from

`BaseAPI.axios`

***

### basePath

> `protected` **basePath**: `string` = `BASE_PATH`

#### Inherited from

`BaseAPI.basePath`

***

### configuration

> `protected` **configuration**: `Configuration` \| `undefined`

#### Inherited from

`BaseAPI.configuration`

## Methods

### getOAuthAuthorizationServerMetadataOAuth()

> **getOAuthAuthorizationServerMetadataOAuth**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`OAuthAuthorizationServerMetadata`](../loginradius-sdk/namespaces/Models/interfaces/OAuthAuthorizationServerMetadata.md), `any`, \{ \}, `any`\>\>

Returns OAuth 2.0 Authorization Server Metadata (RFC 8414) for the given OAuth app. Use this endpoint for OAuth 2.0 client discovery when using the OAuth flow path.

#### Parameters

##### requestParameters

[`OAuthApiGetOAuthAuthorizationServerMetadataOAuthRequest`](../interfaces/OAuthApiGetOAuthAuthorizationServerMetadataOAuthRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`OAuthAuthorizationServerMetadata`](../loginradius-sdk/namespaces/Models/interfaces/OAuthAuthorizationServerMetadata.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

OAuthApi

#### Implementation of

[`OAuthApiInterface`](../interfaces/OAuthApiInterface.md).[`getOAuthAuthorizationServerMetadataOAuth`](../interfaces/OAuthApiInterface.md#getoauthauthorizationservermetadataoauth)

***

### getOAuthDeviceCode()

> **getOAuthDeviceCode**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`OAuthDeviceCodeResponse`](../loginradius-sdk/namespaces/Models/interfaces/OAuthDeviceCodeResponse.md), `any`, \{ \}, `any`\>\>

Initiates the OAuth 2.0 Device Authorization Grant per RFC 8628. Returns a device_code and user_code that the client displays to the end-user for out-of-band authorization on a secondary device. The client then polls the token endpoint with the device_code until the user completes authorization.

#### Parameters

##### requestParameters

[`OAuthApiGetOAuthDeviceCodeRequest`](../interfaces/OAuthApiGetOAuthDeviceCodeRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`OAuthDeviceCodeResponse`](../loginradius-sdk/namespaces/Models/interfaces/OAuthDeviceCodeResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

OAuthApi

#### Implementation of

[`OAuthApiInterface`](../interfaces/OAuthApiInterface.md).[`getOAuthDeviceCode`](../interfaces/OAuthApiInterface.md#getoauthdevicecode)

***

### getOAuthTokens()

> **getOAuthTokens**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`OAuthTokenResponse`](../loginradius-sdk/namespaces/Models/interfaces/OAuthTokenResponse.md), `any`, \{ \}, `any`\>\>

Retrieves OAuth tokens for authentication and authorization purposes.

#### Parameters

##### requestParameters

[`OAuthApiGetOAuthTokensRequest`](../interfaces/OAuthApiGetOAuthTokensRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`OAuthTokenResponse`](../loginradius-sdk/namespaces/Models/interfaces/OAuthTokenResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

OAuthApi

#### Implementation of

[`OAuthApiInterface`](../interfaces/OAuthApiInterface.md).[`getOAuthTokens`](../interfaces/OAuthApiInterface.md#getoauthtokens)

***

### introspectOAuthToken()

> **introspectOAuthToken**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`OIDCTokenIntrospectResponse`](../loginradius-sdk/namespaces/Models/interfaces/OIDCTokenIntrospectResponse.md), `any`, \{ \}, `any`\>\>

Returns the active state and metadata of an OAuth access or refresh token per RFC 7662 (OAuth 2.0 Token Introspection). The client must authenticate using either HTTP Basic authentication (Authorization: Basic base64(client_id:client_secret)) or by including client_id and client_secret in the POST body, depending on the token_endpoint_auth_method configured for the OAuth application. Returns active: true with associated claims for valid tokens, or active: false for invalid, expired, or revoked tokens.

#### Parameters

##### requestParameters

[`OAuthApiIntrospectOAuthTokenRequest`](../interfaces/OAuthApiIntrospectOAuthTokenRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`OIDCTokenIntrospectResponse`](../loginradius-sdk/namespaces/Models/interfaces/OIDCTokenIntrospectResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

OAuthApi

#### Implementation of

[`OAuthApiInterface`](../interfaces/OAuthApiInterface.md).[`introspectOAuthToken`](../interfaces/OAuthApiInterface.md#introspectoauthtoken)

***

### oAuthPushedAuthorizationRequest()

> **oAuthPushedAuthorizationRequest**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`PARResponse`](../loginradius-sdk/namespaces/Models/interfaces/PARResponse.md), `any`, \{ \}, `any`\>\>

Accepts an OAuth 2.0 authorization request and stores it server-side per RFC 9126 (OAuth 2.0 Pushed Authorization Requests). Returns a short-lived request_uri that the client passes as the sole parameter to the authorization endpoint, keeping all sensitive request parameters out of the browser URL. This feature must be explicitly enabled on the OAuth application configuration.

#### Parameters

##### requestParameters

[`OAuthApiOAuthPushedAuthorizationRequestRequest`](../interfaces/OAuthApiOAuthPushedAuthorizationRequestRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`PARResponse`](../loginradius-sdk/namespaces/Models/interfaces/PARResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

OAuthApi

#### Implementation of

[`OAuthApiInterface`](../interfaces/OAuthApiInterface.md).[`oAuthPushedAuthorizationRequest`](../interfaces/OAuthApiInterface.md#oauthpushedauthorizationrequest)

***

### revokeOAuthRefreshToken()

> **revokeOAuthRefreshToken**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`, \{ \}, `any`\>\>

Revokes an OAuth refresh token per RFC 7009 (OAuth 2.0 Token Revocation), invalidating it and preventing any further use. The client must authenticate using client_id and client_secret via HTTP Basic or POST body.

#### Parameters

##### requestParameters

[`OAuthApiRevokeOAuthRefreshTokenRequest`](../interfaces/OAuthApiRevokeOAuthRefreshTokenRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

OAuthApi

#### Implementation of

[`OAuthApiInterface`](../interfaces/OAuthApiInterface.md).[`revokeOAuthRefreshToken`](../interfaces/OAuthApiInterface.md#revokeoauthrefreshtoken)

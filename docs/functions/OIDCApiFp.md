[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / OIDCApiFp

# Function: OIDCApiFp()

> **OIDCApiFp**(`configuration?`): `object`

OIDCApi - functional programming interface

## Parameters

### configuration?

`Configuration`

## Returns

### deleteDynamicClient()

> **deleteDynamicClient**(`oIDCAppName`, `clientID`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<`void`\>\>

Deletes a dynamically registered OAuth 2.0/OIDC client per RFC 7592. Requires the registration_access_token issued at registration time. Returns 204 No Content on success.

#### Parameters

##### oIDCAppName

`string`

OIDC App Name

##### clientID

`string`

The client_id of the dynamically registered OAuth client.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<`void`\>\>

#### Throws

### getDynamicClient()

> **getDynamicClient**(`oIDCAppName`, `clientID`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`OAuthDynamicClientResponse`](../loginradius-sdk/namespaces/Models/type-aliases/OAuthDynamicClientResponse.md)\>\>

Retrieves the metadata of a dynamically registered OAuth 2.0/OIDC client per RFC 7592 (OAuth 2.0 Dynamic Client Registration Management Protocol). Requires the registration_access_token issued at registration time.

#### Parameters

##### oIDCAppName

`string`

OIDC App Name

##### clientID

`string`

The client_id of the dynamically registered OAuth client.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`OAuthDynamicClientResponse`](../loginradius-sdk/namespaces/Models/type-aliases/OAuthDynamicClientResponse.md)\>\>

#### Throws

### getOAuthAuthorizationServerMetadataOIDC()

> **getOAuthAuthorizationServerMetadataOIDC**(`oIDCAppName`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`OAuthAuthorizationServerMetadata`](../loginradius-sdk/namespaces/Models/interfaces/OAuthAuthorizationServerMetadata.md)\>\>

Returns OAuth 2.0 Authorization Server Metadata (RFC 8414) for the given OIDC app. Use this endpoint for OAuth 2.0 client discovery when using the OIDC flow path. Response does not include OpenID Connect-specific fields (e.g. userinfo_endpoint, claims_supported).

#### Parameters

##### oIDCAppName

`string`

OIDC App Name

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`OAuthAuthorizationServerMetadata`](../loginradius-sdk/namespaces/Models/interfaces/OAuthAuthorizationServerMetadata.md)\>\>

#### Throws

### getOIDCDeviceCode()

> **getOIDCDeviceCode**(`oIDCAppName`, `oIDCDeviceCode`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`OIDCDeviceCodeResponse`](../loginradius-sdk/namespaces/Models/interfaces/OIDCDeviceCodeResponse.md)\>\>

Initiates the OAuth 2.0 Device Authorization Grant per RFC 8628. Returns a device_code and user_code that the client displays to the end-user for out-of-band authorization on a secondary device. The client then polls the token endpoint with the device_code until the user completes authorization.

#### Parameters

##### oIDCAppName

`string`

OIDC App Name

##### oIDCDeviceCode

[`OIDCDeviceCode`](../loginradius-sdk/namespaces/Models/interfaces/OIDCDeviceCode.md)

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`OIDCDeviceCodeResponse`](../loginradius-sdk/namespaces/Models/interfaces/OIDCDeviceCodeResponse.md)\>\>

#### Throws

### getOIDCDiscoveryConfig()

> **getOIDCDiscoveryConfig**(`oIDCAppName`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`OIDCDiscoveryResponse`](../loginradius-sdk/namespaces/Models/interfaces/OIDCDiscoveryResponse.md)\>\>

Returns the OpenID Provider Configuration Information per OpenID Connect Discovery 1.0 (Section 4). Clients use this endpoint to dynamically discover the issuer, supported endpoints, scopes, response types, claims, and signing algorithms. The response includes the authorization_endpoint, token_endpoint, userinfo_endpoint, jwks_uri, and other metadata needed to configure an OIDC Relying Party.

#### Parameters

##### oIDCAppName

`string`

OIDC App Name

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`OIDCDiscoveryResponse`](../loginradius-sdk/namespaces/Models/interfaces/OIDCDiscoveryResponse.md)\>\>

#### Throws

### getOIDCJWKSConfig()

> **getOIDCJWKSConfig**(`oIDCAppName`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`JWKSResponse`](../loginradius-sdk/namespaces/Models/interfaces/JWKSResponse.md)\>\>

Retrieves the JSON Web Key Set (JWKS) for verifying token signatures.

#### Parameters

##### oIDCAppName

`string`

OIDC App Name

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`JWKSResponse`](../loginradius-sdk/namespaces/Models/interfaces/JWKSResponse.md)\>\>

#### Throws

### getOIDCTokens()

> **getOIDCTokens**(`oIDCAppName`, `getOAuthTokensRequest`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`OIDCTokenResponse`](../loginradius-sdk/namespaces/Models/interfaces/OIDCTokenResponse.md)\>\>

Retrieves OpenID Connect (OIDC) tokens for User authentication.

#### Parameters

##### oIDCAppName

`string`

OIDC App Name

##### getOAuthTokensRequest

[`GetOAuthTokensRequest`](../loginradius-sdk/namespaces/Models/type-aliases/GetOAuthTokensRequest.md)

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`OIDCTokenResponse`](../loginradius-sdk/namespaces/Models/interfaces/OIDCTokenResponse.md)\>\>

#### Throws

### getOIDCUserinfo()

> **getOIDCUserinfo**(`oIDCAppName`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<\{\[`key`: `string`\]: `any`; \}\>\>

Retrieves User information using OpenID Connect (OIDC) standards.

#### Parameters

##### oIDCAppName

`string`

OIDC App Name

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<\{\[`key`: `string`\]: `any`; \}\>\>

#### Throws

### getOIDCUserinfoByPost()

> **getOIDCUserinfoByPost**(`oIDCAppName`, `oIDCUserinfo`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<\{\[`key`: `string`\]: `any`; \}\>\>

Retrieves User information using OpenID Connect (OIDC) standards via the POST method.

#### Parameters

##### oIDCAppName

`string`

OIDC App Name

##### oIDCUserinfo

[`OIDCUserinfo`](../loginradius-sdk/namespaces/Models/interfaces/OIDCUserinfo.md)

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<\{\[`key`: `string`\]: `any`; \}\>\>

#### Throws

### introspectOIDCToken()

> **introspectOIDCToken**(`oIDCAppName`, `oAuthRevokeRefreshToken`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`OIDCTokenIntrospectResponse`](../loginradius-sdk/namespaces/Models/interfaces/OIDCTokenIntrospectResponse.md)\>\>

Returns the active state and metadata of an OIDC access or refresh token per RFC 7662 (OAuth 2.0 Token Introspection). The client must authenticate using either HTTP Basic authentication (Authorization: Basic base64(client_id:client_secret)) or by including client_id and client_secret in the POST body, depending on the token_endpoint_auth_method configured for the OIDC application. Returns active: true with associated claims for valid tokens, or active: false for invalid, expired, or revoked tokens.

#### Parameters

##### oIDCAppName

`string`

OIDC App Name

##### oAuthRevokeRefreshToken

[`OAuthRevokeRefreshToken`](../loginradius-sdk/namespaces/Models/interfaces/OAuthRevokeRefreshToken.md)

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`OIDCTokenIntrospectResponse`](../loginradius-sdk/namespaces/Models/interfaces/OIDCTokenIntrospectResponse.md)\>\>

#### Throws

### oIDCDynamicClientRegistration()

> **oIDCDynamicClientRegistration**(`oIDCAppName`, `dynamicClientRegistrationRequest`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`DynamicClientRegistrationResponse`](../loginradius-sdk/namespaces/Models/interfaces/DynamicClientRegistrationResponse.md)\>\>

Registers a new OAuth 2.0/OIDC client dynamically per RFC 7591 (OAuth 2.0 Dynamic Client Registration Protocol). The client submits desired metadata (redirect_uris, client_name, grant_types, etc.) and receives the registered client metadata including the assigned client_id and client_secret. This feature must be explicitly enabled on the OIDC application configuration.

#### Parameters

##### oIDCAppName

`string`

OIDC App Name

##### dynamicClientRegistrationRequest

[`DynamicClientRegistrationRequest`](../loginradius-sdk/namespaces/Models/interfaces/DynamicClientRegistrationRequest.md)

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`DynamicClientRegistrationResponse`](../loginradius-sdk/namespaces/Models/interfaces/DynamicClientRegistrationResponse.md)\>\>

#### Throws

### oIDCPushedAuthorizationRequest()

> **oIDCPushedAuthorizationRequest**(`oIDCAppName`, `pARRequest`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`PARResponse`](../loginradius-sdk/namespaces/Models/interfaces/PARResponse.md)\>\>

Accepts an OIDC authorization request and stores it server-side per RFC 9126 (OAuth 2.0 Pushed Authorization Requests). Returns a short-lived request_uri that the client passes as the sole parameter to the authorization endpoint, keeping all sensitive request parameters out of the browser URL. This feature must be explicitly enabled on the OIDC application configuration.

#### Parameters

##### oIDCAppName

`string`

OIDC App Name

##### pARRequest

[`PARRequest`](../loginradius-sdk/namespaces/Models/interfaces/PARRequest.md)

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`PARResponse`](../loginradius-sdk/namespaces/Models/interfaces/PARResponse.md)\>\>

#### Throws

### revokeOIDCRefreshToken()

> **revokeOIDCRefreshToken**(`oIDCAppName`, `oAuthRevokeRefreshToken`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<`void`\>\>

Revokes an OIDC refresh token per RFC 7009 (OAuth 2.0 Token Revocation), invalidating it and preventing any further use. The client must authenticate using client_id and client_secret via HTTP Basic or POST body.

#### Parameters

##### oIDCAppName

`string`

OIDC App Name

##### oAuthRevokeRefreshToken

[`OAuthRevokeRefreshToken`](../loginradius-sdk/namespaces/Models/interfaces/OAuthRevokeRefreshToken.md)

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<`void`\>\>

#### Throws

### updateDynamicClient()

> **updateDynamicClient**(`oIDCAppName`, `clientID`, `oAuthDynamicClientRequest`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`OAuthDynamicClientResponse`](../loginradius-sdk/namespaces/Models/type-aliases/OAuthDynamicClientResponse.md)\>\>

Updates the metadata of a dynamically registered OAuth 2.0/OIDC client per RFC 7592. Requires the registration_access_token issued at registration time.

#### Parameters

##### oIDCAppName

`string`

OIDC App Name

##### clientID

`string`

The client_id of the dynamically registered OAuth client.

##### oAuthDynamicClientRequest

[`OAuthDynamicClientRequest`](../loginradius-sdk/namespaces/Models/interfaces/OAuthDynamicClientRequest.md)

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`OAuthDynamicClientResponse`](../loginradius-sdk/namespaces/Models/type-aliases/OAuthDynamicClientResponse.md)\>\>

#### Throws

## Export

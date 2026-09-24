[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / OIDCApiAxiosParamCreator

# Function: OIDCApiAxiosParamCreator()

> **OIDCApiAxiosParamCreator**(`configuration?`): `object`

OIDCApi - axios parameter creator

## Parameters

### configuration?

`Configuration`

## Returns

### deleteDynamicClient

> **deleteDynamicClient**: (`oIDCAppName`, `clientID`, `options?`) => `Promise`\<`RequestArgs`\>

Deletes a dynamically registered OAuth 2.0/OIDC client per RFC 7592. Requires the registration_access_token issued at registration time. Returns 204 No Content on success.

#### Parameters

##### oIDCAppName

`string`

OIDC App Name

##### clientID

`string`

The client_id of the dynamically registered OAuth client.

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### getDynamicClient

> **getDynamicClient**: (`oIDCAppName`, `clientID`, `options?`) => `Promise`\<`RequestArgs`\>

Retrieves the metadata of a dynamically registered OAuth 2.0/OIDC client per RFC 7592 (OAuth 2.0 Dynamic Client Registration Management Protocol). Requires the registration_access_token issued at registration time.

#### Parameters

##### oIDCAppName

`string`

OIDC App Name

##### clientID

`string`

The client_id of the dynamically registered OAuth client.

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### getOAuthAuthorizationServerMetadataOIDC

> **getOAuthAuthorizationServerMetadataOIDC**: (`oIDCAppName`, `options?`) => `Promise`\<`RequestArgs`\>

Returns OAuth 2.0 Authorization Server Metadata (RFC 8414) for the given OIDC app. Use this endpoint for OAuth 2.0 client discovery when using the OIDC flow path. Response does not include OpenID Connect-specific fields (e.g. userinfo_endpoint, claims_supported).

#### Parameters

##### oIDCAppName

`string`

OIDC App Name

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### getOIDCDeviceCode

> **getOIDCDeviceCode**: (`oIDCAppName`, `oIDCDeviceCode`, `options?`) => `Promise`\<`RequestArgs`\>

Initiates the OAuth 2.0 Device Authorization Grant per RFC 8628. Returns a device_code and user_code that the client displays to the end-user for out-of-band authorization on a secondary device. The client then polls the token endpoint with the device_code until the user completes authorization.

#### Parameters

##### oIDCAppName

`string`

OIDC App Name

##### oIDCDeviceCode

[`OIDCDeviceCode`](../loginradius-sdk/namespaces/Models/interfaces/OIDCDeviceCode.md)

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### getOIDCDiscoveryConfig

> **getOIDCDiscoveryConfig**: (`oIDCAppName`, `options?`) => `Promise`\<`RequestArgs`\>

Returns the OpenID Provider Configuration Information per OpenID Connect Discovery 1.0 (Section 4). Clients use this endpoint to dynamically discover the issuer, supported endpoints, scopes, response types, claims, and signing algorithms. The response includes the authorization_endpoint, token_endpoint, userinfo_endpoint, jwks_uri, and other metadata needed to configure an OIDC Relying Party.

#### Parameters

##### oIDCAppName

`string`

OIDC App Name

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### getOIDCJWKSConfig

> **getOIDCJWKSConfig**: (`oIDCAppName`, `options?`) => `Promise`\<`RequestArgs`\>

Retrieves the JSON Web Key Set (JWKS) for verifying token signatures.

#### Parameters

##### oIDCAppName

`string`

OIDC App Name

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### getOIDCTokens

> **getOIDCTokens**: (`oIDCAppName`, `getOAuthTokensRequest`, `options?`) => `Promise`\<`RequestArgs`\>

Retrieves OpenID Connect (OIDC) tokens for User authentication.

#### Parameters

##### oIDCAppName

`string`

OIDC App Name

##### getOAuthTokensRequest

[`GetOAuthTokensRequest`](../loginradius-sdk/namespaces/Models/type-aliases/GetOAuthTokensRequest.md)

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### getOIDCUserinfo

> **getOIDCUserinfo**: (`oIDCAppName`, `options?`) => `Promise`\<`RequestArgs`\>

Retrieves User information using OpenID Connect (OIDC) standards.

#### Parameters

##### oIDCAppName

`string`

OIDC App Name

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### getOIDCUserinfoByPost

> **getOIDCUserinfoByPost**: (`oIDCAppName`, `oIDCUserinfo`, `options?`) => `Promise`\<`RequestArgs`\>

Retrieves User information using OpenID Connect (OIDC) standards via the POST method.

#### Parameters

##### oIDCAppName

`string`

OIDC App Name

##### oIDCUserinfo

[`OIDCUserinfo`](../loginradius-sdk/namespaces/Models/interfaces/OIDCUserinfo.md)

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### introspectOIDCToken

> **introspectOIDCToken**: (`oIDCAppName`, `oAuthRevokeRefreshToken`, `options?`) => `Promise`\<`RequestArgs`\>

Returns the active state and metadata of an OIDC access or refresh token per RFC 7662 (OAuth 2.0 Token Introspection). The client must authenticate using either HTTP Basic authentication (Authorization: Basic base64(client_id:client_secret)) or by including client_id and client_secret in the POST body, depending on the token_endpoint_auth_method configured for the OIDC application. Returns active: true with associated claims for valid tokens, or active: false for invalid, expired, or revoked tokens.

#### Parameters

##### oIDCAppName

`string`

OIDC App Name

##### oAuthRevokeRefreshToken

[`OAuthRevokeRefreshToken`](../loginradius-sdk/namespaces/Models/interfaces/OAuthRevokeRefreshToken.md)

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### oIDCDynamicClientRegistration

> **oIDCDynamicClientRegistration**: (`oIDCAppName`, `dynamicClientRegistrationRequest`, `options?`) => `Promise`\<`RequestArgs`\>

Registers a new OAuth 2.0/OIDC client dynamically per RFC 7591 (OAuth 2.0 Dynamic Client Registration Protocol). The client submits desired metadata (redirect_uris, client_name, grant_types, etc.) and receives the registered client metadata including the assigned client_id and client_secret. This feature must be explicitly enabled on the OIDC application configuration.

#### Parameters

##### oIDCAppName

`string`

OIDC App Name

##### dynamicClientRegistrationRequest

[`DynamicClientRegistrationRequest`](../loginradius-sdk/namespaces/Models/interfaces/DynamicClientRegistrationRequest.md)

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### oIDCPushedAuthorizationRequest

> **oIDCPushedAuthorizationRequest**: (`oIDCAppName`, `pARRequest`, `options?`) => `Promise`\<`RequestArgs`\>

Accepts an OIDC authorization request and stores it server-side per RFC 9126 (OAuth 2.0 Pushed Authorization Requests). Returns a short-lived request_uri that the client passes as the sole parameter to the authorization endpoint, keeping all sensitive request parameters out of the browser URL. This feature must be explicitly enabled on the OIDC application configuration.

#### Parameters

##### oIDCAppName

`string`

OIDC App Name

##### pARRequest

[`PARRequest`](../loginradius-sdk/namespaces/Models/interfaces/PARRequest.md)

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### revokeOIDCRefreshToken

> **revokeOIDCRefreshToken**: (`oIDCAppName`, `oAuthRevokeRefreshToken`, `options?`) => `Promise`\<`RequestArgs`\>

Revokes an OIDC refresh token per RFC 7009 (OAuth 2.0 Token Revocation), invalidating it and preventing any further use. The client must authenticate using client_id and client_secret via HTTP Basic or POST body.

#### Parameters

##### oIDCAppName

`string`

OIDC App Name

##### oAuthRevokeRefreshToken

[`OAuthRevokeRefreshToken`](../loginradius-sdk/namespaces/Models/interfaces/OAuthRevokeRefreshToken.md)

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### updateDynamicClient

> **updateDynamicClient**: (`oIDCAppName`, `clientID`, `oAuthDynamicClientRequest`, `options?`) => `Promise`\<`RequestArgs`\>

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

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

## Export

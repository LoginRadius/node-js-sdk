[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / OIDCApiInterface

# Interface: OIDCApiInterface

OIDCApi - interface

## Export

OIDCApi

## Methods

### deleteDynamicClient()

> **deleteDynamicClient**(`requestParameters`, `options?`): `AxiosPromise`\<`void`\>

Deletes a dynamically registered OAuth 2.0/OIDC client per RFC 7592. Requires the registration_access_token issued at registration time. Returns 204 No Content on success.

#### Parameters

##### requestParameters

[`OIDCApiDeleteDynamicClientRequest`](OIDCApiDeleteDynamicClientRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<`void`\>

#### Throws

#### Memberof

OIDCApiInterface

***

### getDynamicClient()

> **getDynamicClient**(`requestParameters`, `options?`): `AxiosPromise`\<[`OAuthDynamicClientResponse`](../loginradius-sdk/namespaces/Models/type-aliases/OAuthDynamicClientResponse.md)\>

Retrieves the metadata of a dynamically registered OAuth 2.0/OIDC client per RFC 7592 (OAuth 2.0 Dynamic Client Registration Management Protocol). Requires the registration_access_token issued at registration time.

#### Parameters

##### requestParameters

[`OIDCApiGetDynamicClientRequest`](OIDCApiGetDynamicClientRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`OAuthDynamicClientResponse`](../loginradius-sdk/namespaces/Models/type-aliases/OAuthDynamicClientResponse.md)\>

#### Throws

#### Memberof

OIDCApiInterface

***

### getOAuthAuthorizationServerMetadataOIDC()

> **getOAuthAuthorizationServerMetadataOIDC**(`requestParameters`, `options?`): `AxiosPromise`\<[`OAuthAuthorizationServerMetadata`](../loginradius-sdk/namespaces/Models/interfaces/OAuthAuthorizationServerMetadata.md)\>

Returns OAuth 2.0 Authorization Server Metadata (RFC 8414) for the given OIDC app. Use this endpoint for OAuth 2.0 client discovery when using the OIDC flow path. Response does not include OpenID Connect-specific fields (e.g. userinfo_endpoint, claims_supported).

#### Parameters

##### requestParameters

[`OIDCApiGetOAuthAuthorizationServerMetadataOIDCRequest`](OIDCApiGetOAuthAuthorizationServerMetadataOIDCRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`OAuthAuthorizationServerMetadata`](../loginradius-sdk/namespaces/Models/interfaces/OAuthAuthorizationServerMetadata.md)\>

#### Throws

#### Memberof

OIDCApiInterface

***

### getOIDCDeviceCode()

> **getOIDCDeviceCode**(`requestParameters`, `options?`): `AxiosPromise`\<[`OIDCDeviceCodeResponse`](../loginradius-sdk/namespaces/Models/interfaces/OIDCDeviceCodeResponse.md)\>

Initiates the OAuth 2.0 Device Authorization Grant per RFC 8628. Returns a device_code and user_code that the client displays to the end-user for out-of-band authorization on a secondary device. The client then polls the token endpoint with the device_code until the user completes authorization.

#### Parameters

##### requestParameters

[`OIDCApiGetOIDCDeviceCodeRequest`](OIDCApiGetOIDCDeviceCodeRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`OIDCDeviceCodeResponse`](../loginradius-sdk/namespaces/Models/interfaces/OIDCDeviceCodeResponse.md)\>

#### Throws

#### Memberof

OIDCApiInterface

***

### getOIDCDiscoveryConfig()

> **getOIDCDiscoveryConfig**(`requestParameters`, `options?`): `AxiosPromise`\<[`OIDCDiscoveryResponse`](../loginradius-sdk/namespaces/Models/interfaces/OIDCDiscoveryResponse.md)\>

Returns the OpenID Provider Configuration Information per OpenID Connect Discovery 1.0 (Section 4). Clients use this endpoint to dynamically discover the issuer, supported endpoints, scopes, response types, claims, and signing algorithms. The response includes the authorization_endpoint, token_endpoint, userinfo_endpoint, jwks_uri, and other metadata needed to configure an OIDC Relying Party.

#### Parameters

##### requestParameters

[`OIDCApiGetOIDCDiscoveryConfigRequest`](OIDCApiGetOIDCDiscoveryConfigRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`OIDCDiscoveryResponse`](../loginradius-sdk/namespaces/Models/interfaces/OIDCDiscoveryResponse.md)\>

#### Throws

#### Memberof

OIDCApiInterface

***

### getOIDCJWKSConfig()

> **getOIDCJWKSConfig**(`requestParameters`, `options?`): `AxiosPromise`\<[`JWKSResponse`](../loginradius-sdk/namespaces/Models/interfaces/JWKSResponse.md)\>

Retrieves the JSON Web Key Set (JWKS) for verifying token signatures.

#### Parameters

##### requestParameters

[`OIDCApiGetOIDCJWKSConfigRequest`](OIDCApiGetOIDCJWKSConfigRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`JWKSResponse`](../loginradius-sdk/namespaces/Models/interfaces/JWKSResponse.md)\>

#### Throws

#### Memberof

OIDCApiInterface

***

### getOIDCTokens()

> **getOIDCTokens**(`requestParameters`, `options?`): `AxiosPromise`\<[`OIDCTokenResponse`](../loginradius-sdk/namespaces/Models/interfaces/OIDCTokenResponse.md)\>

Retrieves OpenID Connect (OIDC) tokens for User authentication.

#### Parameters

##### requestParameters

[`OIDCApiGetOIDCTokensRequest`](OIDCApiGetOIDCTokensRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`OIDCTokenResponse`](../loginradius-sdk/namespaces/Models/interfaces/OIDCTokenResponse.md)\>

#### Throws

#### Memberof

OIDCApiInterface

***

### getOIDCUserinfo()

> **getOIDCUserinfo**(`requestParameters`, `options?`): `AxiosPromise`\<\{\[`key`: `string`\]: `any`; \}\>

Retrieves User information using OpenID Connect (OIDC) standards.

#### Parameters

##### requestParameters

[`OIDCApiGetOIDCUserinfoRequest`](OIDCApiGetOIDCUserinfoRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<\{\[`key`: `string`\]: `any`; \}\>

#### Throws

#### Memberof

OIDCApiInterface

***

### getOIDCUserinfoByPost()

> **getOIDCUserinfoByPost**(`requestParameters`, `options?`): `AxiosPromise`\<\{\[`key`: `string`\]: `any`; \}\>

Retrieves User information using OpenID Connect (OIDC) standards via the POST method.

#### Parameters

##### requestParameters

[`OIDCApiGetOIDCUserinfoByPostRequest`](OIDCApiGetOIDCUserinfoByPostRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<\{\[`key`: `string`\]: `any`; \}\>

#### Throws

#### Memberof

OIDCApiInterface

***

### introspectOIDCToken()

> **introspectOIDCToken**(`requestParameters`, `options?`): `AxiosPromise`\<[`OIDCTokenIntrospectResponse`](../loginradius-sdk/namespaces/Models/interfaces/OIDCTokenIntrospectResponse.md)\>

Returns the active state and metadata of an OIDC access or refresh token per RFC 7662 (OAuth 2.0 Token Introspection). The client must authenticate using either HTTP Basic authentication (Authorization: Basic base64(client_id:client_secret)) or by including client_id and client_secret in the POST body, depending on the token_endpoint_auth_method configured for the OIDC application. Returns active: true with associated claims for valid tokens, or active: false for invalid, expired, or revoked tokens.

#### Parameters

##### requestParameters

[`OIDCApiIntrospectOIDCTokenRequest`](OIDCApiIntrospectOIDCTokenRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`OIDCTokenIntrospectResponse`](../loginradius-sdk/namespaces/Models/interfaces/OIDCTokenIntrospectResponse.md)\>

#### Throws

#### Memberof

OIDCApiInterface

***

### oIDCDynamicClientRegistration()

> **oIDCDynamicClientRegistration**(`requestParameters`, `options?`): `AxiosPromise`\<[`DynamicClientRegistrationResponse`](../loginradius-sdk/namespaces/Models/interfaces/DynamicClientRegistrationResponse.md)\>

Registers a new OAuth 2.0/OIDC client dynamically per RFC 7591 (OAuth 2.0 Dynamic Client Registration Protocol). The client submits desired metadata (redirect_uris, client_name, grant_types, etc.) and receives the registered client metadata including the assigned client_id and client_secret. This feature must be explicitly enabled on the OIDC application configuration.

#### Parameters

##### requestParameters

[`OIDCApiOIDCDynamicClientRegistrationRequest`](OIDCApiOIDCDynamicClientRegistrationRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`DynamicClientRegistrationResponse`](../loginradius-sdk/namespaces/Models/interfaces/DynamicClientRegistrationResponse.md)\>

#### Throws

#### Memberof

OIDCApiInterface

***

### oIDCPushedAuthorizationRequest()

> **oIDCPushedAuthorizationRequest**(`requestParameters`, `options?`): `AxiosPromise`\<[`PARResponse`](../loginradius-sdk/namespaces/Models/interfaces/PARResponse.md)\>

Accepts an OIDC authorization request and stores it server-side per RFC 9126 (OAuth 2.0 Pushed Authorization Requests). Returns a short-lived request_uri that the client passes as the sole parameter to the authorization endpoint, keeping all sensitive request parameters out of the browser URL. This feature must be explicitly enabled on the OIDC application configuration.

#### Parameters

##### requestParameters

[`OIDCApiOIDCPushedAuthorizationRequestRequest`](OIDCApiOIDCPushedAuthorizationRequestRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`PARResponse`](../loginradius-sdk/namespaces/Models/interfaces/PARResponse.md)\>

#### Throws

#### Memberof

OIDCApiInterface

***

### revokeOIDCRefreshToken()

> **revokeOIDCRefreshToken**(`requestParameters`, `options?`): `AxiosPromise`\<`void`\>

Revokes an OIDC refresh token per RFC 7009 (OAuth 2.0 Token Revocation), invalidating it and preventing any further use. The client must authenticate using client_id and client_secret via HTTP Basic or POST body.

#### Parameters

##### requestParameters

[`OIDCApiRevokeOIDCRefreshTokenRequest`](OIDCApiRevokeOIDCRefreshTokenRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<`void`\>

#### Throws

#### Memberof

OIDCApiInterface

***

### updateDynamicClient()

> **updateDynamicClient**(`requestParameters`, `options?`): `AxiosPromise`\<[`OAuthDynamicClientResponse`](../loginradius-sdk/namespaces/Models/type-aliases/OAuthDynamicClientResponse.md)\>

Updates the metadata of a dynamically registered OAuth 2.0/OIDC client per RFC 7592. Requires the registration_access_token issued at registration time.

#### Parameters

##### requestParameters

[`OIDCApiUpdateDynamicClientRequest`](OIDCApiUpdateDynamicClientRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`OAuthDynamicClientResponse`](../loginradius-sdk/namespaces/Models/type-aliases/OAuthDynamicClientResponse.md)\>

#### Throws

#### Memberof

OIDCApiInterface

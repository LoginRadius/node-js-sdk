[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / OIDCApi

# Class: OIDCApi

OIDCApi - object-oriented interface

## Export

OIDCApi

## Extends

- `BaseAPI`

## Implements

- [`OIDCApiInterface`](../interfaces/OIDCApiInterface.md)

## Constructors

### Constructor

> **new OIDCApi**(`configuration?`, `basePath?`, `axios?`): `OIDCApi`

#### Parameters

##### configuration?

`Configuration`

##### basePath?

`string` = `BASE_PATH`

##### axios?

`AxiosInstance` = `globalAxios`

#### Returns

`OIDCApi`

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

### deleteDynamicClient()

> **deleteDynamicClient**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`, \{ \}, `any`\>\>

Deletes a dynamically registered OAuth 2.0/OIDC client per RFC 7592. Requires the registration_access_token issued at registration time. Returns 204 No Content on success.

#### Parameters

##### requestParameters

[`OIDCApiDeleteDynamicClientRequest`](../interfaces/OIDCApiDeleteDynamicClientRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

OIDCApi

#### Implementation of

[`OIDCApiInterface`](../interfaces/OIDCApiInterface.md).[`deleteDynamicClient`](../interfaces/OIDCApiInterface.md#deletedynamicclient)

***

### getDynamicClient()

> **getDynamicClient**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`OAuthDynamicClientResponse`](../loginradius-sdk/namespaces/Models/type-aliases/OAuthDynamicClientResponse.md), `any`, \{ \}, `any`\>\>

Retrieves the metadata of a dynamically registered OAuth 2.0/OIDC client per RFC 7592 (OAuth 2.0 Dynamic Client Registration Management Protocol). Requires the registration_access_token issued at registration time.

#### Parameters

##### requestParameters

[`OIDCApiGetDynamicClientRequest`](../interfaces/OIDCApiGetDynamicClientRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`OAuthDynamicClientResponse`](../loginradius-sdk/namespaces/Models/type-aliases/OAuthDynamicClientResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

OIDCApi

#### Implementation of

[`OIDCApiInterface`](../interfaces/OIDCApiInterface.md).[`getDynamicClient`](../interfaces/OIDCApiInterface.md#getdynamicclient)

***

### getOAuthAuthorizationServerMetadataOIDC()

> **getOAuthAuthorizationServerMetadataOIDC**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`OAuthAuthorizationServerMetadata`](../loginradius-sdk/namespaces/Models/interfaces/OAuthAuthorizationServerMetadata.md), `any`, \{ \}, `any`\>\>

Returns OAuth 2.0 Authorization Server Metadata (RFC 8414) for the given OIDC app. Use this endpoint for OAuth 2.0 client discovery when using the OIDC flow path. Response does not include OpenID Connect-specific fields (e.g. userinfo_endpoint, claims_supported).

#### Parameters

##### requestParameters

[`OIDCApiGetOAuthAuthorizationServerMetadataOIDCRequest`](../interfaces/OIDCApiGetOAuthAuthorizationServerMetadataOIDCRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`OAuthAuthorizationServerMetadata`](../loginradius-sdk/namespaces/Models/interfaces/OAuthAuthorizationServerMetadata.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

OIDCApi

#### Implementation of

[`OIDCApiInterface`](../interfaces/OIDCApiInterface.md).[`getOAuthAuthorizationServerMetadataOIDC`](../interfaces/OIDCApiInterface.md#getoauthauthorizationservermetadataoidc)

***

### getOIDCDeviceCode()

> **getOIDCDeviceCode**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`OIDCDeviceCodeResponse`](../loginradius-sdk/namespaces/Models/interfaces/OIDCDeviceCodeResponse.md), `any`, \{ \}, `any`\>\>

Initiates the OAuth 2.0 Device Authorization Grant per RFC 8628. Returns a device_code and user_code that the client displays to the end-user for out-of-band authorization on a secondary device. The client then polls the token endpoint with the device_code until the user completes authorization.

#### Parameters

##### requestParameters

[`OIDCApiGetOIDCDeviceCodeRequest`](../interfaces/OIDCApiGetOIDCDeviceCodeRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`OIDCDeviceCodeResponse`](../loginradius-sdk/namespaces/Models/interfaces/OIDCDeviceCodeResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

OIDCApi

#### Implementation of

[`OIDCApiInterface`](../interfaces/OIDCApiInterface.md).[`getOIDCDeviceCode`](../interfaces/OIDCApiInterface.md#getoidcdevicecode)

***

### getOIDCDiscoveryConfig()

> **getOIDCDiscoveryConfig**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`OIDCDiscoveryResponse`](../loginradius-sdk/namespaces/Models/interfaces/OIDCDiscoveryResponse.md), `any`, \{ \}, `any`\>\>

Returns the OpenID Provider Configuration Information per OpenID Connect Discovery 1.0 (Section 4). Clients use this endpoint to dynamically discover the issuer, supported endpoints, scopes, response types, claims, and signing algorithms. The response includes the authorization_endpoint, token_endpoint, userinfo_endpoint, jwks_uri, and other metadata needed to configure an OIDC Relying Party.

#### Parameters

##### requestParameters

[`OIDCApiGetOIDCDiscoveryConfigRequest`](../interfaces/OIDCApiGetOIDCDiscoveryConfigRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`OIDCDiscoveryResponse`](../loginradius-sdk/namespaces/Models/interfaces/OIDCDiscoveryResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

OIDCApi

#### Implementation of

[`OIDCApiInterface`](../interfaces/OIDCApiInterface.md).[`getOIDCDiscoveryConfig`](../interfaces/OIDCApiInterface.md#getoidcdiscoveryconfig)

***

### getOIDCJWKSConfig()

> **getOIDCJWKSConfig**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`JWKSResponse`](../loginradius-sdk/namespaces/Models/interfaces/JWKSResponse.md), `any`, \{ \}, `any`\>\>

Retrieves the JSON Web Key Set (JWKS) for verifying token signatures.

#### Parameters

##### requestParameters

[`OIDCApiGetOIDCJWKSConfigRequest`](../interfaces/OIDCApiGetOIDCJWKSConfigRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`JWKSResponse`](../loginradius-sdk/namespaces/Models/interfaces/JWKSResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

OIDCApi

#### Implementation of

[`OIDCApiInterface`](../interfaces/OIDCApiInterface.md).[`getOIDCJWKSConfig`](../interfaces/OIDCApiInterface.md#getoidcjwksconfig)

***

### getOIDCTokens()

> **getOIDCTokens**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`OIDCTokenResponse`](../loginradius-sdk/namespaces/Models/interfaces/OIDCTokenResponse.md), `any`, \{ \}, `any`\>\>

Retrieves OpenID Connect (OIDC) tokens for User authentication.

#### Parameters

##### requestParameters

[`OIDCApiGetOIDCTokensRequest`](../interfaces/OIDCApiGetOIDCTokensRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`OIDCTokenResponse`](../loginradius-sdk/namespaces/Models/interfaces/OIDCTokenResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

OIDCApi

#### Implementation of

[`OIDCApiInterface`](../interfaces/OIDCApiInterface.md).[`getOIDCTokens`](../interfaces/OIDCApiInterface.md#getoidctokens)

***

### getOIDCUserinfo()

> **getOIDCUserinfo**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<\{\[`key`: `string`\]: `any`; \}, `any`, \{ \}, `any`\>\>

Retrieves User information using OpenID Connect (OIDC) standards.

#### Parameters

##### requestParameters

[`OIDCApiGetOIDCUserinfoRequest`](../interfaces/OIDCApiGetOIDCUserinfoRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<\{\[`key`: `string`\]: `any`; \}, `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

OIDCApi

#### Implementation of

[`OIDCApiInterface`](../interfaces/OIDCApiInterface.md).[`getOIDCUserinfo`](../interfaces/OIDCApiInterface.md#getoidcuserinfo)

***

### getOIDCUserinfoByPost()

> **getOIDCUserinfoByPost**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<\{\[`key`: `string`\]: `any`; \}, `any`, \{ \}, `any`\>\>

Retrieves User information using OpenID Connect (OIDC) standards via the POST method.

#### Parameters

##### requestParameters

[`OIDCApiGetOIDCUserinfoByPostRequest`](../interfaces/OIDCApiGetOIDCUserinfoByPostRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<\{\[`key`: `string`\]: `any`; \}, `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

OIDCApi

#### Implementation of

[`OIDCApiInterface`](../interfaces/OIDCApiInterface.md).[`getOIDCUserinfoByPost`](../interfaces/OIDCApiInterface.md#getoidcuserinfobypost)

***

### introspectOIDCToken()

> **introspectOIDCToken**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`OIDCTokenIntrospectResponse`](../loginradius-sdk/namespaces/Models/interfaces/OIDCTokenIntrospectResponse.md), `any`, \{ \}, `any`\>\>

Returns the active state and metadata of an OIDC access or refresh token per RFC 7662 (OAuth 2.0 Token Introspection). The client must authenticate using either HTTP Basic authentication (Authorization: Basic base64(client_id:client_secret)) or by including client_id and client_secret in the POST body, depending on the token_endpoint_auth_method configured for the OIDC application. Returns active: true with associated claims for valid tokens, or active: false for invalid, expired, or revoked tokens.

#### Parameters

##### requestParameters

[`OIDCApiIntrospectOIDCTokenRequest`](../interfaces/OIDCApiIntrospectOIDCTokenRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`OIDCTokenIntrospectResponse`](../loginradius-sdk/namespaces/Models/interfaces/OIDCTokenIntrospectResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

OIDCApi

#### Implementation of

[`OIDCApiInterface`](../interfaces/OIDCApiInterface.md).[`introspectOIDCToken`](../interfaces/OIDCApiInterface.md#introspectoidctoken)

***

### oIDCDynamicClientRegistration()

> **oIDCDynamicClientRegistration**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`DynamicClientRegistrationResponse`](../loginradius-sdk/namespaces/Models/interfaces/DynamicClientRegistrationResponse.md), `any`, \{ \}, `any`\>\>

Registers a new OAuth 2.0/OIDC client dynamically per RFC 7591 (OAuth 2.0 Dynamic Client Registration Protocol). The client submits desired metadata (redirect_uris, client_name, grant_types, etc.) and receives the registered client metadata including the assigned client_id and client_secret. This feature must be explicitly enabled on the OIDC application configuration.

#### Parameters

##### requestParameters

[`OIDCApiOIDCDynamicClientRegistrationRequest`](../interfaces/OIDCApiOIDCDynamicClientRegistrationRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`DynamicClientRegistrationResponse`](../loginradius-sdk/namespaces/Models/interfaces/DynamicClientRegistrationResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

OIDCApi

#### Implementation of

[`OIDCApiInterface`](../interfaces/OIDCApiInterface.md).[`oIDCDynamicClientRegistration`](../interfaces/OIDCApiInterface.md#oidcdynamicclientregistration)

***

### oIDCPushedAuthorizationRequest()

> **oIDCPushedAuthorizationRequest**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`PARResponse`](../loginradius-sdk/namespaces/Models/interfaces/PARResponse.md), `any`, \{ \}, `any`\>\>

Accepts an OIDC authorization request and stores it server-side per RFC 9126 (OAuth 2.0 Pushed Authorization Requests). Returns a short-lived request_uri that the client passes as the sole parameter to the authorization endpoint, keeping all sensitive request parameters out of the browser URL. This feature must be explicitly enabled on the OIDC application configuration.

#### Parameters

##### requestParameters

[`OIDCApiOIDCPushedAuthorizationRequestRequest`](../interfaces/OIDCApiOIDCPushedAuthorizationRequestRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`PARResponse`](../loginradius-sdk/namespaces/Models/interfaces/PARResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

OIDCApi

#### Implementation of

[`OIDCApiInterface`](../interfaces/OIDCApiInterface.md).[`oIDCPushedAuthorizationRequest`](../interfaces/OIDCApiInterface.md#oidcpushedauthorizationrequest)

***

### revokeOIDCRefreshToken()

> **revokeOIDCRefreshToken**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`, \{ \}, `any`\>\>

Revokes an OIDC refresh token per RFC 7009 (OAuth 2.0 Token Revocation), invalidating it and preventing any further use. The client must authenticate using client_id and client_secret via HTTP Basic or POST body.

#### Parameters

##### requestParameters

[`OIDCApiRevokeOIDCRefreshTokenRequest`](../interfaces/OIDCApiRevokeOIDCRefreshTokenRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

OIDCApi

#### Implementation of

[`OIDCApiInterface`](../interfaces/OIDCApiInterface.md).[`revokeOIDCRefreshToken`](../interfaces/OIDCApiInterface.md#revokeoidcrefreshtoken)

***

### updateDynamicClient()

> **updateDynamicClient**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`OAuthDynamicClientResponse`](../loginradius-sdk/namespaces/Models/type-aliases/OAuthDynamicClientResponse.md), `any`, \{ \}, `any`\>\>

Updates the metadata of a dynamically registered OAuth 2.0/OIDC client per RFC 7592. Requires the registration_access_token issued at registration time.

#### Parameters

##### requestParameters

[`OIDCApiUpdateDynamicClientRequest`](../interfaces/OIDCApiUpdateDynamicClientRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`OAuthDynamicClientResponse`](../loginradius-sdk/namespaces/Models/type-aliases/OAuthDynamicClientResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

OIDCApi

#### Implementation of

[`OIDCApiInterface`](../interfaces/OIDCApiInterface.md).[`updateDynamicClient`](../interfaces/OIDCApiInterface.md#updatedynamicclient)

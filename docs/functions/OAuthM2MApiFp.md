[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / OAuthM2MApiFp

# Function: OAuthM2MApiFp()

> **OAuthM2MApiFp**(`configuration?`): `object`

OAuthM2MApi - functional programming interface

## Parameters

### configuration?

`Configuration`

## Returns

### generateM2MToken()

> **generateM2MToken**(`oAuthM2MTokenGenerate`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`OAuthM2MTokenResponse`](../loginradius-sdk/namespaces/Models/interfaces/OAuthM2MTokenResponse.md)\>\>

Generates a Machine-to-Machine (M2M) token for application authentication.

#### Parameters

##### oAuthM2MTokenGenerate

[`OAuthM2MTokenGenerate`](../loginradius-sdk/namespaces/Models/interfaces/OAuthM2MTokenGenerate.md)

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`OAuthM2MTokenResponse`](../loginradius-sdk/namespaces/Models/interfaces/OAuthM2MTokenResponse.md)\>\>

#### Throws

### getM2MJWKSConfig()

> **getM2MJWKSConfig**(`options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`JWKSResponse`](../loginradius-sdk/namespaces/Models/interfaces/JWKSResponse.md)\>\>

Retrieves the JSON Web Key Set (JWKS) for verifying token signatures.

#### Parameters

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`JWKSResponse`](../loginradius-sdk/namespaces/Models/interfaces/JWKSResponse.md)\>\>

#### Throws

### getM2MTokenInfo()

> **getM2MTokenInfo**(`oAuthM2MTokenIntrospect`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`OAuthM2MIntrospectResponse`](../loginradius-sdk/namespaces/Models/interfaces/OAuthM2MIntrospectResponse.md)\>\>

Retrieves information about a Machine-to-Machine (M2M) token.

#### Parameters

##### oAuthM2MTokenIntrospect

[`OAuthM2MTokenIntrospect`](../loginradius-sdk/namespaces/Models/interfaces/OAuthM2MTokenIntrospect.md)

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`OAuthM2MIntrospectResponse`](../loginradius-sdk/namespaces/Models/interfaces/OAuthM2MIntrospectResponse.md)\>\>

#### Throws

### revokeM2MToken()

> **revokeM2MToken**(`oAuthM2MTokenRevoke`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<`void`\>\>

Revokes a Machine-to-Machine (M2M) token to invalidate it.

#### Parameters

##### oAuthM2MTokenRevoke

[`OAuthM2MTokenRevoke`](../loginradius-sdk/namespaces/Models/interfaces/OAuthM2MTokenRevoke.md)

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<`void`\>\>

#### Throws

## Export

[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / OAuthM2MApiFactory

# Function: OAuthM2MApiFactory()

> **OAuthM2MApiFactory**(`configuration?`, `basePath?`, `axios?`): `object`

OAuthM2MApi - factory interface

## Parameters

### configuration?

`Configuration`

### basePath?

`string`

### axios?

`AxiosInstance`

## Returns

### generateM2MToken()

> **generateM2MToken**(`requestParameters`, `options?`): `AxiosPromise`\<[`OAuthM2MTokenResponse`](../loginradius-sdk/namespaces/Models/interfaces/OAuthM2MTokenResponse.md)\>

Generates a Machine-to-Machine (M2M) token for application authentication.

#### Parameters

##### requestParameters

[`OAuthM2MApiGenerateM2MTokenRequest`](../interfaces/OAuthM2MApiGenerateM2MTokenRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`OAuthM2MTokenResponse`](../loginradius-sdk/namespaces/Models/interfaces/OAuthM2MTokenResponse.md)\>

#### Throws

### getM2MJWKSConfig()

> **getM2MJWKSConfig**(`options?`): `AxiosPromise`\<[`JWKSResponse`](../loginradius-sdk/namespaces/Models/interfaces/JWKSResponse.md)\>

Retrieves the JSON Web Key Set (JWKS) for verifying token signatures.

#### Parameters

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`JWKSResponse`](../loginradius-sdk/namespaces/Models/interfaces/JWKSResponse.md)\>

#### Throws

### getM2MTokenInfo()

> **getM2MTokenInfo**(`requestParameters`, `options?`): `AxiosPromise`\<[`OAuthM2MIntrospectResponse`](../loginradius-sdk/namespaces/Models/interfaces/OAuthM2MIntrospectResponse.md)\>

Retrieves information about a Machine-to-Machine (M2M) token.

#### Parameters

##### requestParameters

[`OAuthM2MApiGetM2MTokenInfoRequest`](../interfaces/OAuthM2MApiGetM2MTokenInfoRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`OAuthM2MIntrospectResponse`](../loginradius-sdk/namespaces/Models/interfaces/OAuthM2MIntrospectResponse.md)\>

#### Throws

### revokeM2MToken()

> **revokeM2MToken**(`requestParameters`, `options?`): `AxiosPromise`\<`void`\>

Revokes a Machine-to-Machine (M2M) token to invalidate it.

#### Parameters

##### requestParameters

[`OAuthM2MApiRevokeM2MTokenRequest`](../interfaces/OAuthM2MApiRevokeM2MTokenRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<`void`\>

#### Throws

## Export

[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / OAuthM2MApiAxiosParamCreator

# Function: OAuthM2MApiAxiosParamCreator()

> **OAuthM2MApiAxiosParamCreator**(`configuration?`): `object`

OAuthM2MApi - axios parameter creator

## Parameters

### configuration?

`Configuration`

## Returns

### generateM2MToken

> **generateM2MToken**: (`oAuthM2MTokenGenerate`, `options?`) => `Promise`\<`RequestArgs`\>

Generates a Machine-to-Machine (M2M) token for application authentication.

#### Parameters

##### oAuthM2MTokenGenerate

[`OAuthM2MTokenGenerate`](../loginradius-sdk/namespaces/Models/interfaces/OAuthM2MTokenGenerate.md)

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### getM2MJWKSConfig

> **getM2MJWKSConfig**: (`options?`) => `Promise`\<`RequestArgs`\>

Retrieves the JSON Web Key Set (JWKS) for verifying token signatures.

#### Parameters

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### getM2MTokenInfo

> **getM2MTokenInfo**: (`oAuthM2MTokenIntrospect`, `options?`) => `Promise`\<`RequestArgs`\>

Retrieves information about a Machine-to-Machine (M2M) token.

#### Parameters

##### oAuthM2MTokenIntrospect

[`OAuthM2MTokenIntrospect`](../loginradius-sdk/namespaces/Models/interfaces/OAuthM2MTokenIntrospect.md)

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### revokeM2MToken

> **revokeM2MToken**: (`oAuthM2MTokenRevoke`, `options?`) => `Promise`\<`RequestArgs`\>

Revokes a Machine-to-Machine (M2M) token to invalidate it.

#### Parameters

##### oAuthM2MTokenRevoke

[`OAuthM2MTokenRevoke`](../loginradius-sdk/namespaces/Models/interfaces/OAuthM2MTokenRevoke.md)

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

## Export

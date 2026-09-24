[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / OAuthM2MApi

# Class: OAuthM2MApi

OAuthM2MApi - object-oriented interface

## Export

OAuthM2MApi

## Extends

- `BaseAPI`

## Implements

- [`OAuthM2MApiInterface`](../interfaces/OAuthM2MApiInterface.md)

## Constructors

### Constructor

> **new OAuthM2MApi**(`configuration?`, `basePath?`, `axios?`): `OAuthM2MApi`

#### Parameters

##### configuration?

`Configuration`

##### basePath?

`string` = `BASE_PATH`

##### axios?

`AxiosInstance` = `globalAxios`

#### Returns

`OAuthM2MApi`

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

### generateM2MToken()

> **generateM2MToken**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`OAuthM2MTokenResponse`](../loginradius-sdk/namespaces/Models/interfaces/OAuthM2MTokenResponse.md), `any`, \{ \}, `any`\>\>

Generates a Machine-to-Machine (M2M) token for application authentication.

#### Parameters

##### requestParameters

[`OAuthM2MApiGenerateM2MTokenRequest`](../interfaces/OAuthM2MApiGenerateM2MTokenRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`OAuthM2MTokenResponse`](../loginradius-sdk/namespaces/Models/interfaces/OAuthM2MTokenResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

OAuthM2MApi

#### Implementation of

[`OAuthM2MApiInterface`](../interfaces/OAuthM2MApiInterface.md).[`generateM2MToken`](../interfaces/OAuthM2MApiInterface.md#generatem2mtoken)

***

### getM2MJWKSConfig()

> **getM2MJWKSConfig**(`options?`): `Promise`\<`AxiosResponse`\<[`JWKSResponse`](../loginradius-sdk/namespaces/Models/interfaces/JWKSResponse.md), `any`, \{ \}, `any`\>\>

Retrieves the JSON Web Key Set (JWKS) for verifying token signatures.

#### Parameters

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`JWKSResponse`](../loginradius-sdk/namespaces/Models/interfaces/JWKSResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

OAuthM2MApi

#### Implementation of

[`OAuthM2MApiInterface`](../interfaces/OAuthM2MApiInterface.md).[`getM2MJWKSConfig`](../interfaces/OAuthM2MApiInterface.md#getm2mjwksconfig)

***

### getM2MTokenInfo()

> **getM2MTokenInfo**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`OAuthM2MIntrospectResponse`](../loginradius-sdk/namespaces/Models/interfaces/OAuthM2MIntrospectResponse.md), `any`, \{ \}, `any`\>\>

Retrieves information about a Machine-to-Machine (M2M) token.

#### Parameters

##### requestParameters

[`OAuthM2MApiGetM2MTokenInfoRequest`](../interfaces/OAuthM2MApiGetM2MTokenInfoRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`OAuthM2MIntrospectResponse`](../loginradius-sdk/namespaces/Models/interfaces/OAuthM2MIntrospectResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

OAuthM2MApi

#### Implementation of

[`OAuthM2MApiInterface`](../interfaces/OAuthM2MApiInterface.md).[`getM2MTokenInfo`](../interfaces/OAuthM2MApiInterface.md#getm2mtokeninfo)

***

### revokeM2MToken()

> **revokeM2MToken**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`, \{ \}, `any`\>\>

Revokes a Machine-to-Machine (M2M) token to invalidate it.

#### Parameters

##### requestParameters

[`OAuthM2MApiRevokeM2MTokenRequest`](../interfaces/OAuthM2MApiRevokeM2MTokenRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

OAuthM2MApi

#### Implementation of

[`OAuthM2MApiInterface`](../interfaces/OAuthM2MApiInterface.md).[`revokeM2MToken`](../interfaces/OAuthM2MApiInterface.md#revokem2mtoken)

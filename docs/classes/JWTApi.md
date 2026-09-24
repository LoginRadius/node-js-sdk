[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / JWTApi

# Class: JWTApi

JWTApi - object-oriented interface

## Export

JWTApi

## Extends

- `BaseAPI`

## Implements

- [`JWTApiInterface`](../interfaces/JWTApiInterface.md)

## Constructors

### Constructor

> **new JWTApi**(`configuration?`, `basePath?`, `axios?`): `JWTApi`

#### Parameters

##### configuration?

`Configuration`

##### basePath?

`string` = `BASE_PATH`

##### axios?

`AxiosInstance` = `globalAxios`

#### Returns

`JWTApi`

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

### getJWTTokenByAccessToken()

> **getJWTTokenByAccessToken**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`JWTSignature`](../loginradius-sdk/namespaces/Models/interfaces/JWTSignature.md), `any`, \{ \}, `any`\>\>

Retrieves a JWT token using an Access Token obtained after successful login.

#### Parameters

##### requestParameters

[`JWTApiGetJWTTokenByAccessTokenRequest`](../interfaces/JWTApiGetJWTTokenByAccessTokenRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`JWTSignature`](../loginradius-sdk/namespaces/Models/interfaces/JWTSignature.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

JWTApi

#### Implementation of

[`JWTApiInterface`](../interfaces/JWTApiInterface.md).[`getJWTTokenByAccessToken`](../interfaces/JWTApiInterface.md#getjwttokenbyaccesstoken)

***

### getJWTTokenByLoginCredentials()

> **getJWTTokenByLoginCredentials**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`JWTSignature`](../loginradius-sdk/namespaces/Models/interfaces/JWTSignature.md), `any`, \{ \}, `any`\>\>

Retrieves a JWT token using login credentials such as Email, Phone, Username, and Password.

#### Parameters

##### requestParameters

[`JWTApiGetJWTTokenByLoginCredentialsRequest`](../interfaces/JWTApiGetJWTTokenByLoginCredentialsRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`JWTSignature`](../loginradius-sdk/namespaces/Models/interfaces/JWTSignature.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

JWTApi

#### Implementation of

[`JWTApiInterface`](../interfaces/JWTApiInterface.md).[`getJWTTokenByLoginCredentials`](../interfaces/JWTApiInterface.md#getjwttokenbylogincredentials)

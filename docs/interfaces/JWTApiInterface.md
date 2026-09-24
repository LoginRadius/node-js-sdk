[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / JWTApiInterface

# Interface: JWTApiInterface

JWTApi - interface

## Export

JWTApi

## Methods

### getJWTTokenByAccessToken()

> **getJWTTokenByAccessToken**(`requestParameters`, `options?`): `AxiosPromise`\<[`JWTSignature`](../loginradius-sdk/namespaces/Models/interfaces/JWTSignature.md)\>

Retrieves a JWT token using an Access Token obtained after successful login.

#### Parameters

##### requestParameters

[`JWTApiGetJWTTokenByAccessTokenRequest`](JWTApiGetJWTTokenByAccessTokenRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`JWTSignature`](../loginradius-sdk/namespaces/Models/interfaces/JWTSignature.md)\>

#### Throws

#### Memberof

JWTApiInterface

***

### getJWTTokenByLoginCredentials()

> **getJWTTokenByLoginCredentials**(`requestParameters`, `options?`): `AxiosPromise`\<[`JWTSignature`](../loginradius-sdk/namespaces/Models/interfaces/JWTSignature.md)\>

Retrieves a JWT token using login credentials such as Email, Phone, Username, and Password.

#### Parameters

##### requestParameters

[`JWTApiGetJWTTokenByLoginCredentialsRequest`](JWTApiGetJWTTokenByLoginCredentialsRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`JWTSignature`](../loginradius-sdk/namespaces/Models/interfaces/JWTSignature.md)\>

#### Throws

#### Memberof

JWTApiInterface

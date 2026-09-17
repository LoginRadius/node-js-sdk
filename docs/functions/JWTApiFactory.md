[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / JWTApiFactory

# Function: JWTApiFactory()

> **JWTApiFactory**(`configuration?`, `basePath?`, `axios?`): `object`

JWTApi - factory interface

## Parameters

### configuration?

`Configuration`

### basePath?

`string`

### axios?

`AxiosInstance`

## Returns

### getJWTTokenByAccessToken()

> **getJWTTokenByAccessToken**(`requestParameters`, `options?`): `AxiosPromise`\<[`JWTSignature`](../loginradius-sdk/namespaces/Models/interfaces/JWTSignature.md)\>

Retrieves a JWT token using an Access Token obtained after successful login.

#### Parameters

##### requestParameters

[`JWTApiGetJWTTokenByAccessTokenRequest`](../interfaces/JWTApiGetJWTTokenByAccessTokenRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`JWTSignature`](../loginradius-sdk/namespaces/Models/interfaces/JWTSignature.md)\>

#### Throws

### getJWTTokenByLoginCredentials()

> **getJWTTokenByLoginCredentials**(`requestParameters`, `options?`): `AxiosPromise`\<[`JWTSignature`](../loginradius-sdk/namespaces/Models/interfaces/JWTSignature.md)\>

Retrieves a JWT token using login credentials such as Email, Phone, Username, and Password.

#### Parameters

##### requestParameters

[`JWTApiGetJWTTokenByLoginCredentialsRequest`](../interfaces/JWTApiGetJWTTokenByLoginCredentialsRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`JWTSignature`](../loginradius-sdk/namespaces/Models/interfaces/JWTSignature.md)\>

#### Throws

## Export

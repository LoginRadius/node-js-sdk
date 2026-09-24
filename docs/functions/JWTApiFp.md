[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / JWTApiFp

# Function: JWTApiFp()

> **JWTApiFp**(`configuration?`): `object`

JWTApi - functional programming interface

## Parameters

### configuration?

`Configuration`

## Returns

### getJWTTokenByAccessToken()

> **getJWTTokenByAccessToken**(`jwtAppName`, `nonce?`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`JWTSignature`](../loginradius-sdk/namespaces/Models/interfaces/JWTSignature.md)\>\>

Retrieves a JWT token using an Access Token obtained after successful login.

#### Parameters

##### jwtAppName

`string`

JWT App Name

##### nonce?

`string`

random nonce claim

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`JWTSignature`](../loginradius-sdk/namespaces/Models/interfaces/JWTSignature.md)\>\>

#### Throws

### getJWTTokenByLoginCredentials()

> **getJWTTokenByLoginCredentials**(`jwtAppName`, `getJWTTokenByLoginCredentialsRequest`, `nonce?`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`JWTSignature`](../loginradius-sdk/namespaces/Models/interfaces/JWTSignature.md)\>\>

Retrieves a JWT token using login credentials such as Email, Phone, Username, and Password.

#### Parameters

##### jwtAppName

`string`

JWT App Name

##### getJWTTokenByLoginCredentialsRequest

[`GetJWTTokenByLoginCredentialsRequest`](../loginradius-sdk/namespaces/Models/type-aliases/GetJWTTokenByLoginCredentialsRequest.md)

##### nonce?

`string`

random nonce claim

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`JWTSignature`](../loginradius-sdk/namespaces/Models/interfaces/JWTSignature.md)\>\>

#### Throws

## Export

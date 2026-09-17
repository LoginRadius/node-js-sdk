[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / JWTApiAxiosParamCreator

# Function: JWTApiAxiosParamCreator()

> **JWTApiAxiosParamCreator**(`configuration?`): `object`

JWTApi - axios parameter creator

## Parameters

### configuration?

`Configuration`

## Returns

### getJWTTokenByAccessToken

> **getJWTTokenByAccessToken**: (`jwtAppName`, `nonce?`, `options?`) => `Promise`\<`RequestArgs`\>

Retrieves a JWT token using an Access Token obtained after successful login.

#### Parameters

##### jwtAppName

`string`

JWT App Name

##### nonce?

`string`

random nonce claim

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### getJWTTokenByLoginCredentials

> **getJWTTokenByLoginCredentials**: (`jwtAppName`, `getJWTTokenByLoginCredentialsRequest`, `nonce?`, `options?`) => `Promise`\<`RequestArgs`\>

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

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

## Export

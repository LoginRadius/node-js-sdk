[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / UserMigrationApiFp

# Function: UserMigrationApiFp()

> **UserMigrationApiFp**(`configuration?`): `object`

UserMigrationApi - functional programming interface

## Parameters

### configuration?

`Configuration`

## Returns

### batchUpload()

> **batchUpload**(`batchUpload`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`BatchUploadResponse`](../loginradius-sdk/namespaces/Models/interfaces/BatchUploadResponse.md)\>\>

Uploads an array of Users with optional Password and migration configuration.

#### Parameters

##### batchUpload

[`BatchUpload`](../loginradius-sdk/namespaces/Models/interfaces/BatchUpload.md)

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`BatchUploadResponse`](../loginradius-sdk/namespaces/Models/interfaces/BatchUploadResponse.md)\>\>

#### Throws

## Export

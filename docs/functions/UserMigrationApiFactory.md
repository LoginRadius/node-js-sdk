[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / UserMigrationApiFactory

# Function: UserMigrationApiFactory()

> **UserMigrationApiFactory**(`configuration?`, `basePath?`, `axios?`): `object`

UserMigrationApi - factory interface

## Parameters

### configuration?

`Configuration`

### basePath?

`string`

### axios?

`AxiosInstance`

## Returns

### batchUpload()

> **batchUpload**(`requestParameters`, `options?`): `AxiosPromise`\<[`BatchUploadResponse`](../loginradius-sdk/namespaces/Models/interfaces/BatchUploadResponse.md)\>

Uploads an array of Users with optional Password and migration configuration.

#### Parameters

##### requestParameters

[`UserMigrationApiBatchUploadRequest`](../interfaces/UserMigrationApiBatchUploadRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`BatchUploadResponse`](../loginradius-sdk/namespaces/Models/interfaces/BatchUploadResponse.md)\>

#### Throws

## Export

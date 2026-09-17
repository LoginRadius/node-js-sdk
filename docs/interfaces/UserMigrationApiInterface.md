[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / UserMigrationApiInterface

# Interface: UserMigrationApiInterface

UserMigrationApi - interface

## Export

UserMigrationApi

## Methods

### batchUpload()

> **batchUpload**(`requestParameters`, `options?`): `AxiosPromise`\<[`BatchUploadResponse`](../loginradius-sdk/namespaces/Models/interfaces/BatchUploadResponse.md)\>

Uploads an array of Users with optional Password and migration configuration.

#### Parameters

##### requestParameters

[`UserMigrationApiBatchUploadRequest`](UserMigrationApiBatchUploadRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`BatchUploadResponse`](../loginradius-sdk/namespaces/Models/interfaces/BatchUploadResponse.md)\>

#### Throws

#### Memberof

UserMigrationApiInterface

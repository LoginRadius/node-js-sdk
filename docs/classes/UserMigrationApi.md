[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / UserMigrationApi

# Class: UserMigrationApi

UserMigrationApi - object-oriented interface

## Export

UserMigrationApi

## Extends

- `BaseAPI`

## Implements

- [`UserMigrationApiInterface`](../interfaces/UserMigrationApiInterface.md)

## Constructors

### Constructor

> **new UserMigrationApi**(`configuration?`, `basePath?`, `axios?`): `UserMigrationApi`

#### Parameters

##### configuration?

`Configuration`

##### basePath?

`string` = `BASE_PATH`

##### axios?

`AxiosInstance` = `globalAxios`

#### Returns

`UserMigrationApi`

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

### batchUpload()

> **batchUpload**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`BatchUploadResponse`](../loginradius-sdk/namespaces/Models/interfaces/BatchUploadResponse.md), `any`, \{ \}, `any`\>\>

Uploads an array of Users with optional Password and migration configuration.

#### Parameters

##### requestParameters

[`UserMigrationApiBatchUploadRequest`](../interfaces/UserMigrationApiBatchUploadRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`BatchUploadResponse`](../loginradius-sdk/namespaces/Models/interfaces/BatchUploadResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

UserMigrationApi

#### Implementation of

[`UserMigrationApiInterface`](../interfaces/UserMigrationApiInterface.md).[`batchUpload`](../interfaces/UserMigrationApiInterface.md#batchupload)

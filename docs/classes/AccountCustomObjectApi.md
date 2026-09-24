[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / AccountCustomObjectApi

# Class: AccountCustomObjectApi

AccountCustomObjectApi - object-oriented interface

## Export

AccountCustomObjectApi

## Extends

- `BaseAPI`

## Implements

- [`AccountCustomObjectApiInterface`](../interfaces/AccountCustomObjectApiInterface.md)

## Constructors

### Constructor

> **new AccountCustomObjectApi**(`configuration?`, `basePath?`, `axios?`): `AccountCustomObjectApi`

#### Parameters

##### configuration?

`Configuration`

##### basePath?

`string` = `BASE_PATH`

##### axios?

`AxiosInstance` = `globalAxios`

#### Returns

`AccountCustomObjectApi`

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

### createCustomObject()

> **createCustomObject**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`CustomObjectResponseModel`](../loginradius-sdk/namespaces/Models/interfaces/CustomObjectResponseModel.md), `any`, \{ \}, `any`\>\>

Creates a new Custom Object for the User.

#### Parameters

##### requestParameters

[`AccountCustomObjectApiCreateCustomObjectRequest`](../interfaces/AccountCustomObjectApiCreateCustomObjectRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`CustomObjectResponseModel`](../loginradius-sdk/namespaces/Models/interfaces/CustomObjectResponseModel.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

AccountCustomObjectApi

#### Implementation of

[`AccountCustomObjectApiInterface`](../interfaces/AccountCustomObjectApiInterface.md).[`createCustomObject`](../interfaces/AccountCustomObjectApiInterface.md#createcustomobject)

***

### deleteCustomObjectByUidAndRecordId()

> **deleteCustomObjectByUidAndRecordId**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md), `any`, \{ \}, `any`\>\>

Deletes the Custom Object associated with the specified User using the UID and record ID.

#### Parameters

##### requestParameters

[`AccountCustomObjectApiDeleteCustomObjectByUidAndRecordIdRequest`](../interfaces/AccountCustomObjectApiDeleteCustomObjectByUidAndRecordIdRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

AccountCustomObjectApi

#### Implementation of

[`AccountCustomObjectApiInterface`](../interfaces/AccountCustomObjectApiInterface.md).[`deleteCustomObjectByUidAndRecordId`](../interfaces/AccountCustomObjectApiInterface.md#deletecustomobjectbyuidandrecordid)

***

### getCustomObjectByUid()

> **getCustomObjectByUid**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`CustomObjectsResponseModel`](../loginradius-sdk/namespaces/Models/interfaces/CustomObjectsResponseModel.md), `any`, \{ \}, `any`\>\>

Retrieves all Custom Objects associated with the UID.

#### Parameters

##### requestParameters

[`AccountCustomObjectApiGetCustomObjectByUidRequest`](../interfaces/AccountCustomObjectApiGetCustomObjectByUidRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`CustomObjectsResponseModel`](../loginradius-sdk/namespaces/Models/interfaces/CustomObjectsResponseModel.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

AccountCustomObjectApi

#### Implementation of

[`AccountCustomObjectApiInterface`](../interfaces/AccountCustomObjectApiInterface.md).[`getCustomObjectByUid`](../interfaces/AccountCustomObjectApiInterface.md#getcustomobjectbyuid)

***

### getCustomObjectByUidAndRecordId()

> **getCustomObjectByUidAndRecordId**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`CustomObjectResponseModel`](../loginradius-sdk/namespaces/Models/interfaces/CustomObjectResponseModel.md), `any`, \{ \}, `any`\>\>

Retrieves the Custom Object associated with the specified User using the UID and record ID.

#### Parameters

##### requestParameters

[`AccountCustomObjectApiGetCustomObjectByUidAndRecordIdRequest`](../interfaces/AccountCustomObjectApiGetCustomObjectByUidAndRecordIdRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`CustomObjectResponseModel`](../loginradius-sdk/namespaces/Models/interfaces/CustomObjectResponseModel.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

AccountCustomObjectApi

#### Implementation of

[`AccountCustomObjectApiInterface`](../interfaces/AccountCustomObjectApiInterface.md).[`getCustomObjectByUidAndRecordId`](../interfaces/AccountCustomObjectApiInterface.md#getcustomobjectbyuidandrecordid)

***

### updateCustomObjectByUidAndRecordId()

> **updateCustomObjectByUidAndRecordId**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`CustomObjectResponseModel`](../loginradius-sdk/namespaces/Models/interfaces/CustomObjectResponseModel.md), `any`, \{ \}, `any`\>\>

Updates a Custom Object associated with the authenticated User using the UID and record ID.

#### Parameters

##### requestParameters

[`AccountCustomObjectApiUpdateCustomObjectByUidAndRecordIdRequest`](../interfaces/AccountCustomObjectApiUpdateCustomObjectByUidAndRecordIdRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`CustomObjectResponseModel`](../loginradius-sdk/namespaces/Models/interfaces/CustomObjectResponseModel.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

AccountCustomObjectApi

#### Implementation of

[`AccountCustomObjectApiInterface`](../interfaces/AccountCustomObjectApiInterface.md).[`updateCustomObjectByUidAndRecordId`](../interfaces/AccountCustomObjectApiInterface.md#updatecustomobjectbyuidandrecordid)

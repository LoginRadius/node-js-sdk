[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / CustomObjectApi

# Class: CustomObjectApi

CustomObjectApi - object-oriented interface

## Export

CustomObjectApi

## Extends

- `BaseAPI`

## Implements

- [`CustomObjectApiInterface`](../interfaces/CustomObjectApiInterface.md)

## Constructors

### Constructor

> **new CustomObjectApi**(`configuration?`, `basePath?`, `axios?`): `CustomObjectApi`

#### Parameters

##### configuration?

`Configuration`

##### basePath?

`string` = `BASE_PATH`

##### axios?

`AxiosInstance` = `globalAxios`

#### Returns

`CustomObjectApi`

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

### createCustomObjectByToken()

> **createCustomObjectByToken**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`CustomObjectResponseModel`](../loginradius-sdk/namespaces/Models/interfaces/CustomObjectResponseModel.md), `any`, \{ \}, `any`\>\>

Creates a Custom Object associated with the authenticated User using an Access Token.

#### Parameters

##### requestParameters

[`CustomObjectApiCreateCustomObjectByTokenRequest`](../interfaces/CustomObjectApiCreateCustomObjectByTokenRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`CustomObjectResponseModel`](../loginradius-sdk/namespaces/Models/interfaces/CustomObjectResponseModel.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

CustomObjectApi

#### Implementation of

[`CustomObjectApiInterface`](../interfaces/CustomObjectApiInterface.md).[`createCustomObjectByToken`](../interfaces/CustomObjectApiInterface.md#createcustomobjectbytoken)

***

### deleteCustomObjectByTokenAndRecordId()

> **deleteCustomObjectByTokenAndRecordId**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md), `any`, \{ \}, `any`\>\>

Deletes the Custom Object associated with the specified User using an Access Token and record ID.

#### Parameters

##### requestParameters

[`CustomObjectApiDeleteCustomObjectByTokenAndRecordIdRequest`](../interfaces/CustomObjectApiDeleteCustomObjectByTokenAndRecordIdRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

CustomObjectApi

#### Implementation of

[`CustomObjectApiInterface`](../interfaces/CustomObjectApiInterface.md).[`deleteCustomObjectByTokenAndRecordId`](../interfaces/CustomObjectApiInterface.md#deletecustomobjectbytokenandrecordid)

***

### getCustomObjectByToken()

> **getCustomObjectByToken**(`requestParameters?`, `options?`): `Promise`\<`AxiosResponse`\<[`CustomObjectsResponseModel`](../loginradius-sdk/namespaces/Models/interfaces/CustomObjectsResponseModel.md), `any`, \{ \}, `any`\>\>

Retrieves Custom Objects associated with the authenticated User using an Access Token.

#### Parameters

##### requestParameters?

[`CustomObjectApiGetCustomObjectByTokenRequest`](../interfaces/CustomObjectApiGetCustomObjectByTokenRequest.md) = `{}`

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`CustomObjectsResponseModel`](../loginradius-sdk/namespaces/Models/interfaces/CustomObjectsResponseModel.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

CustomObjectApi

#### Implementation of

[`CustomObjectApiInterface`](../interfaces/CustomObjectApiInterface.md).[`getCustomObjectByToken`](../interfaces/CustomObjectApiInterface.md#getcustomobjectbytoken)

***

### getCustomObjectByTokenAndRecordId()

> **getCustomObjectByTokenAndRecordId**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`CustomObjectResponseModel`](../loginradius-sdk/namespaces/Models/interfaces/CustomObjectResponseModel.md), `any`, \{ \}, `any`\>\>

Retrieves the Custom Object associated with the specified User using an Access Token and record ID.

#### Parameters

##### requestParameters

[`CustomObjectApiGetCustomObjectByTokenAndRecordIdRequest`](../interfaces/CustomObjectApiGetCustomObjectByTokenAndRecordIdRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`CustomObjectResponseModel`](../loginradius-sdk/namespaces/Models/interfaces/CustomObjectResponseModel.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

CustomObjectApi

#### Implementation of

[`CustomObjectApiInterface`](../interfaces/CustomObjectApiInterface.md).[`getCustomObjectByTokenAndRecordId`](../interfaces/CustomObjectApiInterface.md#getcustomobjectbytokenandrecordid)

***

### updateCustomObjectByTokenAndRecordId()

> **updateCustomObjectByTokenAndRecordId**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`CustomObjectResponseModel`](../loginradius-sdk/namespaces/Models/interfaces/CustomObjectResponseModel.md), `any`, \{ \}, `any`\>\>

Updates a Custom Object associated with the authenticated User using an Access Token and record ID.

#### Parameters

##### requestParameters

[`CustomObjectApiUpdateCustomObjectByTokenAndRecordIdRequest`](../interfaces/CustomObjectApiUpdateCustomObjectByTokenAndRecordIdRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`CustomObjectResponseModel`](../loginradius-sdk/namespaces/Models/interfaces/CustomObjectResponseModel.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

CustomObjectApi

#### Implementation of

[`CustomObjectApiInterface`](../interfaces/CustomObjectApiInterface.md).[`updateCustomObjectByTokenAndRecordId`](../interfaces/CustomObjectApiInterface.md#updatecustomobjectbytokenandrecordid)

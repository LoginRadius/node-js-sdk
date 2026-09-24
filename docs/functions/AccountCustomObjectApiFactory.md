[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / AccountCustomObjectApiFactory

# Function: AccountCustomObjectApiFactory()

> **AccountCustomObjectApiFactory**(`configuration?`, `basePath?`, `axios?`): `object`

AccountCustomObjectApi - factory interface

## Parameters

### configuration?

`Configuration`

### basePath?

`string`

### axios?

`AxiosInstance`

## Returns

### createCustomObject()

> **createCustomObject**(`requestParameters`, `options?`): `AxiosPromise`\<[`CustomObjectResponseModel`](../loginradius-sdk/namespaces/Models/interfaces/CustomObjectResponseModel.md)\>

Creates a new Custom Object for the User.

#### Parameters

##### requestParameters

[`AccountCustomObjectApiCreateCustomObjectRequest`](../interfaces/AccountCustomObjectApiCreateCustomObjectRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`CustomObjectResponseModel`](../loginradius-sdk/namespaces/Models/interfaces/CustomObjectResponseModel.md)\>

#### Throws

### deleteCustomObjectByUidAndRecordId()

> **deleteCustomObjectByUidAndRecordId**(`requestParameters`, `options?`): `AxiosPromise`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md)\>

Deletes the Custom Object associated with the specified User using the UID and record ID.

#### Parameters

##### requestParameters

[`AccountCustomObjectApiDeleteCustomObjectByUidAndRecordIdRequest`](../interfaces/AccountCustomObjectApiDeleteCustomObjectByUidAndRecordIdRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md)\>

#### Throws

### getCustomObjectByUid()

> **getCustomObjectByUid**(`requestParameters`, `options?`): `AxiosPromise`\<[`CustomObjectsResponseModel`](../loginradius-sdk/namespaces/Models/interfaces/CustomObjectsResponseModel.md)\>

Retrieves all Custom Objects associated with the UID.

#### Parameters

##### requestParameters

[`AccountCustomObjectApiGetCustomObjectByUidRequest`](../interfaces/AccountCustomObjectApiGetCustomObjectByUidRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`CustomObjectsResponseModel`](../loginradius-sdk/namespaces/Models/interfaces/CustomObjectsResponseModel.md)\>

#### Throws

### getCustomObjectByUidAndRecordId()

> **getCustomObjectByUidAndRecordId**(`requestParameters`, `options?`): `AxiosPromise`\<[`CustomObjectResponseModel`](../loginradius-sdk/namespaces/Models/interfaces/CustomObjectResponseModel.md)\>

Retrieves the Custom Object associated with the specified User using the UID and record ID.

#### Parameters

##### requestParameters

[`AccountCustomObjectApiGetCustomObjectByUidAndRecordIdRequest`](../interfaces/AccountCustomObjectApiGetCustomObjectByUidAndRecordIdRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`CustomObjectResponseModel`](../loginradius-sdk/namespaces/Models/interfaces/CustomObjectResponseModel.md)\>

#### Throws

### updateCustomObjectByUidAndRecordId()

> **updateCustomObjectByUidAndRecordId**(`requestParameters`, `options?`): `AxiosPromise`\<[`CustomObjectResponseModel`](../loginradius-sdk/namespaces/Models/interfaces/CustomObjectResponseModel.md)\>

Updates a Custom Object associated with the authenticated User using the UID and record ID.

#### Parameters

##### requestParameters

[`AccountCustomObjectApiUpdateCustomObjectByUidAndRecordIdRequest`](../interfaces/AccountCustomObjectApiUpdateCustomObjectByUidAndRecordIdRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`CustomObjectResponseModel`](../loginradius-sdk/namespaces/Models/interfaces/CustomObjectResponseModel.md)\>

#### Throws

## Export

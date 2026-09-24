[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / AccountCustomObjectApiInterface

# Interface: AccountCustomObjectApiInterface

AccountCustomObjectApi - interface

## Export

AccountCustomObjectApi

## Methods

### createCustomObject()

> **createCustomObject**(`requestParameters`, `options?`): `AxiosPromise`\<[`CustomObjectResponseModel`](../loginradius-sdk/namespaces/Models/interfaces/CustomObjectResponseModel.md)\>

Creates a new Custom Object for the User.

#### Parameters

##### requestParameters

[`AccountCustomObjectApiCreateCustomObjectRequest`](AccountCustomObjectApiCreateCustomObjectRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`CustomObjectResponseModel`](../loginradius-sdk/namespaces/Models/interfaces/CustomObjectResponseModel.md)\>

#### Throws

#### Memberof

AccountCustomObjectApiInterface

***

### deleteCustomObjectByUidAndRecordId()

> **deleteCustomObjectByUidAndRecordId**(`requestParameters`, `options?`): `AxiosPromise`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md)\>

Deletes the Custom Object associated with the specified User using the UID and record ID.

#### Parameters

##### requestParameters

[`AccountCustomObjectApiDeleteCustomObjectByUidAndRecordIdRequest`](AccountCustomObjectApiDeleteCustomObjectByUidAndRecordIdRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md)\>

#### Throws

#### Memberof

AccountCustomObjectApiInterface

***

### getCustomObjectByUid()

> **getCustomObjectByUid**(`requestParameters`, `options?`): `AxiosPromise`\<[`CustomObjectsResponseModel`](../loginradius-sdk/namespaces/Models/interfaces/CustomObjectsResponseModel.md)\>

Retrieves all Custom Objects associated with the UID.

#### Parameters

##### requestParameters

[`AccountCustomObjectApiGetCustomObjectByUidRequest`](AccountCustomObjectApiGetCustomObjectByUidRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`CustomObjectsResponseModel`](../loginradius-sdk/namespaces/Models/interfaces/CustomObjectsResponseModel.md)\>

#### Throws

#### Memberof

AccountCustomObjectApiInterface

***

### getCustomObjectByUidAndRecordId()

> **getCustomObjectByUidAndRecordId**(`requestParameters`, `options?`): `AxiosPromise`\<[`CustomObjectResponseModel`](../loginradius-sdk/namespaces/Models/interfaces/CustomObjectResponseModel.md)\>

Retrieves the Custom Object associated with the specified User using the UID and record ID.

#### Parameters

##### requestParameters

[`AccountCustomObjectApiGetCustomObjectByUidAndRecordIdRequest`](AccountCustomObjectApiGetCustomObjectByUidAndRecordIdRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`CustomObjectResponseModel`](../loginradius-sdk/namespaces/Models/interfaces/CustomObjectResponseModel.md)\>

#### Throws

#### Memberof

AccountCustomObjectApiInterface

***

### updateCustomObjectByUidAndRecordId()

> **updateCustomObjectByUidAndRecordId**(`requestParameters`, `options?`): `AxiosPromise`\<[`CustomObjectResponseModel`](../loginradius-sdk/namespaces/Models/interfaces/CustomObjectResponseModel.md)\>

Updates a Custom Object associated with the authenticated User using the UID and record ID.

#### Parameters

##### requestParameters

[`AccountCustomObjectApiUpdateCustomObjectByUidAndRecordIdRequest`](AccountCustomObjectApiUpdateCustomObjectByUidAndRecordIdRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`CustomObjectResponseModel`](../loginradius-sdk/namespaces/Models/interfaces/CustomObjectResponseModel.md)\>

#### Throws

#### Memberof

AccountCustomObjectApiInterface

[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / AccountCustomObjectApiFp

# Function: AccountCustomObjectApiFp()

> **AccountCustomObjectApiFp**(`configuration?`): `object`

AccountCustomObjectApi - functional programming interface

## Parameters

### configuration?

`Configuration`

## Returns

### createCustomObject()

> **createCustomObject**(`uid`, `requestBody`, `objectname?`, `customobjectid?`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`CustomObjectResponseModel`](../loginradius-sdk/namespaces/Models/interfaces/CustomObjectResponseModel.md)\>\>

Creates a new Custom Object for the User.

#### Parameters

##### uid

`string`

The UID associated with the User

##### requestBody

##### objectname?

`string`

Name of the Custom Object to be used in the request. The name should match the Custom Object configured in your LoginRadius account.

##### customobjectid?

`string`

Unique identifier for the Custom Object record

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`CustomObjectResponseModel`](../loginradius-sdk/namespaces/Models/interfaces/CustomObjectResponseModel.md)\>\>

#### Throws

### deleteCustomObjectByUidAndRecordId()

> **deleteCustomObjectByUidAndRecordId**(`objectrecordid`, `uid`, `objectname?`, `customobjectid?`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md)\>\>

Deletes the Custom Object associated with the specified User using the UID and record ID.

#### Parameters

##### objectrecordid

`string`

Unique identifier for the Custom Object record. The ID is used to target a specific Custom Object.

##### uid

`string`

The UID associated with the User

##### objectname?

`string`

Name of the Custom Object to be used in the request. The name should match the Custom Object configured in your LoginRadius account.

##### customobjectid?

`string`

Unique identifier for the Custom Object record

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md)\>\>

#### Throws

### getCustomObjectByUid()

> **getCustomObjectByUid**(`uid`, `objectname?`, `customobjectid?`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`CustomObjectsResponseModel`](../loginradius-sdk/namespaces/Models/interfaces/CustomObjectsResponseModel.md)\>\>

Retrieves all Custom Objects associated with the UID.

#### Parameters

##### uid

`string`

The UID associated with the User

##### objectname?

`string`

Name of the Custom Object to be used in the request. The name should match the Custom Object configured in your LoginRadius account.

##### customobjectid?

`string`

Unique identifier for the Custom Object record

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`CustomObjectsResponseModel`](../loginradius-sdk/namespaces/Models/interfaces/CustomObjectsResponseModel.md)\>\>

#### Throws

### getCustomObjectByUidAndRecordId()

> **getCustomObjectByUidAndRecordId**(`objectrecordid`, `uid`, `objectname?`, `customobjectid?`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`CustomObjectResponseModel`](../loginradius-sdk/namespaces/Models/interfaces/CustomObjectResponseModel.md)\>\>

Retrieves the Custom Object associated with the specified User using the UID and record ID.

#### Parameters

##### objectrecordid

`string`

Unique identifier for the Custom Object record. The ID is used to target a specific Custom Object.

##### uid

`string`

The UID associated with the User

##### objectname?

`string`

Name of the Custom Object to be used in the request. The name should match the Custom Object configured in your LoginRadius account.

##### customobjectid?

`string`

Unique identifier for the Custom Object record

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`CustomObjectResponseModel`](../loginradius-sdk/namespaces/Models/interfaces/CustomObjectResponseModel.md)\>\>

#### Throws

### updateCustomObjectByUidAndRecordId()

> **updateCustomObjectByUidAndRecordId**(`objectrecordid`, `uid`, `updateType`, `requestBody`, `objectname?`, `customobjectid?`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`CustomObjectResponseModel`](../loginradius-sdk/namespaces/Models/interfaces/CustomObjectResponseModel.md)\>\>

Updates a Custom Object associated with the authenticated User using the UID and record ID.

#### Parameters

##### objectrecordid

`string`

Unique identifier for the Custom Object record. The ID is used to target a specific Custom Object.

##### uid

`string`

The UID associated with the User

##### updateType

[`UpdateCustomObjectByUidAndRecordIdUpdateTypeEnum`](../enumerations/UpdateCustomObjectByUidAndRecordIdUpdateTypeEnum.md)

The type of update to be performed on the Custom Object. This parameter is used to specify whether the update should be a full update or a partial update.

##### requestBody

##### objectname?

`string`

Name of the Custom Object to be used in the request. The name should match the Custom Object configured in your LoginRadius account.

##### customobjectid?

`string`

Unique identifier for the Custom Object record

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`CustomObjectResponseModel`](../loginradius-sdk/namespaces/Models/interfaces/CustomObjectResponseModel.md)\>\>

#### Throws

## Export

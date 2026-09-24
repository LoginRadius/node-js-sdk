[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / AccountCustomObjectApiAxiosParamCreator

# Function: AccountCustomObjectApiAxiosParamCreator()

> **AccountCustomObjectApiAxiosParamCreator**(`configuration?`): `object`

AccountCustomObjectApi - axios parameter creator

## Parameters

### configuration?

`Configuration`

## Returns

### createCustomObject

> **createCustomObject**: (`uid`, `requestBody`, `objectname?`, `customobjectid?`, `options?`) => `Promise`\<`RequestArgs`\>

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

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### deleteCustomObjectByUidAndRecordId

> **deleteCustomObjectByUidAndRecordId**: (`objectrecordid`, `uid`, `objectname?`, `customobjectid?`, `options?`) => `Promise`\<`RequestArgs`\>

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

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### getCustomObjectByUid

> **getCustomObjectByUid**: (`uid`, `objectname?`, `customobjectid?`, `options?`) => `Promise`\<`RequestArgs`\>

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

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### getCustomObjectByUidAndRecordId

> **getCustomObjectByUidAndRecordId**: (`objectrecordid`, `uid`, `objectname?`, `customobjectid?`, `options?`) => `Promise`\<`RequestArgs`\>

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

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### updateCustomObjectByUidAndRecordId

> **updateCustomObjectByUidAndRecordId**: (`objectrecordid`, `uid`, `updateType`, `requestBody`, `objectname?`, `customobjectid?`, `options?`) => `Promise`\<`RequestArgs`\>

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

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

## Export

[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / AccountCustomObjectApiUpdateCustomObjectByUidAndRecordIdRequest

# Interface: AccountCustomObjectApiUpdateCustomObjectByUidAndRecordIdRequest

Request parameters for updateCustomObjectByUidAndRecordId operation in AccountCustomObjectApi.

## Export

AccountCustomObjectApiUpdateCustomObjectByUidAndRecordIdRequest

## Properties

### customobjectid?

> `readonly` `optional` **customobjectid?**: `string`

Unique identifier for the Custom Object record

#### Memberof

AccountCustomObjectApiUpdateCustomObjectByUidAndRecordId

***

### objectname?

> `readonly` `optional` **objectname?**: `string`

Name of the Custom Object to be used in the request. The name should match the Custom Object configured in your LoginRadius account.

#### Memberof

AccountCustomObjectApiUpdateCustomObjectByUidAndRecordId

***

### objectrecordid

> `readonly` **objectrecordid**: `string`

Unique identifier for the Custom Object record. The ID is used to target a specific Custom Object.

#### Memberof

AccountCustomObjectApiUpdateCustomObjectByUidAndRecordId

***

### requestBody

> `readonly` **requestBody**: `object`

#### Index Signature

\[`key`: `string`\]: `any`

#### Memberof

AccountCustomObjectApiUpdateCustomObjectByUidAndRecordId

***

### uid

> `readonly` **uid**: `string`

The UID associated with the User

#### Memberof

AccountCustomObjectApiUpdateCustomObjectByUidAndRecordId

***

### updateType

> `readonly` **updateType**: [`UpdateCustomObjectByUidAndRecordIdUpdateTypeEnum`](../enumerations/UpdateCustomObjectByUidAndRecordIdUpdateTypeEnum.md)

The type of update to be performed on the Custom Object. This parameter is used to specify whether the update should be a full update or a partial update.

#### Memberof

AccountCustomObjectApiUpdateCustomObjectByUidAndRecordId

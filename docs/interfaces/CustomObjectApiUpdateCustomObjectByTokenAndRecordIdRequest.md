[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / CustomObjectApiUpdateCustomObjectByTokenAndRecordIdRequest

# Interface: CustomObjectApiUpdateCustomObjectByTokenAndRecordIdRequest

Request parameters for updateCustomObjectByTokenAndRecordId operation in CustomObjectApi.

## Export

CustomObjectApiUpdateCustomObjectByTokenAndRecordIdRequest

## Properties

### accessToken?

> `readonly` `optional` **accessToken?**: `string`

Access Token of the User

#### Memberof

CustomObjectApiUpdateCustomObjectByTokenAndRecordId

***

### customobjectid?

> `readonly` `optional` **customobjectid?**: `string`

Unique identifier for the Custom Object record

#### Memberof

CustomObjectApiUpdateCustomObjectByTokenAndRecordId

***

### objectname?

> `readonly` `optional` **objectname?**: `string`

Name of the Custom Object to be used in the request. The name should match the Custom Object configured in your LoginRadius account.

#### Memberof

CustomObjectApiUpdateCustomObjectByTokenAndRecordId

***

### objectrecordid

> `readonly` **objectrecordid**: `string`

Unique identifier for the Custom Object record. The ID is used to target a specific Custom Object.

#### Memberof

CustomObjectApiUpdateCustomObjectByTokenAndRecordId

***

### preventWebhook?

> `readonly` `optional` **preventWebhook?**: `boolean`

When true, suppresses webhook events for this operation.

#### Memberof

CustomObjectApiUpdateCustomObjectByTokenAndRecordId

***

### requestBody

> `readonly` **requestBody**: `object`

JSON payload representing the Custom Object to be updated.

#### Index Signature

\[`key`: `string`\]: `any`

#### Memberof

CustomObjectApiUpdateCustomObjectByTokenAndRecordId

***

### updateType

> `readonly` **updateType**: [`UpdateCustomObjectByTokenAndRecordIdUpdateTypeEnum`](../enumerations/UpdateCustomObjectByTokenAndRecordIdUpdateTypeEnum.md)

The type of update to be performed on the Custom Object. This parameter is used to specify whether the update should be a full update or a partial update.

#### Memberof

CustomObjectApiUpdateCustomObjectByTokenAndRecordId

***

### xPreventWebhook?

> `readonly` `optional` **xPreventWebhook?**: `boolean`

When true, suppresses webhook events for this operation.

#### Memberof

CustomObjectApiUpdateCustomObjectByTokenAndRecordId

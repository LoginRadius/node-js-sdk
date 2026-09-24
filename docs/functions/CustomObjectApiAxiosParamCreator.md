[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / CustomObjectApiAxiosParamCreator

# Function: CustomObjectApiAxiosParamCreator()

> **CustomObjectApiAxiosParamCreator**(`configuration?`): `object`

CustomObjectApi - axios parameter creator

## Parameters

### configuration?

`Configuration`

## Returns

### createCustomObjectByToken

> **createCustomObjectByToken**: (`requestBody`, `customobjectid?`, `objectname?`, `accessToken?`, `preventWebhook?`, `xPreventWebhook?`, `options?`) => `Promise`\<`RequestArgs`\>

Creates a Custom Object associated with the authenticated User using an Access Token.

#### Parameters

##### requestBody

##### customobjectid?

`string`

Unique identifier for the Custom Object record

##### objectname?

`string`

Name of the Custom Object to be used in the request. The name should match the Custom Object configured in your LoginRadius account.

##### accessToken?

`string`

Access Token of the User

##### preventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### xPreventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### deleteCustomObjectByTokenAndRecordId

> **deleteCustomObjectByTokenAndRecordId**: (`objectrecordid`, `accessToken?`, `preventWebhook?`, `xPreventWebhook?`, `objectname?`, `customobjectid?`, `options?`) => `Promise`\<`RequestArgs`\>

Deletes the Custom Object associated with the specified User using an Access Token and record ID.

#### Parameters

##### objectrecordid

`string`

Unique identifier for the Custom Object record. The ID is used to target a specific Custom Object.

##### accessToken?

`string`

Access Token of the User

##### preventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### xPreventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

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

### getCustomObjectByToken

> **getCustomObjectByToken**: (`customobjectid?`, `objectname?`, `accessToken?`, `options?`) => `Promise`\<`RequestArgs`\>

Retrieves Custom Objects associated with the authenticated User using an Access Token.

#### Parameters

##### customobjectid?

`string`

Unique identifier for the Custom Object record

##### objectname?

`string`

Name of the Custom Object to be used in the request. The name should match the Custom Object configured in your LoginRadius account.

##### accessToken?

`string`

Access Token of the User

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### getCustomObjectByTokenAndRecordId

> **getCustomObjectByTokenAndRecordId**: (`objectrecordid`, `accessToken?`, `objectname?`, `customobjectid?`, `options?`) => `Promise`\<`RequestArgs`\>

Retrieves the Custom Object associated with the specified User using an Access Token and record ID.

#### Parameters

##### objectrecordid

`string`

Unique identifier for the Custom Object record. The ID is used to target a specific Custom Object.

##### accessToken?

`string`

Access Token of the User

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

### updateCustomObjectByTokenAndRecordId

> **updateCustomObjectByTokenAndRecordId**: (`objectrecordid`, `updateType`, `requestBody`, `objectname?`, `accessToken?`, `preventWebhook?`, `xPreventWebhook?`, `customobjectid?`, `options?`) => `Promise`\<`RequestArgs`\>

Updates a Custom Object associated with the authenticated User using an Access Token and record ID.

#### Parameters

##### objectrecordid

`string`

Unique identifier for the Custom Object record. The ID is used to target a specific Custom Object.

##### updateType

[`UpdateCustomObjectByTokenAndRecordIdUpdateTypeEnum`](../enumerations/UpdateCustomObjectByTokenAndRecordIdUpdateTypeEnum.md)

The type of update to be performed on the Custom Object. This parameter is used to specify whether the update should be a full update or a partial update.

##### requestBody

JSON payload representing the Custom Object to be updated.

##### objectname?

`string`

Name of the Custom Object to be used in the request. The name should match the Custom Object configured in your LoginRadius account.

##### accessToken?

`string`

Access Token of the User

##### preventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

##### xPreventWebhook?

`boolean`

When true, suppresses webhook events for this operation.

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

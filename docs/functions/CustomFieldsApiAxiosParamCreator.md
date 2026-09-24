[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / CustomFieldsApiAxiosParamCreator

# Function: CustomFieldsApiAxiosParamCreator()

> **CustomFieldsApiAxiosParamCreator**(`configuration?`): `object`

CustomFieldsApi - axios parameter creator

## Parameters

### configuration?

`Configuration`

## Returns

### createCustomField

> **createCustomField**: (`raasCustomFieldModel`, `options?`) => `Promise`\<`RequestArgs`\>

Creates a new Custom Field for the Tenant.

#### Parameters

##### raasCustomFieldModel

[`RaasCustomFieldModel`](../loginradius-sdk/namespaces/Models/interfaces/RaasCustomFieldModel.md)

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### deleteCustomField

> **deleteCustomField**: (`cfname`, `options?`) => `Promise`\<`RequestArgs`\>

Deletes a Custom Field by name for the Tenant.

#### Parameters

##### cfname

`string`

Custom Fields Name

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### getActiveCustomFields

> **getActiveCustomFields**: (`options?`) => `Promise`\<`RequestArgs`\>

Retrieves all custom fields currently active in the registration form for the Tenant.

#### Parameters

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### getAllCustomFields

> **getAllCustomFields**: (`options?`) => `Promise`\<`RequestArgs`\>

Retrieves all Custom Fields created for the Tenant.

#### Parameters

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### getCustomFieldLimit

> **getCustomFieldLimit**: (`options?`) => `Promise`\<`RequestArgs`\>

Retrieves the Custom Field Limit configured for the Tenant.

#### Parameters

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### listCustomFields

> **listCustomFields**: (`options?`) => `Promise`\<`RequestArgs`\>

Retrieves all custom fields for the Tenant, returned as an array of strings.

#### Parameters

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### setCustomField

> **setCustomField**: (`setCustomFieldRequest`, `options?`) => `Promise`\<`RequestArgs`\>

Updates or sets a Custom Field instance in RAAS to be displayed on forms for the Tenant.

#### Parameters

##### setCustomFieldRequest

[`SetCustomFieldRequest`](../loginradius-sdk/namespaces/Models/interfaces/SetCustomFieldRequest.md)

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

## Export

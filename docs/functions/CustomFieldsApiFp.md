[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / CustomFieldsApiFp

# Function: CustomFieldsApiFp()

> **CustomFieldsApiFp**(`configuration?`): `object`

CustomFieldsApi - functional programming interface

## Parameters

### configuration?

`Configuration`

## Returns

### createCustomField()

> **createCustomField**(`raasCustomFieldModel`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`RaasCustomField`](../loginradius-sdk/namespaces/Models/interfaces/RaasCustomField.md)\>\>

Creates a new Custom Field for the Tenant.

#### Parameters

##### raasCustomFieldModel

[`RaasCustomFieldModel`](../loginradius-sdk/namespaces/Models/interfaces/RaasCustomFieldModel.md)

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`RaasCustomField`](../loginradius-sdk/namespaces/Models/interfaces/RaasCustomField.md)\>\>

#### Throws

### deleteCustomField()

> **deleteCustomField**(`cfname`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md)\>\>

Deletes a Custom Field by name for the Tenant.

#### Parameters

##### cfname

`string`

Custom Fields Name

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md)\>\>

#### Throws

### getActiveCustomFields()

> **getActiveCustomFields**(`options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`SetCustomField200Response`](../loginradius-sdk/namespaces/Models/interfaces/SetCustomField200Response.md)\>\>

Retrieves all custom fields currently active in the registration form for the Tenant.

#### Parameters

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`SetCustomField200Response`](../loginradius-sdk/namespaces/Models/interfaces/SetCustomField200Response.md)\>\>

#### Throws

### getAllCustomFields()

> **getAllCustomFields**(`options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`GetAllCustomFields200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetAllCustomFields200Response.md)\>\>

Retrieves all Custom Fields created for the Tenant.

#### Parameters

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`GetAllCustomFields200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetAllCustomFields200Response.md)\>\>

#### Throws

### getCustomFieldLimit()

> **getCustomFieldLimit**(`options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`CustomFieldLimitResponse`](../loginradius-sdk/namespaces/Models/interfaces/CustomFieldLimitResponse.md)\>\>

Retrieves the Custom Field Limit configured for the Tenant.

#### Parameters

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`CustomFieldLimitResponse`](../loginradius-sdk/namespaces/Models/interfaces/CustomFieldLimitResponse.md)\>\>

#### Throws

### listCustomFields()

> **listCustomFields**(`options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`SetProvidersOrderRequest`](../loginradius-sdk/namespaces/Models/interfaces/SetProvidersOrderRequest.md)\>\>

Retrieves all custom fields for the Tenant, returned as an array of strings.

#### Parameters

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`SetProvidersOrderRequest`](../loginradius-sdk/namespaces/Models/interfaces/SetProvidersOrderRequest.md)\>\>

#### Throws

### setCustomField()

> **setCustomField**(`setCustomFieldRequest`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`SetCustomField200Response`](../loginradius-sdk/namespaces/Models/interfaces/SetCustomField200Response.md)\>\>

Updates or sets a Custom Field instance in RAAS to be displayed on forms for the Tenant.

#### Parameters

##### setCustomFieldRequest

[`SetCustomFieldRequest`](../loginradius-sdk/namespaces/Models/interfaces/SetCustomFieldRequest.md)

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`SetCustomField200Response`](../loginradius-sdk/namespaces/Models/interfaces/SetCustomField200Response.md)\>\>

#### Throws

## Export

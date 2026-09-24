[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / CustomFieldsApiInterface

# Interface: CustomFieldsApiInterface

CustomFieldsApi - interface

## Export

CustomFieldsApi

## Methods

### createCustomField()

> **createCustomField**(`requestParameters`, `options?`): `AxiosPromise`\<[`RaasCustomField`](../loginradius-sdk/namespaces/Models/interfaces/RaasCustomField.md)\>

Creates a new Custom Field for the Tenant.

#### Parameters

##### requestParameters

[`CustomFieldsApiCreateCustomFieldRequest`](CustomFieldsApiCreateCustomFieldRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`RaasCustomField`](../loginradius-sdk/namespaces/Models/interfaces/RaasCustomField.md)\>

#### Throws

#### Memberof

CustomFieldsApiInterface

***

### deleteCustomField()

> **deleteCustomField**(`requestParameters`, `options?`): `AxiosPromise`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md)\>

Deletes a Custom Field by name for the Tenant.

#### Parameters

##### requestParameters

[`CustomFieldsApiDeleteCustomFieldRequest`](CustomFieldsApiDeleteCustomFieldRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md)\>

#### Throws

#### Memberof

CustomFieldsApiInterface

***

### getActiveCustomFields()

> **getActiveCustomFields**(`options?`): `AxiosPromise`\<[`SetCustomField200Response`](../loginradius-sdk/namespaces/Models/interfaces/SetCustomField200Response.md)\>

Retrieves all custom fields currently active in the registration form for the Tenant.

#### Parameters

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`SetCustomField200Response`](../loginradius-sdk/namespaces/Models/interfaces/SetCustomField200Response.md)\>

#### Throws

#### Memberof

CustomFieldsApiInterface

***

### getAllCustomFields()

> **getAllCustomFields**(`options?`): `AxiosPromise`\<[`GetAllCustomFields200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetAllCustomFields200Response.md)\>

Retrieves all Custom Fields created for the Tenant.

#### Parameters

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`GetAllCustomFields200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetAllCustomFields200Response.md)\>

#### Throws

#### Memberof

CustomFieldsApiInterface

***

### getCustomFieldLimit()

> **getCustomFieldLimit**(`options?`): `AxiosPromise`\<[`CustomFieldLimitResponse`](../loginradius-sdk/namespaces/Models/interfaces/CustomFieldLimitResponse.md)\>

Retrieves the Custom Field Limit configured for the Tenant.

#### Parameters

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`CustomFieldLimitResponse`](../loginradius-sdk/namespaces/Models/interfaces/CustomFieldLimitResponse.md)\>

#### Throws

#### Memberof

CustomFieldsApiInterface

***

### listCustomFields()

> **listCustomFields**(`options?`): `AxiosPromise`\<[`SetProvidersOrderRequest`](../loginradius-sdk/namespaces/Models/interfaces/SetProvidersOrderRequest.md)\>

Retrieves all custom fields for the Tenant, returned as an array of strings.

#### Parameters

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`SetProvidersOrderRequest`](../loginradius-sdk/namespaces/Models/interfaces/SetProvidersOrderRequest.md)\>

#### Throws

#### Memberof

CustomFieldsApiInterface

***

### setCustomField()

> **setCustomField**(`requestParameters`, `options?`): `AxiosPromise`\<[`SetCustomField200Response`](../loginradius-sdk/namespaces/Models/interfaces/SetCustomField200Response.md)\>

Updates or sets a Custom Field instance in RAAS to be displayed on forms for the Tenant.

#### Parameters

##### requestParameters

[`CustomFieldsApiSetCustomFieldRequest`](CustomFieldsApiSetCustomFieldRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`SetCustomField200Response`](../loginradius-sdk/namespaces/Models/interfaces/SetCustomField200Response.md)\>

#### Throws

#### Memberof

CustomFieldsApiInterface

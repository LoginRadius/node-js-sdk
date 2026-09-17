[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / CustomFieldsApi

# Class: CustomFieldsApi

CustomFieldsApi - object-oriented interface

## Export

CustomFieldsApi

## Extends

- `BaseAPI`

## Implements

- [`CustomFieldsApiInterface`](../interfaces/CustomFieldsApiInterface.md)

## Constructors

### Constructor

> **new CustomFieldsApi**(`configuration?`, `basePath?`, `axios?`): `CustomFieldsApi`

#### Parameters

##### configuration?

`Configuration`

##### basePath?

`string` = `BASE_PATH`

##### axios?

`AxiosInstance` = `globalAxios`

#### Returns

`CustomFieldsApi`

#### Inherited from

`BaseAPI.constructor`

## Properties

### axios

> `protected` **axios**: `AxiosInstance` = `globalAxios`

#### Inherited from

`BaseAPI.axios`

***

### basePath

> `protected` **basePath**: `string` = `BASE_PATH`

#### Inherited from

`BaseAPI.basePath`

***

### configuration

> `protected` **configuration**: `Configuration` \| `undefined`

#### Inherited from

`BaseAPI.configuration`

## Methods

### createCustomField()

> **createCustomField**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`RaasCustomField`](../loginradius-sdk/namespaces/Models/interfaces/RaasCustomField.md), `any`, \{ \}, `any`\>\>

Creates a new Custom Field for the Tenant.

#### Parameters

##### requestParameters

[`CustomFieldsApiCreateCustomFieldRequest`](../interfaces/CustomFieldsApiCreateCustomFieldRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`RaasCustomField`](../loginradius-sdk/namespaces/Models/interfaces/RaasCustomField.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

CustomFieldsApi

#### Implementation of

[`CustomFieldsApiInterface`](../interfaces/CustomFieldsApiInterface.md).[`createCustomField`](../interfaces/CustomFieldsApiInterface.md#createcustomfield)

***

### deleteCustomField()

> **deleteCustomField**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md), `any`, \{ \}, `any`\>\>

Deletes a Custom Field by name for the Tenant.

#### Parameters

##### requestParameters

[`CustomFieldsApiDeleteCustomFieldRequest`](../interfaces/CustomFieldsApiDeleteCustomFieldRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

CustomFieldsApi

#### Implementation of

[`CustomFieldsApiInterface`](../interfaces/CustomFieldsApiInterface.md).[`deleteCustomField`](../interfaces/CustomFieldsApiInterface.md#deletecustomfield)

***

### getActiveCustomFields()

> **getActiveCustomFields**(`options?`): `Promise`\<`AxiosResponse`\<[`SetCustomField200Response`](../loginradius-sdk/namespaces/Models/interfaces/SetCustomField200Response.md), `any`, \{ \}, `any`\>\>

Retrieves all custom fields currently active in the registration form for the Tenant.

#### Parameters

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`SetCustomField200Response`](../loginradius-sdk/namespaces/Models/interfaces/SetCustomField200Response.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

CustomFieldsApi

#### Implementation of

[`CustomFieldsApiInterface`](../interfaces/CustomFieldsApiInterface.md).[`getActiveCustomFields`](../interfaces/CustomFieldsApiInterface.md#getactivecustomfields)

***

### getAllCustomFields()

> **getAllCustomFields**(`options?`): `Promise`\<`AxiosResponse`\<[`GetAllCustomFields200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetAllCustomFields200Response.md), `any`, \{ \}, `any`\>\>

Retrieves all Custom Fields created for the Tenant.

#### Parameters

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`GetAllCustomFields200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetAllCustomFields200Response.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

CustomFieldsApi

#### Implementation of

[`CustomFieldsApiInterface`](../interfaces/CustomFieldsApiInterface.md).[`getAllCustomFields`](../interfaces/CustomFieldsApiInterface.md#getallcustomfields)

***

### getCustomFieldLimit()

> **getCustomFieldLimit**(`options?`): `Promise`\<`AxiosResponse`\<[`CustomFieldLimitResponse`](../loginradius-sdk/namespaces/Models/interfaces/CustomFieldLimitResponse.md), `any`, \{ \}, `any`\>\>

Retrieves the Custom Field Limit configured for the Tenant.

#### Parameters

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`CustomFieldLimitResponse`](../loginradius-sdk/namespaces/Models/interfaces/CustomFieldLimitResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

CustomFieldsApi

#### Implementation of

[`CustomFieldsApiInterface`](../interfaces/CustomFieldsApiInterface.md).[`getCustomFieldLimit`](../interfaces/CustomFieldsApiInterface.md#getcustomfieldlimit)

***

### listCustomFields()

> **listCustomFields**(`options?`): `Promise`\<`AxiosResponse`\<[`SetProvidersOrderRequest`](../loginradius-sdk/namespaces/Models/interfaces/SetProvidersOrderRequest.md), `any`, \{ \}, `any`\>\>

Retrieves all custom fields for the Tenant, returned as an array of strings.

#### Parameters

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`SetProvidersOrderRequest`](../loginradius-sdk/namespaces/Models/interfaces/SetProvidersOrderRequest.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

CustomFieldsApi

#### Implementation of

[`CustomFieldsApiInterface`](../interfaces/CustomFieldsApiInterface.md).[`listCustomFields`](../interfaces/CustomFieldsApiInterface.md#listcustomfields)

***

### setCustomField()

> **setCustomField**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`SetCustomField200Response`](../loginradius-sdk/namespaces/Models/interfaces/SetCustomField200Response.md), `any`, \{ \}, `any`\>\>

Updates or sets a Custom Field instance in RAAS to be displayed on forms for the Tenant.

#### Parameters

##### requestParameters

[`CustomFieldsApiSetCustomFieldRequest`](../interfaces/CustomFieldsApiSetCustomFieldRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`SetCustomField200Response`](../loginradius-sdk/namespaces/Models/interfaces/SetCustomField200Response.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

CustomFieldsApi

#### Implementation of

[`CustomFieldsApiInterface`](../interfaces/CustomFieldsApiInterface.md).[`setCustomField`](../interfaces/CustomFieldsApiInterface.md#setcustomfield)

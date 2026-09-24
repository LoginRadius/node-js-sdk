[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / CustomObjectApiFactory

# Function: CustomObjectApiFactory()

> **CustomObjectApiFactory**(`configuration?`, `basePath?`, `axios?`): `object`

CustomObjectApi - factory interface

## Parameters

### configuration?

`Configuration`

### basePath?

`string`

### axios?

`AxiosInstance`

## Returns

### createCustomObjectByToken()

> **createCustomObjectByToken**(`requestParameters`, `options?`): `AxiosPromise`\<[`CustomObjectResponseModel`](../loginradius-sdk/namespaces/Models/interfaces/CustomObjectResponseModel.md)\>

Creates a Custom Object associated with the authenticated User using an Access Token.

#### Parameters

##### requestParameters

[`CustomObjectApiCreateCustomObjectByTokenRequest`](../interfaces/CustomObjectApiCreateCustomObjectByTokenRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`CustomObjectResponseModel`](../loginradius-sdk/namespaces/Models/interfaces/CustomObjectResponseModel.md)\>

#### Throws

### deleteCustomObjectByTokenAndRecordId()

> **deleteCustomObjectByTokenAndRecordId**(`requestParameters`, `options?`): `AxiosPromise`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md)\>

Deletes the Custom Object associated with the specified User using an Access Token and record ID.

#### Parameters

##### requestParameters

[`CustomObjectApiDeleteCustomObjectByTokenAndRecordIdRequest`](../interfaces/CustomObjectApiDeleteCustomObjectByTokenAndRecordIdRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md)\>

#### Throws

### getCustomObjectByToken()

> **getCustomObjectByToken**(`requestParameters?`, `options?`): `AxiosPromise`\<[`CustomObjectsResponseModel`](../loginradius-sdk/namespaces/Models/interfaces/CustomObjectsResponseModel.md)\>

Retrieves Custom Objects associated with the authenticated User using an Access Token.

#### Parameters

##### requestParameters?

[`CustomObjectApiGetCustomObjectByTokenRequest`](../interfaces/CustomObjectApiGetCustomObjectByTokenRequest.md) = `{}`

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`CustomObjectsResponseModel`](../loginradius-sdk/namespaces/Models/interfaces/CustomObjectsResponseModel.md)\>

#### Throws

### getCustomObjectByTokenAndRecordId()

> **getCustomObjectByTokenAndRecordId**(`requestParameters`, `options?`): `AxiosPromise`\<[`CustomObjectResponseModel`](../loginradius-sdk/namespaces/Models/interfaces/CustomObjectResponseModel.md)\>

Retrieves the Custom Object associated with the specified User using an Access Token and record ID.

#### Parameters

##### requestParameters

[`CustomObjectApiGetCustomObjectByTokenAndRecordIdRequest`](../interfaces/CustomObjectApiGetCustomObjectByTokenAndRecordIdRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`CustomObjectResponseModel`](../loginradius-sdk/namespaces/Models/interfaces/CustomObjectResponseModel.md)\>

#### Throws

### updateCustomObjectByTokenAndRecordId()

> **updateCustomObjectByTokenAndRecordId**(`requestParameters`, `options?`): `AxiosPromise`\<[`CustomObjectResponseModel`](../loginradius-sdk/namespaces/Models/interfaces/CustomObjectResponseModel.md)\>

Updates a Custom Object associated with the authenticated User using an Access Token and record ID.

#### Parameters

##### requestParameters

[`CustomObjectApiUpdateCustomObjectByTokenAndRecordIdRequest`](../interfaces/CustomObjectApiUpdateCustomObjectByTokenAndRecordIdRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`CustomObjectResponseModel`](../loginradius-sdk/namespaces/Models/interfaces/CustomObjectResponseModel.md)\>

#### Throws

## Export

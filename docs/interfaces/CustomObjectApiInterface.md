[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / CustomObjectApiInterface

# Interface: CustomObjectApiInterface

CustomObjectApi - interface

## Export

CustomObjectApi

## Methods

### createCustomObjectByToken()

> **createCustomObjectByToken**(`requestParameters`, `options?`): `AxiosPromise`\<[`CustomObjectResponseModel`](../loginradius-sdk/namespaces/Models/interfaces/CustomObjectResponseModel.md)\>

Creates a Custom Object associated with the authenticated User using an Access Token.

#### Parameters

##### requestParameters

[`CustomObjectApiCreateCustomObjectByTokenRequest`](CustomObjectApiCreateCustomObjectByTokenRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`CustomObjectResponseModel`](../loginradius-sdk/namespaces/Models/interfaces/CustomObjectResponseModel.md)\>

#### Throws

#### Memberof

CustomObjectApiInterface

***

### deleteCustomObjectByTokenAndRecordId()

> **deleteCustomObjectByTokenAndRecordId**(`requestParameters`, `options?`): `AxiosPromise`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md)\>

Deletes the Custom Object associated with the specified User using an Access Token and record ID.

#### Parameters

##### requestParameters

[`CustomObjectApiDeleteCustomObjectByTokenAndRecordIdRequest`](CustomObjectApiDeleteCustomObjectByTokenAndRecordIdRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md)\>

#### Throws

#### Memberof

CustomObjectApiInterface

***

### getCustomObjectByToken()

> **getCustomObjectByToken**(`requestParameters?`, `options?`): `AxiosPromise`\<[`CustomObjectsResponseModel`](../loginradius-sdk/namespaces/Models/interfaces/CustomObjectsResponseModel.md)\>

Retrieves Custom Objects associated with the authenticated User using an Access Token.

#### Parameters

##### requestParameters?

[`CustomObjectApiGetCustomObjectByTokenRequest`](CustomObjectApiGetCustomObjectByTokenRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`CustomObjectsResponseModel`](../loginradius-sdk/namespaces/Models/interfaces/CustomObjectsResponseModel.md)\>

#### Throws

#### Memberof

CustomObjectApiInterface

***

### getCustomObjectByTokenAndRecordId()

> **getCustomObjectByTokenAndRecordId**(`requestParameters`, `options?`): `AxiosPromise`\<[`CustomObjectResponseModel`](../loginradius-sdk/namespaces/Models/interfaces/CustomObjectResponseModel.md)\>

Retrieves the Custom Object associated with the specified User using an Access Token and record ID.

#### Parameters

##### requestParameters

[`CustomObjectApiGetCustomObjectByTokenAndRecordIdRequest`](CustomObjectApiGetCustomObjectByTokenAndRecordIdRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`CustomObjectResponseModel`](../loginradius-sdk/namespaces/Models/interfaces/CustomObjectResponseModel.md)\>

#### Throws

#### Memberof

CustomObjectApiInterface

***

### updateCustomObjectByTokenAndRecordId()

> **updateCustomObjectByTokenAndRecordId**(`requestParameters`, `options?`): `AxiosPromise`\<[`CustomObjectResponseModel`](../loginradius-sdk/namespaces/Models/interfaces/CustomObjectResponseModel.md)\>

Updates a Custom Object associated with the authenticated User using an Access Token and record ID.

#### Parameters

##### requestParameters

[`CustomObjectApiUpdateCustomObjectByTokenAndRecordIdRequest`](CustomObjectApiUpdateCustomObjectByTokenAndRecordIdRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`CustomObjectResponseModel`](../loginradius-sdk/namespaces/Models/interfaces/CustomObjectResponseModel.md)\>

#### Throws

#### Memberof

CustomObjectApiInterface

[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / CustomObjectsApiFactory

# Function: CustomObjectsApiFactory()

> **CustomObjectsApiFactory**(`configuration?`, `basePath?`, `axios?`): `object`

CustomObjectsApi - factory interface

## Parameters

### configuration?

`Configuration`

### basePath?

`string`

### axios?

`AxiosInstance`

## Returns

### getAllCustomObjectsByQuery()

> **getAllCustomObjectsByQuery**(`requestParameters?`, `options?`): `AxiosPromise`\<[`UserProfileNextResponse`](../loginradius-sdk/namespaces/Models/interfaces/UserProfileNextResponse.md)\>

Retrieves Custom Object data based on specified pagination parameters.

#### Parameters

##### requestParameters?

[`CustomObjectsApiGetAllCustomObjectsByQueryRequest`](../interfaces/CustomObjectsApiGetAllCustomObjectsByQueryRequest.md) = `{}`

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`UserProfileNextResponse`](../loginradius-sdk/namespaces/Models/interfaces/UserProfileNextResponse.md)\>

#### Throws

### getCustomObjectByQuery()

> **getCustomObjectByQuery**(`requestParameters?`, `options?`): `AxiosPromise`\<[`UserProfileNextResponseWithCustomObject`](../loginradius-sdk/namespaces/Models/interfaces/UserProfileNextResponseWithCustomObject.md)\>

Retrieves User\'s and Custom Object data per User based on the pagination parameters.

#### Parameters

##### requestParameters?

[`CustomObjectsApiGetCustomObjectByQueryRequest`](../interfaces/CustomObjectsApiGetCustomObjectByQueryRequest.md) = `{}`

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`UserProfileNextResponseWithCustomObject`](../loginradius-sdk/namespaces/Models/interfaces/UserProfileNextResponseWithCustomObject.md)\>

#### Throws

### postAllCustomObjectsByQuery()

> **postAllCustomObjectsByQuery**(`requestParameters`, `options?`): `AxiosPromise`\<[`UserProfileScrollResponse`](../loginradius-sdk/namespaces/Models/interfaces/UserProfileScrollResponse.md)\>

Retrieves Custom Object data based on specified query filters.

#### Parameters

##### requestParameters

[`CustomObjectsApiPostAllCustomObjectsByQueryRequest`](../interfaces/CustomObjectsApiPostAllCustomObjectsByQueryRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`UserProfileScrollResponse`](../loginradius-sdk/namespaces/Models/interfaces/UserProfileScrollResponse.md)\>

#### Throws

### postCustomObjectByQuery()

> **postCustomObjectByQuery**(`requestParameters`, `options?`): `AxiosPromise`\<[`UserProfileScrollResponseWithCustomObject`](../loginradius-sdk/namespaces/Models/interfaces/UserProfileScrollResponseWithCustomObject.md)\>

Retrieves User\'s and Custom Objects data per User based on the query.

#### Parameters

##### requestParameters

[`CustomObjectsApiPostCustomObjectByQueryRequest`](../interfaces/CustomObjectsApiPostCustomObjectByQueryRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`UserProfileScrollResponseWithCustomObject`](../loginradius-sdk/namespaces/Models/interfaces/UserProfileScrollResponseWithCustomObject.md)\>

#### Throws

## Export

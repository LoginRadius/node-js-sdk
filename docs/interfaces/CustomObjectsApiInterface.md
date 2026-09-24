[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / CustomObjectsApiInterface

# Interface: CustomObjectsApiInterface

CustomObjectsApi - interface

## Export

CustomObjectsApi

## Methods

### getAllCustomObjectsByQuery()

> **getAllCustomObjectsByQuery**(`requestParameters?`, `options?`): `AxiosPromise`\<[`UserProfileNextResponse`](../loginradius-sdk/namespaces/Models/interfaces/UserProfileNextResponse.md)\>

Retrieves Custom Object data based on specified pagination parameters.

#### Parameters

##### requestParameters?

[`CustomObjectsApiGetAllCustomObjectsByQueryRequest`](CustomObjectsApiGetAllCustomObjectsByQueryRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`UserProfileNextResponse`](../loginradius-sdk/namespaces/Models/interfaces/UserProfileNextResponse.md)\>

#### Throws

#### Memberof

CustomObjectsApiInterface

***

### getCustomObjectByQuery()

> **getCustomObjectByQuery**(`requestParameters?`, `options?`): `AxiosPromise`\<[`UserProfileNextResponseWithCustomObject`](../loginradius-sdk/namespaces/Models/interfaces/UserProfileNextResponseWithCustomObject.md)\>

Retrieves User\'s and Custom Object data per User based on the pagination parameters.

#### Parameters

##### requestParameters?

[`CustomObjectsApiGetCustomObjectByQueryRequest`](CustomObjectsApiGetCustomObjectByQueryRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`UserProfileNextResponseWithCustomObject`](../loginradius-sdk/namespaces/Models/interfaces/UserProfileNextResponseWithCustomObject.md)\>

#### Throws

#### Memberof

CustomObjectsApiInterface

***

### postAllCustomObjectsByQuery()

> **postAllCustomObjectsByQuery**(`requestParameters`, `options?`): `AxiosPromise`\<[`UserProfileScrollResponse`](../loginradius-sdk/namespaces/Models/interfaces/UserProfileScrollResponse.md)\>

Retrieves Custom Object data based on specified query filters.

#### Parameters

##### requestParameters

[`CustomObjectsApiPostAllCustomObjectsByQueryRequest`](CustomObjectsApiPostAllCustomObjectsByQueryRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`UserProfileScrollResponse`](../loginradius-sdk/namespaces/Models/interfaces/UserProfileScrollResponse.md)\>

#### Throws

#### Memberof

CustomObjectsApiInterface

***

### postCustomObjectByQuery()

> **postCustomObjectByQuery**(`requestParameters`, `options?`): `AxiosPromise`\<[`UserProfileScrollResponseWithCustomObject`](../loginradius-sdk/namespaces/Models/interfaces/UserProfileScrollResponseWithCustomObject.md)\>

Retrieves User\'s and Custom Objects data per User based on the query.

#### Parameters

##### requestParameters

[`CustomObjectsApiPostCustomObjectByQueryRequest`](CustomObjectsApiPostCustomObjectByQueryRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`UserProfileScrollResponseWithCustomObject`](../loginradius-sdk/namespaces/Models/interfaces/UserProfileScrollResponseWithCustomObject.md)\>

#### Throws

#### Memberof

CustomObjectsApiInterface

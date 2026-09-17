[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / CustomObjectsApi

# Class: CustomObjectsApi

CustomObjectsApi - object-oriented interface

## Export

CustomObjectsApi

## Extends

- `BaseAPI`

## Implements

- [`CustomObjectsApiInterface`](../interfaces/CustomObjectsApiInterface.md)

## Constructors

### Constructor

> **new CustomObjectsApi**(`configuration?`, `basePath?`, `axios?`): `CustomObjectsApi`

#### Parameters

##### configuration?

`Configuration`

##### basePath?

`string` = `BASE_PATH`

##### axios?

`AxiosInstance` = `globalAxios`

#### Returns

`CustomObjectsApi`

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

### getAllCustomObjectsByQuery()

> **getAllCustomObjectsByQuery**(`requestParameters?`, `options?`): `Promise`\<`AxiosResponse`\<[`UserProfileNextResponse`](../loginradius-sdk/namespaces/Models/interfaces/UserProfileNextResponse.md), `any`, \{ \}, `any`\>\>

Retrieves Custom Object data based on specified pagination parameters.

#### Parameters

##### requestParameters?

[`CustomObjectsApiGetAllCustomObjectsByQueryRequest`](../interfaces/CustomObjectsApiGetAllCustomObjectsByQueryRequest.md) = `{}`

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`UserProfileNextResponse`](../loginradius-sdk/namespaces/Models/interfaces/UserProfileNextResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

CustomObjectsApi

#### Implementation of

[`CustomObjectsApiInterface`](../interfaces/CustomObjectsApiInterface.md).[`getAllCustomObjectsByQuery`](../interfaces/CustomObjectsApiInterface.md#getallcustomobjectsbyquery)

***

### getCustomObjectByQuery()

> **getCustomObjectByQuery**(`requestParameters?`, `options?`): `Promise`\<`AxiosResponse`\<[`UserProfileNextResponseWithCustomObject`](../loginradius-sdk/namespaces/Models/interfaces/UserProfileNextResponseWithCustomObject.md), `any`, \{ \}, `any`\>\>

Retrieves User\'s and Custom Object data per User based on the pagination parameters.

#### Parameters

##### requestParameters?

[`CustomObjectsApiGetCustomObjectByQueryRequest`](../interfaces/CustomObjectsApiGetCustomObjectByQueryRequest.md) = `{}`

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`UserProfileNextResponseWithCustomObject`](../loginradius-sdk/namespaces/Models/interfaces/UserProfileNextResponseWithCustomObject.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

CustomObjectsApi

#### Implementation of

[`CustomObjectsApiInterface`](../interfaces/CustomObjectsApiInterface.md).[`getCustomObjectByQuery`](../interfaces/CustomObjectsApiInterface.md#getcustomobjectbyquery)

***

### postAllCustomObjectsByQuery()

> **postAllCustomObjectsByQuery**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`UserProfileScrollResponse`](../loginradius-sdk/namespaces/Models/interfaces/UserProfileScrollResponse.md), `any`, \{ \}, `any`\>\>

Retrieves Custom Object data based on specified query filters.

#### Parameters

##### requestParameters

[`CustomObjectsApiPostAllCustomObjectsByQueryRequest`](../interfaces/CustomObjectsApiPostAllCustomObjectsByQueryRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`UserProfileScrollResponse`](../loginradius-sdk/namespaces/Models/interfaces/UserProfileScrollResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

CustomObjectsApi

#### Implementation of

[`CustomObjectsApiInterface`](../interfaces/CustomObjectsApiInterface.md).[`postAllCustomObjectsByQuery`](../interfaces/CustomObjectsApiInterface.md#postallcustomobjectsbyquery)

***

### postCustomObjectByQuery()

> **postCustomObjectByQuery**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`UserProfileScrollResponseWithCustomObject`](../loginradius-sdk/namespaces/Models/interfaces/UserProfileScrollResponseWithCustomObject.md), `any`, \{ \}, `any`\>\>

Retrieves User\'s and Custom Objects data per User based on the query.

#### Parameters

##### requestParameters

[`CustomObjectsApiPostCustomObjectByQueryRequest`](../interfaces/CustomObjectsApiPostCustomObjectByQueryRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`UserProfileScrollResponseWithCustomObject`](../loginradius-sdk/namespaces/Models/interfaces/UserProfileScrollResponseWithCustomObject.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

CustomObjectsApi

#### Implementation of

[`CustomObjectsApiInterface`](../interfaces/CustomObjectsApiInterface.md).[`postCustomObjectByQuery`](../interfaces/CustomObjectsApiInterface.md#postcustomobjectbyquery)

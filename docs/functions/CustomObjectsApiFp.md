[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / CustomObjectsApiFp

# Function: CustomObjectsApiFp()

> **CustomObjectsApiFp**(`configuration?`): `object`

CustomObjectsApi - functional programming interface

## Parameters

### configuration?

`Configuration`

## Returns

### getAllCustomObjectsByQuery()

> **getAllCustomObjectsByQuery**(`customobject?`, `region?`, `next?`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`UserProfileNextResponse`](../loginradius-sdk/namespaces/Models/interfaces/UserProfileNextResponse.md)\>\>

Retrieves Custom Object data based on specified pagination parameters.

#### Parameters

##### customobject?

`string`

Custom Object identifier for filtering results. This parameter allows you to specify a Custom Object to filter the results returned by the API.

##### region?

`string`

The region to filter results by.

##### next?

`string`

Scroll or pagination token for fetching the next set of results. This token is used to retrieve the next page of results in a paginated response. If not provided, the API will return the first page of results.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`UserProfileNextResponse`](../loginradius-sdk/namespaces/Models/interfaces/UserProfileNextResponse.md)\>\>

#### Throws

### getCustomObjectByQuery()

> **getCustomObjectByQuery**(`region?`, `customobject?`, `next?`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`UserProfileNextResponseWithCustomObject`](../loginradius-sdk/namespaces/Models/interfaces/UserProfileNextResponseWithCustomObject.md)\>\>

Retrieves User\'s and Custom Object data per User based on the pagination parameters.

#### Parameters

##### region?

`string`

The region to filter results by.

##### customobject?

`string`

Custom Object identifier for filtering results. This parameter allows you to specify a Custom Object to filter the results returned by the API.

##### next?

`string`

Scroll or pagination token for fetching the next set of results. This token is used to retrieve the next page of results in a paginated response. If not provided, the API will return the first page of results.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`UserProfileNextResponseWithCustomObject`](../loginradius-sdk/namespaces/Models/interfaces/UserProfileNextResponseWithCustomObject.md)\>\>

#### Throws

### postAllCustomObjectsByQuery()

> **postAllCustomObjectsByQuery**(`userProfileRequestBody`, `customobject?`, `region?`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`UserProfileScrollResponse`](../loginradius-sdk/namespaces/Models/interfaces/UserProfileScrollResponse.md)\>\>

Retrieves Custom Object data based on specified query filters.

#### Parameters

##### userProfileRequestBody

[`UserProfileRequestBody`](../loginradius-sdk/namespaces/Models/interfaces/UserProfileRequestBody.md)

##### customobject?

`string`

Custom Object identifier for filtering results. This parameter allows you to specify a Custom Object to filter the results returned by the API.

##### region?

`string`

The region to filter results by.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`UserProfileScrollResponse`](../loginradius-sdk/namespaces/Models/interfaces/UserProfileScrollResponse.md)\>\>

#### Throws

### postCustomObjectByQuery()

> **postCustomObjectByQuery**(`userProfileRequestBody`, `region?`, `customobject?`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`UserProfileScrollResponseWithCustomObject`](../loginradius-sdk/namespaces/Models/interfaces/UserProfileScrollResponseWithCustomObject.md)\>\>

Retrieves User\'s and Custom Objects data per User based on the query.

#### Parameters

##### userProfileRequestBody

[`UserProfileRequestBody`](../loginradius-sdk/namespaces/Models/interfaces/UserProfileRequestBody.md)

##### region?

`string`

The region to filter results by.

##### customobject?

`string`

Custom Object identifier for filtering results. This parameter allows you to specify a Custom Object to filter the results returned by the API.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`UserProfileScrollResponseWithCustomObject`](../loginradius-sdk/namespaces/Models/interfaces/UserProfileScrollResponseWithCustomObject.md)\>\>

#### Throws

## Export

[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / CustomObjectsApiGetAllCustomObjectsByQueryRequest

# Interface: CustomObjectsApiGetAllCustomObjectsByQueryRequest

Request parameters for getAllCustomObjectsByQuery operation in CustomObjectsApi.

## Export

CustomObjectsApiGetAllCustomObjectsByQueryRequest

## Properties

### customobject?

> `readonly` `optional` **customobject?**: `string`

Custom Object identifier for filtering results. This parameter allows you to specify a Custom Object to filter the results returned by the API.

#### Memberof

CustomObjectsApiGetAllCustomObjectsByQuery

***

### next?

> `readonly` `optional` **next?**: `string`

Scroll or pagination token for fetching the next set of results. This token is used to retrieve the next page of results in a paginated response. If not provided, the API will return the first page of results.

#### Memberof

CustomObjectsApiGetAllCustomObjectsByQuery

***

### region?

> `readonly` `optional` **region?**: `string`

The region to filter results by.

#### Memberof

CustomObjectsApiGetAllCustomObjectsByQuery

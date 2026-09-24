[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / IdentityApiFp

# Function: IdentityApiFp()

> **IdentityApiFp**(`configuration?`): `object`

IdentityApi - functional programming interface

## Parameters

### configuration?

`Configuration`

## Returns

### getUserProfilesByPageId()

> **getUserProfilesByPageId**(`next?`, `region?`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`UserProfileResponse`](../loginradius-sdk/namespaces/Models/interfaces/UserProfileResponse.md)\>\>

Retrieves User\'s data using the specified pagination parameters.

#### Parameters

##### next?

`string`

Scroll or pagination token for fetching the next set of results. This token is used to retrieve the next page of results in a paginated response. If not provided, the API will return the first page of results.

##### region?

`string`

The region to filter results by.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`UserProfileResponse`](../loginradius-sdk/namespaces/Models/interfaces/UserProfileResponse.md)\>\>

#### Throws

### queryUserProfiles()

> **queryUserProfiles**(`userProfileRequestBody`, `region?`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`UserProfileScrollResponse`](../loginradius-sdk/namespaces/Models/interfaces/UserProfileScrollResponse.md)\>\>

Retrieves User\'s data based on specified query filters.

#### Parameters

##### userProfileRequestBody

[`UserProfileRequestBody`](../loginradius-sdk/namespaces/Models/interfaces/UserProfileRequestBody.md)

##### region?

`string`

The region to filter results by.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`UserProfileScrollResponse`](../loginradius-sdk/namespaces/Models/interfaces/UserProfileScrollResponse.md)\>\>

#### Throws

## Export

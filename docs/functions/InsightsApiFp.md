[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / InsightsApiFp

# Function: InsightsApiFp()

> **InsightsApiFp**(`configuration?`): `object`

InsightsApi - functional programming interface

## Parameters

### configuration?

`Configuration`

## Returns

### queryUserProfilesInsights()

> **queryUserProfilesInsights**(`requestPayload`, `region?`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`InsightsResponse`](../loginradius-sdk/namespaces/Models/interfaces/InsightsResponse.md)\>\>

Retrieves users based on specified query parameters.

#### Parameters

##### requestPayload

[`RequestPayload`](../loginradius-sdk/namespaces/Models/interfaces/RequestPayload.md)

##### region?

`string`

The region to filter results by.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`InsightsResponse`](../loginradius-sdk/namespaces/Models/interfaces/InsightsResponse.md)\>\>

#### Throws

## Export

[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / InsightsApi

# Class: InsightsApi

InsightsApi - object-oriented interface

## Export

InsightsApi

## Extends

- `BaseAPI`

## Implements

- [`InsightsApiInterface`](../interfaces/InsightsApiInterface.md)

## Constructors

### Constructor

> **new InsightsApi**(`configuration?`, `basePath?`, `axios?`): `InsightsApi`

#### Parameters

##### configuration?

`Configuration`

##### basePath?

`string` = `BASE_PATH`

##### axios?

`AxiosInstance` = `globalAxios`

#### Returns

`InsightsApi`

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

### queryUserProfilesInsights()

> **queryUserProfilesInsights**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`InsightsResponse`](../loginradius-sdk/namespaces/Models/interfaces/InsightsResponse.md), `any`, \{ \}, `any`\>\>

Retrieves users based on specified query parameters.

#### Parameters

##### requestParameters

[`InsightsApiQueryUserProfilesInsightsRequest`](../interfaces/InsightsApiQueryUserProfilesInsightsRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`InsightsResponse`](../loginradius-sdk/namespaces/Models/interfaces/InsightsResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

InsightsApi

#### Implementation of

[`InsightsApiInterface`](../interfaces/InsightsApiInterface.md).[`queryUserProfilesInsights`](../interfaces/InsightsApiInterface.md#queryuserprofilesinsights)

[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / IdentityApiFactory

# Function: IdentityApiFactory()

> **IdentityApiFactory**(`configuration?`, `basePath?`, `axios?`): `object`

IdentityApi - factory interface

## Parameters

### configuration?

`Configuration`

### basePath?

`string`

### axios?

`AxiosInstance`

## Returns

### getUserProfilesByPageId()

> **getUserProfilesByPageId**(`requestParameters?`, `options?`): `AxiosPromise`\<[`UserProfileResponse`](../loginradius-sdk/namespaces/Models/interfaces/UserProfileResponse.md)\>

Retrieves User\'s data using the specified pagination parameters.

#### Parameters

##### requestParameters?

[`IdentityApiGetUserProfilesByPageIdRequest`](../interfaces/IdentityApiGetUserProfilesByPageIdRequest.md) = `{}`

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`UserProfileResponse`](../loginradius-sdk/namespaces/Models/interfaces/UserProfileResponse.md)\>

#### Throws

### queryUserProfiles()

> **queryUserProfiles**(`requestParameters`, `options?`): `AxiosPromise`\<[`UserProfileScrollResponse`](../loginradius-sdk/namespaces/Models/interfaces/UserProfileScrollResponse.md)\>

Retrieves User\'s data based on specified query filters.

#### Parameters

##### requestParameters

[`IdentityApiQueryUserProfilesRequest`](../interfaces/IdentityApiQueryUserProfilesRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`UserProfileScrollResponse`](../loginradius-sdk/namespaces/Models/interfaces/UserProfileScrollResponse.md)\>

#### Throws

## Export

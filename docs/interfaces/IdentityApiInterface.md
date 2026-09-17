[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / IdentityApiInterface

# Interface: IdentityApiInterface

IdentityApi - interface

## Export

IdentityApi

## Methods

### getUserProfilesByPageId()

> **getUserProfilesByPageId**(`requestParameters?`, `options?`): `AxiosPromise`\<[`UserProfileResponse`](../loginradius-sdk/namespaces/Models/interfaces/UserProfileResponse.md)\>

Retrieves User\'s data using the specified pagination parameters.

#### Parameters

##### requestParameters?

[`IdentityApiGetUserProfilesByPageIdRequest`](IdentityApiGetUserProfilesByPageIdRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`UserProfileResponse`](../loginradius-sdk/namespaces/Models/interfaces/UserProfileResponse.md)\>

#### Throws

#### Memberof

IdentityApiInterface

***

### queryUserProfiles()

> **queryUserProfiles**(`requestParameters`, `options?`): `AxiosPromise`\<[`UserProfileScrollResponse`](../loginradius-sdk/namespaces/Models/interfaces/UserProfileScrollResponse.md)\>

Retrieves User\'s data based on specified query filters.

#### Parameters

##### requestParameters

[`IdentityApiQueryUserProfilesRequest`](IdentityApiQueryUserProfilesRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`UserProfileScrollResponse`](../loginradius-sdk/namespaces/Models/interfaces/UserProfileScrollResponse.md)\>

#### Throws

#### Memberof

IdentityApiInterface

[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / IdentityApi

# Class: IdentityApi

IdentityApi - object-oriented interface

## Export

IdentityApi

## Extends

- `BaseAPI`

## Implements

- [`IdentityApiInterface`](../interfaces/IdentityApiInterface.md)

## Constructors

### Constructor

> **new IdentityApi**(`configuration?`, `basePath?`, `axios?`): `IdentityApi`

#### Parameters

##### configuration?

`Configuration`

##### basePath?

`string` = `BASE_PATH`

##### axios?

`AxiosInstance` = `globalAxios`

#### Returns

`IdentityApi`

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

### getUserProfilesByPageId()

> **getUserProfilesByPageId**(`requestParameters?`, `options?`): `Promise`\<`AxiosResponse`\<[`UserProfileResponse`](../loginradius-sdk/namespaces/Models/interfaces/UserProfileResponse.md), `any`, \{ \}, `any`\>\>

Retrieves User\'s data using the specified pagination parameters.

#### Parameters

##### requestParameters?

[`IdentityApiGetUserProfilesByPageIdRequest`](../interfaces/IdentityApiGetUserProfilesByPageIdRequest.md) = `{}`

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`UserProfileResponse`](../loginradius-sdk/namespaces/Models/interfaces/UserProfileResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

IdentityApi

#### Implementation of

[`IdentityApiInterface`](../interfaces/IdentityApiInterface.md).[`getUserProfilesByPageId`](../interfaces/IdentityApiInterface.md#getuserprofilesbypageid)

***

### queryUserProfiles()

> **queryUserProfiles**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`UserProfileScrollResponse`](../loginradius-sdk/namespaces/Models/interfaces/UserProfileScrollResponse.md), `any`, \{ \}, `any`\>\>

Retrieves User\'s data based on specified query filters.

#### Parameters

##### requestParameters

[`IdentityApiQueryUserProfilesRequest`](../interfaces/IdentityApiQueryUserProfilesRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`UserProfileScrollResponse`](../loginradius-sdk/namespaces/Models/interfaces/UserProfileScrollResponse.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

IdentityApi

#### Implementation of

[`IdentityApiInterface`](../interfaces/IdentityApiInterface.md).[`queryUserProfiles`](../interfaces/IdentityApiInterface.md#queryuserprofiles)

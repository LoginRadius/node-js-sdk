[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / OrganizationUserRolesApiFp

# Function: OrganizationUserRolesApiFp()

> **OrganizationUserRolesApiFp**(`configuration?`): `object`

OrganizationUserRolesApi - functional programming interface

## Parameters

### configuration?

`Configuration`

## Returns

### assignRolesToUser()

> **assignRolesToUser**(`uid`, `orgId`, `userRolePutRequest`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`GetOrgContextByUid200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetOrgContextByUid200Response.md)\>\>

Assigns Roles to a User within a specific Organization.

#### Parameters

##### uid

`string`

UID of the User

##### orgId

`string`

Organization ID

##### userRolePutRequest

[`UserRolePutRequest`](../loginradius-sdk/namespaces/Models/interfaces/UserRolePutRequest.md)

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`GetOrgContextByUid200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetOrgContextByUid200Response.md)\>\>

#### Throws

### assignRolesToUserInAllOrgs()

> **assignRolesToUserInAllOrgs**(`uid`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`GetOrgContextByUid200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetOrgContextByUid200Response.md)\>\>

Assigns Roles to a User within a Tenant.

#### Parameters

##### uid

`string`

UID of the User

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`GetOrgContextByUid200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetOrgContextByUid200Response.md)\>\>

#### Throws

### deleteOrgContextByUid()

> **deleteOrgContextByUid**(`uid`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md)\>\>

Deletes User Roles for all Organizations by UID.

#### Parameters

##### uid

`string`

UID of the User

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md)\>\>

#### Throws

### deleteOrgContextByUidAndOrgId()

> **deleteOrgContextByUidAndOrgId**(`uid`, `orgId`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md)\>\>

Deletes User Roles of an Organization by UID and OrgID.

#### Parameters

##### uid

`string`

UID of the User

##### orgId

`string`

Organization ID

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md)\>\>

#### Throws

### getOrgContextByUid()

> **getOrgContextByUid**(`uid`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`GetOrgContextByUid200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetOrgContextByUid200Response.md)\>\>

Retrieves User Roles for all Organizations by UID.

#### Parameters

##### uid

`string`

UID of the User

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`GetOrgContextByUid200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetOrgContextByUid200Response.md)\>\>

#### Throws

### getOrgContextByUidAndOrgId()

> **getOrgContextByUidAndOrgId**(`uid`, `orgId`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`GetOrgContextByUid200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetOrgContextByUid200Response.md)\>\>

Retrieves User Roles of an Organization by UID and OrgID.

#### Parameters

##### uid

`string`

UID of the User

##### orgId

`string`

Organization ID

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`GetOrgContextByUid200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetOrgContextByUid200Response.md)\>\>

#### Throws

## Export

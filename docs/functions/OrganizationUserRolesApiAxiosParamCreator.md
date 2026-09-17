[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / OrganizationUserRolesApiAxiosParamCreator

# Function: OrganizationUserRolesApiAxiosParamCreator()

> **OrganizationUserRolesApiAxiosParamCreator**(`configuration?`): `object`

OrganizationUserRolesApi - axios parameter creator

## Parameters

### configuration?

`Configuration`

## Returns

### assignRolesToUser

> **assignRolesToUser**: (`uid`, `orgId`, `userRolePutRequest`, `options?`) => `Promise`\<`RequestArgs`\>

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

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### assignRolesToUserInAllOrgs

> **assignRolesToUserInAllOrgs**: (`uid`, `options?`) => `Promise`\<`RequestArgs`\>

Assigns Roles to a User within a Tenant.

#### Parameters

##### uid

`string`

UID of the User

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### deleteOrgContextByUid

> **deleteOrgContextByUid**: (`uid`, `options?`) => `Promise`\<`RequestArgs`\>

Deletes User Roles for all Organizations by UID.

#### Parameters

##### uid

`string`

UID of the User

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### deleteOrgContextByUidAndOrgId

> **deleteOrgContextByUidAndOrgId**: (`uid`, `orgId`, `options?`) => `Promise`\<`RequestArgs`\>

Deletes User Roles of an Organization by UID and OrgID.

#### Parameters

##### uid

`string`

UID of the User

##### orgId

`string`

Organization ID

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### getOrgContextByUid

> **getOrgContextByUid**: (`uid`, `options?`) => `Promise`\<`RequestArgs`\>

Retrieves User Roles for all Organizations by UID.

#### Parameters

##### uid

`string`

UID of the User

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### getOrgContextByUidAndOrgId

> **getOrgContextByUidAndOrgId**: (`uid`, `orgId`, `options?`) => `Promise`\<`RequestArgs`\>

Retrieves User Roles of an Organization by UID and OrgID.

#### Parameters

##### uid

`string`

UID of the User

##### orgId

`string`

Organization ID

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

## Export

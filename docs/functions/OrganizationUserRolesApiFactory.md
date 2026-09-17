[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / OrganizationUserRolesApiFactory

# Function: OrganizationUserRolesApiFactory()

> **OrganizationUserRolesApiFactory**(`configuration?`, `basePath?`, `axios?`): `object`

OrganizationUserRolesApi - factory interface

## Parameters

### configuration?

`Configuration`

### basePath?

`string`

### axios?

`AxiosInstance`

## Returns

### assignRolesToUser()

> **assignRolesToUser**(`requestParameters`, `options?`): `AxiosPromise`\<[`GetOrgContextByUid200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetOrgContextByUid200Response.md)\>

Assigns Roles to a User within a specific Organization.

#### Parameters

##### requestParameters

[`OrganizationUserRolesApiAssignRolesToUserRequest`](../interfaces/OrganizationUserRolesApiAssignRolesToUserRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`GetOrgContextByUid200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetOrgContextByUid200Response.md)\>

#### Throws

### assignRolesToUserInAllOrgs()

> **assignRolesToUserInAllOrgs**(`requestParameters`, `options?`): `AxiosPromise`\<[`GetOrgContextByUid200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetOrgContextByUid200Response.md)\>

Assigns Roles to a User within a Tenant.

#### Parameters

##### requestParameters

[`OrganizationUserRolesApiAssignRolesToUserInAllOrgsRequest`](../interfaces/OrganizationUserRolesApiAssignRolesToUserInAllOrgsRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`GetOrgContextByUid200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetOrgContextByUid200Response.md)\>

#### Throws

### deleteOrgContextByUid()

> **deleteOrgContextByUid**(`requestParameters`, `options?`): `AxiosPromise`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md)\>

Deletes User Roles for all Organizations by UID.

#### Parameters

##### requestParameters

[`OrganizationUserRolesApiDeleteOrgContextByUidRequest`](../interfaces/OrganizationUserRolesApiDeleteOrgContextByUidRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md)\>

#### Throws

### deleteOrgContextByUidAndOrgId()

> **deleteOrgContextByUidAndOrgId**(`requestParameters`, `options?`): `AxiosPromise`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md)\>

Deletes User Roles of an Organization by UID and OrgID.

#### Parameters

##### requestParameters

[`OrganizationUserRolesApiDeleteOrgContextByUidAndOrgIdRequest`](../interfaces/OrganizationUserRolesApiDeleteOrgContextByUidAndOrgIdRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md)\>

#### Throws

### getOrgContextByUid()

> **getOrgContextByUid**(`requestParameters`, `options?`): `AxiosPromise`\<[`GetOrgContextByUid200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetOrgContextByUid200Response.md)\>

Retrieves User Roles for all Organizations by UID.

#### Parameters

##### requestParameters

[`OrganizationUserRolesApiGetOrgContextByUidRequest`](../interfaces/OrganizationUserRolesApiGetOrgContextByUidRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`GetOrgContextByUid200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetOrgContextByUid200Response.md)\>

#### Throws

### getOrgContextByUidAndOrgId()

> **getOrgContextByUidAndOrgId**(`requestParameters`, `options?`): `AxiosPromise`\<[`GetOrgContextByUid200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetOrgContextByUid200Response.md)\>

Retrieves User Roles of an Organization by UID and OrgID.

#### Parameters

##### requestParameters

[`OrganizationUserRolesApiGetOrgContextByUidAndOrgIdRequest`](../interfaces/OrganizationUserRolesApiGetOrgContextByUidAndOrgIdRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`GetOrgContextByUid200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetOrgContextByUid200Response.md)\>

#### Throws

## Export

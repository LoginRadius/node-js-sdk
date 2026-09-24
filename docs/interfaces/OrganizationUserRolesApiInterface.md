[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / OrganizationUserRolesApiInterface

# Interface: OrganizationUserRolesApiInterface

OrganizationUserRolesApi - interface

## Export

OrganizationUserRolesApi

## Methods

### assignRolesToUser()

> **assignRolesToUser**(`requestParameters`, `options?`): `AxiosPromise`\<[`GetOrgContextByUid200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetOrgContextByUid200Response.md)\>

Assigns Roles to a User within a specific Organization.

#### Parameters

##### requestParameters

[`OrganizationUserRolesApiAssignRolesToUserRequest`](OrganizationUserRolesApiAssignRolesToUserRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`GetOrgContextByUid200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetOrgContextByUid200Response.md)\>

#### Throws

#### Memberof

OrganizationUserRolesApiInterface

***

### assignRolesToUserInAllOrgs()

> **assignRolesToUserInAllOrgs**(`requestParameters`, `options?`): `AxiosPromise`\<[`GetOrgContextByUid200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetOrgContextByUid200Response.md)\>

Assigns Roles to a User within a Tenant.

#### Parameters

##### requestParameters

[`OrganizationUserRolesApiAssignRolesToUserInAllOrgsRequest`](OrganizationUserRolesApiAssignRolesToUserInAllOrgsRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`GetOrgContextByUid200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetOrgContextByUid200Response.md)\>

#### Throws

#### Memberof

OrganizationUserRolesApiInterface

***

### deleteOrgContextByUid()

> **deleteOrgContextByUid**(`requestParameters`, `options?`): `AxiosPromise`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md)\>

Deletes User Roles for all Organizations by UID.

#### Parameters

##### requestParameters

[`OrganizationUserRolesApiDeleteOrgContextByUidRequest`](OrganizationUserRolesApiDeleteOrgContextByUidRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md)\>

#### Throws

#### Memberof

OrganizationUserRolesApiInterface

***

### deleteOrgContextByUidAndOrgId()

> **deleteOrgContextByUidAndOrgId**(`requestParameters`, `options?`): `AxiosPromise`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md)\>

Deletes User Roles of an Organization by UID and OrgID.

#### Parameters

##### requestParameters

[`OrganizationUserRolesApiDeleteOrgContextByUidAndOrgIdRequest`](OrganizationUserRolesApiDeleteOrgContextByUidAndOrgIdRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md)\>

#### Throws

#### Memberof

OrganizationUserRolesApiInterface

***

### getOrgContextByUid()

> **getOrgContextByUid**(`requestParameters`, `options?`): `AxiosPromise`\<[`GetOrgContextByUid200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetOrgContextByUid200Response.md)\>

Retrieves User Roles for all Organizations by UID.

#### Parameters

##### requestParameters

[`OrganizationUserRolesApiGetOrgContextByUidRequest`](OrganizationUserRolesApiGetOrgContextByUidRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`GetOrgContextByUid200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetOrgContextByUid200Response.md)\>

#### Throws

#### Memberof

OrganizationUserRolesApiInterface

***

### getOrgContextByUidAndOrgId()

> **getOrgContextByUidAndOrgId**(`requestParameters`, `options?`): `AxiosPromise`\<[`GetOrgContextByUid200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetOrgContextByUid200Response.md)\>

Retrieves User Roles of an Organization by UID and OrgID.

#### Parameters

##### requestParameters

[`OrganizationUserRolesApiGetOrgContextByUidAndOrgIdRequest`](OrganizationUserRolesApiGetOrgContextByUidAndOrgIdRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`GetOrgContextByUid200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetOrgContextByUid200Response.md)\>

#### Throws

#### Memberof

OrganizationUserRolesApiInterface

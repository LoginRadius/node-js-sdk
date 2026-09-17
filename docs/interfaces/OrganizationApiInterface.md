[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / OrganizationApiInterface

# Interface: OrganizationApiInterface

OrganizationApi - interface

## Export

OrganizationApi

## Methods

### createOrganization()

> **createOrganization**(`requestParameters`, `options?`): `AxiosPromise`\<[`OrganizationsResponse`](../loginradius-sdk/namespaces/Models/type-aliases/OrganizationsResponse.md)\>

Creates a new Organization in the Tenant.

#### Parameters

##### requestParameters

[`OrganizationApiCreateOrganizationRequest`](OrganizationApiCreateOrganizationRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`OrganizationsResponse`](../loginradius-sdk/namespaces/Models/type-aliases/OrganizationsResponse.md)\>

#### Throws

#### Memberof

OrganizationApiInterface

***

### createOrgTenantRole()

> **createOrgTenantRole**(`requestParameters`, `options?`): `AxiosPromise`\<[`Role`](../loginradius-sdk/namespaces/Models/interfaces/Role.md)\>

Creates a Role within an Organization.

#### Parameters

##### requestParameters

[`OrganizationApiCreateOrgTenantRoleRequest`](OrganizationApiCreateOrgTenantRoleRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`Role`](../loginradius-sdk/namespaces/Models/interfaces/Role.md)\>

#### Throws

#### Memberof

OrganizationApiInterface

***

### deleteOrganization()

> **deleteOrganization**(`requestParameters`, `options?`): `AxiosPromise`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md)\>

Deletes an Organization by its ID.

#### Parameters

##### requestParameters

[`OrganizationApiDeleteOrganizationRequest`](OrganizationApiDeleteOrganizationRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md)\>

#### Throws

#### Memberof

OrganizationApiInterface

***

### getAllOrganizations()

> **getAllOrganizations**(`options?`): `AxiosPromise`\<[`GetAllOrganizations200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetAllOrganizations200Response.md)\>

Retrieves a list of all Organizations in the Tenant.

#### Parameters

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`GetAllOrganizations200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetAllOrganizations200Response.md)\>

#### Throws

#### Memberof

OrganizationApiInterface

***

### getOrganization()

> **getOrganization**(`requestParameters`, `options?`): `AxiosPromise`\<[`OrganizationsResponse`](../loginradius-sdk/namespaces/Models/type-aliases/OrganizationsResponse.md)\>

Retrieves details of a specific Organization by its ID.

#### Parameters

##### requestParameters

[`OrganizationApiGetOrganizationRequest`](OrganizationApiGetOrganizationRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`OrganizationsResponse`](../loginradius-sdk/namespaces/Models/type-aliases/OrganizationsResponse.md)\>

#### Throws

#### Memberof

OrganizationApiInterface

***

### getOrgContextByOrgId()

> **getOrgContextByOrgId**(`requestParameters`, `options?`): `AxiosPromise`\<[`GetOrgContextByUid200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetOrgContextByUid200Response.md)\>

Retrieves User Roles for all Organizations by OrgID.

#### Parameters

##### requestParameters

[`OrganizationApiGetOrgContextByOrgIdRequest`](OrganizationApiGetOrgContextByOrgIdRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`GetOrgContextByUid200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetOrgContextByUid200Response.md)\>

#### Throws

#### Memberof

OrganizationApiInterface

***

### getOrgRolesByOrgId()

> **getOrgRolesByOrgId**(`requestParameters`, `options?`): `AxiosPromise`\<[`RoleByName200Response`](../loginradius-sdk/namespaces/Models/interfaces/RoleByName200Response.md)\>

Lists all Roles defined within an Organization.

#### Parameters

##### requestParameters

[`OrganizationApiGetOrgRolesByOrgIdRequest`](OrganizationApiGetOrgRolesByOrgIdRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`RoleByName200Response`](../loginradius-sdk/namespaces/Models/interfaces/RoleByName200Response.md)\>

#### Throws

#### Memberof

OrganizationApiInterface

***

### updateOrganization()

> **updateOrganization**(`requestParameters`, `options?`): `AxiosPromise`\<[`OrganizationsResponse`](../loginradius-sdk/namespaces/Models/type-aliases/OrganizationsResponse.md)\>

Updates an Organization by its ID. Supports updating org fields, policies, and status in a single request.

#### Parameters

##### requestParameters

[`OrganizationApiUpdateOrganizationRequest`](OrganizationApiUpdateOrganizationRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`OrganizationsResponse`](../loginradius-sdk/namespaces/Models/type-aliases/OrganizationsResponse.md)\>

#### Throws

#### Memberof

OrganizationApiInterface

[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / OrganizationApiFactory

# Function: OrganizationApiFactory()

> **OrganizationApiFactory**(`configuration?`, `basePath?`, `axios?`): `object`

OrganizationApi - factory interface

## Parameters

### configuration?

`Configuration`

### basePath?

`string`

### axios?

`AxiosInstance`

## Returns

### createOrganization()

> **createOrganization**(`requestParameters`, `options?`): `AxiosPromise`\<[`OrganizationsResponse`](../loginradius-sdk/namespaces/Models/type-aliases/OrganizationsResponse.md)\>

Creates a new Organization in the Tenant.

#### Parameters

##### requestParameters

[`OrganizationApiCreateOrganizationRequest`](../interfaces/OrganizationApiCreateOrganizationRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`OrganizationsResponse`](../loginradius-sdk/namespaces/Models/type-aliases/OrganizationsResponse.md)\>

#### Throws

### createOrgTenantRole()

> **createOrgTenantRole**(`requestParameters`, `options?`): `AxiosPromise`\<[`Role`](../loginradius-sdk/namespaces/Models/interfaces/Role.md)\>

Creates a Role within an Organization.

#### Parameters

##### requestParameters

[`OrganizationApiCreateOrgTenantRoleRequest`](../interfaces/OrganizationApiCreateOrgTenantRoleRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`Role`](../loginradius-sdk/namespaces/Models/interfaces/Role.md)\>

#### Throws

### deleteOrganization()

> **deleteOrganization**(`requestParameters`, `options?`): `AxiosPromise`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md)\>

Deletes an Organization by its ID.

#### Parameters

##### requestParameters

[`OrganizationApiDeleteOrganizationRequest`](../interfaces/OrganizationApiDeleteOrganizationRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md)\>

#### Throws

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

### getOrganization()

> **getOrganization**(`requestParameters`, `options?`): `AxiosPromise`\<[`OrganizationsResponse`](../loginradius-sdk/namespaces/Models/type-aliases/OrganizationsResponse.md)\>

Retrieves details of a specific Organization by its ID.

#### Parameters

##### requestParameters

[`OrganizationApiGetOrganizationRequest`](../interfaces/OrganizationApiGetOrganizationRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`OrganizationsResponse`](../loginradius-sdk/namespaces/Models/type-aliases/OrganizationsResponse.md)\>

#### Throws

### getOrgContextByOrgId()

> **getOrgContextByOrgId**(`requestParameters`, `options?`): `AxiosPromise`\<[`GetOrgContextByUid200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetOrgContextByUid200Response.md)\>

Retrieves User Roles for all Organizations by OrgID.

#### Parameters

##### requestParameters

[`OrganizationApiGetOrgContextByOrgIdRequest`](../interfaces/OrganizationApiGetOrgContextByOrgIdRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`GetOrgContextByUid200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetOrgContextByUid200Response.md)\>

#### Throws

### getOrgRolesByOrgId()

> **getOrgRolesByOrgId**(`requestParameters`, `options?`): `AxiosPromise`\<[`RoleByName200Response`](../loginradius-sdk/namespaces/Models/interfaces/RoleByName200Response.md)\>

Lists all Roles defined within an Organization.

#### Parameters

##### requestParameters

[`OrganizationApiGetOrgRolesByOrgIdRequest`](../interfaces/OrganizationApiGetOrgRolesByOrgIdRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`RoleByName200Response`](../loginradius-sdk/namespaces/Models/interfaces/RoleByName200Response.md)\>

#### Throws

### updateOrganization()

> **updateOrganization**(`requestParameters`, `options?`): `AxiosPromise`\<[`OrganizationsResponse`](../loginradius-sdk/namespaces/Models/type-aliases/OrganizationsResponse.md)\>

Updates an Organization by its ID. Supports updating org fields, policies, and status in a single request.

#### Parameters

##### requestParameters

[`OrganizationApiUpdateOrganizationRequest`](../interfaces/OrganizationApiUpdateOrganizationRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`OrganizationsResponse`](../loginradius-sdk/namespaces/Models/type-aliases/OrganizationsResponse.md)\>

#### Throws

## Export

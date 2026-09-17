[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / OrganizationApiFp

# Function: OrganizationApiFp()

> **OrganizationApiFp**(`configuration?`): `object`

OrganizationApi - functional programming interface

## Parameters

### configuration?

`Configuration`

## Returns

### createOrganization()

> **createOrganization**(`createOrganizationRequest`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`OrganizationsResponse`](../loginradius-sdk/namespaces/Models/type-aliases/OrganizationsResponse.md)\>\>

Creates a new Organization in the Tenant.

#### Parameters

##### createOrganizationRequest

[`OrganizationBase`](../loginradius-sdk/namespaces/Models/interfaces/OrganizationBase.md)

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`OrganizationsResponse`](../loginradius-sdk/namespaces/Models/type-aliases/OrganizationsResponse.md)\>\>

#### Throws

### createOrgTenantRole()

> **createOrgTenantRole**(`orgId`, `rolePostRequest`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`Role`](../loginradius-sdk/namespaces/Models/interfaces/Role.md)\>\>

Creates a Role within an Organization.

#### Parameters

##### orgId

`string`

Organization ID

##### rolePostRequest

[`RolePostRequest`](../loginradius-sdk/namespaces/Models/interfaces/RolePostRequest.md)

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`Role`](../loginradius-sdk/namespaces/Models/interfaces/Role.md)\>\>

#### Throws

### deleteOrganization()

> **deleteOrganization**(`orgId`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md)\>\>

Deletes an Organization by its ID.

#### Parameters

##### orgId

`string`

Organization ID

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md)\>\>

#### Throws

### getAllOrganizations()

> **getAllOrganizations**(`options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`GetAllOrganizations200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetAllOrganizations200Response.md)\>\>

Retrieves a list of all Organizations in the Tenant.

#### Parameters

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`GetAllOrganizations200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetAllOrganizations200Response.md)\>\>

#### Throws

### getOrganization()

> **getOrganization**(`orgId`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`OrganizationsResponse`](../loginradius-sdk/namespaces/Models/type-aliases/OrganizationsResponse.md)\>\>

Retrieves details of a specific Organization by its ID.

#### Parameters

##### orgId

`string`

Organization ID

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`OrganizationsResponse`](../loginradius-sdk/namespaces/Models/type-aliases/OrganizationsResponse.md)\>\>

#### Throws

### getOrgContextByOrgId()

> **getOrgContextByOrgId**(`orgId`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`GetOrgContextByUid200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetOrgContextByUid200Response.md)\>\>

Retrieves User Roles for all Organizations by OrgID.

#### Parameters

##### orgId

`string`

Unique identifier of the Organization.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`GetOrgContextByUid200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetOrgContextByUid200Response.md)\>\>

#### Throws

### getOrgRolesByOrgId()

> **getOrgRolesByOrgId**(`orgId`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`RoleByName200Response`](../loginradius-sdk/namespaces/Models/interfaces/RoleByName200Response.md)\>\>

Lists all Roles defined within an Organization.

#### Parameters

##### orgId

`string`

Organization ID

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`RoleByName200Response`](../loginradius-sdk/namespaces/Models/interfaces/RoleByName200Response.md)\>\>

#### Throws

### updateOrganization()

> **updateOrganization**(`orgId`, `organizationUpdateRequest`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`OrganizationsResponse`](../loginradius-sdk/namespaces/Models/type-aliases/OrganizationsResponse.md)\>\>

Updates an Organization by its ID. Supports updating org fields, policies, and status in a single request.

#### Parameters

##### orgId

`string`

Organization ID

##### organizationUpdateRequest

[`OrganizationUpdateRequest`](../loginradius-sdk/namespaces/Models/interfaces/OrganizationUpdateRequest.md)

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`OrganizationsResponse`](../loginradius-sdk/namespaces/Models/type-aliases/OrganizationsResponse.md)\>\>

#### Throws

## Export

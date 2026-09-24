[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / OrganizationApiAxiosParamCreator

# Function: OrganizationApiAxiosParamCreator()

> **OrganizationApiAxiosParamCreator**(`configuration?`): `object`

OrganizationApi - axios parameter creator

## Parameters

### configuration?

`Configuration`

## Returns

### createOrganization

> **createOrganization**: (`createOrganizationRequest`, `options?`) => `Promise`\<`RequestArgs`\>

Creates a new Organization in the Tenant.

#### Parameters

##### createOrganizationRequest

[`OrganizationBase`](../loginradius-sdk/namespaces/Models/interfaces/OrganizationBase.md)

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### createOrgTenantRole

> **createOrgTenantRole**: (`orgId`, `rolePostRequest`, `options?`) => `Promise`\<`RequestArgs`\>

Creates a Role within an Organization.

#### Parameters

##### orgId

`string`

Organization ID

##### rolePostRequest

[`RolePostRequest`](../loginradius-sdk/namespaces/Models/interfaces/RolePostRequest.md)

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### deleteOrganization

> **deleteOrganization**: (`orgId`, `options?`) => `Promise`\<`RequestArgs`\>

Deletes an Organization by its ID.

#### Parameters

##### orgId

`string`

Organization ID

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### getAllOrganizations

> **getAllOrganizations**: (`options?`) => `Promise`\<`RequestArgs`\>

Retrieves a list of all Organizations in the Tenant.

#### Parameters

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### getOrganization

> **getOrganization**: (`orgId`, `options?`) => `Promise`\<`RequestArgs`\>

Retrieves details of a specific Organization by its ID.

#### Parameters

##### orgId

`string`

Organization ID

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### getOrgContextByOrgId

> **getOrgContextByOrgId**: (`orgId`, `options?`) => `Promise`\<`RequestArgs`\>

Retrieves User Roles for all Organizations by OrgID.

#### Parameters

##### orgId

`string`

Unique identifier of the Organization.

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### getOrgRolesByOrgId

> **getOrgRolesByOrgId**: (`orgId`, `options?`) => `Promise`\<`RequestArgs`\>

Lists all Roles defined within an Organization.

#### Parameters

##### orgId

`string`

Organization ID

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### updateOrganization

> **updateOrganization**: (`orgId`, `organizationUpdateRequest`, `options?`) => `Promise`\<`RequestArgs`\>

Updates an Organization by its ID. Supports updating org fields, policies, and status in a single request.

#### Parameters

##### orgId

`string`

Organization ID

##### organizationUpdateRequest

[`OrganizationUpdateRequest`](../loginradius-sdk/namespaces/Models/interfaces/OrganizationUpdateRequest.md)

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

## Export

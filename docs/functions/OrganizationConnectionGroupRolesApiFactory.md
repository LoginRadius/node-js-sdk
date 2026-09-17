[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / OrganizationConnectionGroupRolesApiFactory

# Function: OrganizationConnectionGroupRolesApiFactory()

> **OrganizationConnectionGroupRolesApiFactory**(`configuration?`, `basePath?`, `axios?`): `object`

OrganizationConnectionGroupRolesApi - factory interface

## Parameters

### configuration?

`Configuration`

### basePath?

`string`

### axios?

`AxiosInstance`

## Returns

### createConnectionGroupRole()

> **createConnectionGroupRole**(`requestParameters`, `options?`): `AxiosPromise`\<[`ConnectionGroupRoleResponse`](../loginradius-sdk/namespaces/Models/type-aliases/ConnectionGroupRoleResponse.md)\>

Creates a new group-to-role mapping for an Identity Provider connection.

#### Parameters

##### requestParameters

[`OrganizationConnectionGroupRolesApiCreateConnectionGroupRoleRequest`](../interfaces/OrganizationConnectionGroupRolesApiCreateConnectionGroupRoleRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`ConnectionGroupRoleResponse`](../loginradius-sdk/namespaces/Models/type-aliases/ConnectionGroupRoleResponse.md)\>

#### Throws

### deleteConnectionGroupRole()

> **deleteConnectionGroupRole**(`requestParameters`, `options?`): `AxiosPromise`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md)\>

Deletes a specific group-to-role mapping.

#### Parameters

##### requestParameters

[`OrganizationConnectionGroupRolesApiDeleteConnectionGroupRoleRequest`](../interfaces/OrganizationConnectionGroupRolesApiDeleteConnectionGroupRoleRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md)\>

#### Throws

### getAllConnectionGroupRoles()

> **getAllConnectionGroupRoles**(`requestParameters`, `options?`): `AxiosPromise`\<[`GetAllConnectionGroupRoles200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetAllConnectionGroupRoles200Response.md)\>

Lists all group-to-role mappings for an Identity Provider connection.

#### Parameters

##### requestParameters

[`OrganizationConnectionGroupRolesApiGetAllConnectionGroupRolesRequest`](../interfaces/OrganizationConnectionGroupRolesApiGetAllConnectionGroupRolesRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`GetAllConnectionGroupRoles200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetAllConnectionGroupRoles200Response.md)\>

#### Throws

### updateConnectionGroupRole()

> **updateConnectionGroupRole**(`requestParameters`, `options?`): `AxiosPromise`\<[`ConnectionGroupRoleResponse`](../loginradius-sdk/namespaces/Models/type-aliases/ConnectionGroupRoleResponse.md)\>

Updates a specific group-to-role mapping.

#### Parameters

##### requestParameters

[`OrganizationConnectionGroupRolesApiUpdateConnectionGroupRoleRequest`](../interfaces/OrganizationConnectionGroupRolesApiUpdateConnectionGroupRoleRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`ConnectionGroupRoleResponse`](../loginradius-sdk/namespaces/Models/type-aliases/ConnectionGroupRoleResponse.md)\>

#### Throws

## Export

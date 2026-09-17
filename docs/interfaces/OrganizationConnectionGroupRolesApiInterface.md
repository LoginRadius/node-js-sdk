[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / OrganizationConnectionGroupRolesApiInterface

# Interface: OrganizationConnectionGroupRolesApiInterface

OrganizationConnectionGroupRolesApi - interface

## Export

OrganizationConnectionGroupRolesApi

## Methods

### createConnectionGroupRole()

> **createConnectionGroupRole**(`requestParameters`, `options?`): `AxiosPromise`\<[`ConnectionGroupRoleResponse`](../loginradius-sdk/namespaces/Models/type-aliases/ConnectionGroupRoleResponse.md)\>

Creates a new group-to-role mapping for an Identity Provider connection.

#### Parameters

##### requestParameters

[`OrganizationConnectionGroupRolesApiCreateConnectionGroupRoleRequest`](OrganizationConnectionGroupRolesApiCreateConnectionGroupRoleRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`ConnectionGroupRoleResponse`](../loginradius-sdk/namespaces/Models/type-aliases/ConnectionGroupRoleResponse.md)\>

#### Throws

#### Memberof

OrganizationConnectionGroupRolesApiInterface

***

### deleteConnectionGroupRole()

> **deleteConnectionGroupRole**(`requestParameters`, `options?`): `AxiosPromise`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md)\>

Deletes a specific group-to-role mapping.

#### Parameters

##### requestParameters

[`OrganizationConnectionGroupRolesApiDeleteConnectionGroupRoleRequest`](OrganizationConnectionGroupRolesApiDeleteConnectionGroupRoleRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`DeleteResponse`](../loginradius-sdk/namespaces/Models/interfaces/DeleteResponse.md)\>

#### Throws

#### Memberof

OrganizationConnectionGroupRolesApiInterface

***

### getAllConnectionGroupRoles()

> **getAllConnectionGroupRoles**(`requestParameters`, `options?`): `AxiosPromise`\<[`GetAllConnectionGroupRoles200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetAllConnectionGroupRoles200Response.md)\>

Lists all group-to-role mappings for an Identity Provider connection.

#### Parameters

##### requestParameters

[`OrganizationConnectionGroupRolesApiGetAllConnectionGroupRolesRequest`](OrganizationConnectionGroupRolesApiGetAllConnectionGroupRolesRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`GetAllConnectionGroupRoles200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetAllConnectionGroupRoles200Response.md)\>

#### Throws

#### Memberof

OrganizationConnectionGroupRolesApiInterface

***

### updateConnectionGroupRole()

> **updateConnectionGroupRole**(`requestParameters`, `options?`): `AxiosPromise`\<[`ConnectionGroupRoleResponse`](../loginradius-sdk/namespaces/Models/type-aliases/ConnectionGroupRoleResponse.md)\>

Updates a specific group-to-role mapping.

#### Parameters

##### requestParameters

[`OrganizationConnectionGroupRolesApiUpdateConnectionGroupRoleRequest`](OrganizationConnectionGroupRolesApiUpdateConnectionGroupRoleRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`ConnectionGroupRoleResponse`](../loginradius-sdk/namespaces/Models/type-aliases/ConnectionGroupRoleResponse.md)\>

#### Throws

#### Memberof

OrganizationConnectionGroupRolesApiInterface

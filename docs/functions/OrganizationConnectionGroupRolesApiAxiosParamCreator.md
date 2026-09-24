[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / OrganizationConnectionGroupRolesApiAxiosParamCreator

# Function: OrganizationConnectionGroupRolesApiAxiosParamCreator()

> **OrganizationConnectionGroupRolesApiAxiosParamCreator**(`configuration?`): `object`

OrganizationConnectionGroupRolesApi - axios parameter creator

## Parameters

### configuration?

`Configuration`

## Returns

### createConnectionGroupRole

> **createConnectionGroupRole**: (`connId`, `orgId`, `createConnectionGroupRoleRequest`, `options?`) => `Promise`\<`RequestArgs`\>

Creates a new group-to-role mapping for an Identity Provider connection.

#### Parameters

##### connId

`string`

Organization Connection ID

##### orgId

`string`

Organization ID

##### createConnectionGroupRoleRequest

[`ConnectionGroupRoleRequest`](../loginradius-sdk/namespaces/Models/interfaces/ConnectionGroupRoleRequest.md)

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### deleteConnectionGroupRole

> **deleteConnectionGroupRole**: (`orgId`, `connId`, `groupRoleId`, `options?`) => `Promise`\<`RequestArgs`\>

Deletes a specific group-to-role mapping.

#### Parameters

##### orgId

`string`

Organization ID

##### connId

`string`

Organization Connection ID

##### groupRoleId

`string`

Organization Connection Group Role ID

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### getAllConnectionGroupRoles

> **getAllConnectionGroupRoles**: (`orgId`, `connId`, `options?`) => `Promise`\<`RequestArgs`\>

Lists all group-to-role mappings for an Identity Provider connection.

#### Parameters

##### orgId

`string`

Organization ID

##### connId

`string`

Organization Connection ID

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### updateConnectionGroupRole

> **updateConnectionGroupRole**: (`connId`, `groupRoleId`, `orgId`, `connectionGroupRoleRequest`, `options?`) => `Promise`\<`RequestArgs`\>

Updates a specific group-to-role mapping.

#### Parameters

##### connId

`string`

Organization Connection ID

##### groupRoleId

`string`

Organization Connection Group Role ID

##### orgId

`string`

Organization ID

##### connectionGroupRoleRequest

[`ConnectionGroupRoleRequest`](../loginradius-sdk/namespaces/Models/interfaces/ConnectionGroupRoleRequest.md)

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

## Export

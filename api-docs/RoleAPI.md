## Role API

<details>
    <summary>PUT: Assign Roles by UID</summary>

This API is used to assign your desired roles to a given user. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/roles-management/assign-roles-by-uid/)

```js
let accountRolesModel = {
  roles: ['roles'],
}; //Required
let uid = '<uid>'; //Required

lrv2.roleApi
  .assignRolesByUid(accountRolesModel, uid)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>PUT: Upsert Context</summary>

This API creates a Context with a set of Roles [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/roles-management/upsert-context)

```js
let accountRoleContextModel = {
  roleContext: [
    {
      additionalPermissions: ['<additionalPermissions>'],
      context: '<context>',
      expiration: '<expiration>',
      roles: ['<roles>'],
    },
  ],
}; //Required
let uid = '<uid>'; //Required

lrv2.roleApi
  .updateRoleContextByUid(accountRoleContextModel, uid)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>PUT: Add Permissions to Role</summary>

This API is used to add permissions to a given role. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/roles-management/add-permissions-to-role)

```js
let permissionsModel = {
  permissions: ['permissions'],
}; //Required
let role = '<role>'; //Required

lrv2.roleApi
  .addRolePermissions(permissionsModel, role)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>POST: Roles Create</summary>

This API creates a role with permissions. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/roles-management/roles-create)

```js
let rolesModel = {
  roles: [
    {
      name: '<name>',
      permissions: { Permission_name: true },
    },
  ],
}; //Required

lrv2.roleApi
  .createRoles(rolesModel)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Roles by UID</summary>

This API is used to retrieve all the assigned roles of a particular User. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/roles-management/get-roles-by-uid)

```js
let uid = '<uid>'; //Required

lrv2.roleApi
  .getRolesByUid(uid)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Get Context with Roles and Permissions</summary>

This API Gets the contexts that have been configured and the associated roles and permissions. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/roles-management/get-context)

```js
let uid = '<uid>'; //Required

lrv2.roleApi
  .getRoleContextByUid(uid)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Role Context profile</summary>

The API is used to retrieve role context by the context name. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/roles-management/role-context-profile/)

```js
let contextName = '<contextName>'; //Required

lrv2.roleApi
  .getRoleContextByContextName(contextName)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Roles List</summary>

This API retrieves the complete list of created roles with permissions of your app. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/roles-management/roles-list)

```js
lrv2.roleApi
  .getRolesList()
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>DELETE: Unassign Roles by UID</summary>

This API is used to unassign roles from a user. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/roles-management/unassign-roles-by-uid)

```js
let accountRolesModel = {
  roles: ['roles'],
}; //Required
let uid = '<uid>'; //Required

lrv2.roleApi
  .unassignRolesByUid(accountRolesModel, uid)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>DELETE: Delete Role Context</summary>

This API Deletes the specified Role Context [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/roles-management/delete-context)

```js
let contextName = '<contextName>'; //Required
let uid = '<uid>'; //Required

lrv2.roleApi
  .deleteRoleContextByUid(contextName, uid)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>DELETE: Delete Role from Context</summary>

This API Deletes the specified Role from a Context. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/roles-management/delete-role-from-context/)

```js
let contextName = '<contextName>'; //Required

let roleContextRemoveRoleModel = {
  roles: ['roles'],
}; //Required
let uid = '<uid>'; //Required

lrv2.roleApi
  .deleteRolesFromRoleContextByUid(contextName, roleContextRemoveRoleModel, uid)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>DELETE: Delete Additional Permission from Context</summary>

This API Deletes Additional Permissions from Context. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/roles-management/delete-permissions-from-context)

```js
let contextName = '<contextName>'; //Required

let roleContextAdditionalPermissionRemoveRoleModel = {
  additionalPermissions: ['additionalPermissions'],
}; //Required
let uid = '<uid>'; //Required

lrv2.roleApi
  .deleteAdditionalPermissionFromRoleContextByUid(
    contextName,
    roleContextAdditionalPermissionRemoveRoleModel,
    uid
  )
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>DELETE: Account Delete Role</summary>

This API is used to delete the role. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/roles-management/delete-role)

```js
let role = '<role>'; //Required

lrv2.roleApi
  .deleteRole(role)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>DELETE: Remove Permissions</summary>

API is used to remove permissions from a role. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/roles-management/remove-permissions)

```js
let permissionsModel = {
  permissions: ['permissions'],
}; //Required
let role = '<role>'; //Required

lrv2.roleApi
  .removeRolePermissions(permissionsModel, role)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

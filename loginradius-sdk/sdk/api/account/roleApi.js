/*
 * Created by LoginRadius Development Team
   Copyright 2019 LoginRadius Inc. All rights reserved.
*/
module.exports = function (config) {
  var module = {};
  var helper = require(config.HELPER_PATH);

  /**
  * API is used to retrieve all the assigned roles of a particular User.
  * @param {uid} UID, the unified identifier for each user account
  * @return Response containing Definition of Complete Roles data
  *18.6
  */

  module.getRolesByUid = function (uid) {
    if (helper.isNullOrWhiteSpace(uid)) {
      return Promise.reject(helper.getValidationMessage('uid'));
    }
    var queryParameters = {};

    queryParameters.apiKey = config.apiKey;
    queryParameters.apiSecret = config.apiSecret;

    var resourcePath = `identity/v2/manage/account/${uid}/role`;

    return config.request('GET', resourcePath, queryParameters, null);
  };

  /**
  * This API is used to assign your desired roles to a given user.
  * @param {accountRolesModel} Model Class containing Definition of payload for Create Role API
  * @param {uid} UID, the unified identifier for each user account
  * @return Response containing Definition of Complete Roles data
  *18.7
  */

  module.assignRolesByUid = function (accountRolesModel, uid) {
    if (helper.checkJson(accountRolesModel)) {
      return Promise.reject(helper.getValidationMessage('accountRolesModel'));
    }
    if (helper.isNullOrWhiteSpace(uid)) {
      return Promise.reject(helper.getValidationMessage('uid'));
    }
    var queryParameters = {};

    queryParameters.apiKey = config.apiKey;
    queryParameters.apiSecret = config.apiSecret;

    var resourcePath = `identity/v2/manage/account/${uid}/role`;

    return config.request('PUT', resourcePath, queryParameters, accountRolesModel);
  };

  /**
  * This API is used to unassign roles from a user.
  * @param {accountRolesModel} Model Class containing Definition of payload for Create Role API
  * @param {uid} UID, the unified identifier for each user account
  * @return Response containing Definition of Delete Request
  *18.8
  */

  module.unassignRolesByUid = function (accountRolesModel, uid) {
    if (helper.checkJson(accountRolesModel)) {
      return Promise.reject(helper.getValidationMessage('accountRolesModel'));
    }
    if (helper.isNullOrWhiteSpace(uid)) {
      return Promise.reject(helper.getValidationMessage('uid'));
    }
    var queryParameters = {};

    queryParameters.apiKey = config.apiKey;
    queryParameters.apiSecret = config.apiSecret;

    var resourcePath = `identity/v2/manage/account/${uid}/role`;

    return config.request('DELETE', resourcePath, queryParameters, accountRolesModel);
  };

  /**
  * This API Gets the contexts that have been configured and the associated roles and permissions.
  * @param {uid} UID, the unified identifier for each user account
  * @return Complete user RoleContext data
  *18.9
  */

  module.getRoleContextByUid = function (uid) {
    if (helper.isNullOrWhiteSpace(uid)) {
      return Promise.reject(helper.getValidationMessage('uid'));
    }
    var queryParameters = {};

    queryParameters.apiKey = config.apiKey;
    queryParameters.apiSecret = config.apiSecret;

    var resourcePath = `identity/v2/manage/account/${uid}/rolecontext`;

    return config.request('GET', resourcePath, queryParameters, null);
  };

  /**
  * The API is used to retrieve role context by the context name.
  * @param {contextName} Name of context
  * @return Complete user RoleContext data
  *18.10
  */

  module.getRoleContextByContextName = function (contextName) {
    if (helper.isNullOrWhiteSpace(contextName)) {
      return Promise.reject(helper.getValidationMessage('contextName'));
    }
    var queryParameters = {};

    queryParameters.apiKey = config.apiKey;
    queryParameters.apiSecret = config.apiSecret;

    var resourcePath = 'identity/v2/manage/account/rolecontext/' + contextName;

    return config.request('GET', resourcePath, queryParameters, null);
  };

  /**
  * This API creates a Context with a set of Roles
  * @param {accountRoleContextModel} Model Class containing Definition of RoleContext payload
  * @param {uid} UID, the unified identifier for each user account
  * @return Complete user RoleContext data
  *18.11
  */

  module.updateRoleContextByUid = function (accountRoleContextModel, uid) {
    if (helper.checkJson(accountRoleContextModel)) {
      return Promise.reject(helper.getValidationMessage('accountRoleContextModel'));
    }
    if (helper.isNullOrWhiteSpace(uid)) {
      return Promise.reject(helper.getValidationMessage('uid'));
    }
    var queryParameters = {};

    queryParameters.apiKey = config.apiKey;
    queryParameters.apiSecret = config.apiSecret;

    var resourcePath = `identity/v2/manage/account/${uid}/rolecontext`;

    return config.request('PUT', resourcePath, queryParameters, accountRoleContextModel);
  };

  /**
  * This API Deletes the specified Role Context
  * @param {contextName} Name of context
  * @param {uid} UID, the unified identifier for each user account
  * @return Response containing Definition of Delete Request
  *18.12
  */

  module.deleteRoleContextByUid = function (contextName, uid) {
    if (helper.isNullOrWhiteSpace(contextName)) {
      return Promise.reject(helper.getValidationMessage('contextName'));
    }
    if (helper.isNullOrWhiteSpace(uid)) {
      return Promise.reject(helper.getValidationMessage('uid'));
    }
    var queryParameters = {};

    queryParameters.apiKey = config.apiKey;
    queryParameters.apiSecret = config.apiSecret;

    var resourcePath = `identity/v2/manage/account/${uid}/rolecontext/${contextName}`;

    return config.request('DELETE', resourcePath, queryParameters, null);
  };

  /**
  * This API Deletes the specified Role from a Context.
  * @param {contextName} Name of context
  * @param {roleContextRemoveRoleModel} Model Class containing Definition of payload for RoleContextRemoveRole API
  * @param {uid} UID, the unified identifier for each user account
  * @return Response containing Definition of Delete Request
  *18.13
  */

  module.deleteRolesFromRoleContextByUid = function (contextName, roleContextRemoveRoleModel,
    uid) {
    if (helper.isNullOrWhiteSpace(contextName)) {
      return Promise.reject(helper.getValidationMessage('contextName'));
    }
    if (helper.checkJson(roleContextRemoveRoleModel)) {
      return Promise.reject(helper.getValidationMessage('roleContextRemoveRoleModel'));
    }
    if (helper.isNullOrWhiteSpace(uid)) {
      return Promise.reject(helper.getValidationMessage('uid'));
    }
    var queryParameters = {};

    queryParameters.apiKey = config.apiKey;
    queryParameters.apiSecret = config.apiSecret;

    var resourcePath = `identity/v2/manage/account/${uid}/rolecontext/${contextName}/role`;

    return config.request('DELETE', resourcePath, queryParameters, roleContextRemoveRoleModel);
  };

  /**
  * This API Deletes Additional Permissions from Context.
  * @param {contextName} Name of context
  * @param {roleContextAdditionalPermissionRemoveRoleModel} Model Class containing Definition of payload for RoleContextAdditionalPermissionRemoveRole API
  * @param {uid} UID, the unified identifier for each user account
  * @return Response containing Definition of Delete Request
  *18.14
  */

  module.deleteAdditionalPermissionFromRoleContextByUid = function (contextName, roleContextAdditionalPermissionRemoveRoleModel,
    uid) {
    if (helper.isNullOrWhiteSpace(contextName)) {
      return Promise.reject(helper.getValidationMessage('contextName'));
    }
    if (helper.checkJson(roleContextAdditionalPermissionRemoveRoleModel)) {
      return Promise.reject(helper.getValidationMessage('roleContextAdditionalPermissionRemoveRoleModel'));
    }
    if (helper.isNullOrWhiteSpace(uid)) {
      return Promise.reject(helper.getValidationMessage('uid'));
    }
    var queryParameters = {};

    queryParameters.apiKey = config.apiKey;
    queryParameters.apiSecret = config.apiSecret;

    var resourcePath = `identity/v2/manage/account/${uid}/rolecontext/${contextName}/additionalpermission`;

    return config.request('DELETE', resourcePath, queryParameters, roleContextAdditionalPermissionRemoveRoleModel);
  };

  /**
  * This API retrieves the complete list of created roles with permissions of your app.
  * @return Complete user Roles List data
  *41.1
  */

  module.getRolesList = function () {
    var queryParameters = {};

    queryParameters.apiKey = config.apiKey;
    queryParameters.apiSecret = config.apiSecret;

    var resourcePath = 'identity/v2/manage/role';

    return config.request('GET', resourcePath, queryParameters, null);
  };

  /**
  * This API creates a role with permissions.
  * @param {rolesModel} Model Class containing Definition of payload for Roles API
  * @return Complete user Roles data
  *41.2
  */

  module.createRoles = function (rolesModel) {
    if (helper.checkJson(rolesModel)) {
      return Promise.reject(helper.getValidationMessage('rolesModel'));
    }
    var queryParameters = {};

    queryParameters.apiKey = config.apiKey;
    queryParameters.apiSecret = config.apiSecret;

    var resourcePath = 'identity/v2/manage/role';

    return config.request('POST', resourcePath, queryParameters, rolesModel);
  };

  /**
  * This API is used to delete the role.
  * @param {role} Created RoleName
  * @return Response containing Definition of Delete Request
  *41.3
  */

  module.deleteRole = function (role) {
    if (helper.isNullOrWhiteSpace(role)) {
      return Promise.reject(helper.getValidationMessage('role'));
    }
    var queryParameters = {};

    queryParameters.apiKey = config.apiKey;
    queryParameters.apiSecret = config.apiSecret;

    var resourcePath = 'identity/v2/manage/role/' + role;

    return config.request('DELETE', resourcePath, queryParameters, null);
  };

  /**
  * This API is used to add permissions to a given role.
  * @param {permissionsModel} Model Class containing Definition for PermissionsModel Property
  * @param {role} Created RoleName
  * @return Response containing Definition of Complete role data
  *41.4
  */

  module.addRolePermissions = function (permissionsModel, role) {
    if (helper.checkJson(permissionsModel)) {
      return Promise.reject(helper.getValidationMessage('permissionsModel'));
    }
    if (helper.isNullOrWhiteSpace(role)) {
      return Promise.reject(helper.getValidationMessage('role'));
    }
    var queryParameters = {};

    queryParameters.apiKey = config.apiKey;
    queryParameters.apiSecret = config.apiSecret;

    var resourcePath = `identity/v2/manage/role/${role}/permission`;

    return config.request('PUT', resourcePath, queryParameters, permissionsModel);
  };

  /**
  * API is used to remove permissions from a role.
  * @param {permissionsModel} Model Class containing Definition for PermissionsModel Property
  * @param {role} Created RoleName
  * @return Response containing Definition of Complete role data
  *41.5
  */

  module.removeRolePermissions = function (permissionsModel, role) {
    if (helper.checkJson(permissionsModel)) {
      return Promise.reject(helper.getValidationMessage('permissionsModel'));
    }
    if (helper.isNullOrWhiteSpace(role)) {
      return Promise.reject(helper.getValidationMessage('role'));
    }
    var queryParameters = {};

    queryParameters.apiKey = config.apiKey;
    queryParameters.apiSecret = config.apiSecret;

    var resourcePath = `identity/v2/manage/role/${role}/permission`;

    return config.request('DELETE', resourcePath, queryParameters, permissionsModel);
  };
  return module;
};

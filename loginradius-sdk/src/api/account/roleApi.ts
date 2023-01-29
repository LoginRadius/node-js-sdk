/*
 * Created by LoginRadius Development Team
   Copyright 2019 LoginRadius Inc. All rights reserved.
*/

import {
  checkJson,
  getValidationMessage,
  isNullOrWhiteSpace,
  request
} from '../../util/helper';
import { LoginRadiusConfig } from '../../types';

export default class RoleApi {
  // eslint-disable-next-line no-useless-constructor, no-unused-vars, no-empty-function
  constructor (private config: LoginRadiusConfig) {}

  /**
   * API is used to retrieve all the assigned roles of a particular User.
   * @param uid The unified identifier for each user account
   * @return Response containing Definition of Complete Roles data
   *18.6
   */
  getRolesByUid (uid: string) {
    if (isNullOrWhiteSpace(uid)) {
      return Promise.reject(getValidationMessage('uid'));
    }
    var queryParameters: any = {};

    queryParameters.apiKey = this.config.apiKey;
    queryParameters.apiSecret = this.config.apiSecret;

    var resourcePath = 'identity/v2/manage/account/' + uid + '/role';

    return request(this.config, 'GET', resourcePath, queryParameters, null);
  }

  /**
   * This API is used to assign your desired roles to a given user.
   * @param accountRolesModel Model Class containing Definition of payload for Create Role API
   * @param uid The unified identifier for each user account
   * @return Response containing Definition of Complete Roles data
   *18.7
   */
  assignRolesByUid (accountRolesModel: object, uid: string) {
    if (checkJson(accountRolesModel)) {
      return Promise.reject(getValidationMessage('accountRolesModel'));
    }
    if (isNullOrWhiteSpace(uid)) {
      return Promise.reject(getValidationMessage('uid'));
    }
    var queryParameters: any = {};

    queryParameters.apiKey = this.config.apiKey;
    queryParameters.apiSecret = this.config.apiSecret;

    var resourcePath = 'identity/v2/manage/account/' + uid + '/role';

    return request(
      this.config,
      'PUT',
      resourcePath,
      queryParameters,
      accountRolesModel
    );
  }

  /**
   * This API is used to unassign roles from a user.
   * @param accountRolesModel Model Class containing Definition of payload for Create Role API
   * @param uid The unified identifier for each user account
   * @return Response containing Definition of Delete Request
   *18.8
   */
  unassignRolesByUid (accountRolesModel: object, uid: string) {
    if (checkJson(accountRolesModel)) {
      return Promise.reject(getValidationMessage('accountRolesModel'));
    }
    if (isNullOrWhiteSpace(uid)) {
      return Promise.reject(getValidationMessage('uid'));
    }
    var queryParameters: any = {};

    queryParameters.apiKey = this.config.apiKey;
    queryParameters.apiSecret = this.config.apiSecret;

    var resourcePath = 'identity/v2/manage/account/' + uid + '/role';

    return request(
      this.config,
      'DELETE',
      resourcePath,
      queryParameters,
      accountRolesModel
    );
  }

  /**
   * This API Gets the contexts that have been configured and the associated roles and permissions.
   * @param uid The unified identifier for each user account
   * @return Complete user RoleContext data
   *18.9
   */
  getRoleContextByUid (uid: string) {
    if (isNullOrWhiteSpace(uid)) {
      return Promise.reject(getValidationMessage('uid'));
    }
    var queryParameters: any = {};

    queryParameters.apiKey = this.config.apiKey;
    queryParameters.apiSecret = this.config.apiSecret;

    var resourcePath = 'identity/v2/manage/account/' + uid + '/rolecontext';

    return request(this.config, 'GET', resourcePath, queryParameters, null);
  }

  /**
   * The API is used to retrieve role context by the context name.
   * @param contextName Name of context
   * @return Complete user RoleContext data
   *18.10
   */
  getRoleContextByContextName (contextName: string) {
    if (isNullOrWhiteSpace(contextName)) {
      return Promise.reject(getValidationMessage('contextName'));
    }
    var queryParameters: any = {};

    queryParameters.apiKey = this.config.apiKey;
    queryParameters.apiSecret = this.config.apiSecret;

    var resourcePath = 'identity/v2/manage/account/rolecontext/' + contextName;

    return request(this.config, 'GET', resourcePath, queryParameters, null);
  }

  /**
   * This API creates a Context with a set of Roles
   * @param accountRoleContextModel Model Class containing Definition of RoleContext payload
   * @param uid The unified identifier for each user account
   * @return Complete user RoleContext data
   *18.11
   */
  updateRoleContextByUid (accountRoleContextModel: object, uid: string) {
    if (checkJson(accountRoleContextModel)) {
      return Promise.reject(getValidationMessage('accountRoleContextModel'));
    }
    if (isNullOrWhiteSpace(uid)) {
      return Promise.reject(getValidationMessage('uid'));
    }
    var queryParameters: any = {};

    queryParameters.apiKey = this.config.apiKey;
    queryParameters.apiSecret = this.config.apiSecret;

    var resourcePath = 'identity/v2/manage/account/' + uid + '/rolecontext';

    return request(
      this.config,
      'PUT',
      resourcePath,
      queryParameters,
      accountRoleContextModel
    );
  }

  /**
   * This API Deletes the specified Role Context
   * @param contextName Name of context
   * @param uid The unified identifier for each user account
   * @return Response containing Definition of Delete Request
   *18.12
   */
  deleteRoleContextByUid (contextName: string, uid: string) {
    if (isNullOrWhiteSpace(contextName)) {
      return Promise.reject(getValidationMessage('contextName'));
    }
    if (isNullOrWhiteSpace(uid)) {
      return Promise.reject(getValidationMessage('uid'));
    }
    var queryParameters: any = {};

    queryParameters.apiKey = this.config.apiKey;
    queryParameters.apiSecret = this.config.apiSecret;

    var resourcePath =
      'identity/v2/manage/account/' + uid + '/rolecontext/' + contextName;

    return request(this.config, 'DELETE', resourcePath, queryParameters, null);
  }

  /**
   * This API Deletes the specified Role from a Context.
   * @param contextName Name of context
   * @param roleContextRemoveRoleModel Model Class containing Definition of payload for RoleContextRemoveRole API
   * @param uid The unified identifier for each user account
   * @return Response containing Definition of Delete Request
   *18.13
   */
  deleteRolesFromRoleContextByUid (
    contextName: string,
    roleContextRemoveRoleModel: object,
    uid: string
  ) {
    if (isNullOrWhiteSpace(contextName)) {
      return Promise.reject(getValidationMessage('contextName'));
    }
    if (checkJson(roleContextRemoveRoleModel)) {
      return Promise.reject(getValidationMessage('roleContextRemoveRoleModel'));
    }
    if (isNullOrWhiteSpace(uid)) {
      return Promise.reject(getValidationMessage('uid'));
    }
    var queryParameters: any = {};

    queryParameters.apiKey = this.config.apiKey;
    queryParameters.apiSecret = this.config.apiSecret;

    var resourcePath =
      'identity/v2/manage/account/' +
      uid +
      '/rolecontext/' +
      contextName +
      '/role';

    return request(
      this.config,
      'DELETE',
      resourcePath,
      queryParameters,
      roleContextRemoveRoleModel
    );
  }

  /**
   * This API Deletes Additional Permissions from Context.
   * @param contextName Name of context
   * @param roleContextAdditionalPermissionRemoveRoleModel Model Class containing Definition of payload for RoleContextAdditionalPermissionRemoveRole API
   * @param uid The unified identifier for each user account
   * @return Response containing Definition of Delete Request
   *18.14
   */
  deleteAdditionalPermissionFromRoleContextByUid (
    contextName: string,
    roleContextAdditionalPermissionRemoveRoleModel: object,
    uid: string
  ) {
    if (isNullOrWhiteSpace(contextName)) {
      return Promise.reject(getValidationMessage('contextName'));
    }
    if (checkJson(roleContextAdditionalPermissionRemoveRoleModel)) {
      return Promise.reject(
        getValidationMessage('roleContextAdditionalPermissionRemoveRoleModel')
      );
    }
    if (isNullOrWhiteSpace(uid)) {
      return Promise.reject(getValidationMessage('uid'));
    }
    var queryParameters: any = {};

    queryParameters.apiKey = this.config.apiKey;
    queryParameters.apiSecret = this.config.apiSecret;

    var resourcePath =
      'identity/v2/manage/account/' +
      uid +
      '/rolecontext/' +
      contextName +
      '/additionalpermission';

    return request(
      this.config,
      'DELETE',
      resourcePath,
      queryParameters,
      roleContextAdditionalPermissionRemoveRoleModel
    );
  }

  /**
   * This API retrieves the complete list of created roles with permissions of your app.
   * @return Complete user Roles List data
   *41.1
   */
  getRolesList () {
    var queryParameters: any = {};

    queryParameters.apiKey = this.config.apiKey;
    queryParameters.apiSecret = this.config.apiSecret;

    var resourcePath = 'identity/v2/manage/role';

    return request(this.config, 'GET', resourcePath, queryParameters, null);
  }

  /**
   * This API creates a role with permissions.
   * @param rolesModel Model Class containing Definition of payload for Roles API
   * @return Complete user Roles data
   *41.2
   */
  createRoles (rolesModel: object) {
    if (checkJson(rolesModel)) {
      return Promise.reject(getValidationMessage('rolesModel'));
    }
    var queryParameters: any = {};

    queryParameters.apiKey = this.config.apiKey;
    queryParameters.apiSecret = this.config.apiSecret;

    var resourcePath = 'identity/v2/manage/role';

    return request(
      this.config,
      'POST',
      resourcePath,
      queryParameters,
      rolesModel
    );
  }

  /**
   * This API is used to delete the role.
   * @param role Created RoleName
   * @return Response containing Definition of Delete Request
   *41.3
   */
  deleteRole (role: string) {
    if (isNullOrWhiteSpace(role)) {
      return Promise.reject(getValidationMessage('role'));
    }
    var queryParameters: any = {};

    queryParameters.apiKey = this.config.apiKey;
    queryParameters.apiSecret = this.config.apiSecret;

    var resourcePath = 'identity/v2/manage/role/' + role;

    return request(this.config, 'DELETE', resourcePath, queryParameters, null);
  }

  /**
   * This API is used to add permissions to a given role.
   * @param permissionsModel Model Class containing Definition for PermissionsModel Property
   * @param role Created RoleName
   * @return Response containing Definition of Complete role data
   *41.4
   */
  addRolePermissions (permissionsModel: object, role: string) {
    if (checkJson(permissionsModel)) {
      return Promise.reject(getValidationMessage('permissionsModel'));
    }
    if (isNullOrWhiteSpace(role)) {
      return Promise.reject(getValidationMessage('role'));
    }
    var queryParameters: any = {};

    queryParameters.apiKey = this.config.apiKey;
    queryParameters.apiSecret = this.config.apiSecret;

    var resourcePath = 'identity/v2/manage/role/' + role + '/permission';

    return request(
      this.config,
      'PUT',
      resourcePath,
      queryParameters,
      permissionsModel
    );
  }

  /**
   * API is used to remove permissions from a role.
   * @param permissionsModel Model Class containing Definition for PermissionsModel Property
   * @param role Created RoleName
   * @return Response containing Definition of Complete role data
   *41.5
   */
  removeRolePermissions (permissionsModel: object, role: string) {
    if (checkJson(permissionsModel)) {
      return Promise.reject(getValidationMessage('permissionsModel'));
    }
    if (isNullOrWhiteSpace(role)) {
      return Promise.reject(getValidationMessage('role'));
    }
    var queryParameters: any = {};

    queryParameters.apiKey = this.config.apiKey;
    queryParameters.apiSecret = this.config.apiSecret;

    var resourcePath = 'identity/v2/manage/role/' + role + '/permission';

    return request(
      this.config,
      'DELETE',
      resourcePath,
      queryParameters,
      permissionsModel
    );
  }
}

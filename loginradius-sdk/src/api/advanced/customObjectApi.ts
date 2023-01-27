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

export default class CustomObjectApi {
  // eslint-disable-next-line no-useless-constructor, no-unused-vars, no-empty-function
  constructor (private config: LoginRadiusConfig) {}

  /**
   * This API is used to write information in JSON format to the custom object for the specified account.
   * @param {accessToken} Uniquely generated identifier key by LoginRadius that is activated after successful authentication.
   * @param {objectName} LoginRadius Custom Object Name
   * @param {payload} LoginRadius Custom Object Name
   * @return Response containing Definition for Complete user custom object data
   *6.1
   */
  createCustomObjectByToken (accessToken, objectName, payload) {
    if (isNullOrWhiteSpace(accessToken)) {
      return Promise.reject(getValidationMessage('accessToken'));
    }
    if (isNullOrWhiteSpace(objectName)) {
      return Promise.reject(getValidationMessage('objectName'));
    }
    if (checkJson(payload)) {
      return Promise.reject(getValidationMessage('payload'));
    }
    var queryParameters: any = {};

    queryParameters.access_token = accessToken;
    queryParameters.apiKey = this.config.apiKey;
    queryParameters.objectName = objectName;

    var resourcePath = 'identity/v2/auth/customobject';

    return request(this.config, 'POST', resourcePath, queryParameters, payload);
  }

  /**
   * This API is used to update the specified custom object data of the specified account. If the value of updatetype is 'replace' then it will fully replace custom object with the new custom object and if the value of updatetype is 'partialreplace' then it will perform an upsert type operation
   * @param {accessToken} Uniquely generated identifier key by LoginRadius that is activated after successful authentication.
   * @param {objectName} LoginRadius Custom Object Name
   * @param {objectRecordId} Unique identifier of the user's record in Custom Object
   * @param {payload} LoginRadius Custom Object Name
   * @param {updateType} Possible values: replace, partialreplace.
   * @return Response containing Definition for Complete user custom object data
   *6.2
   */
  updateCustomObjectByToken (
    accessToken,
    objectName,
    objectRecordId,
    payload,
    updateType
  ) {
    if (isNullOrWhiteSpace(accessToken)) {
      return Promise.reject(getValidationMessage('accessToken'));
    }
    if (isNullOrWhiteSpace(objectName)) {
      return Promise.reject(getValidationMessage('objectName'));
    }
    if (isNullOrWhiteSpace(objectRecordId)) {
      return Promise.reject(getValidationMessage('objectRecordId'));
    }
    if (checkJson(payload)) {
      return Promise.reject(getValidationMessage('payload'));
    }
    var queryParameters: any = {};

    queryParameters.access_token = accessToken;
    queryParameters.apiKey = this.config.apiKey;
    queryParameters.objectName = objectName;
    if (updateType !== null) {
      queryParameters.updateType = updateType;
    }

    var resourcePath = 'identity/v2/auth/customobject/' + objectRecordId;

    return request(this.config, 'PUT', resourcePath, queryParameters, payload);
  }

  /**
   * This API is used to retrieve the specified Custom Object data for the specified account.
   * @param {accessToken} Uniquely generated identifier key by LoginRadius that is activated after successful authentication.
   * @param {objectName} LoginRadius Custom Object Name
   * @return Complete user CustomObject data
   *6.3
   */
  getCustomObjectByToken (accessToken, objectName) {
    if (isNullOrWhiteSpace(accessToken)) {
      return Promise.reject(getValidationMessage('accessToken'));
    }
    if (isNullOrWhiteSpace(objectName)) {
      return Promise.reject(getValidationMessage('objectName'));
    }
    var queryParameters: any = {};

    queryParameters.access_token = accessToken;
    queryParameters.apiKey = this.config.apiKey;
    queryParameters.objectName = objectName;

    var resourcePath = 'identity/v2/auth/customobject';

    return request(this.config, 'GET', resourcePath, queryParameters, null);
  }

  /**
   * This API is used to retrieve the Custom Object data for the specified account.
   * @param {accessToken} Uniquely generated identifier key by LoginRadius that is activated after successful authentication.
   * @param {objectName} LoginRadius Custom Object Name
   * @param {objectRecordId} Unique identifier of the user's record in Custom Object
   * @return Response containing Definition for Complete user custom object data
   *6.4
   */
  getCustomObjectByRecordIDAndToken (accessToken, objectName, objectRecordId) {
    if (isNullOrWhiteSpace(accessToken)) {
      return Promise.reject(getValidationMessage('accessToken'));
    }
    if (isNullOrWhiteSpace(objectName)) {
      return Promise.reject(getValidationMessage('objectName'));
    }
    if (isNullOrWhiteSpace(objectRecordId)) {
      return Promise.reject(getValidationMessage('objectRecordId'));
    }
    var queryParameters: any = {};

    queryParameters.access_token = accessToken;
    queryParameters.apiKey = this.config.apiKey;
    queryParameters.objectName = objectName;

    var resourcePath = 'identity/v2/auth/customobject/' + objectRecordId;

    return request(this.config, 'GET', resourcePath, queryParameters, null);
  }

  /**
   * This API is used to remove the specified Custom Object data using ObjectRecordId of a specified account.
   * @param {accessToken} Uniquely generated identifier key by LoginRadius that is activated after successful authentication.
   * @param {objectName} LoginRadius Custom Object Name
   * @param {objectRecordId} Unique identifier of the user's record in Custom Object
   * @return Response containing Definition of Delete Request
   *6.5
   */
  deleteCustomObjectByToken (accessToken, objectName, objectRecordId) {
    if (isNullOrWhiteSpace(accessToken)) {
      return Promise.reject(getValidationMessage('accessToken'));
    }
    if (isNullOrWhiteSpace(objectName)) {
      return Promise.reject(getValidationMessage('objectName'));
    }
    if (isNullOrWhiteSpace(objectRecordId)) {
      return Promise.reject(getValidationMessage('objectRecordId'));
    }
    var queryParameters: any = {};

    queryParameters.access_token = accessToken;
    queryParameters.apiKey = this.config.apiKey;
    queryParameters.objectName = objectName;

    var resourcePath = 'identity/v2/auth/customobject/' + objectRecordId;

    return request(this.config, 'DELETE', resourcePath, queryParameters, null);
  }

  /**
   * This API is used to write information in JSON format to the custom object for the specified account.
   * @param {objectName} LoginRadius Custom Object Name
   * @param {payload} LoginRadius Custom Object Name
   * @param {uid} UID, the unified identifier for each user account
   * @return Response containing Definition for Complete user custom object data
   *19.1
   */
  createCustomObjectByUid (objectName, payload, uid) {
    if (isNullOrWhiteSpace(objectName)) {
      return Promise.reject(getValidationMessage('objectName'));
    }
    if (checkJson(payload)) {
      return Promise.reject(getValidationMessage('payload'));
    }
    if (isNullOrWhiteSpace(uid)) {
      return Promise.reject(getValidationMessage('uid'));
    }
    var queryParameters: any = {};

    queryParameters.apiKey = this.config.apiKey;
    queryParameters.apiSecret = this.config.apiSecret;
    queryParameters.objectName = objectName;

    var resourcePath = 'identity/v2/manage/account/' + uid + '/customobject';

    return request(this.config, 'POST', resourcePath, queryParameters, payload);
  }

  /**
   * This API is used to update the specified custom object data of a specified account. If the value of updatetype is 'replace' then it will fully replace custom object with new custom object and if the value of updatetype is partialreplace then it will perform an upsert type operation.
   * @param {objectName} LoginRadius Custom Object Name
   * @param {objectRecordId} Unique identifier of the user's record in Custom Object
   * @param {payload} LoginRadius Custom Object Name
   * @param {uid} UID, the unified identifier for each user account
   * @param {updateType} Possible values: replace, partialreplace.
   * @return Response containing Definition for Complete user custom object data
   *19.2
   */
  updateCustomObjectByUid (
    objectName,
    objectRecordId,
    payload,
    uid,
    updateType
  ) {
    if (isNullOrWhiteSpace(objectName)) {
      return Promise.reject(getValidationMessage('objectName'));
    }
    if (isNullOrWhiteSpace(objectRecordId)) {
      return Promise.reject(getValidationMessage('objectRecordId'));
    }
    if (checkJson(payload)) {
      return Promise.reject(getValidationMessage('payload'));
    }
    if (isNullOrWhiteSpace(uid)) {
      return Promise.reject(getValidationMessage('uid'));
    }
    var queryParameters: any = {};

    queryParameters.apiKey = this.config.apiKey;
    queryParameters.apiSecret = this.config.apiSecret;
    queryParameters.objectName = objectName;
    if (updateType !== null) {
      queryParameters.updateType = updateType;
    }

    var resourcePath =
      'identity/v2/manage/account/' + uid + '/customobject/' + objectRecordId;

    return request(this.config, 'PUT', resourcePath, queryParameters, payload);
  }

  /**
   * This API is used to retrieve all the custom objects by UID from cloud storage.
   * @param {objectName} LoginRadius Custom Object Name
   * @param {uid} UID, the unified identifier for each user account
   * @return Complete user CustomObject data
   *19.3
   */
  getCustomObjectByUid (objectName, uid) {
    if (isNullOrWhiteSpace(objectName)) {
      return Promise.reject(getValidationMessage('objectName'));
    }
    if (isNullOrWhiteSpace(uid)) {
      return Promise.reject(getValidationMessage('uid'));
    }
    var queryParameters: any = {};

    queryParameters.apiKey = this.config.apiKey;
    queryParameters.apiSecret = this.config.apiSecret;
    queryParameters.objectName = objectName;

    var resourcePath = 'identity/v2/manage/account/' + uid + '/customobject';

    return request(this.config, 'GET', resourcePath, queryParameters, null);
  }

  /**
   * This API is used to retrieve the Custom Object data for the specified account.
   * @param {objectName} LoginRadius Custom Object Name
   * @param {objectRecordId} Unique identifier of the user's record in Custom Object
   * @param {uid} UID, the unified identifier for each user account
   * @return Response containing Definition for Complete user custom object data
   *19.4
   */
  getCustomObjectByRecordID (objectName, objectRecordId, uid) {
    if (isNullOrWhiteSpace(objectName)) {
      return Promise.reject(getValidationMessage('objectName'));
    }
    if (isNullOrWhiteSpace(objectRecordId)) {
      return Promise.reject(getValidationMessage('objectRecordId'));
    }
    if (isNullOrWhiteSpace(uid)) {
      return Promise.reject(getValidationMessage('uid'));
    }
    var queryParameters: any = {};

    queryParameters.apiKey = this.config.apiKey;
    queryParameters.apiSecret = this.config.apiSecret;
    queryParameters.objectName = objectName;

    var resourcePath =
      'identity/v2/manage/account/' + uid + '/customobject/' + objectRecordId;

    return request(this.config, 'GET', resourcePath, queryParameters, null);
  }

  /**
   * This API is used to remove the specified Custom Object data using ObjectRecordId of specified account.
   * @param {objectName} LoginRadius Custom Object Name
   * @param {objectRecordId} Unique identifier of the user's record in Custom Object
   * @param {uid} UID, the unified identifier for each user account
   * @return Response containing Definition of Delete Request
   *19.5
   */
  deleteCustomObjectByRecordID (objectName, objectRecordId, uid) {
    if (isNullOrWhiteSpace(objectName)) {
      return Promise.reject(getValidationMessage('objectName'));
    }
    if (isNullOrWhiteSpace(objectRecordId)) {
      return Promise.reject(getValidationMessage('objectRecordId'));
    }
    if (isNullOrWhiteSpace(uid)) {
      return Promise.reject(getValidationMessage('uid'));
    }
    var queryParameters: any = {};

    queryParameters.apiKey = this.config.apiKey;
    queryParameters.apiSecret = this.config.apiSecret;
    queryParameters.objectName = objectName;

    var resourcePath =
      'identity/v2/manage/account/' + uid + '/customobject/' + objectRecordId;

    return request(this.config, 'DELETE', resourcePath, queryParameters, null);
  }
}

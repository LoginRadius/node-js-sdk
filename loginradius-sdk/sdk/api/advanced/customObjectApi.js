/*
 * Created by LoginRadius Development Team
   Copyright 2019 LoginRadius Inc. All rights reserved.
*/
module.exports = function (config) {
  var module = {};
  var helper = require(config.HELPER_PATH);

  /**
  * This API is used to write information in JSON format to the custom object for the specified account.
  * @param {accessToken} Uniquely generated identifier key by LoginRadius that is activated after successful authentication.
  * @param {objectName} LoginRadius Custom Object Name
  * @param {payload} LoginRadius Custom Object Name
  * @return Response containing Definition for Complete user custom object data
  *6.1
  */

  module.createCustomObjectByToken = function (accessToken, objectName,
    payload) {
    if (helper.isNullOrWhiteSpace(accessToken)) {
      return Promise.reject(helper.getValidationMessage('accessToken'));
    }
    if (helper.isNullOrWhiteSpace(objectName)) {
      return Promise.reject(helper.getValidationMessage('objectName'));
    }
    if (helper.checkJson(payload)) {
      return Promise.reject(helper.getValidationMessage('payload'));
    }
    var queryParameters = {};

    queryParameters.access_token = accessToken;
    queryParameters.apiKey = config.apiKey;
    queryParameters.objectName = objectName;

    var resourcePath = 'identity/v2/auth/customobject';

    return config.request('POST', resourcePath, queryParameters, payload);
  };

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

  module.updateCustomObjectByToken = function (accessToken, objectName,
    objectRecordId, payload, updateType) {
    if (helper.isNullOrWhiteSpace(accessToken)) {
      return Promise.reject(helper.getValidationMessage('accessToken'));
    }
    if (helper.isNullOrWhiteSpace(objectName)) {
      return Promise.reject(helper.getValidationMessage('objectName'));
    }
    if (helper.isNullOrWhiteSpace(objectRecordId)) {
      return Promise.reject(helper.getValidationMessage('objectRecordId'));
    }
    if (helper.checkJson(payload)) {
      return Promise.reject(helper.getValidationMessage('payload'));
    }
    var queryParameters = {};

    queryParameters.access_token = accessToken;
    queryParameters.apiKey = config.apiKey;
    queryParameters.objectName = objectName;
    if (updateType !== null) {
      queryParameters.updateType = updateType;
    }

    var resourcePath = `identity/v2/auth/customobject/${objectRecordId}`;

    return config.request('PUT', resourcePath, queryParameters, payload);
  };

  /**
  * This API is used to retrieve the specified Custom Object data for the specified account.
  * @param {accessToken} Uniquely generated identifier key by LoginRadius that is activated after successful authentication.
  * @param {objectName} LoginRadius Custom Object Name
  * @return Complete user CustomObject data
  *6.3
  */

  module.getCustomObjectByToken = function (accessToken, objectName) {
    if (helper.isNullOrWhiteSpace(accessToken)) {
      return Promise.reject(helper.getValidationMessage('accessToken'));
    }
    if (helper.isNullOrWhiteSpace(objectName)) {
      return Promise.reject(helper.getValidationMessage('objectName'));
    }
    var queryParameters = {};

    queryParameters.access_token = accessToken;
    queryParameters.apiKey = config.apiKey;
    queryParameters.objectName = objectName;

    var resourcePath = 'identity/v2/auth/customobject';

    return config.request('GET', resourcePath, queryParameters, null);
  };

  /**
  * This API is used to retrieve the Custom Object data for the specified account.
  * @param {accessToken} Uniquely generated identifier key by LoginRadius that is activated after successful authentication.
  * @param {objectName} LoginRadius Custom Object Name
  * @param {objectRecordId} Unique identifier of the user's record in Custom Object
  * @return Response containing Definition for Complete user custom object data
  *6.4
  */

  module.getCustomObjectByRecordIDAndToken = function (accessToken, objectName,
    objectRecordId) {
    if (helper.isNullOrWhiteSpace(accessToken)) {
      return Promise.reject(helper.getValidationMessage('accessToken'));
    }
    if (helper.isNullOrWhiteSpace(objectName)) {
      return Promise.reject(helper.getValidationMessage('objectName'));
    }
    if (helper.isNullOrWhiteSpace(objectRecordId)) {
      return Promise.reject(helper.getValidationMessage('objectRecordId'));
    }
    var queryParameters = {};

    queryParameters.access_token = accessToken;
    queryParameters.apiKey = config.apiKey;
    queryParameters.objectName = objectName;

    var resourcePath = `identity/v2/auth/customobject/${objectRecordId}`;

    return config.request('GET', resourcePath, queryParameters, null);
  };

  /**
  * This API is used to remove the specified Custom Object data using ObjectRecordId of a specified account.
  * @param {accessToken} Uniquely generated identifier key by LoginRadius that is activated after successful authentication.
  * @param {objectName} LoginRadius Custom Object Name
  * @param {objectRecordId} Unique identifier of the user's record in Custom Object
  * @return Response containing Definition of Delete Request
  *6.5
  */

  module.deleteCustomObjectByToken = function (accessToken, objectName,
    objectRecordId) {
    if (helper.isNullOrWhiteSpace(accessToken)) {
      return Promise.reject(helper.getValidationMessage('accessToken'));
    }
    if (helper.isNullOrWhiteSpace(objectName)) {
      return Promise.reject(helper.getValidationMessage('objectName'));
    }
    if (helper.isNullOrWhiteSpace(objectRecordId)) {
      return Promise.reject(helper.getValidationMessage('objectRecordId'));
    }
    var queryParameters = {};

    queryParameters.access_token = accessToken;
    queryParameters.apiKey = config.apiKey;
    queryParameters.objectName = objectName;

    var resourcePath = `identity/v2/auth/customobject/${objectRecordId}`;

    return config.request('DELETE', resourcePath, queryParameters, null);
  };

  /**
  * This API is used to write information in JSON format to the custom object for the specified account.
  * @param {objectName} LoginRadius Custom Object Name
  * @param {payload} LoginRadius Custom Object Name
  * @param {uid} UID, the unified identifier for each user account
  * @return Response containing Definition for Complete user custom object data
  *19.1
  */

  module.createCustomObjectByUid = function (objectName, payload,
    uid) {
    if (helper.isNullOrWhiteSpace(objectName)) {
      return Promise.reject(helper.getValidationMessage('objectName'));
    }
    if (helper.checkJson(payload)) {
      return Promise.reject(helper.getValidationMessage('payload'));
    }
    if (helper.isNullOrWhiteSpace(uid)) {
      return Promise.reject(helper.getValidationMessage('uid'));
    }
    var queryParameters = {};

    queryParameters.apiKey = config.apiKey;
    queryParameters.apiSecret = config.apiSecret;
    queryParameters.objectName = objectName;

    var resourcePath = `identity/v2/manage/account/${uid}/customobject`;

    return config.request('POST', resourcePath, queryParameters, payload);
  };

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

  module.updateCustomObjectByUid = function (objectName, objectRecordId,
    payload, uid, updateType) {
    if (helper.isNullOrWhiteSpace(objectName)) {
      return Promise.reject(helper.getValidationMessage('objectName'));
    }
    if (helper.isNullOrWhiteSpace(objectRecordId)) {
      return Promise.reject(helper.getValidationMessage('objectRecordId'));
    }
    if (helper.checkJson(payload)) {
      return Promise.reject(helper.getValidationMessage('payload'));
    }
    if (helper.isNullOrWhiteSpace(uid)) {
      return Promise.reject(helper.getValidationMessage('uid'));
    }
    var queryParameters = {};

    queryParameters.apiKey = config.apiKey;
    queryParameters.apiSecret = config.apiSecret;
    queryParameters.objectName = objectName;
    if (updateType !== null) {
      queryParameters.updateType = updateType;
    }

    var resourcePath = `identity/v2/manage/account/${uid}/customobject/${objectRecordId}`;

    return config.request('PUT', resourcePath, queryParameters, payload);
  };

  /**
  * This API is used to retrieve all the custom objects by UID from cloud storage.
  * @param {objectName} LoginRadius Custom Object Name
  * @param {uid} UID, the unified identifier for each user account
  * @return Complete user CustomObject data
  *19.3
  */

  module.getCustomObjectByUid = function (objectName, uid) {
    if (helper.isNullOrWhiteSpace(objectName)) {
      return Promise.reject(helper.getValidationMessage('objectName'));
    }
    if (helper.isNullOrWhiteSpace(uid)) {
      return Promise.reject(helper.getValidationMessage('uid'));
    }
    var queryParameters = {};

    queryParameters.apiKey = config.apiKey;
    queryParameters.apiSecret = config.apiSecret;
    queryParameters.objectName = objectName;

    var resourcePath = `identity/v2/manage/account/${uid}/customobject`;

    return config.request('GET', resourcePath, queryParameters, null);
  };

  /**
  * This API is used to retrieve the Custom Object data for the specified account.
  * @param {objectName} LoginRadius Custom Object Name
  * @param {objectRecordId} Unique identifier of the user's record in Custom Object
  * @param {uid} UID, the unified identifier for each user account
  * @return Response containing Definition for Complete user custom object data
  *19.4
  */

  module.getCustomObjectByRecordID = function (objectName, objectRecordId,
    uid) {
    if (helper.isNullOrWhiteSpace(objectName)) {
      return Promise.reject(helper.getValidationMessage('objectName'));
    }
    if (helper.isNullOrWhiteSpace(objectRecordId)) {
      return Promise.reject(helper.getValidationMessage('objectRecordId'));
    }
    if (helper.isNullOrWhiteSpace(uid)) {
      return Promise.reject(helper.getValidationMessage('uid'));
    }
    var queryParameters = {};

    queryParameters.apiKey = config.apiKey;
    queryParameters.apiSecret = config.apiSecret;
    queryParameters.objectName = objectName;

    var resourcePath = `identity/v2/manage/account/${uid}/customobject/${objectRecordId}`;

    return config.request('GET', resourcePath, queryParameters, null);
  };

  /**
  * This API is used to remove the specified Custom Object data using ObjectRecordId of specified account.
  * @param {objectName} LoginRadius Custom Object Name
  * @param {objectRecordId} Unique identifier of the user's record in Custom Object
  * @param {uid} UID, the unified identifier for each user account
  * @return Response containing Definition of Delete Request
  *19.5
  */

  module.deleteCustomObjectByRecordID = function (objectName, objectRecordId,
    uid) {
    if (helper.isNullOrWhiteSpace(objectName)) {
      return Promise.reject(helper.getValidationMessage('objectName'));
    }
    if (helper.isNullOrWhiteSpace(objectRecordId)) {
      return Promise.reject(helper.getValidationMessage('objectRecordId'));
    }
    if (helper.isNullOrWhiteSpace(uid)) {
      return Promise.reject(helper.getValidationMessage('uid'));
    }
    var queryParameters = {};

    queryParameters.apiKey = config.apiKey;
    queryParameters.apiSecret = config.apiSecret;
    queryParameters.objectName = objectName;

    var resourcePath = `identity/v2/manage/account/${uid}/customobject/${objectRecordId}`;

    return config.request('DELETE', resourcePath, queryParameters, null);
  };
  return module;
};

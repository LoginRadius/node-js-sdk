/*
 * Created by LoginRadius Development Team
   Copyright 2019 LoginRadius Inc. All rights reserved.
*/
module.exports = function (config) {
  var module = {};
  var helper = require(config.HELPER_PATH)();

  /**
   * This API is used to retrieve dropdown data.
   * @param {type} Type of the Datasource
   * @param {limit} Retrieve number of records at a time(max limit is 50)
   * @param {parentId} Id of parent dropdown member(if any).
   * @param {skip} Skip number of records from start
   * @return Complete user Registration data
   *7.1
   */

  module.authGetRegistrationData = function (type, limit, parentId, skip) {
    if (helper.isNullOrWhiteSpace(type)) {
      return Promise.reject(helper.getValidationMessage('type'));
    }
    var queryParameters = {};

    queryParameters.apiKey = config.apiKey;
    if (limit !== null) {
      queryParameters.limit = limit;
    }
    if (!helper.isNullOrWhiteSpace(parentId)) {
      queryParameters.parentId = parentId;
    }
    if (skip !== null) {
      queryParameters.skip = skip;
    }

    var resourcePath = 'identity/v2/auth/registrationdata/' + type;

    return config.request('GET', resourcePath, queryParameters, null);
  };

  /**
   * This API allows you to validate code for a particular dropdown member.
   * @param {code} Secret Code
   * @param {recordId} Selected dropdown item’s record id
   * @return Response containing Definition of Complete Validation data
   *7.2
   */

  module.validateRegistrationDataCode = function (code, recordId) {
    if (helper.isNullOrWhiteSpace(code)) {
      return Promise.reject(helper.getValidationMessage('code'));
    }
    if (helper.isNullOrWhiteSpace(recordId)) {
      return Promise.reject(helper.getValidationMessage('recordId'));
    }
    var queryParameters = {};

    queryParameters.apiKey = config.apiKey;

    var bodyParameters = {};
    bodyParameters.code = code;
    bodyParameters.recordId = recordId;

    var resourcePath = 'identity/v2/auth/registrationdata/validatecode';

    return config.request(
      'POST',
      resourcePath,
      queryParameters,
      bodyParameters
    );
  };

  /**
   * This API is used to retrieve dropdown data.
   * @param {type} Type of the Datasource
   * @param {limit} Retrive number of records at a time(max limit is 50
   * @param {parentId} Id of parent dropdown member(if any).
   * @param {skip} Skip number of records from start
   * @return Complete user Registration data Fields
   *16.1
   */

  module.getRegistrationData = function (type, limit, parentId, skip) {
    if (helper.isNullOrWhiteSpace(type)) {
      return Promise.reject(helper.getValidationMessage('type'));
    }
    var queryParameters = {};

    queryParameters.apiKey = config.apiKey;
    queryParameters.apiSecret = config.apiSecret;
    if (limit !== null) {
      queryParameters.limit = limit;
    }
    if (!helper.isNullOrWhiteSpace(parentId)) {
      queryParameters.parentId = parentId;
    }
    if (skip !== null) {
      queryParameters.skip = skip;
    }

    var resourcePath = 'identity/v2/manage/registrationdata/' + type;

    return config.request('GET', resourcePath, queryParameters, null);
  };

  /**
   * This API allows you to fill data into a dropdown list which you have created for user Registration. For more details on how to use this API please see our Custom Registration Data Overview
   * @param {registrationDataCreateModelList} Model Class containing Definition of List of Registration Data
   * @return Response containing Definition of Complete Validation data
   *16.2
   */

  module.addRegistrationData = function (registrationDataCreateModelList) {
    if (helper.checkJson(registrationDataCreateModelList)) {
      return Promise.reject(
        helper.getValidationMessage('registrationDataCreateModelList')
      );
    }
    var queryParameters = {};

    queryParameters.apiKey = config.apiKey;
    queryParameters.apiSecret = config.apiSecret;

    var resourcePath = 'identity/v2/manage/registrationdata';

    return config.request(
      'POST',
      resourcePath,
      queryParameters,
      registrationDataCreateModelList
    );
  };

  /**
   * This API allows you to update a dropdown item
   * @param {registrationDataUpdateModel} Model Class containing Definition of payload for Registration Data update API
   * @param {recordId} Registration data RecordId
   * @return Complete user Registration data Field
   *16.3
   */

  module.updateRegistrationData = function (
    registrationDataUpdateModel,
    recordId
  ) {
    if (helper.checkJson(registrationDataUpdateModel)) {
      return Promise.reject(
        helper.getValidationMessage('registrationDataUpdateModel')
      );
    }
    if (helper.isNullOrWhiteSpace(recordId)) {
      return Promise.reject(helper.getValidationMessage('recordId'));
    }
    var queryParameters = {};

    queryParameters.apiKey = config.apiKey;
    queryParameters.apiSecret = config.apiSecret;

    var resourcePath = 'identity/v2/manage/registrationdata/' + recordId;

    return config.request(
      'PUT',
      resourcePath,
      queryParameters,
      registrationDataUpdateModel
    );
  };

  /**
   * This API allows you to delete an item from a dropdown list.
   * @param {recordId} Registration data RecordId
   * @return Response containing Definition of Delete Request
   *16.4
   */

  module.deleteRegistrationData = function (recordId) {
    if (helper.isNullOrWhiteSpace(recordId)) {
      return Promise.reject(helper.getValidationMessage('recordId'));
    }
    var queryParameters = {};

    queryParameters.apiKey = config.apiKey;
    queryParameters.apiSecret = config.apiSecret;

    var resourcePath = 'identity/v2/manage/registrationdata/' + recordId;

    return config.request('DELETE', resourcePath, queryParameters, null);
  };

  /**
   * This API allows you to delete all records contained in a datasource.
   * @param {type} Type of the Datasource
   * @return Response containing Definition of Delete Request
   *16.5
   */

  module.deleteAllRecordsByDataSource = function (type) {
    if (helper.isNullOrWhiteSpace(type)) {
      return Promise.reject(helper.getValidationMessage('type'));
    }
    var queryParameters = {};

    queryParameters.apiKey = config.apiKey;
    queryParameters.apiSecret = config.apiSecret;

    var resourcePath = 'identity/v2/manage/registrationdata/type/' + type;

    return config.request('DELETE', resourcePath, queryParameters, null);
  };
  return module;
};

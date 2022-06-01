/*
 * Created by LoginRadius Development Team
   Copyright 2019 LoginRadius Inc. All rights reserved.
*/
module.exports = function (config) {
  var module = {};
  var helper = require(config.HELPER_PATH)();

  /**
   * This API is used to get the Consent logs of the user.
   * @param {uid} UID, the unified identifier for each user account
   * @return Response containing consent logs
   *18.37
   */

  module.getConsentLogsByUid = function (uid) {
    if (helper.isNullOrWhiteSpace(uid)) {
      return Promise.reject(helper.getValidationMessage('uid'));
    }
    var queryParameters = {};

    queryParameters.apiKey = config.apiKey;
    queryParameters.apiSecret = config.apiSecret;

    var resourcePath = 'identity/v2/manage/account/' + uid + '/consent/logs';

    return config.request('GET', resourcePath, queryParameters, null);
  };

  /**
   * This API is to submit consent form using consent token.
   * @param {consentToken} The consent token received after login error 1226
   * @param {consentSubmitModel} Model class containing list of multiple consent
   * @return Response containing User Profile Data and access token
   *43.1
   */

  module.submitConsentByConsentToken = function (
    consentToken,
    consentSubmitModel
  ) {
    if (helper.isNullOrWhiteSpace(consentToken)) {
      return Promise.reject(helper.getValidationMessage('consentToken'));
    }
    if (helper.checkJson(consentSubmitModel)) {
      return Promise.reject(helper.getValidationMessage('consentSubmitModel'));
    }
    var queryParameters = {};

    queryParameters.apiKey = config.apiKey;
    queryParameters.consentToken = consentToken;

    var resourcePath = 'identity/v2/auth/consent';

    return config.request(
      'POST',
      resourcePath,
      queryParameters,
      consentSubmitModel
    );
  };

  /**
   * This API is used to fetch consent logs.
   * @param {accessToken} Uniquely generated identifier key by LoginRadius that is activated after successful authentication.
   * @return Response containing consent logs
   *43.2
   */

  module.getConsentLogs = function (accessToken) {
    if (helper.isNullOrWhiteSpace(accessToken)) {
      return Promise.reject(helper.getValidationMessage('accessToken'));
    }
    var queryParameters = {};

    queryParameters.access_token = accessToken;
    queryParameters.apiKey = config.apiKey;

    var resourcePath = 'identity/v2/auth/consent/logs';

    return config.request('GET', resourcePath, queryParameters, null);
  };

  /**
   * API to provide a way to end user to submit a consent form for particular event type.
   * @param {accessToken} Uniquely generated identifier key by LoginRadius that is activated after successful authentication.
   * @param {consentSubmitModel} Model class containing list of multiple consent
   * @return Response containing Definition for Complete profile data
   *43.3
   */

  module.submitConsentByAccessToken = function (
    accessToken,
    consentSubmitModel
  ) {
    if (helper.isNullOrWhiteSpace(accessToken)) {
      return Promise.reject(helper.getValidationMessage('accessToken'));
    }
    if (helper.checkJson(consentSubmitModel)) {
      return Promise.reject(helper.getValidationMessage('consentSubmitModel'));
    }
    var queryParameters = {};

    queryParameters.access_token = accessToken;
    queryParameters.apiKey = config.apiKey;

    var resourcePath = 'identity/v2/auth/consent/profile';

    return config.request(
      'POST',
      resourcePath,
      queryParameters,
      consentSubmitModel
    );
  };

  /**
   * This API is used to check if consent is submitted for a particular event or not.
   * @param {accessToken} Uniquely generated identifier key by LoginRadius that is activated after successful authentication.
   * @param {event} Allowed events: Login, Register, UpdateProfile, ResetPassword, ChangePassword, emailVerification, AddEmail, RemoveEmail, BlockAccount, DeleteAccount, SetUsername, AssignRoles, UnassignRoles, SetPassword, LinkAccount, UnlinkAccount, UpdatePhoneId, VerifyPhoneNumber, CreateCustomObject, UpdateCustomobject, DeleteCustomObject
   * @param {isCustom} true/false
   * @return Response containing consent profile
   *43.4
   */

  module.verifyConsentByAccessToken = function (accessToken, event, isCustom) {
    if (helper.isNullOrWhiteSpace(accessToken)) {
      return Promise.reject(helper.getValidationMessage('accessToken'));
    }
    if (helper.isNullOrWhiteSpace(event)) {
      return Promise.reject(helper.getValidationMessage('event'));
    }
    var queryParameters = {};

    queryParameters.access_token = accessToken;
    queryParameters.apiKey = config.apiKey;
    queryParameters.event = event;
    queryParameters.isCustom = isCustom;

    var resourcePath = 'identity/v2/auth/consent/verify';

    return config.request('GET', resourcePath, queryParameters, null);
  };

  /**
   * This API is to update consents using access token.
   * @param {accessToken} Uniquely generated identifier key by LoginRadius that is activated after successful authentication.
   * @param {consentUpdateModel} Model class containg list of multiple consent
   * @return Response containing consent profile
   *43.5
   */

  module.updateConsentProfileByAccessToken = function (
    accessToken,
    consentUpdateModel
  ) {
    if (helper.isNullOrWhiteSpace(accessToken)) {
      return Promise.reject(helper.getValidationMessage('accessToken'));
    }
    if (helper.checkJson(consentUpdateModel)) {
      return Promise.reject(helper.getValidationMessage('consentUpdateModel'));
    }
    var queryParameters = {};

    queryParameters.access_token = accessToken;
    queryParameters.apiKey = config.apiKey;

    var resourcePath = 'identity/v2/auth/consent';

    return config.request(
      'PUT',
      resourcePath,
      queryParameters,
      consentUpdateModel
    );
  };
  return module;
};

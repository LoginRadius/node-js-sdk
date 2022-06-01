/*
 * Created by LoginRadius Development Team
   Copyright 2019 LoginRadius Inc. All rights reserved.
*/
module.exports = function (config) {
  var module = {};
  var helper = require(config.HELPER_PATH)();

  /**
   * This API verifies the provided token for Smart Login
   * @param {verificationToken} Verification token received in the email
   * @param {welcomeEmailTemplate} Name of the welcome email template
   * @return Complete verified response data
   *8.4.1
   */

  module.smartLoginTokenVerification = function (
    verificationToken,
    welcomeEmailTemplate
  ) {
    if (helper.isNullOrWhiteSpace(verificationToken)) {
      return Promise.reject(helper.getValidationMessage('verificationToken'));
    }
    var queryParameters = {};

    queryParameters.apiKey = config.apiKey;
    queryParameters.verificationToken = verificationToken;
    if (!helper.isNullOrWhiteSpace(welcomeEmailTemplate)) {
      queryParameters.welcomeEmailTemplate = welcomeEmailTemplate;
    }

    var resourcePath = 'identity/v2/auth/email/smartlogin';

    return config.request('GET', resourcePath, queryParameters, null);
  };

  /**
   * This API sends a Smart Login link to the user's Email Id.
   * @param {clientGuid} Unique string used in the Smart Login request
   * @param {email} Email of the user
   * @param {redirectUrl} Url where the user will redirect after success authentication
   * @param {smartLoginEmailTemplate} Email template for Smart Login link
   * @param {welcomeEmailTemplate} Name of the welcome email template
   * @return Response containing Definition of Complete Validation data
   *9.17.1
   */

  module.smartLoginByEmail = function (
    clientGuid,
    email,
    redirectUrl,
    smartLoginEmailTemplate,
    welcomeEmailTemplate
  ) {
    if (helper.isNullOrWhiteSpace(clientGuid)) {
      return Promise.reject(helper.getValidationMessage('clientGuid'));
    }
    if (helper.isNullOrWhiteSpace(email)) {
      return Promise.reject(helper.getValidationMessage('email'));
    }
    var queryParameters = {};

    queryParameters.apiKey = config.apiKey;
    queryParameters.clientGuid = clientGuid;
    queryParameters.email = email;
    if (!helper.isNullOrWhiteSpace(redirectUrl)) {
      queryParameters.redirectUrl = redirectUrl;
    }
    if (!helper.isNullOrWhiteSpace(smartLoginEmailTemplate)) {
      queryParameters.smartLoginEmailTemplate = smartLoginEmailTemplate;
    }
    if (!helper.isNullOrWhiteSpace(welcomeEmailTemplate)) {
      queryParameters.welcomeEmailTemplate = welcomeEmailTemplate;
    }

    var resourcePath = 'identity/v2/auth/login/smartlogin';

    return config.request('GET', resourcePath, queryParameters, null);
  };

  /**
   * This API sends a Smart Login link to the user's Email Id.
   * @param {clientGuid} Unique string used in the Smart Login request
   * @param {username} UserName of the user
   * @param {redirectUrl} Url where the user will redirect after success authentication
   * @param {smartLoginEmailTemplate} Email template for Smart Login link
   * @param {welcomeEmailTemplate} Name of the welcome email template
   * @return Response containing Definition of Complete Validation data
   *9.17.2
   */

  module.smartLoginByUserName = function (
    clientGuid,
    username,
    redirectUrl,
    smartLoginEmailTemplate,
    welcomeEmailTemplate
  ) {
    if (helper.isNullOrWhiteSpace(clientGuid)) {
      return Promise.reject(helper.getValidationMessage('clientGuid'));
    }
    if (helper.isNullOrWhiteSpace(username)) {
      return Promise.reject(helper.getValidationMessage('username'));
    }
    var queryParameters = {};

    queryParameters.apiKey = config.apiKey;
    queryParameters.clientGuid = clientGuid;
    queryParameters.username = username;
    if (!helper.isNullOrWhiteSpace(redirectUrl)) {
      queryParameters.redirectUrl = redirectUrl;
    }
    if (!helper.isNullOrWhiteSpace(smartLoginEmailTemplate)) {
      queryParameters.smartLoginEmailTemplate = smartLoginEmailTemplate;
    }
    if (!helper.isNullOrWhiteSpace(welcomeEmailTemplate)) {
      queryParameters.welcomeEmailTemplate = welcomeEmailTemplate;
    }

    var resourcePath = 'identity/v2/auth/login/smartlogin';

    return config.request('GET', resourcePath, queryParameters, null);
  };

  /**
   * This API is used to check if the Smart Login link has been clicked or not
   * @param {clientGuid} Unique string used in the Smart Login request
   * @param {fields} The fields parameter filters the API response so that the response only includes a specific set of fields
   * @return Response containing User Profile Data and access token
   *9.21.1
   */

  module.smartLoginPing = function (clientGuid, fields) {
    if (helper.isNullOrWhiteSpace(clientGuid)) {
      return Promise.reject(helper.getValidationMessage('clientGuid'));
    }
    var queryParameters = {};

    queryParameters.apiKey = config.apiKey;
    queryParameters.clientGuid = clientGuid;
    if (!helper.isNullOrWhiteSpace(fields)) {
      queryParameters.fields = fields;
    }

    var resourcePath = 'identity/v2/auth/login/smartlogin/ping';

    return config.request('GET', resourcePath, queryParameters, null);
  };
  return module;
};

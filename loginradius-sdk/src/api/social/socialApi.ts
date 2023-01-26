/*
 * Created by LoginRadius Development Team
   Copyright 2019 LoginRadius Inc. All rights reserved.
*/
module.exports = function (config) {
  var module = {};
  var helper = require(config.HELPER_PATH)();

  /**
   * This API Is used to translate the Request Token returned during authentication into an Access Token that can be used with other API calls.
   * @param {token} Token generated from a successful oauth from social platform
   * @return Response containing Definition of Complete Token data
   *20.1
   */

  module.exchangeAccessToken = function (token) {
    if (helper.isNullOrWhiteSpace(token)) {
      return Promise.reject(helper.getValidationMessage('token'));
    }
    var queryParameters = {};

    queryParameters.secret = config.apiSecret;
    queryParameters.token = token;

    var resourcePath = 'api/v2/access_token';

    return config.request('GET', resourcePath, queryParameters, null);
  };

  /**
   * The Refresh Access Token API is used to refresh the provider access token after authentication. It will be valid for up to 60 days on LoginRadius depending on the provider. In order to use the access token in other APIs, always refresh the token using this API.<br><br><b>Supported Providers :</b> Facebook,Yahoo,Google,Twitter, Linkedin.<br><br> Contact LoginRadius support team to enable this API.
   * @param {accessToken} Uniquely generated identifier key by LoginRadius that is activated after successful authentication.
   * @param {expiresIn} Allows you to specify a desired expiration time in minutes for the newly issued access token.
   * @param {isWeb} Is web or not.
   * @return Response containing Definition of Complete Token data
   *20.2
   */

  module.refreshAccessToken = function (accessToken, expiresIn, isWeb) {
    if (helper.isNullOrWhiteSpace(accessToken)) {
      return Promise.reject(helper.getValidationMessage('accessToken'));
    }
    var queryParameters = {};

    queryParameters.access_token = accessToken;
    queryParameters.secret = config.apiSecret;
    if (expiresIn !== null) {
      queryParameters.expiresIn = expiresIn;
    }
    if (isWeb !== null) {
      queryParameters.isWeb = isWeb;
    }

    var resourcePath = 'api/v2/access_token/refresh';

    return config.request('GET', resourcePath, queryParameters, null);
  };

  /**
   * This API validates access token, if valid then returns a response with its expiry otherwise error.
   * @param {accessToken} Uniquely generated identifier key by LoginRadius that is activated after successful authentication.
   * @return Response containing Definition of Complete Token data
   *20.9
   */

  module.validateAccessToken = function (accessToken) {
    if (helper.isNullOrWhiteSpace(accessToken)) {
      return Promise.reject(helper.getValidationMessage('accessToken'));
    }
    var queryParameters = {};

    queryParameters.access_token = accessToken;
    queryParameters.key = config.apiKey;
    queryParameters.secret = config.apiSecret;

    var resourcePath = 'api/v2/access_token/validate';

    return config.request('GET', resourcePath, queryParameters, null);
  };

  /**
   * This api invalidates the active access token or expires an access token validity.
   * @param {accessToken} Uniquely generated identifier key by LoginRadius that is activated after successful authentication.
   * @return Response containing Definition for Complete Validation data
   *20.10
   */

  module.inValidateAccessToken = function (accessToken) {
    if (helper.isNullOrWhiteSpace(accessToken)) {
      return Promise.reject(helper.getValidationMessage('accessToken'));
    }
    var queryParameters = {};

    queryParameters.access_token = accessToken;
    queryParameters.key = config.apiKey;
    queryParameters.secret = config.apiSecret;

    var resourcePath = 'api/v2/access_token/invalidate';

    return config.request('GET', resourcePath, queryParameters, null);
  };

  /**
   * This api is use to get all active session by Access Token.
   * @param {token} Token generated from a successful oauth from social platform
   * @return Response containing Definition for Complete active sessions
   *20.11.1
   */

  module.getActiveSession = function (token) {
    if (helper.isNullOrWhiteSpace(token)) {
      return Promise.reject(helper.getValidationMessage('token'));
    }
    var queryParameters = {};

    queryParameters.key = config.apiKey;
    queryParameters.secret = config.apiSecret;
    queryParameters.token = token;

    var resourcePath = 'api/v2/access_token/activesession';

    return config.request('GET', resourcePath, queryParameters, null);
  };

  /**
   * This api is used to get all active sessions by AccountID(UID).
   * @param {accountId} UID, the unified identifier for each user account
   * @return Response containing Definition for Complete active sessions
   *20.11.2
   */

  module.getActiveSessionByAccountID = function (accountId) {
    if (helper.isNullOrWhiteSpace(accountId)) {
      return Promise.reject(helper.getValidationMessage('accountId'));
    }
    var queryParameters = {};

    queryParameters.accountId = accountId;
    queryParameters.key = config.apiKey;
    queryParameters.secret = config.apiSecret;

    var resourcePath = 'api/v2/access_token/activesession';

    return config.request('GET', resourcePath, queryParameters, null);
  };

  /**
   * This api is used to get all active sessions by ProfileId.
   * @param {profileId} Social Provider Id
   * @return Response containing Definition for Complete active sessions
   *20.11.3
   */

  module.getActiveSessionByProfileID = function (profileId) {
    if (helper.isNullOrWhiteSpace(profileId)) {
      return Promise.reject(helper.getValidationMessage('profileId'));
    }
    var queryParameters = {};

    queryParameters.key = config.apiKey;
    queryParameters.profileId = profileId;
    queryParameters.secret = config.apiSecret;

    var resourcePath = 'api/v2/access_token/activesession';

    return config.request('GET', resourcePath, queryParameters, null);
  };
  return module;
};

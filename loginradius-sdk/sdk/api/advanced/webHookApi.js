/*
 * Created by LoginRadius Development Team
   Copyright 2019 LoginRadius Inc. All rights reserved.
*/
module.exports = function (config) {
  var module = {};
  var helper = require(config.HELPER_PATH)();

  /**
   * This API is used to fatch all the subscribed URLs, for particular event
   * @param {event} Allowed events: Login, Register, UpdateProfile, ResetPassword, ChangePassword, emailVerification, AddEmail, RemoveEmail, BlockAccount, DeleteAccount, SetUsername, AssignRoles, UnassignRoles, SetPassword, LinkAccount, UnlinkAccount, UpdatePhoneId, VerifyPhoneNumber, CreateCustomObject, UpdateCustomobject, DeleteCustomObject
   * @return Response Containing List of Webhhook Data
   *40.1
   */

  module.getWebHookSubscribedURLs = function (event) {
    if (helper.isNullOrWhiteSpace(event)) {
      return Promise.reject(helper.getValidationMessage('event'));
    }
    var queryParameters = {};

    queryParameters.apikey = config.apiKey;
    queryParameters.apisecret = config.apiSecret;
    queryParameters.event = event;

    var resourcePath = 'api/v2/webhook';

    return config.request('GET', resourcePath, queryParameters, null);
  };

  /**
   * API can be used to configure a WebHook on your LoginRadius site. Webhooks also work on subscribe and notification model, subscribe your hook and get a notification. Equivalent to RESThook but these provide security on basis of signature and RESThook work on unique URL. Following are the events that are allowed by LoginRadius to trigger a WebHook service call.
   * @param {webHookSubscribeModel} Model Class containing Definition of payload for Webhook Subscribe API
   * @return Response containing Definition of Complete Validation data
   *40.2
   */

  module.webHookSubscribe = function (webHookSubscribeModel) {
    if (helper.checkJson(webHookSubscribeModel)) {
      return Promise.reject(
        helper.getValidationMessage('webHookSubscribeModel')
      );
    }
    var queryParameters = {};

    queryParameters.apikey = config.apiKey;
    queryParameters.apisecret = config.apiSecret;

    var resourcePath = 'api/v2/webhook';

    return config.request(
      'POST',
      resourcePath,
      queryParameters,
      webHookSubscribeModel
    );
  };

  /**
   * API can be used to test a subscribed WebHook.
   * @return Response containing Definition of Complete Validation data
   *40.3
   */

  module.webhookTest = function () {
    var queryParameters = {};

    queryParameters.apikey = config.apiKey;
    queryParameters.apisecret = config.apiSecret;

    var resourcePath = 'api/v2/webhook/test';

    return config.request('GET', resourcePath, queryParameters, null);
  };

  /**
   * API can be used to unsubscribe a WebHook configured on your LoginRadius site.
   * @param {webHookSubscribeModel} Model Class containing Definition of payload for Webhook Subscribe API
   * @return Response containing Definition of Delete Request
   *40.4
   */

  module.webHookUnsubscribe = function (webHookSubscribeModel) {
    if (helper.checkJson(webHookSubscribeModel)) {
      return Promise.reject(
        helper.getValidationMessage('webHookSubscribeModel')
      );
    }
    var queryParameters = {};

    queryParameters.apikey = config.apiKey;
    queryParameters.apisecret = config.apiSecret;

    var resourcePath = 'api/v2/webhook';

    return config.request(
      'DELETE',
      resourcePath,
      queryParameters,
      webHookSubscribeModel
    );
  };
  return module;
};

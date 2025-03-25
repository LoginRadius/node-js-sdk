/*
 * Created by LoginRadius Development Team
   Copyright 2025 LoginRadius Inc. All rights reserved.
*/
module.exports = function (config) {
  var module = {};
  var helper = require(config.HELPER_PATH)();

  /**
   * This API is used to get details of a webhook subscription by Id
   * @param {hookId} Unique ID of the webhook
   * @return Response containing Definition for Complete WebHook data
   *40.1
   */

  module.getWebhookSubscriptionDetail = function (hookId) {
    if (helper.isNullOrWhiteSpace(hookId)) {
      return Promise.reject(helper.getValidationMessage('hookId'));
    }
    var queryParameters = {};

    queryParameters.apikey = config.apiKey;
    queryParameters.apisecret = config.apiSecret;

    var resourcePath = 'v2/manage/webhooks/' + hookId;

    return config.request('GET', resourcePath, queryParameters, null);
  };

  /**
   * This API is used to create a new webhook subscription on your LoginRadius site.
   * @param {webHookSubscribeModel} Model Class containing Definition of payload for Webhook Subscribe API
   * @return Response containing Definition for Complete WebHook data
   *40.2
   */

  module.createWebhookSubscription = function (webHookSubscribeModel) {
    if (helper.checkJson(webHookSubscribeModel)) {
      return Promise.reject(helper.getValidationMessage('webHookSubscribeModel'));
    }
    var queryParameters = {};

    queryParameters.apikey = config.apiKey;
    queryParameters.apisecret = config.apiSecret;

    var resourcePath = 'v2/manage/webhooks';

    return config.request('POST', resourcePath, queryParameters, webHookSubscribeModel);
  };

  /**
   * This API is used to delete webhook subscription
   * @param {hookId} Unique ID of the webhook
   * @return Response containing Definition of Delete Request
   *40.3
   */

  module.deleteWebhookSubscription = function (hookId) {
    if (helper.isNullOrWhiteSpace(hookId)) {
      return Promise.reject(helper.getValidationMessage('hookId'));
    }
    var queryParameters = {};

    queryParameters.apikey = config.apiKey;
    queryParameters.apisecret = config.apiSecret;

    var resourcePath = 'v2/manage/webhooks/' + hookId;

    return config.request('DELETE', resourcePath, queryParameters, null);
  };

  /**
   * This API is used to update a webhook subscription
   * @param {hookId} Unique ID of the webhook
   * @param {webHookSubscriptionUpdateModel} Model Class containing Definition for WebHookSubscriptionUpdateModel Property
   * @return Response containing Definition for Complete WebHook data
   *40.4
   */

  module.updateWebhookSubscription = function (hookId, webHookSubscriptionUpdateModel) {
    if (helper.isNullOrWhiteSpace(hookId)) {
      return Promise.reject(helper.getValidationMessage('hookId'));
    }
    if (helper.checkJson(webHookSubscriptionUpdateModel)) {
      return Promise.reject(helper.getValidationMessage('webHookSubscriptionUpdateModel'));
    }
    var queryParameters = {};

    queryParameters.apikey = config.apiKey;
    queryParameters.apisecret = config.apiSecret;

    var resourcePath = 'v2/manage/webhooks/' + hookId;

    return config.request('PUT', resourcePath, queryParameters, webHookSubscriptionUpdateModel);
  };

  /**
   * This API is used to get the list of all the webhooks
   * @return Response Containing List of Webhhook Data
   *40.5
   */

  module.listAllWebhooks = function () {
    var queryParameters = {};

    queryParameters.apikey = config.apiKey;
    queryParameters.apisecret = config.apiSecret;

    var resourcePath = 'v2/manage/webhooks';

    return config.request('GET', resourcePath, queryParameters, null);
  };

  /**
   * This API is used to retrieve all the webhook events.
   * @return Model Class containing Definition for WebHookEventModel Property
   *40.6
   */

  module.getWebhookEvents = function () {
    var queryParameters = {};

    queryParameters.apikey = config.apiKey;
    queryParameters.apisecret = config.apiSecret;

    var resourcePath = 'v2/manage/webhooks/events';

    return config.request('GET', resourcePath, queryParameters, null);
  };
  return module;
};

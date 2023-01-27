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

export default class WebHookApi {
  // eslint-disable-next-line no-useless-constructor, no-unused-vars, no-empty-function
  constructor (private config: LoginRadiusConfig) {}

  /**
   * This API is used to fatch all the subscribed URLs, for particular event
   * @param {event} Allowed events: Login, Register, UpdateProfile, ResetPassword, ChangePassword, emailVerification, AddEmail, RemoveEmail, BlockAccount, DeleteAccount, SetUsername, AssignRoles, UnassignRoles, SetPassword, LinkAccount, UnlinkAccount, UpdatePhoneId, VerifyPhoneNumber, CreateCustomObject, UpdateCustomobject, DeleteCustomObject
   * @return Response Containing List of Webhhook Data
   *40.1
   */
  getWebHookSubscribedURLs (event) {
    if (isNullOrWhiteSpace(event)) {
      return Promise.reject(getValidationMessage('event'));
    }
    var queryParameters: any = {};

    queryParameters.apikey = this.config.apiKey;
    queryParameters.apisecret = this.config.apiSecret;
    queryParameters.event = event;

    var resourcePath = 'api/v2/webhook';

    return request(this.config, 'GET', resourcePath, queryParameters, null);
  }

  /**
   * API can be used to configure a WebHook on your LoginRadius site. Webhooks also work on subscribe and notification model, subscribe your hook and get a notification. Equivalent to RESThook but these provide security on basis of signature and RESThook work on unique URL. Following are the events that are allowed by LoginRadius to trigger a WebHook service call.
   * @param {webHookSubscribeModel} Model Class containing Definition of payload for Webhook Subscribe API
   * @return Response containing Definition of Complete Validation data
   *40.2
   */
  webHookSubscribe (webHookSubscribeModel) {
    if (checkJson(webHookSubscribeModel)) {
      return Promise.reject(getValidationMessage('webHookSubscribeModel'));
    }
    var queryParameters: any = {};

    queryParameters.apikey = this.config.apiKey;
    queryParameters.apisecret = this.config.apiSecret;

    var resourcePath = 'api/v2/webhook';

    return request(
      this.config,
      'POST',
      resourcePath,
      queryParameters,
      webHookSubscribeModel
    );
  }

  /**
   * API can be used to test a subscribed WebHook.
   * @return Response containing Definition of Complete Validation data
   *40.3
   */
  webhookTest () {
    var queryParameters: any = {};

    queryParameters.apikey = this.config.apiKey;
    queryParameters.apisecret = this.config.apiSecret;

    var resourcePath = 'api/v2/webhook/test';

    return request(this.config, 'GET', resourcePath, queryParameters, null);
  }

  /**
   * API can be used to unsubscribe a WebHook configured on your LoginRadius site.
   * @param {webHookSubscribeModel} Model Class containing Definition of payload for Webhook Subscribe API
   * @return Response containing Definition of Delete Request
   *40.4
   */
  webHookUnsubscribe (webHookSubscribeModel) {
    if (checkJson(webHookSubscribeModel)) {
      return Promise.reject(getValidationMessage('webHookSubscribeModel'));
    }
    var queryParameters: any = {};

    queryParameters.apikey = this.config.apiKey;
    queryParameters.apisecret = this.config.apiSecret;

    var resourcePath = 'api/v2/webhook';

    return request(
      this.config,
      'DELETE',
      resourcePath,
      queryParameters,
      webHookSubscribeModel
    );
  }
}

/*
 * Created by LoginRadius Development Team
   Copyright 2019 LoginRadius Inc. All rights reserved.
*/
import {
  getValidationMessage,
  isNullOrWhiteSpace,
  request
} from '../../util/helper';
import { LoginRadiusConfig } from '../../types';

export default class SmartLoginApi {
  // eslint-disable-next-line no-useless-constructor, no-unused-vars, no-empty-function
  constructor (private config: LoginRadiusConfig) {}

  /**
   * This API verifies the provided token for Smart Login
   * @param {verificationToken} Verification token received in the email
   * @param {welcomeEmailTemplate} Name of the welcome email template
   * @return Complete verified response data
   *8.4.1
   */
  smartLoginTokenVerification (verificationToken, welcomeEmailTemplate) {
    if (isNullOrWhiteSpace(verificationToken)) {
      return Promise.reject(getValidationMessage('verificationToken'));
    }
    var queryParameters: any = {};

    queryParameters.apiKey = this.config.apiKey;
    queryParameters.verificationToken = verificationToken;
    if (!isNullOrWhiteSpace(welcomeEmailTemplate)) {
      queryParameters.welcomeEmailTemplate = welcomeEmailTemplate;
    }

    var resourcePath = 'identity/v2/auth/email/smartlogin';

    return request(this.config, 'GET', resourcePath, queryParameters, null);
  }

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
  smartLoginByEmail (
    clientGuid,
    email,
    redirectUrl,
    smartLoginEmailTemplate,
    welcomeEmailTemplate
  ) {
    if (isNullOrWhiteSpace(clientGuid)) {
      return Promise.reject(getValidationMessage('clientGuid'));
    }
    if (isNullOrWhiteSpace(email)) {
      return Promise.reject(getValidationMessage('email'));
    }
    var queryParameters: any = {};

    queryParameters.apiKey = this.config.apiKey;
    queryParameters.clientGuid = clientGuid;
    queryParameters.email = email;
    if (!isNullOrWhiteSpace(redirectUrl)) {
      queryParameters.redirectUrl = redirectUrl;
    }
    if (!isNullOrWhiteSpace(smartLoginEmailTemplate)) {
      queryParameters.smartLoginEmailTemplate = smartLoginEmailTemplate;
    }
    if (!isNullOrWhiteSpace(welcomeEmailTemplate)) {
      queryParameters.welcomeEmailTemplate = welcomeEmailTemplate;
    }

    var resourcePath = 'identity/v2/auth/login/smartlogin';

    return request(this.config, 'GET', resourcePath, queryParameters, null);
  }

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
  smartLoginByUserName (
    clientGuid,
    username,
    redirectUrl,
    smartLoginEmailTemplate,
    welcomeEmailTemplate
  ) {
    if (isNullOrWhiteSpace(clientGuid)) {
      return Promise.reject(getValidationMessage('clientGuid'));
    }
    if (isNullOrWhiteSpace(username)) {
      return Promise.reject(getValidationMessage('username'));
    }
    var queryParameters: any = {};

    queryParameters.apiKey = this.config.apiKey;
    queryParameters.clientGuid = clientGuid;
    queryParameters.username = username;
    if (!isNullOrWhiteSpace(redirectUrl)) {
      queryParameters.redirectUrl = redirectUrl;
    }
    if (!isNullOrWhiteSpace(smartLoginEmailTemplate)) {
      queryParameters.smartLoginEmailTemplate = smartLoginEmailTemplate;
    }
    if (!isNullOrWhiteSpace(welcomeEmailTemplate)) {
      queryParameters.welcomeEmailTemplate = welcomeEmailTemplate;
    }

    var resourcePath = 'identity/v2/auth/login/smartlogin';

    return request(this.config, 'GET', resourcePath, queryParameters, null);
  }

  /**
   * This API is used to check if the Smart Login link has been clicked or not
   * @param {clientGuid} Unique string used in the Smart Login request
   * @param {fields} The fields parameter filters the API response so that the response only includes a specific set of fields
   * @return Response containing User Profile Data and access token
   *9.21.1
   */
  smartLoginPing (clientGuid, fields) {
    if (isNullOrWhiteSpace(clientGuid)) {
      return Promise.reject(getValidationMessage('clientGuid'));
    }
    var queryParameters: any = {};

    queryParameters.apiKey = this.config.apiKey;
    queryParameters.clientGuid = clientGuid;
    if (!isNullOrWhiteSpace(fields)) {
      queryParameters.fields = fields;
    }

    var resourcePath = 'identity/v2/auth/login/smartlogin/ping';

    return request(this.config, 'GET', resourcePath, queryParameters, null);
  }
}

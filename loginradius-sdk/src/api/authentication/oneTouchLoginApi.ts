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

export default class OneTouchLoginApi {
  // eslint-disable-next-line no-useless-constructor, no-unused-vars, no-empty-function
  constructor (private config: LoginRadiusConfig) {}

  /**
   * This API is used to send a link to a specified email for a frictionless login/registration
   * @param {oneTouchLoginByEmailModel} Model Class containing Definition of payload for OneTouchLogin By EmailModel API
   * @param {oneTouchLoginEmailTemplate} Name of the One Touch Login Email Template
   * @param {redirecturl} Url where the user will redirect after success authentication
   * @param {welcomeemailtemplate} Name of the welcome email template
   * @return Response containing Definition of Complete Validation data
   *1.2
   */
  oneTouchLoginByEmail (
    oneTouchLoginByEmailModel,
    oneTouchLoginEmailTemplate,
    redirecturl,
    welcomeemailtemplate
  ) {
    if (checkJson(oneTouchLoginByEmailModel)) {
      return Promise.reject(getValidationMessage('oneTouchLoginByEmailModel'));
    }
    var queryParameters: any = {};

    queryParameters.apiKey = this.config.apiKey;
    if (!isNullOrWhiteSpace(oneTouchLoginEmailTemplate)) {
      queryParameters.oneTouchLoginEmailTemplate = oneTouchLoginEmailTemplate;
    }
    if (!isNullOrWhiteSpace(redirecturl)) {
      queryParameters.redirecturl = redirecturl;
    }
    if (!isNullOrWhiteSpace(welcomeemailtemplate)) {
      queryParameters.welcomeemailtemplate = welcomeemailtemplate;
    }

    var resourcePath = 'identity/v2/auth/onetouchlogin/email';

    return request(
      this.config,
      'POST',
      resourcePath,
      queryParameters,
      oneTouchLoginByEmailModel
    );
  }

  /**
   * This API is used to send one time password to a given phone number for a frictionless login/registration.
   * @param {oneTouchLoginByPhoneModel} Model Class containing Definition of payload for OneTouchLogin By PhoneModel API
   * @param {smsTemplate} SMS Template name
   * @return Response containing Definition of Complete Validation data
   *1.4
   */
  oneTouchLoginByPhone (oneTouchLoginByPhoneModel, smsTemplate) {
    if (checkJson(oneTouchLoginByPhoneModel)) {
      return Promise.reject(getValidationMessage('oneTouchLoginByPhoneModel'));
    }
    var queryParameters: any = {};

    queryParameters.apiKey = this.config.apiKey;
    if (!isNullOrWhiteSpace(smsTemplate)) {
      queryParameters.smsTemplate = smsTemplate;
    }

    var resourcePath = 'identity/v2/auth/onetouchlogin/phone';

    return request(
      this.config,
      'POST',
      resourcePath,
      queryParameters,
      oneTouchLoginByPhoneModel
    );
  }

  /**
   * This API is used to verify the otp for One Touch Login.
   * @param {otp} The Verification Code
   * @param {phone} New Phone Number
   * @param {fields} The fields parameter filters the API response so that the response only includes a specific set of fields
   * @param {smsTemplate} SMS Template name
   * @return Response Containing Access Token and Complete Profile Data
   *1.5
   */
  oneTouchLoginOTPVerification (otp, phone, fields, smsTemplate) {
    if (isNullOrWhiteSpace(otp)) {
      return Promise.reject(getValidationMessage('otp'));
    }
    if (isNullOrWhiteSpace(phone)) {
      return Promise.reject(getValidationMessage('phone'));
    }
    var queryParameters: any = {};

    queryParameters.apiKey = this.config.apiKey;
    queryParameters.otp = otp;
    if (!isNullOrWhiteSpace(fields)) {
      queryParameters.fields = fields;
    }
    if (!isNullOrWhiteSpace(smsTemplate)) {
      queryParameters.smsTemplate = smsTemplate;
    }

    var bodyParameters: any = {};
    bodyParameters.phone = phone;

    var resourcePath = 'identity/v2/auth/onetouchlogin/phone/verify';

    return request(
      this.config,
      'PUT',
      resourcePath,
      queryParameters,
      bodyParameters
    );
  }

  /**
   * This API verifies the provided token for One Touch Login
   * @param {verificationToken} Verification token received in the email
   * @param {welcomeEmailTemplate} Name of the welcome email template
   * @return Complete verified response data
   *8.4.2
   */
  oneTouchEmailVerification (verificationToken, welcomeEmailTemplate) {
    if (isNullOrWhiteSpace(verificationToken)) {
      return Promise.reject(getValidationMessage('verificationToken'));
    }
    var queryParameters: any = {};

    queryParameters.apiKey = this.config.apiKey;
    queryParameters.verificationToken = verificationToken;
    if (!isNullOrWhiteSpace(welcomeEmailTemplate)) {
      queryParameters.welcomeEmailTemplate = welcomeEmailTemplate;
    }

    var resourcePath = 'identity/v2/auth/email/onetouchlogin';

    return request(this.config, 'GET', resourcePath, queryParameters, null);
  }

  /**
   * This API is used to check if the One Touch Login link has been clicked or not.
   * @param {clientGuid} Unique string used in the Smart Login request
   * @param {fields} The fields parameter filters the API response so that the response only includes a specific set of fields
   * @return Response containing User Profile Data and access token
   *9.21.2
   */
  oneTouchLoginPing (clientGuid, fields) {
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

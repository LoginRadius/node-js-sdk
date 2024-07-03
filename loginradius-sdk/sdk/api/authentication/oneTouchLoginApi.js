/*
 * Created by LoginRadius Development Team
   Copyright 2019 LoginRadius Inc. All rights reserved.
*/
module.exports = function (config) {
  var module = {};
  var helper = require(config.HELPER_PATH)();

  /**
   * This API is used to send a link to a specified email for a frictionless login/registration
   * @param {oneTouchLoginByEmailModel} Model Class containing Definition of payload for OneTouchLogin By EmailModel API
   * @param {oneTouchLoginEmailTemplate} Name of the One Touch Login Email Template
   * @param {redirecturl} Url where the user will redirect after success authentication
   * @param {welcomeemailtemplate} Name of the welcome email template
   * @return Response containing Definition of Complete Validation data
   *1.2
   */

  module.oneTouchLoginByEmail = function (
    oneTouchLoginByEmailModel,
    oneTouchLoginEmailTemplate,
    redirecturl,
    welcomeemailtemplate
  ) {
    if (helper.checkJson(oneTouchLoginByEmailModel)) {
      return Promise.reject(
        helper.getValidationMessage('oneTouchLoginByEmailModel')
      );
    }
    var queryParameters = {};

    queryParameters.apiKey = config.apiKey;
    if (!helper.isNullOrWhiteSpace(oneTouchLoginEmailTemplate)) {
      queryParameters.oneTouchLoginEmailTemplate = oneTouchLoginEmailTemplate;
    }
    if (!helper.isNullOrWhiteSpace(redirecturl)) {
      queryParameters.redirecturl = redirecturl;
    }
    if (!helper.isNullOrWhiteSpace(welcomeemailtemplate)) {
      queryParameters.welcomeemailtemplate = welcomeemailtemplate;
    }

    var resourcePath = 'identity/v2/auth/onetouchlogin/email';

    return config.request(
      'POST',
      resourcePath,
      queryParameters,
      oneTouchLoginByEmailModel
    );
  };

  /**
   * This API is used to send one time password to a given phone number for a frictionless login/registration.
   * @param {oneTouchLoginByPhoneModel} Model Class containing Definition of payload for OneTouchLogin By PhoneModel API
   * @param {smsTemplate} SMS Template name
   * @param {isVoiceOtp} Boolean, pass true if you wish to trigger voice OTP
   * @return Response containing Definition of Complete Validation data
   *1.4
   */

  module.oneTouchLoginByPhone = function (
    oneTouchLoginByPhoneModel,
    smsTemplate,
    isVoiceOtp
  ) {
    if (helper.checkJson(oneTouchLoginByPhoneModel)) {
      return Promise.reject(
        helper.getValidationMessage('oneTouchLoginByPhoneModel')
      );
    }
    var queryParameters = {};

    queryParameters.apiKey = config.apiKey;
    if (!helper.isNullOrWhiteSpace(smsTemplate)) {
      queryParameters.smsTemplate = smsTemplate;
    }
    if (isVoiceOtp !== null) {
      queryParameters.isVoiceOtp = isVoiceOtp;
    }

    var resourcePath = 'identity/v2/auth/onetouchlogin/phone';

    return config.request(
      'POST',
      resourcePath,
      queryParameters,
      oneTouchLoginByPhoneModel
    );
  };

  /**
   * This API is used to verify the otp for One Touch Login.
   * @param {otp} The Verification Code
   * @param {phone} New Phone Number
   * @param {fields} The fields parameter filters the API response so that the response only includes a specific set of fields
   * @param {smsTemplate} SMS Template name
   * @return Response Containing Access Token and Complete Profile Data
   *1.5
   */

  module.oneTouchLoginOTPVerification = function (
    otp,
    phone,
    fields,
    smsTemplate
  ) {
    if (helper.isNullOrWhiteSpace(otp)) {
      return Promise.reject(helper.getValidationMessage('otp'));
    }
    if (helper.isNullOrWhiteSpace(phone)) {
      return Promise.reject(helper.getValidationMessage('phone'));
    }
    var queryParameters = {};

    queryParameters.apiKey = config.apiKey;
    queryParameters.otp = otp;
    if (!helper.isNullOrWhiteSpace(fields)) {
      queryParameters.fields = fields;
    }
    if (!helper.isNullOrWhiteSpace(smsTemplate)) {
      queryParameters.smsTemplate = smsTemplate;
    }

    var bodyParameters = {};
    bodyParameters.phone = phone;

    var resourcePath = 'identity/v2/auth/onetouchlogin/phone/verify';

    return config.request('PUT', resourcePath, queryParameters, bodyParameters);
  };

  /**
   * This API verifies the provided token for One Touch Login
   * @param {verificationToken} Verification token received in the email
   * @param {welcomeEmailTemplate} Name of the welcome email template
   * @return Complete verified response data
   *8.4.2
   */

  module.oneTouchEmailVerification = function (
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

    var resourcePath = 'identity/v2/auth/email/onetouchlogin';

    return config.request('GET', resourcePath, queryParameters, null);
  };

  /**
   * This API is used to check if the One Touch Login link has been clicked or not.
   * @param {clientGuid} Unique string used in the Smart Login request
   * @param {fields} The fields parameter filters the API response so that the response only includes a specific set of fields
   * @return Response containing User Profile Data and access token
   *9.21.2
   */

  module.oneTouchLoginPing = function (clientGuid, fields) {
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

/*
 * Created by LoginRadius Development Team
   Copyright 2019 LoginRadius Inc. All rights reserved.
*/
module.exports = function (config) {
  var module = {};
  var helper = require(config.HELPER_PATH)();

  /**
   * This API verifies an account by OTP and allows the customer to login.
   * @param {passwordLessLoginOtpModel} Model Class containing Definition of payload for PasswordLessLoginOtpModel API
   * @param {fields} The fields parameter filters the API response so that the response only includes a specific set of fields
   * @param {smsTemplate} SMS Template name
   * @return Response containing User Profile Data and access token
   *9.6
   */

  module.passwordlessLoginPhoneVerification = function (
    passwordLessLoginOtpModel,
    fields,
    smsTemplate
  ) {
    if (helper.checkJson(passwordLessLoginOtpModel)) {
      return Promise.reject(
        helper.getValidationMessage('passwordLessLoginOtpModel')
      );
    }
    var queryParameters = {};

    queryParameters.apiKey = config.apiKey;
    if (!helper.isNullOrWhiteSpace(fields)) {
      queryParameters.fields = fields;
    }
    if (!helper.isNullOrWhiteSpace(smsTemplate)) {
      queryParameters.smsTemplate = smsTemplate;
    }

    var resourcePath = 'identity/v2/auth/login/passwordlesslogin/otp/verify';

    return config.request(
      'PUT',
      resourcePath,
      queryParameters,
      passwordLessLoginOtpModel
    );
  };

  /**
   * API can be used to send a One-time Passcode (OTP) provided that the account has a verified PhoneID
   * @param {phone} The Registered Phone Number
   * @param {smsTemplate} SMS Template name
   * @return Response Containing Definition of SMS Data
   *9.15
   */

  module.passwordlessLoginByPhone = function (phone, smsTemplate) {
    if (helper.isNullOrWhiteSpace(phone)) {
      return Promise.reject(helper.getValidationMessage('phone'));
    }
    var queryParameters = {};

    queryParameters.apiKey = config.apiKey;
    queryParameters.phone = phone;
    if (!helper.isNullOrWhiteSpace(smsTemplate)) {
      queryParameters.smsTemplate = smsTemplate;
    }

    var resourcePath = 'identity/v2/auth/login/passwordlesslogin/otp';

    return config.request('GET', resourcePath, queryParameters, null);
  };

  /**
   * This API is used to send a Passwordless Login verification link to the provided Email ID
   * @param {email} Email of the user
   * @param {passwordLessLoginTemplate} Passwordless Login Template Name
   * @param {verificationUrl} Email verification url
   * @return Response containing Definition of Complete Validation data
   *9.18.1
   */

  module.passwordlessLoginByEmail = function (
    email,
    passwordLessLoginTemplate,
    verificationUrl
  ) {
    if (helper.isNullOrWhiteSpace(email)) {
      return Promise.reject(helper.getValidationMessage('email'));
    }
    var queryParameters = {};

    queryParameters.apiKey = config.apiKey;
    queryParameters.email = email;
    if (!helper.isNullOrWhiteSpace(passwordLessLoginTemplate)) {
      queryParameters.passwordLessLoginTemplate = passwordLessLoginTemplate;
    }
    if (!helper.isNullOrWhiteSpace(verificationUrl)) {
      queryParameters.verificationUrl = verificationUrl;
    }

    var resourcePath = 'identity/v2/auth/login/passwordlesslogin/email';

    return config.request('GET', resourcePath, queryParameters, null);
  };

  /**
   * This API is used to send a Passwordless Login Verification Link to a customer by providing their UserName
   * @param {username} UserName of the user
   * @param {passwordLessLoginTemplate} Passwordless Login Template Name
   * @param {verificationUrl} Email verification url
   * @return Response containing Definition of Complete Validation data
   *9.18.2
   */

  module.passwordlessLoginByUserName = function (
    username,
    passwordLessLoginTemplate,
    verificationUrl
  ) {
    if (helper.isNullOrWhiteSpace(username)) {
      return Promise.reject(helper.getValidationMessage('username'));
    }
    var queryParameters = {};

    queryParameters.apiKey = config.apiKey;
    queryParameters.username = username;
    if (!helper.isNullOrWhiteSpace(passwordLessLoginTemplate)) {
      queryParameters.passwordLessLoginTemplate = passwordLessLoginTemplate;
    }
    if (!helper.isNullOrWhiteSpace(verificationUrl)) {
      queryParameters.verificationUrl = verificationUrl;
    }

    var resourcePath = 'identity/v2/auth/login/passwordlesslogin/email';

    return config.request('GET', resourcePath, queryParameters, null);
  };

  /**
   * This API is used to verify the Passwordless Login verification link. Note: If you are using Passwordless Login by Phone you will need to use the Passwordless Login Phone Verification API
   * @param {verificationToken} Verification token received in the email
   * @param {fields} The fields parameter filters the API response so that the response only includes a specific set of fields
   * @param {welcomeEmailTemplate} Name of the welcome email template
   * @return Response containing User Profile Data and access token
   *9.19
   */

  module.passwordlessLoginVerification = function (
    verificationToken,
    fields,
    welcomeEmailTemplate
  ) {
    if (helper.isNullOrWhiteSpace(verificationToken)) {
      return Promise.reject(helper.getValidationMessage('verificationToken'));
    }
    var queryParameters = {};

    queryParameters.apikey = config.apiKey;
    queryParameters.verificationToken = verificationToken;
    if (!helper.isNullOrWhiteSpace(fields)) {
      queryParameters.fields = fields;
    }
    if (!helper.isNullOrWhiteSpace(welcomeEmailTemplate)) {
      queryParameters.welcomeEmailTemplate = welcomeEmailTemplate;
    }

    var resourcePath = 'identity/v2/auth/login/passwordlesslogin/email/verify';

    return config.request('GET', resourcePath, queryParameters, null);
  };

  /**
   * This API is used to verify the otp sent to the email when doing a passwordless login.
   * @param {passwordLessLoginByEmailAndOtpModel} payload
   * @param {fields} Fields
   * @return Response containing User Profile Data and access token
   *9.23
   */

  module.passwordlessLoginVerificationByEmailAndOTP = function (
    passwordLessLoginByEmailAndOtpModel,
    fields
  ) {
    if (helper.checkJson(passwordLessLoginByEmailAndOtpModel)) {
      return Promise.reject(
        helper.getValidationMessage('passwordLessLoginByEmailAndOtpModel')
      );
    }
    var queryParameters = {};

    queryParameters.apiKey = config.apiKey;
    if (!helper.isNullOrWhiteSpace(fields)) {
      queryParameters.fields = fields;
    }

    var resourcePath =
      'identity/v2/auth/login/passwordlesslogin/email/verifyotp';

    return config.request(
      'POST',
      resourcePath,
      queryParameters,
      passwordLessLoginByEmailAndOtpModel
    );
  };

  /**
   * This API is used to verify the otp sent to the email when doing a passwordless login.
   * @param {passwordLessLoginByUserNameAndOtpModel} payload
   * @param {fields} Fields
   * @return Response containing User Profile Data and access token
   *9.24
   */

  module.passwordlessLoginVerificationByUserNameAndOTP = function (
    passwordLessLoginByUserNameAndOtpModel,
    fields
  ) {
    if (helper.checkJson(passwordLessLoginByUserNameAndOtpModel)) {
      return Promise.reject(
        helper.getValidationMessage('passwordLessLoginByUserNameAndOtpModel')
      );
    }
    var queryParameters = {};

    queryParameters.apiKey = config.apiKey;
    if (!helper.isNullOrWhiteSpace(fields)) {
      queryParameters.fields = fields;
    }

    var resourcePath =
      'identity/v2/auth/login/passwordlesslogin/username/verifyotp';

    return config.request(
      'POST',
      resourcePath,
      queryParameters,
      passwordLessLoginByUserNameAndOtpModel
    );
  };
  return module;
};

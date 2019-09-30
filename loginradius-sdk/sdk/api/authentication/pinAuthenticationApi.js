/*
 * Created by LoginRadius Development Team
   Copyright 2019 LoginRadius Inc. All rights reserved.
*/
module.exports = function (config) {
  var module = {};
  var helper = require(config.HELPER_PATH);

  /**
  * This API is used to login a user by pin and session_token.
  * @param {loginByPINModel} Model Class containing Definition of payload for LoginByPin API
  * @param {sessionToken} Session Token of user
  * @return Response containing User Profile Data and access token
  *9.22
  */

  module.pinLogin = function (loginByPINModel, sessionToken) {
    if (helper.checkJson(loginByPINModel)) {
      return Promise.reject(helper.getValidationMessage('loginByPINModel'));
    }
    if (helper.isNullOrWhiteSpace(sessionToken)) {
      return Promise.reject(helper.getValidationMessage('sessionToken'));
    }
    var queryParameters = {};

    queryParameters.apiKey = config.apiKey;
    queryParameters.session_token = sessionToken;

    var resourcePath = 'identity/v2/auth/login/pin';

    return config.request('POST', resourcePath, queryParameters, loginByPINModel);
  };

  /**
  * This API sends the reset pin email to specified email address.
  * @param {forgotPINLinkByEmailModel} Model Class containing Definition for Forgot Pin Link By Email API
  * @param {emailTemplate} Email template name
  * @param {resetPINUrl} Reset PIN Url
  * @return Response containing Definition of Complete Validation data
  *42.1
  */

  module.sendForgotPINEmailByEmail = function (forgotPINLinkByEmailModel, emailTemplate,
    resetPINUrl) {
    if (helper.checkJson(forgotPINLinkByEmailModel)) {
      return Promise.reject(helper.getValidationMessage('forgotPINLinkByEmailModel'));
    }
    var queryParameters = {};

    queryParameters.apiKey = config.apiKey;
    if (!helper.isNullOrWhiteSpace(emailTemplate)) {
      queryParameters.emailTemplate = emailTemplate;
    }
    if (!helper.isNullOrWhiteSpace(resetPINUrl)) {
      queryParameters.resetPINUrl = resetPINUrl;
    }

    var resourcePath = 'identity/v2/auth/pin/forgot/email';

    return config.request('POST', resourcePath, queryParameters, forgotPINLinkByEmailModel);
  };

  /**
  * This API sends the reset pin email using username.
  * @param {forgotPINLinkByUserNameModel} Model Class containing Definition for Forgot Pin Link By UserName API
  * @param {emailTemplate} Email template name
  * @param {resetPINUrl} Reset PIN Url
  * @return Response containing Definition of Complete Validation data
  *42.2
  */

  module.sendForgotPINEmailByUsername = function (forgotPINLinkByUserNameModel, emailTemplate,
    resetPINUrl) {
    if (helper.checkJson(forgotPINLinkByUserNameModel)) {
      return Promise.reject(helper.getValidationMessage('forgotPINLinkByUserNameModel'));
    }
    var queryParameters = {};

    queryParameters.apiKey = config.apiKey;
    if (!helper.isNullOrWhiteSpace(emailTemplate)) {
      queryParameters.emailTemplate = emailTemplate;
    }
    if (!helper.isNullOrWhiteSpace(resetPINUrl)) {
      queryParameters.resetPINUrl = resetPINUrl;
    }

    var resourcePath = 'identity/v2/auth/pin/forgot/username';

    return config.request('POST', resourcePath, queryParameters, forgotPINLinkByUserNameModel);
  };

  /**
  * This API is used to reset pin using reset token.
  * @param {resetPINByResetToken} Model Class containing Definition of payload for Reset Pin By Reset Token API
  * @return Response containing Definition of Complete Validation data
  *42.3
  */

  module.resetPINByResetToken = function (resetPINByResetToken) {
    if (helper.checkJson(resetPINByResetToken)) {
      return Promise.reject(helper.getValidationMessage('resetPINByResetToken'));
    }
    var queryParameters = {};

    queryParameters.apiKey = config.apiKey;

    var resourcePath = 'identity/v2/auth/pin/reset/token';

    return config.request('PUT', resourcePath, queryParameters, resetPINByResetToken);
  };

  /**
  * This API is used to reset pin using security question answer and email.
  * @param {resetPINBySecurityQuestionAnswerAndEmailModel} Model Class containing Definition of payload for Reset Pin By Security Question and Email API
  * @return Response containing Definition of Complete Validation data
  *42.4
  */

  module.resetPINByEmailAndSecurityAnswer = function (resetPINBySecurityQuestionAnswerAndEmailModel) {
    if (helper.checkJson(resetPINBySecurityQuestionAnswerAndEmailModel)) {
      return Promise.reject(helper.getValidationMessage('resetPINBySecurityQuestionAnswerAndEmailModel'));
    }
    var queryParameters = {};

    queryParameters.apiKey = config.apiKey;

    var resourcePath = 'identity/v2/auth/pin/reset/securityanswer/email';

    return config.request('PUT', resourcePath, queryParameters, resetPINBySecurityQuestionAnswerAndEmailModel);
  };

  /**
  * This API is used to reset pin using security question answer and username.
  * @param {resetPINBySecurityQuestionAnswerAndUsernameModel} Model Class containing Definition of payload for Reset Pin By Security Question and UserName API
  * @return Response containing Definition of Complete Validation data
  *42.5
  */

  module.resetPINByUsernameAndSecurityAnswer = function (resetPINBySecurityQuestionAnswerAndUsernameModel) {
    if (helper.checkJson(resetPINBySecurityQuestionAnswerAndUsernameModel)) {
      return Promise.reject(helper.getValidationMessage('resetPINBySecurityQuestionAnswerAndUsernameModel'));
    }
    var queryParameters = {};

    queryParameters.apiKey = config.apiKey;

    var resourcePath = 'identity/v2/auth/pin/reset/securityanswer/username';

    return config.request('PUT', resourcePath, queryParameters, resetPINBySecurityQuestionAnswerAndUsernameModel);
  };

  /**
  * This API is used to reset pin using security question answer and phone.
  * @param {resetPINBySecurityQuestionAnswerAndPhoneModel} Model Class containing Definition of payload for Reset Pin By Security Question and Phone API
  * @return Response containing Definition of Complete Validation data
  *42.6
  */

  module.resetPINByPhoneAndSecurityAnswer = function (resetPINBySecurityQuestionAnswerAndPhoneModel) {
    if (helper.checkJson(resetPINBySecurityQuestionAnswerAndPhoneModel)) {
      return Promise.reject(helper.getValidationMessage('resetPINBySecurityQuestionAnswerAndPhoneModel'));
    }
    var queryParameters = {};

    queryParameters.apiKey = config.apiKey;

    var resourcePath = 'identity/v2/auth/pin/reset/securityanswer/phone';

    return config.request('PUT', resourcePath, queryParameters, resetPINBySecurityQuestionAnswerAndPhoneModel);
  };

  /**
  * This API sends the OTP to specified phone number
  * @param {forgotPINOtpByPhoneModel} Model Class containing Definition for Forgot Pin Otp By Phone API
  * @param {smsTemplate} 
  * @return Response Containing Validation Data and SMS Data
  *42.7
  */

  module.sendForgotPINSMSByPhone = function (forgotPINOtpByPhoneModel, smsTemplate) {
    if (helper.checkJson(forgotPINOtpByPhoneModel)) {
      return Promise.reject(helper.getValidationMessage('forgotPINOtpByPhoneModel'));
    }
    var queryParameters = {};

    queryParameters.apiKey = config.apiKey;
    if (!helper.isNullOrWhiteSpace(smsTemplate)) {
      queryParameters.smsTemplate = smsTemplate;
    }

    var resourcePath = 'identity/v2/auth/pin/forgot/otp';

    return config.request('POST', resourcePath, queryParameters, forgotPINOtpByPhoneModel);
  };

  /**
  * This API is used to change a user's PIN using access token.
  * @param {accessToken} Uniquely generated identifier key by LoginRadius that is activated after successful authentication.
  * @param {changePINModel} Model Class containing Definition for change PIN Property
  * @return Response containing Definition of Complete Validation data
  *42.8
  */

  module.changePINByAccessToken = function (accessToken, changePINModel) {
    if (helper.isNullOrWhiteSpace(accessToken)) {
      return Promise.reject(helper.getValidationMessage('accessToken'));
    }
    if (helper.checkJson(changePINModel)) {
      return Promise.reject(helper.getValidationMessage('changePINModel'));
    }
    var queryParameters = {};

    queryParameters.access_token = accessToken;
    queryParameters.apiKey = config.apiKey;

    var resourcePath = 'identity/v2/auth/pin/change';

    return config.request('PUT', resourcePath, queryParameters, changePINModel);
  };

  /**
  * This API is used to reset pin using phoneId and OTP.
  * @param {resetPINByPhoneAndOTPModel} Model Class containing Definition of payload for Reset Pin By Phone and Otp API
  * @return Response containing Definition of Complete Validation data
  *42.9
  */

  module.resetPINByPhoneAndOtp = function (resetPINByPhoneAndOTPModel) {
    if (helper.checkJson(resetPINByPhoneAndOTPModel)) {
      return Promise.reject(helper.getValidationMessage('resetPINByPhoneAndOTPModel'));
    }
    var queryParameters = {};

    queryParameters.apiKey = config.apiKey;

    var resourcePath = 'identity/v2/auth/pin/reset/otp/phone';

    return config.request('PUT', resourcePath, queryParameters, resetPINByPhoneAndOTPModel);
  };

  /**
  * This API is used to reset pin using email and OTP.
  * @param {resetPINByEmailAndOtpModel} Model Class containing Definition of payload for Reset Pin By Email and Otp API
  * @return Response containing Definition of Complete Validation data
  *42.10
  */

  module.resetPINByEmailAndOtp = function (resetPINByEmailAndOtpModel) {
    if (helper.checkJson(resetPINByEmailAndOtpModel)) {
      return Promise.reject(helper.getValidationMessage('resetPINByEmailAndOtpModel'));
    }
    var queryParameters = {};

    queryParameters.apiKey = config.apiKey;

    var resourcePath = 'identity/v2/auth/pin/reset/otp/email';

    return config.request('PUT', resourcePath, queryParameters, resetPINByEmailAndOtpModel);
  };

  /**
  * This API is used to reset pin using username and OTP.
  * @param {resetPINByUsernameAndOtpModel} Model Class containing Definition of payload for Reset Pin By Username and Otp API
  * @return Response containing Definition of Complete Validation data
  *42.11
  */

  module.resetPINByUsernameAndOtp = function (resetPINByUsernameAndOtpModel) {
    if (helper.checkJson(resetPINByUsernameAndOtpModel)) {
      return Promise.reject(helper.getValidationMessage('resetPINByUsernameAndOtpModel'));
    }
    var queryParameters = {};

    queryParameters.apiKey = config.apiKey;

    var resourcePath = 'identity/v2/auth/pin/reset/otp/username';

    return config.request('PUT', resourcePath, queryParameters, resetPINByUsernameAndOtpModel);
  };

  /**
  * This API is used to change a user's PIN using Pin Auth token.
  * @param {pINRequiredModel} Model Class containing Definition for PIN
  * @param {pinAuthToken} Pin Auth Token
  * @return Response containing User Profile Data and access token
  *42.12
  */

  module.setPINByPinAuthToken = function (pINRequiredModel, pinAuthToken) {
    if (helper.checkJson(pINRequiredModel)) {
      return Promise.reject(helper.getValidationMessage('pINRequiredModel'));
    }
    if (helper.isNullOrWhiteSpace(pinAuthToken)) {
      return Promise.reject(helper.getValidationMessage('pinAuthToken'));
    }
    var queryParameters = {};

    queryParameters.apiKey = config.apiKey;
    queryParameters.pinAuthToken = pinAuthToken;

    var resourcePath = 'identity/v2/auth/pin/set/pinauthtoken';

    return config.request('POST', resourcePath, queryParameters, pINRequiredModel);
  };

  /**
  * This API is used to invalidate pin session token.
  * @param {sessionToken} Session Token of user
  * @return Response containing Definition of Complete Validation data
  *44.1
  */

  module.inValidatePinSessionToken = function (sessionToken) {
    if (helper.isNullOrWhiteSpace(sessionToken)) {
      return Promise.reject(helper.getValidationMessage('sessionToken'));
    }
    var queryParameters = {};

    queryParameters.apiKey = config.apiKey;
    queryParameters.session_token = sessionToken;

    var resourcePath = 'identity/v2/auth/session_token/invalidate';

    return config.request('GET', resourcePath, queryParameters, null);
  };
  return module;
};

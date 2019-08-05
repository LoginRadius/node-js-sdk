/*
 * Created by LoginRadius Development Team
   Copyright 2019 LoginRadius Inc. All rights reserved.
*/
module.exports = function (config) {
  var module = {};
  var helper = require(config.HELPER_PATH);

  /**
  * This API retrieves a copy of the user data based on the Phone
  * @param {phoneAuthenticationModel} Model Class containing Definition of payload for PhoneAuthenticationModel API
  * @param {fields} The fields parameter filters the API response so that the response only includes a specific set of fields
  * @param {loginUrl} Url where the user is logging from
  * @param {smsTemplate} SMS Template name
  * @return Response containing User Profile Data and access token
  *9.2.3
  */

  module.loginByPhone = function (phoneAuthenticationModel, fields,
    loginUrl, smsTemplate) {
    if (helper.checkJson(phoneAuthenticationModel)) {
      return Promise.reject(helper.getValidationMessage('phoneAuthenticationModel'));
    }
    var queryParameters = {};

    queryParameters.apiKey = config.apiKey;
    if (!helper.isNullOrWhiteSpace(fields)) {
      queryParameters.fields = fields;
    }
    if (!helper.isNullOrWhiteSpace(loginUrl)) {
      queryParameters.loginUrl = loginUrl;
    }
    if (!helper.isNullOrWhiteSpace(smsTemplate)) {
      queryParameters.smsTemplate = smsTemplate;
    }

    var resourcePath = 'identity/v2/auth/login';

    return config.request('POST', resourcePath, queryParameters, phoneAuthenticationModel);
  };

  /**
  * This API is used to send the OTP to reset the account password.
  * @param {phone} New Phone Number
  * @param {smsTemplate} SMS Template name
  * @return Response Containing Validation Data and SMS Data
  *10.4
  */

  module.forgotPasswordByPhoneOTP = function (phone, smsTemplate) {
    if (helper.isNullOrWhiteSpace(phone)) {
      return Promise.reject(helper.getValidationMessage('phone'));
    }
    var queryParameters = {};

    queryParameters.apiKey = config.apiKey;
    if (!helper.isNullOrWhiteSpace(smsTemplate)) {
      queryParameters.smsTemplate = smsTemplate;
    }

    var bodyParameters = {};
    bodyParameters.phone = phone;

    var resourcePath = 'identity/v2/auth/password/otp';

    return config.request('POST', resourcePath, queryParameters, bodyParameters);
  };

  /**
  * This API is used to reset the password
  * @param {resetPasswordByOTPModel} Model Class containing Definition of payload for ResetPasswordByOTP API
  * @return Response containing Definition of Complete Validation data
  *10.5
  */

  module.resetPasswordByPhoneOTP = function (resetPasswordByOTPModel) {
    if (helper.checkJson(resetPasswordByOTPModel)) {
      return Promise.reject(helper.getValidationMessage('resetPasswordByOTPModel'));
    }
    var queryParameters = {};

    queryParameters.apiKey = config.apiKey;

    var resourcePath = 'identity/v2/auth/password/otp';

    return config.request('PUT', resourcePath, queryParameters, resetPasswordByOTPModel);
  };

  /**
  * This API is used to validate the verification code sent to verify a user's phone number
  * @param {otp} The Verification Code
  * @param {phone} New Phone Number
  * @param {fields} The fields parameter filters the API response so that the response only includes a specific set of fields
  * @param {smsTemplate} SMS Template name
  * @return Response containing User Profile Data and access token
  *11.1.1
  */

  module.phoneVerificationByOTP = function (otp, phone,
    fields, smsTemplate) {
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

    var resourcePath = 'identity/v2/auth/phone/otp';

    return config.request('PUT', resourcePath, queryParameters, bodyParameters);
  };

  /**
  * This API is used to consume the verification code sent to verify a user's phone number. Use this call for front-end purposes in cases where the user is already logged in by passing the user's access token.
  * @param {accessToken} Access_Token
  * @param {otp} The Verification Code
  * @param {smsTemplate} SMS Template name
  * @return Response containing Definition of Complete Validation data
  *11.1.2
  */

  module.phoneVerificationOTPByAccessToken = function (accessToken, otp,
    smsTemplate) {
    if (helper.isNullOrWhiteSpace(accessToken)) {
      return Promise.reject(helper.getValidationMessage('accessToken'));
    }
    if (helper.isNullOrWhiteSpace(otp)) {
      return Promise.reject(helper.getValidationMessage('otp'));
    }
    var queryParameters = {};

    queryParameters.apiKey = config.apiKey;
    queryParameters.otp = otp;
    if (!helper.isNullOrWhiteSpace(smsTemplate)) {
      queryParameters.smsTemplate = smsTemplate;
    }

    var bodyParameters = {};
    bodyParameters.access_token = accessToken;

    var resourcePath = 'identity/v2/auth/phone/otp';

    return config.request('PUT', resourcePath, queryParameters, bodyParameters);
  };

  /**
  * This API is used to resend a verification OTP to verify a user's Phone Number. The user will receive a verification code that they will need to input
  * @param {phone} New Phone Number
  * @param {smsTemplate} SMS Template name
  * @return Response Containing Validation Data and SMS Data
  *11.2.1
  */

  module.phoneResendVerificationOTP = function (phone, smsTemplate) {
    if (helper.isNullOrWhiteSpace(phone)) {
      return Promise.reject(helper.getValidationMessage('phone'));
    }
    var queryParameters = {};

    queryParameters.apiKey = config.apiKey;
    if (!helper.isNullOrWhiteSpace(smsTemplate)) {
      queryParameters.smsTemplate = smsTemplate;
    }

    var bodyParameters = {};
    bodyParameters.phone = phone;

    var resourcePath = 'identity/v2/auth/phone/otp';

    return config.request('POST', resourcePath, queryParameters, bodyParameters);
  };

  /**
  * This API is used to resend a verification OTP to verify a user's Phone Number in cases in which an active token already exists
  * @param {accessToken} Uniquely generated identifier key by LoginRadius that is activated after successful authentication.
  * @param {phone} New Phone Number
  * @param {smsTemplate} SMS Template name
  * @return Response Containing Validation Data and SMS Data
  *11.2.2
  */

  module.phoneResendVerificationOTPByToken = function (accessToken, phone,
    smsTemplate) {
    if (helper.isNullOrWhiteSpace(accessToken)) {
      return Promise.reject(helper.getValidationMessage('accessToken'));
    }
    if (helper.isNullOrWhiteSpace(phone)) {
      return Promise.reject(helper.getValidationMessage('phone'));
    }
    var queryParameters = {};

    queryParameters.apiKey = config.apiKey;
    if (!helper.isNullOrWhiteSpace(smsTemplate)) {
      queryParameters.smsTemplate = smsTemplate;
    }

    var bodyParameters = {};
    bodyParameters.access_token = accessToken;
    bodyParameters.phone = phone;

    var resourcePath = 'identity/v2/auth/phone/otp';

    return config.request('POST', resourcePath, queryParameters, bodyParameters);
  };

  /**
  * This API is used to update the login Phone Number of users
  * @param {accessToken} Uniquely generated identifier key by LoginRadius that is activated after successful authentication.
  * @param {phone} New Phone Number
  * @param {smsTemplate} SMS Template name
  * @return Response Containing Validation Data and SMS Data
  *11.5
  */

  module.updatePhoneNumber = function (accessToken, phone,
    smsTemplate) {
    if (helper.isNullOrWhiteSpace(accessToken)) {
      return Promise.reject(helper.getValidationMessage('accessToken'));
    }
    if (helper.isNullOrWhiteSpace(phone)) {
      return Promise.reject(helper.getValidationMessage('phone'));
    }
    var queryParameters = {};

    queryParameters.access_token = accessToken;
    queryParameters.apiKey = config.apiKey;
    if (!helper.isNullOrWhiteSpace(smsTemplate)) {
      queryParameters.smsTemplate = smsTemplate;
    }

    var bodyParameters = {};
    bodyParameters.phone = phone;

    var resourcePath = 'identity/v2/auth/phone';

    return config.request('PUT', resourcePath, queryParameters, bodyParameters);
  };

  /**
  * This API is used to check the Phone Number exists or not on your site.
  * @param {phone} LoginRadius API Key
  * @return Response containing Definition Complete ExistResponse data
  *11.6
  */

  module.checkPhoneNumberAvailability = function (phone) {
    if (helper.isNullOrWhiteSpace(phone)) {
      return Promise.reject(helper.getValidationMessage('phone'));
    }
    var queryParameters = {};

    queryParameters.apiKey = config.apiKey;
    queryParameters.phone = phone;

    var resourcePath = 'identity/v2/auth/phone';

    return config.request('GET', resourcePath, queryParameters, null);
  };

  /**
  * This API is used to delete the Phone ID on a user's account via the access_token
  * @param {accessToken} Uniquely generated identifier key by LoginRadius that is activated after successful authentication.
  * @return Response containing Definition of Delete Request
  *11.7
  */

  module.removePhoneIDByAccessToken = function (accessToken) {
    if (helper.isNullOrWhiteSpace(accessToken)) {
      return Promise.reject(helper.getValidationMessage('accessToken'));
    }
    var queryParameters = {};

    queryParameters.access_token = accessToken;
    queryParameters.apiKey = config.apiKey;

    var resourcePath = 'identity/v2/auth/phone';

    return config.request('DELETE', resourcePath, queryParameters, null);
  };
  return module;
};

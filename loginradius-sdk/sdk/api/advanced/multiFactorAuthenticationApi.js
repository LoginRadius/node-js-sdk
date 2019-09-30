/*
 * Created by LoginRadius Development Team
   Copyright 2019 LoginRadius Inc. All rights reserved.
*/
module.exports = function (config) {
  var module = {};
  var helper = require(config.HELPER_PATH);

  /**
  * This API is used to configure the Multi-factor authentication after login by using the access_token when MFA is set as optional on the LoginRadius site.
  * @param {accessToken} Uniquely generated identifier key by LoginRadius that is activated after successful authentication.
  * @param {smsTemplate2FA} SMS Template Name
  * @return Response containing Definition of Complete Multi-Factor Authentication Settings data
  *5.7
  */

  module.mfaConfigureByAccessToken = function (accessToken, smsTemplate2FA) {
    if (helper.isNullOrWhiteSpace(accessToken)) {
      return Promise.reject(helper.getValidationMessage('accessToken'));
    }
    var queryParameters = {};

    queryParameters.access_token = accessToken;
    queryParameters.apiKey = config.apiKey;
    if (!helper.isNullOrWhiteSpace(smsTemplate2FA)) {
      queryParameters.smsTemplate2FA = smsTemplate2FA;
    }

    var resourcePath = 'identity/v2/auth/account/2fa';

    return config.request('GET', resourcePath, queryParameters, null);
  };

  /**
  * This API is used to trigger the Multi-factor authentication settings after login for secure actions
  * @param {accessToken} Uniquely generated identifier key by LoginRadius that is activated after successful authentication.
  * @param {multiFactorAuthModelWithLockout} Model Class containing Definition of payload for MultiFactorAuthModel With Lockout API
  * @param {fields} The fields parameter filters the API response so that the response only includes a specific set of fields
  * @return Response containing Definition for Complete profile data
  *5.9
  */

  module.mfaUpdateSetting = function (accessToken, multiFactorAuthModelWithLockout,
    fields) {
    if (helper.isNullOrWhiteSpace(accessToken)) {
      return Promise.reject(helper.getValidationMessage('accessToken'));
    }
    if (helper.checkJson(multiFactorAuthModelWithLockout)) {
      return Promise.reject(helper.getValidationMessage('multiFactorAuthModelWithLockout'));
    }
    var queryParameters = {};

    queryParameters.access_token = accessToken;
    queryParameters.apiKey = config.apiKey;
    if (!helper.isNullOrWhiteSpace(fields)) {
      queryParameters.fields = fields;
    }

    var resourcePath = 'identity/v2/auth/account/2fa/verification/otp';

    return config.request('PUT', resourcePath, queryParameters, multiFactorAuthModelWithLockout);
  };

  /**
  * This API is used to Enable Multi-factor authentication by access token on user login
  * @param {accessToken} Uniquely generated identifier key by LoginRadius that is activated after successful authentication.
  * @param {multiFactorAuthModelByGoogleAuthenticatorCode} Model Class containing Definition of payload for MultiFactorAuthModel By GoogleAuthenticator Code API
  * @param {fields} The fields parameter filters the API response so that the response only includes a specific set of fields
  * @param {smsTemplate} SMS Template name
  * @return Response containing Definition for Complete profile data
  *5.10
  */

  module.mfaUpdateByAccessToken = function (accessToken, multiFactorAuthModelByGoogleAuthenticatorCode,
    fields, smsTemplate) {
    if (helper.isNullOrWhiteSpace(accessToken)) {
      return Promise.reject(helper.getValidationMessage('accessToken'));
    }
    if (helper.checkJson(multiFactorAuthModelByGoogleAuthenticatorCode)) {
      return Promise.reject(helper.getValidationMessage('multiFactorAuthModelByGoogleAuthenticatorCode'));
    }
    var queryParameters = {};

    queryParameters.access_token = accessToken;
    queryParameters.apiKey = config.apiKey;
    if (!helper.isNullOrWhiteSpace(fields)) {
      queryParameters.fields = fields;
    }
    if (!helper.isNullOrWhiteSpace(smsTemplate)) {
      queryParameters.smsTemplate = smsTemplate;
    }

    var resourcePath = 'identity/v2/auth/account/2fa/verification/googleauthenticatorcode';

    return config.request('PUT', resourcePath, queryParameters, multiFactorAuthModelByGoogleAuthenticatorCode);
  };

  /**
  * This API is used to update the Multi-factor authentication phone number by sending the verification OTP to the provided phone number
  * @param {accessToken} Uniquely generated identifier key by LoginRadius that is activated after successful authentication.
  * @param {phoneNo2FA} Phone Number For 2FA
  * @param {smsTemplate2FA} SMS Template Name
  * @return Response containing Definition for Complete SMS data
  *5.11
  */

  module.mfaUpdatePhoneNumberByToken = function (accessToken, phoneNo2FA,
    smsTemplate2FA) {
    if (helper.isNullOrWhiteSpace(accessToken)) {
      return Promise.reject(helper.getValidationMessage('accessToken'));
    }
    if (helper.isNullOrWhiteSpace(phoneNo2FA)) {
      return Promise.reject(helper.getValidationMessage('phoneNo2FA'));
    }
    var queryParameters = {};

    queryParameters.access_token = accessToken;
    queryParameters.apiKey = config.apiKey;
    if (!helper.isNullOrWhiteSpace(smsTemplate2FA)) {
      queryParameters.smsTemplate2FA = smsTemplate2FA;
    }

    var bodyParameters = {};
    bodyParameters.phoneNo2FA = phoneNo2FA;

    var resourcePath = 'identity/v2/auth/account/2fa';

    return config.request('PUT', resourcePath, queryParameters, bodyParameters);
  };

  /**
  * This API Resets the Google Authenticator configurations on a given account via the access_token
  * @param {accessToken} Uniquely generated identifier key by LoginRadius that is activated after successful authentication.
  * @param {googleauthenticator} boolean type value,Enable google Authenticator Code.
  * @return Response containing Definition of Delete Request
  *5.12.1
  */

  module.mfaResetGoogleAuthByToken = function (accessToken, googleauthenticator) {
    if (helper.isNullOrWhiteSpace(accessToken)) {
      return Promise.reject(helper.getValidationMessage('accessToken'));
    }
    var queryParameters = {};

    queryParameters.access_token = accessToken;
    queryParameters.apiKey = config.apiKey;

    var bodyParameters = {};
    bodyParameters.googleauthenticator = googleauthenticator;

    var resourcePath = 'identity/v2/auth/account/2fa/authenticator';

    return config.request('DELETE', resourcePath, queryParameters, bodyParameters);
  };

  /**
  * This API resets the SMS Authenticator configurations on a given account via the access_token.
  * @param {accessToken} Uniquely generated identifier key by LoginRadius that is activated after successful authentication.
  * @param {otpauthenticator} Pass 'otpauthenticator' to remove SMS Authenticator
  * @return Response containing Definition of Delete Request
  *5.12.2
  */

  module.mfaResetSMSAuthByToken = function (accessToken, otpauthenticator) {
    if (helper.isNullOrWhiteSpace(accessToken)) {
      return Promise.reject(helper.getValidationMessage('accessToken'));
    }
    var queryParameters = {};

    queryParameters.access_token = accessToken;
    queryParameters.apiKey = config.apiKey;

    var bodyParameters = {};
    bodyParameters.otpauthenticator = otpauthenticator;

    var resourcePath = 'identity/v2/auth/account/2fa/authenticator';

    return config.request('DELETE', resourcePath, queryParameters, bodyParameters);
  };

  /**
  * This API is used to get a set of backup codes via access_token to allow the user login on a site that has Multi-factor Authentication enabled in the event that the user does not have a secondary factor available. We generate 10 codes, each code can only be consumed once. If any user attempts to go over the number of invalid login attempts configured in the Dashboard then the account gets blocked automatically
  * @param {accessToken} Uniquely generated identifier key by LoginRadius that is activated after successful authentication.
  * @return Response containing Definition of Complete Backup Code data
  *5.13
  */

  module.mfaBackupCodeByAccessToken = function (accessToken) {
    if (helper.isNullOrWhiteSpace(accessToken)) {
      return Promise.reject(helper.getValidationMessage('accessToken'));
    }
    var queryParameters = {};

    queryParameters.access_token = accessToken;
    queryParameters.apiKey = config.apiKey;

    var resourcePath = 'identity/v2/auth/account/2fa/backupcode';

    return config.request('GET', resourcePath, queryParameters, null);
  };

  /**
  * API is used to reset the backup codes on a given account via the access_token. This API call will generate 10 new codes, each code can only be consumed once
  * @param {accessToken} Uniquely generated identifier key by LoginRadius that is activated after successful authentication.
  * @return Response containing Definition of Complete Backup Code data
  *5.14
  */

  module.mfaResetBackupCodeByAccessToken = function (accessToken) {
    if (helper.isNullOrWhiteSpace(accessToken)) {
      return Promise.reject(helper.getValidationMessage('accessToken'));
    }
    var queryParameters = {};

    queryParameters.access_token = accessToken;
    queryParameters.apiKey = config.apiKey;

    var resourcePath = 'identity/v2/auth/account/2fa/backupcode/reset';

    return config.request('GET', resourcePath, queryParameters, null);
  };

  /**
  * This API can be used to login by emailid on a Multi-factor authentication enabled LoginRadius site.
  * @param {email} user's email
  * @param {password} Password for the email
  * @param {emailTemplate} Email template name
  * @param {fields} The fields parameter filters the API response so that the response only includes a specific set of fields
  * @param {loginUrl} Url where the user is logging from
  * @param {smsTemplate} SMS Template name
  * @param {smsTemplate2FA} SMS Template Name
  * @param {verificationUrl} Email verification url
  * @return Complete user UserProfile data
  *9.8.1
  */

  module.mfaLoginByEmail = function (email, password,
    emailTemplate, fields, loginUrl, smsTemplate, smsTemplate2FA,
    verificationUrl) {
    if (helper.isNullOrWhiteSpace(email)) {
      return Promise.reject(helper.getValidationMessage('email'));
    }
    if (helper.isNullOrWhiteSpace(password)) {
      return Promise.reject(helper.getValidationMessage('password'));
    }
    var queryParameters = {};

    queryParameters.apiKey = config.apiKey;
    if (!helper.isNullOrWhiteSpace(emailTemplate)) {
      queryParameters.emailTemplate = emailTemplate;
    }
    if (!helper.isNullOrWhiteSpace(fields)) {
      queryParameters.fields = fields;
    }
    if (!helper.isNullOrWhiteSpace(loginUrl)) {
      queryParameters.loginUrl = loginUrl;
    }
    if (!helper.isNullOrWhiteSpace(smsTemplate)) {
      queryParameters.smsTemplate = smsTemplate;
    }
    if (!helper.isNullOrWhiteSpace(smsTemplate2FA)) {
      queryParameters.smsTemplate2FA = smsTemplate2FA;
    }
    if (!helper.isNullOrWhiteSpace(verificationUrl)) {
      queryParameters.verificationUrl = verificationUrl;
    }

    var bodyParameters = {};
    bodyParameters.email = email;
    bodyParameters.password = password;

    var resourcePath = 'identity/v2/auth/login/2fa';

    return config.request('POST', resourcePath, queryParameters, bodyParameters);
  };

  /**
  * This API can be used to login by username on a Multi-factor authentication enabled LoginRadius site.
  * @param {password} Password for the email
  * @param {username} Username of the user
  * @param {emailTemplate} Email template name
  * @param {fields} The fields parameter filters the API response so that the response only includes a specific set of fields
  * @param {loginUrl} Url where the user is logging from
  * @param {smsTemplate} SMS Template name
  * @param {smsTemplate2FA} SMS Template Name
  * @param {verificationUrl} Email verification url
  * @return Complete user UserProfile data
  *9.8.2
  */

  module.mfaLoginByUserName = function (password, username,
    emailTemplate, fields, loginUrl, smsTemplate, smsTemplate2FA,
    verificationUrl) {
    if (helper.isNullOrWhiteSpace(password)) {
      return Promise.reject(helper.getValidationMessage('password'));
    }
    if (helper.isNullOrWhiteSpace(username)) {
      return Promise.reject(helper.getValidationMessage('username'));
    }
    var queryParameters = {};

    queryParameters.apiKey = config.apiKey;
    if (!helper.isNullOrWhiteSpace(emailTemplate)) {
      queryParameters.emailTemplate = emailTemplate;
    }
    if (!helper.isNullOrWhiteSpace(fields)) {
      queryParameters.fields = fields;
    }
    if (!helper.isNullOrWhiteSpace(loginUrl)) {
      queryParameters.loginUrl = loginUrl;
    }
    if (!helper.isNullOrWhiteSpace(smsTemplate)) {
      queryParameters.smsTemplate = smsTemplate;
    }
    if (!helper.isNullOrWhiteSpace(smsTemplate2FA)) {
      queryParameters.smsTemplate2FA = smsTemplate2FA;
    }
    if (!helper.isNullOrWhiteSpace(verificationUrl)) {
      queryParameters.verificationUrl = verificationUrl;
    }

    var bodyParameters = {};
    bodyParameters.password = password;
    bodyParameters.username = username;

    var resourcePath = 'identity/v2/auth/login/2fa';

    return config.request('POST', resourcePath, queryParameters, bodyParameters);
  };

  /**
  * This API can be used to login by Phone on a Multi-factor authentication enabled LoginRadius site.
  * @param {password} Password for the email
  * @param {phone} New Phone Number
  * @param {emailTemplate} Email template name
  * @param {fields} The fields parameter filters the API response so that the response only includes a specific set of fields
  * @param {loginUrl} Url where the user is logging from
  * @param {smsTemplate} SMS Template name
  * @param {smsTemplate2FA} SMS Template Name
  * @param {verificationUrl} Email verification url
  * @return Complete user UserProfile data
  *9.8.3
  */

  module.mfaLoginByPhone = function (password, phone,
    emailTemplate, fields, loginUrl, smsTemplate, smsTemplate2FA,
    verificationUrl) {
    if (helper.isNullOrWhiteSpace(password)) {
      return Promise.reject(helper.getValidationMessage('password'));
    }
    if (helper.isNullOrWhiteSpace(phone)) {
      return Promise.reject(helper.getValidationMessage('phone'));
    }
    var queryParameters = {};

    queryParameters.apiKey = config.apiKey;
    if (!helper.isNullOrWhiteSpace(emailTemplate)) {
      queryParameters.emailTemplate = emailTemplate;
    }
    if (!helper.isNullOrWhiteSpace(fields)) {
      queryParameters.fields = fields;
    }
    if (!helper.isNullOrWhiteSpace(loginUrl)) {
      queryParameters.loginUrl = loginUrl;
    }
    if (!helper.isNullOrWhiteSpace(smsTemplate)) {
      queryParameters.smsTemplate = smsTemplate;
    }
    if (!helper.isNullOrWhiteSpace(smsTemplate2FA)) {
      queryParameters.smsTemplate2FA = smsTemplate2FA;
    }
    if (!helper.isNullOrWhiteSpace(verificationUrl)) {
      queryParameters.verificationUrl = verificationUrl;
    }

    var bodyParameters = {};
    bodyParameters.password = password;
    bodyParameters.phone = phone;

    var resourcePath = 'identity/v2/auth/login/2fa';

    return config.request('POST', resourcePath, queryParameters, bodyParameters);
  };

  /**
  * This API is used to login via Multi-factor authentication by passing the One Time Password received via SMS
  * @param {multiFactorAuthModelWithLockout} Model Class containing Definition of payload for MultiFactorAuthModel With Lockout API
  * @param {secondFactorAuthenticationToken} A Uniquely generated MFA identifier token after successful authentication
  * @param {fields} The fields parameter filters the API response so that the response only includes a specific set of fields
  * @param {smsTemplate2FA} SMS Template Name
  * @return Complete user UserProfile data
  *9.12
  */

  module.mfaValidateOTPByPhone = function (multiFactorAuthModelWithLockout, secondFactorAuthenticationToken,
    fields, smsTemplate2FA) {
    if (helper.checkJson(multiFactorAuthModelWithLockout)) {
      return Promise.reject(helper.getValidationMessage('multiFactorAuthModelWithLockout'));
    }
    if (helper.isNullOrWhiteSpace(secondFactorAuthenticationToken)) {
      return Promise.reject(helper.getValidationMessage('secondFactorAuthenticationToken'));
    }
    var queryParameters = {};

    queryParameters.apiKey = config.apiKey;
    queryParameters.secondFactorAuthenticationToken = secondFactorAuthenticationToken;
    if (!helper.isNullOrWhiteSpace(fields)) {
      queryParameters.fields = fields;
    }
    if (!helper.isNullOrWhiteSpace(smsTemplate2FA)) {
      queryParameters.smsTemplate2FA = smsTemplate2FA;
    }

    var resourcePath = 'identity/v2/auth/login/2fa/verification/otp';

    return config.request('PUT', resourcePath, queryParameters, multiFactorAuthModelWithLockout);
  };

  /**
  * This API is used to login via Multi-factor-authentication by passing the google authenticator code.
  * @param {googleAuthenticatorCode} The code generated by google authenticator app after scanning QR code
  * @param {secondFactorAuthenticationToken} A Uniquely generated MFA identifier token after successful authentication
  * @param {fields} The fields parameter filters the API response so that the response only includes a specific set of fields
  * @param {smsTemplate2FA} SMS Template Name
  * @return Complete user UserProfile data
  *9.13
  */

  module.mfaValidateGoogleAuthCode = function (googleAuthenticatorCode, secondFactorAuthenticationToken,
    fields, smsTemplate2FA) {
    if (helper.isNullOrWhiteSpace(googleAuthenticatorCode)) {
      return Promise.reject(helper.getValidationMessage('googleAuthenticatorCode'));
    }
    if (helper.isNullOrWhiteSpace(secondFactorAuthenticationToken)) {
      return Promise.reject(helper.getValidationMessage('secondFactorAuthenticationToken'));
    }
    var queryParameters = {};

    queryParameters.apiKey = config.apiKey;
    queryParameters.secondFactorAuthenticationToken = secondFactorAuthenticationToken;
    if (!helper.isNullOrWhiteSpace(fields)) {
      queryParameters.fields = fields;
    }
    if (!helper.isNullOrWhiteSpace(smsTemplate2FA)) {
      queryParameters.smsTemplate2FA = smsTemplate2FA;
    }

    var bodyParameters = {};
    bodyParameters.googleAuthenticatorCode = googleAuthenticatorCode;

    var resourcePath = 'identity/v2/auth/login/2fa/verification/googleauthenticatorcode';

    return config.request('PUT', resourcePath, queryParameters, bodyParameters);
  };

  /**
  * This API is used to validate the backup code provided by the user and if valid, we return an access_token allowing the user to login incases where Multi-factor authentication (MFA) is enabled and the secondary factor is unavailable. When a user initially downloads the Backup codes, We generate 10 codes, each code can only be consumed once. if any user attempts to go over the number of invalid login attempts configured in the Dashboard then the account gets blocked automatically
  * @param {multiFactorAuthModelByBackupCode} Model Class containing Definition of payload for MultiFactorAuth By BackupCode API
  * @param {secondFactorAuthenticationToken} A Uniquely generated MFA identifier token after successful authentication
  * @param {fields} The fields parameter filters the API response so that the response only includes a specific set of fields
  * @return Complete user UserProfile data
  *9.14
  */

  module.mfaValidateBackupCode = function (multiFactorAuthModelByBackupCode, secondFactorAuthenticationToken,
    fields) {
    if (helper.checkJson(multiFactorAuthModelByBackupCode)) {
      return Promise.reject(helper.getValidationMessage('multiFactorAuthModelByBackupCode'));
    }
    if (helper.isNullOrWhiteSpace(secondFactorAuthenticationToken)) {
      return Promise.reject(helper.getValidationMessage('secondFactorAuthenticationToken'));
    }
    var queryParameters = {};

    queryParameters.apiKey = config.apiKey;
    queryParameters.secondFactorAuthenticationToken = secondFactorAuthenticationToken;
    if (!helper.isNullOrWhiteSpace(fields)) {
      queryParameters.fields = fields;
    }

    var resourcePath = 'identity/v2/auth/login/2fa/verification/backupcode';

    return config.request('PUT', resourcePath, queryParameters, multiFactorAuthModelByBackupCode);
  };

  /**
  * This API is used to update (if configured) the phone number used for Multi-factor authentication by sending the verification OTP to the provided phone number
  * @param {phoneNo2FA} Phone Number For 2FA
  * @param {secondFactorAuthenticationToken} A Uniquely generated MFA identifier token after successful authentication
  * @param {smsTemplate2FA} SMS Template Name
  * @return Response containing Definition for Complete SMS data
  *9.16
  */

  module.mfaUpdatePhoneNumber = function (phoneNo2FA, secondFactorAuthenticationToken,
    smsTemplate2FA) {
    if (helper.isNullOrWhiteSpace(phoneNo2FA)) {
      return Promise.reject(helper.getValidationMessage('phoneNo2FA'));
    }
    if (helper.isNullOrWhiteSpace(secondFactorAuthenticationToken)) {
      return Promise.reject(helper.getValidationMessage('secondFactorAuthenticationToken'));
    }
    var queryParameters = {};

    queryParameters.apiKey = config.apiKey;
    queryParameters.secondFactorAuthenticationToken = secondFactorAuthenticationToken;
    if (!helper.isNullOrWhiteSpace(smsTemplate2FA)) {
      queryParameters.smsTemplate2FA = smsTemplate2FA;
    }

    var bodyParameters = {};
    bodyParameters.phoneNo2FA = phoneNo2FA;

    var resourcePath = 'identity/v2/auth/login/2fa';

    return config.request('PUT', resourcePath, queryParameters, bodyParameters);
  };

  /**
  * This API is used to resending the verification OTP to the provided phone number
  * @param {secondFactorAuthenticationToken} A Uniquely generated MFA identifier token after successful authentication
  * @param {smsTemplate2FA} SMS Template Name
  * @return Response containing Definition for Complete SMS data
  *9.17
  */

  module.mfaResendOTP = function (secondFactorAuthenticationToken, smsTemplate2FA) {
    if (helper.isNullOrWhiteSpace(secondFactorAuthenticationToken)) {
      return Promise.reject(helper.getValidationMessage('secondFactorAuthenticationToken'));
    }
    var queryParameters = {};

    queryParameters.apiKey = config.apiKey;
    queryParameters.secondFactorAuthenticationToken = secondFactorAuthenticationToken;
    if (!helper.isNullOrWhiteSpace(smsTemplate2FA)) {
      queryParameters.smsTemplate2FA = smsTemplate2FA;
    }

    var resourcePath = 'identity/v2/auth/login/2fa/resend';

    return config.request('GET', resourcePath, queryParameters, null);
  };

  /**
  * This API resets the SMS Authenticator configurations on a given account via the UID.
  * @param {otpauthenticator} Pass 'otpauthenticator' to remove SMS Authenticator
  * @param {uid} UID, the unified identifier for each user account
  * @return Response containing Definition of Delete Request
  *18.21.1
  */

  module.mfaResetSMSAuthenticatorByUid = function (otpauthenticator, uid) {
    if (helper.isNullOrWhiteSpace(uid)) {
      return Promise.reject(helper.getValidationMessage('uid'));
    }
    var queryParameters = {};

    queryParameters.apiKey = config.apiKey;
    queryParameters.apiSecret = config.apiSecret;
    queryParameters.uid = uid;

    var bodyParameters = {};
    bodyParameters.otpauthenticator = otpauthenticator;

    var resourcePath = 'identity/v2/manage/account/2fa/authenticator';

    return config.request('DELETE', resourcePath, queryParameters, bodyParameters);
  };

  /**
  * This API resets the Google Authenticator configurations on a given account via the UID.
  * @param {googleauthenticator} boolean type value,Enable google Authenticator Code.
  * @param {uid} UID, the unified identifier for each user account
  * @return Response containing Definition of Delete Request
  *18.21.2
  */

  module.mfaResetGoogleAuthenticatorByUid = function (googleauthenticator, uid) {
    if (helper.isNullOrWhiteSpace(uid)) {
      return Promise.reject(helper.getValidationMessage('uid'));
    }
    var queryParameters = {};

    queryParameters.apiKey = config.apiKey;
    queryParameters.apiSecret = config.apiSecret;
    queryParameters.uid = uid;

    var bodyParameters = {};
    bodyParameters.googleauthenticator = googleauthenticator;

    var resourcePath = 'identity/v2/manage/account/2fa/authenticator';

    return config.request('DELETE', resourcePath, queryParameters, bodyParameters);
  };

  /**
  * This API is used to reset the backup codes on a given account via the UID. This API call will generate 10 new codes, each code can only be consumed once.
  * @param {uid} UID, the unified identifier for each user account
  * @return Response containing Definition of Complete Backup Code data
  *18.25
  */

  module.mfaBackupCodeByUid = function (uid) {
    if (helper.isNullOrWhiteSpace(uid)) {
      return Promise.reject(helper.getValidationMessage('uid'));
    }
    var queryParameters = {};

    queryParameters.apiKey = config.apiKey;
    queryParameters.apiSecret = config.apiSecret;
    queryParameters.uid = uid;

    var resourcePath = 'identity/v2/manage/account/2fa/backupcode';

    return config.request('GET', resourcePath, queryParameters, null);
  };

  /**
  * This API is used to reset the backup codes on a given account via the UID. This API call will generate 10 new codes, each code can only be consumed once.
  * @param {uid} UID, the unified identifier for each user account
  * @return Response containing Definition of Complete Backup Code data
  *18.26
  */

  module.mfaResetBackupCodeByUid = function (uid) {
    if (helper.isNullOrWhiteSpace(uid)) {
      return Promise.reject(helper.getValidationMessage('uid'));
    }
    var queryParameters = {};

    queryParameters.apiKey = config.apiKey;
    queryParameters.apiSecret = config.apiSecret;
    queryParameters.uid = uid;

    var resourcePath = 'identity/v2/manage/account/2fa/backupcode/reset';

    return config.request('GET', resourcePath, queryParameters, null);
  };
  return module;
};

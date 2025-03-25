/*
 * Created by LoginRadius Development Team
   Copyright 2025 LoginRadius Inc. All rights reserved.
*/
module.exports = function (config) {
  var module = {};
  var helper = require(config.HELPER_PATH)();

  /**
   * This API is used to trigger the Multi-Factor Autentication workflow for the provided access token
   * @param {accessToken} Uniquely generated identifier key by LoginRadius that is activated after successful authentication.
   * @param {smsTemplate2FA} SMS Template Name
   * @param {isVoiceOtp} Boolean, pass true if you wish to trigger voice OTP
   * @return Response containing Definition of Complete Multi-Factor Authentication Settings data
   *14.3
   */

  module.mfaReAuthenticate = function (
    accessToken,
    smsTemplate2FA,
    isVoiceOtp
  ) {
    if (helper.isNullOrWhiteSpace(accessToken)) {
      return Promise.reject(helper.getValidationMessage('accessToken'));
    }
    var queryParameters = {};

    queryParameters.access_token = accessToken;
    queryParameters.apiKey = config.apiKey;
    if (!helper.isNullOrWhiteSpace(smsTemplate2FA)) {
      queryParameters.smsTemplate2FA = smsTemplate2FA;
    }
    if (isVoiceOtp !== null) {
      queryParameters.isVoiceOtp = isVoiceOtp;
    }

    var resourcePath = 'identity/v2/auth/account/reauth/2fa';

    return config.request('GET', resourcePath, queryParameters, null);
  };

  /**
   * This API is used to re-authenticate via Multi-factor authentication by passing the One Time Password received via SMS
   * @param {accessToken} Uniquely generated identifier key by LoginRadius that is activated after successful authentication.
   * @param {reauthByOtpModel} Model Class containing Definition for MFA Reauthentication by OTP
   * @return Complete user Multi-Factor Authentication Token data
   *14.4
   */

  module.mfaReAuthenticateByOTP = function (accessToken, reauthByOtpModel) {
    if (helper.isNullOrWhiteSpace(accessToken)) {
      return Promise.reject(helper.getValidationMessage('accessToken'));
    }
    if (helper.checkJson(reauthByOtpModel)) {
      return Promise.reject(helper.getValidationMessage('reauthByOtpModel'));
    }
    var queryParameters = {};

    queryParameters.access_token = accessToken;
    queryParameters.apiKey = config.apiKey;

    var resourcePath = 'identity/v2/auth/account/reauth/2fa/otp';

    return config.request(
      'PUT',
      resourcePath,
      queryParameters,
      reauthByOtpModel
    );
  };

  /**
   * This API is used to re-authenticate by set of backup codes via access token on the site that has Multi-factor authentication enabled in re-authentication for the user that does not have the device
   * @param {accessToken} Uniquely generated identifier key by LoginRadius that is activated after successful authentication.
   * @param {reauthByBackupCodeModel} Model Class containing Definition for MFA Reauthentication by Backup code
   * @return Complete user Multi-Factor Authentication Token data
   *14.5
   */

  module.mfaReAuthenticateByBackupCode = function (
    accessToken,
    reauthByBackupCodeModel
  ) {
    if (helper.isNullOrWhiteSpace(accessToken)) {
      return Promise.reject(helper.getValidationMessage('accessToken'));
    }
    if (helper.checkJson(reauthByBackupCodeModel)) {
      return Promise.reject(
        helper.getValidationMessage('reauthByBackupCodeModel')
      );
    }
    var queryParameters = {};

    queryParameters.access_token = accessToken;
    queryParameters.apiKey = config.apiKey;

    var resourcePath = 'identity/v2/auth/account/reauth/2fa/backupcode';

    return config.request(
      'PUT',
      resourcePath,
      queryParameters,
      reauthByBackupCodeModel
    );
  };

  /**
   * This API is used to re-authenticate via Multi-factor-authentication by passing the password
   * @param {accessToken} Uniquely generated identifier key by LoginRadius that is activated after successful authentication.
   * @param {passwordEventBasedAuthModelWithLockout} Model Class containing Definition of payload for PasswordEventBasedAuthModel with Lockout API
   * @param {smsTemplate2FA} SMS Template Name
   * @return Complete user Multi-Factor Authentication Token data
   *14.7
   */

  module.mfaReAuthenticateByPassword = function (
    accessToken,
    passwordEventBasedAuthModelWithLockout,
    smsTemplate2FA
  ) {
    if (helper.isNullOrWhiteSpace(accessToken)) {
      return Promise.reject(helper.getValidationMessage('accessToken'));
    }
    if (helper.checkJson(passwordEventBasedAuthModelWithLockout)) {
      return Promise.reject(
        helper.getValidationMessage('passwordEventBasedAuthModelWithLockout')
      );
    }
    var queryParameters = {};

    queryParameters.access_token = accessToken;
    queryParameters.apiKey = config.apiKey;
    if (!helper.isNullOrWhiteSpace(smsTemplate2FA)) {
      queryParameters.smsTemplate2FA = smsTemplate2FA;
    }

    var resourcePath = 'identity/v2/auth/account/reauth/password';

    return config.request(
      'PUT',
      resourcePath,
      queryParameters,
      passwordEventBasedAuthModelWithLockout
    );
  };

  /**
   * This API is used on the server-side to validate and verify the re-authentication token created by the MFA re-authentication API. This API checks re-authentications created by OTP.
   * @param {eventBasedMultiFactorToken} Model Class containing Definition for SecondFactorValidationToken
   * @param {uid} UID, the unified identifier for each user account
   * @return Response containing Definition of Complete Validation data
   *18.38
   */

  module.verifyMultiFactorOtpReauthentication = function (
    eventBasedMultiFactorToken,
    uid
  ) {
    if (helper.checkJson(eventBasedMultiFactorToken)) {
      return Promise.reject(
        helper.getValidationMessage('eventBasedMultiFactorToken')
      );
    }
    if (helper.isNullOrWhiteSpace(uid)) {
      return Promise.reject(helper.getValidationMessage('uid'));
    }
    var queryParameters = {};

    queryParameters.apiKey = config.apiKey;
    queryParameters.apiSecret = config.apiSecret;

    var resourcePath = 'identity/v2/manage/account/' + uid + '/reauth/2fa';

    return config.request(
      'POST',
      resourcePath,
      queryParameters,
      eventBasedMultiFactorToken
    );
  };

  /**
   * This API is used on the server-side to validate and verify the re-authentication token created by the MFA re-authentication API. This API checks re-authentications created by password.
   * @param {eventBasedMultiFactorToken} Model Class containing Definition for SecondFactorValidationToken
   * @param {uid} UID, the unified identifier for each user account
   * @return Response containing Definition of Complete Validation data
   *18.39
   */

  module.verifyMultiFactorPasswordReauthentication = function (
    eventBasedMultiFactorToken,
    uid
  ) {
    if (helper.checkJson(eventBasedMultiFactorToken)) {
      return Promise.reject(
        helper.getValidationMessage('eventBasedMultiFactorToken')
      );
    }
    if (helper.isNullOrWhiteSpace(uid)) {
      return Promise.reject(helper.getValidationMessage('uid'));
    }
    var queryParameters = {};

    queryParameters.apiKey = config.apiKey;
    queryParameters.apiSecret = config.apiSecret;

    var resourcePath = 'identity/v2/manage/account/' + uid + '/reauth/password';

    return config.request(
      'POST',
      resourcePath,
      queryParameters,
      eventBasedMultiFactorToken
    );
  };

  /**
   * This API is used on the server-side to validate and verify the re-authentication token created by the MFA re-authentication API. This API checks re-authentications created by PIN.
   * @param {eventBasedMultiFactorToken} Model Class containing Definition for SecondFactorValidationToken
   * @param {uid} UID, the unified identifier for each user account
   * @return Response containing Definition of Complete Validation data
   *18.40
   */

  module.verifyMultiFactorPINReauthentication = function (
    eventBasedMultiFactorToken,
    uid
  ) {
    if (helper.checkJson(eventBasedMultiFactorToken)) {
      return Promise.reject(
        helper.getValidationMessage('eventBasedMultiFactorToken')
      );
    }
    if (helper.isNullOrWhiteSpace(uid)) {
      return Promise.reject(helper.getValidationMessage('uid'));
    }
    var queryParameters = {};

    queryParameters.apiKey = config.apiKey;
    queryParameters.apiSecret = config.apiSecret;

    var resourcePath = 'identity/v2/manage/account/' + uid + '/reauth/pin';

    return config.request(
      'POST',
      resourcePath,
      queryParameters,
      eventBasedMultiFactorToken
    );
  };

  /**
   * This API is used to validate the triggered MFA authentication flow with a password.
   * @param {accessToken} Uniquely generated identifier key by LoginRadius that is activated after successful authentication.
   * @param {pINAuthEventBasedAuthModelWithLockout} Model Class containing Definition of payload for PIN
   * @param {smsTemplate2FA} SMS Template Name
   * @return Response containing Definition response of MFA reauthentication
   *42.13
   */

  module.verifyPINAuthentication = function (
    accessToken,
    pINAuthEventBasedAuthModelWithLockout,
    smsTemplate2FA
  ) {
    if (helper.isNullOrWhiteSpace(accessToken)) {
      return Promise.reject(helper.getValidationMessage('accessToken'));
    }
    if (helper.checkJson(pINAuthEventBasedAuthModelWithLockout)) {
      return Promise.reject(
        helper.getValidationMessage('pINAuthEventBasedAuthModelWithLockout')
      );
    }
    var queryParameters = {};

    queryParameters.access_token = accessToken;
    queryParameters.apiKey = config.apiKey;
    if (!helper.isNullOrWhiteSpace(smsTemplate2FA)) {
      queryParameters.smsTemplate2FA = smsTemplate2FA;
    }

    var resourcePath = 'identity/v2/auth/account/reauth/pin';

    return config.request(
      'PUT',
      resourcePath,
      queryParameters,
      pINAuthEventBasedAuthModelWithLockout
    );
  };

  /**
   * This API is used to validate the triggered MFA authentication flow with an Email OTP.
   * @param {accessToken} Uniquely generated identifier key by LoginRadius that is activated after successful authentication.
   * @param {reauthByEmailOtpModel} payload
   * @return Response containing Definition response of MFA reauthentication
   *42.14
   */

  module.reAuthValidateEmailOtp = function (
    accessToken,
    reauthByEmailOtpModel
  ) {
    if (helper.isNullOrWhiteSpace(accessToken)) {
      return Promise.reject(helper.getValidationMessage('accessToken'));
    }
    if (helper.checkJson(reauthByEmailOtpModel)) {
      return Promise.reject(
        helper.getValidationMessage('reauthByEmailOtpModel')
      );
    }
    var queryParameters = {};

    queryParameters.access_token = accessToken;
    queryParameters.apiKey = config.apiKey;

    var resourcePath = 'identity/v2/auth/account/reauth/2fa/otp/email/verify';

    return config.request(
      'PUT',
      resourcePath,
      queryParameters,
      reauthByEmailOtpModel
    );
  };

  /**
   * This API is used to send the MFA Email OTP to the email for Re-authentication
   * @param {accessToken} Uniquely generated identifier key by LoginRadius that is activated after successful authentication.
   * @param {emailId} EmailId
   * @param {emailTemplate2FA} EmailTemplate2FA
   * @return Response containing Definition of Complete Validation data
   *42.15
   */

  module.reAuthSendEmailOtp = function (
    accessToken,
    emailId,
    emailTemplate2FA
  ) {
    if (helper.isNullOrWhiteSpace(accessToken)) {
      return Promise.reject(helper.getValidationMessage('accessToken'));
    }
    if (helper.isNullOrWhiteSpace(emailId)) {
      return Promise.reject(helper.getValidationMessage('emailId'));
    }
    var queryParameters = {};

    queryParameters.access_token = accessToken;
    queryParameters.apiKey = config.apiKey;
    queryParameters.emailId = emailId;
    if (!helper.isNullOrWhiteSpace(emailTemplate2FA)) {
      queryParameters.emailTemplate2FA = emailTemplate2FA;
    }

    var resourcePath = 'identity/v2/auth/account/reauth/2fa/otp/email';

    return config.request('GET', resourcePath, queryParameters, null);
  };

  /**
   * This API is used to validate the triggered MFA re-authentication flow with security questions answers.
   * @param {accessToken} Uniquely generated identifier key by LoginRadius that is activated after successful authentication.
   * @param {securityQuestionAnswerUpdateModel} payload
   * @return Response containing Definition response of MFA reauthentication
   *42.16
   */

  module.reAuthBySecurityQuestion = function (
    accessToken,
    securityQuestionAnswerUpdateModel
  ) {
    if (helper.isNullOrWhiteSpace(accessToken)) {
      return Promise.reject(helper.getValidationMessage('accessToken'));
    }
    if (helper.checkJson(securityQuestionAnswerUpdateModel)) {
      return Promise.reject(
        helper.getValidationMessage('securityQuestionAnswerUpdateModel')
      );
    }
    var queryParameters = {};

    queryParameters.access_token = accessToken;
    queryParameters.apiKey = config.apiKey;

    var resourcePath =
      'identity/v2/auth/account/reauth/2fa/securityquestionanswer/verify';

    return config.request(
      'POST',
      resourcePath,
      queryParameters,
      securityQuestionAnswerUpdateModel
    );
  };

  /**
   * This API is used to validate the triggered MFA authentication flow with the Authenticator Code.
   * @param {accessToken} Uniquely generated identifier key by LoginRadius that is activated after successful authentication.
   * @param {multiFactorAuthModelByAuthenticatorCode} Model Class containing Definition of payload for MultiFactorAuthModel By Authenticator Code API
   * @return Complete user Multi-Factor Authentication Token data
   *44.6
   */

  module.mfaReAuthenticateByAuthenticatorCode = function (
    accessToken,
    multiFactorAuthModelByAuthenticatorCode
  ) {
    if (helper.isNullOrWhiteSpace(accessToken)) {
      return Promise.reject(helper.getValidationMessage('accessToken'));
    }
    if (helper.checkJson(multiFactorAuthModelByAuthenticatorCode)) {
      return Promise.reject(
        helper.getValidationMessage('multiFactorAuthModelByAuthenticatorCode')
      );
    }
    var queryParameters = {};

    queryParameters.access_token = accessToken;
    queryParameters.apiKey = config.apiKey;

    var resourcePath = 'identity/v2/auth/account/reauth/2fa/authenticatorcode';

    return config.request(
      'PUT',
      resourcePath,
      queryParameters,
      multiFactorAuthModelByAuthenticatorCode
    );
  };
  return module;
};

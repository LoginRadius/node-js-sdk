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

export default class ReAuthenticationApi {
  // eslint-disable-next-line no-useless-constructor, no-unused-vars, no-empty-function
  constructor (private config: LoginRadiusConfig) {}

  /**
   * This API is used to trigger the Multi-Factor Autentication workflow for the provided access token
   * @param {accessToken} Uniquely generated identifier key by LoginRadius that is activated after successful authentication.
   * @param {smsTemplate2FA} SMS Template Name
   * @return Response containing Definition of Complete Multi-Factor Authentication Settings data
   *14.3
   */
  mfaReAuthenticate (accessToken, smsTemplate2FA) {
    if (isNullOrWhiteSpace(accessToken)) {
      return Promise.reject(getValidationMessage('accessToken'));
    }
    var queryParameters: any = {};

    queryParameters.access_token = accessToken;
    queryParameters.apiKey = this.config.apiKey;
    if (!isNullOrWhiteSpace(smsTemplate2FA)) {
      queryParameters.smsTemplate2FA = smsTemplate2FA;
    }

    var resourcePath = 'identity/v2/auth/account/reauth/2fa';

    return request(this.config, 'GET', resourcePath, queryParameters, null);
  }

  /**
   * This API is used to re-authenticate via Multi-factor authentication by passing the One Time Password received via SMS
   * @param {accessToken} Uniquely generated identifier key by LoginRadius that is activated after successful authentication.
   * @param {reauthByOtpModel} Model Class containing Definition for MFA Reauthentication by OTP
   * @return Complete user Multi-Factor Authentication Token data
   *14.4
   */
  mfaReAuthenticateByOTP (accessToken, reauthByOtpModel) {
    if (isNullOrWhiteSpace(accessToken)) {
      return Promise.reject(getValidationMessage('accessToken'));
    }
    if (checkJson(reauthByOtpModel)) {
      return Promise.reject(getValidationMessage('reauthByOtpModel'));
    }
    var queryParameters: any = {};

    queryParameters.access_token = accessToken;
    queryParameters.apiKey = this.config.apiKey;

    var resourcePath = 'identity/v2/auth/account/reauth/2fa/otp';

    return request(
      this.config,
      'PUT',
      resourcePath,
      queryParameters,
      reauthByOtpModel
    );
  }

  /**
   * This API is used to re-authenticate by set of backup codes via access token on the site that has Multi-factor authentication enabled in re-authentication for the user that does not have the device
   * @param {accessToken} Uniquely generated identifier key by LoginRadius that is activated after successful authentication.
   * @param {reauthByBackupCodeModel} Model Class containing Definition for MFA Reauthentication by Backup code
   * @return Complete user Multi-Factor Authentication Token data
   *14.5
   */
  mfaReAuthenticateByBackupCode (accessToken, reauthByBackupCodeModel) {
    if (isNullOrWhiteSpace(accessToken)) {
      return Promise.reject(getValidationMessage('accessToken'));
    }
    if (checkJson(reauthByBackupCodeModel)) {
      return Promise.reject(getValidationMessage('reauthByBackupCodeModel'));
    }
    var queryParameters: any = {};

    queryParameters.access_token = accessToken;
    queryParameters.apiKey = this.config.apiKey;

    var resourcePath = 'identity/v2/auth/account/reauth/2fa/backupcode';

    return request(
      this.config,
      'PUT',
      resourcePath,
      queryParameters,
      reauthByBackupCodeModel
    );
  }

  /**
   * This API is used to re-authenticate via Multi-factor-authentication by passing the google authenticator code
   * @param {accessToken} Uniquely generated identifier key by LoginRadius that is activated after successful authentication.
   * @param {reauthByGoogleAuthenticatorCodeModel} Model Class containing Definition for MFA Reauthentication by Google Authenticator
   * @return Complete user Multi-Factor Authentication Token data
   *14.6
   */
  mfaReAuthenticateByGoogleAuth (
    accessToken,
    reauthByGoogleAuthenticatorCodeModel
  ) {
    if (isNullOrWhiteSpace(accessToken)) {
      return Promise.reject(getValidationMessage('accessToken'));
    }
    if (checkJson(reauthByGoogleAuthenticatorCodeModel)) {
      return Promise.reject(
        getValidationMessage('reauthByGoogleAuthenticatorCodeModel')
      );
    }
    var queryParameters: any = {};

    queryParameters.access_token = accessToken;
    queryParameters.apiKey = this.config.apiKey;

    var resourcePath =
      'identity/v2/auth/account/reauth/2fa/googleauthenticatorcode';

    return request(
      this.config,
      'PUT',
      resourcePath,
      queryParameters,
      reauthByGoogleAuthenticatorCodeModel
    );
  }

  /**
   * This API is used to re-authenticate via Multi-factor-authentication by passing the password
   * @param {accessToken} Uniquely generated identifier key by LoginRadius that is activated after successful authentication.
   * @param {passwordEventBasedAuthModelWithLockout} Model Class containing Definition of payload for PasswordEventBasedAuthModel with Lockout API
   * @param {smsTemplate2FA} SMS Template Name
   * @return Complete user Multi-Factor Authentication Token data
   *14.7
   */
  mfaReAuthenticateByPassword (
    accessToken,
    passwordEventBasedAuthModelWithLockout,
    smsTemplate2FA
  ) {
    if (isNullOrWhiteSpace(accessToken)) {
      return Promise.reject(getValidationMessage('accessToken'));
    }
    if (checkJson(passwordEventBasedAuthModelWithLockout)) {
      return Promise.reject(
        getValidationMessage('passwordEventBasedAuthModelWithLockout')
      );
    }
    var queryParameters: any = {};

    queryParameters.access_token = accessToken;
    queryParameters.apiKey = this.config.apiKey;
    if (!isNullOrWhiteSpace(smsTemplate2FA)) {
      queryParameters.smsTemplate2FA = smsTemplate2FA;
    }

    var resourcePath = 'identity/v2/auth/account/reauth/password';

    return request(
      this.config,
      'PUT',
      resourcePath,
      queryParameters,
      passwordEventBasedAuthModelWithLockout
    );
  }

  /**
   * This API is used on the server-side to validate and verify the re-authentication token created by the MFA re-authentication API. This API checks re-authentications created by OTP.
   * @param {eventBasedMultiFactorToken} Model Class containing Definition for SecondFactorValidationToken
   * @param {uid} UID, the unified identifier for each user account
   * @return Response containing Definition of Complete Validation data
   *18.38
   */
  verifyMultiFactorOtpReauthentication (eventBasedMultiFactorToken, uid) {
    if (checkJson(eventBasedMultiFactorToken)) {
      return Promise.reject(getValidationMessage('eventBasedMultiFactorToken'));
    }
    if (isNullOrWhiteSpace(uid)) {
      return Promise.reject(getValidationMessage('uid'));
    }
    var queryParameters: any = {};

    queryParameters.apiKey = this.config.apiKey;
    queryParameters.apiSecret = this.config.apiSecret;

    var resourcePath = 'identity/v2/manage/account/' + uid + '/reauth/2fa';

    return request(
      this.config,
      'POST',
      resourcePath,
      queryParameters,
      eventBasedMultiFactorToken
    );
  }

  /**
   * This API is used on the server-side to validate and verify the re-authentication token created by the MFA re-authentication API. This API checks re-authentications created by password.
   * @param {eventBasedMultiFactorToken} Model Class containing Definition for SecondFactorValidationToken
   * @param {uid} UID, the unified identifier for each user account
   * @return Response containing Definition of Complete Validation data
   *18.39
   */
  verifyMultiFactorPasswordReauthentication (eventBasedMultiFactorToken, uid) {
    if (checkJson(eventBasedMultiFactorToken)) {
      return Promise.reject(getValidationMessage('eventBasedMultiFactorToken'));
    }
    if (isNullOrWhiteSpace(uid)) {
      return Promise.reject(getValidationMessage('uid'));
    }
    var queryParameters: any = {};

    queryParameters.apiKey = this.config.apiKey;
    queryParameters.apiSecret = this.config.apiSecret;

    var resourcePath = 'identity/v2/manage/account/' + uid + '/reauth/password';

    return request(
      this.config,
      'POST',
      resourcePath,
      queryParameters,
      eventBasedMultiFactorToken
    );
  }

  /**
   * This API is used on the server-side to validate and verify the re-authentication token created by the MFA re-authentication API. This API checks re-authentications created by PIN.
   * @param {eventBasedMultiFactorToken} Model Class containing Definition for SecondFactorValidationToken
   * @param {uid} UID, the unified identifier for each user account
   * @return Response containing Definition of Complete Validation data
   *18.40
   */
  verifyMultiFactorPINReauthentication (eventBasedMultiFactorToken, uid) {
    if (checkJson(eventBasedMultiFactorToken)) {
      return Promise.reject(getValidationMessage('eventBasedMultiFactorToken'));
    }
    if (isNullOrWhiteSpace(uid)) {
      return Promise.reject(getValidationMessage('uid'));
    }
    var queryParameters: any = {};

    queryParameters.apiKey = this.config.apiKey;
    queryParameters.apiSecret = this.config.apiSecret;

    var resourcePath = 'identity/v2/manage/account/' + uid + '/reauth/pin';

    return request(
      this.config,
      'POST',
      resourcePath,
      queryParameters,
      eventBasedMultiFactorToken
    );
  }

  /**
   * This API is used to validate the triggered MFA authentication flow with a password.
   * @param {accessToken} Uniquely generated identifier key by LoginRadius that is activated after successful authentication.
   * @param {pINAuthEventBasedAuthModelWithLockout} Model Class containing Definition of payload for PIN
   * @param {smsTemplate2FA} SMS Template Name
   * @return Response containing Definition response of MFA reauthentication
   *42.13
   */
  verifyPINAuthentication (
    accessToken,
    pINAuthEventBasedAuthModelWithLockout,
    smsTemplate2FA
  ) {
    if (isNullOrWhiteSpace(accessToken)) {
      return Promise.reject(getValidationMessage('accessToken'));
    }
    if (checkJson(pINAuthEventBasedAuthModelWithLockout)) {
      return Promise.reject(
        getValidationMessage('pINAuthEventBasedAuthModelWithLockout')
      );
    }
    var queryParameters: any = {};

    queryParameters.access_token = accessToken;
    queryParameters.apiKey = this.config.apiKey;
    if (!isNullOrWhiteSpace(smsTemplate2FA)) {
      queryParameters.smsTemplate2FA = smsTemplate2FA;
    }

    var resourcePath = 'identity/v2/auth/account/reauth/pin';

    return request(
      this.config,
      'PUT',
      resourcePath,
      queryParameters,
      pINAuthEventBasedAuthModelWithLockout
    );
  }

  /**
   * This API is used to validate the triggered MFA authentication flow with an Email OTP.
   * @param {accessToken} Uniquely generated identifier key by LoginRadius that is activated after successful authentication.
   * @param {reauthByEmailOtpModel} payload
   * @return Response containing Definition response of MFA reauthentication
   *42.14
   */
  reAuthValidateEmailOtp (accessToken, reauthByEmailOtpModel) {
    if (isNullOrWhiteSpace(accessToken)) {
      return Promise.reject(getValidationMessage('accessToken'));
    }
    if (checkJson(reauthByEmailOtpModel)) {
      return Promise.reject(getValidationMessage('reauthByEmailOtpModel'));
    }
    var queryParameters: any = {};

    queryParameters.access_token = accessToken;
    queryParameters.apiKey = this.config.apiKey;

    var resourcePath = 'identity/v2/auth/account/reauth/2fa/otp/email/verify';

    return request(
      this.config,
      'PUT',
      resourcePath,
      queryParameters,
      reauthByEmailOtpModel
    );
  }

  /**
   * This API is used to send the MFA Email OTP to the email for Re-authentication
   * @param {accessToken} Uniquely generated identifier key by LoginRadius that is activated after successful authentication.
   * @param {emailId} EmailId
   * @param {emailTemplate2FA} EmailTemplate2FA
   * @return Response containing Definition of Complete Validation data
   *42.15
   */
  reAuthSendEmailOtp (accessToken, emailId, emailTemplate2FA) {
    if (isNullOrWhiteSpace(accessToken)) {
      return Promise.reject(getValidationMessage('accessToken'));
    }
    if (isNullOrWhiteSpace(emailId)) {
      return Promise.reject(getValidationMessage('emailId'));
    }
    var queryParameters: any = {};

    queryParameters.access_token = accessToken;
    queryParameters.apiKey = this.config.apiKey;
    queryParameters.emailId = emailId;
    if (!isNullOrWhiteSpace(emailTemplate2FA)) {
      queryParameters.emailTemplate2FA = emailTemplate2FA;
    }

    var resourcePath = 'identity/v2/auth/account/reauth/2fa/otp/email';

    return request(this.config, 'GET', resourcePath, queryParameters, null);
  }

  /**
   * This API is used to validate the triggered MFA re-authentication flow with security questions answers.
   * @param {accessToken} Uniquely generated identifier key by LoginRadius that is activated after successful authentication.
   * @param {securityQuestionAnswerUpdateModel} payload
   * @return Response containing Definition response of MFA reauthentication
   *42.16
   */
  reAuthBySecurityQuestion (accessToken, securityQuestionAnswerUpdateModel) {
    if (isNullOrWhiteSpace(accessToken)) {
      return Promise.reject(getValidationMessage('accessToken'));
    }
    if (checkJson(securityQuestionAnswerUpdateModel)) {
      return Promise.reject(
        getValidationMessage('securityQuestionAnswerUpdateModel')
      );
    }
    var queryParameters: any = {};

    queryParameters.access_token = accessToken;
    queryParameters.apiKey = this.config.apiKey;

    var resourcePath =
      'identity/v2/auth/account/reauth/2fa/securityquestionanswer/verify';

    return request(
      this.config,
      'POST',
      resourcePath,
      queryParameters,
      securityQuestionAnswerUpdateModel
    );
  }
}

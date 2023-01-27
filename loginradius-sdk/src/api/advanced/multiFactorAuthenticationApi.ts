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

export default class MultiFactorAuthenticationApi {
  // eslint-disable-next-line no-useless-constructor, no-unused-vars, no-empty-function
  constructor (private config: LoginRadiusConfig) {}

  /**
   * This API is used to configure the Multi-factor authentication after login by using the access token when MFA is set as optional on the LoginRadius site.
   * @param accessToken Uniquely generated identifier key by LoginRadius that is activated after successful authentication.
   * @param smsTemplate2FA SMS Template Name
   * @return Response containing Definition of Complete Multi-Factor Authentication Settings data
   *5.7
   */
  mfaConfigureByAccessToken (accessToken: string, smsTemplate2FA?: string) {
    if (isNullOrWhiteSpace(accessToken)) {
      return Promise.reject(getValidationMessage('accessToken'));
    }
    var queryParameters: any = {};

    queryParameters.access_token = accessToken;
    queryParameters.apiKey = this.config.apiKey;
    if (!isNullOrWhiteSpace(smsTemplate2FA)) {
      queryParameters.smsTemplate2FA = smsTemplate2FA;
    }

    var resourcePath = 'identity/v2/auth/account/2fa';

    return request(this.config, 'GET', resourcePath, queryParameters, null);
  }

  /**
   * This API is used to trigger the Multi-factor authentication settings after login for secure actions
   * @param accessToken Uniquely generated identifier key by LoginRadius that is activated after successful authentication.
   * @param multiFactorAuthModelWithLockout Model Class containing Definition of payload for MultiFactorAuthModel With Lockout API
   * @param fields The fields parameter filters the API response so that the response only includes a specific set of fields
   * @return Response containing Definition for Complete profile data
   *5.9
   */
  mfaUpdateSetting (accessToken: string, multiFactorAuthModelWithLockout: object, fields: string) {
    if (isNullOrWhiteSpace(accessToken)) {
      return Promise.reject(getValidationMessage('accessToken'));
    }
    if (checkJson(multiFactorAuthModelWithLockout)) {
      return Promise.reject(
        getValidationMessage('multiFactorAuthModelWithLockout')
      );
    }
    var queryParameters: any = {};

    queryParameters.access_token = accessToken;
    queryParameters.apiKey = this.config.apiKey;
    if (!isNullOrWhiteSpace(fields)) {
      queryParameters.fields = fields;
    }

    var resourcePath = 'identity/v2/auth/account/2fa/verification/otp';

    return request(
      this.config,
      'PUT',
      resourcePath,
      queryParameters,
      multiFactorAuthModelWithLockout
    );
  }

  /**
   * This API is used to Enable Multi-factor authentication by access token on user login
   * @param accessToken Uniquely generated identifier key by LoginRadius that is activated after successful authentication.
   * @param multiFactorAuthModelByGoogleAuthenticatorCode Model Class containing Definition of payload for MultiFactorAuthModel By GoogleAuthenticator Code API
   * @param fields The fields parameter filters the API response so that the response only includes a specific set of fields
   * @param smsTemplate SMS Template name
   * @return Response containing Definition for Complete profile data
   *5.10
   */
  mfaUpdateByAccessToken (
    accessToken: string,
    multiFactorAuthModelByGoogleAuthenticatorCode: object,
    fields?: string,
    smsTemplate?: string
  ) {
    if (isNullOrWhiteSpace(accessToken)) {
      return Promise.reject(getValidationMessage('accessToken'));
    }
    if (checkJson(multiFactorAuthModelByGoogleAuthenticatorCode)) {
      return Promise.reject(
        getValidationMessage('multiFactorAuthModelByGoogleAuthenticatorCode')
      );
    }
    var queryParameters: any = {};

    queryParameters.access_token = accessToken;
    queryParameters.apiKey = this.config.apiKey;
    if (!isNullOrWhiteSpace(fields)) {
      queryParameters.fields = fields;
    }
    if (!isNullOrWhiteSpace(smsTemplate)) {
      queryParameters.smsTemplate = smsTemplate;
    }

    var resourcePath =
      'identity/v2/auth/account/2fa/verification/googleauthenticatorcode';

    return request(
      this.config,
      'PUT',
      resourcePath,
      queryParameters,
      multiFactorAuthModelByGoogleAuthenticatorCode
    );
  }

  /**
   * This API is used to update the Multi-factor authentication phone number by sending the verification OTP to the provided phone number
   * @param accessToken Uniquely generated identifier key by LoginRadius that is activated after successful authentication.
   * @param phoneNo2FA Phone Number For 2FA
   * @param smsTemplate2FA SMS Template Name
   * @return Response containing Definition for Complete SMS data
   *5.11
   */
  mfaUpdatePhoneNumberByToken (accessToken: string, phoneNo2FA: string, smsTemplate2FA?: string) {
    if (isNullOrWhiteSpace(accessToken)) {
      return Promise.reject(getValidationMessage('accessToken'));
    }
    if (isNullOrWhiteSpace(phoneNo2FA)) {
      return Promise.reject(getValidationMessage('phoneNo2FA'));
    }
    var queryParameters: any = {};

    queryParameters.access_token = accessToken;
    queryParameters.apiKey = this.config.apiKey;
    if (!isNullOrWhiteSpace(smsTemplate2FA)) {
      queryParameters.smsTemplate2FA = smsTemplate2FA;
    }

    var bodyParameters: any = {};
    bodyParameters.phoneNo2FA = phoneNo2FA;

    var resourcePath = 'identity/v2/auth/account/2fa';

    return request(
      this.config,
      'PUT',
      resourcePath,
      queryParameters,
      bodyParameters
    );
  }

  /**
   * This API Resets the Google Authenticator configurations on a given account via the access token
   * @param accessToken Uniquely generated identifier key by LoginRadius that is activated after successful authentication.
   * @param googleauthenticator boolean type value,Enable google Authenticator Code.
   * @return Response containing Definition of Delete Request
   *5.12.1
   */
  mfaResetGoogleAuthByToken (accessToken: string, googleauthenticator?: boolean) {
    if (isNullOrWhiteSpace(accessToken)) {
      return Promise.reject(getValidationMessage('accessToken'));
    }
    var queryParameters: any = {};

    queryParameters.access_token = accessToken;
    queryParameters.apiKey = this.config.apiKey;

    var bodyParameters: any = {};
    bodyParameters.googleauthenticator = googleauthenticator;

    var resourcePath = 'identity/v2/auth/account/2fa/authenticator';

    return request(
      this.config,
      'DELETE',
      resourcePath,
      queryParameters,
      bodyParameters
    );
  }

  /**
   * This API resets the SMS Authenticator configurations on a given account via the access token.
   * @param accessToken Uniquely generated identifier key by LoginRadius that is activated after successful authentication.
   * @param otpauthenticator Pass 'otpauthenticator' to remove SMS Authenticator
   * @return Response containing Definition of Delete Request
   *5.12.2
   */
  mfaResetSMSAuthByToken (accessToken: string, otpauthenticator?: string) {
    if (isNullOrWhiteSpace(accessToken)) {
      return Promise.reject(getValidationMessage('accessToken'));
    }
    var queryParameters: any = {};

    queryParameters.access_token = accessToken;
    queryParameters.apiKey = this.config.apiKey;

    var bodyParameters: any = {};
    bodyParameters.otpauthenticator = otpauthenticator;

    var resourcePath = 'identity/v2/auth/account/2fa/authenticator';

    return request(
      this.config,
      'DELETE',
      resourcePath,
      queryParameters,
      bodyParameters
    );
  }

  /**
   * This API is used to get a set of backup codes via access token to allow the user login on a site that has Multi-factor Authentication enabled in the event that the user does not have a secondary factor available. We generate 10 codes, each code can only be consumed once. If any user attempts to go over the number of invalid login attempts configured in the Dashboard then the account gets blocked automatically
   * @param accessToken Uniquely generated identifier key by LoginRadius that is activated after successful authentication.
   * @return Response containing Definition of Complete Backup Code data
   *5.13
   */
  mfaBackupCodeByAccessToken (accessToken: string) {
    if (isNullOrWhiteSpace(accessToken)) {
      return Promise.reject(getValidationMessage('accessToken'));
    }
    var queryParameters: any = {};

    queryParameters.access_token = accessToken;
    queryParameters.apiKey = this.config.apiKey;

    var resourcePath = 'identity/v2/auth/account/2fa/backupcode';

    return request(this.config, 'GET', resourcePath, queryParameters, null);
  }

  /**
   * API is used to reset the backup codes on a given account via the access token. This API call will generate 10 new codes, each code can only be consumed once
   * @param accessToken Uniquely generated identifier key by LoginRadius that is activated after successful authentication.
   * @return Response containing Definition of Complete Backup Code data
   *5.14
   */
  mfaResetBackupCodeByAccessToken (accessToken: string) {
    if (isNullOrWhiteSpace(accessToken)) {
      return Promise.reject(getValidationMessage('accessToken'));
    }
    var queryParameters: any = {};

    queryParameters.access_token = accessToken;
    queryParameters.apiKey = this.config.apiKey;

    var resourcePath = 'identity/v2/auth/account/2fa/backupcode/reset';

    return request(this.config, 'GET', resourcePath, queryParameters, null);
  }

  /**
   * This API is created to send the OTP to the email if email OTP authenticator is enabled in app's MFA configuration.
   * @param accessToken access_token
   * @param emailId EmailId
   * @param emailTemplate2FA EmailTemplate2FA
   * @return Response containing Definition of Complete Validation data
   *5.17
   */
  mfaEmailOtpByAccessToken (accessToken: string, emailId: string, emailTemplate2FA?: string) {
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

    var resourcePath = 'identity/v2/auth/account/2fa/otp/email';

    return request(this.config, 'GET', resourcePath, queryParameters, null);
  }

  /**
   * This API is used to set up MFA Email OTP authenticator on profile after login.
   * @param accessToken access_token
   * @param multiFactorAuthModelByEmailOtpWithLockout payload
   * @return Response containing Definition for Complete profile data
   *5.18
   */
  mfaValidateEmailOtpByAccessToken (
    accessToken: string,
    multiFactorAuthModelByEmailOtpWithLockout: any
  ) {
    if (isNullOrWhiteSpace(accessToken)) {
      return Promise.reject(getValidationMessage('accessToken'));
    }
    if (checkJson(multiFactorAuthModelByEmailOtpWithLockout)) {
      return Promise.reject(
        getValidationMessage('multiFactorAuthModelByEmailOtpWithLockout')
      );
    }
    var queryParameters: any = {};

    queryParameters.access_token = accessToken;
    queryParameters.apiKey = this.config.apiKey;

    var resourcePath = 'identity/v2/auth/account/2fa/verification/otp/email';

    return request(
      this.config,
      'PUT',
      resourcePath,
      queryParameters,
      multiFactorAuthModelByEmailOtpWithLockout
    );
  }

  /**
   * This API is used to reset the Email OTP Authenticator settings for an MFA-enabled user
   * @param accessToken access_token
   * @return Response containing Definition of Delete Request
   *5.19
   */
  mfaResetEmailOtpAuthenticatorByAccessToken (accessToken: string) {
    if (isNullOrWhiteSpace(accessToken)) {
      return Promise.reject(getValidationMessage('accessToken'));
    }
    var queryParameters: any = {};

    queryParameters.access_token = accessToken;
    queryParameters.apiKey = this.config.apiKey;

    var resourcePath = 'identity/v2/auth/account/2fa/authenticator/otp/email';

    return request(this.config, 'DELETE', resourcePath, queryParameters, null);
  }

  /**
   * This API is used to set up MFA Security Question authenticator on profile after login.
   * @param accessToken access_token
   * @param securityQuestionAnswerModelByAccessToken payload
   * @return Response containing Definition of Complete Validation data
   *5.20
   */
  mfaSecurityQuestionAnswerByAccessToken (
    accessToken: string,
    securityQuestionAnswerModelByAccessToken: any
  ) {
    if (isNullOrWhiteSpace(accessToken)) {
      return Promise.reject(getValidationMessage('accessToken'));
    }
    if (checkJson(securityQuestionAnswerModelByAccessToken)) {
      return Promise.reject(
        getValidationMessage('securityQuestionAnswerModelByAccessToken')
      );
    }
    var queryParameters: any = {};

    queryParameters.access_token = accessToken;
    queryParameters.apiKey = this.config.apiKey;

    var resourcePath = 'identity/v2/auth/account/2fa/securityquestionanswer';

    return request(
      this.config,
      'PUT',
      resourcePath,
      queryParameters,
      securityQuestionAnswerModelByAccessToken
    );
  }

  /**
   * This API is used to Reset MFA Security Question Authenticator By Access Token
   * @param accessToken access_token
   * @return Response containing Definition of Delete Request
   *5.21
   */
  mfaResetSecurityQuestionAuthenticatorByAccessToken (accessToken: string) {
    if (isNullOrWhiteSpace(accessToken)) {
      return Promise.reject(getValidationMessage('accessToken'));
    }
    var queryParameters: any = {};

    queryParameters.access_token = accessToken;
    queryParameters.apiKey = this.config.apiKey;

    var resourcePath =
      'identity/v2/auth/account/2fa/authenticator/securityquestionanswer';

    return request(this.config, 'DELETE', resourcePath, queryParameters, null);
  }

  /**
  * This API can be used to login by emailid on a Multi-factor authentication enabled LoginRadius site.
  * @param email user's email
  * @param password Password for the email
  * @param emailTemplate Email template name
  * @param fields The fields parameter filters the API response so that the response only includes a specific set of fields
  * @param loginUrl Url where the user is logging from
  * @param smsTemplate SMS Template name
  * @param smsTemplate2FA SMS Template Name
  * @param verificationUrl Email verification url
  * @param emailTemplate2FA 2FA Email Template name
  * @return Complete user UserProfile data
  *9.8.1
  */
  mfaLoginByEmail (
    email: string,
    password: string,
    emailTemplate: string,
    fields: string,
    loginUrl: string,
    smsTemplate: string,
    smsTemplate2FA: string,
    verificationUrl: string,
    emailTemplate2FA: string
  ) {
    if (isNullOrWhiteSpace(email)) {
      return Promise.reject(getValidationMessage('email'));
    }
    if (isNullOrWhiteSpace(password)) {
      return Promise.reject(getValidationMessage('password'));
    }
    var queryParameters: any = {};

    queryParameters.apiKey = this.config.apiKey;
    if (!isNullOrWhiteSpace(emailTemplate)) {
      queryParameters.emailTemplate = emailTemplate;
    }
    if (!isNullOrWhiteSpace(fields)) {
      queryParameters.fields = fields;
    }
    if (!isNullOrWhiteSpace(loginUrl)) {
      queryParameters.loginUrl = loginUrl;
    }
    if (!isNullOrWhiteSpace(smsTemplate)) {
      queryParameters.smsTemplate = smsTemplate;
    }
    if (!isNullOrWhiteSpace(smsTemplate2FA)) {
      queryParameters.smsTemplate2FA = smsTemplate2FA;
    }
    if (!isNullOrWhiteSpace(verificationUrl)) {
      queryParameters.verificationUrl = verificationUrl;
    }
    if (!isNullOrWhiteSpace(emailTemplate2FA)) {
      queryParameters.emailTemplate2FA = emailTemplate2FA;
    }

    var bodyParameters: any = {};
    bodyParameters.email = email;
    bodyParameters.password = password;

    var resourcePath = 'identity/v2/auth/login/2fa';

    return request(
      this.config,
      'POST',
      resourcePath,
      queryParameters,
      bodyParameters
    );
  }

  /**
   * This API can be used to login by username on a Multi-factor authentication enabled LoginRadius site.
   * @param password Password for the email
   * @param username Username of the user
   * @param emailTemplate Email template name
   * @param fields The fields parameter filters the API response so that the response only includes a specific set of fields
   * @param loginUrl Url where the user is logging from
   * @param smsTemplate SMS Template name
   * @param smsTemplate2FA SMS Template Name
   * @param verificationUrl Email verification url
   * @param emailTemplate2FA 2FA Email Template name
   * @return Complete user UserProfile data
   *9.8.2
   */
  mfaLoginByUserName (
    password: string,
    username: string,
    emailTemplate?: string,
    fields?: string,
    loginUrl?: string,
    smsTemplate?: string,
    smsTemplate2FA?: string,
    verificationUrl?: string,
    emailTemplate2FA?: string
  ) {
    if (isNullOrWhiteSpace(password)) {
      return Promise.reject(getValidationMessage('password'));
    }
    if (isNullOrWhiteSpace(username)) {
      return Promise.reject(getValidationMessage('username'));
    }
    var queryParameters: any = {};

    queryParameters.apiKey = this.config.apiKey;
    if (!isNullOrWhiteSpace(emailTemplate)) {
      queryParameters.emailTemplate = emailTemplate;
    }
    if (!isNullOrWhiteSpace(fields)) {
      queryParameters.fields = fields;
    }
    if (!isNullOrWhiteSpace(loginUrl)) {
      queryParameters.loginUrl = loginUrl;
    }
    if (!isNullOrWhiteSpace(smsTemplate)) {
      queryParameters.smsTemplate = smsTemplate;
    }
    if (!isNullOrWhiteSpace(smsTemplate2FA)) {
      queryParameters.smsTemplate2FA = smsTemplate2FA;
    }
    if (!isNullOrWhiteSpace(verificationUrl)) {
      queryParameters.verificationUrl = verificationUrl;
    }
    if (!isNullOrWhiteSpace(emailTemplate2FA)) {
      queryParameters.emailTemplate2FA = emailTemplate2FA;
    }

    var bodyParameters: any = {};
    bodyParameters.password = password;
    bodyParameters.username = username;

    var resourcePath = 'identity/v2/auth/login/2fa';

    return request(
      this.config,
      'POST',
      resourcePath,
      queryParameters,
      bodyParameters
    );
  }

  /**
   * This API can be used to login by Phone on a Multi-factor authentication enabled LoginRadius site.
   * @param password Password for the email
   * @param phone New Phone Number
   * @param emailTemplate Email template name
   * @param fields The fields parameter filters the API response so that the response only includes a specific set of fields
   * @param loginUrl Url where the user is logging from
   * @param smsTemplate SMS Template name
   * @param smsTemplate2FA SMS Template Name
   * @param verificationUrl Email verification url
   * @param emailTemplate2FA 2FA Email Template name
   * @return Complete user UserProfile data
   *9.8.3
   */
  mfaLoginByPhone (
    password: string,
    phone: string,
    emailTemplate?: string,
    fields?: string,
    loginUrl?: string,
    smsTemplate?: string,
    smsTemplate2FA?: string,
    verificationUrl?: string,
    emailTemplate2FA?: string
  ) {
    if (isNullOrWhiteSpace(password)) {
      return Promise.reject(getValidationMessage('password'));
    }
    if (isNullOrWhiteSpace(phone)) {
      return Promise.reject(getValidationMessage('phone'));
    }
    var queryParameters: any = {};

    queryParameters.apiKey = this.config.apiKey;
    if (!isNullOrWhiteSpace(emailTemplate)) {
      queryParameters.emailTemplate = emailTemplate;
    }
    if (!isNullOrWhiteSpace(fields)) {
      queryParameters.fields = fields;
    }
    if (!isNullOrWhiteSpace(loginUrl)) {
      queryParameters.loginUrl = loginUrl;
    }
    if (!isNullOrWhiteSpace(smsTemplate)) {
      queryParameters.smsTemplate = smsTemplate;
    }
    if (!isNullOrWhiteSpace(smsTemplate2FA)) {
      queryParameters.smsTemplate2FA = smsTemplate2FA;
    }
    if (!isNullOrWhiteSpace(verificationUrl)) {
      queryParameters.verificationUrl = verificationUrl;
    }
    if (!isNullOrWhiteSpace(emailTemplate2FA)) {
      queryParameters.emailTemplate2FA = emailTemplate2FA;
    }
    var bodyParameters: any = {};
    bodyParameters.password = password;
    bodyParameters.phone = phone;

    var resourcePath = 'identity/v2/auth/login/2fa';

    return request(
      this.config,
      'POST',
      resourcePath,
      queryParameters,
      bodyParameters
    );
  }

  /**
   * This API is used to login via Multi-factor authentication by passing the One Time Password received via SMS
   * @param multiFactorAuthModelWithLockout Model Class containing Definition of payload for MultiFactorAuthModel With Lockout API
   * @param secondFactorAuthenticationToken A Uniquely generated MFA identifier token after successful authentication
   * @param fields The fields parameter filters the API response so that the response only includes a specific set of fields
   * @param smsTemplate2FA SMS Template Name
   * @param rbaBrowserEmailTemplate
   * @param rbaCityEmailTemplate
   * @param rbaCountryEmailTemplate
   * @param rbaIpEmailTemplate
   * @return Complete user UserProfile data
   *9.12
   */
  mfaValidateOTPByPhone (
    multiFactorAuthModelWithLockout: object,
    secondFactorAuthenticationToken: string,
    fields?: string,
    smsTemplate2FA?: string,
    rbaBrowserEmailTemplate?: string,
    rbaCityEmailTemplate?: string,
    rbaCountryEmailTemplate?: string,
    rbaIpEmailTemplate?: string
  ) {
    if (checkJson(multiFactorAuthModelWithLockout)) {
      return Promise.reject(
        getValidationMessage('multiFactorAuthModelWithLockout')
      );
    }
    if (isNullOrWhiteSpace(secondFactorAuthenticationToken)) {
      return Promise.reject(
        getValidationMessage('secondFactorAuthenticationToken')
      );
    }
    var queryParameters: any = {};

    queryParameters.apiKey = this.config.apiKey;
    queryParameters.secondFactorAuthenticationToken =
      secondFactorAuthenticationToken;
    if (!isNullOrWhiteSpace(fields)) {
      queryParameters.fields = fields;
    }
    if (!isNullOrWhiteSpace(smsTemplate2FA)) {
      queryParameters.smsTemplate2FA = smsTemplate2FA;
    }
    if (!isNullOrWhiteSpace(rbaBrowserEmailTemplate)) {
      queryParameters.rbaBrowserEmailTemplate = rbaBrowserEmailTemplate;
    }
    if (!isNullOrWhiteSpace(rbaCityEmailTemplate)) {
      queryParameters.rbaCityEmailTemplate = rbaCityEmailTemplate;
    }
    if (!isNullOrWhiteSpace(rbaCountryEmailTemplate)) {
      queryParameters.rbaCountryEmailTemplate = rbaCountryEmailTemplate;
    }
    if (!isNullOrWhiteSpace(rbaIpEmailTemplate)) {
      queryParameters.rbaIpEmailTemplate = rbaIpEmailTemplate;
    }

    var resourcePath = 'identity/v2/auth/login/2fa/verification/otp';

    return request(
      this.config,
      'PUT',
      resourcePath,
      queryParameters,
      multiFactorAuthModelWithLockout
    );
  }

  /**
   * This API is used to login via Multi-factor-authentication by passing the google authenticator code.
   * @param googleAuthenticatorCode The code generated by google authenticator app after scanning QR code
   * @param secondFactorAuthenticationToken SecondFactorAuthenticationToken
   * @param fields The fields parameter filters the API response so that the response only includes a specific set of fields
   * @param rbaBrowserEmailTemplate RbaBrowserEmailTemplate
   * @param rbaCityEmailTemplate RbaCityEmailTemplate
   * @param rbaCountryEmailTemplate RbaCountryEmailTemplate
   * @param rbaIpEmailTemplate RbaIpEmailTemplate
   * @return Complete user UserProfile data
   *9.13
   */
  mfaValidateGoogleAuthCode (
    googleAuthenticatorCode: string,
    secondFactorAuthenticationToken: string,
    fields?: string,
    rbaBrowserEmailTemplate?: string,
    rbaCityEmailTemplate?: string,
    rbaCountryEmailTemplate?: string,
    rbaIpEmailTemplate?: string
  ) {
    if (isNullOrWhiteSpace(googleAuthenticatorCode)) {
      return Promise.reject(getValidationMessage('googleAuthenticatorCode'));
    }
    if (isNullOrWhiteSpace(secondFactorAuthenticationToken)) {
      return Promise.reject(
        getValidationMessage('secondFactorAuthenticationToken')
      );
    }
    var queryParameters: any = {};

    queryParameters.apiKey = this.config.apiKey;
    queryParameters.secondFactorAuthenticationToken =
      secondFactorAuthenticationToken;
    if (!isNullOrWhiteSpace(fields)) {
      queryParameters.fields = fields;
    }
    if (!isNullOrWhiteSpace(rbaBrowserEmailTemplate)) {
      queryParameters.rbaBrowserEmailTemplate = rbaBrowserEmailTemplate;
    }
    if (!isNullOrWhiteSpace(rbaCityEmailTemplate)) {
      queryParameters.rbaCityEmailTemplate = rbaCityEmailTemplate;
    }
    if (!isNullOrWhiteSpace(rbaCountryEmailTemplate)) {
      queryParameters.rbaCountryEmailTemplate = rbaCountryEmailTemplate;
    }
    if (!isNullOrWhiteSpace(rbaIpEmailTemplate)) {
      queryParameters.rbaIpEmailTemplate = rbaIpEmailTemplate;
    }

    var bodyParameters: any = {};
    bodyParameters.googleAuthenticatorCode = googleAuthenticatorCode;

    var resourcePath =
      'identity/v2/auth/login/2fa/verification/googleauthenticatorcode';

    return request(
      this.config,
      'PUT',
      resourcePath,
      queryParameters,
      bodyParameters
    );
  }

  /**
   * This API is used to validate the backup code provided by the user and if valid, we return an access token allowing the user to login incases where Multi-factor authentication (MFA) is enabled and the secondary factor is unavailable. When a user initially downloads the Backup codes, We generate 10 codes, each code can only be consumed once. if any user attempts to go over the number of invalid login attempts configured in the Dashboard then the account gets blocked automatically
   * @param multiFactorAuthModelByBackupCode Model Class containing Definition of payload for MultiFactorAuth By BackupCode API
   * @param secondFactorAuthenticationToken A Uniquely generated MFA identifier token after successful authentication
   * @param fields The fields parameter filters the API response so that the response only includes a specific set of fields
   * @param rbaBrowserEmailTemplate
   * @param rbaCityEmailTemplate
   * @param rbaCountryEmailTemplate
   * @param rbaIpEmailTemplate
   * @return Complete user UserProfile data
   *9.14
   */
  mfaValidateBackupCode (
    multiFactorAuthModelByBackupCode: object,
    secondFactorAuthenticationToken: string,
    fields?: string,
    rbaBrowserEmailTemplate?: string,
    rbaCityEmailTemplate?: string,
    rbaCountryEmailTemplate?: string,
    rbaIpEmailTemplate?: string
  ) {
    if (checkJson(multiFactorAuthModelByBackupCode)) {
      return Promise.reject(
        getValidationMessage('multiFactorAuthModelByBackupCode')
      );
    }
    if (isNullOrWhiteSpace(secondFactorAuthenticationToken)) {
      return Promise.reject(
        getValidationMessage('secondFactorAuthenticationToken')
      );
    }
    var queryParameters: any = {};

    queryParameters.apiKey = this.config.apiKey;
    queryParameters.secondFactorAuthenticationToken =
      secondFactorAuthenticationToken;
    if (!isNullOrWhiteSpace(fields)) {
      queryParameters.fields = fields;
    }
    if (!isNullOrWhiteSpace(rbaBrowserEmailTemplate)) {
      queryParameters.rbaBrowserEmailTemplate = rbaBrowserEmailTemplate;
    }
    if (!isNullOrWhiteSpace(rbaCityEmailTemplate)) {
      queryParameters.rbaCityEmailTemplate = rbaCityEmailTemplate;
    }
    if (!isNullOrWhiteSpace(rbaCountryEmailTemplate)) {
      queryParameters.rbaCountryEmailTemplate = rbaCountryEmailTemplate;
    }
    if (!isNullOrWhiteSpace(rbaIpEmailTemplate)) {
      queryParameters.rbaIpEmailTemplate = rbaIpEmailTemplate;
    }

    var resourcePath = 'identity/v2/auth/login/2fa/verification/backupcode';

    return request(
      this.config,
      'PUT',
      resourcePath,
      queryParameters,
      multiFactorAuthModelByBackupCode
    );
  }

  /**
   * This API is used to update (if configured) the phone number used for Multi-factor authentication by sending the verification OTP to the provided phone number
   * @param phoneNo2FA Phone Number For 2FA
   * @param secondFactorAuthenticationToken A Uniquely generated MFA identifier token after successful authentication
   * @param smsTemplate2FA SMS Template Name
   * @return Response containing Definition for Complete SMS data
   *9.16
   */
  mfaUpdatePhoneNumber (
    phoneNo2FA: string,
    secondFactorAuthenticationToken: string,
    smsTemplate2FA?: string
  ) {
    if (isNullOrWhiteSpace(phoneNo2FA)) {
      return Promise.reject(getValidationMessage('phoneNo2FA'));
    }
    if (isNullOrWhiteSpace(secondFactorAuthenticationToken)) {
      return Promise.reject(
        getValidationMessage('secondFactorAuthenticationToken')
      );
    }
    var queryParameters: any = {};

    queryParameters.apiKey = this.config.apiKey;
    queryParameters.secondFactorAuthenticationToken =
      secondFactorAuthenticationToken;
    if (!isNullOrWhiteSpace(smsTemplate2FA)) {
      queryParameters.smsTemplate2FA = smsTemplate2FA;
    }

    var bodyParameters: any = {};
    bodyParameters.phoneNo2FA = phoneNo2FA;

    var resourcePath = 'identity/v2/auth/login/2fa';

    return request(
      this.config,
      'PUT',
      resourcePath,
      queryParameters,
      bodyParameters
    );
  }

  /**
   * This API is used to resending the verification OTP to the provided phone number
   * @param secondFactorAuthenticationToken A Uniquely generated MFA identifier token after successful authentication
   * @param smsTemplate2FA SMS Template Name
   * @return Response containing Definition for Complete SMS data
   *9.17
   */
  mfaResendOTP (secondFactorAuthenticationToken, smsTemplate2FA) {
    if (isNullOrWhiteSpace(secondFactorAuthenticationToken)) {
      return Promise.reject(
        getValidationMessage('secondFactorAuthenticationToken')
      );
    }
    var queryParameters: any = {};

    queryParameters.apiKey = this.config.apiKey;
    queryParameters.secondFactorAuthenticationToken =
      secondFactorAuthenticationToken;
    if (!isNullOrWhiteSpace(smsTemplate2FA)) {
      queryParameters.smsTemplate2FA = smsTemplate2FA;
    }

    var resourcePath = 'identity/v2/auth/login/2fa/resend';

    return request(this.config, 'GET', resourcePath, queryParameters, null);
  }

  /**
   * An API designed to send the MFA Email OTP to the email.
   * @param emailIdModel payload
   * @param secondFactorAuthenticationToken SecondFactorAuthenticationToken
   * @param emailTemplate2FA EmailTemplate2FA
   * @return Response containing Definition of Complete Validation data
   *9.18
   */
  mfaEmailOTP (emailIdModel: object, secondFactorAuthenticationToken: string, emailTemplate2FA?: string) {
    if (checkJson(emailIdModel)) {
      return Promise.reject(getValidationMessage('emailIdModel'));
    }
    if (isNullOrWhiteSpace(secondFactorAuthenticationToken)) {
      return Promise.reject(
        getValidationMessage('secondFactorAuthenticationToken')
      );
    }
    var queryParameters: any = {};

    queryParameters.apiKey = this.config.apiKey;
    queryParameters.secondFactorAuthenticationToken =
      secondFactorAuthenticationToken;
    if (!isNullOrWhiteSpace(emailTemplate2FA)) {
      queryParameters.emailTemplate2FA = emailTemplate2FA;
    }

    var resourcePath = 'identity/v2/auth/login/2fa/otp/email';

    return request(
      this.config,
      'POST',
      resourcePath,
      queryParameters,
      emailIdModel
    );
  }

  /**
   * This API is used to Verify MFA Email OTP by MFA Token
   * @param multiFactorAuthModelByEmailOtp payload
   * @param secondFactorAuthenticationToken SecondFactorAuthenticationToken
   * @param rbaBrowserEmailTemplate RbaBrowserEmailTemplate
   * @param rbaCityEmailTemplate RbaCityEmailTemplate
   * @param rbaCountryEmailTemplate RbaCountryEmailTemplate
   * @param rbaIpEmailTemplate RbaIpEmailTemplate
   * @return Response Containing Access Token and Complete Profile Data
   *9.25
   */
  mfaValidateEmailOtp (
    multiFactorAuthModelByEmailOtp: object,
    secondFactorAuthenticationToken: string,
    rbaBrowserEmailTemplate?: string,
    rbaCityEmailTemplate?: string,
    rbaCountryEmailTemplate?: string,
    rbaIpEmailTemplate?: string
  ) {
    if (checkJson(multiFactorAuthModelByEmailOtp)) {
      return Promise.reject(
        getValidationMessage('multiFactorAuthModelByEmailOtp')
      );
    }
    if (isNullOrWhiteSpace(secondFactorAuthenticationToken)) {
      return Promise.reject(
        getValidationMessage('secondFactorAuthenticationToken')
      );
    }
    var queryParameters: any = {};

    queryParameters.apiKey = this.config.apiKey;
    queryParameters.secondFactorAuthenticationToken =
      secondFactorAuthenticationToken;
    if (!isNullOrWhiteSpace(rbaBrowserEmailTemplate)) {
      queryParameters.rbaBrowserEmailTemplate = rbaBrowserEmailTemplate;
    }
    if (!isNullOrWhiteSpace(rbaCityEmailTemplate)) {
      queryParameters.rbaCityEmailTemplate = rbaCityEmailTemplate;
    }
    if (!isNullOrWhiteSpace(rbaCountryEmailTemplate)) {
      queryParameters.rbaCountryEmailTemplate = rbaCountryEmailTemplate;
    }
    if (!isNullOrWhiteSpace(rbaIpEmailTemplate)) {
      queryParameters.rbaIpEmailTemplate = rbaIpEmailTemplate;
    }

    var resourcePath = 'identity/v2/auth/login/2fa/verification/otp/email';

    return request(
      this.config,
      'PUT',
      resourcePath,
      queryParameters,
      multiFactorAuthModelByEmailOtp
    );
  }

  /**
   * This API is used to set the security questions on the profile with the MFA token when MFA flow is required.
   * @param securityQuestionAnswerUpdateModel payload
   * @param secondFactorAuthenticationToken SecondFactorAuthenticationToken
   * @return Response Containing Access Token and Complete Profile Data
   *9.26
   */
  mfaSecurityQuestionAnswer (
    securityQuestionAnswerUpdateModel: object,
    secondFactorAuthenticationToken: string
  ) {
    if (checkJson(securityQuestionAnswerUpdateModel)) {
      return Promise.reject(
        getValidationMessage('securityQuestionAnswerUpdateModel')
      );
    }
    if (isNullOrWhiteSpace(secondFactorAuthenticationToken)) {
      return Promise.reject(
        getValidationMessage('secondFactorAuthenticationToken')
      );
    }
    var queryParameters: any = {};

    queryParameters.apiKey = this.config.apiKey;
    queryParameters.secondFactorAuthenticationToken =
      secondFactorAuthenticationToken;

    var resourcePath = 'identity/v2/auth/login/2fa/securityquestionanswer';

    return request(
      this.config,
      'PUT',
      resourcePath,
      queryParameters,
      securityQuestionAnswerUpdateModel
    );
  }

  /**
   * This API is used to resending the verification OTP to the provided phone number
   * @param securityQuestionAnswerUpdateModel payload
   * @param secondFactorAuthenticationToken SecondFactorAuthenticationToken
   * @param rbaBrowserEmailTemplate RbaBrowserEmailTemplate
   * @param rbaCityEmailTemplate RbaCityEmailTemplate
   * @param rbaCountryEmailTemplate RbaCountryEmailTemplate
   * @param rbaIpEmailTemplate RbaIpEmailTemplate
   * @return Response Containing Access Token and Complete Profile Data
   *9.27
   */
  mfaSecurityQuestionAnswerVerification (
    securityQuestionAnswerUpdateModel: object,
    secondFactorAuthenticationToken: string,
    rbaBrowserEmailTemplate?: string,
    rbaCityEmailTemplate?: string,
    rbaCountryEmailTemplate?: string,
    rbaIpEmailTemplate?: string
  ) {
    if (checkJson(securityQuestionAnswerUpdateModel)) {
      return Promise.reject(
        getValidationMessage('securityQuestionAnswerUpdateModel')
      );
    }
    if (isNullOrWhiteSpace(secondFactorAuthenticationToken)) {
      return Promise.reject(
        getValidationMessage('secondFactorAuthenticationToken')
      );
    }
    var queryParameters: any = {};

    queryParameters.apiKey = this.config.apiKey;
    queryParameters.secondFactorAuthenticationToken =
      secondFactorAuthenticationToken;
    if (!isNullOrWhiteSpace(rbaBrowserEmailTemplate)) {
      queryParameters.rbaBrowserEmailTemplate = rbaBrowserEmailTemplate;
    }
    if (!isNullOrWhiteSpace(rbaCityEmailTemplate)) {
      queryParameters.rbaCityEmailTemplate = rbaCityEmailTemplate;
    }
    if (!isNullOrWhiteSpace(rbaCountryEmailTemplate)) {
      queryParameters.rbaCountryEmailTemplate = rbaCountryEmailTemplate;
    }
    if (!isNullOrWhiteSpace(rbaIpEmailTemplate)) {
      queryParameters.rbaIpEmailTemplate = rbaIpEmailTemplate;
    }

    var resourcePath =
      'identity/v2/auth/login/2fa/verification/securityquestionanswer';

    return request(
      this.config,
      'POST',
      resourcePath,
      queryParameters,
      securityQuestionAnswerUpdateModel
    );
  }

  /**
   * This API resets the SMS Authenticator configurations on a given account via the UID.
   * @param otpauthenticator Pass 'otpauthenticator' to remove SMS Authenticator
   * @param uid UID, the unified identifier for each user account
   * @return Response containing Definition of Delete Request
   *18.21.1
   */
  mfaResetSMSAuthenticatorByUid (otpauthenticator: string, uid: string) {
    if (isNullOrWhiteSpace(uid)) {
      return Promise.reject(getValidationMessage('uid'));
    }
    var queryParameters: any = {};

    queryParameters.apiKey = this.config.apiKey;
    queryParameters.apiSecret = this.config.apiSecret;
    queryParameters.uid = uid;

    var bodyParameters: any = {};
    bodyParameters.otpauthenticator = otpauthenticator;

    var resourcePath = 'identity/v2/manage/account/2fa/authenticator';

    return request(
      this.config,
      'DELETE',
      resourcePath,
      queryParameters,
      bodyParameters
    );
  }

  /**
   * This API resets the Google Authenticator configurations on a given account via the UID.
   * @param googleauthenticator boolean type value,Enable google Authenticator Code.
   * @param uid UID, the unified identifier for each user account
   * @return Response containing Definition of Delete Request
   *18.21.2
   */
  mfaResetGoogleAuthenticatorByUid (googleauthenticator: boolean, uid: string) {
    if (isNullOrWhiteSpace(uid)) {
      return Promise.reject(getValidationMessage('uid'));
    }
    var queryParameters: any = {};

    queryParameters.apiKey = this.config.apiKey;
    queryParameters.apiSecret = this.config.apiSecret;
    queryParameters.uid = uid;

    var bodyParameters: any = {};
    bodyParameters.googleauthenticator = googleauthenticator;

    var resourcePath = 'identity/v2/manage/account/2fa/authenticator';

    return request(
      this.config,
      'DELETE',
      resourcePath,
      queryParameters,
      bodyParameters
    );
  }

  /**
   * This API is used to reset the backup codes on a given account via the UID. This API call will generate 10 new codes, each code can only be consumed once.
   * @param uid UID, the unified identifier for each user account
   * @return Response containing Definition of Complete Backup Code data
   *18.25
   */
  mfaBackupCodeByUid (uid: string) {
    if (isNullOrWhiteSpace(uid)) {
      return Promise.reject(getValidationMessage('uid'));
    }
    var queryParameters: any = {};

    queryParameters.apiKey = this.config.apiKey;
    queryParameters.apiSecret = this.config.apiSecret;
    queryParameters.uid = uid;

    var resourcePath = 'identity/v2/manage/account/2fa/backupcode';

    return request(this.config, 'GET', resourcePath, queryParameters, null);
  }

  /**
   * This API is used to reset the backup codes on a given account via the UID. This API call will generate 10 new codes, each code can only be consumed once.
   * @param uid UID, the unified identifier for each user account
   * @return Response containing Definition of Complete Backup Code data
   *18.26
   */
  mfaResetBackupCodeByUid (uid: string) {
    if (isNullOrWhiteSpace(uid)) {
      return Promise.reject(getValidationMessage('uid'));
    }
    var queryParameters: any = {};

    queryParameters.apiKey = this.config.apiKey;
    queryParameters.apiSecret = this.config.apiSecret;
    queryParameters.uid = uid;

    var resourcePath = 'identity/v2/manage/account/2fa/backupcode/reset';

    return request(this.config, 'GET', resourcePath, queryParameters, null);
  }

  /**
   * This API is used to reset the Email OTP Authenticator settings for an MFA-enabled user.
   * @param uid UID, the unified identifier for each user account
   * @return Response containing Definition of Delete Request
   *18.42
   */
  mfaResetEmailOtpAuthenticatorByUid (uid: string) {
    if (isNullOrWhiteSpace(uid)) {
      return Promise.reject(getValidationMessage('uid'));
    }
    var queryParameters: any = {};

    queryParameters.apiKey = this.config.apiKey;
    queryParameters.apiSecret = this.config.apiSecret;
    queryParameters.uid = uid;

    var resourcePath = 'identity/v2/manage/account/2fa/authenticator/otp/email';

    return request(this.config, 'DELETE', resourcePath, queryParameters, null);
  }

  /**
   * This API is used to reset the Security Question Authenticator settings for an MFA-enabled user.
   * @param uid UID, the unified identifier for each user account
   * @return Response containing Definition of Delete Request
   *18.43
   */
  mfaResetSecurityQuestionAuthenticatorByUid (uid: string) {
    if (isNullOrWhiteSpace(uid)) {
      return Promise.reject(getValidationMessage('uid'));
    }
    var queryParameters: any = {};

    queryParameters.apiKey = this.config.apiKey;
    queryParameters.apiSecret = this.config.apiSecret;
    queryParameters.uid = uid;

    var resourcePath =
      'identity/v2/manage/account/2fa/authenticator/securityquestionanswer';

    return request(this.config, 'DELETE', resourcePath, queryParameters, null);
  }
}

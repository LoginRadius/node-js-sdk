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

export default class AuthenticationApi {
  // eslint-disable-next-line no-useless-constructor, no-unused-vars, no-empty-function
  constructor (private config: LoginRadiusConfig) {}

  /**
   * This API is used to retrieve the list of questions that are configured on the respective LoginRadius site.
   * @param {email} Email of the user
   * @return Response containing Definition for Complete SecurityQuestions data
   *2.1
   */
  getSecurityQuestionsByEmail (email) {
    if (isNullOrWhiteSpace(email)) {
      return Promise.reject(getValidationMessage('email'));
    }
    var queryParameters: any = {};

    queryParameters.apiKey = this.config.apiKey;
    queryParameters.email = email;

    var resourcePath = 'identity/v2/auth/securityquestion/email';

    return request(this.config, 'GET', resourcePath, queryParameters, null);
  }

  /**
   * This API is used to retrieve the list of questions that are configured on the respective LoginRadius site.
   * @param {userName} UserName of the user
   * @return Response containing Definition for Complete SecurityQuestions data
   *2.2
   */
  getSecurityQuestionsByUserName (userName) {
    if (isNullOrWhiteSpace(userName)) {
      return Promise.reject(getValidationMessage('userName'));
    }
    var queryParameters: any = {};

    queryParameters.apiKey = this.config.apiKey;
    queryParameters.userName = userName;

    var resourcePath = 'identity/v2/auth/securityquestion/username';

    return request(this.config, 'GET', resourcePath, queryParameters, null);
  }

  /**
   * This API is used to retrieve the list of questions that are configured on the respective LoginRadius site.
   * @param {phone} The Registered Phone Number
   * @return Response containing Definition for Complete SecurityQuestions data
   *2.3
   */
  getSecurityQuestionsByPhone (phone) {
    if (isNullOrWhiteSpace(phone)) {
      return Promise.reject(getValidationMessage('phone'));
    }
    var queryParameters: any = {};

    queryParameters.apiKey = this.config.apiKey;
    queryParameters.phone = phone;

    var resourcePath = 'identity/v2/auth/securityquestion/phone';

    return request(this.config, 'GET', resourcePath, queryParameters, null);
  }

  /**
   * This API is used to retrieve the list of questions that are configured on the respective LoginRadius site.
   * @param {accessToken} Uniquely generated identifier key by LoginRadius that is activated after successful authentication.
   * @return Response containing Definition for Complete SecurityQuestions data
   *2.4
   */
  getSecurityQuestionsByAccessToken (accessToken) {
    if (isNullOrWhiteSpace(accessToken)) {
      return Promise.reject(getValidationMessage('accessToken'));
    }
    var queryParameters: any = {};

    queryParameters.access_token = accessToken;
    queryParameters.apiKey = this.config.apiKey;

    var resourcePath = 'identity/v2/auth/securityquestion/accesstoken';

    return request(this.config, 'GET', resourcePath, queryParameters, null);
  }

  /**
   * This api validates access token, if valid then returns a response with its expiry otherwise error.
   * @param {accessToken} Uniquely generated identifier key by LoginRadius that is activated after successful authentication.
   * @return Response containing Definition of Complete Token data
   *4.1
   */
  authValidateAccessToken (accessToken) {
    if (isNullOrWhiteSpace(accessToken)) {
      return Promise.reject(getValidationMessage('accessToken'));
    }
    var queryParameters: any = {};

    queryParameters.access_token = accessToken;
    queryParameters.apiKey = this.config.apiKey;

    var resourcePath = 'identity/v2/auth/access_token/validate';

    return request(this.config, 'GET', resourcePath, queryParameters, null);
  }

  /**
   * This api call invalidates the active access token or expires an access token's validity.
   * @param {accessToken} Uniquely generated identifier key by LoginRadius that is activated after successful authentication.
   * @param {preventRefresh} Boolean value that when set as true, in addition of the access token being invalidated, it will no longer have the capability of being refreshed.
   * @return Response containing Definition of Complete Validation data
   *4.2
   this.config.this.config.*/
  authInValidateAccessToken (accessToken, preventRefresh) {
    if (isNullOrWhiteSpace(accessToken)) {
      return Promise.reject(getValidationMessage('accessToken'));
    }
    var queryParameters: any = {};

    queryParameters.access_token = accessToken;
    queryParameters.apiKey = this.config.apiKey;
    if (preventRefresh !== null) {
      queryParameters.preventRefresh = preventRefresh;
    }

    var resourcePath = 'identity/v2/auth/access_token/invalidate';

    return request(this.config, 'GET', resourcePath, queryParameters, null);
  }

  /**
   * This api call provide the active access token Information
   * @param {accessToken} Uniquely generated identifier key by LoginRadius that is activated after successful authentication.
   * @return Response containing Definition of Token Information
   *4.3
   */
  getAccessTokenInfo (accessToken) {
    if (isNullOrWhiteSpace(accessToken)) {
      return Promise.reject(getValidationMessage('accessToken'));
    }
    var queryParameters: any = {};

    queryParameters.access_token = accessToken;
    queryParameters.apiKey = this.config.apiKey;

    var resourcePath = 'identity/v2/auth/access_token';

    return request(this.config, 'GET', resourcePath, queryParameters, null);
  }

  /**
   * This API retrieves a copy of the user data based on the access token.
   * @param {accessToken} Uniquely generated identifier key by LoginRadius that is activated after successful authentication.
   * @param {fields} The fields parameter filters the API response so that the response only includes a specific set of fields
   * @param {emailTemplate}
   *  @param {verificationUrl}
   * @param {welcomeEmailTemplate}
   * @return Response containing Definition for Complete profile data
   *5.2
   */
  getProfileByAccessToken (
    accessToken,
    fields,
    emailTemplate,
    verificationUrl,
    welcomeEmailTemplate
  ) {
    if (isNullOrWhiteSpace(accessToken)) {
      return Promise.reject(getValidationMessage('accessToken'));
    }
    var queryParameters: any = {};

    queryParameters.access_token = accessToken;
    queryParameters.apiKey = this.config.apiKey;
    if (!isNullOrWhiteSpace(fields)) {
      queryParameters.fields = fields;
    }
    if (!isNullOrWhiteSpace(emailTemplate)) {
      queryParameters.emailTemplate = emailTemplate;
    }
    if (!isNullOrWhiteSpace(verificationUrl)) {
      queryParameters.verificationUrl = verificationUrl;
    }
    if (!isNullOrWhiteSpace(welcomeEmailTemplate)) {
      queryParameters.welcomeEmailTemplate = welcomeEmailTemplate;
    }

    var resourcePath = 'identity/v2/auth/account';

    return request(this.config, 'GET', resourcePath, queryParameters, null);
  }

  /**
   * This API sends a welcome email
   * @param {accessToken} Uniquely generated identifier key by LoginRadius that is activated after successful authentication.
   * @param {welcomeEmailTemplate} Name of the welcome email template
   * @return Response containing Definition of Complete Validation data
   *5.3
   */
  sendWelcomeEmail (accessToken, welcomeEmailTemplate) {
    if (isNullOrWhiteSpace(accessToken)) {
      return Promise.reject(getValidationMessage('accessToken'));
    }
    var queryParameters: any = {};

    queryParameters.access_token = accessToken;
    queryParameters.apiKey = this.config.apiKey;
    if (!isNullOrWhiteSpace(welcomeEmailTemplate)) {
      queryParameters.welcomeEmailTemplate = welcomeEmailTemplate;
    }

    var resourcePath = 'identity/v2/auth/account/sendwelcomeemail';

    return request(this.config, 'GET', resourcePath, queryParameters, null);
  }

  /**
   * This API is used to update the user's profile by passing the access token.
   * @param {accessToken} Uniquely generated identifier key by LoginRadius that is activated after successful authentication.
   * @param {userProfileUpdateModel} Model Class containing Definition of payload for User Profile update API
   * @param {emailTemplate} Email template name
   * @param {fields} The fields parameter filters the API response so that the response only includes a specific set of fields
   * @param {nullSupport} Boolean, pass true if you wish to update any user profile field with a NULL value, You can get the details
   * @param {smsTemplate} SMS Template name
   * @param {verificationUrl} Email verification url
   * @return Response containing Definition of Complete Validation and UserProfile data
   *5.4
   */
  updateProfileByAccessToken (
    accessToken,
    userProfileUpdateModel,
    emailTemplate,
    fields,
    nullSupport,
    smsTemplate,
    verificationUrl
  ) {
    if (isNullOrWhiteSpace(accessToken)) {
      return Promise.reject(getValidationMessage('accessToken'));
    }
    if (checkJson(userProfileUpdateModel)) {
      return Promise.reject(getValidationMessage('userProfileUpdateModel'));
    }
    var queryParameters: any = {};

    queryParameters.access_token = accessToken;
    queryParameters.apiKey = this.config.apiKey;
    if (!isNullOrWhiteSpace(emailTemplate)) {
      queryParameters.emailTemplate = emailTemplate;
    }
    if (!isNullOrWhiteSpace(fields)) {
      queryParameters.fields = fields;
    }
    if (nullSupport !== null) {
      queryParameters.nullSupport = nullSupport;
    }
    if (!isNullOrWhiteSpace(smsTemplate)) {
      queryParameters.smsTemplate = smsTemplate;
    }
    if (!isNullOrWhiteSpace(verificationUrl)) {
      queryParameters.verificationUrl = verificationUrl;
    }

    var resourcePath = 'identity/v2/auth/account';

    return request(
      this.config,
      'PUT',
      resourcePath,
      queryParameters,
      userProfileUpdateModel
    );
  }

  /**
   * This API will send a confirmation email for account deletion to the customer's email when passed the customer's access token
   * @param {accessToken} Uniquely generated identifier key by LoginRadius that is activated after successful authentication.
   * @param {deleteUrl} Url of the site
   * @param {emailTemplate} Email template name
   * @return Response containing Definition of Delete Request
   *5.5
   */
  deleteAccountWithEmailConfirmation (accessToken, deleteUrl, emailTemplate) {
    if (isNullOrWhiteSpace(accessToken)) {
      return Promise.reject(getValidationMessage('accessToken'));
    }
    var queryParameters: any = {};

    queryParameters.access_token = accessToken;
    queryParameters.apiKey = this.config.apiKey;
    if (!isNullOrWhiteSpace(deleteUrl)) {
      queryParameters.deleteUrl = deleteUrl;
    }
    if (!isNullOrWhiteSpace(emailTemplate)) {
      queryParameters.emailTemplate = emailTemplate;
    }

    var resourcePath = 'identity/v2/auth/account';

    return request(this.config, 'DELETE', resourcePath, queryParameters, null);
  }

  /**
   * This API is used to delete an account by passing it a delete token.
   * @param {deletetoken} Delete token received in the email
   * @return Response containing Definition of Complete Validation data
   *5.6
   */
  deleteAccountByDeleteToken (deletetoken) {
    if (isNullOrWhiteSpace(deletetoken)) {
      return Promise.reject(getValidationMessage('deletetoken'));
    }
    var queryParameters: any = {};

    queryParameters.apiKey = this.config.apiKey;
    queryParameters.deletetoken = deletetoken;

    var resourcePath = 'identity/v2/auth/account/delete';

    return request(this.config, 'GET', resourcePath, queryParameters, null);
  }

  /**
   * This API is used to allow a customer with a valid access token to unlock their account provided that they successfully pass the prompted Bot Protection challenges. The Block or Suspend block types are not applicable for this API. For additional details see our Auth Security Configuration documentation.You are only required to pass the Post Parameters that correspond to the prompted challenges.
   * @param {accessToken} Uniquely generated identifier key by LoginRadius that is activated after successful authentication.
   * @param {unlockProfileModel} Payload containing Unlock Profile API
   * @return Response containing Definition of Complete Validation data
   *5.15
   */
  unlockAccountByToken (accessToken, unlockProfileModel) {
    if (isNullOrWhiteSpace(accessToken)) {
      return Promise.reject(getValidationMessage('accessToken'));
    }
    if (checkJson(unlockProfileModel)) {
      return Promise.reject(getValidationMessage('unlockProfileModel'));
    }
    var queryParameters: any = {};

    queryParameters.access_token = accessToken;
    queryParameters.apiKey = this.config.apiKey;

    var resourcePath = 'identity/v2/auth/account/unlock';

    return request(
      this.config,
      'PUT',
      resourcePath,
      queryParameters,
      unlockProfileModel
    );
  }

  /**
   * This API is used to get a user's profile using the clientGuid parameter if no callback feature enabled
   * @param {clientGuid} ClientGuid
   * @param {emailTemplate} EmailTemplate
   * @param {fields} Fields
   * @param {verificationUrl} VerificationUrl
   * @param {welcomeEmailTemplate} WelcomeEmailTemplate
   * @return Response containing User Profile Data and access token
   *5.16
   */
  getProfileByPing (
    clientGuid,
    emailTemplate,
    fields,
    verificationUrl,
    welcomeEmailTemplate
  ) {
    if (isNullOrWhiteSpace(clientGuid)) {
      return Promise.reject(getValidationMessage('clientGuid'));
    }
    var queryParameters: any = {};

    queryParameters.apiKey = this.config.apiKey;
    queryParameters.clientGuid = clientGuid;
    if (!isNullOrWhiteSpace(emailTemplate)) {
      queryParameters.emailTemplate = emailTemplate;
    }
    if (!isNullOrWhiteSpace(fields)) {
      queryParameters.fields = fields;
    }
    if (!isNullOrWhiteSpace(verificationUrl)) {
      queryParameters.verificationUrl = verificationUrl;
    }
    if (!isNullOrWhiteSpace(welcomeEmailTemplate)) {
      queryParameters.welcomeEmailTemplate = welcomeEmailTemplate;
    }

    var resourcePath = 'identity/v2/auth/account/ping';

    return request(this.config, 'GET', resourcePath, queryParameters, null);
  }

  /**
   * This API is used to check the email exists or not on your site.
   * @param {email} Email of the user
   * @return Response containing Definition Complete ExistResponse data
   *8.1
   */
  checkEmailAvailability (email) {
    if (isNullOrWhiteSpace(email)) {
      return Promise.reject(getValidationMessage('email'));
    }
    var queryParameters: any = {};

    queryParameters.apiKey = this.config.apiKey;
    queryParameters.email = email;

    var resourcePath = 'identity/v2/auth/email';

    return request(this.config, 'GET', resourcePath, queryParameters, null);
  }

  /**
   * This API is used to verify the email of user. Note: This API will only return the full profile if you have 'Enable auto login after email verification' set in your LoginRadius Admin Console's Email Workflow settings under 'Verification Email'.
   * @param {verificationToken} Verification token received in the email
   * @param {fields} The fields parameter filters the API response so that the response only includes a specific set of fields
   * @param {url} Mention URL to log the main URL(Domain name) in Database.
   * @param {welcomeEmailTemplate} Name of the welcome email template
   * @return Response containing Definition of Complete Validation, UserProfile data and Access Token
   *8.2
   */
  verifyEmail (verificationToken, fields, url, welcomeEmailTemplate) {
    if (isNullOrWhiteSpace(verificationToken)) {
      return Promise.reject(getValidationMessage('verificationToken'));
    }
    var queryParameters: any = {};

    queryParameters.apiKey = this.config.apiKey;
    queryParameters.verificationToken = verificationToken;
    if (!isNullOrWhiteSpace(fields)) {
      queryParameters.fields = fields;
    }
    if (!isNullOrWhiteSpace(url)) {
      queryParameters.url = url;
    }
    if (!isNullOrWhiteSpace(welcomeEmailTemplate)) {
      queryParameters.welcomeEmailTemplate = welcomeEmailTemplate;
    }

    var resourcePath = 'identity/v2/auth/email';

    return request(this.config, 'GET', resourcePath, queryParameters, null);
  }

  /**
   * This API is used to verify the email of user when the OTP Email verification flow is enabled, please note that you must contact LoginRadius to have this feature enabled.
   * @param {emailVerificationByOtpModel} Model Class containing Definition for EmailVerificationByOtpModel API
   * @param {fields} The fields parameter filters the API response so that the response only includes a specific set of fields
   * @param {url} Mention URL to log the main URL(Domain name) in Database.
   * @param {welcomeEmailTemplate} Name of the welcome email template
   * @return Response containing Definition of Complete Validation, UserProfile data and Access Token
   *8.3
   */
  verifyEmailByOTP (
    emailVerificationByOtpModel,
    fields,
    url,
    welcomeEmailTemplate
  ) {
    if (checkJson(emailVerificationByOtpModel)) {
      return Promise.reject(
        getValidationMessage('emailVerificationByOtpModel')
      );
    }
    var queryParameters: any = {};

    queryParameters.apiKey = this.config.apiKey;
    if (!isNullOrWhiteSpace(fields)) {
      queryParameters.fields = fields;
    }
    if (!isNullOrWhiteSpace(url)) {
      queryParameters.url = url;
    }
    if (!isNullOrWhiteSpace(welcomeEmailTemplate)) {
      queryParameters.welcomeEmailTemplate = welcomeEmailTemplate;
    }

    var resourcePath = 'identity/v2/auth/email';

    return request(
      this.config,
      'PUT',
      resourcePath,
      queryParameters,
      emailVerificationByOtpModel
    );
  }

  /**
   * This API is used to add additional emails to a user's account.
   * @param {accessToken} Uniquely generated identifier key by LoginRadius that is activated after successful authentication.
   * @param {email} user's email
   * @param {type} String to identify the type of parameter
   * @param {emailTemplate} Email template name
   * @param {verificationUrl} Email verification url
   * @return Response containing Definition of Complete Validation data
   *8.5
   */
  addEmail (accessToken, email, type, emailTemplate, verificationUrl) {
    if (isNullOrWhiteSpace(accessToken)) {
      return Promise.reject(getValidationMessage('accessToken'));
    }
    if (isNullOrWhiteSpace(email)) {
      return Promise.reject(getValidationMessage('email'));
    }
    if (isNullOrWhiteSpace(type)) {
      return Promise.reject(getValidationMessage('type'));
    }
    var queryParameters: any = {};

    queryParameters.access_token = accessToken;
    queryParameters.apiKey = this.config.apiKey;
    if (!isNullOrWhiteSpace(emailTemplate)) {
      queryParameters.emailTemplate = emailTemplate;
    }
    if (!isNullOrWhiteSpace(verificationUrl)) {
      queryParameters.verificationUrl = verificationUrl;
    }

    var bodyParameters: any = {};
    bodyParameters.email = email;
    bodyParameters.type = type;

    var resourcePath = 'identity/v2/auth/email';

    return request(
      this.config,
      'POST',
      resourcePath,
      queryParameters,
      bodyParameters
    );
  }

  /**
   * This API is used to remove additional emails from a user's account.
   * @param {accessToken} Uniquely generated identifier key by LoginRadius that is activated after successful authentication.
   * @param {email} user's email
   * @return Response containing Definition of Delete Request
   *8.6
   */
  removeEmail (accessToken, email) {
    if (isNullOrWhiteSpace(accessToken)) {
      return Promise.reject(getValidationMessage('accessToken'));
    }
    if (isNullOrWhiteSpace(email)) {
      return Promise.reject(getValidationMessage('email'));
    }
    var queryParameters: any = {};

    queryParameters.access_token = accessToken;
    queryParameters.apiKey = this.config.apiKey;

    var bodyParameters: any = {};
    bodyParameters.email = email;

    var resourcePath = 'identity/v2/auth/email';

    return request(
      this.config,
      'DELETE',
      resourcePath,
      queryParameters,
      bodyParameters
    );
  }

  /**
   * This API retrieves a copy of the user data based on the Email
   * @param {emailAuthenticationModel} Model Class containing Definition of payload for Email Authentication API
   * @param {emailTemplate} Email template name
   * @param {fields} The fields parameter filters the API response so that the response only includes a specific set of fields
   * @param {loginUrl} Url where the user is logging from
   * @param {verificationUrl} Email verification url
   * @return Response containing User Profile Data and access token
   *9.2.1
   */
  loginByEmail (
    emailAuthenticationModel,
    emailTemplate,
    fields,
    loginUrl,
    verificationUrl
  ) {
    if (checkJson(emailAuthenticationModel)) {
      return Promise.reject(getValidationMessage('emailAuthenticationModel'));
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
    if (!isNullOrWhiteSpace(verificationUrl)) {
      queryParameters.verificationUrl = verificationUrl;
    }

    var resourcePath = 'identity/v2/auth/login';

    return request(
      this.config,
      'POST',
      resourcePath,
      queryParameters,
      emailAuthenticationModel
    );
  }

  /**
   * This API retrieves a copy of the user data based on the Username
   * @param {userNameAuthenticationModel} Model Class containing Definition of payload for Username Authentication API
   * @param {emailTemplate} Email template name
   * @param {fields} The fields parameter filters the API response so that the response only includes a specific set of fields
   * @param {loginUrl} Url where the user is logging from
   * @param {verificationUrl} Email verification url
   * @return Response containing User Profile Data and access token
   *9.2.2
   */
  loginByUserName (
    userNameAuthenticationModel,
    emailTemplate,
    fields,
    loginUrl,
    verificationUrl
  ) {
    if (checkJson(userNameAuthenticationModel)) {
      return Promise.reject(
        getValidationMessage('userNameAuthenticationModel')
      );
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
    if (!isNullOrWhiteSpace(verificationUrl)) {
      queryParameters.verificationUrl = verificationUrl;
    }

    var resourcePath = 'identity/v2/auth/login';

    return request(
      this.config,
      'POST',
      resourcePath,
      queryParameters,
      userNameAuthenticationModel
    );
  }

  /**
   * This API is used to send the reset password url to a specified account. Note: If you have the UserName workflow enabled, you may replace the 'email' parameter with 'username'
   * @param {email} user's email
   * @param {resetPasswordUrl} Url to which user should get re-directed to for resetting the password
   * @param {emailTemplate} Email template name
   * @return Response containing Definition of Complete Validation data
   *10.1
   */
  forgotPassword (email, resetPasswordUrl, emailTemplate) {
    if (isNullOrWhiteSpace(email)) {
      return Promise.reject(getValidationMessage('email'));
    }
    if (isNullOrWhiteSpace(resetPasswordUrl)) {
      return Promise.reject(getValidationMessage('resetPasswordUrl'));
    }
    var queryParameters: any = {};

    queryParameters.apiKey = this.config.apiKey;
    queryParameters.resetPasswordUrl = resetPasswordUrl;
    if (!isNullOrWhiteSpace(emailTemplate)) {
      queryParameters.emailTemplate = emailTemplate;
    }

    var bodyParameters: any = {};
    bodyParameters.email = email;

    var resourcePath = 'identity/v2/auth/password';

    return request(
      this.config,
      'POST',
      resourcePath,
      queryParameters,
      bodyParameters
    );
  }

  /**
   * This API is used to reset password for the specified account by security question
   * @param {resetPasswordBySecurityAnswerAndEmailModel} Model Class containing Definition of payload for ResetPasswordBySecurityAnswerAndEmail API
   * @return Response containing Definition of Validation data and access token
   *10.3.1
   */
  resetPasswordBySecurityAnswerAndEmail (
    resetPasswordBySecurityAnswerAndEmailModel
  ) {
    if (checkJson(resetPasswordBySecurityAnswerAndEmailModel)) {
      return Promise.reject(
        getValidationMessage('resetPasswordBySecurityAnswerAndEmailModel')
      );
    }
    var queryParameters: any = {};

    queryParameters.apiKey = this.config.apiKey;

    var resourcePath = 'identity/v2/auth/password/securityanswer';

    return request(
      this.config,
      'PUT',
      resourcePath,
      queryParameters,
      resetPasswordBySecurityAnswerAndEmailModel
    );
  }

  /**
   * This API is used to reset password for the specified account by security question
   * @param {resetPasswordBySecurityAnswerAndPhoneModel} Model Class containing Definition of payload for ResetPasswordBySecurityAnswerAndPhone API
   * @return Response containing Definition of Validation data and access token
   *10.3.2
   */
  resetPasswordBySecurityAnswerAndPhone (
    resetPasswordBySecurityAnswerAndPhoneModel
  ) {
    if (checkJson(resetPasswordBySecurityAnswerAndPhoneModel)) {
      return Promise.reject(
        getValidationMessage('resetPasswordBySecurityAnswerAndPhoneModel')
      );
    }
    var queryParameters: any = {};

    queryParameters.apiKey = this.config.apiKey;

    var resourcePath = 'identity/v2/auth/password/securityanswer';

    return request(
      this.config,
      'PUT',
      resourcePath,
      queryParameters,
      resetPasswordBySecurityAnswerAndPhoneModel
    );
  }

  /**
   * This API is used to reset password for the specified account by security question
   * @param {resetPasswordBySecurityAnswerAndUserNameModel} Model Class containing Definition of payload for ResetPasswordBySecurityAnswerAndUserName API
   * @return Response containing Definition of Validation data and access token
   *10.3.3
   */
  resetPasswordBySecurityAnswerAndUserName (
    resetPasswordBySecurityAnswerAndUserNameModel
  ) {
    if (checkJson(resetPasswordBySecurityAnswerAndUserNameModel)) {
      return Promise.reject(
        getValidationMessage('resetPasswordBySecurityAnswerAndUserNameModel')
      );
    }
    var queryParameters: any = {};

    queryParameters.apiKey = this.config.apiKey;

    var resourcePath = 'identity/v2/auth/password/securityanswer';

    return request(
      this.config,
      'PUT',
      resourcePath,
      queryParameters,
      resetPasswordBySecurityAnswerAndUserNameModel
    );
  }

  /**
   * This API is used to set a new password for the specified account.
   * @param {resetPasswordByResetTokenModel} Model Class containing Definition of payload for ResetToken API
   * @return Response containing Definition of Validation data and access token
   *10.7.1
   */
  resetPasswordByResetToken (resetPasswordByResetTokenModel) {
    if (checkJson(resetPasswordByResetTokenModel)) {
      return Promise.reject(
        getValidationMessage('resetPasswordByResetTokenModel')
      );
    }
    var queryParameters: any = {};

    queryParameters.apiKey = this.config.apiKey;

    var resourcePath = 'identity/v2/auth/password/reset';

    return request(
      this.config,
      'PUT',
      resourcePath,
      queryParameters,
      resetPasswordByResetTokenModel
    );
  }

  /**
   * This API is used to set a new password for the specified account.
   * @param {resetPasswordByEmailAndOtpModel} Model Class containing Definition of payload for ResetPasswordByEmailAndOtp API
   * @return Response containing Definition of Validation data and access token
   *10.7.2
   */
  resetPasswordByEmailOTP (resetPasswordByEmailAndOtpModel) {
    if (checkJson(resetPasswordByEmailAndOtpModel)) {
      return Promise.reject(
        getValidationMessage('resetPasswordByEmailAndOtpModel')
      );
    }
    var queryParameters: any = {};

    queryParameters.apiKey = this.config.apiKey;

    var resourcePath = 'identity/v2/auth/password/reset';

    return request(
      this.config,
      'PUT',
      resourcePath,
      queryParameters,
      resetPasswordByEmailAndOtpModel
    );
  }

  /**
   * This API is used to set a new password for the specified account if you are using the username as the unique identifier in your workflow
   * @param {resetPasswordByUserNameModel} Model Class containing Definition of payload for ResetPasswordByUserName API
   * @return Response containing Definition of Validation data and access token
   *10.7.3
   */
  resetPasswordByOTPAndUserName (resetPasswordByUserNameModel) {
    if (checkJson(resetPasswordByUserNameModel)) {
      return Promise.reject(
        getValidationMessage('resetPasswordByUserNameModel')
      );
    }
    var queryParameters: any = {};

    queryParameters.apiKey = this.config.apiKey;

    var resourcePath = 'identity/v2/auth/password/reset';

    return request(
      this.config,
      'PUT',
      resourcePath,
      queryParameters,
      resetPasswordByUserNameModel
    );
  }

  /**
   * This API is used to change the accounts password based on the previous password
   * @param {accessToken} Uniquely generated identifier key by LoginRadius that is activated after successful authentication.
   * @param {newPassword} New password
   * @param {oldPassword} User's current password
   * @return Response containing Definition of Complete Validation data
   *10.8
   */
  changePassword (accessToken, newPassword, oldPassword) {
    if (isNullOrWhiteSpace(accessToken)) {
      return Promise.reject(getValidationMessage('accessToken'));
    }
    if (isNullOrWhiteSpace(newPassword)) {
      return Promise.reject(getValidationMessage('newPassword'));
    }
    if (isNullOrWhiteSpace(oldPassword)) {
      return Promise.reject(getValidationMessage('oldPassword'));
    }
    var queryParameters: any = {};

    queryParameters.access_token = accessToken;
    queryParameters.apiKey = this.config.apiKey;

    var bodyParameters: any = {};
    bodyParameters.newPassword = newPassword;
    bodyParameters.oldPassword = oldPassword;

    var resourcePath = 'identity/v2/auth/password/change';

    return request(
      this.config,
      'PUT',
      resourcePath,
      queryParameters,
      bodyParameters
    );
  }

  /**
   * This API is used to unlink up a social provider account with the specified account based on the access token and the social providers user access token. The unlinked account will automatically get removed from your database.
   * @param {accessToken} Access_Token
   * @param {provider} Name of the provider
   * @param {providerId} Unique ID of the linked account
   * @return Response containing Definition of Delete Request
   *12.2
   */
  unlinkSocialIdentities (accessToken, provider, providerId) {
    if (isNullOrWhiteSpace(accessToken)) {
      return Promise.reject(getValidationMessage('accessToken'));
    }
    if (isNullOrWhiteSpace(provider)) {
      return Promise.reject(getValidationMessage('provider'));
    }
    if (isNullOrWhiteSpace(providerId)) {
      return Promise.reject(getValidationMessage('providerId'));
    }
    var queryParameters: any = {};

    queryParameters.access_token = accessToken;
    queryParameters.apiKey = this.config.apiKey;

    var bodyParameters: any = {};
    bodyParameters.provider = provider;
    bodyParameters.providerId = providerId;

    var resourcePath = 'identity/v2/auth/socialidentity';

    return request(
      this.config,
      'DELETE',
      resourcePath,
      queryParameters,
      bodyParameters
    );
  }

  /**
   * This API is used to link up a social provider account with an existing LoginRadius account on the basis of access token and the social providers user access token.
   * @param {accessToken} Uniquely generated identifier key by LoginRadius that is activated after successful authentication.
   * @param {candidateToken} Access token of the account to be linked
   * @return Response containing Definition of Complete Validation data
   *12.4
   */
  linkSocialIdentities (accessToken, candidateToken) {
    if (isNullOrWhiteSpace(accessToken)) {
      return Promise.reject(getValidationMessage('accessToken'));
    }
    if (isNullOrWhiteSpace(candidateToken)) {
      return Promise.reject(getValidationMessage('candidateToken'));
    }
    var queryParameters: any = {};

    queryParameters.access_token = accessToken;
    queryParameters.apiKey = this.config.apiKey;

    var bodyParameters: any = {};
    bodyParameters.candidateToken = candidateToken;

    var resourcePath = 'identity/v2/auth/socialidentity';

    return request(
      this.config,
      'POST',
      resourcePath,
      queryParameters,
      bodyParameters
    );
  }

  /**
   * This API is used to link up a social provider account with an existing LoginRadius account on the basis of ping and the social providers user access token.
   * @param {accessToken} Uniquely generated identifier key by LoginRadius that is activated after successful authentication.
   * @param {clientGuid} Unique ID generated by client
   * @return Response containing Definition of Complete Validation data
   *12.5
   */
  linkSocialIdentitiesByPing (accessToken, clientGuid) {
    if (isNullOrWhiteSpace(accessToken)) {
      return Promise.reject(getValidationMessage('accessToken'));
    }
    if (isNullOrWhiteSpace(clientGuid)) {
      return Promise.reject(getValidationMessage('clientGuid'));
    }
    var queryParameters: any = {};

    queryParameters.access_token = accessToken;
    queryParameters.apiKey = this.config.apiKey;

    var bodyParameters: any = {};
    bodyParameters.clientGuid = clientGuid;

    var resourcePath = 'identity/v2/auth/socialidentity';

    return request(
      this.config,
      'POST',
      resourcePath,
      queryParameters,
      bodyParameters
    );
  }

  /**
   * This API is used to set or change UserName by access token.
   * @param {accessToken} Uniquely generated identifier key by LoginRadius that is activated after successful authentication.
   * @param {username} Username of the user
   * @return Response containing Definition of Complete Validation data
   *13.1
   */
  setOrChangeUserName (accessToken, username) {
    if (isNullOrWhiteSpace(accessToken)) {
      return Promise.reject(getValidationMessage('accessToken'));
    }
    if (isNullOrWhiteSpace(username)) {
      return Promise.reject(getValidationMessage('username'));
    }
    var queryParameters: any = {};

    queryParameters.access_token = accessToken;
    queryParameters.apiKey = this.config.apiKey;

    var bodyParameters: any = {};
    bodyParameters.username = username;

    var resourcePath = 'identity/v2/auth/username';

    return request(
      this.config,
      'PUT',
      resourcePath,
      queryParameters,
      bodyParameters
    );
  }

  /**
   * This API is used to check the UserName exists or not on your site.
   * @param {username} UserName of the user
   * @return Response containing Definition Complete ExistResponse data
   *13.2
   */
  checkUserNameAvailability (username) {
    if (isNullOrWhiteSpace(username)) {
      return Promise.reject(getValidationMessage('username'));
    }
    var queryParameters: any = {};

    queryParameters.apiKey = this.config.apiKey;
    queryParameters.username = username;

    var resourcePath = 'identity/v2/auth/username';

    return request(this.config, 'GET', resourcePath, queryParameters, null);
  }

  /**
   * This API is used to update the privacy policy stored in the user's profile by providing the access token of the user accepting the privacy policy
   * @param {accessToken} Uniquely generated identifier key by LoginRadius that is activated after successful authentication.
   * @param {fields} The fields parameter filters the API response so that the response only includes a specific set of fields
   * @return Response containing Definition for Complete profile data
   *15.1
   */
  acceptPrivacyPolicy (accessToken, fields) {
    if (isNullOrWhiteSpace(accessToken)) {
      return Promise.reject(getValidationMessage('accessToken'));
    }
    var queryParameters: any = {};

    queryParameters.access_token = accessToken;
    queryParameters.apiKey = this.config.apiKey;
    if (!isNullOrWhiteSpace(fields)) {
      queryParameters.fields = fields;
    }

    var resourcePath = 'identity/v2/auth/privacypolicy/accept';

    return request(this.config, 'GET', resourcePath, queryParameters, null);
  }

  /**
   * This API will return all the accepted privacy policies for the user by providing the access token of that user.
   * @param {accessToken} Uniquely generated identifier key by LoginRadius that is activated after successful authentication.
   * @return Complete Policy History data
   *15.2
   */
  getPrivacyPolicyHistoryByAccessToken (accessToken) {
    if (isNullOrWhiteSpace(accessToken)) {
      return Promise.reject(getValidationMessage('accessToken'));
    }
    var queryParameters: any = {};

    queryParameters.access_token = accessToken;
    queryParameters.apiKey = this.config.apiKey;

    var resourcePath = 'identity/v2/auth/privacypolicy/history';

    return request(this.config, 'GET', resourcePath, queryParameters, null);
  }

  /**
   * This API creates a user in the database as well as sends a verification email to the user.
   * @param {authUserRegistrationModel} Model Class containing Definition of payload for Auth User Registration API
   * @param {sott} LoginRadius Secured One Time Token
   * @param {emailTemplate} Email template name
   * @param {fields} The fields parameter filters the API response so that the response only includes a specific set of fields
   * @param {options} PreventVerificationEmail (Specifying this value prevents the verification email from being sent. Only applicable if you have the optional email verification flow)
   * @param {verificationUrl} Email verification url
   * @param {welcomeEmailTemplate} Name of the welcome email template
   * @return Response containing Definition of Complete Validation, UserProfile data and Access Token
   *17.1.1
   */
  userRegistrationByEmail (
    authUserRegistrationModel,
    sott,
    emailTemplate,
    fields,
    options,
    verificationUrl,
    welcomeEmailTemplate
  ) {
    if (checkJson(authUserRegistrationModel)) {
      return Promise.reject(getValidationMessage('authUserRegistrationModel'));
    }
    if (isNullOrWhiteSpace(sott)) {
      return Promise.reject(getValidationMessage('sott'));
    }
    var queryParameters: any = {};

    queryParameters.apiKey = this.config.apiKey;
    queryParameters.sott = sott;
    if (!isNullOrWhiteSpace(emailTemplate)) {
      queryParameters.emailTemplate = emailTemplate;
    }
    if (!isNullOrWhiteSpace(fields)) {
      queryParameters.fields = fields;
    }
    if (!isNullOrWhiteSpace(options)) {
      queryParameters.options = options;
    }
    if (!isNullOrWhiteSpace(verificationUrl)) {
      queryParameters.verificationUrl = verificationUrl;
    }
    if (!isNullOrWhiteSpace(welcomeEmailTemplate)) {
      queryParameters.welcomeEmailTemplate = welcomeEmailTemplate;
    }

    var resourcePath = 'identity/v2/auth/register';

    return request(
      this.config,
      'POST',
      resourcePath,
      queryParameters,
      authUserRegistrationModel
    );
  }

  /**
   * This API creates a user in the database as well as sends a verification email to the user.
   * @param {authUserRegistrationModelWithCaptcha} Model Class containing Definition of payload for Auth User Registration by Recaptcha API
   * @param {emailTemplate} Email template name
   * @param {fields} The fields parameter filters the API response so that the response only includes a specific set of fields
   * @param {options} PreventVerificationEmail (Specifying this value prevents the verification email from being sent. Only applicable if you have the optional email verification flow)
   * @param {smsTemplate} SMS Template name
   * @param {verificationUrl} Email verification url
   * @param {welcomeEmailTemplate} Name of the welcome email template
   * @return Response containing Definition of Complete Validation, UserProfile data and Access Token
   *17.2
   */
  userRegistrationByCaptcha (
    authUserRegistrationModelWithCaptcha,
    emailTemplate,
    fields,
    options,
    smsTemplate,
    verificationUrl,
    welcomeEmailTemplate
  ) {
    if (checkJson(authUserRegistrationModelWithCaptcha)) {
      return Promise.reject(
        getValidationMessage('authUserRegistrationModelWithCaptcha')
      );
    }
    var queryParameters: any = {};

    queryParameters.apiKey = this.config.apiKey;
    if (!isNullOrWhiteSpace(emailTemplate)) {
      queryParameters.emailTemplate = emailTemplate;
    }
    if (!isNullOrWhiteSpace(fields)) {
      queryParameters.fields = fields;
    }
    if (!isNullOrWhiteSpace(options)) {
      queryParameters.options = options;
    }
    if (!isNullOrWhiteSpace(smsTemplate)) {
      queryParameters.smsTemplate = smsTemplate;
    }
    if (!isNullOrWhiteSpace(verificationUrl)) {
      queryParameters.verificationUrl = verificationUrl;
    }
    if (!isNullOrWhiteSpace(welcomeEmailTemplate)) {
      queryParameters.welcomeEmailTemplate = welcomeEmailTemplate;
    }

    var resourcePath = 'identity/v2/auth/register/captcha';

    return request(
      this.config,
      'POST',
      resourcePath,
      queryParameters,
      authUserRegistrationModelWithCaptcha
    );
  }

  /**
   * This API resends the verification email to the user.
   * @param {email} user's email
   * @param {emailTemplate} Email template name
   * @param {verificationUrl} Email verification url
   * @return Response containing Definition of Complete Validation data
   *17.3
   */
  authResendEmailVerification (email, emailTemplate, verificationUrl) {
    if (isNullOrWhiteSpace(email)) {
      return Promise.reject(getValidationMessage('email'));
    }
    var queryParameters: any = {};

    queryParameters.apiKey = this.config.apiKey;
    if (!isNullOrWhiteSpace(emailTemplate)) {
      queryParameters.emailTemplate = emailTemplate;
    }
    if (!isNullOrWhiteSpace(verificationUrl)) {
      queryParameters.verificationUrl = verificationUrl;
    }

    var bodyParameters: any = {};
    bodyParameters.email = email;

    var resourcePath = 'identity/v2/auth/register';

    return request(
      this.config,
      'PUT',
      resourcePath,
      queryParameters,
      bodyParameters
    );
  }
}

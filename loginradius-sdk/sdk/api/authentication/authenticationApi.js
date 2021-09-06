/*
 * Created by LoginRadius Development Team
   Copyright 2019 LoginRadius Inc. All rights reserved.
*/
module.exports = function (config) {
  var module = {};
  var helper = require(config.HELPER_PATH);

  /**
  * This API is used to retrieve the list of questions that are configured on the respective LoginRadius site.
  * @param {email} Email of the user
  * @return Response containing Definition for Complete SecurityQuestions data
  *2.1
  */

  module.getSecurityQuestionsByEmail = function (email) {
    if (helper.isNullOrWhiteSpace(email)) {
      return Promise.reject(helper.getValidationMessage('email'));
    }
    var queryParameters = {};

    queryParameters.apiKey = config.apiKey;
    queryParameters.email = email;

    var resourcePath = 'identity/v2/auth/securityquestion/email';

    return config.request('GET', resourcePath, queryParameters, null);
  };

  /**
  * This API is used to retrieve the list of questions that are configured on the respective LoginRadius site.
  * @param {userName} UserName of the user
  * @return Response containing Definition for Complete SecurityQuestions data
  *2.2
  */

  module.getSecurityQuestionsByUserName = function (userName) {
    if (helper.isNullOrWhiteSpace(userName)) {
      return Promise.reject(helper.getValidationMessage('userName'));
    }
    var queryParameters = {};

    queryParameters.apiKey = config.apiKey;
    queryParameters.userName = userName;

    var resourcePath = 'identity/v2/auth/securityquestion/username';

    return config.request('GET', resourcePath, queryParameters, null);
  };

  /**
  * This API is used to retrieve the list of questions that are configured on the respective LoginRadius site.
  * @param {phone} The Registered Phone Number
  * @return Response containing Definition for Complete SecurityQuestions data
  *2.3
  */

  module.getSecurityQuestionsByPhone = function (phone) {
    if (helper.isNullOrWhiteSpace(phone)) {
      return Promise.reject(helper.getValidationMessage('phone'));
    }
    var queryParameters = {};

    queryParameters.apiKey = config.apiKey;
    queryParameters.phone = phone;

    var resourcePath = 'identity/v2/auth/securityquestion/phone';

    return config.request('GET', resourcePath, queryParameters, null);
  };

  /**
  * This API is used to retrieve the list of questions that are configured on the respective LoginRadius site.
  * @param {accessToken} Uniquely generated identifier key by LoginRadius that is activated after successful authentication.
  * @return Response containing Definition for Complete SecurityQuestions data
  *2.4
  */

  module.getSecurityQuestionsByAccessToken = function (accessToken) {
    if (helper.isNullOrWhiteSpace(accessToken)) {
      return Promise.reject(helper.getValidationMessage('accessToken'));
    }
    var queryParameters = {};

    queryParameters.access_token = accessToken;
    queryParameters.apiKey = config.apiKey;

    var resourcePath = 'identity/v2/auth/securityquestion/accesstoken';

    return config.request('GET', resourcePath, queryParameters, null);
  };

  /**
  * This api validates access token, if valid then returns a response with its expiry otherwise error.
  * @param {accessToken} Uniquely generated identifier key by LoginRadius that is activated after successful authentication.
  * @return Response containing Definition of Complete Token data
  *4.1
  */

  module.authValidateAccessToken = function (accessToken) {
    if (helper.isNullOrWhiteSpace(accessToken)) {
      return Promise.reject(helper.getValidationMessage('accessToken'));
    }
    var queryParameters = {};

    queryParameters.access_token = accessToken;
    queryParameters.apiKey = config.apiKey;

    var resourcePath = 'identity/v2/auth/access_token/validate';

    return config.request('GET', resourcePath, queryParameters, null);
  };

  /**
  * This api call invalidates the active access token or expires an access token's validity.
  * @param {accessToken} Uniquely generated identifier key by LoginRadius that is activated after successful authentication.
  * @param {preventRefresh} Boolean value that when set as true, in addition of the access token being invalidated, it will no longer have the capability of being refreshed.
  * @return Response containing Definition of Complete Validation data
  *4.2
  */

  module.authInValidateAccessToken = function (accessToken, preventRefresh) {
    if (helper.isNullOrWhiteSpace(accessToken)) {
      return Promise.reject(helper.getValidationMessage('accessToken'));
    }
    var queryParameters = {};

    queryParameters.access_token = accessToken;
    queryParameters.apiKey = config.apiKey;
    if (preventRefresh !== null) {
      queryParameters.preventRefresh = preventRefresh;
    }

    var resourcePath = 'identity/v2/auth/access_token/invalidate';

    return config.request('GET', resourcePath, queryParameters, null);
  };

  /**
  * This api call provide the active access token Information
  * @param {accessToken} Uniquely generated identifier key by LoginRadius that is activated after successful authentication.
  * @return Response containing Definition of Token Information
  *4.3
  */

  module.getAccessTokenInfo = function (accessToken) {
    if (helper.isNullOrWhiteSpace(accessToken)) {
      return Promise.reject(helper.getValidationMessage('accessToken'));
    }
    var queryParameters = {};

    queryParameters.access_token = accessToken;
    queryParameters.apiKey = config.apiKey;

    var resourcePath = 'identity/v2/auth/access_token';

    return config.request('GET', resourcePath, queryParameters, null);
  };

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

  module.getProfileByAccessToken = function (accessToken,
    fields, emailTemplate, verificationUrl, welcomeEmailTemplate) {
    if (helper.isNullOrWhiteSpace(accessToken)) {
      return Promise.reject(helper.getValidationMessage('accessToken'));
    }
    var queryParameters = {};

    queryParameters.access_token = accessToken;
    queryParameters.apiKey = config.apiKey;
    if (!helper.isNullOrWhiteSpace(fields)) {
      queryParameters.fields = fields;
    }
    if (!helper.isNullOrWhiteSpace(emailTemplate)) {
      queryParameters.emailTemplate = emailTemplate;
    }
    if (!helper.isNullOrWhiteSpace(verificationUrl)) {
      queryParameters.verificationUrl = verificationUrl;
    }
    if (!helper.isNullOrWhiteSpace(welcomeEmailTemplate)) {
      queryParameters.welcomeEmailTemplate = welcomeEmailTemplate;
    }

    var resourcePath = 'identity/v2/auth/account';

    return config.request('GET', resourcePath, queryParameters, null);
  };

  /**
  * This API sends a welcome email
  * @param {accessToken} Uniquely generated identifier key by LoginRadius that is activated after successful authentication.
  * @param {welcomeEmailTemplate} Name of the welcome email template
  * @return Response containing Definition of Complete Validation data
  *5.3
  */

  module.sendWelcomeEmail = function (accessToken, welcomeEmailTemplate) {
    if (helper.isNullOrWhiteSpace(accessToken)) {
      return Promise.reject(helper.getValidationMessage('accessToken'));
    }
    var queryParameters = {};

    queryParameters.access_token = accessToken;
    queryParameters.apiKey = config.apiKey;
    if (!helper.isNullOrWhiteSpace(welcomeEmailTemplate)) {
      queryParameters.welcomeEmailTemplate = welcomeEmailTemplate;
    }

    var resourcePath = 'identity/v2/auth/account/sendwelcomeemail';

    return config.request('GET', resourcePath, queryParameters, null);
  };

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

  module.updateProfileByAccessToken = function (accessToken, userProfileUpdateModel,
    emailTemplate, fields, nullSupport, smsTemplate, verificationUrl) {
    if (helper.isNullOrWhiteSpace(accessToken)) {
      return Promise.reject(helper.getValidationMessage('accessToken'));
    }
    if (helper.checkJson(userProfileUpdateModel)) {
      return Promise.reject(helper.getValidationMessage('userProfileUpdateModel'));
    }
    var queryParameters = {};

    queryParameters.access_token = accessToken;
    queryParameters.apiKey = config.apiKey;
    if (!helper.isNullOrWhiteSpace(emailTemplate)) {
      queryParameters.emailTemplate = emailTemplate;
    }
    if (!helper.isNullOrWhiteSpace(fields)) {
      queryParameters.fields = fields;
    }
    if (nullSupport !== null) {
      queryParameters.nullSupport = nullSupport;
    }
    if (!helper.isNullOrWhiteSpace(smsTemplate)) {
      queryParameters.smsTemplate = smsTemplate;
    }
    if (!helper.isNullOrWhiteSpace(verificationUrl)) {
      queryParameters.verificationUrl = verificationUrl;
    }

    var resourcePath = 'identity/v2/auth/account';

    return config.request('PUT', resourcePath, queryParameters, userProfileUpdateModel);
  };

  /**
  * This API will send a confirmation email for account deletion to the customer's email when passed the customer's access token
  * @param {accessToken} Uniquely generated identifier key by LoginRadius that is activated after successful authentication.
  * @param {deleteUrl} Url of the site
  * @param {emailTemplate} Email template name
  * @return Response containing Definition of Delete Request
  *5.5
  */

  module.deleteAccountWithEmailConfirmation = function (accessToken, deleteUrl,
    emailTemplate) {
    if (helper.isNullOrWhiteSpace(accessToken)) {
      return Promise.reject(helper.getValidationMessage('accessToken'));
    }
    var queryParameters = {};

    queryParameters.access_token = accessToken;
    queryParameters.apiKey = config.apiKey;
    if (!helper.isNullOrWhiteSpace(deleteUrl)) {
      queryParameters.deleteUrl = deleteUrl;
    }
    if (!helper.isNullOrWhiteSpace(emailTemplate)) {
      queryParameters.emailTemplate = emailTemplate;
    }

    var resourcePath = 'identity/v2/auth/account';

    return config.request('DELETE', resourcePath, queryParameters, null);
  };

  /**
  * This API is used to delete an account by passing it a delete token.
  * @param {deletetoken} Delete token received in the email
  * @return Response containing Definition of Complete Validation data
  *5.6
  */

  module.deleteAccountByDeleteToken = function (deletetoken) {
    if (helper.isNullOrWhiteSpace(deletetoken)) {
      return Promise.reject(helper.getValidationMessage('deletetoken'));
    }
    var queryParameters = {};

    queryParameters.apiKey = config.apiKey;
    queryParameters.deletetoken = deletetoken;

    var resourcePath = 'identity/v2/auth/account/delete';

    return config.request('GET', resourcePath, queryParameters, null);
  };

  /**
  * This API is used to allow a customer with a valid access token to unlock their account provided that they successfully pass the prompted Bot Protection challenges. The Block or Suspend block types are not applicable for this API. For additional details see our Auth Security Configuration documentation.You are only required to pass the Post Parameters that correspond to the prompted challenges.
  * @param {accessToken} Uniquely generated identifier key by LoginRadius that is activated after successful authentication.
  * @param {unlockProfileModel} Payload containing Unlock Profile API
  * @return Response containing Definition of Complete Validation data
  *5.15
  */

  module.unlockAccountByToken = function (accessToken, unlockProfileModel) {
    if (helper.isNullOrWhiteSpace(accessToken)) {
      return Promise.reject(helper.getValidationMessage('accessToken'));
    }
    if (helper.checkJson(unlockProfileModel)) {
      return Promise.reject(helper.getValidationMessage('unlockProfileModel'));
    }
    var queryParameters = {};

    queryParameters.access_token = accessToken;
    queryParameters.apiKey = config.apiKey;

    var resourcePath = 'identity/v2/auth/account/unlock';

    return config.request('PUT', resourcePath, queryParameters, unlockProfileModel);
  };

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

  module.getProfileByPing = function (clientGuid, emailTemplate,
    fields, verificationUrl, welcomeEmailTemplate) {
    if (helper.isNullOrWhiteSpace(clientGuid)) {
      return Promise.reject(helper.getValidationMessage('clientGuid'));
    }
    var queryParameters = {};

    queryParameters.apiKey = config.apiKey;
    queryParameters.clientGuid = clientGuid;
    if (!helper.isNullOrWhiteSpace(emailTemplate)) {
      queryParameters.emailTemplate = emailTemplate;
    }
    if (!helper.isNullOrWhiteSpace(fields)) {
      queryParameters.fields = fields;
    }
    if (!helper.isNullOrWhiteSpace(verificationUrl)) {
      queryParameters.verificationUrl = verificationUrl;
    }
    if (!helper.isNullOrWhiteSpace(welcomeEmailTemplate)) {
      queryParameters.welcomeEmailTemplate = welcomeEmailTemplate;
    }

    var resourcePath = 'identity/v2/auth/account/ping';

    return config.request('GET', resourcePath, queryParameters, null);
  };

  /**
  * This API is used to check the email exists or not on your site.
  * @param {email} Email of the user
  * @return Response containing Definition Complete ExistResponse data
  *8.1
  */

  module.checkEmailAvailability = function (email) {
    if (helper.isNullOrWhiteSpace(email)) {
      return Promise.reject(helper.getValidationMessage('email'));
    }
    var queryParameters = {};

    queryParameters.apiKey = config.apiKey;
    queryParameters.email = email;

    var resourcePath = 'identity/v2/auth/email';

    return config.request('GET', resourcePath, queryParameters, null);
  };

  /**
  * This API is used to verify the email of user. Note: This API will only return the full profile if you have 'Enable auto login after email verification' set in your LoginRadius Admin Console's Email Workflow settings under 'Verification Email'.
  * @param {verificationToken} Verification token received in the email
  * @param {fields} The fields parameter filters the API response so that the response only includes a specific set of fields
  * @param {url} Mention URL to log the main URL(Domain name) in Database.
  * @param {welcomeEmailTemplate} Name of the welcome email template
  * @return Response containing Definition of Complete Validation, UserProfile data and Access Token
  *8.2
  */

  module.verifyEmail = function (verificationToken, fields,
    url, welcomeEmailTemplate) {
    if (helper.isNullOrWhiteSpace(verificationToken)) {
      return Promise.reject(helper.getValidationMessage('verificationToken'));
    }
    var queryParameters = {};

    queryParameters.apiKey = config.apiKey;
    queryParameters.verificationToken = verificationToken;
    if (!helper.isNullOrWhiteSpace(fields)) {
      queryParameters.fields = fields;
    }
    if (!helper.isNullOrWhiteSpace(url)) {
      queryParameters.url = url;
    }
    if (!helper.isNullOrWhiteSpace(welcomeEmailTemplate)) {
      queryParameters.welcomeEmailTemplate = welcomeEmailTemplate;
    }

    var resourcePath = 'identity/v2/auth/email';

    return config.request('GET', resourcePath, queryParameters, null);
  };

  /**
  * This API is used to verify the email of user when the OTP Email verification flow is enabled, please note that you must contact LoginRadius to have this feature enabled.
  * @param {emailVerificationByOtpModel} Model Class containing Definition for EmailVerificationByOtpModel API
  * @param {fields} The fields parameter filters the API response so that the response only includes a specific set of fields
  * @param {url} Mention URL to log the main URL(Domain name) in Database.
  * @param {welcomeEmailTemplate} Name of the welcome email template
  * @return Response containing Definition of Complete Validation, UserProfile data and Access Token
  *8.3
  */

  module.verifyEmailByOTP = function (emailVerificationByOtpModel, fields,
    url, welcomeEmailTemplate) {
    if (helper.checkJson(emailVerificationByOtpModel)) {
      return Promise.reject(helper.getValidationMessage('emailVerificationByOtpModel'));
    }
    var queryParameters = {};

    queryParameters.apiKey = config.apiKey;
    if (!helper.isNullOrWhiteSpace(fields)) {
      queryParameters.fields = fields;
    }
    if (!helper.isNullOrWhiteSpace(url)) {
      queryParameters.url = url;
    }
    if (!helper.isNullOrWhiteSpace(welcomeEmailTemplate)) {
      queryParameters.welcomeEmailTemplate = welcomeEmailTemplate;
    }

    var resourcePath = 'identity/v2/auth/email';

    return config.request('PUT', resourcePath, queryParameters, emailVerificationByOtpModel);
  };

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

  module.addEmail = function (accessToken, email,
    type, emailTemplate, verificationUrl) {
    if (helper.isNullOrWhiteSpace(accessToken)) {
      return Promise.reject(helper.getValidationMessage('accessToken'));
    }
    if (helper.isNullOrWhiteSpace(email)) {
      return Promise.reject(helper.getValidationMessage('email'));
    }
    if (helper.isNullOrWhiteSpace(type)) {
      return Promise.reject(helper.getValidationMessage('type'));
    }
    var queryParameters = {};

    queryParameters.access_token = accessToken;
    queryParameters.apiKey = config.apiKey;
    if (!helper.isNullOrWhiteSpace(emailTemplate)) {
      queryParameters.emailTemplate = emailTemplate;
    }
    if (!helper.isNullOrWhiteSpace(verificationUrl)) {
      queryParameters.verificationUrl = verificationUrl;
    }

    var bodyParameters = {};
    bodyParameters.email = email;
    bodyParameters.type = type;

    var resourcePath = 'identity/v2/auth/email';

    return config.request('POST', resourcePath, queryParameters, bodyParameters);
  };

  /**
  * This API is used to remove additional emails from a user's account.
  * @param {accessToken} Uniquely generated identifier key by LoginRadius that is activated after successful authentication.
  * @param {email} user's email
  * @return Response containing Definition of Delete Request
  *8.6
  */

  module.removeEmail = function (accessToken, email) {
    if (helper.isNullOrWhiteSpace(accessToken)) {
      return Promise.reject(helper.getValidationMessage('accessToken'));
    }
    if (helper.isNullOrWhiteSpace(email)) {
      return Promise.reject(helper.getValidationMessage('email'));
    }
    var queryParameters = {};

    queryParameters.access_token = accessToken;
    queryParameters.apiKey = config.apiKey;

    var bodyParameters = {};
    bodyParameters.email = email;

    var resourcePath = 'identity/v2/auth/email';

    return config.request('DELETE', resourcePath, queryParameters, bodyParameters);
  };

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

  module.loginByEmail = function (emailAuthenticationModel, emailTemplate,
    fields, loginUrl, verificationUrl) {
    if (helper.checkJson(emailAuthenticationModel)) {
      return Promise.reject(helper.getValidationMessage('emailAuthenticationModel'));
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
    if (!helper.isNullOrWhiteSpace(verificationUrl)) {
      queryParameters.verificationUrl = verificationUrl;
    }

    var resourcePath = 'identity/v2/auth/login';

    return config.request('POST', resourcePath, queryParameters, emailAuthenticationModel);
  };

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

  module.loginByUserName = function (userNameAuthenticationModel, emailTemplate,
    fields, loginUrl, verificationUrl) {
    if (helper.checkJson(userNameAuthenticationModel)) {
      return Promise.reject(helper.getValidationMessage('userNameAuthenticationModel'));
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
    if (!helper.isNullOrWhiteSpace(verificationUrl)) {
      queryParameters.verificationUrl = verificationUrl;
    }

    var resourcePath = 'identity/v2/auth/login';

    return config.request('POST', resourcePath, queryParameters, userNameAuthenticationModel);
  };

  /**
  * This API is used to send the reset password url to a specified account. Note: If you have the UserName workflow enabled, you may replace the 'email' parameter with 'username'
  * @param {email} user's email
  * @param {resetPasswordUrl} Url to which user should get re-directed to for resetting the password
  * @param {emailTemplate} Email template name
  * @return Response containing Definition of Complete Validation data
  *10.1
  */

  module.forgotPassword = function (email, resetPasswordUrl,
    emailTemplate) {
    if (helper.isNullOrWhiteSpace(email)) {
      return Promise.reject(helper.getValidationMessage('email'));
    }
    if (helper.isNullOrWhiteSpace(resetPasswordUrl)) {
      return Promise.reject(helper.getValidationMessage('resetPasswordUrl'));
    }
    var queryParameters = {};

    queryParameters.apiKey = config.apiKey;
    queryParameters.resetPasswordUrl = resetPasswordUrl;
    if (!helper.isNullOrWhiteSpace(emailTemplate)) {
      queryParameters.emailTemplate = emailTemplate;
    }

    var bodyParameters = {};
    bodyParameters.email = email;

    var resourcePath = 'identity/v2/auth/password';

    return config.request('POST', resourcePath, queryParameters, bodyParameters);
  };

  /**
  * This API is used to reset password for the specified account by security question
  * @param {resetPasswordBySecurityAnswerAndEmailModel} Model Class containing Definition of payload for ResetPasswordBySecurityAnswerAndEmail API
  * @return Response containing Definition of Validation data and access token
  *10.3.1
  */

  module.resetPasswordBySecurityAnswerAndEmail = function (resetPasswordBySecurityAnswerAndEmailModel) {
    if (helper.checkJson(resetPasswordBySecurityAnswerAndEmailModel)) {
      return Promise.reject(helper.getValidationMessage('resetPasswordBySecurityAnswerAndEmailModel'));
    }
    var queryParameters = {};

    queryParameters.apiKey = config.apiKey;

    var resourcePath = 'identity/v2/auth/password/securityanswer';

    return config.request('PUT', resourcePath, queryParameters, resetPasswordBySecurityAnswerAndEmailModel);
  };

  /**
  * This API is used to reset password for the specified account by security question
  * @param {resetPasswordBySecurityAnswerAndPhoneModel} Model Class containing Definition of payload for ResetPasswordBySecurityAnswerAndPhone API
  * @return Response containing Definition of Validation data and access token
  *10.3.2
  */

  module.resetPasswordBySecurityAnswerAndPhone = function (resetPasswordBySecurityAnswerAndPhoneModel) {
    if (helper.checkJson(resetPasswordBySecurityAnswerAndPhoneModel)) {
      return Promise.reject(helper.getValidationMessage('resetPasswordBySecurityAnswerAndPhoneModel'));
    }
    var queryParameters = {};

    queryParameters.apiKey = config.apiKey;

    var resourcePath = 'identity/v2/auth/password/securityanswer';

    return config.request('PUT', resourcePath, queryParameters, resetPasswordBySecurityAnswerAndPhoneModel);
  };

  /**
  * This API is used to reset password for the specified account by security question
  * @param {resetPasswordBySecurityAnswerAndUserNameModel} Model Class containing Definition of payload for ResetPasswordBySecurityAnswerAndUserName API
  * @return Response containing Definition of Validation data and access token
  *10.3.3
  */

  module.resetPasswordBySecurityAnswerAndUserName = function (resetPasswordBySecurityAnswerAndUserNameModel) {
    if (helper.checkJson(resetPasswordBySecurityAnswerAndUserNameModel)) {
      return Promise.reject(helper.getValidationMessage('resetPasswordBySecurityAnswerAndUserNameModel'));
    }
    var queryParameters = {};

    queryParameters.apiKey = config.apiKey;

    var resourcePath = 'identity/v2/auth/password/securityanswer';

    return config.request('PUT', resourcePath, queryParameters, resetPasswordBySecurityAnswerAndUserNameModel);
  };

  /**
  * This API is used to set a new password for the specified account.
  * @param {resetPasswordByResetTokenModel} Model Class containing Definition of payload for ResetToken API
  * @return Response containing Definition of Validation data and access token
  *10.7.1
  */

  module.resetPasswordByResetToken = function (resetPasswordByResetTokenModel) {
    if (helper.checkJson(resetPasswordByResetTokenModel)) {
      return Promise.reject(helper.getValidationMessage('resetPasswordByResetTokenModel'));
    }
    var queryParameters = {};

    queryParameters.apiKey = config.apiKey;

    var resourcePath = 'identity/v2/auth/password/reset';

    return config.request('PUT', resourcePath, queryParameters, resetPasswordByResetTokenModel);
  };

  /**
  * This API is used to set a new password for the specified account.
  * @param {resetPasswordByEmailAndOtpModel} Model Class containing Definition of payload for ResetPasswordByEmailAndOtp API
  * @return Response containing Definition of Validation data and access token
  *10.7.2
  */

  module.resetPasswordByEmailOTP = function (resetPasswordByEmailAndOtpModel) {
    if (helper.checkJson(resetPasswordByEmailAndOtpModel)) {
      return Promise.reject(helper.getValidationMessage('resetPasswordByEmailAndOtpModel'));
    }
    var queryParameters = {};

    queryParameters.apiKey = config.apiKey;

    var resourcePath = 'identity/v2/auth/password/reset';

    return config.request('PUT', resourcePath, queryParameters, resetPasswordByEmailAndOtpModel);
  };

  /**
  * This API is used to set a new password for the specified account if you are using the username as the unique identifier in your workflow
  * @param {resetPasswordByUserNameModel} Model Class containing Definition of payload for ResetPasswordByUserName API
  * @return Response containing Definition of Validation data and access token
  *10.7.3
  */

  module.resetPasswordByOTPAndUserName = function (resetPasswordByUserNameModel) {
    if (helper.checkJson(resetPasswordByUserNameModel)) {
      return Promise.reject(helper.getValidationMessage('resetPasswordByUserNameModel'));
    }
    var queryParameters = {};

    queryParameters.apiKey = config.apiKey;

    var resourcePath = 'identity/v2/auth/password/reset';

    return config.request('PUT', resourcePath, queryParameters, resetPasswordByUserNameModel);
  };

  /**
  * This API is used to change the accounts password based on the previous password
  * @param {accessToken} Uniquely generated identifier key by LoginRadius that is activated after successful authentication.
  * @param {newPassword} New password
  * @param {oldPassword} User's current password
  * @return Response containing Definition of Complete Validation data
  *10.8
  */

  module.changePassword = function (accessToken, newPassword,
    oldPassword) {
    if (helper.isNullOrWhiteSpace(accessToken)) {
      return Promise.reject(helper.getValidationMessage('accessToken'));
    }
    if (helper.isNullOrWhiteSpace(newPassword)) {
      return Promise.reject(helper.getValidationMessage('newPassword'));
    }
    if (helper.isNullOrWhiteSpace(oldPassword)) {
      return Promise.reject(helper.getValidationMessage('oldPassword'));
    }
    var queryParameters = {};

    queryParameters.access_token = accessToken;
    queryParameters.apiKey = config.apiKey;

    var bodyParameters = {};
    bodyParameters.newPassword = newPassword;
    bodyParameters.oldPassword = oldPassword;

    var resourcePath = 'identity/v2/auth/password/change';

    return config.request('PUT', resourcePath, queryParameters, bodyParameters);
  };

  /**
  * This API is used to unlink up a social provider account with the specified account based on the access token and the social providers user access token. The unlinked account will automatically get removed from your database.
  * @param {accessToken} Access_Token
  * @param {provider} Name of the provider
  * @param {providerId} Unique ID of the linked account
  * @return Response containing Definition of Delete Request
  *12.2
  */

  module.unlinkSocialIdentities = function (accessToken, provider,
    providerId) {
    if (helper.isNullOrWhiteSpace(accessToken)) {
      return Promise.reject(helper.getValidationMessage('accessToken'));
    }
    if (helper.isNullOrWhiteSpace(provider)) {
      return Promise.reject(helper.getValidationMessage('provider'));
    }
    if (helper.isNullOrWhiteSpace(providerId)) {
      return Promise.reject(helper.getValidationMessage('providerId'));
    }
    var queryParameters = {};

    queryParameters.access_token = accessToken;
    queryParameters.apiKey = config.apiKey;

    var bodyParameters = {};
    bodyParameters.provider = provider;
    bodyParameters.providerId = providerId;

    var resourcePath = 'identity/v2/auth/socialidentity';

    return config.request('DELETE', resourcePath, queryParameters, bodyParameters);
  };

  /**
  * This API is used to link up a social provider account with an existing LoginRadius account on the basis of access token and the social providers user access token.
  * @param {accessToken} Uniquely generated identifier key by LoginRadius that is activated after successful authentication.
  * @param {candidateToken} Access token of the account to be linked
  * @return Response containing Definition of Complete Validation data
  *12.4
  */

  module.linkSocialIdentities = function (accessToken, candidateToken) {
    if (helper.isNullOrWhiteSpace(accessToken)) {
      return Promise.reject(helper.getValidationMessage('accessToken'));
    }
    if (helper.isNullOrWhiteSpace(candidateToken)) {
      return Promise.reject(helper.getValidationMessage('candidateToken'));
    }
    var queryParameters = {};

    queryParameters.access_token = accessToken;
    queryParameters.apiKey = config.apiKey;

    var bodyParameters = {};
    bodyParameters.candidateToken = candidateToken;

    var resourcePath = 'identity/v2/auth/socialidentity';

    return config.request('POST', resourcePath, queryParameters, bodyParameters);
  };

  /**
  * This API is used to link up a social provider account with an existing LoginRadius account on the basis of ping and the social providers user access token.
  * @param {accessToken} Uniquely generated identifier key by LoginRadius that is activated after successful authentication.
  * @param {clientGuid} Unique ID generated by client
  * @return Response containing Definition of Complete Validation data
  *12.5
  */

  module.linkSocialIdentitiesByPing = function (accessToken, clientGuid) {
    if (helper.isNullOrWhiteSpace(accessToken)) {
      return Promise.reject(helper.getValidationMessage('accessToken'));
    }
    if (helper.isNullOrWhiteSpace(clientGuid)) {
      return Promise.reject(helper.getValidationMessage('clientGuid'));
    }
    var queryParameters = {};

    queryParameters.access_token = accessToken;
    queryParameters.apiKey = config.apiKey;

    var bodyParameters = {};
    bodyParameters.clientGuid = clientGuid;

    var resourcePath = 'identity/v2/auth/socialidentity';

    return config.request('POST', resourcePath, queryParameters, bodyParameters);
  };

  /**
  * This API is used to set or change UserName by access token.
  * @param {accessToken} Uniquely generated identifier key by LoginRadius that is activated after successful authentication.
  * @param {username} Username of the user
  * @return Response containing Definition of Complete Validation data
  *13.1
  */

  module.setOrChangeUserName = function (accessToken, username) {
    if (helper.isNullOrWhiteSpace(accessToken)) {
      return Promise.reject(helper.getValidationMessage('accessToken'));
    }
    if (helper.isNullOrWhiteSpace(username)) {
      return Promise.reject(helper.getValidationMessage('username'));
    }
    var queryParameters = {};

    queryParameters.access_token = accessToken;
    queryParameters.apiKey = config.apiKey;

    var bodyParameters = {};
    bodyParameters.username = username;

    var resourcePath = 'identity/v2/auth/username';

    return config.request('PUT', resourcePath, queryParameters, bodyParameters);
  };

  /**
  * This API is used to check the UserName exists or not on your site.
  * @param {username} UserName of the user
  * @return Response containing Definition Complete ExistResponse data
  *13.2
  */

  module.checkUserNameAvailability = function (username) {
    if (helper.isNullOrWhiteSpace(username)) {
      return Promise.reject(helper.getValidationMessage('username'));
    }
    var queryParameters = {};

    queryParameters.apiKey = config.apiKey;
    queryParameters.username = username;

    var resourcePath = 'identity/v2/auth/username';

    return config.request('GET', resourcePath, queryParameters, null);
  };

  /**
  * This API is used to update the privacy policy stored in the user's profile by providing the access token of the user accepting the privacy policy
  * @param {accessToken} Uniquely generated identifier key by LoginRadius that is activated after successful authentication.
  * @param {fields} The fields parameter filters the API response so that the response only includes a specific set of fields
  * @return Response containing Definition for Complete profile data
  *15.1
  */

  module.acceptPrivacyPolicy = function (accessToken, fields) {
    if (helper.isNullOrWhiteSpace(accessToken)) {
      return Promise.reject(helper.getValidationMessage('accessToken'));
    }
    var queryParameters = {};

    queryParameters.access_token = accessToken;
    queryParameters.apiKey = config.apiKey;
    if (!helper.isNullOrWhiteSpace(fields)) {
      queryParameters.fields = fields;
    }

    var resourcePath = 'identity/v2/auth/privacypolicy/accept';

    return config.request('GET', resourcePath, queryParameters, null);
  };

  /**
  * This API will return all the accepted privacy policies for the user by providing the access token of that user.
  * @param {accessToken} Uniquely generated identifier key by LoginRadius that is activated after successful authentication.
  * @return Complete Policy History data
  *15.2
  */

  module.getPrivacyPolicyHistoryByAccessToken = function (accessToken) {
    if (helper.isNullOrWhiteSpace(accessToken)) {
      return Promise.reject(helper.getValidationMessage('accessToken'));
    }
    var queryParameters = {};

    queryParameters.access_token = accessToken;
    queryParameters.apiKey = config.apiKey;

    var resourcePath = 'identity/v2/auth/privacypolicy/history';

    return config.request('GET', resourcePath, queryParameters, null);
  };

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

  module.userRegistrationByEmail = function (authUserRegistrationModel, sott,
    emailTemplate, fields, options, verificationUrl, welcomeEmailTemplate) {
    if (helper.checkJson(authUserRegistrationModel)) {
      return Promise.reject(helper.getValidationMessage('authUserRegistrationModel'));
    }
    if (helper.isNullOrWhiteSpace(sott)) {
      return Promise.reject(helper.getValidationMessage('sott'));
    }
    var queryParameters = {};

    queryParameters.apiKey = config.apiKey;
    queryParameters.sott = sott;
    if (!helper.isNullOrWhiteSpace(emailTemplate)) {
      queryParameters.emailTemplate = emailTemplate;
    }
    if (!helper.isNullOrWhiteSpace(fields)) {
      queryParameters.fields = fields;
    }
    if (!helper.isNullOrWhiteSpace(options)) {
      queryParameters.options = options;
    }
    if (!helper.isNullOrWhiteSpace(verificationUrl)) {
      queryParameters.verificationUrl = verificationUrl;
    }
    if (!helper.isNullOrWhiteSpace(welcomeEmailTemplate)) {
      queryParameters.welcomeEmailTemplate = welcomeEmailTemplate;
    }

    var resourcePath = 'identity/v2/auth/register';

    return config.request('POST', resourcePath, queryParameters, authUserRegistrationModel);
  };

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

  module.userRegistrationByCaptcha = function (authUserRegistrationModelWithCaptcha, emailTemplate,
    fields, options, smsTemplate, verificationUrl, welcomeEmailTemplate) {
    if (helper.checkJson(authUserRegistrationModelWithCaptcha)) {
      return Promise.reject(helper.getValidationMessage('authUserRegistrationModelWithCaptcha'));
    }
    var queryParameters = {};

    queryParameters.apiKey = config.apiKey;
    if (!helper.isNullOrWhiteSpace(emailTemplate)) {
      queryParameters.emailTemplate = emailTemplate;
    }
    if (!helper.isNullOrWhiteSpace(fields)) {
      queryParameters.fields = fields;
    }
    if (!helper.isNullOrWhiteSpace(options)) {
      queryParameters.options = options;
    }
    if (!helper.isNullOrWhiteSpace(smsTemplate)) {
      queryParameters.smsTemplate = smsTemplate;
    }
    if (!helper.isNullOrWhiteSpace(verificationUrl)) {
      queryParameters.verificationUrl = verificationUrl;
    }
    if (!helper.isNullOrWhiteSpace(welcomeEmailTemplate)) {
      queryParameters.welcomeEmailTemplate = welcomeEmailTemplate;
    }

    var resourcePath = 'identity/v2/auth/register/captcha';

    return config.request('POST', resourcePath, queryParameters, authUserRegistrationModelWithCaptcha);
  };

  /**
  * This API resends the verification email to the user.
  * @param {email} user's email
  * @param {emailTemplate} Email template name
  * @param {verificationUrl} Email verification url
  * @return Response containing Definition of Complete Validation data
  *17.3
  */

  module.authResendEmailVerification = function (email, emailTemplate,
    verificationUrl) {
    if (helper.isNullOrWhiteSpace(email)) {
      return Promise.reject(helper.getValidationMessage('email'));
    }
    var queryParameters = {};

    queryParameters.apiKey = config.apiKey;
    if (!helper.isNullOrWhiteSpace(emailTemplate)) {
      queryParameters.emailTemplate = emailTemplate;
    }
    if (!helper.isNullOrWhiteSpace(verificationUrl)) {
      queryParameters.verificationUrl = verificationUrl;
    }

    var bodyParameters = {};
    bodyParameters.email = email;

    var resourcePath = 'identity/v2/auth/register';

    return config.request('PUT', resourcePath, queryParameters, bodyParameters);
  };
  return module;
};

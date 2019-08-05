/*
 * Created by LoginRadius Development Team
   Copyright 2019 LoginRadius Inc. All rights reserved.
*/
module.exports = function (config) {
  var module = {};
  var helper = require(config.HELPER_PATH);

  /**
  * This API is used to retrieve all of the accepted Policies by the user, associated with their UID.
  * @param {uid} UID, the unified identifier for each user account
  * @return Complete Policy History data
  *15.1.1
  */

  module.getPrivacyPolicyHistoryByUid = function (uid) {
    if (helper.isNullOrWhiteSpace(uid)) {
      return Promise.reject(helper.getValidationMessage('uid'));
    }
    var queryParameters = {};

    queryParameters.apiKey = config.apiKey;
    queryParameters.apiSecret = config.apiSecret;

    var resourcePath = 'identity/v2/manage/account/' + uid + '/privacypolicy/history';

    return config.request('GET', resourcePath, queryParameters, null);
  };

  /**
  * This API is used to create an account in Cloud Storage. This API bypass the normal email verification process and manually creates the user. <br><br>In order to use this API, you need to format a JSON request body with all of the mandatory fields
  * @param {accountCreateModel} Model Class containing Definition of payload for Account Create API
  * @param {fields} The fields parameter filters the API response so that the response only includes a specific set of fields
  * @return Response containing Definition for Complete profile data
  *18.1
  */

  module.createAccount = function (accountCreateModel, fields) {
    if (helper.checkJson(accountCreateModel)) {
      return Promise.reject(helper.getValidationMessage('accountCreateModel'));
    }
    var queryParameters = {};

    queryParameters.apiKey = config.apiKey;
    queryParameters.apiSecret = config.apiSecret;
    if (!helper.isNullOrWhiteSpace(fields)) {
      queryParameters.fields = fields;
    }

    var resourcePath = 'identity/v2/manage/account';

    return config.request('POST', resourcePath, queryParameters, accountCreateModel);
  };

  /**
  * This API is used to retrieve all of the profile data, associated with the specified account by email in Cloud Storage.
  * @param {email} Email of the user
  * @param {fields} The fields parameter filters the API response so that the response only includes a specific set of fields
  * @return Response containing Definition for Complete profile data
  *18.2
  */

  module.getAccountProfileByEmail = function (email, fields) {
    if (helper.isNullOrWhiteSpace(email)) {
      return Promise.reject(helper.getValidationMessage('email'));
    }
    var queryParameters = {};

    queryParameters.apiKey = config.apiKey;
    queryParameters.apiSecret = config.apiSecret;
    queryParameters.email = email;
    if (!helper.isNullOrWhiteSpace(fields)) {
      queryParameters.fields = fields;
    }

    var resourcePath = 'identity/v2/manage/account';

    return config.request('GET', resourcePath, queryParameters, null);
  };

  /**
  * This API is used to retrieve all of the profile data associated with the specified account by user name in Cloud Storage.
  * @param {userName} UserName of the user
  * @param {fields} The fields parameter filters the API response so that the response only includes a specific set of fields
  * @return Response containing Definition for Complete profile data
  *18.3
  */

  module.getAccountProfileByUserName = function (userName, fields) {
    if (helper.isNullOrWhiteSpace(userName)) {
      return Promise.reject(helper.getValidationMessage('userName'));
    }
    var queryParameters = {};

    queryParameters.apiKey = config.apiKey;
    queryParameters.apiSecret = config.apiSecret;
    queryParameters.userName = userName;
    if (!helper.isNullOrWhiteSpace(fields)) {
      queryParameters.fields = fields;
    }

    var resourcePath = 'identity/v2/manage/account';

    return config.request('GET', resourcePath, queryParameters, null);
  };

  /**
  * This API is used to retrieve all of the profile data, associated with the account by phone number in Cloud Storage.
  * @param {phone} The Registered Phone Number
  * @param {fields} The fields parameter filters the API response so that the response only includes a specific set of fields
  * @return Response containing Definition for Complete profile data
  *18.4
  */

  module.getAccountProfileByPhone = function (phone, fields) {
    if (helper.isNullOrWhiteSpace(phone)) {
      return Promise.reject(helper.getValidationMessage('phone'));
    }
    var queryParameters = {};

    queryParameters.apiKey = config.apiKey;
    queryParameters.apiSecret = config.apiSecret;
    queryParameters.phone = phone;
    if (!helper.isNullOrWhiteSpace(fields)) {
      queryParameters.fields = fields;
    }

    var resourcePath = 'identity/v2/manage/account';

    return config.request('GET', resourcePath, queryParameters, null);
  };

  /**
  * This API is used to retrieve all of the profile data, associated with the account by uid in Cloud Storage.
  * @param {uid} UID, the unified identifier for each user account
  * @param {fields} The fields parameter filters the API response so that the response only includes a specific set of fields
  * @return Response containing Definition for Complete profile data
  *18.5
  */

  module.getAccountProfileByUid = function (uid, fields) {
    if (helper.isNullOrWhiteSpace(uid)) {
      return Promise.reject(helper.getValidationMessage('uid'));
    }
    var queryParameters = {};

    queryParameters.apiKey = config.apiKey;
    queryParameters.apiSecret = config.apiSecret;
    if (!helper.isNullOrWhiteSpace(fields)) {
      queryParameters.fields = fields;
    }

    var resourcePath = 'identity/v2/manage/account/' + uid;

    return config.request('GET', resourcePath, queryParameters, null);
  };

  /**
  * This API is used to update the information of existing accounts in your Cloud Storage. See our Advanced API Usage section <a href='https://www.loginradius.com/docs/api/v2/customer-identity-api/advanced-api-usage/'>Here</a> for more capabilities.
  * @param {accountUserProfileUpdateModel} Model Class containing Definition of payload for Account Update API
  * @param {uid} UID, the unified identifier for each user account
  * @param {fields} The fields parameter filters the API response so that the response only includes a specific set of fields
  * @param {nullSupport} Boolean, pass true if you wish to update any user profile field with a NULL value, You can get the details
  * @return Response containing Definition for Complete profile data
  *18.15
  */

  module.updateAccountByUid = function (accountUserProfileUpdateModel, uid,
    fields, nullSupport) {
    if (helper.checkJson(accountUserProfileUpdateModel)) {
      return Promise.reject(helper.getValidationMessage('accountUserProfileUpdateModel'));
    }
    if (helper.isNullOrWhiteSpace(uid)) {
      return Promise.reject(helper.getValidationMessage('uid'));
    }
    var queryParameters = {};

    queryParameters.apiKey = config.apiKey;
    queryParameters.apiSecret = config.apiSecret;
    if (!helper.isNullOrWhiteSpace(fields)) {
      queryParameters.fields = fields;
    }
    if (nullSupport !== null) {
      queryParameters.nullSupport = nullSupport;
    }

    var resourcePath = 'identity/v2/manage/account/' + uid;

    return config.request('PUT', resourcePath, queryParameters, accountUserProfileUpdateModel);
  };

  /**
  * This API is used to update the PhoneId by using the Uid's. Admin can update the PhoneId's for both the verified and unverified profiles. It will directly replace the PhoneId and bypass the OTP verification process.
  * @param {phone} Phone number
  * @param {uid} UID, the unified identifier for each user account
  * @param {fields} The fields parameter filters the API response so that the response only includes a specific set of fields
  * @return Response containing Definition for Complete profile data
  *18.16
  */

  module.updatePhoneIDByUid = function (phone, uid,
    fields) {
    if (helper.isNullOrWhiteSpace(phone)) {
      return Promise.reject(helper.getValidationMessage('phone'));
    }
    if (helper.isNullOrWhiteSpace(uid)) {
      return Promise.reject(helper.getValidationMessage('uid'));
    }
    var queryParameters = {};

    queryParameters.apiKey = config.apiKey;
    queryParameters.apiSecret = config.apiSecret;
    if (!helper.isNullOrWhiteSpace(fields)) {
      queryParameters.fields = fields;
    }

    var bodyParameters = {};
    bodyParameters.phone = phone;

    var resourcePath = 'identity/v2/manage/account/' + uid + '/phoneid';

    return config.request('PUT', resourcePath, queryParameters, bodyParameters);
  };

  /**
  * This API use to retrive the hashed password of a specified account in Cloud Storage.
  * @param {uid} UID, the unified identifier for each user account
  * @return Response containing Definition for Complete PasswordHash data
  *18.17
  */

  module.getAccountPasswordHashByUid = function (uid) {
    if (helper.isNullOrWhiteSpace(uid)) {
      return Promise.reject(helper.getValidationMessage('uid'));
    }
    var queryParameters = {};

    queryParameters.apiKey = config.apiKey;
    queryParameters.apiSecret = config.apiSecret;

    var resourcePath = 'identity/v2/manage/account/' + uid + '/password';

    return config.request('GET', resourcePath, queryParameters, null);
  };

  /**
  * This API is used to set the password of an account in Cloud Storage.
  * @param {password} New password
  * @param {uid} UID, the unified identifier for each user account
  * @return Response containing Definition for Complete PasswordHash data
  *18.18
  */

  module.setAccountPasswordByUid = function (password, uid) {
    if (helper.isNullOrWhiteSpace(password)) {
      return Promise.reject(helper.getValidationMessage('password'));
    }
    if (helper.isNullOrWhiteSpace(uid)) {
      return Promise.reject(helper.getValidationMessage('uid'));
    }
    var queryParameters = {};

    queryParameters.apiKey = config.apiKey;
    queryParameters.apiSecret = config.apiSecret;

    var bodyParameters = {};
    bodyParameters.password = password;

    var resourcePath = 'identity/v2/manage/account/' + uid + '/password';

    return config.request('PUT', resourcePath, queryParameters, bodyParameters);
  };

  /**
  * This API deletes the Users account and allows them to re-register for a new account.
  * @param {uid} UID, the unified identifier for each user account
  * @return Response containing Definition of Delete Request
  *18.19
  */

  module.deleteAccountByUid = function (uid) {
    if (helper.isNullOrWhiteSpace(uid)) {
      return Promise.reject(helper.getValidationMessage('uid'));
    }
    var queryParameters = {};

    queryParameters.apiKey = config.apiKey;
    queryParameters.apiSecret = config.apiSecret;

    var resourcePath = 'identity/v2/manage/account/' + uid;

    return config.request('DELETE', resourcePath, queryParameters, null);
  };

  /**
  * This API is used to invalidate the Email Verification status on an account.
  * @param {uid} UID, the unified identifier for each user account
  * @param {emailTemplate} Email template name
  * @param {verificationUrl} Email verification url
  * @return Response containing Definition of Complete Validation data
  *18.20
  */

  module.invalidateAccountEmailVerification = function (uid, emailTemplate,
    verificationUrl) {
    if (helper.isNullOrWhiteSpace(uid)) {
      return Promise.reject(helper.getValidationMessage('uid'));
    }
    var queryParameters = {};

    queryParameters.apiKey = config.apiKey;
    queryParameters.apiSecret = config.apiSecret;
    if (!helper.isNullOrWhiteSpace(emailTemplate)) {
      queryParameters.emailTemplate = emailTemplate;
    }
    if (!helper.isNullOrWhiteSpace(verificationUrl)) {
      queryParameters.verificationUrl = verificationUrl;
    }

    var resourcePath = 'identity/v2/manage/account/' + uid + '/invalidateemail';

    return config.request('PUT', resourcePath, queryParameters, null);
  };

  /**
  * This API Returns a Forgot Password Token it can also be used to send a Forgot Password email to the customer. Note: If you have the UserName workflow enabled, you may replace the 'email' parameter with 'username' in the body.
  * @param {email} user's email
  * @param {emailTemplate} Email template name
  * @param {resetPasswordUrl} Url to which user should get re-directed to for resetting the password
  * @param {sendEmail} If set to true, the API will also send a Forgot Password email to the customer, bypassing any Bot Protection challenges that they are faced with.
  * @return Response containing Definition of Complete Forgot Password data
  *18.22
  */

  module.getForgotPasswordToken = function (email, emailTemplate,
    resetPasswordUrl, sendEmail) {
    if (helper.isNullOrWhiteSpace(email)) {
      return Promise.reject(helper.getValidationMessage('email'));
    }
    var queryParameters = {};

    queryParameters.apiKey = config.apiKey;
    queryParameters.apiSecret = config.apiSecret;
    if (!helper.isNullOrWhiteSpace(emailTemplate)) {
      queryParameters.emailTemplate = emailTemplate;
    }
    if (!helper.isNullOrWhiteSpace(resetPasswordUrl)) {
      queryParameters.resetPasswordUrl = resetPasswordUrl;
    }
    if (sendEmail !== null) {
      queryParameters.sendEmail = sendEmail;
    }

    var bodyParameters = {};
    bodyParameters.email = email;

    var resourcePath = 'identity/v2/manage/account/forgot/token';

    return config.request('POST', resourcePath, queryParameters, bodyParameters);
  };

  /**
  * This API Returns an Email Verification token.
  * @param {email} user's email
  * @return Response containing Definition of Complete Verification data
  *18.23
  */

  module.getEmailVerificationToken = function (email) {
    if (helper.isNullOrWhiteSpace(email)) {
      return Promise.reject(helper.getValidationMessage('email'));
    }
    var queryParameters = {};

    queryParameters.apiKey = config.apiKey;
    queryParameters.apiSecret = config.apiSecret;

    var bodyParameters = {};
    bodyParameters.email = email;

    var resourcePath = 'identity/v2/manage/account/verify/token';

    return config.request('POST', resourcePath, queryParameters, bodyParameters);
  };

  /**
  * The API is used to get LoginRadius access token based on UID.
  * @param {uid} UID, the unified identifier for each user account
  * @return Response containing Definition of Complete Token data
  *18.24
  */

  module.getAccessTokenByUid = function (uid) {
    if (helper.isNullOrWhiteSpace(uid)) {
      return Promise.reject(helper.getValidationMessage('uid'));
    }
    var queryParameters = {};

    queryParameters.apiKey = config.apiKey;
    queryParameters.apiSecret = config.apiSecret;
    queryParameters.uid = uid;

    var resourcePath = 'identity/v2/manage/account/access_token';

    return config.request('GET', resourcePath, queryParameters, null);
  };

  /**
  * This API Allows you to reset the phone no verification of an end user’s account.
  * @param {uid} UID, the unified identifier for each user account
  * @param {smsTemplate} SMS Template name
  * @return Response containing Definition of Complete Validation data
  *18.27
  */

  module.resetPhoneIDVerificationByUid = function (uid, smsTemplate) {
    if (helper.isNullOrWhiteSpace(uid)) {
      return Promise.reject(helper.getValidationMessage('uid'));
    }
    var queryParameters = {};

    queryParameters.apiKey = config.apiKey;
    queryParameters.apiSecret = config.apiSecret;
    if (!helper.isNullOrWhiteSpace(smsTemplate)) {
      queryParameters.smsTemplate = smsTemplate;
    }

    var resourcePath = 'identity/v2/manage/account/' + uid + '/invalidatephone';

    return config.request('PUT', resourcePath, queryParameters, null);
  };

  /**
  * This API is used to add/upsert another emails in account profile by different-different email types. If the email type is same then it will simply update the existing email, otherwise it will add a new email in Email array.
  * @param {upsertEmailModel} Model Class containing Definition of payload for UpsertEmail Property
  * @param {uid} UID, the unified identifier for each user account
  * @param {fields} The fields parameter filters the API response so that the response only includes a specific set of fields
  * @return Response containing Definition for Complete profile data
  *18.29
  */

  module.upsertEmail = function (upsertEmailModel, uid,
    fields) {
    if (helper.checkJson(upsertEmailModel)) {
      return Promise.reject(helper.getValidationMessage('upsertEmailModel'));
    }
    if (helper.isNullOrWhiteSpace(uid)) {
      return Promise.reject(helper.getValidationMessage('uid'));
    }
    var queryParameters = {};

    queryParameters.apiKey = config.apiKey;
    queryParameters.apiSecret = config.apiSecret;
    if (!helper.isNullOrWhiteSpace(fields)) {
      queryParameters.fields = fields;
    }

    var resourcePath = 'identity/v2/manage/account/' + uid + '/email';

    return config.request('PUT', resourcePath, queryParameters, upsertEmailModel);
  };

  /**
  * Use this API to Remove emails from a user Account
  * @param {email} user's email
  * @param {uid} UID, the unified identifier for each user account
  * @param {fields} The fields parameter filters the API response so that the response only includes a specific set of fields
  * @return Response containing Definition for Complete profile data
  *18.30
  */

  module.removeEmail = function (email, uid,
    fields) {
    if (helper.isNullOrWhiteSpace(email)) {
      return Promise.reject(helper.getValidationMessage('email'));
    }
    if (helper.isNullOrWhiteSpace(uid)) {
      return Promise.reject(helper.getValidationMessage('uid'));
    }
    var queryParameters = {};

    queryParameters.apiKey = config.apiKey;
    queryParameters.apiSecret = config.apiSecret;
    if (!helper.isNullOrWhiteSpace(fields)) {
      queryParameters.fields = fields;
    }

    var bodyParameters = {};
    bodyParameters.email = email;

    var resourcePath = 'identity/v2/manage/account/' + uid + '/email';

    return config.request('DELETE', resourcePath, queryParameters, bodyParameters);
  };

  /**
  * This API is used to refresh an access_token via it's associated refresh_token.
  * @param {refreshToken} LoginRadius refresh_token
  * @return Response containing Definition of Complete Token data
  *18.31
  */

  module.refreshAccessTokenByRefreshToken = function (refreshToken) {
    if (helper.isNullOrWhiteSpace(refreshToken)) {
      return Promise.reject(helper.getValidationMessage('refreshToken'));
    }
    var queryParameters = {};

    queryParameters.apiKey = config.apiKey;
    queryParameters.apiSecret = config.apiSecret;
    queryParameters.refresh_Token = refreshToken;

    var resourcePath = 'identity/v2/manage/account/access_token/refresh';

    return config.request('GET', resourcePath, queryParameters, null);
  };

  /**
  * The Revoke Refresh Access Token API is used to revoke a refresh token or the Provider Access Token, revoking an existing refresh token will invalidate the refresh token but the associated access token will work until the expiry.
  * @param {refreshToken} LoginRadius refresh_token
  * @return Response containing Definition of Delete Request
  *18.32
  */

  module.revokeRefreshToken = function (refreshToken) {
    if (helper.isNullOrWhiteSpace(refreshToken)) {
      return Promise.reject(helper.getValidationMessage('refreshToken'));
    }
    var queryParameters = {};

    queryParameters.apiKey = config.apiKey;
    queryParameters.apiSecret = config.apiSecret;
    queryParameters.refresh_Token = refreshToken;

    var resourcePath = 'identity/v2/manage/account/access_token/refresh/revoke';

    return config.request('GET', resourcePath, queryParameters, null);
  };

  /**
  * Note: This is intended for specific workflows where an email may be associated to multiple UIDs. This API is used to retrieve all of the identities (UID and Profiles), associated with a specified email in Cloud Storage.
  * @param {email} Email of the user
  * @param {fields} The fields parameter filters the API response so that the response only includes a specific set of fields
  * @return Complete user Identity data
  *18.35
  */

  module.getAccountIdentitiesByEmail = function (email, fields) {
    if (helper.isNullOrWhiteSpace(email)) {
      return Promise.reject(helper.getValidationMessage('email'));
    }
    var queryParameters = {};

    queryParameters.apiKey = config.apiKey;
    queryParameters.apiSecret = config.apiSecret;
    queryParameters.email = email;
    if (!helper.isNullOrWhiteSpace(fields)) {
      queryParameters.fields = fields;
    }

    var resourcePath = 'identity/v2/manage/account/identities';

    return config.request('GET', resourcePath, queryParameters, null);
  };
  return module;
};

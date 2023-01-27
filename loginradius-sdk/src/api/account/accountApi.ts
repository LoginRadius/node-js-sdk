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

export default class AccountApi {
  // eslint-disable-next-line no-useless-constructor, no-unused-vars, no-empty-function
  constructor (private config: LoginRadiusConfig) {}

  /**
   * This API is used to retrieve all of the accepted Policies by the user, associated with their UID.
   * @param {uid} UID, the unified identifier for each user account
   * @return Complete Policy History data
   *15.1.1
   */
  getPrivacyPolicyHistoryByUid (uid) {
    if (isNullOrWhiteSpace(uid)) {
      return Promise.reject(getValidationMessage('uid'));
    }
    var queryParameters: any = {};

    queryParameters.apiKey = this.config.apiKey;
    queryParameters.apiSecret = this.config.apiSecret;

    var resourcePath =
      'identity/v2/manage/account/' + uid + '/privacypolicy/history';

    return request(this.config, 'GET', resourcePath, queryParameters, null);
  }

  /**
   * This API is used to create an account in Cloud Storage. This API bypass the normal email verification process and manually creates the user. <br><br>In order to use this API, you need to format a JSON request body with all of the mandatory fields
   * @param {accountCreateModel} Model Class containing Definition of payload for Account Create API
   * @param {fields} The fields parameter filters the API response so that the response only includes a specific set of fields
   * @return Response containing Definition for Complete profile data
   *18.1
   */
  createAccount (accountCreateModel, fields) {
    if (checkJson(accountCreateModel)) {
      return Promise.reject(getValidationMessage('accountCreateModel'));
    }
    var queryParameters: any = {};

    queryParameters.apiKey = this.config.apiKey;
    queryParameters.apiSecret = this.config.apiSecret;
    if (!isNullOrWhiteSpace(fields)) {
      queryParameters.fields = fields;
    }

    var resourcePath = 'identity/v2/manage/account';

    return request(
      this.config,
      'POST',
      resourcePath,
      queryParameters,
      accountCreateModel
    );
  }

  /**
   * This API is used to retrieve all of the profile data, associated with the specified account by email in Cloud Storage.
   * @param {email} Email of the user
   * @param {fields} The fields parameter filters the API response so that the response only includes a specific set of fields
   * @return Response containing Definition for Complete profile data
   *18.2
   */
  getAccountProfileByEmail (email, fields) {
    if (isNullOrWhiteSpace(email)) {
      return Promise.reject(getValidationMessage('email'));
    }
    var queryParameters: any = {};

    queryParameters.apiKey = this.config.apiKey;
    queryParameters.apiSecret = this.config.apiSecret;
    queryParameters.email = email;
    if (!isNullOrWhiteSpace(fields)) {
      queryParameters.fields = fields;
    }

    var resourcePath = 'identity/v2/manage/account';

    return request(this.config, 'GET', resourcePath, queryParameters, null);
  }

  /**
   * This API is used to retrieve all of the profile data associated with the specified account by user name in Cloud Storage.
   * @param {userName} UserName of the user
   * @param {fields} The fields parameter filters the API response so that the response only includes a specific set of fields
   * @return Response containing Definition for Complete profile data
   *18.3
   */
  getAccountProfileByUserName (userName, fields) {
    if (isNullOrWhiteSpace(userName)) {
      return Promise.reject(getValidationMessage('userName'));
    }
    var queryParameters: any = {};

    queryParameters.apiKey = this.config.apiKey;
    queryParameters.apiSecret = this.config.apiSecret;
    queryParameters.userName = userName;
    if (!isNullOrWhiteSpace(fields)) {
      queryParameters.fields = fields;
    }

    var resourcePath = 'identity/v2/manage/account';

    return request(this.config, 'GET', resourcePath, queryParameters, null);
  }

  /**
   * This API is used to retrieve all of the profile data, associated with the account by phone number in Cloud Storage.
   * @param {phone} The Registered Phone Number
   * @param {fields} The fields parameter filters the API response so that the response only includes a specific set of fields
   * @return Response containing Definition for Complete profile data
   *18.4
   */

  getAccountProfileByPhone (phone, fields) {
    if (isNullOrWhiteSpace(phone)) {
      return Promise.reject(getValidationMessage('phone'));
    }
    var queryParameters: any = {};

    queryParameters.apiKey = this.config.apiKey;
    queryParameters.apiSecret = this.config.apiSecret;
    queryParameters.phone = phone;
    if (!isNullOrWhiteSpace(fields)) {
      queryParameters.fields = fields;
    }

    var resourcePath = 'identity/v2/manage/account';

    return request(this.config, 'GET', resourcePath, queryParameters, null);
  }

  /**
   * This API is used to retrieve all of the profile data, associated with the account by uid in Cloud Storage.
   * @param {uid} UID, the unified identifier for each user account
   * @param {fields} The fields parameter filters the API response so that the response only includes a specific set of fields
   * @return Response containing Definition for Complete profile data
   *18.5
   */

  getAccountProfileByUid (uid, fields) {
    if (isNullOrWhiteSpace(uid)) {
      return Promise.reject(getValidationMessage('uid'));
    }
    var queryParameters: any = {};

    queryParameters.apiKey = this.config.apiKey;
    queryParameters.apiSecret = this.config.apiSecret;
    if (!isNullOrWhiteSpace(fields)) {
      queryParameters.fields = fields;
    }

    var resourcePath = 'identity/v2/manage/account/' + uid;

    return request(this.config, 'GET', resourcePath, queryParameters, null);
  }

  /**
   * This API is used to update the information of existing accounts in your Cloud Storage. See our Advanced API Usage section <a href='https://www.loginradius.com/docs/api/v2/customer-identity-api/advanced-api-usage/'>Here</a> for more capabilities.
   * @param {accountUserProfileUpdateModel} Model Class containing Definition of payload for Account Update API
   * @param {uid} UID, the unified identifier for each user account
   * @param {fields} The fields parameter filters the API response so that the response only includes a specific set of fields
   * @param {nullSupport} Boolean, pass true if you wish to update any user profile field with a NULL value, You can get the details
   * @return Response containing Definition for Complete profile data
   *18.15
   */

  updateAccountByUid (accountUserProfileUpdateModel, uid, fields, nullSupport) {
    if (checkJson(accountUserProfileUpdateModel)) {
      return Promise.reject(
        getValidationMessage('accountUserProfileUpdateModel')
      );
    }
    if (isNullOrWhiteSpace(uid)) {
      return Promise.reject(getValidationMessage('uid'));
    }
    var queryParameters: any = {};

    queryParameters.apiKey = this.config.apiKey;
    queryParameters.apiSecret = this.config.apiSecret;
    if (!isNullOrWhiteSpace(fields)) {
      queryParameters.fields = fields;
    }
    if (nullSupport !== null) {
      queryParameters.nullSupport = nullSupport;
    }

    var resourcePath = 'identity/v2/manage/account/' + uid;

    return request(
      this.config,
      'PUT',
      resourcePath,
      queryParameters,
      accountUserProfileUpdateModel
    );
  }

  /**
   * This API is used to update the PhoneId by using the Uid's. Admin can update the PhoneId's for both the verified and unverified profiles. It will directly replace the PhoneId and bypass the OTP verification process.
   * @param {phone} Phone number
   * @param {uid} UID, the unified identifier for each user account
   * @param {fields} The fields parameter filters the API response so that the response only includes a specific set of fields
   * @return Response containing Definition for Complete profile data
   *18.16
   */

  updatePhoneIDByUid (phone, uid, fields) {
    if (isNullOrWhiteSpace(phone)) {
      return Promise.reject(getValidationMessage('phone'));
    }
    if (isNullOrWhiteSpace(uid)) {
      return Promise.reject(getValidationMessage('uid'));
    }
    var queryParameters: any = {};

    queryParameters.apiKey = this.config.apiKey;
    queryParameters.apiSecret = this.config.apiSecret;
    if (!isNullOrWhiteSpace(fields)) {
      queryParameters.fields = fields;
    }

    var bodyParameters: any = {};
    bodyParameters.phone = phone;

    var resourcePath = 'identity/v2/manage/account/' + uid + '/phoneid';

    return request(
      this.config,
      'PUT',
      resourcePath,
      queryParameters,
      bodyParameters
    );
  }

  /**
   * This API use to retrive the hashed password of a specified account in Cloud Storage.
   * @param {uid} UID, the unified identifier for each user account
   * @return Response containing Definition for Complete PasswordHash data
   *18.17
   */

  getAccountPasswordHashByUid (uid) {
    if (isNullOrWhiteSpace(uid)) {
      return Promise.reject(getValidationMessage('uid'));
    }
    var queryParameters: any = {};

    queryParameters.apiKey = this.config.apiKey;
    queryParameters.apiSecret = this.config.apiSecret;

    var resourcePath = 'identity/v2/manage/account/' + uid + '/password';

    return request(this.config, 'GET', resourcePath, queryParameters, null);
  }

  /**
   * This API is used to set the password of an account in Cloud Storage.
   * @param {password} New password
   * @param {uid} UID, the unified identifier for each user account
   * @return Response containing Definition for Complete PasswordHash data
   *18.18
   */
  setAccountPasswordByUid (password, uid) {
    if (isNullOrWhiteSpace(password)) {
      return Promise.reject(getValidationMessage('password'));
    }
    if (isNullOrWhiteSpace(uid)) {
      return Promise.reject(getValidationMessage('uid'));
    }
    var queryParameters: any = {};

    queryParameters.apiKey = this.config.apiKey;
    queryParameters.apiSecret = this.config.apiSecret;

    var bodyParameters: any = {};
    bodyParameters.password = password;

    var resourcePath = 'identity/v2/manage/account/' + uid + '/password';

    return request(
      this.config,
      'PUT',
      resourcePath,
      queryParameters,
      bodyParameters
    );
  }

  /**
   * This API deletes the Users account and allows them to re-register for a new account.
   * @param {uid} UID, the unified identifier for each user account
   * @return Response containing Definition of Delete Request
   *18.19
   */
  deleteAccountByUid (uid) {
    if (isNullOrWhiteSpace(uid)) {
      return Promise.reject(getValidationMessage('uid'));
    }
    var queryParameters: any = {};

    queryParameters.apiKey = this.config.apiKey;
    queryParameters.apiSecret = this.config.apiSecret;

    var resourcePath = 'identity/v2/manage/account/' + uid;

    return request(this.config, 'DELETE', resourcePath, queryParameters, null);
  }

  /**
   * This API is used to invalidate the Email Verification status on an account.
   * @param {uid} UID, the unified identifier for each user account
   * @param {emailTemplate} Email template name
   * @param {verificationUrl} Email verification url
   * @return Response containing Definition of Complete Validation data
   *18.20
   */

  invalidateAccountEmailVerification (uid, emailTemplate, verificationUrl) {
    if (isNullOrWhiteSpace(uid)) {
      return Promise.reject(getValidationMessage('uid'));
    }
    var queryParameters: any = {};

    queryParameters.apiKey = this.config.apiKey;
    queryParameters.apiSecret = this.config.apiSecret;
    if (!isNullOrWhiteSpace(emailTemplate)) {
      queryParameters.emailTemplate = emailTemplate;
    }
    if (!isNullOrWhiteSpace(verificationUrl)) {
      queryParameters.verificationUrl = verificationUrl;
    }

    var resourcePath = 'identity/v2/manage/account/' + uid + '/invalidateemail';

    return request(this.config, 'PUT', resourcePath, queryParameters, null);
  }

  /**
   * This API Returns a Forgot Password Token it can also be used to send a Forgot Password email to the customer. Note: If you have the UserName workflow enabled, you may replace the 'email' parameter with 'username' in the body.
   * @param {email} user's email
   * @param {emailTemplate} Email template name
   * @param {resetPasswordUrl} Url to which user should get re-directed to for resetting the password
   * @param {sendEmail} If set to true, the API will also send a Forgot Password email to the customer, bypassing any Bot Protection challenges that they are faced with.
   * @return Response containing Definition of Complete Forgot Password data
   *18.22
   */
  getForgotPasswordToken (email, emailTemplate, resetPasswordUrl, sendEmail) {
    if (isNullOrWhiteSpace(email)) {
      return Promise.reject(getValidationMessage('email'));
    }
    var queryParameters: any = {};

    queryParameters.apiKey = this.config.apiKey;
    queryParameters.apiSecret = this.config.apiSecret;
    if (!isNullOrWhiteSpace(emailTemplate)) {
      queryParameters.emailTemplate = emailTemplate;
    }
    if (!isNullOrWhiteSpace(resetPasswordUrl)) {
      queryParameters.resetPasswordUrl = resetPasswordUrl;
    }
    if (sendEmail !== null) {
      queryParameters.sendEmail = sendEmail;
    }

    var bodyParameters: any = {};
    bodyParameters.email = email;

    var resourcePath = 'identity/v2/manage/account/forgot/token';

    return request(
      this.config,
      'POST',
      resourcePath,
      queryParameters,
      bodyParameters
    );
  }

  /**
   * This API Returns an Email Verification token.
   * @param {email} user's email
   * @return Response containing Definition of Complete Verification data
   *18.23
   */
  getEmailVerificationToken (email) {
    if (isNullOrWhiteSpace(email)) {
      return Promise.reject(getValidationMessage('email'));
    }
    var queryParameters: any = {};

    queryParameters.apiKey = this.config.apiKey;
    queryParameters.apiSecret = this.config.apiSecret;

    var bodyParameters: any = {};
    bodyParameters.email = email;

    var resourcePath = 'identity/v2/manage/account/verify/token';

    return request(
      this.config,
      'POST',
      resourcePath,
      queryParameters,
      bodyParameters
    );
  }

  /**
   * The API is used to get LoginRadius access token based on UID.
   * @param {uid} UID, the unified identifier for each user account
   * @return Response containing Definition of Complete Token data
   *18.24
   */
  getAccessTokenByUid (uid) {
    if (isNullOrWhiteSpace(uid)) {
      return Promise.reject(getValidationMessage('uid'));
    }
    var queryParameters: any = {};

    queryParameters.apiKey = this.config.apiKey;
    queryParameters.apiSecret = this.config.apiSecret;
    queryParameters.uid = uid;

    var resourcePath = 'identity/v2/manage/account/access_token';

    return request(this.config, 'GET', resourcePath, queryParameters, null);
  }

  /**
   * This API Allows you to reset the phone no verification of an end user’s account.
   * @param {uid} UID, the unified identifier for each user account
   * @param {smsTemplate} SMS Template name
   * @return Response containing Definition of Complete Validation data
   *18.27
   */
  resetPhoneIDVerificationByUid (uid, smsTemplate) {
    if (isNullOrWhiteSpace(uid)) {
      return Promise.reject(getValidationMessage('uid'));
    }
    var queryParameters: any = {};

    queryParameters.apiKey = this.config.apiKey;
    queryParameters.apiSecret = this.config.apiSecret;
    if (!isNullOrWhiteSpace(smsTemplate)) {
      queryParameters.smsTemplate = smsTemplate;
    }

    var resourcePath = 'identity/v2/manage/account/' + uid + '/invalidatephone';

    return request(this.config, 'PUT', resourcePath, queryParameters, null);
  }

  /**
   * This API is used to add/upsert another emails in account profile by different-different email types. If the email type is same then it will simply update the existing email, otherwise it will add a new email in Email array.
   * @param {upsertEmailModel} Model Class containing Definition of payload for UpsertEmail Property
   * @param {uid} UID, the unified identifier for each user account
   * @param {fields} The fields parameter filters the API response so that the response only includes a specific set of fields
   * @return Response containing Definition for Complete profile data
   *18.29
   */
  upsertEmail (upsertEmailModel, uid, fields) {
    if (checkJson(upsertEmailModel)) {
      return Promise.reject(getValidationMessage('upsertEmailModel'));
    }
    if (isNullOrWhiteSpace(uid)) {
      return Promise.reject(getValidationMessage('uid'));
    }
    var queryParameters: any = {};

    queryParameters.apiKey = this.config.apiKey;
    queryParameters.apiSecret = this.config.apiSecret;
    if (!isNullOrWhiteSpace(fields)) {
      queryParameters.fields = fields;
    }

    var resourcePath = 'identity/v2/manage/account/' + uid + '/email';

    return request(
      this.config,
      'PUT',
      resourcePath,
      queryParameters,
      upsertEmailModel
    );
  }

  /**
   * Use this API to Remove emails from a user Account
   * @param {email} user's email
   * @param {uid} UID, the unified identifier for each user account
   * @param {fields} The fields parameter filters the API response so that the response only includes a specific set of fields
   * @return Response containing Definition for Complete profile data
   *18.30
   */
  removeEmail (email, uid, fields) {
    if (isNullOrWhiteSpace(email)) {
      return Promise.reject(getValidationMessage('email'));
    }
    if (isNullOrWhiteSpace(uid)) {
      return Promise.reject(getValidationMessage('uid'));
    }
    var queryParameters: any = {};

    queryParameters.apiKey = this.config.apiKey;
    queryParameters.apiSecret = this.config.apiSecret;
    if (!isNullOrWhiteSpace(fields)) {
      queryParameters.fields = fields;
    }

    var bodyParameters: any = {};
    bodyParameters.email = email;

    var resourcePath = 'identity/v2/manage/account/' + uid + '/email';

    return request(
      this.config,
      'DELETE',
      resourcePath,
      queryParameters,
      bodyParameters
    );
  }

  /**
   * This API is used to refresh an access token via it's associated refresh token.
   * @param {refreshToken} LoginRadius refresh token
   * @return Response containing Definition of Complete Token data
   *18.31
   */
  refreshAccessTokenByRefreshToken (refreshToken) {
    if (isNullOrWhiteSpace(refreshToken)) {
      return Promise.reject(getValidationMessage('refreshToken'));
    }
    var queryParameters: any = {};

    queryParameters.apiKey = this.config.apiKey;
    queryParameters.apiSecret = this.config.apiSecret;
    queryParameters.refresh_Token = refreshToken;

    var resourcePath = 'identity/v2/manage/account/access_token/refresh';

    return request(this.config, 'GET', resourcePath, queryParameters, null);
  }

  /**
   * The Revoke Refresh Access Token API is used to revoke a refresh token or the Provider Access Token, revoking an existing refresh token will invalidate the refresh token but the associated access token will work until the expiry.
   * @param {refreshToken} LoginRadius refresh token
   * @return Response containing Definition of Delete Request
   *18.32
   */
  revokeRefreshToken (refreshToken) {
    if (isNullOrWhiteSpace(refreshToken)) {
      return Promise.reject(getValidationMessage('refreshToken'));
    }
    var queryParameters: any = {};

    queryParameters.apiKey = this.config.apiKey;
    queryParameters.apiSecret = this.config.apiSecret;
    queryParameters.refresh_Token = refreshToken;

    var resourcePath = 'identity/v2/manage/account/access_token/refresh/revoke';

    return request(this.config, 'GET', resourcePath, queryParameters, null);
  }

  /**
   * Note: This is intended for specific workflows where an email may be associated to multiple UIDs. This API is used to retrieve all of the identities (UID and Profiles), associated with a specified email in Cloud Storage.
   * @param {email} Email of the user
   * @param {fields} The fields parameter filters the API response so that the response only includes a specific set of fields
   * @return Complete user Identity data
   *18.35
   */
  getAccountIdentitiesByEmail (email, fields) {
    if (isNullOrWhiteSpace(email)) {
      return Promise.reject(getValidationMessage('email'));
    }
    var queryParameters: any = {};

    queryParameters.apiKey = this.config.apiKey;
    queryParameters.apiSecret = this.config.apiSecret;
    queryParameters.email = email;
    if (!isNullOrWhiteSpace(fields)) {
      queryParameters.fields = fields;
    }

    var resourcePath = 'identity/v2/manage/account/identities';

    return request(this.config, 'GET', resourcePath, queryParameters, null);
  }

  /**
   * This API is used to delete all user profiles associated with an Email.
   * @param {email} Email of the user
   * @return Response containing Definition of Delete Request
   *18.36
   */
  accountDeleteByEmail (email) {
    if (isNullOrWhiteSpace(email)) {
      return Promise.reject(getValidationMessage('email'));
    }
    var queryParameters: any = {};

    queryParameters.apiKey = this.config.apiKey;
    queryParameters.apiSecret = this.config.apiSecret;
    queryParameters.email = email;

    var resourcePath = 'identity/v2/manage/account';

    return request(this.config, 'DELETE', resourcePath, queryParameters, null);
  }

  /**
   * This API is used to update a user's Uid. It will update all profiles, custom objects and consent management logs associated with the Uid.
   * @param {updateUidModel} Payload containing Update UID
   * @param {uid} UID, the unified identifier for each user account
   * @return Response containing Definition of Complete Validation data
   *18.41
   */
  accountUpdateUid (updateUidModel, uid) {
    if (checkJson(updateUidModel)) {
      return Promise.reject(getValidationMessage('updateUidModel'));
    }
    if (isNullOrWhiteSpace(uid)) {
      return Promise.reject(getValidationMessage('uid'));
    }
    var queryParameters: any = {};

    queryParameters.apiKey = this.config.apiKey;
    queryParameters.apiSecret = this.config.apiSecret;
    queryParameters.uid = uid;

    var resourcePath = 'identity/v2/manage/account/uid';

    return request(
      this.config,
      'PUT',
      resourcePath,
      queryParameters,
      updateUidModel
    );
  }
}

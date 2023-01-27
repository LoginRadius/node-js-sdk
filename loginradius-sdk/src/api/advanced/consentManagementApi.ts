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

export default class ConsentManagementApi {
  // eslint-disable-next-line no-useless-constructor, no-unused-vars, no-empty-function
  constructor (private config: LoginRadiusConfig) {}

  /**
   * This API is used to get the Consent logs of the user.
   * @param uid The unified identifier for each user account
   * @return Response containing consent logs
   *18.37
   */
  getConsentLogsByUid (uid: string) {
    if (isNullOrWhiteSpace(uid)) {
      return Promise.reject(getValidationMessage('uid'));
    }
    var queryParameters: any = {};

    queryParameters.apiKey = this.config.apiKey;
    queryParameters.apiSecret = this.config.apiSecret;

    var resourcePath = 'identity/v2/manage/account/' + uid + '/consent/logs';

    return request(this.config, 'GET', resourcePath, queryParameters, null);
  }

  /**
   * This API is to submit consent form using consent token.
   * @param consentToken The consent token received after login error 1226
   * @param consentSubmitModel Model class containing list of multiple consent
   * @return Response containing User Profile Data and access token
   *43.1
   */
  submitConsentByConsentToken (consentToken: string, consentSubmitModel: object) {
    if (isNullOrWhiteSpace(consentToken)) {
      return Promise.reject(getValidationMessage('consentToken'));
    }
    if (checkJson(consentSubmitModel)) {
      return Promise.reject(getValidationMessage('consentSubmitModel'));
    }
    var queryParameters: any = {};

    queryParameters.apiKey = this.config.apiKey;
    queryParameters.consentToken = consentToken;

    var resourcePath = 'identity/v2/auth/consent';

    return request(
      this.config,
      'POST',
      resourcePath,
      queryParameters,
      consentSubmitModel
    );
  }

  /**
   * This API is used to fetch consent logs.
   * @param accessToken Uniquely generated identifier key by LoginRadius that is activated after successful authentication.
   * @return Response containing consent logs
   *43.2
   */
  getConsentLogs (accessToken: string) {
    if (isNullOrWhiteSpace(accessToken)) {
      return Promise.reject(getValidationMessage('accessToken'));
    }
    var queryParameters: any = {};

    queryParameters.access_token = accessToken;
    queryParameters.apiKey = this.config.apiKey;

    var resourcePath = 'identity/v2/auth/consent/logs';

    return request(this.config, 'GET', resourcePath, queryParameters, null);
  }

  /**
   * API to provide a way to end user to submit a consent form for particular event type.
   * @param accessToken Uniquely generated identifier key by LoginRadius that is activated after successful authentication.
   * @param consentSubmitModel Model class containing list of multiple consent
   * @return Response containing Definition for Complete profile data
   *43.3
   */
  submitConsentByAccessToken (accessToken: string, consentSubmitModel: object) {
    if (isNullOrWhiteSpace(accessToken)) {
      return Promise.reject(getValidationMessage('accessToken'));
    }
    if (checkJson(consentSubmitModel)) {
      return Promise.reject(getValidationMessage('consentSubmitModel'));
    }
    var queryParameters: any = {};

    queryParameters.access_token = accessToken;
    queryParameters.apiKey = this.config.apiKey;

    var resourcePath = 'identity/v2/auth/consent/profile';

    return request(
      this.config,
      'POST',
      resourcePath,
      queryParameters,
      consentSubmitModel
    );
  }

  /**
   * This API is used to check if consent is submitted for a particular event or not.
   * @param accessToken Uniquely generated identifier key by LoginRadius that is activated after successful authentication.
   * @param event Allowed events: Login, Register, UpdateProfile, ResetPassword, ChangePassword, emailVerification, AddEmail, RemoveEmail, BlockAccount, DeleteAccount, SetUsername, AssignRoles, UnassignRoles, SetPassword, LinkAccount, UnlinkAccount, UpdatePhoneId, VerifyPhoneNumber, CreateCustomObject, UpdateCustomobject, DeleteCustomObject
   * @param isCustom true/false
   * @return Response containing consent profile
   *43.4
   */
  verifyConsentByAccessToken (accessToken: string, event: string, isCustom: boolean) {
    if (isNullOrWhiteSpace(accessToken)) {
      return Promise.reject(getValidationMessage('accessToken'));
    }
    if (isNullOrWhiteSpace(event)) {
      return Promise.reject(getValidationMessage('event'));
    }
    var queryParameters: any = {};

    queryParameters.access_token = accessToken;
    queryParameters.apiKey = this.config.apiKey;
    queryParameters.event = event;
    queryParameters.isCustom = isCustom;

    var resourcePath = 'identity/v2/auth/consent/verify';

    return request(this.config, 'GET', resourcePath, queryParameters, null);
  }

  /**
   * This API is to update consents using access token.
   * @param accessToken Uniquely generated identifier key by LoginRadius that is activated after successful authentication.
   * @param consentUpdateModel Model class containg list of multiple consent
   * @return Response containing consent profile
   *43.5
   */
  updateConsentProfileByAccessToken (accessToken: string, consentUpdateModel: object) {
    if (isNullOrWhiteSpace(accessToken)) {
      return Promise.reject(getValidationMessage('accessToken'));
    }
    if (checkJson(consentUpdateModel)) {
      return Promise.reject(getValidationMessage('consentUpdateModel'));
    }
    var queryParameters: any = {};

    queryParameters.access_token = accessToken;
    queryParameters.apiKey = this.config.apiKey;

    var resourcePath = 'identity/v2/auth/consent';

    return request(
      this.config,
      'PUT',
      resourcePath,
      queryParameters,
      consentUpdateModel
    );
  }
}

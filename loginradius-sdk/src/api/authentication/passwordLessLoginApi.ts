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

export default class PasswordlessLoginApi {
  // eslint-disable-next-line no-useless-constructor, no-unused-vars, no-empty-function
  constructor (private config: LoginRadiusConfig) {}

  /**
   * This API verifies an account by OTP and allows the customer to login.
   * @param passwordLessLoginOtpModel Model Class containing Definition of payload for PasswordLessLoginOtpModel API
   * @param fields The fields parameter filters the API response so that the response only includes a specific set of fields
   * @param smsTemplate SMS Template name
   * @return Response containing User Profile Data and access token
   *9.6
   */
  passwordlessLoginPhoneVerification (
    passwordLessLoginOtpModel: object,
    fields?: string,
    smsTemplate?: string
  ) {
    if (checkJson(passwordLessLoginOtpModel)) {
      return Promise.reject(getValidationMessage('passwordLessLoginOtpModel'));
    }
    var queryParameters: any = {};

    queryParameters.apiKey = this.config.apiKey;
    if (!isNullOrWhiteSpace(fields)) {
      queryParameters.fields = fields;
    }
    if (!isNullOrWhiteSpace(smsTemplate)) {
      queryParameters.smsTemplate = smsTemplate;
    }

    var resourcePath = 'identity/v2/auth/login/passwordlesslogin/otp/verify';

    return request(
      this.config,
      'PUT',
      resourcePath,
      queryParameters,
      passwordLessLoginOtpModel
    );
  }

  /**
   * API can be used to send a One-time Passcode (OTP) provided that the account has a verified PhoneID
   * @param phone The Registered Phone Number
   * @param smsTemplate SMS Template name
   * @return Response Containing Definition of SMS Data
   *9.15
   */
  passwordlessLoginByPhone (phone: string, smsTemplate?: string) {
    if (isNullOrWhiteSpace(phone)) {
      return Promise.reject(getValidationMessage('phone'));
    }
    var queryParameters: any = {};

    queryParameters.apiKey = this.config.apiKey;
    queryParameters.phone = phone;
    if (!isNullOrWhiteSpace(smsTemplate)) {
      queryParameters.smsTemplate = smsTemplate;
    }

    var resourcePath = 'identity/v2/auth/login/passwordlesslogin/otp';

    return request(this.config, 'GET', resourcePath, queryParameters, null);
  }

  /**
   * This API is used to send a Passwordless Login verification link to the provided Email ID
   * @param email Email of the user
   * @param passwordLessLoginTemplate Passwordless Login Template Name
   * @param verificationUrl Email verification url
   * @return Response containing Definition of Complete Validation data
   *9.18.1
   */
  passwordlessLoginByEmail (email: string, passwordLessLoginTemplate?: string, verificationUrl?: string) {
    if (isNullOrWhiteSpace(email)) {
      return Promise.reject(getValidationMessage('email'));
    }
    var queryParameters: any = {};

    queryParameters.apiKey = this.config.apiKey;
    queryParameters.email = email;
    if (!isNullOrWhiteSpace(passwordLessLoginTemplate)) {
      queryParameters.passwordLessLoginTemplate = passwordLessLoginTemplate;
    }
    if (!isNullOrWhiteSpace(verificationUrl)) {
      queryParameters.verificationUrl = verificationUrl;
    }

    var resourcePath = 'identity/v2/auth/login/passwordlesslogin/email';

    return request(this.config, 'GET', resourcePath, queryParameters, null);
  }

  /**
   * This API is used to send a Passwordless Login Verification Link to a customer by providing their UserName
   * @param username UserName of the user
   * @param passwordLessLoginTemplate Passwordless Login Template Name
   * @param verificationUrl Email verification url
   * @return Response containing Definition of Complete Validation data
   *9.18.2
   */
  passwordlessLoginByUserName (
    username: string,
    passwordLessLoginTemplate: string,
    verificationUrl: string
  ) {
    if (isNullOrWhiteSpace(username)) {
      return Promise.reject(getValidationMessage('username'));
    }
    var queryParameters: any = {};

    queryParameters.apiKey = this.config.apiKey;
    queryParameters.username = username;
    if (!isNullOrWhiteSpace(passwordLessLoginTemplate)) {
      queryParameters.passwordLessLoginTemplate = passwordLessLoginTemplate;
    }
    if (!isNullOrWhiteSpace(verificationUrl)) {
      queryParameters.verificationUrl = verificationUrl;
    }

    var resourcePath = 'identity/v2/auth/login/passwordlesslogin/email';

    return request(this.config, 'GET', resourcePath, queryParameters, null);
  }

  /**
   * This API is used to verify the Passwordless Login verification link. Note: If you are using Passwordless Login by Phone you will need to use the Passwordless Login Phone Verification API
   * @param verificationToken Verification token received in the email
   * @param fields The fields parameter filters the API response so that the response only includes a specific set of fields
   * @param welcomeEmailTemplate Name of the welcome email template
   * @return Response containing User Profile Data and access token
   *9.19
   */
  passwordlessLoginVerification (
    verificationToken: string,
    fields?: string,
    welcomeEmailTemplate?: string
  ) {
    if (isNullOrWhiteSpace(verificationToken)) {
      return Promise.reject(getValidationMessage('verificationToken'));
    }
    var queryParameters: any = {};

    queryParameters.apikey = this.config.apiKey;
    queryParameters.verificationToken = verificationToken;
    if (!isNullOrWhiteSpace(fields)) {
      queryParameters.fields = fields;
    }
    if (!isNullOrWhiteSpace(welcomeEmailTemplate)) {
      queryParameters.welcomeEmailTemplate = welcomeEmailTemplate;
    }

    var resourcePath = 'identity/v2/auth/login/passwordlesslogin/email/verify';

    return request(this.config, 'GET', resourcePath, queryParameters, null);
  }

  /**
   * This API is used to verify the otp sent to the email when doing a passwordless login.
   * @param passwordLessLoginByEmailAndOtpModel payload
   * @param fields Fields
   * @return Response containing User Profile Data and access token
   *9.23
   */
  passwordlessLoginVerificationByEmailAndOTP (
    passwordLessLoginByEmailAndOtpModel: object,
    fields?: string
  ) {
    if (checkJson(passwordLessLoginByEmailAndOtpModel)) {
      return Promise.reject(
        getValidationMessage('passwordLessLoginByEmailAndOtpModel')
      );
    }
    var queryParameters: any = {};

    queryParameters.apiKey = this.config.apiKey;
    if (!isNullOrWhiteSpace(fields)) {
      queryParameters.fields = fields;
    }

    var resourcePath =
      'identity/v2/auth/login/passwordlesslogin/email/verifyotp';

    return request(
      this.config,
      'POST',
      resourcePath,
      queryParameters,
      passwordLessLoginByEmailAndOtpModel
    );
  }

  /**
   * This API is used to verify the otp sent to the email when doing a passwordless login.
   * @param passwordLessLoginByUserNameAndOtpModel payload
   * @param fields Fields
   * @return Response containing User Profile Data and access token
   *9.24
   */
  passwordlessLoginVerificationByUserNameAndOTP (
    passwordLessLoginByUserNameAndOtpModel: object,
    fields: string
  ) {
    if (checkJson(passwordLessLoginByUserNameAndOtpModel)) {
      return Promise.reject(
        getValidationMessage('passwordLessLoginByUserNameAndOtpModel')
      );
    }
    var queryParameters: any = {};

    queryParameters.apiKey = this.config.apiKey;
    if (!isNullOrWhiteSpace(fields)) {
      queryParameters.fields = fields;
    }

    var resourcePath =
      'identity/v2/auth/login/passwordlesslogin/username/verifyotp';

    return request(
      this.config,
      'POST',
      resourcePath,
      queryParameters,
      passwordLessLoginByUserNameAndOtpModel
    );
  }
}

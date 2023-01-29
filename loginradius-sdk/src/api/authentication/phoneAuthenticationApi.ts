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

export default class PhoneAuthenticationApi {
  // eslint-disable-next-line no-useless-constructor, no-unused-vars, no-empty-function
  constructor (private config: LoginRadiusConfig) {}

  /**
   * This API retrieves a copy of the user data based on the Phone
   * @param phoneAuthenticationModel Model Class containing Definition of payload for PhoneAuthenticationModel API
   * @param fields The fields parameter filters the API response so that the response only includes a specific set of fields
   * @param loginUrl Url where the user is logging from
   * @param smsTemplate SMS Template name
   * @return Response containing User Profile Data and access token
   *9.2.3
   */
  loginByPhone (phoneAuthenticationModel: object, fields?: string, loginUrl?: string, smsTemplate?: string) {
    if (checkJson(phoneAuthenticationModel)) {
      return Promise.reject(getValidationMessage('phoneAuthenticationModel'));
    }
    var queryParameters: any = {};

    queryParameters.apiKey = this.config.apiKey;
    if (!isNullOrWhiteSpace(fields)) {
      queryParameters.fields = fields;
    }
    if (!isNullOrWhiteSpace(loginUrl)) {
      queryParameters.loginUrl = loginUrl;
    }
    if (!isNullOrWhiteSpace(smsTemplate)) {
      queryParameters.smsTemplate = smsTemplate;
    }

    var resourcePath = 'identity/v2/auth/login';

    return request(
      this.config,
      'POST',
      resourcePath,
      queryParameters,
      phoneAuthenticationModel
    );
  }

  /**
   * This API is used to send the OTP to reset the account password.
   * @param phone New Phone Number
   * @param smsTemplate SMS Template name
   * @return Response Containing Validation Data and SMS Data
   *10.4
   */
  forgotPasswordByPhoneOTP (phone: string, smsTemplate?: string) {
    if (isNullOrWhiteSpace(phone)) {
      return Promise.reject(getValidationMessage('phone'));
    }
    var queryParameters: any = {};

    queryParameters.apiKey = this.config.apiKey;
    if (!isNullOrWhiteSpace(smsTemplate)) {
      queryParameters.smsTemplate = smsTemplate;
    }

    var bodyParameters: any = {};
    bodyParameters.phone = phone;

    var resourcePath = 'identity/v2/auth/password/otp';

    return request(
      this.config,
      'POST',
      resourcePath,
      queryParameters,
      bodyParameters
    );
  }

  /**
   * This API is used to reset the password
   * @param resetPasswordByOTPModel Model Class containing Definition of payload for ResetPasswordByOTP API
   * @return Response containing Definition of Complete Validation data
   *10.5
   */
  resetPasswordByPhoneOTP (resetPasswordByOTPModel: object) {
    if (checkJson(resetPasswordByOTPModel)) {
      return Promise.reject(getValidationMessage('resetPasswordByOTPModel'));
    }
    var queryParameters: any = {};

    queryParameters.apiKey = this.config.apiKey;

    var resourcePath = 'identity/v2/auth/password/otp';

    return request(
      this.config,
      'PUT',
      resourcePath,
      queryParameters,
      resetPasswordByOTPModel
    );
  }

  /**
   * This API is used to validate the verification code sent to verify a user's phone number
   * @param otp The Verification Code
   * @param phone New Phone Number
   * @param fields The fields parameter filters the API response so that the response only includes a specific set of fields
   * @param smsTemplate SMS Template name
   * @return Response containing User Profile Data and access token
   *11.1.1
   */
  phoneVerificationByOTP (otp: string, phone: string, fields?: string, smsTemplate?: string) {
    if (isNullOrWhiteSpace(otp)) {
      return Promise.reject(getValidationMessage('otp'));
    }
    if (isNullOrWhiteSpace(phone)) {
      return Promise.reject(getValidationMessage('phone'));
    }
    var queryParameters: any = {};

    queryParameters.apiKey = this.config.apiKey;
    queryParameters.otp = otp;
    if (!isNullOrWhiteSpace(fields)) {
      queryParameters.fields = fields;
    }
    if (!isNullOrWhiteSpace(smsTemplate)) {
      queryParameters.smsTemplate = smsTemplate;
    }

    var bodyParameters: any = {};
    bodyParameters.phone = phone;

    var resourcePath = 'identity/v2/auth/phone/otp';

    return request(
      this.config,
      'PUT',
      resourcePath,
      queryParameters,
      bodyParameters
    );
  }

  /**
   * This API is used to consume the verification code sent to verify a user's phone number. Use this call for front-end purposes in cases where the user is already logged in by passing the user's access token.
   * @param accessToken Uniquely generated identifier key by LoginRadius that is activated after successful authentication.
   * @param otp The Verification Code
   * @param smsTemplate SMS Template name
   * @return Response containing Definition of Complete Validation data
   *11.1.2
   */
  phoneVerificationOTPByAccessToken (accessToken: string, otp: string, smsTemplate?: string) {
    if (isNullOrWhiteSpace(accessToken)) {
      return Promise.reject(getValidationMessage('accessToken'));
    }
    if (isNullOrWhiteSpace(otp)) {
      return Promise.reject(getValidationMessage('otp'));
    }
    var queryParameters: any = {};

    queryParameters.access_token = accessToken;
    queryParameters.apiKey = this.config.apiKey;
    queryParameters.otp = otp;
    if (!isNullOrWhiteSpace(smsTemplate)) {
      queryParameters.smsTemplate = smsTemplate;
    }

    var resourcePath = 'identity/v2/auth/phone/otp';

    return request(this.config, 'PUT', resourcePath, queryParameters, null);
  }

  /**
   * This API is used to resend a verification OTP to verify a user's Phone Number. The user will receive a verification code that they will need to input
   * @param phone New Phone Number
   * @param smsTemplate SMS Template name
   * @return Response Containing Validation Data and SMS Data
   *11.2.1
   */
  phoneResendVerificationOTP (phone: string, smsTemplate?: string) {
    if (isNullOrWhiteSpace(phone)) {
      return Promise.reject(getValidationMessage('phone'));
    }
    var queryParameters: any = {};

    queryParameters.apiKey = this.config.apiKey;
    if (!isNullOrWhiteSpace(smsTemplate)) {
      queryParameters.smsTemplate = smsTemplate;
    }

    var bodyParameters: any = {};
    bodyParameters.phone = phone;

    var resourcePath = 'identity/v2/auth/phone/otp';

    return request(
      this.config,
      'POST',
      resourcePath,
      queryParameters,
      bodyParameters
    );
  }

  /**
   * This API is used to resend a verification OTP to verify a user's Phone Number in cases in which an active token already exists
   * @param accessToken Uniquely generated identifier key by LoginRadius that is activated after successful authentication.
   * @param phone New Phone Number
   * @param smsTemplate SMS Template name
   * @return Response Containing Validation Data and SMS Data
   *11.2.2
   */
  phoneResendVerificationOTPByToken (accessToken: string, phone: string, smsTemplate?: string) {
    if (isNullOrWhiteSpace(accessToken)) {
      return Promise.reject(getValidationMessage('accessToken'));
    }
    if (isNullOrWhiteSpace(phone)) {
      return Promise.reject(getValidationMessage('phone'));
    }
    var queryParameters: any = {};

    queryParameters.access_token = accessToken;
    queryParameters.apiKey = this.config.apiKey;
    if (!isNullOrWhiteSpace(smsTemplate)) {
      queryParameters.smsTemplate = smsTemplate;
    }

    var bodyParameters: any = {};
    bodyParameters.phone = phone;

    var resourcePath = 'identity/v2/auth/phone/otp';

    return request(
      this.config,
      'POST',
      resourcePath,
      queryParameters,
      bodyParameters
    );
  }

  /**
   * This API is used to update the login Phone Number of users
   * @param accessToken Uniquely generated identifier key by LoginRadius that is activated after successful authentication.
   * @param phone New Phone Number
   * @param smsTemplate SMS Template name
   * @return Response Containing Validation Data and SMS Data
   *11.5
   */
  updatePhoneNumber (accessToken: string, phone: string, smsTemplate?: string) {
    if (isNullOrWhiteSpace(accessToken)) {
      return Promise.reject(getValidationMessage('accessToken'));
    }
    if (isNullOrWhiteSpace(phone)) {
      return Promise.reject(getValidationMessage('phone'));
    }
    var queryParameters: any = {};

    queryParameters.access_token = accessToken;
    queryParameters.apiKey = this.config.apiKey;
    if (!isNullOrWhiteSpace(smsTemplate)) {
      queryParameters.smsTemplate = smsTemplate;
    }

    var bodyParameters: any = {};
    bodyParameters.phone = phone;

    var resourcePath = 'identity/v2/auth/phone';

    return request(
      this.config,
      'PUT',
      resourcePath,
      queryParameters,
      bodyParameters
    );
  }

  /**
   * This API is used to check the Phone Number exists or not on your site.
   * @param phone The Registered Phone Number
   * @return Response containing Definition Complete ExistResponse data
   *11.6
   */
  checkPhoneNumberAvailability (phone: string) {
    if (isNullOrWhiteSpace(phone)) {
      return Promise.reject(getValidationMessage('phone'));
    }
    var queryParameters: any = {};

    queryParameters.apiKey = this.config.apiKey;
    queryParameters.phone = phone;

    var resourcePath = 'identity/v2/auth/phone';

    return request(this.config, 'GET', resourcePath, queryParameters, null);
  }

  /**
   * This API is used to delete the Phone ID on a user's account via the access token
   * @param accessToken Uniquely generated identifier key by LoginRadius that is activated after successful authentication.
   * @return Response containing Definition of Delete Request
   *11.7
   */
  removePhoneIDByAccessToken (accessToken: string) {
    if (isNullOrWhiteSpace(accessToken)) {
      return Promise.reject(getValidationMessage('accessToken'));
    }
    var queryParameters: any = {};

    queryParameters.access_token = accessToken;
    queryParameters.apiKey = this.config.apiKey;

    var resourcePath = 'identity/v2/auth/phone';

    return request(this.config, 'DELETE', resourcePath, queryParameters, null);
  }

  /**
   * This API registers the new users into your Cloud Storage and triggers the phone verification process.
   * @param authUserRegistrationModel Model Class containing Definition of payload for Auth User Registration API
   * @param sott LoginRadius Secured One Time Token
   * @param fields The fields parameter filters the API response so that the response only includes a specific set of fields
   * @param options PreventVerificationEmail (Specifying this value prevents the verification email from being sent. Only applicable if you have the optional email verification flow)
   * @param smsTemplate SMS Template name
   * @param verificationUrl Email verification url
   * @param welcomeEmailTemplate Name of the welcome email template
   * @return Response containing Definition of Complete Validation, UserProfile data and Access Token
   * @param emailTemplate Email Template Name
   *17.1.2
   */
  userRegistrationByPhone (
    authUserRegistrationModel: object,
    sott: string,
    fields?: string,
    options?: string,
    smsTemplate?: string,
    verificationUrl?: string,
    welcomeEmailTemplate?: string,
    emailTemplate?: string
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
    if (!isNullOrWhiteSpace(emailTemplate)) {
      queryParameters.emailTemplate = emailTemplate;
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
}

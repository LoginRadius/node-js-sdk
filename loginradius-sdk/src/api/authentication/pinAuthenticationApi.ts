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

export default class PinAuthenticationApi {
  // eslint-disable-next-line no-useless-constructor, no-unused-vars, no-empty-function
  constructor (private config: LoginRadiusConfig) {}

  /**
   * This API is used to login a user by pin and session token.
   * @param loginByPINModel Model Class containing Definition of payload for LoginByPin API
   * @param sessionToken Session Token of user
   * @return Response containing User Profile Data and access token
   *9.22
   */
  pinLogin (loginByPINModel: object, sessionToken: string) {
    if (checkJson(loginByPINModel)) {
      return Promise.reject(getValidationMessage('loginByPINModel'));
    }
    if (isNullOrWhiteSpace(sessionToken)) {
      return Promise.reject(getValidationMessage('sessionToken'));
    }
    var queryParameters: any = {};

    queryParameters.apiKey = this.config.apiKey;
    queryParameters.session_token = sessionToken;

    var resourcePath = 'identity/v2/auth/login/pin';

    return request(
      this.config,
      'POST',
      resourcePath,
      queryParameters,
      loginByPINModel
    );
  }

  /**
   * This API sends the reset pin email to specified email address.
   * @param forgotPINLinkByEmailModel Model Class containing Definition for Forgot Pin Link By Email API
   * @param emailTemplate Email template name
   * @param resetPINUrl Reset PIN Url
   * @return Response containing Definition of Complete Validation data
   *42.1
   */
  sendForgotPINEmailByEmail (
    forgotPINLinkByEmailModel: object,
    emailTemplate?: string,
    resetPINUrl?: string
  ) {
    if (checkJson(forgotPINLinkByEmailModel)) {
      return Promise.reject(getValidationMessage('forgotPINLinkByEmailModel'));
    }
    var queryParameters: any = {};

    queryParameters.apiKey = this.config.apiKey;
    if (!isNullOrWhiteSpace(emailTemplate)) {
      queryParameters.emailTemplate = emailTemplate;
    }
    if (!isNullOrWhiteSpace(resetPINUrl)) {
      queryParameters.resetPINUrl = resetPINUrl;
    }

    var resourcePath = 'identity/v2/auth/pin/forgot/email';

    return request(
      this.config,
      'POST',
      resourcePath,
      queryParameters,
      forgotPINLinkByEmailModel
    );
  }

  /**
   * This API sends the reset pin email using username.
   * @param forgotPINLinkByUserNameModel Model Class containing Definition for Forgot Pin Link By UserName API
   * @param emailTemplate Email template name
   * @param resetPINUrl Reset PIN Url
   * @return Response containing Definition of Complete Validation data
   *42.2
   */
  sendForgotPINEmailByUsername (
    forgotPINLinkByUserNameModel: object,
    emailTemplate?: string,
    resetPINUrl?: string
  ) {
    if (checkJson(forgotPINLinkByUserNameModel)) {
      return Promise.reject(
        getValidationMessage('forgotPINLinkByUserNameModel')
      );
    }
    var queryParameters: any = {};

    queryParameters.apiKey = this.config.apiKey;
    if (!isNullOrWhiteSpace(emailTemplate)) {
      queryParameters.emailTemplate = emailTemplate;
    }
    if (!isNullOrWhiteSpace(resetPINUrl)) {
      queryParameters.resetPINUrl = resetPINUrl;
    }

    var resourcePath = 'identity/v2/auth/pin/forgot/username';

    return request(
      this.config,
      'POST',
      resourcePath,
      queryParameters,
      forgotPINLinkByUserNameModel
    );
  }

  /**
   * This API is used to reset pin using reset token.
   * @param resetPINByResetToken Model Class containing Definition of payload for Reset Pin By Reset Token API
   * @return Response containing Definition of Complete Validation data
   *42.3
   */
  resetPINByResetToken (resetPINByResetToken: object) {
    if (checkJson(resetPINByResetToken)) {
      return Promise.reject(getValidationMessage('resetPINByResetToken'));
    }
    var queryParameters: any = {};

    queryParameters.apiKey = this.config.apiKey;

    var resourcePath = 'identity/v2/auth/pin/reset/token';

    return request(
      this.config,
      'PUT',
      resourcePath,
      queryParameters,
      resetPINByResetToken
    );
  }

  /**
   * This API is used to reset pin using security question answer and email.
   * @param resetPINBySecurityQuestionAnswerAndEmailModel Model Class containing Definition of payload for Reset Pin By Security Question and Email API
   * @return Response containing Definition of Complete Validation data
   *42.4
   */
  resetPINByEmailAndSecurityAnswer (
    resetPINBySecurityQuestionAnswerAndEmailModel: object
  ) {
    if (checkJson(resetPINBySecurityQuestionAnswerAndEmailModel)) {
      return Promise.reject(
        getValidationMessage('resetPINBySecurityQuestionAnswerAndEmailModel')
      );
    }
    var queryParameters: any = {};

    queryParameters.apiKey = this.config.apiKey;

    var resourcePath = 'identity/v2/auth/pin/reset/securityanswer/email';

    return request(
      this.config,
      'PUT',
      resourcePath,
      queryParameters,
      resetPINBySecurityQuestionAnswerAndEmailModel
    );
  }

  /**
   * This API is used to reset pin using security question answer and username.
   * @param resetPINBySecurityQuestionAnswerAndUsernameModel Model Class containing Definition of payload for Reset Pin By Security Question and UserName API
   * @return Response containing Definition of Complete Validation data
   *42.5
   */
  resetPINByUsernameAndSecurityAnswer (
    resetPINBySecurityQuestionAnswerAndUsernameModel: object
  ) {
    if (checkJson(resetPINBySecurityQuestionAnswerAndUsernameModel)) {
      return Promise.reject(
        getValidationMessage('resetPINBySecurityQuestionAnswerAndUsernameModel')
      );
    }
    var queryParameters: any = {};

    queryParameters.apiKey = this.config.apiKey;

    var resourcePath = 'identity/v2/auth/pin/reset/securityanswer/username';

    return request(
      this.config,
      'PUT',
      resourcePath,
      queryParameters,
      resetPINBySecurityQuestionAnswerAndUsernameModel
    );
  }

  /**
   * This API is used to reset pin using security question answer and phone.
   * @param resetPINBySecurityQuestionAnswerAndPhoneModel Model Class containing Definition of payload for Reset Pin By Security Question and Phone API
   * @return Response containing Definition of Complete Validation data
   *42.6
   */
  resetPINByPhoneAndSecurityAnswer (
    resetPINBySecurityQuestionAnswerAndPhoneModel: object
  ) {
    if (checkJson(resetPINBySecurityQuestionAnswerAndPhoneModel)) {
      return Promise.reject(
        getValidationMessage('resetPINBySecurityQuestionAnswerAndPhoneModel')
      );
    }
    var queryParameters: any = {};

    queryParameters.apiKey = this.config.apiKey;

    var resourcePath = 'identity/v2/auth/pin/reset/securityanswer/phone';

    return request(
      this.config,
      'PUT',
      resourcePath,
      queryParameters,
      resetPINBySecurityQuestionAnswerAndPhoneModel
    );
  }

  /**
   * This API sends the OTP to specified phone number
   * @param forgotPINOtpByPhoneModel Model Class containing Definition for Forgot Pin Otp By Phone API
   * @param smsTemplate
   * @return Response Containing Validation Data and SMS Data
   *42.7
   */
  sendForgotPINSMSByPhone (forgotPINOtpByPhoneModel: object, smsTemplate?: string) {
    if (checkJson(forgotPINOtpByPhoneModel)) {
      return Promise.reject(getValidationMessage('forgotPINOtpByPhoneModel'));
    }
    var queryParameters: any = {};

    queryParameters.apiKey = this.config.apiKey;
    if (!isNullOrWhiteSpace(smsTemplate)) {
      queryParameters.smsTemplate = smsTemplate;
    }

    var resourcePath = 'identity/v2/auth/pin/forgot/otp';

    return request(
      this.config,
      'POST',
      resourcePath,
      queryParameters,
      forgotPINOtpByPhoneModel
    );
  }

  /**
   * This API is used to change a user's PIN using access token.
   * @param accessToken Uniquely generated identifier key by LoginRadius that is activated after successful authentication.
   * @param changePINModel Model Class containing Definition for change PIN Property
   * @return Response containing Definition of Complete Validation data
   *42.8
   */
  changePINByAccessToken (accessToken: string, changePINModel: object) {
    if (isNullOrWhiteSpace(accessToken)) {
      return Promise.reject(getValidationMessage('accessToken'));
    }
    if (checkJson(changePINModel)) {
      return Promise.reject(getValidationMessage('changePINModel'));
    }
    var queryParameters: any = {};

    queryParameters.access_token = accessToken;
    queryParameters.apiKey = this.config.apiKey;

    var resourcePath = 'identity/v2/auth/pin/change';

    return request(
      this.config,
      'PUT',
      resourcePath,
      queryParameters,
      changePINModel
    );
  }

  /**
   * This API is used to reset pin using phoneId and OTP.
   * @param resetPINByPhoneAndOTPModel Model Class containing Definition of payload for Reset Pin By Phone and Otp API
   * @return Response containing Definition of Complete Validation data
   *42.9
   */
  resetPINByPhoneAndOtp (resetPINByPhoneAndOTPModel: object) {
    if (checkJson(resetPINByPhoneAndOTPModel)) {
      return Promise.reject(getValidationMessage('resetPINByPhoneAndOTPModel'));
    }
    var queryParameters: any = {};

    queryParameters.apiKey = this.config.apiKey;

    var resourcePath = 'identity/v2/auth/pin/reset/otp/phone';

    return request(
      this.config,
      'PUT',
      resourcePath,
      queryParameters,
      resetPINByPhoneAndOTPModel
    );
  }

  /**
   * This API is used to reset pin using email and OTP.
   * @param resetPINByEmailAndOtpModel Model Class containing Definition of payload for Reset Pin By Email and Otp API
   * @return Response containing Definition of Complete Validation data
   *42.10
   */
  resetPINByEmailAndOtp (resetPINByEmailAndOtpModel: object) {
    if (checkJson(resetPINByEmailAndOtpModel)) {
      return Promise.reject(getValidationMessage('resetPINByEmailAndOtpModel'));
    }
    var queryParameters: any = {};

    queryParameters.apiKey = this.config.apiKey;

    var resourcePath = 'identity/v2/auth/pin/reset/otp/email';

    return request(
      this.config,
      'PUT',
      resourcePath,
      queryParameters,
      resetPINByEmailAndOtpModel
    );
  }

  /**
   * This API is used to reset pin using username and OTP.
   * @param resetPINByUsernameAndOtpModel Model Class containing Definition of payload for Reset Pin By Username and Otp API
   * @return Response containing Definition of Complete Validation data
   *42.11
   */
  resetPINByUsernameAndOtp (resetPINByUsernameAndOtpModel: object) {
    if (checkJson(resetPINByUsernameAndOtpModel)) {
      return Promise.reject(
        getValidationMessage('resetPINByUsernameAndOtpModel')
      );
    }
    var queryParameters: any = {};

    queryParameters.apiKey = this.config.apiKey;

    var resourcePath = 'identity/v2/auth/pin/reset/otp/username';

    return request(
      this.config,
      'PUT',
      resourcePath,
      queryParameters,
      resetPINByUsernameAndOtpModel
    );
  }

  /**
   * This API is used to change a user's PIN using Pin Auth token.
   * @param pINRequiredModel Model Class containing Definition for PIN
   * @param pinAuthToken Pin Auth Token
   * @return Response containing User Profile Data and access token
   *42.12
   */
  setPINByPinAuthToken (pINRequiredModel: object, pinAuthToken: string) {
    if (checkJson(pINRequiredModel)) {
      return Promise.reject(getValidationMessage('pINRequiredModel'));
    }
    if (isNullOrWhiteSpace(pinAuthToken)) {
      return Promise.reject(getValidationMessage('pinAuthToken'));
    }
    var queryParameters: any = {};

    queryParameters.apiKey = this.config.apiKey;
    queryParameters.pinAuthToken = pinAuthToken;

    var resourcePath = 'identity/v2/auth/pin/set/pinauthtoken';

    return request(
      this.config,
      'POST',
      resourcePath,
      queryParameters,
      pINRequiredModel
    );
  }

  /**
   * This API is used to invalidate pin session token.
   * @param sessionToken Session Token of user
   * @return Response containing Definition of Complete Validation data
   *44.1
   */
  inValidatePinSessionToken (sessionToken: string) {
    if (isNullOrWhiteSpace(sessionToken)) {
      return Promise.reject(getValidationMessage('sessionToken'));
    }
    var queryParameters: any = {};

    queryParameters.apiKey = this.config.apiKey;
    queryParameters.session_token = sessionToken;

    var resourcePath = 'identity/v2/auth/session_token/invalidate';

    return request(this.config, 'GET', resourcePath, queryParameters, null);
  }
}

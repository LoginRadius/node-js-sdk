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

export default class RiskBasedAuthenticationApi {
  // eslint-disable-next-line no-useless-constructor, no-unused-vars, no-empty-function
  constructor (private config: LoginRadiusConfig) {}

  /**
   * This API retrieves a copy of the user data based on the Email
   * @param emailAuthenticationModel Model Class containing Definition of payload for Email Authentication API
   * @param emailTemplate Email template name
   * @param fields The fields parameter filters the API response so that the response only includes a specific set of fields
   * @param loginUrl Url where the user is logging from
   * @param passwordDelegation Password Delegation Allows you to use a third-party service to store your passwords rather than LoginRadius Cloud storage.
   * @param passwordDelegationApp RiskBased Authentication Password Delegation App
   * @param rbaBrowserEmailTemplate Risk Based Authentication Browser EmailTemplate
   * @param rbaBrowserSmsTemplate Risk Based Authentication Browser Sms Template
   * @param rbaCityEmailTemplate Risk Based Authentication City Email Template
   * @param rbaCitySmsTemplate Risk Based Authentication City SmsTemplate
   * @param rbaCountryEmailTemplate Risk Based Authentication Country EmailTemplate
   * @param rbaCountrySmsTemplate Risk Based Authentication Country SmsTemplate
   * @param rbaIpEmailTemplate Risk Based Authentication Ip EmailTemplate
   * @param rbaIpSmsTemplate Risk Based Authentication Ip SmsTemplate
   * @param rbaOneclickEmailTemplate Risk Based Authentication Oneclick EmailTemplate
   * @param rbaOTPSmsTemplate Risk Based Authentication Oneclick EmailTemplate
   * @param smsTemplate SMS Template name
   * @param verificationUrl Email verification url
   * @return Response containing User Profile Data and access token
   *9.2.4
   */
  rbaLoginByEmail (
    emailAuthenticationModel: object,
    emailTemplate?: string,
    fields?: string,
    loginUrl?: string,
    passwordDelegation?: string,
    passwordDelegationApp?: string,
    rbaBrowserEmailTemplate?: string,
    rbaBrowserSmsTemplate?: string,
    rbaCityEmailTemplate?: string,
    rbaCitySmsTemplate?: string,
    rbaCountryEmailTemplate?: string,
    rbaCountrySmsTemplate?: string,
    rbaIpEmailTemplate?: string,
    rbaIpSmsTemplate?: string,
    rbaOneclickEmailTemplate?: string,
    rbaOTPSmsTemplate?: string,
    smsTemplate?: string,
    verificationUrl?: string
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
    if (passwordDelegation !== null) {
      queryParameters.passwordDelegation = passwordDelegation;
    }
    if (!isNullOrWhiteSpace(passwordDelegationApp)) {
      queryParameters.passwordDelegationApp = passwordDelegationApp;
    }
    if (!isNullOrWhiteSpace(rbaBrowserEmailTemplate)) {
      queryParameters.rbaBrowserEmailTemplate = rbaBrowserEmailTemplate;
    }
    if (!isNullOrWhiteSpace(rbaBrowserSmsTemplate)) {
      queryParameters.rbaBrowserSmsTemplate = rbaBrowserSmsTemplate;
    }
    if (!isNullOrWhiteSpace(rbaCityEmailTemplate)) {
      queryParameters.rbaCityEmailTemplate = rbaCityEmailTemplate;
    }
    if (!isNullOrWhiteSpace(rbaCitySmsTemplate)) {
      queryParameters.rbaCitySmsTemplate = rbaCitySmsTemplate;
    }
    if (!isNullOrWhiteSpace(rbaCountryEmailTemplate)) {
      queryParameters.rbaCountryEmailTemplate = rbaCountryEmailTemplate;
    }
    if (!isNullOrWhiteSpace(rbaCountrySmsTemplate)) {
      queryParameters.rbaCountrySmsTemplate = rbaCountrySmsTemplate;
    }
    if (!isNullOrWhiteSpace(rbaIpEmailTemplate)) {
      queryParameters.rbaIpEmailTemplate = rbaIpEmailTemplate;
    }
    if (!isNullOrWhiteSpace(rbaIpSmsTemplate)) {
      queryParameters.rbaIpSmsTemplate = rbaIpSmsTemplate;
    }
    if (!isNullOrWhiteSpace(rbaOneclickEmailTemplate)) {
      queryParameters.rbaOneclickEmailTemplate = rbaOneclickEmailTemplate;
    }
    if (!isNullOrWhiteSpace(rbaOTPSmsTemplate)) {
      queryParameters.rbaOTPSmsTemplate = rbaOTPSmsTemplate;
    }
    if (!isNullOrWhiteSpace(smsTemplate)) {
      queryParameters.smsTemplate = smsTemplate;
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
   * @param userNameAuthenticationModel Model Class containing Definition of payload for Username Authentication API
   * @param emailTemplate Email template name
   * @param fields The fields parameter filters the API response so that the response only includes a specific set of fields
   * @param loginUrl Url where the user is logging from
   * @param passwordDelegation Password Delegation Allows you to use a third-party service to store your passwords rather than LoginRadius Cloud storage.
   * @param passwordDelegationApp RiskBased Authentication Password Delegation App
   * @param rbaBrowserEmailTemplate Risk Based Authentication Browser EmailTemplate
   * @param rbaBrowserSmsTemplate Risk Based Authentication Browser Sms Template
   * @param rbaCityEmailTemplate Risk Based Authentication City Email Template
   * @param rbaCitySmsTemplate Risk Based Authentication City SmsTemplate
   * @param rbaCountryEmailTemplate Risk Based Authentication Country EmailTemplate
   * @param rbaCountrySmsTemplate Risk Based Authentication Country SmsTemplate
   * @param rbaIpEmailTemplate Risk Based Authentication Ip EmailTemplate
   * @param rbaIpSmsTemplate Risk Based Authentication Ip SmsTemplate
   * @param rbaOneclickEmailTemplate Risk Based Authentication Oneclick EmailTemplate
   * @param rbaOTPSmsTemplate Risk Based Authentication OTPSmsTemplate
   * @param smsTemplate SMS Template name
   * @param verificationUrl Email verification url
   * @return Response containing User Profile Data and access token
   *9.2.5
   */
  rbaLoginByUserName (
    userNameAuthenticationModel: object,
    emailTemplate?: string,
    fields?: string,
    loginUrl?: string,
    passwordDelegation?: string,
    passwordDelegationApp?: string,
    rbaBrowserEmailTemplate?: string,
    rbaBrowserSmsTemplate?: string,
    rbaCityEmailTemplate?: string,
    rbaCitySmsTemplate?: string,
    rbaCountryEmailTemplate?: string,
    rbaCountrySmsTemplate?: string,
    rbaIpEmailTemplate?: string,
    rbaIpSmsTemplate?: string,
    rbaOneclickEmailTemplate?: string,
    rbaOTPSmsTemplate?: string,
    smsTemplate?: string,
    verificationUrl?: string
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
    if (passwordDelegation !== null) {
      queryParameters.passwordDelegation = passwordDelegation;
    }
    if (!isNullOrWhiteSpace(passwordDelegationApp)) {
      queryParameters.passwordDelegationApp = passwordDelegationApp;
    }
    if (!isNullOrWhiteSpace(rbaBrowserEmailTemplate)) {
      queryParameters.rbaBrowserEmailTemplate = rbaBrowserEmailTemplate;
    }
    if (!isNullOrWhiteSpace(rbaBrowserSmsTemplate)) {
      queryParameters.rbaBrowserSmsTemplate = rbaBrowserSmsTemplate;
    }
    if (!isNullOrWhiteSpace(rbaCityEmailTemplate)) {
      queryParameters.rbaCityEmailTemplate = rbaCityEmailTemplate;
    }
    if (!isNullOrWhiteSpace(rbaCitySmsTemplate)) {
      queryParameters.rbaCitySmsTemplate = rbaCitySmsTemplate;
    }
    if (!isNullOrWhiteSpace(rbaCountryEmailTemplate)) {
      queryParameters.rbaCountryEmailTemplate = rbaCountryEmailTemplate;
    }
    if (!isNullOrWhiteSpace(rbaCountrySmsTemplate)) {
      queryParameters.rbaCountrySmsTemplate = rbaCountrySmsTemplate;
    }
    if (!isNullOrWhiteSpace(rbaIpEmailTemplate)) {
      queryParameters.rbaIpEmailTemplate = rbaIpEmailTemplate;
    }
    if (!isNullOrWhiteSpace(rbaIpSmsTemplate)) {
      queryParameters.rbaIpSmsTemplate = rbaIpSmsTemplate;
    }
    if (!isNullOrWhiteSpace(rbaOneclickEmailTemplate)) {
      queryParameters.rbaOneclickEmailTemplate = rbaOneclickEmailTemplate;
    }
    if (!isNullOrWhiteSpace(rbaOTPSmsTemplate)) {
      queryParameters.rbaOTPSmsTemplate = rbaOTPSmsTemplate;
    }
    if (!isNullOrWhiteSpace(smsTemplate)) {
      queryParameters.smsTemplate = smsTemplate;
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
   * This API retrieves a copy of the user data based on the Phone
   * @param phoneAuthenticationModel Model Class containing Definition of payload for PhoneAuthenticationModel API
   * @param emailTemplate Email template name
   * @param fields The fields parameter filters the API response so that the response only includes a specific set of fields
   * @param loginUrl Url where the user is logging from
   * @param passwordDelegation Password Delegation Allows you to use a third-party service to store your passwords rather than LoginRadius Cloud storage.
   * @param passwordDelegationApp RiskBased Authentication Password Delegation App
   * @param rbaBrowserEmailTemplate Risk Based Authentication Browser EmailTemplate
   * @param rbaBrowserSmsTemplate Risk Based Authentication Browser Sms Template
   * @param rbaCityEmailTemplate Risk Based Authentication City Email Template
   * @param rbaCitySmsTemplate Risk Based Authentication City SmsTemplate
   * @param rbaCountryEmailTemplate Risk Based Authentication Country EmailTemplate
   * @param rbaCountrySmsTemplate Risk Based Authentication Country SmsTemplate
   * @param rbaIpEmailTemplate Risk Based Authentication Ip EmailTemplate
   * @param rbaIpSmsTemplate Risk Based Authentication Ip SmsTemplate
   * @param rbaOneclickEmailTemplate Risk Based Authentication Oneclick EmailTemplate
   * @param rbaOTPSmsTemplate Risk Based Authentication OTPSmsTemplate
   * @param smsTemplate SMS Template name
   * @param verificationUrl Email verification url
   * @return Response containing User Profile Data and access token
   *9.2.6
   */
  rbaLoginByPhone (
    phoneAuthenticationModel: object,
    emailTemplate?: string,
    fields?: string,
    loginUrl?: string,
    passwordDelegation?: string,
    passwordDelegationApp?: string,
    rbaBrowserEmailTemplate?: string,
    rbaBrowserSmsTemplate?: string,
    rbaCityEmailTemplate?: string,
    rbaCitySmsTemplate?: string,
    rbaCountryEmailTemplate?: string,
    rbaCountrySmsTemplate?: string,
    rbaIpEmailTemplate?: string,
    rbaIpSmsTemplate?: string,
    rbaOneclickEmailTemplate?: string,
    rbaOTPSmsTemplate?: string,
    smsTemplate?: string,
    verificationUrl?: string
  ) {
    if (checkJson(phoneAuthenticationModel)) {
      return Promise.reject(getValidationMessage('phoneAuthenticationModel'));
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
    if (passwordDelegation !== null) {
      queryParameters.passwordDelegation = passwordDelegation;
    }
    if (!isNullOrWhiteSpace(passwordDelegationApp)) {
      queryParameters.passwordDelegationApp = passwordDelegationApp;
    }
    if (!isNullOrWhiteSpace(rbaBrowserEmailTemplate)) {
      queryParameters.rbaBrowserEmailTemplate = rbaBrowserEmailTemplate;
    }
    if (!isNullOrWhiteSpace(rbaBrowserSmsTemplate)) {
      queryParameters.rbaBrowserSmsTemplate = rbaBrowserSmsTemplate;
    }
    if (!isNullOrWhiteSpace(rbaCityEmailTemplate)) {
      queryParameters.rbaCityEmailTemplate = rbaCityEmailTemplate;
    }
    if (!isNullOrWhiteSpace(rbaCitySmsTemplate)) {
      queryParameters.rbaCitySmsTemplate = rbaCitySmsTemplate;
    }
    if (!isNullOrWhiteSpace(rbaCountryEmailTemplate)) {
      queryParameters.rbaCountryEmailTemplate = rbaCountryEmailTemplate;
    }
    if (!isNullOrWhiteSpace(rbaCountrySmsTemplate)) {
      queryParameters.rbaCountrySmsTemplate = rbaCountrySmsTemplate;
    }
    if (!isNullOrWhiteSpace(rbaIpEmailTemplate)) {
      queryParameters.rbaIpEmailTemplate = rbaIpEmailTemplate;
    }
    if (!isNullOrWhiteSpace(rbaIpSmsTemplate)) {
      queryParameters.rbaIpSmsTemplate = rbaIpSmsTemplate;
    }
    if (!isNullOrWhiteSpace(rbaOneclickEmailTemplate)) {
      queryParameters.rbaOneclickEmailTemplate = rbaOneclickEmailTemplate;
    }
    if (!isNullOrWhiteSpace(rbaOTPSmsTemplate)) {
      queryParameters.rbaOTPSmsTemplate = rbaOTPSmsTemplate;
    }
    if (!isNullOrWhiteSpace(smsTemplate)) {
      queryParameters.smsTemplate = smsTemplate;
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
      phoneAuthenticationModel
    );
  }
}

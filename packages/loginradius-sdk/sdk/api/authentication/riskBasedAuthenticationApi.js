/*
 * Created by LoginRadius Development Team
   Copyright 2019 LoginRadius Inc. All rights reserved.
*/
module.exports = function (config) {
  var module = {};
  var helper = require(config.HELPER_PATH);

  /**
  * This API retrieves a copy of the user data based on the Email
  * @param {emailAuthenticationModel} Model Class containing Definition of payload for Email Authentication API
  * @param {emailTemplate} Email template name
  * @param {fields} The fields parameter filters the API response so that the response only includes a specific set of fields
  * @param {loginUrl} Url where the user is logging from
  * @param {passwordDelegation} Password Delegation Allows you to use a third-party service to store your passwords rather than LoginRadius Cloud storage.
  * @param {passwordDelegationApp} RiskBased Authentication Password Delegation App
  * @param {rbaBrowserEmailTemplate} Risk Based Authentication Browser EmailTemplate
  * @param {rbaBrowserSmsTemplate} Risk Based Authentication Browser Sms Template
  * @param {rbaCityEmailTemplate} Risk Based Authentication City Email Template
  * @param {rbaCitySmsTemplate} Risk Based Authentication City SmsTemplate
  * @param {rbaCountryEmailTemplate} Risk Based Authentication Country EmailTemplate
  * @param {rbaCountrySmsTemplate} Risk Based Authentication Country SmsTemplate
  * @param {rbaIpEmailTemplate} Risk Based Authentication Ip EmailTemplate
  * @param {rbaIpSmsTemplate} Risk Based Authentication Ip SmsTemplate
  * @param {rbaOneclickEmailTemplate} Risk Based Authentication Oneclick EmailTemplate
  * @param {rbaOTPSmsTemplate} Risk Based Authentication Oneclick EmailTemplate
  * @param {smsTemplate} SMS Template name
  * @param {verificationUrl} Email verification url
  * @return Response containing User Profile Data and access token
  *9.2.4
  */

  module.rbaLoginByEmail = function (emailAuthenticationModel, emailTemplate,
    fields, loginUrl, passwordDelegation, passwordDelegationApp, rbaBrowserEmailTemplate,
    rbaBrowserSmsTemplate, rbaCityEmailTemplate, rbaCitySmsTemplate, rbaCountryEmailTemplate,
    rbaCountrySmsTemplate, rbaIpEmailTemplate, rbaIpSmsTemplate, rbaOneclickEmailTemplate,
    rbaOTPSmsTemplate, smsTemplate, verificationUrl) {
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
    if (passwordDelegation !== null) {
      queryParameters.passwordDelegation = passwordDelegation;
    }
    if (!helper.isNullOrWhiteSpace(passwordDelegationApp)) {
      queryParameters.passwordDelegationApp = passwordDelegationApp;
    }
    if (!helper.isNullOrWhiteSpace(rbaBrowserEmailTemplate)) {
      queryParameters.rbaBrowserEmailTemplate = rbaBrowserEmailTemplate;
    }
    if (!helper.isNullOrWhiteSpace(rbaBrowserSmsTemplate)) {
      queryParameters.rbaBrowserSmsTemplate = rbaBrowserSmsTemplate;
    }
    if (!helper.isNullOrWhiteSpace(rbaCityEmailTemplate)) {
      queryParameters.rbaCityEmailTemplate = rbaCityEmailTemplate;
    }
    if (!helper.isNullOrWhiteSpace(rbaCitySmsTemplate)) {
      queryParameters.rbaCitySmsTemplate = rbaCitySmsTemplate;
    }
    if (!helper.isNullOrWhiteSpace(rbaCountryEmailTemplate)) {
      queryParameters.rbaCountryEmailTemplate = rbaCountryEmailTemplate;
    }
    if (!helper.isNullOrWhiteSpace(rbaCountrySmsTemplate)) {
      queryParameters.rbaCountrySmsTemplate = rbaCountrySmsTemplate;
    }
    if (!helper.isNullOrWhiteSpace(rbaIpEmailTemplate)) {
      queryParameters.rbaIpEmailTemplate = rbaIpEmailTemplate;
    }
    if (!helper.isNullOrWhiteSpace(rbaIpSmsTemplate)) {
      queryParameters.rbaIpSmsTemplate = rbaIpSmsTemplate;
    }
    if (!helper.isNullOrWhiteSpace(rbaOneclickEmailTemplate)) {
      queryParameters.rbaOneclickEmailTemplate = rbaOneclickEmailTemplate;
    }
    if (!helper.isNullOrWhiteSpace(rbaOTPSmsTemplate)) {
      queryParameters.rbaOTPSmsTemplate = rbaOTPSmsTemplate;
    }
    if (!helper.isNullOrWhiteSpace(smsTemplate)) {
      queryParameters.smsTemplate = smsTemplate;
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
  * @param {passwordDelegation} Password Delegation Allows you to use a third-party service to store your passwords rather than LoginRadius Cloud storage.
  * @param {passwordDelegationApp} RiskBased Authentication Password Delegation App
  * @param {rbaBrowserEmailTemplate} Risk Based Authentication Browser EmailTemplate
  * @param {rbaBrowserSmsTemplate} Risk Based Authentication Browser Sms Template
  * @param {rbaCityEmailTemplate} Risk Based Authentication City Email Template
  * @param {rbaCitySmsTemplate} Risk Based Authentication City SmsTemplate
  * @param {rbaCountryEmailTemplate} Risk Based Authentication Country EmailTemplate
  * @param {rbaCountrySmsTemplate} Risk Based Authentication Country SmsTemplate
  * @param {rbaIpEmailTemplate} Risk Based Authentication Ip EmailTemplate
  * @param {rbaIpSmsTemplate} Risk Based Authentication Ip SmsTemplate
  * @param {rbaOneclickEmailTemplate} Risk Based Authentication Oneclick EmailTemplate
  * @param {rbaOTPSmsTemplate} Risk Based Authentication OTPSmsTemplate
  * @param {smsTemplate} SMS Template name
  * @param {verificationUrl} Email verification url
  * @return Response containing User Profile Data and access token
  *9.2.5
  */

  module.rbaLoginByUserName = function (userNameAuthenticationModel, emailTemplate,
    fields, loginUrl, passwordDelegation, passwordDelegationApp, rbaBrowserEmailTemplate,
    rbaBrowserSmsTemplate, rbaCityEmailTemplate, rbaCitySmsTemplate, rbaCountryEmailTemplate,
    rbaCountrySmsTemplate, rbaIpEmailTemplate, rbaIpSmsTemplate, rbaOneclickEmailTemplate,
    rbaOTPSmsTemplate, smsTemplate, verificationUrl) {
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
    if (passwordDelegation !== null) {
      queryParameters.passwordDelegation = passwordDelegation;
    }
    if (!helper.isNullOrWhiteSpace(passwordDelegationApp)) {
      queryParameters.passwordDelegationApp = passwordDelegationApp;
    }
    if (!helper.isNullOrWhiteSpace(rbaBrowserEmailTemplate)) {
      queryParameters.rbaBrowserEmailTemplate = rbaBrowserEmailTemplate;
    }
    if (!helper.isNullOrWhiteSpace(rbaBrowserSmsTemplate)) {
      queryParameters.rbaBrowserSmsTemplate = rbaBrowserSmsTemplate;
    }
    if (!helper.isNullOrWhiteSpace(rbaCityEmailTemplate)) {
      queryParameters.rbaCityEmailTemplate = rbaCityEmailTemplate;
    }
    if (!helper.isNullOrWhiteSpace(rbaCitySmsTemplate)) {
      queryParameters.rbaCitySmsTemplate = rbaCitySmsTemplate;
    }
    if (!helper.isNullOrWhiteSpace(rbaCountryEmailTemplate)) {
      queryParameters.rbaCountryEmailTemplate = rbaCountryEmailTemplate;
    }
    if (!helper.isNullOrWhiteSpace(rbaCountrySmsTemplate)) {
      queryParameters.rbaCountrySmsTemplate = rbaCountrySmsTemplate;
    }
    if (!helper.isNullOrWhiteSpace(rbaIpEmailTemplate)) {
      queryParameters.rbaIpEmailTemplate = rbaIpEmailTemplate;
    }
    if (!helper.isNullOrWhiteSpace(rbaIpSmsTemplate)) {
      queryParameters.rbaIpSmsTemplate = rbaIpSmsTemplate;
    }
    if (!helper.isNullOrWhiteSpace(rbaOneclickEmailTemplate)) {
      queryParameters.rbaOneclickEmailTemplate = rbaOneclickEmailTemplate;
    }
    if (!helper.isNullOrWhiteSpace(rbaOTPSmsTemplate)) {
      queryParameters.rbaOTPSmsTemplate = rbaOTPSmsTemplate;
    }
    if (!helper.isNullOrWhiteSpace(smsTemplate)) {
      queryParameters.smsTemplate = smsTemplate;
    }
    if (!helper.isNullOrWhiteSpace(verificationUrl)) {
      queryParameters.verificationUrl = verificationUrl;
    }

    var resourcePath = 'identity/v2/auth/login';

    return config.request('POST', resourcePath, queryParameters, userNameAuthenticationModel);
  };

  /**
  * This API retrieves a copy of the user data based on the Phone
  * @param {phoneAuthenticationModel} Model Class containing Definition of payload for PhoneAuthenticationModel API
  * @param {emailTemplate} Email template name
  * @param {fields} The fields parameter filters the API response so that the response only includes a specific set of fields
  * @param {loginUrl} Url where the user is logging from
  * @param {passwordDelegation} Password Delegation Allows you to use a third-party service to store your passwords rather than LoginRadius Cloud storage.
  * @param {passwordDelegationApp} RiskBased Authentication Password Delegation App
  * @param {rbaBrowserEmailTemplate} Risk Based Authentication Browser EmailTemplate
  * @param {rbaBrowserSmsTemplate} Risk Based Authentication Browser Sms Template
  * @param {rbaCityEmailTemplate} Risk Based Authentication City Email Template
  * @param {rbaCitySmsTemplate} Risk Based Authentication City SmsTemplate
  * @param {rbaCountryEmailTemplate} Risk Based Authentication Country EmailTemplate
  * @param {rbaCountrySmsTemplate} Risk Based Authentication Country SmsTemplate
  * @param {rbaIpEmailTemplate} Risk Based Authentication Ip EmailTemplate
  * @param {rbaIpSmsTemplate} Risk Based Authentication Ip SmsTemplate
  * @param {rbaOneclickEmailTemplate} Risk Based Authentication Oneclick EmailTemplate
  * @param {rbaOTPSmsTemplate} Risk Based Authentication OTPSmsTemplate
  * @param {smsTemplate} SMS Template name
  * @param {verificationUrl} Email verification url
  * @return Response containing User Profile Data and access token
  *9.2.6
  */

  module.rbaLoginByPhone = function (phoneAuthenticationModel, emailTemplate,
    fields, loginUrl, passwordDelegation, passwordDelegationApp, rbaBrowserEmailTemplate,
    rbaBrowserSmsTemplate, rbaCityEmailTemplate, rbaCitySmsTemplate, rbaCountryEmailTemplate,
    rbaCountrySmsTemplate, rbaIpEmailTemplate, rbaIpSmsTemplate, rbaOneclickEmailTemplate,
    rbaOTPSmsTemplate, smsTemplate, verificationUrl) {
    if (helper.checkJson(phoneAuthenticationModel)) {
      return Promise.reject(helper.getValidationMessage('phoneAuthenticationModel'));
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
    if (passwordDelegation !== null) {
      queryParameters.passwordDelegation = passwordDelegation;
    }
    if (!helper.isNullOrWhiteSpace(passwordDelegationApp)) {
      queryParameters.passwordDelegationApp = passwordDelegationApp;
    }
    if (!helper.isNullOrWhiteSpace(rbaBrowserEmailTemplate)) {
      queryParameters.rbaBrowserEmailTemplate = rbaBrowserEmailTemplate;
    }
    if (!helper.isNullOrWhiteSpace(rbaBrowserSmsTemplate)) {
      queryParameters.rbaBrowserSmsTemplate = rbaBrowserSmsTemplate;
    }
    if (!helper.isNullOrWhiteSpace(rbaCityEmailTemplate)) {
      queryParameters.rbaCityEmailTemplate = rbaCityEmailTemplate;
    }
    if (!helper.isNullOrWhiteSpace(rbaCitySmsTemplate)) {
      queryParameters.rbaCitySmsTemplate = rbaCitySmsTemplate;
    }
    if (!helper.isNullOrWhiteSpace(rbaCountryEmailTemplate)) {
      queryParameters.rbaCountryEmailTemplate = rbaCountryEmailTemplate;
    }
    if (!helper.isNullOrWhiteSpace(rbaCountrySmsTemplate)) {
      queryParameters.rbaCountrySmsTemplate = rbaCountrySmsTemplate;
    }
    if (!helper.isNullOrWhiteSpace(rbaIpEmailTemplate)) {
      queryParameters.rbaIpEmailTemplate = rbaIpEmailTemplate;
    }
    if (!helper.isNullOrWhiteSpace(rbaIpSmsTemplate)) {
      queryParameters.rbaIpSmsTemplate = rbaIpSmsTemplate;
    }
    if (!helper.isNullOrWhiteSpace(rbaOneclickEmailTemplate)) {
      queryParameters.rbaOneclickEmailTemplate = rbaOneclickEmailTemplate;
    }
    if (!helper.isNullOrWhiteSpace(rbaOTPSmsTemplate)) {
      queryParameters.rbaOTPSmsTemplate = rbaOTPSmsTemplate;
    }
    if (!helper.isNullOrWhiteSpace(smsTemplate)) {
      queryParameters.smsTemplate = smsTemplate;
    }
    if (!helper.isNullOrWhiteSpace(verificationUrl)) {
      queryParameters.verificationUrl = verificationUrl;
    }

    var resourcePath = 'identity/v2/auth/login';

    return config.request('POST', resourcePath, queryParameters, phoneAuthenticationModel);
  };
  return module;
};

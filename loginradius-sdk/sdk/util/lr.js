/*
 * Created by LoginRadius Development Team
   Copyright 2019 LoginRadius Inc. All rights reserved.
*/
var request = require('request');
var path = require('path');

module.exports = function (config = {}) {
  if (config.apiKey === undefined || config.apiSecret === undefined) {
    console.error('Please set apiKey API & apiSecret');
    return;
  }
  config.HELPER_PATH = path.join(__dirname, 'helper.js');
  var helper = require(config.HELPER_PATH);

  config.request = function (type, resourcePath, queryParameters, formData) {
    var isApiSecret;
    if (queryParameters.apiSecret) {
      isApiSecret = queryParameters.apiSecret;
      delete queryParameters.apiSecret;
    }

    if (!helper.isNullOrWhiteSpace(config.serverRegion)) {
      queryParameters.region = config.serverRegion;
    }

    var headers = { 'content-type': 'application/json' };
    if (queryParameters.sott) {
      Object.assign(headers, { 'X-LoginRadius-Sott': queryParameters.sott });
      delete queryParameters.sott;
    }
    var queryString = helper.getQueryString(queryParameters);

    if (queryParameters.access_token) {
      Object.assign(
        headers,
        { 'authorization': 'Bearer ' + queryParameters.access_token }
      );
      delete queryParameters.access_token;
    }
    var options = {
      method: type,
      uri: ((resourcePath === 'ciam/appinfo') ? 'https://config.lrcontent.com' : config.apiDomain) + '/' + resourcePath + ((queryString) ? '?' + queryString : ''),
      headers: headers
    };

    if (formData !== '' && formData !== null) {
      options.body = JSON.stringify(formData);
    }

    if (config.proxy && config.proxy.host && config.proxy.port) {
      options.proxy = (config.proxy.protocol ? config.proxy.protocol : 'http') + '://' + config.proxy.user + ':' + config.proxy.password + '@' + config.proxy.host + ':' + config.proxy.port;
    }

    var customHeader = {
      'X-LoginRadius-apiKey': config.apiKey,
      'X-LoginRadius-apiSecret': config.apiSecret
    };

    if (config.fieldsParam && config.fieldsValue) {
      var fieldsList;
      if (options.uri.match(/\?./)) {
        fieldsList = config.fieldsParam +
          encodeURIComponent(config.fieldsValue);
      } else {
        fieldsList = '?fields=' + encodeURIComponent(config.fieldsValue);
      }
      options.uri += fieldsList;
    }

    if (isApiSecret) {
      if (config.apiRequestSigning) {
        if (!options.uri.match('apiKey')) {
          options.uri += '&apiKey=' + encodeURIComponent(config.apiKey);
        }
        var signingHeader = helper.generateSigningHeader(options, config.apiSecret);

        Object.assign(options.headers, signingHeader);
      } else {
        Object.assign(options.headers, customHeader);
      }
    }
    return new Promise(function (resolve, reject) {
      request(options, (error, response, body) => {
        if (error) {
          helper.manageRequestResponse('serverError', error, resolve, reject);
        } else {
          try {
            response = JSON.parse(body);
            helper.manageRequestResponse('', response, resolve, reject);
          } catch (err) {
            helper.manageRequestResponse('serverError', '', resolve, reject);
          }
        }
      });
    });
  };

  config.apiDomain = ((config.apiDomain) && (config.apiDomain !== '')) ? config.apiDomain : 'https://api.loginradius.com';
  return {
    helper,
    accountApi: require(path.join(__dirname, '..', 'api', 'account', 'accountApi'))(config),
    roleApi: require(path.join(__dirname, '..', 'api', 'account', 'roleApi'))(config),
    sottApi: require(path.join(__dirname, '..', 'api', 'account', 'sottApi'))(config),
    configurationApi: require(path.join(__dirname, '..', 'api', 'advanced', 'configurationApi'))(config),
    customObjectApi: require(path.join(__dirname, '..', 'api', 'advanced', 'customObjectApi'))(config),
    customRegistrationDataApi: require(path.join(__dirname, '..', 'api', 'advanced', 'customRegistrationDataApi'))(config),
    multiFactorAuthenticationApi: require(path.join(__dirname, '..', 'api', 'advanced', 'multiFactorAuthenticationApi'))(config),
    webHookApi: require(path.join(__dirname, '..', 'api', 'advanced', 'webHookApi'))(config),
    consentManagementApi: require(path.join(__dirname, '..', 'api', 'advanced', 'consentManagementApi'))(config),
    reAuthenticationApi: require(path.join(__dirname, '..', 'api', 'advanced', 'reAuthenticationApi'))(config),
    authenticationApi: require(path.join(__dirname, '..', 'api', 'authentication', 'authenticationApi'))(config),
    oneTouchLoginApi: require(path.join(__dirname, '..', 'api', 'authentication', 'oneTouchLoginApi'))(config),
    passwordLessLoginApi: require(path.join(__dirname, '..', 'api', 'authentication', 'passwordLessLoginApi'))(config),
    phoneAuthenticationApi: require(path.join(__dirname, '..', 'api', 'authentication', 'phoneAuthenticationApi'))(config),
    riskBasedAuthenticationApi: require(path.join(__dirname, '..', 'api', 'authentication', 'riskBasedAuthenticationApi'))(config),
    pinAuthenticationApi: require(path.join(__dirname, '..', 'api', 'authentication', 'pinAuthenticationApi'))(config),
    smartLoginApi: require(path.join(__dirname, '..', 'api', 'authentication', 'smartLoginApi'))(config),
    nativeSocialApi: require(path.join(__dirname, '..', 'api', 'social', 'nativeSocialApi'))(config),
    socialApi: require(path.join(__dirname, '..', 'api', 'social', 'socialApi'))(config)
  };
};

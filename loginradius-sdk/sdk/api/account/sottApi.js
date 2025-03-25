/*
 * Created by LoginRadius Development Team
   Copyright 2025 LoginRadius Inc. All rights reserved.
*/
module.exports = function (config) {
  var module = {};
  var helper = require(config.HELPER_PATH)();

  /**
   * This API allows you to generate SOTT with a given expiration time.
   * @param {timeDifference} The time difference you would like to pass, If you not pass difference then the default value is 10 minutes
   * @return Sott data For Registration
   *18.28
   */

  module.generateSott = function (timeDifference) {
    var queryParameters = {};

    queryParameters.apiKey = config.apiKey;
    queryParameters.apiSecret = config.apiSecret;
    if (timeDifference !== null) {
      queryParameters.timeDifference = timeDifference;
    }

    var resourcePath = 'identity/v2/manage/account/sott';

    return config.request('GET', resourcePath, queryParameters, null);
  };
  return module;
};

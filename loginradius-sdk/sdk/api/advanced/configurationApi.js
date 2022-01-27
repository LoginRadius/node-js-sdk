/*
 * Created by LoginRadius Development Team
   Copyright 2019 LoginRadius Inc. All rights reserved.
*/
module.exports = function (config) {
  var module = {};

  /**
   * This API is used to get the configurations which are set in the LoginRadius Dashboard for a particular LoginRadius site/environment
   * @return Response containing LoginRadius App configurations which are set in the LoginRadius Dashboard for a particular LoginRadius site/environment
   *100
   */
  module.getConfigurations = function () {
    var resourcePath = 'ciam/appinfo';

    var queryParameters = {};
    queryParameters.apiKey = config.apiKey;

    return config.request('GET', resourcePath, queryParameters, null);
  };

  /**
   * This API allows you to query your LoginRadius account for basic server information and server time information which is useful when generating an SOTT token.
   * @param {timeDifference} The time difference you would like to pass, If you not pass difference then the default value is 10 minutes
   * @return Response containing Definition of Complete service info data
   *3.1
   */

  module.getServerInfo = function (timeDifference) {
    var queryParameters = {};

    queryParameters.apiKey = config.apiKey;
    if (timeDifference !== null) {
      queryParameters.timeDifference = timeDifference;
    }

    var resourcePath = 'identity/v2/serverinfo';

    return config.request('GET', resourcePath, queryParameters, null);
  };
  return module;
};

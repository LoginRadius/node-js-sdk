/*
 * Created by LoginRadius Development Team
   Copyright 2019 LoginRadius Inc. All rights reserved.
*/
module.exports = function (config) {
  var module = {};
  var helper = require(config.HELPER_PATH);

  /**
  * The API is used to get LoginRadius access token by sending Facebook's access token. It will be valid for the specific duration of time specified in the response.
  * @param {fbAccessToken} Facebook Access Token
  * @return Response containing Definition of Complete Token data
  *20.3
  */

  module.getAccessTokenByFacebookAccessToken = function (fbAccessToken) {
    if (helper.isNullOrWhiteSpace(fbAccessToken)) {
      return Promise.reject(helper.getValidationMessage('fbAccessToken'));
    }
    var queryParameters = {};

    queryParameters.fb_Access_Token = fbAccessToken;
    queryParameters.key = config.apiKey;

    var resourcePath = 'api/v2/access_token/facebook';

    return config.request('GET', resourcePath, queryParameters, null);
  };

  /**
  * The API is used to get LoginRadius access token by sending Twitter's access token. It will be valid for the specific duration of time specified in the response.
  * @param {twAccessToken} Twitter Access Token
  * @param {twTokenSecret} Twitter Token Secret
  * @return Response containing Definition of Complete Token data
  *20.4
  */

  module.getAccessTokenByTwitterAccessToken = function (twAccessToken, twTokenSecret) {
    if (helper.isNullOrWhiteSpace(twAccessToken)) {
      return Promise.reject(helper.getValidationMessage('twAccessToken'));
    }
    if (helper.isNullOrWhiteSpace(twTokenSecret)) {
      return Promise.reject(helper.getValidationMessage('twTokenSecret'));
    }
    var queryParameters = {};

    queryParameters.key = config.apiKey;
    queryParameters.tw_Access_Token = twAccessToken;
    queryParameters.tw_Token_Secret = twTokenSecret;

    var resourcePath = 'api/v2/access_token/twitter';

    return config.request('GET', resourcePath, queryParameters, null);
  };

  /**
  * The API is used to get LoginRadius access token by sending Google's access token. It will be valid for the specific duration of time specified in the response.
  * @param {googleAccessToken} Google Access Token
  * @param {clientId} Google Client ID
  * @param {refreshToken} LoginRadius refresh_token
  * @return Response containing Definition of Complete Token data
  *20.5
  */

  module.getAccessTokenByGoogleAccessToken = function (googleAccessToken, clientId,
    refreshToken) {
    if (helper.isNullOrWhiteSpace(googleAccessToken)) {
      return Promise.reject(helper.getValidationMessage('googleAccessToken'));
    }
    var queryParameters = {};

    queryParameters.google_Access_Token = googleAccessToken;
    queryParameters.key = config.apiKey;
    if (!helper.isNullOrWhiteSpace(clientId)) {
      queryParameters.client_id = clientId;
    }
    if (!helper.isNullOrWhiteSpace(refreshToken)) {
      queryParameters.refresh_token = refreshToken;
    }

    var resourcePath = 'api/v2/access_token/google';

    return config.request('GET', resourcePath, queryParameters, null);
  };

  /**
  * This API is used to Get LoginRadius Access Token using google jwt id token for google native mobile login/registration.
  * @param {idToken} Google JWT id_token
  * @return Response containing Definition of Complete Token data
  *20.6
  */

  module.getAccessTokenByGoogleJWTAccessToken = function (idToken) {
    if (helper.isNullOrWhiteSpace(idToken)) {
      return Promise.reject(helper.getValidationMessage('idToken'));
    }
    var queryParameters = {};

    queryParameters.id_Token = idToken;
    queryParameters.key = config.apiKey;

    var resourcePath = 'api/v2/access_token/googlejwt';

    return config.request('GET', resourcePath, queryParameters, null);
  };

  /**
  * The API is used to get LoginRadius access token by sending Linkedin's access token. It will be valid for the specific duration of time specified in the response.
  * @param {lnAccessToken} Linkedin Access Token
  * @return Response containing Definition of Complete Token data
  *20.7
  */

  module.getAccessTokenByLinkedinAccessToken = function (lnAccessToken) {
    if (helper.isNullOrWhiteSpace(lnAccessToken)) {
      return Promise.reject(helper.getValidationMessage('lnAccessToken'));
    }
    var queryParameters = {};

    queryParameters.key = config.apiKey;
    queryParameters.ln_Access_Token = lnAccessToken;

    var resourcePath = 'api/v2/access_token/linkedin';

    return config.request('GET', resourcePath, queryParameters, null);
  };

  /**
  * The API is used to get LoginRadius access token by sending Foursquare's access token. It will be valid for the specific duration of time specified in the response.
  * @param {fsAccessToken} Foursquare Access Token
  * @return Response containing Definition of Complete Token data
  *20.8
  */

  module.getAccessTokenByFoursquareAccessToken = function (fsAccessToken) {
    if (helper.isNullOrWhiteSpace(fsAccessToken)) {
      return Promise.reject(helper.getValidationMessage('fsAccessToken'));
    }
    var queryParameters = {};

    queryParameters.fs_Access_Token = fsAccessToken;
    queryParameters.key = config.apiKey;

    var resourcePath = 'api/v2/access_token/foursquare';

    return config.request('GET', resourcePath, queryParameters, null);
  };

  /**
  * The API is used to get LoginRadius access token by sending Vkontakte's access token. It will be valid for the specific duration of time specified in the response.
  * @param {vkAccessToken} Vkontakte Access Token
  * @return Response containing Definition of Complete Token data
  *20.15
  */

  module.getAccessTokenByVkontakteAccessToken = function (vkAccessToken) {
    if (helper.isNullOrWhiteSpace(vkAccessToken)) {
      return Promise.reject(helper.getValidationMessage('vkAccessToken'));
    }
    var queryParameters = {};

    queryParameters.key = config.apiKey;
    queryParameters.vk_access_token = vkAccessToken;

    var resourcePath = 'api/v2/access_token/vkontakte';

    return config.request('GET', resourcePath, queryParameters, null);
  };

  /**
  * The API is used to get LoginRadius access token by sending Google's AuthCode. It will be valid for the specific duration of time specified in the response.
  * @param {googleAuthcode} Google AuthCode
  * @return Response containing Definition of Complete Token data
  *20.16
  */

  module.getAccessTokenByGoogleAuthCode = function (googleAuthcode) {
    if (helper.isNullOrWhiteSpace(googleAuthcode)) {
      return Promise.reject(helper.getValidationMessage('googleAuthcode'));
    }
    var queryParameters = {};

    queryParameters.apiKey = config.apiKey;
    queryParameters.google_authcode = googleAuthcode;

    var resourcePath = 'api/v2/access_token/google';

    return config.request('GET', resourcePath, queryParameters, null);
  };
  return module;
};

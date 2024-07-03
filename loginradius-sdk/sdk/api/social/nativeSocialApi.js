/*
 * Created by LoginRadius Development Team
   Copyright 2019 LoginRadius Inc. All rights reserved.
*/
module.exports = function (config) {
  var module = {};
  var helper = require(config.HELPER_PATH)();

  /**
   * The API is used to get LoginRadius access token by sending Facebook's access token. It will be valid for the specific duration of time specified in the response.
   * @param {fbAccessToken} Facebook Access Token
   * @param {socialAppName} Name of Social provider APP
   * @return Response containing Definition of Complete Token data
   *20.3
   */

  module.getAccessTokenByFacebookAccessToken = function (
    fbAccessToken,
    socialAppName
  ) {
    if (helper.isNullOrWhiteSpace(fbAccessToken)) {
      return Promise.reject(helper.getValidationMessage('fbAccessToken'));
    }
    var queryParameters = {};

    queryParameters.fb_Access_Token = fbAccessToken;
    queryParameters.key = config.apiKey;
    if (!helper.isNullOrWhiteSpace(socialAppName)) {
      queryParameters.socialAppName = socialAppName;
    }

    var resourcePath = 'api/v2/access_token/facebook';

    return config.request('GET', resourcePath, queryParameters, null);
  };

  /**
   * The API is used to get LoginRadius access token by sending Twitter's access token. It will be valid for the specific duration of time specified in the response.
   * @param {twAccessToken} Twitter Access Token
   * @param {twTokenSecret} Twitter Token Secret
   * @param {socialAppName} Name of Social provider APP
   * @return Response containing Definition of Complete Token data
   *20.4
   */

  module.getAccessTokenByTwitterAccessToken = function (
    twAccessToken,
    twTokenSecret,
    socialAppName
  ) {
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
    if (!helper.isNullOrWhiteSpace(socialAppName)) {
      queryParameters.socialAppName = socialAppName;
    }

    var resourcePath = 'api/v2/access_token/twitter';

    return config.request('GET', resourcePath, queryParameters, null);
  };

  /**
   * The API is used to get LoginRadius access token by sending Google's access token. It will be valid for the specific duration of time specified in the response.
   * @param {googleAccessToken} Google Access Token
   * @param {clientId} Google Client ID
   * @param {refreshToken} LoginRadius refresh token
   * @param {socialAppName} Name of Social provider APP
   * @return Response containing Definition of Complete Token data
   *20.5
   */

  module.getAccessTokenByGoogleAccessToken = function (
    googleAccessToken,
    clientId,
    refreshToken,
    socialAppName
  ) {
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
    if (!helper.isNullOrWhiteSpace(socialAppName)) {
      queryParameters.socialAppName = socialAppName;
    }

    var resourcePath = 'api/v2/access_token/google';

    return config.request('GET', resourcePath, queryParameters, null);
  };

  /**
   * This API is used to Get LoginRadius Access Token using google jwt id token for google native mobile login/registration.
   * @param {idToken} Custom JWT Token
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
   * @param {socialAppName} Name of Social provider APP
   * @return Response containing Definition of Complete Token data
   *20.7
   */

  module.getAccessTokenByLinkedinAccessToken = function (
    lnAccessToken,
    socialAppName
  ) {
    if (helper.isNullOrWhiteSpace(lnAccessToken)) {
      return Promise.reject(helper.getValidationMessage('lnAccessToken'));
    }
    var queryParameters = {};

    queryParameters.key = config.apiKey;
    queryParameters.ln_Access_Token = lnAccessToken;
    if (!helper.isNullOrWhiteSpace(socialAppName)) {
      queryParameters.socialAppName = socialAppName;
    }

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
   * The API is used to get LoginRadius access token by sending a valid Apple ID OAuth Code. It will be valid for the specific duration of time specified in the response.
   * @param {code} Apple Code
   * @param {socialAppName} Name of Social provider APP
   * @return Response containing Definition of Complete Token data
   *20.12
   */

  module.getAccessTokenByAppleIdCode = function (code, socialAppName) {
    if (helper.isNullOrWhiteSpace(code)) {
      return Promise.reject(helper.getValidationMessage('code'));
    }
    var queryParameters = {};

    queryParameters.code = code;
    queryParameters.key = config.apiKey;
    if (!helper.isNullOrWhiteSpace(socialAppName)) {
      queryParameters.socialAppName = socialAppName;
    }

    var resourcePath = 'api/v2/access_token/apple';

    return config.request('GET', resourcePath, queryParameters, null);
  };

  /**
   * This API is used to retrieve a LoginRadius access token by passing in a valid WeChat OAuth Code.
   * @param {code} WeChat Code
   * @return Response containing Definition of Complete Token data
   *20.13
   */

  module.getAccessTokenByWeChatCode = function (code) {
    if (helper.isNullOrWhiteSpace(code)) {
      return Promise.reject(helper.getValidationMessage('code'));
    }
    var queryParameters = {};

    queryParameters.code = code;
    queryParameters.key = config.apiKey;

    var resourcePath = 'api/v2/access_token/wechat';

    return config.request('GET', resourcePath, queryParameters, null);
  };

  /**
   * The API is used to get LoginRadius access token by sending Google's AuthCode. It will be valid for the specific duration of time specified in the response.
   * @param {googleAuthcode} Google AuthCode
   * @param {socialAppName} Name of Social provider APP
   * @return Response containing Definition of Complete Token data
   *20.16
   */

  module.getAccessTokenByGoogleAuthCode = function (
    googleAuthcode,
    socialAppName
  ) {
    if (helper.isNullOrWhiteSpace(googleAuthcode)) {
      return Promise.reject(helper.getValidationMessage('googleAuthcode'));
    }
    var queryParameters = {};

    queryParameters.apiKey = config.apiKey;
    queryParameters.google_authcode = googleAuthcode;
    if (!helper.isNullOrWhiteSpace(socialAppName)) {
      queryParameters.socialAppName = socialAppName;
    }

    var resourcePath = 'api/v2/access_token/google';

    return config.request('GET', resourcePath, queryParameters, null);
  };

  /**
   * This API is used to retrieve a LoginRadius access token by passing in a valid custom JWT token.
   * @param {idToken} Custom JWT Token
   * @param {providername} JWT Provider Name
   * @return Response containing Definition of Complete Token data
   *44.3
   */

  module.accessTokenViaCustomJWTToken = function (idToken, providername) {
    if (helper.isNullOrWhiteSpace(idToken)) {
      return Promise.reject(helper.getValidationMessage('idToken'));
    }
    if (helper.isNullOrWhiteSpace(providername)) {
      return Promise.reject(helper.getValidationMessage('providername'));
    }
    var queryParameters = {};

    queryParameters.id_Token = idToken;
    queryParameters.key = config.apiKey;
    queryParameters.providername = providername;

    var resourcePath = 'api/v2/access_token/jwt';

    return config.request('GET', resourcePath, queryParameters, null);
  };
  return module;
};

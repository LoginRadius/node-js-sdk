/*
 * Created by LoginRadius Development Team
   Copyright 2019 LoginRadius Inc. All rights reserved.
*/
import {
  getValidationMessage,
  isNullOrWhiteSpace,
  request
} from '../../util/helper';
import { LoginRadiusConfig } from '../../types';

export default class NativeSocialApi {
  // eslint-disable-next-line no-useless-constructor, no-unused-vars, no-empty-function
  constructor (private config: LoginRadiusConfig) {}

  /**
   * The API is used to get LoginRadius access token by sending Facebook's access token. It will be valid for the specific duration of time specified in the response.
   * @param {fbAccessToken} Facebook Access Token
   * @param {socialAppName} Name of Social provider APP
   * @return Response containing Definition of Complete Token data
   *20.3
   */
  getAccessTokenByFacebookAccessToken (fbAccessToken, socialAppName) {
    if (isNullOrWhiteSpace(fbAccessToken)) {
      return Promise.reject(getValidationMessage('fbAccessToken'));
    }
    var queryParameters: any = {};

    queryParameters.fb_Access_Token = fbAccessToken;
    queryParameters.key = this.config.apiKey;
    if (!isNullOrWhiteSpace(socialAppName)) {
      queryParameters.socialAppName = socialAppName;
    }

    var resourcePath = 'api/v2/access_token/facebook';

    return request(this.config, 'GET', resourcePath, queryParameters, null);
  }

  /**
   * The API is used to get LoginRadius access token by sending Twitter's access token. It will be valid for the specific duration of time specified in the response.
   * @param {twAccessToken} Twitter Access Token
   * @param {twTokenSecret} Twitter Token Secret
   * @param {socialAppName} Name of Social provider APP
   * @return Response containing Definition of Complete Token data
   *20.4
   */
  getAccessTokenByTwitterAccessToken (
    twAccessToken,
    twTokenSecret,
    socialAppName
  ) {
    if (isNullOrWhiteSpace(twAccessToken)) {
      return Promise.reject(getValidationMessage('twAccessToken'));
    }
    if (isNullOrWhiteSpace(twTokenSecret)) {
      return Promise.reject(getValidationMessage('twTokenSecret'));
    }
    var queryParameters: any = {};

    queryParameters.key = this.config.apiKey;
    queryParameters.tw_Access_Token = twAccessToken;
    queryParameters.tw_Token_Secret = twTokenSecret;
    if (!isNullOrWhiteSpace(socialAppName)) {
      queryParameters.socialAppName = socialAppName;
    }

    var resourcePath = 'api/v2/access_token/twitter';

    return request(this.config, 'GET', resourcePath, queryParameters, null);
  }

  /**
   * The API is used to get LoginRadius access token by sending Google's access token. It will be valid for the specific duration of time specified in the response.
   * @param {googleAccessToken} Google Access Token
   * @param {clientId} Google Client ID
   * @param {refreshToken} LoginRadius refresh token
   * @param {socialAppName} Name of Social provider APP
   * @return Response containing Definition of Complete Token data
   *20.5
   */
  getAccessTokenByGoogleAccessToken (
    googleAccessToken,
    clientId,
    refreshToken,
    socialAppName
  ) {
    if (isNullOrWhiteSpace(googleAccessToken)) {
      return Promise.reject(getValidationMessage('googleAccessToken'));
    }
    var queryParameters: any = {};

    queryParameters.google_Access_Token = googleAccessToken;
    queryParameters.key = this.config.apiKey;
    if (!isNullOrWhiteSpace(clientId)) {
      queryParameters.client_id = clientId;
    }
    if (!isNullOrWhiteSpace(refreshToken)) {
      queryParameters.refresh_token = refreshToken;
    }
    if (!isNullOrWhiteSpace(socialAppName)) {
      queryParameters.socialAppName = socialAppName;
    }

    var resourcePath = 'api/v2/access_token/google';

    return request(this.config, 'GET', resourcePath, queryParameters, null);
  }

  /**
   * This API is used to Get LoginRadius Access Token using google jwt id token for google native mobile login/registration.
   * @param {idToken} Google JWT id_token
   * @return Response containing Definition of Complete Token data
   *20.6
   */
  getAccessTokenByGoogleJWTAccessToken (idToken) {
    if (isNullOrWhiteSpace(idToken)) {
      return Promise.reject(getValidationMessage('idToken'));
    }
    var queryParameters: any = {};

    queryParameters.id_Token = idToken;
    queryParameters.key = this.config.apiKey;

    var resourcePath = 'api/v2/access_token/googlejwt';

    return request(this.config, 'GET', resourcePath, queryParameters, null);
  }

  /**
   * The API is used to get LoginRadius access token by sending Linkedin's access token. It will be valid for the specific duration of time specified in the response.
   * @param {lnAccessToken} Linkedin Access Token
   * @param {socialAppName} Name of Social provider APP
   * @return Response containing Definition of Complete Token data
   *20.7
   */
  getAccessTokenByLinkedinAccessToken (lnAccessToken, socialAppName) {
    if (isNullOrWhiteSpace(lnAccessToken)) {
      return Promise.reject(getValidationMessage('lnAccessToken'));
    }
    var queryParameters: any = {};

    queryParameters.key = this.config.apiKey;
    queryParameters.ln_Access_Token = lnAccessToken;
    if (!isNullOrWhiteSpace(socialAppName)) {
      queryParameters.socialAppName = socialAppName;
    }

    var resourcePath = 'api/v2/access_token/linkedin';

    return request(this.config, 'GET', resourcePath, queryParameters, null);
  }

  /**
   * The API is used to get LoginRadius access token by sending Foursquare's access token. It will be valid for the specific duration of time specified in the response.
   * @param {fsAccessToken} Foursquare Access Token
   * @return Response containing Definition of Complete Token data
   *20.8
   */
  getAccessTokenByFoursquareAccessToken (fsAccessToken) {
    if (isNullOrWhiteSpace(fsAccessToken)) {
      return Promise.reject(getValidationMessage('fsAccessToken'));
    }
    var queryParameters: any = {};

    queryParameters.fs_Access_Token = fsAccessToken;
    queryParameters.key = this.config.apiKey;

    var resourcePath = 'api/v2/access_token/foursquare';

    return request(this.config, 'GET', resourcePath, queryParameters, null);
  }

  /**
   * The API is used to get LoginRadius access token by sending a valid Apple ID OAuth Code. It will be valid for the specific duration of time specified in the response.
   * @param {code} Apple Code
   * @param {socialAppName} Name of Social provider APP
   * @return Response containing Definition of Complete Token data
   *20.12
   */
  getAccessTokenByAppleIdCode (code, socialAppName) {
    if (isNullOrWhiteSpace(code)) {
      return Promise.reject(getValidationMessage('code'));
    }
    var queryParameters: any = {};

    queryParameters.code = code;
    queryParameters.key = this.config.apiKey;
    if (!isNullOrWhiteSpace(socialAppName)) {
      queryParameters.socialAppName = socialAppName;
    }

    var resourcePath = 'api/v2/access_token/apple';

    return request(this.config, 'GET', resourcePath, queryParameters, null);
  }

  /**
   * This API is used to retrieve a LoginRadius access token by passing in a valid WeChat OAuth Code.
   * @param {code} WeChat Code
   * @return Response containing Definition of Complete Token data
   *20.13
   */
  getAccessTokenByWeChatCode (code) {
    if (isNullOrWhiteSpace(code)) {
      return Promise.reject(getValidationMessage('code'));
    }
    var queryParameters: any = {};

    queryParameters.code = code;
    queryParameters.key = this.config.apiKey;

    var resourcePath = 'api/v2/access_token/wechat';

    return request(this.config, 'GET', resourcePath, queryParameters, null);
  }

  /**
   * The API is used to get LoginRadius access token by sending Google's AuthCode. It will be valid for the specific duration of time specified in the response.
   * @param {googleAuthcode} Google AuthCode
   * @param {socialAppName} Name of Social provider APP
   * @return Response containing Definition of Complete Token data
   *20.16
   */
  getAccessTokenByGoogleAuthCode (googleAuthcode, socialAppName) {
    if (isNullOrWhiteSpace(googleAuthcode)) {
      return Promise.reject(getValidationMessage('googleAuthcode'));
    }
    var queryParameters: any = {};

    queryParameters.apiKey = this.config.apiKey;
    queryParameters.google_authcode = googleAuthcode;
    if (!isNullOrWhiteSpace(socialAppName)) {
      queryParameters.socialAppName = socialAppName;
    }

    var resourcePath = 'api/v2/access_token/google';

    return request(this.config, 'GET', resourcePath, queryParameters, null);
  }
}

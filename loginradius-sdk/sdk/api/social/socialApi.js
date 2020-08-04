/*
 * Created by LoginRadius Development Team
   Copyright 2019 LoginRadius Inc. All rights reserved.
*/
module.exports = function (config) {
  var module = {};
  var helper = require(config.HELPER_PATH);

  /**
  * This API Is used to translate the Request Token returned during authentication into an Access Token that can be used with other API calls.
  * @param {token} Token generated from a successful oauth from social platform
  * @return Response containing Definition of Complete Token data
  *20.1
  */

  module.exchangeAccessToken = function (token) {
    if (helper.isNullOrWhiteSpace(token)) {
      return Promise.reject(helper.getValidationMessage('token'));
    }
    var queryParameters = {};

    queryParameters.secret = config.apiSecret;
    queryParameters.token = token;

    var resourcePath = 'api/v2/access_token';

    return config.request('GET', resourcePath, queryParameters, null);
  };

  /**
  * The Refresh Access Token API is used to refresh the provider access token after authentication. It will be valid for up to 60 days on LoginRadius depending on the provider. In order to use the access token in other APIs, always refresh the token using this API.<br><br><b>Supported Providers :</b> Facebook,Yahoo,Google,Twitter, Linkedin.<br><br> Contact LoginRadius support team to enable this API.
  * @param {accessToken} Uniquely generated identifier key by LoginRadius that is activated after successful authentication.
  * @param {expiresIn} Allows you to specify a desired expiration time in minutes for the newly issued access token.
  * @param {isWeb} Is web or not.
  * @return Response containing Definition of Complete Token data
  *20.2
  */

  module.refreshAccessToken = function (accessToken, expiresIn,
    isWeb) {
    if (helper.isNullOrWhiteSpace(accessToken)) {
      return Promise.reject(helper.getValidationMessage('accessToken'));
    }
    var queryParameters = {};

    queryParameters.access_token = accessToken;
    queryParameters.secret = config.apiSecret;
    if (expiresIn !== null) {
      queryParameters.expiresIn = expiresIn;
    }
    if (isWeb !== null) {
      queryParameters.isWeb = isWeb;
    }

    var resourcePath = 'api/v2/access_token/refresh';

    return config.request('GET', resourcePath, queryParameters, null);
  };

  /**
  * This API validates access token, if valid then returns a response with its expiry otherwise error.
  * @param {accessToken} Uniquely generated identifier key by LoginRadius that is activated after successful authentication.
  * @return Response containing Definition of Complete Token data
  *20.9
  */

  module.validateAccessToken = function (accessToken) {
    if (helper.isNullOrWhiteSpace(accessToken)) {
      return Promise.reject(helper.getValidationMessage('accessToken'));
    }
    var queryParameters = {};

    queryParameters.access_token = accessToken;
    queryParameters.key = config.apiKey;
    queryParameters.secret = config.apiSecret;

    var resourcePath = 'api/v2/access_token/validate';

    return config.request('GET', resourcePath, queryParameters, null);
  };

  /**
  * This api invalidates the active access token or expires an access token validity.
  * @param {accessToken} Uniquely generated identifier key by LoginRadius that is activated after successful authentication.
  * @return Response containing Definition for Complete Validation data
  *20.10
  */

  module.inValidateAccessToken = function (accessToken) {
    if (helper.isNullOrWhiteSpace(accessToken)) {
      return Promise.reject(helper.getValidationMessage('accessToken'));
    }
    var queryParameters = {};

    queryParameters.access_token = accessToken;
    queryParameters.key = config.apiKey;
    queryParameters.secret = config.apiSecret;

    var resourcePath = 'api/v2/access_token/invalidate';

    return config.request('GET', resourcePath, queryParameters, null);
  };

  /**
  * This api is use to get all active session by Access Token.
  * @param {token} Token generated from a successful oauth from social platform
  * @return Response containing Definition for Complete active sessions
  *20.11.1
  */

  module.getActiveSession = function (token) {
    if (helper.isNullOrWhiteSpace(token)) {
      return Promise.reject(helper.getValidationMessage('token'));
    }
    var queryParameters = {};

    queryParameters.key = config.apiKey;
    queryParameters.secret = config.apiSecret;
    queryParameters.token = token;

    var resourcePath = 'api/v2/access_token/activesession';

    return config.request('GET', resourcePath, queryParameters, null);
  };

  /**
  * This api is used to get all active sessions by AccountID(UID).
  * @param {accountId} UID, the unified identifier for each user account
  * @return Response containing Definition for Complete active sessions
  *20.11.2
  */

  module.getActiveSessionByAccountID = function (accountId) {
    if (helper.isNullOrWhiteSpace(accountId)) {
      return Promise.reject(helper.getValidationMessage('accountId'));
    }
    var queryParameters = {};

    queryParameters.accountId = accountId;
    queryParameters.key = config.apiKey;
    queryParameters.secret = config.apiSecret;

    var resourcePath = 'api/v2/access_token/activesession';

    return config.request('GET', resourcePath, queryParameters, null);
  };

  /**
  * This api is used to get all active sessions by ProfileId.
  * @param {profileId} Social Provider Id
  * @return Response containing Definition for Complete active sessions
  *20.11.3
  */

  module.getActiveSessionByProfileID = function (profileId) {
    if (helper.isNullOrWhiteSpace(profileId)) {
      return Promise.reject(helper.getValidationMessage('profileId'));
    }
    var queryParameters = {};

    queryParameters.key = config.apiKey;
    queryParameters.profileId = profileId;
    queryParameters.secret = config.apiSecret;

    var resourcePath = 'api/v2/access_token/activesession';

    return config.request('GET', resourcePath, queryParameters, null);
  };

  /**
  * <b>Supported Providers:</b> Facebook, Google, Live, Vkontakte.<br><br> This API returns the photo albums associated with the passed in access tokens Social Profile.
  * @param {accessToken} Uniquely generated identifier key by LoginRadius that is activated after successful authentication.
  * @return Response Containing List of Album Data
  *22.2.1
  */

  module.getAlbums = function (accessToken) {
    if (helper.isNullOrWhiteSpace(accessToken)) {
      return Promise.reject(helper.getValidationMessage('accessToken'));
    }
    var queryParameters = {};

    queryParameters.access_token = accessToken;

    var resourcePath = 'api/v2/album';

    return config.request('GET', resourcePath, queryParameters, null);
  };

  /**
  * <b>Supported Providers:</b> Facebook, Google, Live, Vkontakte.<br><br> This API returns the photo albums associated with the passed in access tokens Social Profile.
  * @param {accessToken} Uniquely generated identifier key by LoginRadius that is activated after successful authentication.
  * @param {nextCursor} Cursor value if not all contacts can be retrieved once.
  * @return Response Model containing Albums with next cursor
  *22.2.2
  */

  module.getAlbumsWithCursor = function (accessToken, nextCursor) {
    if (helper.isNullOrWhiteSpace(accessToken)) {
      return Promise.reject(helper.getValidationMessage('accessToken'));
    }
    if (helper.isNullOrWhiteSpace(nextCursor)) {
      return Promise.reject(helper.getValidationMessage('nextCursor'));
    }
    var queryParameters = {};

    queryParameters.access_token = accessToken;
    queryParameters.nextCursor = nextCursor;

    var resourcePath = 'api/v2/album';

    return config.request('GET', resourcePath, queryParameters, null);
  };

  /**
  * The Audio API is used to get audio files data from the user's social account.<br><br><b>Supported Providers:</b> Live, Vkontakte
  * @param {accessToken} Uniquely generated identifier key by LoginRadius that is activated after successful authentication.
  * @return Response Containing List of Audio Data
  *24.2.1
  */

  module.getAudios = function (accessToken) {
    if (helper.isNullOrWhiteSpace(accessToken)) {
      return Promise.reject(helper.getValidationMessage('accessToken'));
    }
    var queryParameters = {};

    queryParameters.access_token = accessToken;

    var resourcePath = 'api/v2/audio';

    return config.request('GET', resourcePath, queryParameters, null);
  };

  /**
  * The Audio API is used to get audio files data from the user's social account.<br><br><b>Supported Providers:</b> Live, Vkontakte
  * @param {accessToken} Uniquely generated identifier key by LoginRadius that is activated after successful authentication.
  * @param {nextCursor} Cursor value if not all contacts can be retrieved once.
  * @return Response Model containing Audio with next cursor
  *24.2.2
  */

  module.getAudiosWithCursor = function (accessToken, nextCursor) {
    if (helper.isNullOrWhiteSpace(accessToken)) {
      return Promise.reject(helper.getValidationMessage('accessToken'));
    }
    if (helper.isNullOrWhiteSpace(nextCursor)) {
      return Promise.reject(helper.getValidationMessage('nextCursor'));
    }
    var queryParameters = {};

    queryParameters.access_token = accessToken;
    queryParameters.nextCursor = nextCursor;

    var resourcePath = 'api/v2/audio';

    return config.request('GET', resourcePath, queryParameters, null);
  };

  /**
  * The Check In API is used to get check Ins data from the user's social account.<br><br><b>Supported Providers:</b> Facebook, Foursquare, Vkontakte
  * @param {accessToken} Uniquely generated identifier key by LoginRadius that is activated after successful authentication.
  * @return Response Containing List of CheckIn Data
  *25.2.1
  */

  module.getCheckIns = function (accessToken) {
    if (helper.isNullOrWhiteSpace(accessToken)) {
      return Promise.reject(helper.getValidationMessage('accessToken'));
    }
    var queryParameters = {};

    queryParameters.access_token = accessToken;

    var resourcePath = 'api/v2/checkin';

    return config.request('GET', resourcePath, queryParameters, null);
  };

  /**
  * The Check In API is used to get check Ins data from the user's social account.<br><br><b>Supported Providers:</b> Facebook, Foursquare, Vkontakte
  * @param {accessToken} Uniquely generated identifier key by LoginRadius that is activated after successful authentication.
  * @param {nextCursor} Cursor value if not all contacts can be retrieved once.
  * @return Response Model containing Checkins with next cursor
  *25.2.2
  */

  module.getCheckInsWithCursor = function (accessToken, nextCursor) {
    if (helper.isNullOrWhiteSpace(accessToken)) {
      return Promise.reject(helper.getValidationMessage('accessToken'));
    }
    if (helper.isNullOrWhiteSpace(nextCursor)) {
      return Promise.reject(helper.getValidationMessage('nextCursor'));
    }
    var queryParameters = {};

    queryParameters.access_token = accessToken;
    queryParameters.nextCursor = nextCursor;

    var resourcePath = 'api/v2/checkin';

    return config.request('GET', resourcePath, queryParameters, null);
  };

  /**
  * The Contact API is used to get contacts/friends/connections data from the user's social account.This is one of the APIs that makes up the LoginRadius Friend Invite System. The data will normalized into LoginRadius' standard data format. This API requires setting permissions in your LoginRadius Dashboard. <br><br><b>Note:</b> Facebook restricts access to the list of friends that is returned. When using the Contacts API with Facebook you will only receive friends that have accepted some permissions with your app. <br><br><b>Supported Providers:</b> Facebook, Foursquare, Google, LinkedIn, Live, Twitter, Vkontakte, Yahoo
  * @param {accessToken} Uniquely generated identifier key by LoginRadius that is activated after successful authentication.
  * @param {nextCursor} Cursor value if not all contacts can be retrieved once.
  * @return Response containing Definition of Contact Data with Cursor
  *27.1
  */

  module.getContacts = function (accessToken, nextCursor) {
    if (helper.isNullOrWhiteSpace(accessToken)) {
      return Promise.reject(helper.getValidationMessage('accessToken'));
    }
    var queryParameters = {};

    queryParameters.access_token = accessToken;
    if (!helper.isNullOrWhiteSpace(nextCursor)) {
      queryParameters.nextCursor = nextCursor;
    }

    var resourcePath = 'api/v2/contact';

    return config.request('GET', resourcePath, queryParameters, null);
  };

  /**
  * The Event API is used to get the event data from the user's social account.<br><br><b>Supported Providers:</b> Facebook, Live
  * @param {accessToken} Uniquely generated identifier key by LoginRadius that is activated after successful authentication.
  * @return Response Containing List of Events Data
  *28.2.1
  */

  module.getEvents = function (accessToken) {
    if (helper.isNullOrWhiteSpace(accessToken)) {
      return Promise.reject(helper.getValidationMessage('accessToken'));
    }
    var queryParameters = {};

    queryParameters.access_token = accessToken;

    var resourcePath = 'api/v2/event';

    return config.request('GET', resourcePath, queryParameters, null);
  };

  /**
  * The Event API is used to get the event data from the user's social account.<br><br><b>Supported Providers:</b> Facebook, Live
  * @param {accessToken} Uniquely generated identifier key by LoginRadius that is activated after successful authentication.
  * @param {nextCursor} Cursor value if not all contacts can be retrieved once.
  * @return Response Model containing Events with next cursor
  *28.2.2
  */

  module.getEventsWithCursor = function (accessToken, nextCursor) {
    if (helper.isNullOrWhiteSpace(accessToken)) {
      return Promise.reject(helper.getValidationMessage('accessToken'));
    }
    if (helper.isNullOrWhiteSpace(nextCursor)) {
      return Promise.reject(helper.getValidationMessage('nextCursor'));
    }
    var queryParameters = {};

    queryParameters.access_token = accessToken;
    queryParameters.nextCursor = nextCursor;

    var resourcePath = 'api/v2/event';

    return config.request('GET', resourcePath, queryParameters, null);
  };

  /**
  * Get the following user list from the user's social account.<br><br><b>Supported Providers:</b> Twitter
  * @param {accessToken} Uniquely generated identifier key by LoginRadius that is activated after successful authentication.
  * @return Response Containing List of Contacts Data
  *29.2.1
  */

  module.getFollowings = function (accessToken) {
    if (helper.isNullOrWhiteSpace(accessToken)) {
      return Promise.reject(helper.getValidationMessage('accessToken'));
    }
    var queryParameters = {};

    queryParameters.access_token = accessToken;

    var resourcePath = 'api/v2/following';

    return config.request('GET', resourcePath, queryParameters, null);
  };

  /**
  * Get the following user list from the user's social account.<br><br><b>Supported Providers:</b> Twitter
  * @param {accessToken} Uniquely generated identifier key by LoginRadius that is activated after successful authentication.
  * @param {nextCursor} Cursor value if not all contacts can be retrieved once.
  * @return Response containing Definition of Contact Data with Cursor
  *29.2.2
  */

  module.getFollowingsWithCursor = function (accessToken, nextCursor) {
    if (helper.isNullOrWhiteSpace(accessToken)) {
      return Promise.reject(helper.getValidationMessage('accessToken'));
    }
    if (helper.isNullOrWhiteSpace(nextCursor)) {
      return Promise.reject(helper.getValidationMessage('nextCursor'));
    }
    var queryParameters = {};

    queryParameters.access_token = accessToken;
    queryParameters.nextCursor = nextCursor;

    var resourcePath = 'api/v2/following';

    return config.request('GET', resourcePath, queryParameters, null);
  };

  /**
  * The Group API is used to get group data from the user's social account.<br><br><b>Supported Providers:</b> Facebook, Vkontakte
  * @param {accessToken} Uniquely generated identifier key by LoginRadius that is activated after successful authentication.
  * @return Response Containing List of Groups Data
  *30.2.1
  */

  module.getGroups = function (accessToken) {
    if (helper.isNullOrWhiteSpace(accessToken)) {
      return Promise.reject(helper.getValidationMessage('accessToken'));
    }
    var queryParameters = {};

    queryParameters.access_token = accessToken;

    var resourcePath = 'api/v2/group';

    return config.request('GET', resourcePath, queryParameters, null);
  };

  /**
  * The Group API is used to get group data from the user's social account.<br><br><b>Supported Providers:</b> Facebook, Vkontakte
  * @param {accessToken} Uniquely generated identifier key by LoginRadius that is activated after successful authentication.
  * @param {nextCursor} Cursor value if not all contacts can be retrieved once.
  * @return Response Model containing Groups with next cursor
  *30.2.2
  */

  module.getGroupsWithCursor = function (accessToken, nextCursor) {
    if (helper.isNullOrWhiteSpace(accessToken)) {
      return Promise.reject(helper.getValidationMessage('accessToken'));
    }
    if (helper.isNullOrWhiteSpace(nextCursor)) {
      return Promise.reject(helper.getValidationMessage('nextCursor'));
    }
    var queryParameters = {};

    queryParameters.access_token = accessToken;
    queryParameters.nextCursor = nextCursor;

    var resourcePath = 'api/v2/group';

    return config.request('GET', resourcePath, queryParameters, null);
  };

  /**
  * The Like API is used to get likes data from the user's social account.<br><br><b>Supported Providers:</b> Facebook
  * @param {accessToken} Uniquely generated identifier key by LoginRadius that is activated after successful authentication.
  * @return Response Containing List of Likes Data
  *31.2.1
  */

  module.getLikes = function (accessToken) {
    if (helper.isNullOrWhiteSpace(accessToken)) {
      return Promise.reject(helper.getValidationMessage('accessToken'));
    }
    var queryParameters = {};

    queryParameters.access_token = accessToken;

    var resourcePath = 'api/v2/like';

    return config.request('GET', resourcePath, queryParameters, null);
  };

  /**
  * The Like API is used to get likes data from the user's social account.<br><br><b>Supported Providers:</b> Facebook
  * @param {accessToken} Uniquely generated identifier key by LoginRadius that is activated after successful authentication.
  * @param {nextCursor} Cursor value if not all contacts can be retrieved once.
  * @return Response Model containing Likes with next cursor
  *31.2.2
  */

  module.getLikesWithCursor = function (accessToken, nextCursor) {
    if (helper.isNullOrWhiteSpace(accessToken)) {
      return Promise.reject(helper.getValidationMessage('accessToken'));
    }
    if (helper.isNullOrWhiteSpace(nextCursor)) {
      return Promise.reject(helper.getValidationMessage('nextCursor'));
    }
    var queryParameters = {};

    queryParameters.access_token = accessToken;
    queryParameters.nextCursor = nextCursor;

    var resourcePath = 'api/v2/like';

    return config.request('GET', resourcePath, queryParameters, null);
  };

  /**
  * The Mention API is used to get mentions data from the user's social account.<br><br><b>Supported Providers:</b> Twitter
  * @param {accessToken} Uniquely generated identifier key by LoginRadius that is activated after successful authentication.
  * @return Response Containing List of Status Data
  *32.1
  */

  module.getMentions = function (accessToken) {
    if (helper.isNullOrWhiteSpace(accessToken)) {
      return Promise.reject(helper.getValidationMessage('accessToken'));
    }
    var queryParameters = {};

    queryParameters.access_token = accessToken;

    var resourcePath = 'api/v2/mention';

    return config.request('GET', resourcePath, queryParameters, null);
  };

  /**
  * Post Message API is used to post messages to the user's contacts.<br><br><b>Supported Providers:</b> Twitter, LinkedIn <br><br>The Message API is used to post messages to the user?s contacts. This is one of the APIs that makes up the LoginRadius Friend Invite System. After using the Contact API, you can send messages to the retrieved contacts. This API requires setting permissions in your LoginRadius Dashboard.<br><br>GET & POST Message API work the same way except the API method is different
  * @param {accessToken} Uniquely generated identifier key by LoginRadius that is activated after successful authentication.
  * @param {message} Body of your message
  * @param {subject} Subject of your message
  * @param {to} Recipient's social provider's id
  * @return Response containing Definition for Complete Validation data
  *33.1
  */

  module.postMessage = function (accessToken, message,
    subject, to) {
    if (helper.isNullOrWhiteSpace(accessToken)) {
      return Promise.reject(helper.getValidationMessage('accessToken'));
    }
    if (helper.isNullOrWhiteSpace(message)) {
      return Promise.reject(helper.getValidationMessage('message'));
    }
    if (helper.isNullOrWhiteSpace(subject)) {
      return Promise.reject(helper.getValidationMessage('subject'));
    }
    if (helper.isNullOrWhiteSpace(to)) {
      return Promise.reject(helper.getValidationMessage('to'));
    }
    var queryParameters = {};

    queryParameters.access_token = accessToken;
    queryParameters.message = message;
    queryParameters.subject = subject;
    queryParameters.to = to;

    var resourcePath = 'api/v2/message';

    return config.request('POST', resourcePath, queryParameters, null);
  };

  /**
  * The Page API is used to get the page data from the user's social account.<br><br><b>Supported Providers:</b>  Facebook, LinkedIn
  * @param {accessToken} Uniquely generated identifier key by LoginRadius that is activated after successful authentication.
  * @param {pageName} Name of the page you want to retrieve info from
  * @return Response containing Definition of Complete page data
  *34.1
  */

  module.getPage = function (accessToken, pageName) {
    if (helper.isNullOrWhiteSpace(accessToken)) {
      return Promise.reject(helper.getValidationMessage('accessToken'));
    }
    if (helper.isNullOrWhiteSpace(pageName)) {
      return Promise.reject(helper.getValidationMessage('pageName'));
    }
    var queryParameters = {};

    queryParameters.access_token = accessToken;
    queryParameters.pageName = pageName;

    var resourcePath = 'api/v2/page';

    return config.request('GET', resourcePath, queryParameters, null);
  };

  /**
  * The Photo API is used to get photo data from the user's social account.<br><br><b>Supported Providers:</b>  Facebook, Foursquare, Google, Live, Vkontakte
  * @param {accessToken} Uniquely generated identifier key by LoginRadius that is activated after successful authentication.
  * @param {albumId} The id of the album you want to retrieve info from
  * @return Response Containing List of Photos Data
  *35.1
  */

  module.getPhotos = function (accessToken, albumId) {
    if (helper.isNullOrWhiteSpace(accessToken)) {
      return Promise.reject(helper.getValidationMessage('accessToken'));
    }
    if (helper.isNullOrWhiteSpace(albumId)) {
      return Promise.reject(helper.getValidationMessage('albumId'));
    }
    var queryParameters = {};

    queryParameters.access_token = accessToken;
    queryParameters.albumId = albumId;

    var resourcePath = 'api/v2/photo';

    return config.request('GET', resourcePath, queryParameters, null);
  };

  /**
  * The Post API is used to get post message data from the user's social account.<br><br><b>Supported Providers:</b>  Facebook
  * @param {accessToken} Uniquely generated identifier key by LoginRadius that is activated after successful authentication.
  * @return Response Containing List of Posts Data
  *36.1
  */

  module.getPosts = function (accessToken) {
    if (helper.isNullOrWhiteSpace(accessToken)) {
      return Promise.reject(helper.getValidationMessage('accessToken'));
    }
    var queryParameters = {};

    queryParameters.access_token = accessToken;

    var resourcePath = 'api/v2/post';

    return config.request('GET', resourcePath, queryParameters, null);
  };

  /**
  * The Status API is used to update the status on the user's wall.<br><br><b>Supported Providers:</b>  Facebook, Twitter, LinkedIn
  * @param {accessToken} Uniquely generated identifier key by LoginRadius that is activated after successful authentication.
  * @param {caption} Message displayed below the description(Requires URL, Under 70 Characters).
  * @param {description} Description of the displayed URL and Image(Requires URL)
  * @param {imageurl} Image to be displayed in the share(Requires URL).
  * @param {status} Main body of the Status update.
  * @param {title} Title of Linked URL
  * @param {url} URL to be included when clicking on the share.
  * @param {shorturl} short url
  * @return Response conatining Definition of Validation and Short URL data
  *37.2
  */

  module.statusPosting = function (accessToken, caption,
    description, imageurl, status, title, url,
    shorturl) {
    if (helper.isNullOrWhiteSpace(accessToken)) {
      return Promise.reject(helper.getValidationMessage('accessToken'));
    }
    if (helper.isNullOrWhiteSpace(caption)) {
      return Promise.reject(helper.getValidationMessage('caption'));
    }
    if (helper.isNullOrWhiteSpace(description)) {
      return Promise.reject(helper.getValidationMessage('description'));
    }
    if (helper.isNullOrWhiteSpace(imageurl)) {
      return Promise.reject(helper.getValidationMessage('imageurl'));
    }
    if (helper.isNullOrWhiteSpace(status)) {
      return Promise.reject(helper.getValidationMessage('status'));
    }
    if (helper.isNullOrWhiteSpace(title)) {
      return Promise.reject(helper.getValidationMessage('title'));
    }
    if (helper.isNullOrWhiteSpace(url)) {
      return Promise.reject(helper.getValidationMessage('url'));
    }
    var queryParameters = {};

    queryParameters.access_token = accessToken;
    queryParameters.caption = caption;
    queryParameters.description = description;
    queryParameters.imageurl = imageurl;
    queryParameters.status = status;
    queryParameters.title = title;
    queryParameters.url = url;
    if (!helper.isNullOrWhiteSpace(shorturl)) {
      queryParameters.shorturl = shorturl;
    }

    var resourcePath = 'api/v2/status';

    return config.request('POST', resourcePath, queryParameters, null);
  };

  /**
  * The Trackable status API works very similar to the Status API but it returns a Post id that you can use to track the stats(shares, likes, comments) for a specific share/post/status update. This API requires setting permissions in your LoginRadius Dashboard.<br><br> The Trackable Status API is used to update the status on the user's wall and return an Post ID value. It is commonly referred to as Permission based sharing or Push notifications.<br><br> POST Input Parameter Format: application/x-www-form-urlencoded
  * @param {accessToken} Uniquely generated identifier key by LoginRadius that is activated after successful authentication.
  * @param {statusModel} Model Class containing Definition of payload for Status API
  * @return Response containing Definition for Complete status data
  *37.6
  */

  module.trackableStatusPosting = function (accessToken, statusModel) {
    if (helper.isNullOrWhiteSpace(accessToken)) {
      return Promise.reject(helper.getValidationMessage('accessToken'));
    }
    if (helper.checkJson(statusModel)) {
      return Promise.reject(helper.getValidationMessage('statusModel'));
    }
    var queryParameters = {};

    queryParameters.access_token = accessToken;

    var resourcePath = 'api/v2/status/trackable';

    return config.request('POST', resourcePath, queryParameters, statusModel);
  };

  /**
  * The Trackable status API works very similar to the Status API but it returns a Post id that you can use to track the stats(shares, likes, comments) for a specific share/post/status update. This API requires setting permissions in your LoginRadius Dashboard.<br><br> The Trackable Status API is used to update the status on the user's wall and return an Post ID value. It is commonly referred to as Permission based sharing or Push notifications.
  * @param {accessToken} Uniquely generated identifier key by LoginRadius that is activated after successful authentication.
  * @param {caption} Message displayed below the description(Requires URL, Under 70 Characters).
  * @param {description} Description of the displayed URL and Image(Requires URL)
  * @param {imageurl} Image to be displayed in the share(Requires URL).
  * @param {status} Main body of the Status update.
  * @param {title} Title of Linked URL
  * @param {url} URL to be included when clicking on the share.
  * @return Response containing Definition for Complete status data
  *37.7
  */

  module.getTrackableStatusStats = function (accessToken, caption,
    description, imageurl, status, title, url) {
    if (helper.isNullOrWhiteSpace(accessToken)) {
      return Promise.reject(helper.getValidationMessage('accessToken'));
    }
    if (helper.isNullOrWhiteSpace(caption)) {
      return Promise.reject(helper.getValidationMessage('caption'));
    }
    if (helper.isNullOrWhiteSpace(description)) {
      return Promise.reject(helper.getValidationMessage('description'));
    }
    if (helper.isNullOrWhiteSpace(imageurl)) {
      return Promise.reject(helper.getValidationMessage('imageurl'));
    }
    if (helper.isNullOrWhiteSpace(status)) {
      return Promise.reject(helper.getValidationMessage('status'));
    }
    if (helper.isNullOrWhiteSpace(title)) {
      return Promise.reject(helper.getValidationMessage('title'));
    }
    if (helper.isNullOrWhiteSpace(url)) {
      return Promise.reject(helper.getValidationMessage('url'));
    }
    var queryParameters = {};

    queryParameters.access_token = accessToken;
    queryParameters.caption = caption;
    queryParameters.description = description;
    queryParameters.imageurl = imageurl;
    queryParameters.status = status;
    queryParameters.title = title;
    queryParameters.url = url;

    var resourcePath = 'api/v2/status/trackable/js';

    return config.request('GET', resourcePath, queryParameters, null);
  };

  /**
  * The Trackable status API works very similar to the Status API but it returns a Post id that you can use to track the stats(shares, likes, comments) for a specific share/post/status update. This API requires setting permissions in your LoginRadius Dashboard.<br><br> This API is used to retrieve a tracked post based on the passed in post ID value. This API requires setting permissions in your LoginRadius Dashboard.<br><br> <b>Note:</b> To utilize this API you need to find the ID for the post you want to track, which might require using Trackable Status Posting API first.
  * @param {postId} Post ID value
  * @return Response containing Definition of Complete Status Update data
  *37.8
  */

  module.trackableStatusFetching = function (postId) {
    if (helper.isNullOrWhiteSpace(postId)) {
      return Promise.reject(helper.getValidationMessage('postId'));
    }
    var queryParameters = {};

    queryParameters.postId = postId;
    queryParameters.secret = config.apiSecret;

    var resourcePath = 'api/v2/status/trackable';

    return config.request('GET', resourcePath, queryParameters, null);
  };

  /**
  * The User Profile API is used to get social profile data from the user's social account after authentication.<br><br><b>Supported Providers:</b>  All
  * @param {accessToken} Uniquely generated identifier key by LoginRadius that is activated after successful authentication.
  * @param {fields} The fields parameter filters the API response so that the response only includes a specific set of fields
  * @return Response containing Definition for Complete UserProfile data
  *38.1
  */

  module.getSocialUserProfile = function (accessToken, fields) {
    if (helper.isNullOrWhiteSpace(accessToken)) {
      return Promise.reject(helper.getValidationMessage('accessToken'));
    }
    var queryParameters = {};

    queryParameters.access_token = accessToken;
    if (!helper.isNullOrWhiteSpace(fields)) {
      queryParameters.fields = fields;
    }

    var resourcePath = 'api/v2/userprofile';

    return config.request('GET', resourcePath, queryParameters, null);
  };

  /**
  * The User Profile API is used to get the latest updated social profile data from the user's social account after authentication. The social profile will be retrieved via oAuth and OpenID protocols. The data is normalized into LoginRadius' standard data format. This API should be called using the access token retrieved from the refresh access token API.
  * @param {accessToken} Uniquely generated identifier key by LoginRadius that is activated after successful authentication.
  * @param {fields} The fields parameter filters the API response so that the response only includes a specific set of fields
  * @return Response containing Definition for Complete UserProfile data
  *38.2
  */

  module.getRefreshedSocialUserProfile = function (accessToken, fields) {
    if (helper.isNullOrWhiteSpace(accessToken)) {
      return Promise.reject(helper.getValidationMessage('accessToken'));
    }
    var queryParameters = {};

    queryParameters.access_token = accessToken;
    if (!helper.isNullOrWhiteSpace(fields)) {
      queryParameters.fields = fields;
    }

    var resourcePath = 'api/v2/userprofile/refresh';

    return config.request('GET', resourcePath, queryParameters, null);
  };

  /**
  * The Video API is used to get video files data from the user's social account.<br><br><b>Supported Providers:</b>   Facebook, Google, Live, Vkontakte
  * @param {accessToken} Uniquely generated identifier key by LoginRadius that is activated after successful authentication.
  * @param {nextCursor} Cursor value if not all contacts can be retrieved once.
  * @return Response containing Definition of Video Data with Cursor
  *39.2
  */

  module.getVideos = function (accessToken, nextCursor) {
    if (helper.isNullOrWhiteSpace(accessToken)) {
      return Promise.reject(helper.getValidationMessage('accessToken'));
    }
    if (helper.isNullOrWhiteSpace(nextCursor)) {
      return Promise.reject(helper.getValidationMessage('nextCursor'));
    }
    var queryParameters = {};

    queryParameters.access_token = accessToken;
    queryParameters.nextCursor = nextCursor;

    var resourcePath = 'api/v2/video';

    return config.request('GET', resourcePath, queryParameters, null);
  };
  return module;
};

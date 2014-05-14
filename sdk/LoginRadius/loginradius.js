var request = require('request');
var URI = require('url');

var apiDomain = 'api.loginradius.com';


/**The Access Token API is used to get the LoginRadius access token after authentication. It will be valid for the specific duration of time specified in the response.
* @name getAccessToken
* @function  
* @public
* @param token {String} A valid session token, which is added to redirect uri of your website after successfully logged in to provider
* @param secret {String} A unique secret key, which is provided by LoginRadius on your Site manage page
* @param handle {CallbackHandler} callback handler, invoke after getting Userprofile from LoginRadius 
*/
exports.getAccessToken = function (token, secret, handle) {
    httpGetRequest("https://" + apiDomain + "/api/v2/access_token?token=" + token + "&secret=" + secret, function (data) {
        handle(data);
    });
};


/**The User Profile API is used to get social profile data from the user’s social account after authentication. The social profile will be retrieved via oAuth and OpenID protocols. The data is normalized into LoginRadius' standard data format.
* @name getUserprofile
* @function 
* @public
* @param access_token {String} A valid session token,which is fetch from Access Token API
* @param handle {CallbackHandler} callback handler, invoke after getting Userprofile from LoginRadius 
*/
exports.getUserprofile = function (access_token, handle) {
    httpGetRequest("https://" + apiDomain + "/api/v2/userprofile?access_token=" + access_token, function (data) {
        handle(data);
    });
};



/**The photo API is used to get photo data from the user’s social account. The data will be normalized into LoginRadius' data format.
* @name getPhotos
* @function 
* @public
* @param access_token {String} A valid session token,which is fetch from Access Token API.
* @param albumId {String} A valid albumId, it return album photos
* @param handle {CallbackHandler} callback handler, invoke after getting Userprofile from LoginRadius 
*/
exports.getPhotos = function (access_token, albumId, handle) {
    httpGetRequest("https://" + apiDomain + "/api/v2/photo?access_token=" + access_token + "&albumid=" + albumId, function (data) {
        handle(data);
    });
};

/**The Check In API is used to get check-ins data from the user’s social account. The data will be normalized into LoginRadius' data format.
* @name getCheckins
* @function 
* @public
* @param access_token {String} A valid session token,which is fetch from Access Token API.
* @param handle {CallbackHandler} callback handler, invoke after getting Userprofile from LoginRadius 
*/
exports.getCheckins = function (access_token, handle) {
    httpGetRequest("https://" + apiDomain + "/api/v2/checkin?access_token=" + access_token, function (data) {
        handle(data);
    });
};



/**The Albums API is used to get the Albums data from the user’s social account. The data will be normalized into LoginRadius' data format.
* @name getAlbums
* @function 
* @public
* @param access_token {String} A valid session token,which is fetch from Access Token API.
* @param handle {CallbackHandler} callback handler, invoke after getting Userprofile from LoginRadius 
*/
exports.getAlbums = function (access_token, handle) {
    httpGetRequest("https://" + apiDomain + "/api/v2/album?access_token=" + access_token, function (data) {
        handle(data);
    });
};


/**The Audio API is used to get audio files data from the user’s social account. The data will be normalized into LoginRadius' data format.
* @name getAudios
* @function 
* @public
* @param access_token {String} A valid session token,which is fetch from Access Token API.
* @param handle {CallbackHandler} callback handler, invoke after getting Userprofile from LoginRadius 
*/
exports.getAudios = function (access_token, handle) {
    httpGetRequest("https://" + apiDomain + "/api/v2/audio?access_token=" + access_token, function (data) {
        handle(data);
    });
};


/**The Mention API is used to get mention data from the user’s social account. The data will be normalized into LoginRadius' data format.
* @name getMentions
* @function  
* @public
* @param access_token {String} A valid session token,which is fetch from Access Token API.
* @param handle {CallbackHandler} callback handler, invoke after getting Userprofile from LoginRadius 
*/
exports.getMentions = function (access_token, handle) {
    httpGetRequest("https://" + apiDomain + "/api/v2/mention?access_token=" + access_token, function (data) {
        handle(data);
    });
};


/**The Following API is used to get the followers’ information from the user’s social account. The data will be normalized into LoginRadius' data format.
* @name getFollowings
* @function 
* @public
* @param access_token {String} A valid session token,which is fetch from Access Token API.
* @param handle {CallbackHandler} callback handler, invoke after getting Userprofile from LoginRadius 
*/
exports.getFollowings = function (access_token, handle) {
    httpGetRequest("https://" + apiDomain + "/api/v2/following?access_token=" + access_token, function (data) {
        handle(data);
    });
};


/**The Event API is used to get the event data from the user’s social account. The data will be normalized into LoginRadius' data format.
* @name getEvents
* @function 
* @public
* @param access_token {String} A valid session token,which is fetch from Access Token API.
* @param handle {CallbackHandler} callback handler, invoke after getting Userprofile from LoginRadius 
*/
exports.getEvents = function (access_token, handle) {
    httpGetRequest("https://" + apiDomain + "/api/v2/event?access_token=" + access_token, function (data) {
        handle(data);
    });
};


/**The Post API is used to get posted messages from the user’s social account. The data will be normalized into LoginRadius' data format.
* @name getPosts
* @function 
* @public
* @param access_token {String} A valid session token,which is fetch from Access Token API.
* @param handle {CallbackHandler} callback handler, invoke after getting Userprofile from LoginRadius 
*/
exports.getPosts = function (access_token, handle) {
    httpGetRequest("https://" + apiDomain + "/api/v2/post?access_token=" + access_token, function (data) {
        handle(data);
    });
};


/**The Company API is used to get the followed company’s data in the user’s social account. The data will be normalized into LoginRadius' data format.
* @name getCompanies
* @function 
* @public
* @param access_token {String} A valid session token,which is fetch from Access Token API.
* @param handle {CallbackHandler} callback handler, invoke after getting Userprofile from LoginRadius 
*/
exports.getCompanies = function (access_token, handle) {
    httpGetRequest("https://" + apiDomain + "/api/v2/company?access_token=" + access_token, function (data) {
        handle(data);
    });
};


/**The Group API is used to get group data from the user’s social account. The data will be normalized into LoginRadius' data format.
* @name getGroups
* @function 
* @public
* @param access_token {String} A valid session token,which is fetch from Access Token API.
* @param handle {CallbackHandler} callback handler, invoke after getting Userprofile from LoginRadius 
*/
exports.getGroups = function (access_token, handle) {
    httpGetRequest("https://" + apiDomain + "/api/v2/group?access_token=" + access_token, function (data) {
        handle(data);
    });
};


/**The Status API is used to get the status messages from the user’s social account. The data will be normalized into LoginRadius' data format.
* @name getStatuses
* @function 
* @public
* @param access_token {String} A valid session token,which is fetch from Access Token API.
* @param handle {CallbackHandler} callback handler, invoke after getting Userprofile from LoginRadius 
*/
exports.getStatuses = function (access_token, handle) {
    httpGetRequest("https://" + apiDomain + "/api/v2/status?access_token=" + access_token, function (data) {
        handle(data);
    });
};


/**The Contact API is used to get contacts/friends/connections data from the user’s social account. The data will normalized into LoginRadius' data format.
* @name getContacts
* @function 
* @public
* @param access_token {String} A valid session token,which is fetch from Access Token API.
* @param Curser {int} value for getting next records set
* @param handle {CallbackHandler} callback handler, invoke after getting Userprofile from LoginRadius 
*/
exports.getContacts = function (access_token, cursor, handle) {
    httpGetRequest("https://" + apiDomain + "/api/v2/contact?access_token=" + access_token + "&cursor=" + cursor, function (data) {
        handle(data);
    });
};



/**The Video API is used to get videos data from the user’s social account. The data will be normalized into LoginRadius' data format.
* @name getVideos
* @function 
* @public
* @param access_token {String} A valid session token,which is fetch from Access Token API.
* @param handle {CallbackHandler} callback handler, invoke after getting Userprofile from LoginRadius 
*/
exports.getVideos = function (access_token, handle) {
    httpGetRequest("https://" + apiDomain + "/api/v2/video?access_token=" + access_token, function (data) {
        handle(data);
    });
};


/**The Likes API is used to get likes data from the user’s social account. The data will be normalized into LoginRadius' data format.
* @name getLikes
* @function 
* @public
* @param access_token {String} A valid session token,which is fetch from Access Token API.
* @param handle {CallbackHandler} callback handler, invoke after getting Userprofile from LoginRadius 
*/
exports.getLikes = function (access_token, handle) {
    httpGetRequest("https://" + apiDomain + "/api/v2/like?access_token=" + access_token, function (data) {
        handle(data);
    });
};


/**This API is used to update the status on the user’s wall.
* @name postStatus
* @function  
* @public
* @param access_token {String} A valid session token,which is fetch from Access Token API.
* @param title {String} title for status message.
* @param url {String} A web link of the status message
* @param status {String} The status message text
* @param imageurl {String} An image URL of the status message
* @param caption {String} A caption of the status message
* @param description {String} A description of the status message
* @param handle {CallbackHandler} callback handler, invoke after getting Userprofile from LoginRadius 
*/
exports.postStatus = function (access_token, title, url, status, imageurl, caption, description, handle) {
    httpGetRequest("https://" + apiDomain + "/api/v2/status/js?access_token=" + access_token + "&title=" + title + "&url=" + url + "&imageurl=" + imageurl + "&status=" + status + "&caption=" + caption + "&description=" + description, function (data) {
        handle(data);
    });
};


/**The Message API is used to post messages to the user’s contacts. After using the Contact API, you can send messages to the retrieved contacts.
* @name postMessage
* @function 
* @public
* @param access_token {String} A valid session token,which is fetch from Access Token API.
* @param to {String} A valid friend id to send the message, it would be fetched from the contacts list
* @param subject {String} The subject of the message to be send
* @param message {String} The details of the message to be send
* @param handle {CallbackHandler} callback handler, invoke after getting Userprofile from LoginRadius 
*/
exports.postMessage = function (access_token, to, subject, message, handle) {
    httpGetRequest("https://" + apiDomain + "/api/v2/message/js?access_token=" + access_token + "&to=" + to + "&subject=" + subject + "&message=" + message, function (data) {
        handle(data);
    });
};

function httpGetRequest(url, handle) {
    request({ uri: url, headers: { 'User-Agent': 'Nodejs-SDK/2.0 (Nodejs ' + process.versions.node + '; ' + process.platform + ';+5.30;)'} }, function (error, res, body) {
        handle(JSON.parse(body));
    });
}
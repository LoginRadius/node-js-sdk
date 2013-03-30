var request = require('request');
var URI = require('url');

var endpointdomain = 'hub.loginradius.com';
var schema ='https';

/** callback handler, excutes after successfully get data
* @name CallbackHandler
* @function
* @param {Boolean} is sucessfully received data (or authorized to get data)
* @param {String} received data from LoginRadius API
*/

/** LoginRadius Authentication function
 * @function
 * @public
 * @param token {String} Authentication token 
 * @param secret {String} LoginRadius API Secret
 * @param handle {CallbackHandler} callback handler, redirects to after successfully get user profile
 */
exports.socialAuthentication = function (token, secret, handle) {
	var url = schema +'://' + endpointdomain + '/userprofile.ashx?token=' + token + '&apisecrete=' + secret;

	httpGetRequest(url, handle);
}

/** function is use to get User's contacts. It returns contacts in the List format
 * @function
 * @public
 * @param token {String} Authentication token 
 * @param secret {String} LoginRadius API Secret
 * @param handle {CallbackHandler} callback handler, redirects to after successfully get contacts
 */
exports.getUserContacts = function (token, secret, handle) {
    var url = schema + '://' + endpointdomain + '/contacts/' + secret + '/' + token;
    handle(true, url);
    //httpGetRequest(url, handle);
}

/** function is use to get User's Events from their Facebook profile
 * @function
 * @public
 * @param token {String} Authentication token 
 * @param secret {String} LoginRadius API Secret
 * @param handle {CallbackHandler} callback handler, redirects to after successfully get events
 */
exports.getEvents = function (token, secret, handle) {
	var url = schema +'://' + endpointdomain + '/getevents/' + secret + '/' + token;

	httpGetRequest(url, handle);
}

/** function is use to get User's Groups in list format
 * @function
 * @public
 * @param token {String} Authentication token 
 * @param secret {String} LoginRadius API Secret
 * @param handle {CallbackHandler} callback handler, redirects to after successfully get groups
 */
exports.getGroups = function (token, secret, handle) {
	var url = schema +'://' + endpointdomain + '/getgroups/' + secret + '/' + token;

	httpGetRequest(url, handle);
}

/** function is use to send direct message
 * @function
 * @public
 * @param token {String} Authentication token 
 * @param secret {String} LoginRadius API Secret
 * @param sendto {String} friends id to send message
 * @param subject {String} subject of message
 * @param message {String} body of message
 * @param handle {CallbackHandler} callback handler, redirects to after successfully send direct message
 */
exports.sendDirectMessage = function (token, secret, sendto, subject, message, handle) {
	var url = schema +'://' + endpointdomain + '/directmessage/' + secret + '/' + token + '?sendto=' + encodeURIComponent(sendto) + '&subject=' + encodeURIComponent(subject) + '&message=' + encodeURIComponent(message);

	httpGetRequest(url, handle);
}

/** function is use to post/update status on user's facebook wall
 * @function
 * @public
 * @param token {String} Authentication token 
 * @param secret {String} LoginRadius API Secret
 * @param parameters {Object} object of string properties 
 * @param handle {CallbackHandler} callback handler, redirects to after successfully post/update status
 */
exports.setStatusMessage = function (token, secret, parameters, handle) {
	var url = schema +'://' + endpointdomain + '/status/update/' + secret + '/' + token + '?to=' + encodeURIComponent(parameters.to) + '&title=' + encodeURIComponent(parameters.title) + '&url=' + encodeURIComponent(parameters.url) + '&imageurl=' + encodeURIComponent(parameters.imageurl) + '&status=' + encodeURIComponent(parameters.status) + '&caption=' + encodeURIComponent(parameters.caption) + '&description=' + encodeURIComponent(parameters.description);

	httpGetRequest(url, handle);
}


/** function is use to get User Status messages
 * @function
 * @public
 * @param token {tokenString} Authentication token 
 * @param secret {String} LoginRadius API Secret
 * @param handle {CallbackHandler} callback handler, redirects to after successfully get User status messages
 */
exports.getStatusMessages = function (token, secret, handle) {
	var url = schema +'://' + endpointdomain + '/status/get/' + secret + '/' + token;

	httpGetRequest(url, handle);
}

/** function is use to get user's Mentions from Twitter
 * @function
 * @public
 * @param token {String} Authentication token 
 * @param secret {String} LoginRadius API Secret
 * @param handle {CallbackHandler} callback handler, redirects to after successfully get user's mentions from Twitter
 */
exports.getMentions = function (token, secret, handle) {
	var url = schema +'://' + endpointdomain + '/status/mentions/' + secret + '/' + token;

	httpGetRequest(url, handle);
}

/** function is use to get user's TimeLine
 * @function
 * @public
 * @param token {String} Authentication token 
 * @param secret {String} LoginRadius API Secret
 * @param handle {CallbackHandler} callback handler, redirects to after successfully get User's TimeLine
 */
exports.getTimelineFeed = function (token, secret, handle) {
	var url = schema +'://' + endpointdomain + '/status/timeline/' + secret + '/' + token;

	httpGetRequest(url, handle);
}

/** function is use to get User's Posts in list format
 * @function
 * @public
 * @param token {String} Authentication token 
 * @param secret {String} LoginRadius API Secret
 * @param handle {CallbackHandler} callback handler, redirects to after successfully get User's Posts
 */
exports.getPosts = function (token, secret, handle) {
	var url = schema +'://' + endpointdomain + '/getposts/' + secret + '/' + token;

	httpGetRequest(url, handle);
}

/** function is use to get user's followed companies from LinkedIn in list format
 * @function
 * @public
 * @param token {String} Authentication token 
 * @param secret {String} LoginRadius API Secret
 * @param handle {CallbackHandler} callback handler, redirects to after successfully get user's followed companies
 */
exports.getCompanies = function (token, secret, handle) {
	var url = schema +'://' + endpointdomain + '/getcompany/' + secret + '/' + token;

	httpGetRequest(url, handle);
}

/** function is use to get user's raw (as provider return) user profile
 * @function
 * @public
 * @param token {String} Authentication token 
 * @param secret {String} LoginRadius API Secret
 * @param handle {CallbackHandler} callback handler, redirects to after successfully get user's raw user profile
 */
exports.getRawUserprofile = function (token, secret, handle) {
	var url = schema +'://' + endpointdomain + '/rawuserprofile/' + secret + '/' + token;

	httpGetRequest(url, handle);
}

/** function is use to do HTTP GET request
 * @function
 * @public
 * @param url {String} Url/Endpoint to make request
 * @param handle {CallbackHandler} callback handler, redirets to after successfully get response
 */
function httpGetRequest(url, handle) {
	request(url, function (error, res, body) {
		if (!error && res.statusCode == 200) {
			handle(true, body);
		}
		else {
			handle(false, body);
		}
	});
}
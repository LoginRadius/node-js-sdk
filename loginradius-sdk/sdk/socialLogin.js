module.exports = function (config) {

    var module = {};
    var socialLoginEndpoint ="/api/v2/";
    var helper = require('./../helper.js');

    /**The User Profile API is used to get social profile data from the user’s social account after authentication. The social profile will be retrieved via oAuth and OpenID protocols. The data is normalized into LoginRadius' standard data format.
     * @function
     * @public
     * @param access_token {String} A valid session token,which is fetch from Access Token API
     */
    module.getUserProfile = function (access_token) {
        return new Promise(function (resolve, reject) {
            config.request(config.apidomain + socialLoginEndpoint +"userprofile?access_token=" + access_token, function (data) {
                if (helper.checkError(data)) {
                    reject(data);
                } else {
                    resolve(data);
                }

            });
        });
    };

    /**The photo API is used to get photo data from the user’s social account. The data will be normalized into LoginRadius' data format.
     * @function
     * @public
     * @param access_token {String} A valid session token,which is fetch from Access Token API.
     * @param albumId {String} A valid albumId, it return album photos
     */
    module.getPhotos = function (access_token, albumId) {
        return new Promise(function (resolve, reject) {
            config.request(config.apidomain + socialLoginEndpoint +"photo?access_token=" + access_token + "&albumid=" + albumId, function (data) {
                if (helper.checkError(data)) {
                    reject(data);
                } else {
                    resolve(data);
                }

            });
        });
    };

    /**The Check In API is used to get check-ins data from the user’s social account. The data will be normalized into LoginRadius' data format.
     * @function
     * @public
     * @param access_token {String} A valid session token,which is fetch from Access Token API.
     */
    module.getCheckins = function (access_token) {
        return new Promise(function (resolve, reject) {
            config.request(config.apidomain + socialLoginEndpoint +"checkin?access_token=" + access_token, function (data) {
                if (helper.checkError(data)) {
                    reject(data);
                } else {
                    resolve(data);
                }

            });
        });
    };

    /**The Albums API is used to get the Albums data from the user’s social account. The data will be normalized into LoginRadius' data format.
     * @function
     * @public
     * @param access_token {String} A valid session token,which is fetch from Access Token API.
     */
    module.getAlbums = function (access_token) {
        return new Promise(function (resolve, reject) {
            config.request(config.apidomain + socialLoginEndpoint +"album?access_token=" + access_token, function (data) {
                if (helper.checkError(data)) {
                    reject(data);
                } else {
                    resolve(data);
                }
            });
        });
    };


    /**The Audio API is used to get audio files data from the user’s social account. The data will be normalized into LoginRadius' data format.
     * @function
     * @public
     * @param access_token {String} A valid session token,which is fetch from Access Token API.
     */
    module.getAudios = function (access_token) {
        return new Promise(function (resolve, reject) {
            config.request(config.apidomain + socialLoginEndpoint +"audio?access_token=" + access_token, function (data) {
                if (helper.checkError(data)) {
                    reject(data);
                } else {
                    resolve(data);
                }

            });
        });
    };

    /**The Mention API is used to get mention data from the user’s social account. The data will be normalized into LoginRadius' data format.
     * @function
     * @public
     * @param access_token {String} A valid session token,which is fetch from Access Token API.
     */
    module.getMentions = function (access_token) {
        return new Promise(function (resolve, reject) {
            config.request(config.apidomain + socialLoginEndpoint +"mention?access_token=" + access_token, function (data) {
                if (helper.checkError(data)) {
                    reject(data);
                } else {
                    resolve(data);
                }
            });
        });
    };

    /**The Following API is used to get the followers’ information from the user’s social account. The data will be normalized into LoginRadius' data format.
     * @function
     * @public
     * @param access_token {String} A valid session token,which is fetch from Access Token API.
     */
    module.getFollowings = function (access_token) {
        return new Promise(function (resolve, reject) {
            config.request(config.apidomain + socialLoginEndpoint +"following?access_token=" + access_token, function (data) {
                if (helper.checkError(data)) {
                    reject(data);
                } else {
                    resolve(data);
                }
            });
        });
    };

    /**The Event API is used to get the event data from the user’s social account. The data will be normalized into LoginRadius' data format.
     * @function
     * @public
     * @param access_token {String} A valid session token,which is fetch from Access Token API.
     */
    module.getEvents = function (access_token) {
        return new Promise(function (resolve, reject) {
            config.request(config.apidomain + socialLoginEndpoint +"event?access_token=" + access_token, function (data) {
                if (helper.checkError(data)) {
                    reject(data);
                } else {
                    resolve(data);
                }
            });
        });
    };

    /**The Post API is used to get posted messages from the user’s social account. The data will be normalized into LoginRadius' data format.
     * @function
     * @public
     * @param access_token {String} A valid session token,which is fetch from Access Token API.
     */
    module.getPosts = function (access_token) {
        return new Promise(function (resolve, reject) {
            config.request(config.apidomain + socialLoginEndpoint +"post?access_token=" + access_token, function (data) {
                if (helper.checkError(data)) {
                    reject(data);
                } else {
                    resolve(data);
                }
            });
        });
    };

    /**The Company API is used to get the followed company’s data in the user’s social account. The data will be normalized into LoginRadius' data format.
     * @function
     * @public
     * @param access_token {String} A valid session token,which is fetch from Access Token API.
     */
    module.getCompanies = function (access_token) {
        return new Promise(function (resolve, reject) {
            config.request(config.apidomain + socialLoginEndpoint +"company?access_token=" + access_token, function (data) {
                if (helper.checkError(data)) {
                    reject(data);
                } else {
                    resolve(data);
                }
            });
        });
    };

    /**The Group API is used to get group data from the user’s social account. The data will be normalized into LoginRadius' data format.
     * @function
     * @public
     * @param access_token {String} A valid session token,which is fetch from Access Token API.
     */
    module.getGroups = function (access_token) {
        return new Promise(function (resolve, reject) {
            config.request(config.apidomain + socialLoginEndpoint +"group?access_token=" + access_token, function (data) {
                if (helper.checkError(data)) {
                    reject(data);
                } else {
                    resolve(data);
                }
            });
        });
    };

    /**The Status API is used to get the status messages from the user’s social account. The data will be normalized into LoginRadius' data format.
     * @function
     * @public
     * @param access_token {String} A valid session token,which is fetch from Access Token API.
     */
    module.getStatuses = function (access_token) {
        return new Promise(function (resolve, reject) {
            config.request(config.apidomain + socialLoginEndpoint +"status?access_token=" + access_token, function (data) {
                if (helper.checkError(data)) {
                    reject(data);
                } else {
                    resolve(data);
                }
            });
        });
    };

    /**The Contact API is used to get contacts/friends/connections data from the user’s social account. The data will normalized into LoginRadius' data format.
     * @function
     * @public
     * @param access_token {String} A valid session token,which is fetch from Access Token API.
     * @param Curser {int} value for getting next records set
     */
    module.getContacts = function (access_token, cursor) {
        return new Promise(function (resolve, reject) {
            config.request(config.apidomain + socialLoginEndpoint +"contact?access_token=" + access_token + "&cursor=" + cursor, function (data) {
                if (helper.checkError(data)) {
                    reject(data);
                } else {
                    resolve(data);
                }
            });
        });
    };

    /**The Video API is used to get videos data from the user’s social account. The data will be normalized into LoginRadius' data format.
     * @function
     * @public
     * @param access_token {String} A valid session token,which is fetch from Access Token API.
     */
    module.getVideos = function (access_token) {
        return new Promise(function (resolve, reject) {
            config.request(config.apidomain + socialLoginEndpoint +"video?access_token=" + access_token, function (data) {
                if (helper.checkError(data)) {
                    reject(data);
                } else {
                    resolve(data);
                }
            });
        });
    };

    /**The Likes API is used to get likes data from the user’s social account. The data will be normalized into LoginRadius' data format.
     * @function
     * @public
     * @param access_token {String} A valid session token,which is fetch from Access Token API.
     */
    module.getLikes = function (access_token) {
        return new Promise(function (resolve, reject) {
            config.request(config.apidomain + socialLoginEndpoint +"like?access_token=" + access_token, function (data) {
                if (helper.checkError(data)) {
                    reject(data);
                } else {
                    resolve(data);
                }
            });
        });
    };

    /**This API is used to update the status on the user’s wall.
     * @function
     * @public
     * @param access_token {String} A valid session token,which is fetch from Access Token API.
     * @param title {String} title for status message.
     * @param url {String} A web link of the status message
     * @param status {String} The status message text
     * @param imageurl {String} An image URL of the status message
     * @param caption {String} A caption of the status message
     * @param description {String} A description of the status message
     */
    module.postStatus = function (access_token, title, url, status, imageurl, caption, description) {
        return new Promise(function (resolve, reject) {
            config.request(config.apidomain + socialLoginEndpoint +"status/js?access_token=" + access_token + "&title=" + title + "&url=" + url + "&imageurl=" + imageurl + "&status=" + status + "&caption=" + caption + "&description=" + description, function (data) {
                if (helper.checkError(data)) {
                    reject(data);
                } else {
                    resolve(data);
                }
            });
        });
    };

    /**The Message API is used to post messages to the user’s contacts. After using the Contact API, you can send messages to the retrieved contacts.
     * @function
     * @public
     * @param access_token {String} A valid session token,which is fetch from Access Token API.
     * @param to {String} A valid friend id to send the message, it would be fetched from the contacts list
     * @param subject {String} The subject of the message to be send
     * @param message {String} The details of the message to be send
     */
    module.postMessage = function (access_token, to, subject, message) {
        return new Promise(function (resolve, reject) {
            config.request(config.apidomain + socialLoginEndpoint +"message/js?access_token=" + access_token + "&to=" + to + "&subject=" + subject + "&message=" + message, function (data) {
                if (helper.checkError(data)) {
                    reject(data);
                } else {
                    resolve(data);
                }
            });
        });
    };

    //Get Message
    module.getMessage = function (access_token, to, subject, message) {
        return new Promise(function (resolve, reject) {
            config.request(config.apidomain + socialLoginEndpoint +"message/js?access_token=" + access_token + "&to=" + to + "&subject=" + subject + "&message=" + message, function (data) {
                if (helper.checkError(data)) {
                    reject(data);
                } else {
                    resolve(data);
                }
            });
        });
    };

    // The Page API is used to get the page data from the user’s social account.
    // The data will be normalized into LoginRadius’ standard data format.
    // This API requires setting permissions in your LoginRadius Dashboard.
    // http://apidocs.loginradius.com/docs/page
    module.getPage = function (access_token, pagename) {

        return new Promise(function (resolve, reject) {
            config.request(config.apidomain + socialLoginEndpoint +"page?access_token=" + access_token + "&pagename=" + pagename, function (data) {
                if (helper.checkError(data)) {
                    reject(data);
                } else {
                    resolve(data);
                }
            });
        });
    }

    return module;
};
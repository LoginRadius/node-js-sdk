module.exports = function (config) {

    var module = {};
    var tokenEndpoint = "/api/v2/access_token";
    var authTokenEndpoint = "/identity/v2/";
    var helper = require('./../helper.js');

    module.activeSession = {};

    /**The Access Token API is used to get the LoginRadius access token after authentication. It will be valid for the specific duration of time specified in the response.
     * @function
     * @public
     * @param token {String} A valid session token, which is added to redirect uri of your website after successfully logged in to provider
     */
    module.exchange = function (token, fields) {
        helper.checkFields(fields, config);
        return new Promise(function (resolve, reject) {
            config.request({uri: config.apidomain + tokenEndpoint +"?token=" + token + "&secret=" + config.apisecret}, function (data) {
                if (helper.checkError(data)) {
                    reject(data);
                } else {
                    resolve(data);
                }

            });
        });
    }
	
	
    // Token Validity( GET )
    module.validity = function (access_token, fields) {
        helper.checkFields(fields, config);
        return new Promise(function (resolve, reject) {
            config.request({uri: config.apidomain + tokenEndpoint +"/Validate?key=" + config.apikey + "&secret=" + config.apisecret + "&access_token=" + access_token}, function (data) {
                if (helper.checkError(data)) {
                    reject(data);
                } else {
                    resolve(data);
                }
            });
        });
    };

    // Token Invalidate( GET )
    module.invalidate = function (access_token, fields) {
        helper.checkFields(fields, config);
        return new Promise(function (resolve, reject) {
            config.request({uri: config.apidomain + tokenEndpoint +"/invalidate?key=" + config.apikey + "&secret=" + config.apisecret + "&access_token=" + access_token}, function (data) {
                if (helper.checkError(data)) {
                    reject(data);
                } else {
                    resolve(data);
                }
            });
        });
    };

    // Token Refresh( GET )
    module.refresh = function (access_token, fields) {
        helper.checkFields(fields, config);
        return new Promise(function (resolve, reject) {
            config.request({uri: config.apidomain + tokenEndpoint +"/refresh?access_token=" + access_token + "&secret=" + config.apisecret }, function (data) {
                if (helper.checkError(data)) {
                    reject(data);
                } else {
                    resolve(data);
                }
            });
        });
    };

    // Get Active Session By TOKEN( GET )
    module.activeSession.getByToken = function (access_token, fields) {
        helper.checkFields(fields, config);
        return new Promise(function (resolve, reject) {
            config.request({uri: config.apidomain + tokenEndpoint +"/activeSession?key=" + config.apikey + "&secret=" + config.apisecret +"&token=" + access_token }, function (data) {
                if (helper.checkError(data)) {
                    reject(data);
                } else {
                    resolve(data);
                }
            });
        });
    };
    // Get Active Session By UID( GET )
    module.activeSession.getByUid = function (uid, fields) {
        helper.checkFields(fields, config);
        return new Promise(function (resolve, reject) {
            config.request({uri: config.apidomain + tokenEndpoint +"/activeSession?key=" + config.apikey + "&secret=" + config.apisecret +"&accountId=" + uid }, function (data) {
                if (helper.checkError(data)) {
                    reject(data);
                } else {
                    resolve(data);
                }
            });
        });
    };


    // Access Token via Facebook Token( GET )
    module.getFacebookToken = function (fb_access_token, fields) {
        helper.checkFields(fields, config);
        return new Promise(function (resolve, reject) {
            config.request({uri: config.apidomain + tokenEndpoint +"/facebook?key=" + config.apikey + "&fb_access_token=" + fb_access_token }, function (data) {
                if (helper.checkError(data)) {
                    reject(data);
                } else {
                    resolve(data);
                }
            });
        });
    };

    // Access Token via Twitter Token( GET )
    module.getTwitterToken = function (tw_access_token, tw_token_secret, fields) {
        helper.checkFields(fields, config);
        return new Promise(function (resolve, reject) {
            config.request({uri: config.apidomain + tokenEndpoint +"/twitter?key=" + config.apikey + "&tw_access_token=" + tw_access_token +"&tw_token_secret=" + tw_token_secret}, function (data) {
                if (helper.checkError(data)) {
                    reject(data);
                } else {
                    resolve(data);
                }
            });
        });
    };

    return module;
};
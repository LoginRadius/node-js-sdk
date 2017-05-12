module.exports = function (config) {

    var module = {};
    var restHookEndpoint = "/api/v2/";
    var helper = require('./../helper.js');

    // Rest Hooks Settings( GET )
    module.getSettings = function () {
        return new Promise(function (resolve, reject) {
            config.request({uri: config.apidomain + restHookEndpoint +"resthook/test?api_key=" + config.apikey + "&api_secret=" + config.apisecret}, function (data) {
                if (helper.checkError(data)) {
                    reject(data);
                } else {
                    resolve(data);
                }
            });
        });
    }

    // Rest Hooks Field List( GET )
    module.getFieldList = function () {
        return new Promise(function (resolve, reject) {
            config.request({uri: config.apidomain + restHookEndpoint +"resthook/fields?api_key=" + config.apikey + "&api_secret=" + config.apisecret}, function (data) {
                if (helper.checkError(data)) {
                    reject(data);
                } else {
                    resolve(data);
                }
            });
        });
    }

    // Rest Hooks Subscribed Urls( GET )
    module.getSubscribedUrls = function (event) {
        return new Promise(function (resolve, reject) {
            config.request({uri: config.apidomain + restHookEndpoint +"resthook/subscription?api_key=" + config.apikey + "&api_secret=" + config.apisecret + "&event=" + event}, function (data) {
                if (helper.checkError(data)) {
                    reject(data);
                } else {
                    resolve(data);
                }
            });
        });
    }

    // Subscribe Rest Hooks( POST )
    module.postSubscribe = function (target_url, event) {
        var formData = {
            "target_url": target_url,
            "event": event
        }
        return new Promise(function (resolve, reject) {
            config.request({
                method: 'post',
                uri: config.apidomain + restHookEndpoint +"resthook/subscribe?api_key=" + config.apikey + "&api_secret=" + config.apisecret,
                headers: {'content-type': 'application/json'},
                body: JSON.stringify(formData)
            }, function (data) {
                if (helper.checkError(data)) {
                    reject(data);
                } else {
                    resolve(data);
                }
            });
        });
    }

    // Unsubscribe Rest Hooks( POST )
    module.postUnsubscribe = function (target_url) {
        var formData = {
            "target_url": target_url
        }
        return new Promise(function (resolve, reject) {
            config.request({
                method: 'post',
                uri: config.apidomain + restHookEndpoint +"resthook/unsubscribe?api_key=" + config.apikey + "&api_secret=" + config.apisecret,
                headers: {'content-type': 'application/json'},
                body: JSON.stringify(formData)
            }, function (data) {
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
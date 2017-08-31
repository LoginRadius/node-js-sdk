module.exports = function (config) {

    var module = {};
    var restHookEndpoint = "/api/v2/";
    var helper = require('./../helper.js');


    // Rest Hooks Settings( GET )
    /**
     * @deprecated since version 4.0.0
     */
    module.getSettings = function ( fields) {
        helper.checkFields(fields, config);
        return new Promise(function (resolve, reject) {
            config.request({uri: config.apidomain + restHookEndpoint +"resthook/test?api_key=" + config.apikey + "&api_secret=" + config.apisecret}, function (data) {
                if (helper.checkError(data)) {
                    reject(data);
                } else {
                    resolve(data);
                    console.log("Warning : This functionality is deprecated and it will be removed in future updates. However, we are providing new functionality Web Hooks in its place..")
                }
            });
        });
    }

    /**
     * @deprecated since version 4.0.0
     */
    // Rest Hooks Field List( GET )
    module.getFieldList = function ( fields) {
        helper.checkFields(fields, config);
        return new Promise(function (resolve, reject) {
            config.request({uri: config.apidomain + restHookEndpoint +"resthook/fields?api_key=" + config.apikey + "&api_secret=" + config.apisecret}, function (data) {
                if (helper.checkError(data)) {
                    reject(data);
                } else {
                    resolve(data);
                    console.log("Warning : This functionality is deprecated and it will be removed in future updates. However, we are providing new functionality Web Hooks in its place..")
                }
            });
        });
    }

    /**
     * @deprecated since version 4.0.0
     */
    // Rest Hooks Subscribed Urls( GET )
    module.getSubscribedUrls = function (event, fields) {
        helper.checkFields(fields, config);
        return new Promise(function (resolve, reject) {
            config.request({uri: config.apidomain + restHookEndpoint +"resthook/subscription?api_key=" + config.apikey + "&api_secret=" + config.apisecret + "&event=" + event}, function (data) {
                if (helper.checkError(data)) {
                    reject(data);
                } else {
                    resolve(data);
                    console.log("Warning : This functionality is deprecated and it will be removed in future updates. However, we are providing new functionality Web Hooks in its place..")
                }
            });
        });
    }

    /**
     * @deprecated since version 4.0.0
     */
    // Subscribe Rest Hooks( POST )
    module.postSubscribe = function (target_url, event, fields) {
        var formData = {
            "target_url": target_url,
            "event": event
        }
        helper.checkFields(fields, config);
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
                    console.log("Warning : This functionality is deprecated and it will be removed in future updates. However, we are providing new functionality Web Hooks in its place..")
                }
            });
        });
    }

    /**
     * @deprecated since version 4.0.0
     */
    // Unsubscribe Rest Hooks( POST )
    module.postUnsubscribe = function (target_url, fields) {
        var formData = {
            "target_url": target_url
        }
        helper.checkFields(fields, config);
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
                    console.log("Warning : This functionality is deprecated and it will be removed in future updates. However, we are providing new functionality Web Hooks in its place..")
                }
            });
        });
    }

    return module;
};
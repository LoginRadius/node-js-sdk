module.exports = function (config) {

    var module = {};
    var webHookEndpoint ="/api/v2/webhook";
    var helper = require('./../helper.js');

    // Test WebHook( GET )
    module.test = function (fields) {
        helper.checkFields(fields, config);
        return new Promise(function (resolve, reject) {
            config.request({uri: config.apidomain + webHookEndpoint +"/test?apikey=" + config.apikey + "&apisecret=" + config.apisecret}, function (data) {
                if (helper.checkError(data)) {
                    reject(data);
                } else {
                    resolve(data);
                }
            });
        });
    }

    // Subscribe Web Hooks( POST )
    module.subscribe = function (target_url, event, fields) {
        var formData = {
            "TargetUrl": target_url,
            "Event": event
        }
        helper.checkFields(fields, config);
        return new Promise(function (resolve, reject) {
            config.request({
                method: 'POST',
                uri: config.apidomain + webHookEndpoint +"/?apikey=" + config.apikey + "&apisecret=" + config.apisecret,
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

    // Unsubscribe Web Hooks( DELETE )
    module.unsubscribe = function (target_url, event, fields) {
        var formData = {
            "TargetUrl": target_url,
            "Event": event
        }
        helper.checkFields(fields, config);
        return new Promise(function (resolve, reject) {
            config.request({
                method: 'DELETE',
                uri: config.apidomain + webHookEndpoint +"/?apikey=" + config.apikey + "&apisecret=" + config.apisecret,
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

    // Get Subscribed Web Hooks( GET )
    module.getSubscribed = function (event, fields) {
        helper.checkFields(fields, config);
        return new Promise(function (resolve, reject) {
            config.request({
                uri: config.apidomain + webHookEndpoint +"?apikey=" + config.apikey + "&apisecret=" + config.apisecret+"&event="+event,
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
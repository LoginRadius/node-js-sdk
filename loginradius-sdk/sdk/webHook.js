module.exports = function (config) {

    var module = {};
    var webHookEndpoint ="/api/v2/webhook";
    var helper = require('./../helper.js');

    // Test WebHook( GET )
    module.test = function () {
        return new Promise(function (resolve, reject) {
            config.request({uri: config.apidomain + webHookEndpoint +"/test?apikey=" + config.apikey + "&apisecret=" + config.apisecret}, function (data) {
                console.log(data);
                if (helper.checkError(data)) {
                    reject(data);
                } else {
                    resolve(data);
                }
            });
        });
    }

    // Subscribe Web Hooks( POST )
    module.subscribe = function (target_url, event) {
        var formData = {
            "TargetUrl": target_url,
            "Event": event
        }
        return new Promise(function (resolve, reject) {
            config.request({
                method: 'post',
                uri: config.apidomain + webHookEndpoint +"/?apikey=" + config.apikey + "&apisecret=" + config.apisecret,
                headers: {'content-type': 'application/json'},
                body: JSON.stringify(formData)
            }, function (data) {
                console.log(data);
                if (helper.checkError(data)) {
                    reject(data);
                } else {
                    resolve(data);
                }
            });
        });
    }

    // Unsubscribe Web Hooks( DELETE )
    module.unsubscribe = function (target_url, event) {
        var formData = {
            "TargetUrl": target_url,
            "Event": event
        }
        return new Promise(function (resolve, reject) {
            config.request({
                method: 'delete',
                uri: config.apidomain + webHookEndpoint +"/?apikey=" + config.apikey + "&apisecret=" + config.apisecret,
                headers: {'content-type': 'application/json'},
                body: JSON.stringify(formData)
            }, function (data) {
                console.log(data);
                if (helper.checkError(data)) {
                    reject(data);
                } else {
                    resolve(data);
                }
            });
        });
    }

    // Get Subscribed Web Hooks( GET )
    module.getSubscribed = function (event) {
        return new Promise(function (resolve, reject) {
            config.request({
                uri: config.apidomain + webHookEndpoint +"?apikey=" + config.apikey + "&apisecret=" + config.apisecret+"&event="+event,
            }, function (data) {
                console.log(data);
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
module.exports = function (config, helper) {

	var module = {};
    var accountEndpoint = "/identity/v2/manage/account/";

    var helper = require('./../helper.js');

    // Account Create Custom Object( POST )
    module.createByUid = function (uid, objectName, formData) {
        return new Promise(function (resolve, reject) {
            config.request({
                method: "POST",
                uri: config.apidomain + accountEndpoint + uid + "/customobject?apikey=" + config.apikey + "&apisecret=" + config.apisecret + "&objectname=" + objectName,
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
    };

    // Account Update Custom Object( PUT )
    module.update = function (uid, objectRecordId, objectName, formData) {
        return new Promise(function (resolve, reject) {
            config.request({
                method: "PUT",
                uri: config.apidomain + accountEndpoint + uid + "/customobject/" + objectRecordId + "?apikey=" + config.apikey + "&apisecret=" + config.apisecret + "&objectname=" + objectName,
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
    };

    // Account Custom Object By UID( GET )
    module.getByUID = function (uid, objectName) {
        return new Promise(function (resolve, reject) {
            config.request({uri: config.apidomain + accountEndpoint + uid + "/customobject?apikey=" + config.apikey + "&apisecret=" + config.apisecret + "&objectname=" + objectName}, function (data) {
                if (helper.checkError(data)) {
                    reject(data);
                } else {
                    resolve(data);
                }
            });
        });
    };

    // Account Custom Object by ObjectRecordId( GET )
    module.getByObjectRecordId = function (uid, objectRecordId, objectName) {
        return new Promise(function (resolve, reject) {
            config.request({uri: config.apidomain + accountEndpoint + uid + "/customobject/" + objectRecordId + "?apikey=" + config.apikey + "&apisecret=" + config.apisecret + "&objectname=" + objectName}, function (data) {
                if (helper.checkError(data)) {
                    reject(data);
                } else {
                    resolve(data);
                }
            });
        });
    };

    // Account Delete Custom Object by ObjectRecordId( DELETE )
    module.remove = function (uid, objectRecordId, objectName) {
        return new Promise(function (resolve, reject) {
            config.request({
                method: "DELETE",
                uri: config.apidomain + accountEndpoint + uid + "/customobject/" + objectRecordId + "?apikey=" + config.apikey + "&apisecret=" + config.apisecret + "&objectname=" + objectName
            }, function (data) {
                if (helper.checkError(data)) {
                    reject(data);
                } else {
                    resolve(data);
                }
            });
        });
    };

	return module;
}
module.exports = function (config) {

    var module = {};
    var cloudEndPoint ="https://config.lrcontent.com/ciam/appInfo";
    var helper = require('./../helper.js');

    // Test WebHook( GET )
    module.getConfigurationList = function (callBack,fields) {
        helper.checkFields(fields, config);
        return new Promise(function (resolve, reject) {
            config.request({uri: cloudEndPoint +"?apikey=" + config.apikey}, function (data) {
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
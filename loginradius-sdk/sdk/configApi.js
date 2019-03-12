module.exports = function (config) {

    var module = {};
    var configEndPoint ="https://config.lrcontent.com/ciam/appInfo";
    var helper = require('./../helper.js');

    // Test WebHook( GET )
    module.getConfigurationList = function ( fields ) {
        helper.checkFields(fields, config);
        return new Promise(function (resolve, reject) {
            config.request({uri: configEndPoint +"?apikey=" + config.apikey+config.serverRegion}, function (data, status) {
                if (helper.checkError(data, status)) {
                    reject(data);
                } else {
                    resolve(data);
                }
            });
        });
    };
    return module;
};
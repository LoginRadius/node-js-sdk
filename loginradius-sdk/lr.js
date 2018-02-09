var request = require('request');
var _ = require('underscore');

module.exports = function (config) {
	config.request = function (options, callback, managementAPI) {
		if ( config.proxy && config.proxy.host && config.proxy.port ) {
			var proxyUrl = "http://" + config.proxy.user + ":" + config.proxy.password + "@" + config.proxy.host + ":" + config.proxy.port;
			options.proxy = proxyUrl;
		}
		var customHeader = {
			'X-LoginRadius-ApiKey' : config.apikey,
			'X-LoginRadius-ApiSecret' : config.apisecret
		}
		if(managementAPI){
			if(options.headers)
				Object.assign(options.headers, customHeader );
			else
				options.headers = customHeader;
		}
		if(options.uri.match(/\?./))
			fieldsList = config.fieldsParam + config.fieldsValue;
		else
			fieldsList = "?fields=" + config.fieldsValue;

		options.uri+=fieldsList;
		request(options, function (error, response, body) {
			if (error) {
				throw (error);
			} else {
				callback(JSON.parse(body));
			}
		});
	};

	var helper = require('./helper.js');
	var authentication = require('./sdk/authentication.js')(config);
	var role = require('./sdk/role.js')(config);
	var restHook = require('./sdk/restHook.js')(config);
	var webHook = require('./sdk/webHook.js')(config);
	var account = require('./sdk/account.js')(config);
	var phoneAuthentication = require('./sdk/phoneAuthentication.js')(config);
	var socialLogin = require('./sdk/socialLogin.js')(config);
	var customObject = require('./sdk/customObject.js')(config);
	var customRegistrationData = require('./sdk/customRegistrationData.js')(config);
	var accessToken = require('./sdk/accessToken.js')(config);
	var cloudApi = require('./sdk/cloudApi.js')(config);

	return {
		authentication: authentication,
		role: role,
		restHook: restHook,
		webHook: webHook,
		account: account,
		phoneAuthentication: phoneAuthentication,
		socialLogin: socialLogin,
		customObject: customObject,
		customRegistrationData: customRegistrationData,
		accessToken: accessToken,
		cloudApi: cloudApi,
		helper: helper,
	};
};

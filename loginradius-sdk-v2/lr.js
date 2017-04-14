var request = require('request');
var _ = require('underscore');

module.exports = function (config) {
	config.request = function (options, callback) {
		request(options, function (error, response, body) {
			if (error) {
				console.log(error);
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
	var accessToken = require('./sdk/accessToken.js')(config);
	var cloudStorage = require('./sdk/cloudStorage.js')(config);

	return {
		authentication: authentication,
		role: role,
		restHook: restHook,
		webHook: webHook,
		account: account,
		phoneAuthentication: phoneAuthentication,
		socialLogin: socialLogin,
		customObject: customObject,
		accessToken: accessToken,
		helper: helper,
		cloudStorage:cloudStorage
	};
};

module.exports = function(partnerKey,partnerSecret){
		
	var module = {};
	
	var auth = require("./auth.js");
	auth.setAuth(partnerKey,partnerSecret);
	var apiEndpoint = require("./api-endpoint.js")(auth);


	module.customer = require("./entities/customer.js")(apiEndpoint);
	module.customer.app = require("./entities/app.js")(apiEndpoint);
	module.partner = require("./entities/partner.js")(apiEndpoint);
	module.customer.app.settings = require("./entities/settings.js")(apiEndpoint);
	
	return module;
};


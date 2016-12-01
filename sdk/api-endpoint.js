module.exports = function(auth){
	var module = {};
	var urljoin = require('url-join');
	
	var api_endpoint = "https://devpartner.loginradius.com/";
	
	module.getApiEndpoint = function(relativePath){
		return urljoin(api_endpoint, relativePath, auth.getAuthQueryString());
	};
    module.getApiEndpointWithTakeSkip = function(relativePath,take,skip){
        return urljoin(api_endpoint, relativePath, auth.getAuthQueryStringWithTakeAndSkip(take,skip));
    };
	
	return module;
};
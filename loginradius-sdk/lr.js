var request = require('request');
var _ = require('underscore');
const crypto = require('crypto');
var querystring = require('querystring');

module.exports = function (config) {
    config.request = function (options, callback, managementAPI) {
        if (config.proxy && config.proxy.host && config.proxy.port) {
            var proxyUrl = (config.proxy.protocol ? config.proxy.protocol : "http") + "://" + config.proxy.user + ":" + config.proxy.password + "@" + config.proxy.host + ":" + config.proxy.port;
            options.proxy = proxyUrl;
        }
        var customHeader = {
            'X-LoginRadius-ApiKey': config.apikey,
            'X-LoginRadius-ApiSecret': config.apisecret
        };
        if (config.fieldsParam && config.fieldsValue)
        {
            if (options.uri.match(/\?./)) {
                fieldsList = config.fieldsParam + encodeURIComponent(config.fieldsValue);
            } else
                fieldsList = "?fields=" + encodeURIComponent(config.fieldsValue);
            options.uri += fieldsList;
        }
        if (managementAPI) {
            if (config.api_request_signing) {
                if (!options.uri.match('apikey')) {
                    options.uri += "&apikey=" + encodeURIComponent(config.apikey);
                }
                expiry_date = new Date();
                expiry_date = new Date(expiry_date.getTime() + 60 * 60000);                
                var month = expiry_date.getMonth() + 1;
                expiry_date = expiry_date.getFullYear() + "-" + (month < 10 ? "0" + month : month) + "-" + (expiry_date.getDate() < 10 ? "0" + expiry_date.getDate() : expiry_date.getDate()) + " " + (expiry_date.getHours() < 10 ? "0" + expiry_date.getHours() : expiry_date.getHours()) + ":" + (expiry_date.getMinutes() < 10 ? "0" + expiry_date.getMinutes() : expiry_date.getMinutes()) + ":" + (expiry_date.getSeconds() < 10 ? "0" + expiry_date.getSeconds() : expiry_date.getSeconds());
                encodeurl = encodeURIComponent(decodeURIComponent(options.uri)).toLowerCase();
                if (options.body) {
                    url_string = expiry_date + ':' + encodeurl + ':' + options.body;
                } else {
                    url_string = expiry_date + ':' + encodeurl;
                }
                const hash = crypto.createHmac('sha256', config.apisecret)
                        .update(url_string)
                        .digest('base64');
                var signing_header = {
                    'X-Request-Expires': expiry_date,
                    "digest": "SHA-256=" + hash
                };
                if (options.headers)
                    Object.assign(options.headers, signing_header);
                else
                    options.headers = signing_header;

            } else {
                if (options.headers)
                    Object.assign(options.headers, customHeader);
                else
                    options.headers = customHeader;
            }
        }
		options.gzip = true;
        request(options, function (error, response, body) {
            if (error) {
                callback(error, 'serverError');
            } else {
                try {
                    response = JSON.parse(body);
                    callback(response);
                } catch (err) {
                    var jsondata = {
                        "Description": "Oops something went wrong, Please try again.",
                        "ErrorCode": 1000,
                        "Message": "Oops something went wrong, Please try again.",
                        "IsProviderError": false,
                        "ProviderErrorResponse": null
                    };
                    callback(jsondata, 'serverError');
                }
            }
        });
    };
    
    config.get_querystring = function (r_querystring) {
        return querystring.stringify(r_querystring, null, null, encodeURIComponent);
    };

    if((config.region) && ((config.region).trim() != null)){  
        config.serverRegion = "&region="+config.region;
    } else {
        config.serverRegion = '';
    }
   
    config.apidomain = (config.apidomain) && (config.apidomain != '') ? config.apidomain :"https://api.loginradius.com";
    return {
        authentication: require('./sdk/authentication.js')(config),
        role: require('./sdk/role.js')(config),       
        webHook: require('./sdk/webHook.js')(config),
        account: require('./sdk/account.js')(config),
        phoneAuthentication: require('./sdk/phoneAuthentication.js')(config),
        socialLogin: require('./sdk/socialLogin.js')(config),
        customObject: require('./sdk/customObject.js')(config),
        customRegistrationData: require('./sdk/customRegistrationData.js')(config),
        accessToken: require('./sdk/accessToken.js')(config),
        configApi: require('./sdk/configApi.js')(config),
        helper: require('./helper.js'),
    };
};


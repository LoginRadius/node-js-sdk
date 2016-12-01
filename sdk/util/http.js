var unirest = require('unirest');

function handleEnd(response, callback, endpoint) {
    if (response != null && response.error != null && response.error.code != null) {
        var error = {};
        if(endpoint && endpoint !=null) endpoint=endpoint.split('?')[0];
        if (response.error.code == "ETIMEDOUT" || response.error.code == "ESOCKETTIMEDOUT") {
            error = {
                "description": "The request has timed out.",
                "errorCode": 2001,
                "message": "The request to " + endpoint + " has failed to complete.",
                "isProviderError": false,
                "providerErrorResponse": null
            };
        }
        else {
            error = {
                "description": "An Unknown error has occured",
                "errorCode": 2002,
                "message": "An Unknown error has occured",
                "isProviderError": false,
                "providerErrorResponse": null
            };
        }
        console.log(error);
        callback(error);
    } else {
        callback(response.body);
    }
}

var acceptHeader={'Accept': 'application/json'};
var contentTypeHeader=acceptHeader;
contentTypeHeader["Content-Type"]="application/json";

function getHeaders(defaultHeaders,adminRequest) {
    if(adminRequest && adminRequest!="" ){
        var adminHeader=JSON.parse(JSON.stringify(defaultHeaders));
        adminHeader.LoginRadiusSuperadminUId=adminRequest;
        return adminHeader;
    }
    return defaultHeaders;
}

module.exports = {
    get: function (apiEndpont, callback, adminRequest) {

        var Request = unirest.get(apiEndpont);

        Request.headers(getHeaders(acceptHeader, adminRequest));
        Request.timeout(10000);
        Request.end(function (response) {
            handleEnd(response, callback, apiEndpont);
        });
    },
    post: function (apiEndpont, jsondata, callback, adminRequest) {
        //console.log(apiEndpont);
        unirest.post(apiEndpont)
            .headers(getHeaders(contentTypeHeader,adminRequest))
            .timeout(10000)
            .send(JSON.stringify(jsondata))
            .end(function (response) {
                handleEnd(response, callback);
            });

    },
    put: function (apiEndpont, jsondata, callback, adminRequest) {
        // console.log(apiEndpont);
        unirest.put(apiEndpont)
            .headers(getHeaders(contentTypeHeader,adminRequest))
            .timeout(10000)
            .send(JSON.stringify(jsondata))
            .end(function (response) {
                handleEnd(response, callback);
            });

    },
    delete: function (apiEndpont, callback, adminRequest) {
        //console.log(apiEndpont);
        unirest.delete(apiEndpont)
            .headers(getHeaders(acceptHeader, adminRequest))
            .timeout(10000)
            .end(function (response) {
                handleEnd(response, callback);
            });
    },
    deleteJson: function (apiEndpont, jsondata, callback, adminRequest) {
        // console.log(apiEndpont);
        unirest.delete(apiEndpont)
            .headers(getHeaders(contentTypeHeader,adminRequest))
            .timeout(10000)
            .send(JSON.stringify(jsondata))
            .end(function (response) {
                handleEnd(response, callback);
            });
    }
};
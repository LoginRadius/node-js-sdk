module.exports = function (apiEndpoint, unirest) {
    var module = {};
    var http = require("../util/http.js");

    module.get = function (customerId, adminRequest, callback) {
        http.get(apiEndpoint.getApiEndpoint("v2/customer/" + customerId), callback, adminRequest);
    };

    module.createCustomer = function (jsondata, adminRequest, callback) {
        http.post(apiEndpoint.getApiEndpoint("v2/customer/"), jsondata, callback, adminRequest);
    };
    module.updateCustomer = function (customerId, jsondata, adminRequest, callback) {
        http.put(apiEndpoint.getApiEndpoint("v2/customer/" + customerId), jsondata, callback, adminRequest);
    };

    module.deleteCustomer = function (customerId, adminRequest, callback) {
        http.delete(apiEndpoint.getApiEndpoint("v2/customer/" + customerId), callback, adminRequest);
    };

    module.reActiveCustomer = function (customerId, adminRequest, callback) {
        http.get(apiEndpoint.getApiEndpoint("v2/customer/" + customerId + "/reActive"), callback, adminRequest);
    };
    module.validate = function (appinfo, adminRequest, callback) {
        http.post(apiEndpoint.getApiEndpoint("v2/customer/validate"), appinfo, callback, adminRequest);
    };

    module.searchcustomer = function (searchdata, adminRequest, callback) {
        var querystring = "";
        if (searchdata.customerName != null && searchdata.customerName != "") {
            querystring += "&customerName=" + searchdata.customerName;
        }
        if (searchdata.emailid != null && searchdata.emailid != "") {
            querystring += "&emailid=" + searchdata.emailid;
        }
        if (searchdata.website != null && searchdata.website != "") {
            querystring += "&website=" + searchdata.website;
        }
        if (searchdata.apikey != null && searchdata.apikey != "") {
            querystring += "&apikey=" + searchdata.apikey;
        }
        if (searchdata.apisecret != null && searchdata.apisecret != "") {
            querystring += "&apisecret=" + searchdata.apisecret;
        }
        if (searchdata.sitename != null && searchdata.sitename != "") {
            querystring += "&sitename=" + searchdata.sitename;
        }
        http.get(apiEndpoint.getApiEndpoint("v2/customer/search") + querystring, callback, adminRequest);
    };

    return module;
}
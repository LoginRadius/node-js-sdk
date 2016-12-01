module.exports = function (apiEndpoint, unirest) {

    var module = {};
    var http = require("../util/http.js");

    module.getCustomer = function (adminRequest,callback) {
        http.get(apiEndpoint.getApiEndpoint("v2/customer"), callback, adminRequest);
    };

    module.getCustomerTakeAndSKip = function (take, skip,adminRequest, callback) {
        http.get(apiEndpoint.getApiEndpoint("v2/customer?take=" + take + "&skip=" + skip), callback, adminRequest);
    };

    module.getAllFeatures = function (adminRequest, callback) {
        http.get(apiEndpoint.getApiEndpoint("v2/platform/features"), callback, adminRequest);
    };


    module.getAllProviders = function (adminRequest, callback) {
        http.get(apiEndpoint.getApiEndpoint("v2/platform/provider"), callback, adminRequest);
    };


    module.getAllThemes = function (adminRequest, callback) {
        http.get(apiEndpoint.getApiEndpoint("v2/platform/logintheme"), callback, adminRequest);
    };


    module.getAllPermissions = function (adminRequest, callback) {
        http.get(apiEndpoint.getApiEndpoint("v2/platform/apipermission"), callback, adminRequest);
    };


    module.getAllTechnologies = function (adminRequest, callback) {
        http.get(apiEndpoint.getApiEndpoint("v2/platform/technology"), callback, adminRequest);
    };


    module.getAllEmailTemplates = function (adminRequest, callback) {
        http.get(apiEndpoint.getApiEndpoint("v2/platform/templates"), callback, adminRequest);
    };


    module.getAllRegistrationFields = function (adminRequest, callback) {
        http.get(apiEndpoint.getApiEndpoint("v2/platform/field"), callback, adminRequest);
    };


    module.getAllRegistrationValidationRules = function (adminRequest,callback) {
        http.get(apiEndpoint.getApiEndpoint("v2/platform/rule"), callback, adminRequest);
    };

    module.getAllPermissions = function (adminRequest, callback) {
        http.get(apiEndpoint.getApiEndpoint("v2/platform/apipermission"), callback, adminRequest);
    };
    module.getAllProviderScopes = function (adminRequest, callback) {
        http.get(apiEndpoint.getApiEndpoint("v2/platform/providerscopes"), callback, adminRequest);
    };

    return module;
};
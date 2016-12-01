module.exports = function (apiEndpoint, unirest) {
    var module = {};
    var http = require("../util/http.js");

    //permission settings

    module.setEndUserAPIPermissionSettings = function (customerId, appId, appinfo, adminRequest, callback) {
        http.put(apiEndpoint.getApiEndpoint("v2/customer/" + customerId + "/app/" + appId + "/apipermission"), appinfo, callback, adminRequest);
    };


    module.getEndUserAPIPermissionSettings = function (customerId, appId, adminRequest, callback) {
        http.get(apiEndpoint.getApiEndpoint("v2/customer/" + customerId + "/app/" + appId + "/apipermission"), callback, adminRequest);
    };


    //user registration settings on app/site

    module.setUserRegistrationSettings = function (customerId, appId, appinfo,adminRequest,  callback) {
        http.put(apiEndpoint.getApiEndpoint("v2/customer/" + customerId + "/app/" + appId + "/userregistration"), appinfo, callback, adminRequest);
    };


    module.getUserRegistrationSettings = function (customerId, appId,adminRequest, callback) {
        http.get(apiEndpoint.getApiEndpoint("v2/customer/" + customerId + "/app/" + appId + "/userregistration"), callback, adminRequest);
    };


    //create custom fields

    module.createCustomField = function (customerId, appId, appinfo,adminRequest, callback) {
        http.post(apiEndpoint.getApiEndpoint("v2/customer/" + customerId + "/app/" + appId + "/userregistration/customfield"), appinfo, callback, adminRequest);
    };


    module.getCustomFieldsInUserRegistration = function (customerId, appId, adminRequest, callback) {
        http.get(apiEndpoint.getApiEndpoint("v2/customer/" + customerId + "/app/" + appId + "/userregistration/customfield"), callback, adminRequest);
    };


    module.setCustomFieldsInRegistrationForm = function (customerId, appId, appinfo, adminRequest, callback) {
        http.put(apiEndpoint.getApiEndpoint("v2/customer/" + customerId + "/app/" + appId + "/userregistration/setcustomfield"), appinfo, callback, adminRequest);
    };


    //Active custom fields on app

    module.getActiveCustomFields = function (customerId, appId, adminRequest, callback) {
        http.get(apiEndpoint.getApiEndpoint("v2/customer/" + customerId + "/app/" + appId + "/userregistration/customfield/active"), callback, adminRequest);
    };


    //delete custom fields from app

    module.deleteCustomFields = function (customerId, appId, appinfo, adminRequest, callback) {
        http.deleteJson(apiEndpoint.getApiEndpoint("v2/customer/" + customerId + "/app/" + appId + "/userregistration/customfield"), appinfo, callback, adminRequest);
    };

    //SMTP settings

    module.setSMTPConfig = function (customerId, appId, appinfo,adminRequest,  callback) {
        http.post(apiEndpoint.getApiEndpoint("v2/customer/" + customerId + "/app/" + appId + "/userregistration/smtpconfig"), appinfo, callback, adminRequest);
    };

    module.getSMTPConfig = function (customerId, appId,adminRequest, callback) {
        http.get(apiEndpoint.getApiEndpoint("v2/customer/" + customerId + "/app/" + appId + "/userregistration/smtpconfig"), callback, adminRequest);
    };

    //send test mail


    module.sendTestMail = function (customerId, appId, emailId, subject, message, adminRequest, callback) {
        http.get(apiEndpoint.getApiEndpoint("v2/customer/" + customerId + "/app/" + appId + "/userregistration/testemail/" + emailId) + "&subject=" + subject + "&message=" + message, callback, adminRequest);
    };


    //Email Template
    module.createEmailTemplate = function (customerId, appId, appinfo,adminRequest, callback) {
        http.post(apiEndpoint.getApiEndpoint("v2/customer/" + customerId + "/app/" + appId + "/userregistration/emailtemplate"), appinfo, callback, adminRequest);
    };


    module.updateEmailTemplate = function (customerId, appId, type, appinfo, adminRequest, callback) {
        http.put(apiEndpoint.getApiEndpoint("v2/customer/" + customerId + "/app/" + appId + "/userregistration/emailtemplate/" + type), appinfo, callback, adminRequest);
    };

    //get email config

    module.getTemplateConfig = function (customerId, appId, adminRequest, callback) {
        http.get(apiEndpoint.getApiEndpoint("v2/customer/" + customerId + "/app/" + appId + "/userregistration/emailtemplate"), callback, adminRequest);
    };

    module.deleteEmailTemplate = function (customerId, appId, type, appinfo, adminRequest, callback) {
        http.deleteJson(apiEndpoint.getApiEndpoint("v2/customer/" + customerId + "/app/" + appId + "/userregistration/emailtemplate/" + type), appinfo, callback, adminRequest);
    };
    //Admin API

    //set basic settings
    //basic settings

    module.setBasicSettings = function (customerId, appId, appinfo, adminRequest, callback) {
        http.put(apiEndpoint.getApiEndpoint("v2/customer/" + customerId + "/app/" + appId + "/basic"), appinfo, callback, adminRequest);
    };


    module.getBasicSettings = function (customerId, appId, adminRequest, callback) {
        http.get(apiEndpoint.getApiEndpoint("v2/customer/" + customerId + "/app/" + appId + "/basic"), callback, adminRequest);
    };


    //get google recaptcha

    module.setGoogleRecaptchaSettings = function (customerId, appId, appinfo, adminRequest, callback) {
        http.put(apiEndpoint.getApiEndpoint("v2/customer/" + customerId + "/app/" + appId + "/advance/googlerecaptcha"), appinfo, callback, adminRequest);
    };

    module.getGoogleRecaptchaSettings = function (customerId, appId, adminRequest, callback) {
        http.get(apiEndpoint.getApiEndpoint("v2/customer/" + customerId + "/app/" + appId + "/advance/googlerecaptcha"), callback, adminRequest);
    };

    module.resetGoogleRecaptchaSettings = function (customerId, appId, appinfo, adminRequest, callback) {
        http.put(apiEndpoint.getApiEndpoint("v2/customer/" + customerId + "/app/" + appId + "/advance/googlerecaptcha/reset"), appinfo, callback, adminRequest);
    };


    //set password config

    module.setPasswordConfig = function (customerId, appId, appinfo, adminRequest, callback) {

        http.put(apiEndpoint.getApiEndpoint("v2/customer/" + customerId + "/app/" + appId + "/advance/passwordhash"), appinfo, callback, adminRequest);
    };


    module.getPasswordConfig = function (customerId, appId, adminRequest, callback) {
        http.get(apiEndpoint.getApiEndpoint("v2/customer/" + customerId + "/app/" + appId + "/advance/passwordhash"), callback, adminRequest);
    };


    //set and get emal settings
    module.setEmailSettings = function (customerId, appId, appinfo, adminRequest, callback) {

        http.put(apiEndpoint.getApiEndpoint("v2/customer/" + customerId + "/app/" + appId + "/advance/emailsetting"), appinfo, callback, adminRequest);
    };


    module.getEmailSettings = function (customerId, appId,adminRequest,  callback) {
        http.get(apiEndpoint.getApiEndpoint("v2/customer/" + customerId + "/app/" + appId + "/advance/emailsetting"), callback, adminRequest);
    };

    //custom objects
    //create custom object
    module.createCustomObject = function (customerId, appId, appinfo,adminRequest,  callback) {
        http.put(apiEndpoint.getApiEndpoint("v2/customer/" + customerId + "/app/" + appId + "/advance/customobject"), appinfo, callback, adminRequest);
    };

    module.getAllCustomObjects = function (customerId, appId, adminRequest, callback) {
        http.get(apiEndpoint.getApiEndpoint("v2/customer/" + customerId + "/app/" + appId + "/advance/customobject"), callback, adminRequest);
    };


    module.removeCustomObject = function (customerId, appId, customobjId, appinfo, adminRequest, callback) {
        http.deleteJson(apiEndpoint.getApiEndpoint("v2/customer/" + customerId + "/app/" + appId + "/advance/customobject/" + customobjId), appinfo, callback, adminRequest);
    };

    //set data center

    module.setDataCenter = function (customerId, appId, appinfo, adminRequest, callback) {
        http.put(apiEndpoint.getApiEndpoint("v2/customer/" + customerId + "/app/" + appId + "/advance/datacenter"), appinfo, callback, adminRequest);
    };

    //get data center

    module.getDataCenter = function (customerId, appId, adminRequest, callback) {
        http.get(apiEndpoint.getApiEndpoint("v2/customer/" + customerId + "/app/" + appId + "/advance/datacenter"), callback, adminRequest);
    };

    module.resetSMTPConfig = function (customerId, appId, adminRequest, callback) {
        http.put(apiEndpoint.getApiEndpoint("v2/customer/" + customerId + "/app/" + appId + "/userregistration/smtpconfig/reset"), "", callback, adminRequest);
    };

    module.verifySmtpSettings = function (customerId, appId, emailId, subject, message, smtpinfo, adminRequest, callback) {
        http.post(apiEndpoint.getApiEndpoint("v2/customer/" + customerId + "/app/" + appId + "/userregistration/testemail/" + emailId) + "&subject=" + subject + "&message=" + message, smtpinfo, callback, adminRequest);
    };

    module.gethostedPageSettings = function (customerId, appId,adminRequest,  callback) {
        http.get(apiEndpoint.getApiEndpoint("v2/customer/" + customerId + "/app/" + appId + "/hostedPage"), callback, adminRequest);
    };

    module.createhostedPage = function (customerId, appId, hostepageinfo, adminRequest, callback) {
        http.post(apiEndpoint.getApiEndpoint("v2/customer/" + customerId + "/app/" + appId + "/hostedPage"), hostepageinfo, callback, adminRequest);
    };
    module.savehostedPage = function (customerId, appId, hostepageinfo,adminRequest,  callback) {
        http.put(apiEndpoint.getApiEndpoint("v2/customer/" + customerId + "/app/" + appId + "/hostedPage"), hostepageinfo, callback, adminRequest);
    };

    module.requestdatadump = function (customerId, appId, datadumpbody, adminRequest, callback) {
        http.post(apiEndpoint.getApiEndpoint("v2/customer/" + customerId + "/app/" + appId + "/advance/datadump"), datadumpbody, callback, adminRequest);
    };

    module.getdatadump = function (customerId, appId,adminRequest,  callback) {
        http.get(apiEndpoint.getApiEndpoint("v2/customer/" + customerId + "/app/" + appId + "/advance/datadump"), callback, adminRequest);
    };

    module.removedatadump = function (customerId, appId, dumpid,adminRequest,  callback) {
        http.delete(apiEndpoint.getApiEndpoint("v2/customer/" + customerId + "/app/" + appId + "/advance/datadump/" + dumpid), callback, adminRequest);
    };

    return module;
};
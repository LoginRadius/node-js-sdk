module.exports = function ( apiEndpoint,unirest ) {
    
    var module = {};
    var http = require("../util/http.js");

    module.get = function(customerId, appId, adminRequest, callback){
        http.get(apiEndpoint.getApiEndpoint("v2/customer/"+customerId + "/app/" + appId ),callback, adminRequest);
    };

    module.authentication = function(customerId, adminRequest, callback){
        http.get(apiEndpoint.getApiEndpoint("v2/customer/"+customerId + "/app/authentication" ),callback, adminRequest);
    };
    
    module.getAppRole = function(customerId, appId, adminRequest, callback){
        http.get(apiEndpoint.getApiEndpoint("v2/customer/"+customerId + "/app/" + appId+"/role" ),callback, adminRequest);
    };
    
    module.getAllApps = function(customerId, take, skip, adminRequest, callback){
        http.get(apiEndpoint.getApiEndpointWithTakeSkip("v2/customer/"+customerId + "/app/",take,skip),callback, adminRequest);
    };

    module.createApp = function(customerId, appinfo, adminRequest, callback){
        http.post(apiEndpoint.getApiEndpoint("v2/customer/"+customerId + "/app/"),appinfo,callback, adminRequest);
    };

    module.updateApp = function(customerId,appId,appinfo, adminRequest, callback){
        http.put(apiEndpoint.getApiEndpoint("v2/customer/"+customerId + "/app/"+ appId),appinfo,callback, adminRequest);
    };

    module.deleteApp = function(customerId,appId,adminRequest,callback){
        http.delete(apiEndpoint.getApiEndpoint("v2/customer/"+customerId + "/app/"+ appId),callback, adminRequest);
    };
    module.enableApp = function(customerId,appId,adminRequest,callback){
        http.put(apiEndpoint.getApiEndpoint("v2/customer/"+customerId + "/app/"+ appId+"/reactive"),'',callback, adminRequest);
    };
	
    module.transferApp = function(customerId,appId,appinfo,adminRequest,callback){
        http.put(apiEndpoint.getApiEndpoint("v2/customer/"+customerId + "/app/"+ appId+"/advance/changeOwner"),appinfo,callback, adminRequest);
    };

    //provider

    module.getEnabledProviders = function(customerId,appId,adminRequest,callback){
        http.get(apiEndpoint.getApiEndpoint("v2/customer/"+customerId + "/app/" + appId + "/provider"),callback, adminRequest);
    };

    module.setProviderStatus = function(customerId,appId,appinfo,adminRequest,callback){
        http.put(apiEndpoint.getApiEndpoint("v2/customer/"+customerId + "/app/" + appId + "/provider"),appinfo,callback, adminRequest);
    };


    module.getAllProviderConfig = function(customerId,appId,adminRequest,callback){
        http.get(apiEndpoint.getApiEndpoint("v2/customer/"+customerId + "/app/" + appId + "/provider/config"),callback, adminRequest);
    };


    module.setProviderConfig = function(customerId,appId,appinfo,adminRequest,callback){
        http.put(apiEndpoint.getApiEndpoint("v2/customer/"+customerId + "/app/" + appId + "/provider/config"),appinfo,callback, adminRequest);
    };

    //features----

    module.getAllFeatures = function(customerId,appId,adminRequest,callback){
        http.get(apiEndpoint.getApiEndpoint("v2/customer/"+customerId + "/app/" + appId + "/provider/config"),callback, adminRequest);
    };

    module.setFeature = function(customerId,appId,appinfo,adminRequest,callback){
			
        http.put(apiEndpoint.getApiEndpoint("v2/customer/"+customerId + "/app/" + appId + "/feature"),appinfo,callback, adminRequest);
    };

    module.getFeature = function(customerId,appId,adminRequest,callback){
        http.get(apiEndpoint.getApiEndpoint("v2/customer/"+customerId + "/app/" + appId + "/feature"),callback, adminRequest);
    };


    //custom scope

    //create

    module.createCustomScope = function(customerId,appId,appinfo,adminRequest,callback){
        http.post(apiEndpoint.getApiEndpoint("v2/customer/"+customerId + "/app/" + appId + "/customscope"),appinfo,callback, adminRequest);
    };


    module.getCustomScopeList = function(customerId,appId,adminRequest,callback){
        http.get(apiEndpoint.getApiEndpoint("v2/customer/"+customerId + "/app/" + appId + "/customscope"),callback, adminRequest);
    };


    module.setScopeInCustomScope = function(customerId,appId,customScopeName,appinfo,adminRequest,callback){
        http.put(apiEndpoint.getApiEndpoint("v2/customer/"+customerId + "/app/" + appId + "/customscope/" + customScopeName),appinfo,callback, adminRequest);
    };


    module.deleteCustomScope = function(customerId,appId,customScopeName,adminRequest,callback){
        http.delete(apiEndpoint.getApiEndpoint("v2/customer/"+customerId + "/app/" + appId + "/customscope/" + customScopeName),callback, adminRequest);
    };

    //custom oauth
    //create
    module.createCustomOAuthProvider = function(customerId,appId,appinfo,adminRequest,callback){
        http.post(apiEndpoint.getApiEndpoint("v2/customer/"+customerId + "/app/" + appId + "/provider/custom"),appinfo,callback, adminRequest);
    };
    //get
    module.getAllCustomOAuthProviders = function(customerId,appId,adminRequest,callback){
        http.get(apiEndpoint.getApiEndpoint("v2/customer/"+customerId + "/app/" + appId + "/provider/custom"),callback, adminRequest);
    };
    //update
    module.updateCustomOAuthProvider = function(customerId,appId,appinfo,adminRequest,callback){
        http.put(apiEndpoint.getApiEndpoint("v2/customer/"+customerId + "/app/" + appId + "/provider/custom"),appinfo,callback, adminRequest);
    };
    //delete
    module.deleteCustomOAuthProvider = function(customerId,appId,appinfo,adminRequest,callback){
        http.deleteJson(apiEndpoint.getApiEndpoint("v2/customer/"+customerId + "/app/" + appId + "/provider/custom"), appinfo, callback, adminRequest);
    };
    
    //User management

    module.addUser = function(customerId,appinfo,adminRequest,callback){
        http.post(apiEndpoint.getApiEndpoint("v2/customer/"+customerId + "/app/adduser/"),appinfo,callback, adminRequest);
    };


    //get shared app list with permission

    module.getSharedApp = function(customerId,adminRequest,callback){
        http.get(apiEndpoint.getApiEndpoint("v2/customer/"+customerId +  "/app/shared"),callback, adminRequest);
    };


    module.editUserRole = function( customerId, appinfo, adminRequest, callback){
        http.put( apiEndpoint.getApiEndpoint("v2/customer/"+ customerId + "/app/edituserrole" ), appinfo, callback );
    };

    //delete user from app

    module.deleteUser = function(customerId,appId,userId,adminRequest, callback){
        
        http.delete(apiEndpoint.getApiEndpoint("v2/customer/"+customerId + "/app/" + appId + "/deleteuser/"+userId ),callback, adminRequest);
    };


	module.getCustomDomainBinding = function(customerId,appId,adminRequest, callback){
       
        http.get(apiEndpoint.getApiEndpoint("v2/customer/"+customerId + "/app/" + appId + "/customdomainbinding"),callback, adminRequest);
    };
	
	module.setCustomDomainBinding = function(customerId,appId,customdomainInfo,adminRequest, callback){
        http.post(apiEndpoint.getApiEndpoint("v2/customer/"+customerId + "/app/" + appId + "/customdomainbinding"),customdomainInfo,callback, adminRequest);
    };
	
    module.deleteCustomDomainBinding = function(customerId,appId,adminRequest,callback){
        http.delete(apiEndpoint.getApiEndpoint("v2/customer/"+customerId + "/app/" + appId + "/customdomainbinding"),'',callback, adminRequest);
    };

    //get all users for app
    module.getAllAppUsers = function(customerId, adminRequest, callback){
        http.get(apiEndpoint.getApiEndpoint("v2/customer/"+customerId +  "/app/users"),callback, adminRequest);
    };
    
    module.getAllUsersForApp = function(customerId,appId, adminRequest, callback){
	
        http.get(apiEndpoint.getApiEndpoint("v2/customer/"+customerId +  "/app/" + appId + "/users"),callback, adminRequest);
    };

    module.setUserAsActive = function(customerId,appId, adminRequest, callback){
        http.get(apiEndpoint.getApiEndpoint("v2/customer/"+customerId +  "/app/" + appId + "/users"),callback, adminRequest);
    };

    module.getsharedappDetail = function(customerId,appId,adminRequest, callback){
        http.get(apiEndpoint.getApiEndpoint("v2/customer/"+customerId + "/app/" + appId+"/shared" ),callback, adminRequest);
    };

    module.setProviderOrder = function(customerId,appId,appinfo,adminRequest,callback){
        http.put(apiEndpoint.getApiEndpoint("v2/customer/"+customerId + "/app/" + appId + "/provider/setorder"),appinfo,callback, adminRequest);
    };

    //Log APIs
    module.getAppLogs = function( customerId, appId, cursor, adminRequest, callback) {
        http.get(apiEndpoint.getApiEndpoint("v2/customer/"+customerId + "/app/" + appId + "/logs") + '&cursor=' + cursor, callback, adminRequest);
    };
    module.getAllAppLogs = function( customerId, cursor, adminRequest, callback) {
        http.get(apiEndpoint.getApiEndpoint("v2/customer/"+customerId + "/app/logs" ) + '&cursor=' + cursor, callback, adminRequest);
    };

    // SAML(Security Assertion Markup Language) APIs
    module.getSamlConfiguration = function( customerId, appId,adminRequest, callback) {
        http.get(apiEndpoint.getApiEndpoint("v2/customer/"+customerId + "/app/" + appId + "/saml"), callback, adminRequest);
    };
    module.addSamlConfiguration = function( customerId, appId, samlConfiguration , adminRequest, callback) {
        http.post(apiEndpoint.getApiEndpoint("v2/customer/"+customerId + "/app/" + appId + "/saml"), samlConfiguration, callback, adminRequest);
    };
    module.updateSamlConfiguration = function( customerId, appId, samlConfiguration ,adminRequest, callback) {
        http.put(apiEndpoint.getApiEndpoint("v2/customer/"+customerId + "/app/" + appId + "/saml"), samlConfiguration, callback, adminRequest);
    };
    module.deleteSamlConfiguration = function( customerId, appId, samlDeleteConfiguration ,adminRequest, callback) {
        http.deleteJson(apiEndpoint.getApiEndpoint("v2/customer/"+customerId + "/app/" + appId + "/saml"), samlDeleteConfiguration, callback, adminRequest);
    };
    return module;
};

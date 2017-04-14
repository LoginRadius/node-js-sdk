module.exports = function ( config ) {

    var module = {};
    module.permission = {};
    var roleEndpoint = "/identity/v2/manage/";
    var helper = require('./../helper.js');
    
    // Create Account Role( POST )
    module.create = function( formData ) {
        return new Promise( function( resolve, reject ) {
            config.request( { method: 'post',uri: config.apidomain + roleEndpoint +"role?apikey=" + config.apikey + "&apisecret=" + config.apisecret, headers: { 'content-type': 'application/json' }, body: JSON.stringify(formData) }, function ( data ) {
                if(helper.checkError(data)) {
                    reject( data );
                } else {
                    resolve( data );
                }
            });
        });
    }

    // Get Account Role( GET )
    module.get = function() {
        return new Promise( function( resolve, reject ) {
            config.request( { uri: config.apidomain + roleEndpoint +"role?apikey=" + config.apikey + "&apisecret=" + config.apisecret }, function ( data ) {
                if(helper.checkError(data)) {
                    reject( data );
                } else {
                    resolve( data );
                }
            });
        });
    }

    // Delete Account Role( DELETE )
    module.remove = function(role) {
        return new Promise( function( resolve, reject ) {
            config.request( {method: 'DELETE', uri: config.apidomain + roleEndpoint +"role/"+ role +"?apikey=" + config.apikey + "&apisecret=" + config.apisecret}, function ( data ) {
                if(helper.checkError(data)) {
                    reject( data );
                } else {
                    resolve( data );
                }
            });
        });
    }
	
    // Add Permissions To Role( PUT )
    module.permission.add = function(role, formData) {
        return new Promise( function( resolve, reject ) {
            config.request( { method: 'PUT', uri: config.apidomain + roleEndpoint +"role/" + role + "/permission?apikey=" + config.apikey + "&apisecret=" + config.apisecret , headers: { 'content-type': 'application/json' }, body: JSON.stringify(formData) }, function ( data ) {
                if(helper.checkError(data)) {
                    reject( data );
                } else {
                    resolve( data );
                }
            });
        });
    }

    // Remove Account Permission( DELETE )
    module.permission.remove = function(role, formData) {
        return new Promise( function( resolve, reject ) {
            config.request( { method: 'DELETE', uri: config.apidomain + roleEndpoint +"role/"+ role +"/permission?apikey=" + config.apikey + "&apisecret=" + config.apisecret , headers: { 'content-type': 'application/json' }, body: JSON.stringify(formData) }, function ( data ) {
                if(helper.checkError(data)) {
                    reject( data );
                } else {
                    resolve( data );
                }
            });
        });
    }

  

    return module;
};
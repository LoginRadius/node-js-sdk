module.exports = function ( config ) {

    var module = {};
    module.permission = {};
    module.context = {};
    var roleEndpoint = "/identity/v2/manage/";
    var helper = require('./../helper.js');
    
    // Create Account Role( POST )
    module.create = function( formData, fields ) {
        helper.checkFields(fields, config);
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
    module.get = function( fields) {
        helper.checkFields(fields, config);
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
    module.remove = function(role, fields) {
        helper.checkFields(fields, config);
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
    module.permission.add = function(role, formData, fields) {
        helper.checkFields(fields, config);
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
    module.permission.remove = function(role, formData, fields) {
        helper.checkFields(fields, config);
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

    // Get Context with Roles and Permissions( GET )
    module.context.get = function( uid, fields ) {
        helper.checkFields(fields, config);
        return new Promise( function( resolve, reject ) {
            config.request( { uri: config.apidomain + roleEndpoint +"account/"+ uid +"/rolecontext?apikey=" + config.apikey + "&apisecret=" + config.apisecret },
                function ( data ) {
                if(helper.checkError(data)) {
                    reject( data );
                } else {
                    resolve( data );
                }
            });
        });
    }

    // Add/Update Role Context with  Roles and Permissions( PUT )
    module.context.add = function( uid, formData, fields ) {
        helper.checkFields(fields, config);
        return new Promise( function( resolve, reject ) {
            config.request( { method: 'PUT', uri: config.apidomain + roleEndpoint +"account/"+ uid +"/rolecontext?apikey=" + config.apikey + "&apisecret=" + config.apisecret, headers: { 'content-type': 'application/json' }, body: JSON.stringify(formData) }, function ( data ) {
                if(helper.checkError(data)) {
                    reject( data );
                } else {
                    resolve( JSON.stringify(data) );
                }
            });
        });
    }

    // Delete Context ( Delete )
    module.context.delete = function( uid, roleContextName, fields ) {
        helper.checkFields(fields, config);
        return new Promise( function( resolve, reject ) {
            config.request( { method: 'DELETE', uri: config.apidomain + roleEndpoint +"account/" + uid + "/rolecontext/" + roleContextName +"?apikey=" + config.apikey + "&apisecret=" + config.apisecret, headers: { 'content-type': 'application/json' } }, function ( data ) {
                if(helper.checkError(data)) {
                    reject( data );
                } else {
                    resolve( data );
                }
            });
        });
    }

    // Delete Role from context ( Delete )
    module.context.deleteRole = function( uid, roleContextName, roleName, fields ) {
        var formData = { "Roles" : [roleName] };
        helper.checkFields(fields, config);
        return new Promise( function( resolve, reject ) {
            config.request( { method: 'DELETE', uri: config.apidomain + roleEndpoint +"account/" + uid + "/rolecontext/" + roleContextName + "/role?apikey=" + config.apikey + "&apisecret=" + config.apisecret, headers: { 'content-type': 'application/json' }, body: JSON.stringify(formData) }, function ( data ) {
                if(helper.checkError(data)) {
                    reject( data );
                } else {
                    resolve( data );
                }
            });
        });
    }

    // Delete Additional Permission ( Delete )
    module.context.deletePermission = function( uid, roleContextName, additionalPermission, fields ) {
        var formData = { "AdditionalPermissions" : [additionalPermission] };
        helper.checkFields(fields, config);
        return new Promise( function( resolve, reject ) {
            config.request( { method: 'DELETE', uri: config.apidomain + roleEndpoint +"account/" + uid + "/rolecontext/" + roleContextName + "/additionalpermission?apikey=" + config.apikey + "&apisecret=" + config.apisecret, headers: { 'content-type': 'application/json' }, body: JSON.stringify(formData) }, function ( data ) {
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
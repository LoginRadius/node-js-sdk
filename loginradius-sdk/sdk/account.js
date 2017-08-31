module.exports = function (config, helper) {

    var module = {};
    var accountEndpoint = "/identity/v2/manage/account/";
    var archivedEndpoint = "/api/v2/identity/archived?apikey=";
    var helper = require('./../helper.js');

    module.profile = {};

    // Get Access Token based on UID or user impersonation API ( GET )
    module.getByUid = function ( uid, fields ) {
        helper.checkFields(fields, config);
        return new Promise(function (resolve, reject) {
            config.request({uri: config.apidomain + accountEndpoint +"access_token?apikey=" + config.apikey + "&apisecret=" + config.apisecret +"&uid=" +uid }, function (data) {
                if (helper.checkError(data)) {
                    reject(data);
                } else {
                    resolve(data);
                }
            });
        });
    };

    // Create Account( POST )
    module.create = function (formData, fields) {
        helper.checkFields(fields, config);
        return new Promise(function (resolve, reject) {
            config.request({
                method: "POST",
                uri: config.apidomain + accountEndpoint + "?apikey=" + config.apikey + "&apisecret=" + config.apisecret,
                headers: {'content-type': 'application/json'},
                body: JSON.stringify(formData)
            }, function (data) {
                if (helper.checkError(data)) {
                    reject(data);
                } else {
                    resolve(data);
                }
            });
        });
    };

    // Get Forgot Password token( POST )
    module.forgotPasswordToken = function (email, fields) {
        var payload = {
            "email": email
        }
        helper.checkFields(fields, config);
        return new Promise(function (resolve, reject) {
            config.request({
                method: "POST",
                uri: config.apidomain + accountEndpoint + "forgot/token?apikey=" + config.apikey + "&apisecret=" + config.apisecret,
                headers: {'content-type': 'application/json'},
                body: JSON.stringify(payload)
            }, function (data) {
                if (helper.checkError(data)) {
                    reject(data);
                } else {
                    resolve(data);
                }
            });
        });
    };

    // Get Email Verification token( POST )
    module.emailVerifyToken = function (email, fields) {
        var payload = {
            "email": email
        }
        helper.checkFields(fields, config);
        return new Promise(function (resolve, reject) {
            config.request({
                method: "POST",
                uri: config.apidomain + accountEndpoint + "verify/token?apikey=" + config.apikey + "&apisecret=" + config.apisecret,
                headers: {'content-type': 'application/json'},
                body: JSON.stringify(payload)
            }, function (data) {
                if (helper.checkError(data)) {
                    reject(data);
                } else {
                    resolve(data);
                }
            });
        });
    };

    // Get Profile By Email( GET )
    module.profile.getByEmail = function (email, fields) {
        helper.checkFields(fields, config);
        return new Promise(function (resolve, reject) {
            config.request({uri: config.apidomain + accountEndpoint + "?apikey=" + config.apikey + "&apisecret=" + config.apisecret + "&email=" + email}, function (data) {
                if (helper.checkError(data)) {
                    reject(data);
                } else {
                    resolve(data);
                }
            });
        });
    };

    // Get Profile By Username( GET )
    module.profile.getByUsername = function (username, fields) {
        helper.checkFields(fields, config);
        return new Promise(function (resolve, reject) {
            config.request({uri: config.apidomain + accountEndpoint + "?apikey=" + config.apikey + "&apisecret=" + config.apisecret + "&username=" + username}, function (data) {
                if (helper.checkError(data)) {
                    reject(data);
                } else {
                    resolve(data);
                }
            });
        });
    };

    // Get Profile By Phone( GET )
    module.profile.getByPhone = function (phone, fields) {
        helper.checkFields(fields, config);
        return new Promise(function (resolve, reject) {
            config.request({uri: config.apidomain + accountEndpoint + "?apikey=" + config.apikey + "&apisecret=" + config.apisecret + "&phone=" + phone}, function (data) {
                if (helper.checkError(data)) {
                    reject(data);
                } else {
                    resolve(data);
                }
            });
        });
    };

    // Get Profile By UID( GET )
    module.profile.getByUid = function (uid, fields) {
        helper.checkFields(fields, config);
        return new Promise(function (resolve, reject) {
            config.request({uri: config.apidomain + accountEndpoint + uid + "?apikey=" + config.apikey + "&apisecret=" + config.apisecret}, function (data) {
                if (helper.checkError(data)) {
                    reject(data);
                } else {
                    resolve(data);
                }
            });
        });
    };

    // Account Update( PUT )
    /*
     @nullSupport: (boolean) Default value will be false, pass true if wants to update other fields with null.
     */
    module.update = function (uid, formData, nullSupport, fields) {
        helper.checkFields(fields, config);
        nullSupport = helper.checkNullSupport(nullSupport);
        return new Promise(function (resolve, reject) {
            config.request({
                method: "PUT",
                uri: config.apidomain + accountEndpoint + uid + "?apikey=" + config.apikey + "&apisecret=" + config.apisecret + "&nullSupport=" + nullSupport,
                headers: {'content-type': 'application/json'},
                body: JSON.stringify(formData)
            }, function (data) {
                if (helper.checkError(data)) {
                    reject(data);
                } else {
                    resolve(data);
                }
            });
        });
    };

    // Account Delete( DELETE )
    module.remove = function (uid, fields) {
        helper.checkFields(fields, config);
        return new Promise(function (resolve, reject) {
            config.request({
                method: "DELETE",
                uri: config.apidomain + accountEndpoint + uid + "?apikey=" + config.apikey + "&apisecret=" + config.apisecret
            }, function (data) {
                if (helper.checkError(data)) {
                    reject(data);
                } else {
                    resolve(data);
                }
            });
        });
    };

    // Account Set Password( PUT )
    module.setPassword = function (uid, password, fields) {
        var formData = {
            "password": password
        };
        helper.checkFields(fields, config);
        return new Promise(function (resolve, reject) {
            config.request({
                method: "PUT",
                uri: config.apidomain + accountEndpoint + uid + "/password?apikey=" + config.apikey + "&apisecret=" + config.apisecret,
                headers: {'content-type': 'application/json'},
                body: JSON.stringify(formData)
            }, function (data) {
                if (helper.checkError(data)) {
                    reject(data);
                } else {
                    resolve(data);
                }
            });
        });
    };

    // Account GET Password( GET )
    module.getPassword = function (uid, fields) {
        helper.checkFields(fields, config);
        return new Promise(function (resolve, reject) {
            config.request({uri: config.apidomain + accountEndpoint + uid + "/password?apikey=" + config.apikey + "&apisecret=" + config.apisecret}, function (data) {
                if (helper.checkError(data)) {
                    reject(data);
                } else {
                    resolve(data);
                }
            });
        });
    };


	
    //Account Invalidate Verification Email( PUT )
    module.invalidateVerificationEmail = function (uid, verificationUrl, emailTemplate, fields) {
        helper.checkFields(fields, config);
        verificationUrl = helper.checkNullOrUndefined(verificationUrl);
        emailTemplate = helper.checkNullOrUndefined(emailTemplate);
        return new Promise(function (resolve, reject) {
            config.request({
                method: "PUT",
                uri: config.apidomain + accountEndpoint + uid + "/invalidateemail?apikey=" + config.apikey + "&apisecret=" + config.apisecret + "&verificationUrl=" + verificationUrl + "&emailTemplate=" + emailTemplate
            }, function (data) {
                if (helper.checkError(data)) {
                    reject(data);
                } else {
                    resolve(data);
                }
            });
        });
    };

	
	
    // Account Deleted Profile by Email( GET )
    module.getDeletedAccountByEmail = function (email, fields) {
        helper.checkFields(fields, config);
        return new Promise(function (resolve, reject) {
            config.request({uri: config.apidomain + archivedEndpoint + config.apikey + "&apisecret=" + config.apisecret + "&email=" + email}, function (data) {
                if (helper.checkError(data)) {
                    reject(data);
                } else {
                    resolve(data);
                }
            });
        });
    };

    // Account Deleted Profile by Phone( GET )
    module.getDeletedAccountByPhone = function (phone, fields) {
        helper.checkFields(fields, config);
        return new Promise(function (resolve, reject) {
            config.request({uri: config.apidomain + archivedEndpoint + config.apikey + "&apisecret=" + config.apisecret + "&phone=" + phone}, function (data) {
                if (helper.checkError(data)) {
                    reject(data);
                } else {
                    resolve(data);
                }
            });
        });
    };

    // Account Deleted Profile by UID( GET )
    module.getDeletedAccountByUid = function (uid, fields) {
        helper.checkFields(fields, config);
        return new Promise(function (resolve, reject) {
            config.request({uri: config.apidomain + archivedEndpoint + config.apikey + "&apisecret=" + config.apisecret + "&uid=" + uid}, function (data) {
                if (helper.checkError(data)) {
                    reject(data);
                } else {
                    resolve(data);
                }
            });
        });
    };

	
	  // Put Assign Role( PUT )
    module.assignRole = function(uid, formData, fields) {
        helper.checkFields(fields, config);
        return new Promise( function( resolve, reject ) {
            config.request( { method: 'PUT', uri: config.apidomain + accountEndpoint + uid + "/role?apikey=" + config.apikey + "&apisecret=" + config.apisecret , headers: { 'content-type': 'application/json' }, body: JSON.stringify(formData) }, function ( data ) {
                if(helper.checkError(data)) {
                    reject( data );
                } else {
                    resolve( data );
                }
            });
        });
    }

    // UnAssign Role( DELETE )
	 module.unassignRole = function(uid, formData, fields) {
         helper.checkFields(fields, config);
        return new Promise( function( resolve, reject ) {
            config.request( { method: 'DELETE', uri: config.apidomain + accountEndpoint + uid + "/role?apikey=" + config.apikey + "&apisecret=" + config.apisecret , headers: { 'content-type': 'application/json' }, body: JSON.stringify(formData) }, function ( data ) {
                if(helper.checkError(data)) {
                    reject( data );
                } else {
                    resolve( data );
                }
            });
        });
    };
	
    // Get Role By Uid( GET )
    module.getRoleByUid = function( uid, fields ) {
        helper.checkFields(fields, config);
        return new Promise( function( resolve, reject ) {
            config.request( { uri: config.apidomain + accountEndpoint + uid + "/role?apikey=" + config.apikey + "&apisecret=" + config.apisecret }, function ( data ) {
                if(helper.checkError(data)) {
                    reject( data );
                } else {
                    resolve( data );
                }
            });
        });
    }

    // Update Security Question( PUT )
    module.updateSecurityQuestion = function (uid, formData, fields) {
        helper.checkFields(fields, config);
        return new Promise(function (resolve, reject) {
            config.request({
                method: "PUT",
                uri: config.apidomain + accountEndpoint + uid + "?apikey=" + config.apikey + "&apisecret=" + config.apisecret,
                headers: {'content-type': 'application/json'},
                body: JSON.stringify(formData)
            }, function (data) {
                if (helper.checkError(data)) {
                    reject(data);
                } else {
                    resolve(data);
                }
            });
        });
    }
    
    // Reset phone ID verification or Invalidate phone( PUT )
    module.invalidatephone = function ( uid, fields ) {
        helper.checkFields(fields, config);
        return new Promise(function (resolve, reject) {
            config.request({
                method: "PUT",
                uri: config.apidomain + accountEndpoint + uid + "/invalidatephone?apikey=" + config.apikey + "&apisecret=" + config.apisecret
            }, function (data) {
                if (helper.checkError(data)) {
                    reject(data);
                } else {
                    resolve(data);
                }
            });
        });
    }

    // Get SOTT( GET )
    module.generateSott = function( timeDifference, fields ) {
        helper.checkFields(fields, config);
        if(!timeDifference){
            var timeDifference = "10";
        }
        return new Promise( function( resolve, reject ) {
            config.request( { uri: config.apidomain + accountEndpoint + "sott?apikey=" + config.apikey + "&apisecret=" + config.apisecret + "&timedifference="+ timeDifference }, function ( data ) {
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
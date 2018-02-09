module.exports = function (config, helper) {

    var module = {};
    var accountEndpoint = "/identity/v2/manage/account/";
    var archivedEndpoint = "/api/v2/identity/archived";
    var helper = require('./../helper.js');

    module.profile = {};

    // Get Access Token based on UID or user impersonation API ( GET )
    module.getByUid = function ( uid, fields ) {
        helper.checkFields(fields, config);
        return new Promise(function (resolve, reject) {
            config.request({uri: config.apidomain + accountEndpoint +"access_token?uid=" +uid }, function (data) {
                if (helper.checkError(data)) {
                    reject(data);
                } else {
                    resolve(data);
                }
            },true);
        });
    };

    // Create Account( POST )
    module.create = function (formData, fields) {
        helper.checkFields(fields, config);
        return new Promise(function (resolve, reject) {
            config.request({
                method: "POST",
                uri: config.apidomain + accountEndpoint,
                headers: {'content-type': 'application/json'},
                body: JSON.stringify(formData)
            }, function (data) {
                if (helper.checkError(data)) {
                    reject(data);
                } else {
                    resolve(data);
                }
            },true);
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
                uri: config.apidomain + accountEndpoint + "forgot/token",
                headers: {'content-type': 'application/json'},
                body: JSON.stringify(payload)
            }, function (data) {
                if (helper.checkError(data)) {
                    reject(data);
                } else {
                    resolve(data);
                }
            },true);
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
                uri: config.apidomain + accountEndpoint + "verify/token",
                headers: {'content-type': 'application/json'},
                body: JSON.stringify(payload)
            }, function (data) {
                if (helper.checkError(data)) {
                    reject(data);
                } else {
                    resolve(data);
                }
            },true);
        });
    };

    // Get Profile By Email( GET )
    module.profile.getByEmail = function (email, fields) {
        helper.checkFields(fields, config);
        return new Promise(function (resolve, reject) {
            config.request({uri: config.apidomain + accountEndpoint + "?email=" + email}, function (data) {
                if (helper.checkError(data)) {
                    reject(data);
                } else {
                    resolve(data);
                }
            },true);
        });
    };

    // Get Profile By Username( GET )
    module.profile.getByUsername = function (username, fields) {
        helper.checkFields(fields, config);
        return new Promise(function (resolve, reject) {
            config.request({uri: config.apidomain + accountEndpoint + "?username=" + username}, function (data) {
                if (helper.checkError(data)) {
                    reject(data);
                } else {
                    resolve(data);
                }
            },true);
        });
    };

    // Get Profile By Phone( GET )
    module.profile.getByPhone = function (phone, fields) {
        helper.checkFields(fields, config);
        return new Promise(function (resolve, reject) {
            config.request({uri: config.apidomain + accountEndpoint + "?phone=" + phone}, function (data) {
                if (helper.checkError(data)) {
                    reject(data);
                } else {
                    resolve(data);
                }
            },true);
        });
    };

    // Get Profile By UID( GET )
    module.profile.getByUid = function (uid, fields) {
        helper.checkFields(fields, config);
        return new Promise(function (resolve, reject) {
            config.request({uri: config.apidomain + accountEndpoint + uid }, function (data) {
                if (helper.checkError(data)) {
                    reject(data);
                } else {
                    resolve(data);
                }
            },true);
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
                uri: config.apidomain + accountEndpoint + uid + "?nullSupport=" + nullSupport,
                headers: {'content-type': 'application/json'},
                body: JSON.stringify(formData)
            }, function (data) {
                if (helper.checkError(data)) {
                    reject(data);
                } else {
                    resolve(data);
                }
            },true);
        });
    };

    // Account Delete( DELETE )
    module.remove = function (uid, fields) {
        helper.checkFields(fields, config);
        return new Promise(function (resolve, reject) {
            config.request({
                method: "DELETE",
                uri: config.apidomain + accountEndpoint + uid
            }, function (data) {
                if (helper.checkError(data)) {
                    reject(data);
                } else {
                    resolve(data);
                }
            },true);
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
                uri: config.apidomain + accountEndpoint + uid + "/password",
                headers: {'content-type': 'application/json'},
                body: JSON.stringify(formData)
            }, function (data) {
                if (helper.checkError(data)) {
                    reject(data);
                } else {
                    resolve(data);
                }
            },true);
        });
    };

    // Account GET Password( GET )
    module.getPassword = function (uid, fields) {
        helper.checkFields(fields, config);
        return new Promise(function (resolve, reject) {
            config.request({uri: config.apidomain + accountEndpoint + uid + "/password"}, function (data) {
                if (helper.checkError(data)) {
                    reject(data);
                } else {
                    resolve(data);
                }
            },true);
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
                uri: config.apidomain + accountEndpoint + uid + "/invalidateemail?verificationUrl=" + verificationUrl + "&emailTemplate=" + emailTemplate
            }, function (data) {
                if (helper.checkError(data)) {
                    reject(data);
                } else {
                    resolve(data);
                }
            },true);
        });
    };

	
	
    // Account Deleted Profile by Email( GET )
    module.getDeletedAccountByEmail = function (email, fields) {
        helper.checkFields(fields, config);
        return new Promise(function (resolve, reject) {
            config.request({uri: config.apidomain + archivedEndpoint + "?email=" + email}, function (data) {
                if (helper.checkError(data)) {
                    reject(data);
                } else {
                    resolve(data);
                }
            },true);
        });
    };

    // Account Deleted Profile by Phone( GET )
    module.getDeletedAccountByPhone = function (phone, fields) {
        helper.checkFields(fields, config);
        return new Promise(function (resolve, reject) {
            config.request({uri: config.apidomain + archivedEndpoint + "?phone=" + phone}, function (data) {
                if (helper.checkError(data)) {
                    reject(data);
                } else {
                    resolve(data);
                }
            },true);
        });
    };

    // Account Deleted Profile by UID( GET )
    module.getDeletedAccountByUid = function (uid, fields) {
        helper.checkFields(fields, config);
        return new Promise(function (resolve, reject) {
            config.request({uri: config.apidomain + archivedEndpoint + "?uid=" + uid}, function (data) {
                if (helper.checkError(data)) {
                    reject(data);
                } else {
                    resolve(data);
                }
            },true);
        });
    };

	
	  // Put Assign Role( PUT )
    module.assignRole = function(uid, formData, fields) {
        helper.checkFields(fields, config);
        return new Promise( function( resolve, reject ) {
            config.request( { method: 'PUT', uri: config.apidomain + accountEndpoint + uid + "/role" , headers: { 'content-type': 'application/json' }, body: JSON.stringify(formData) }, function ( data ) {
                if(helper.checkError(data)) {
                    reject( data );
                } else {
                    resolve( data );
                }
            },true);
        });
    }

    // UnAssign Role( DELETE )
	 module.unassignRole = function(uid, formData, fields) {
         helper.checkFields(fields, config);
        return new Promise( function( resolve, reject ) {
            config.request( { method: 'DELETE', uri: config.apidomain + accountEndpoint + uid + "/role" , headers: { 'content-type': 'application/json' }, body: JSON.stringify(formData) }, function ( data ) {
                if(helper.checkError(data)) {
                    reject( data );
                } else {
                    resolve( data );
                }
            },true);
        });
    };
	
    // Get Role By Uid( GET )
    module.getRoleByUid = function( uid, fields ) {
        helper.checkFields(fields, config);
        return new Promise( function( resolve, reject ) {
            config.request( { uri: config.apidomain + accountEndpoint + uid + "/role" }, function ( data ) {
                if(helper.checkError(data)) {
                    reject( data );
                } else {
                    resolve( data );
                }
            },true);
        });
    }

    // Update Security Question( PUT )
    module.updateSecurityQuestion = function (uid, formData, fields) {
        helper.checkFields(fields, config);
        return new Promise(function (resolve, reject) {
            config.request({
                method: "PUT",
                uri: config.apidomain + accountEndpoint + uid,
                headers: {'content-type': 'application/json'},
                body: JSON.stringify(formData)
            }, function (data) {
                if (helper.checkError(data)) {
                    reject(data);
                } else {
                    resolve(data);
                }
            },true);
        });
    }
    
    // Reset phone ID verification or Invalidate phone( PUT )
    module.invalidatephone = function ( uid, fields ) {
        helper.checkFields(fields, config);
        return new Promise(function (resolve, reject) {
            config.request({
                method: "PUT",
                uri: config.apidomain + accountEndpoint + uid + "/invalidatephone"
            }, function (data) {
                if (helper.checkError(data)) {
                    reject(data);
                } else {
                    resolve(data);
                }
            },true);
        });
    }

    // Get SOTT( GET )
    module.generateSott = function( timeDifference, fields ) {
        helper.checkFields(fields, config);
        if(!timeDifference){
            var timeDifference = "10";
        }
        return new Promise( function( resolve, reject ) {
            config.request({ uri: config.apidomain + accountEndpoint + "sott?timedifference="+ timeDifference }, function ( data ) {
                if(helper.checkError(data)) {
                    reject( data );
                } else {
                    resolve( data );
                }
            },true);
        });
    }
	
    return module;
};
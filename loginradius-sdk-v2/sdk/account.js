module.exports = function (config, helper) {

    var module = {};
    var accountEndpoint = "/identity/v2/manage/account/";
    var archivedEndpoint = "/api/v2/identity/archived?apikey=";
    var helper = require('./../helper.js');

    module.profile = {};

    // Get Access Token based on UID or user impersonation API ( GET )
    module.getByUid = function ( uid ) {
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
    module.create = function (formData) {
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
    module.forgotPasswordToken = function (email) {
        var payload = {
            "email": email
        }
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
    module.emailVerifyToken = function (email) {
        var payload = {
            "email": email
        }
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
    module.profile.getByEmail = function (email) {
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
    module.profile.getByUsername = function (username) {
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
    module.profile.getByPhone = function (phone) {
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
    module.profile.getByUid = function (uid) {
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
    module.update = function (uid, formData) {
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
    };

    // Account Delete( DELETE )
    module.remove = function (uid) {
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
    module.setPassword = function (uid, password) {
        var formData = {
            "password": password
        };
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
    module.getPassword = function (uid) {
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
    module.invalidateVerificationEmail = function (uid, verificationUrl, emailTemplate) {
        verificationUrl = helper.checkNullOrUndefined(verificationUrl);
        emailTemplate = helper.checkNullOrUndefined(emailTemplate);
        return new Promise(function (resolve, reject) {
            config.request({
                method: "PUT",
                uri: config.apidomain + accountEndpoint + uid + "/invalidateemail?apikey=" + config.apikey + "&apisecret=" + config.apisecret + "&verificationUrl=" + verificationUrl + "&emailTemplate=" + emailTemplate
            }, function (data) {
                console.log(data);
                if (helper.checkError(data)) {
                    reject(data);
                } else {
                    resolve(data);
                }
            });
        });
    };

	
	
    // Account Deleted Profile by Email( GET )
    module.getDeletedAccountByEmail = function (email) {
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
    module.getDeletedAccountByPhone = function (phone) {
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
    module.getDeletedAccountByUid = function (uid) {
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
    module.assignRole = function(uid, formData) {
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

	 module.unassignRole = function(uid, formData) {
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
    module.getRoleByUid = function( uid ) {
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
    module.updateSecurityQuestion = function (uid, formData) {
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
	
    return module;
};
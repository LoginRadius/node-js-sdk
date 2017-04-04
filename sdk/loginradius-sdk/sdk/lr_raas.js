
module.exports = function ( config ) {
    
    var module = {};

    // User Authentication( GET )
    module.getUserAuthentication = function( username, password ) {
        return new Promise( function( resolve, reject ) {
            config.request( { uri: config.apidomain + "/raas/v1/user?appkey=" + config.apikey + "&appsecret=" + config.apisecret + "&username=" + username + "&password=" + password }, function ( data ) {
                if( data && data.errorCode ) {
                    reject( data );
                } else {
                    resolve( data );
                }   
            });
        }); 
    };
    
    /**The getSessions API is used to get the active sessions for an accountId.
    * @function  
    * @public
    * @param token {String} A valid account Id.
    */
    module.getSessions = function( accountId ) {
        return new Promise( function( resolve, reject ) {
            config.request( { uri: config.apidomain + "/api/v2/access_token/activeSession?key=" + config.apikey + "&secret=" + config.apisecret +"&accountId=" +accountId}, function( data ) {
                if( data && data.errorCode ) {
                    reject( data );
                } else {
                    resolve( data );
                }
                
            });
        });
    }

    // User Create( POST )
    module.postUserCreate = function( formData ) {
        return new Promise( function( resolve, reject ) {
            config.request( { method: 'POST', uri: config.apidomain + "/raas/v1/user?appkey=" + config.apikey + "&appsecret=" + config.apisecret, form: formData, headers: { 'content-type': 'application/x-www-form-urlencoded' } }, function ( data ) {
                if( data && data.errorCode ) {
                    reject( data );
                } else {
                    resolve( data );
                }   
            });
        });
    }

    // User Create Registration Profile( POST )
    module.postUserCreateRegistrationProfile = function( formData ) {
        return new Promise( function( resolve, reject ) {
            config.request( { method: 'POST', uri: config.apidomain + "/raas/v1/account/profile?appkey=" + config.apikey + "&appsecret=" + config.apisecret, form: formData, headers: { 'content-type': 'application/x-www-form-urlencoded' } }, function ( data ) {
                if( data && data.errorCode ) {
                    reject( data );
                } else {
                    resolve( data );
                }   
            });
        });
    }

    // User Delete with Email Confirmation ( GET )
    module.getUserDeleteWithEmailConfirm = function( id, link, template ) {
        return new Promise( function( resolve, reject ) {
            config.request( { uri: config.apidomain + "/raas/v1/user/deleteuseremail?appkey=" + config.apikey + "&appsecret=" + config.apisecret + "&userid=" + id + "&deleteuserlink=" + link + "&template=" + template }, function ( data ) {
                if( data && data.errorCode ) {
                    reject( data );
                } else {
                    resolve( data );
                }   
            });
        });
    };
    
    // User Email Add/Remove( POST )
    module.postUserEmailAddRemove = function( formData ) {
        return new Promise( function( resolve, reject ) {
            config.request( { method: 'POST', uri: config.apidomain + "/raas/v1/account/email?appkey=" + config.apikey + "&appsecret=" + config.apisecret + "&accountid=" + formData.accountid + "&action=" + formData.action, form: formData, headers: { 'content-type': 'application/x-www-form-urlencoded' } }, function ( data ) {
                if( data && data.errorCode ) {
                    reject( data );
                } else {
                    resolve( data );
                }   
            });
        });
    }

    // User Email Availability( GET )
    module.getUserEmailAvailability = function( email ) {
        return new Promise( function( resolve, reject ) {
            config.request( { uri: config.apidomain + "/raas/client/auth/checkEmail?apikey=" + config.apikey + "&email=" + email }, function ( data ) {
                if( data && data.errorCode ) {
                    reject( data );
                } else {
                    resolve( data );
                }   
            });
        });
    }

    // User Email Availability - Server( GET )
    module.getUserEmailAvailabilityServer = function( email ) {
        return new Promise( function( resolve, reject ) {
            config.request( { uri: config.apidomain + "/raas/v1/user/checkemail?appkey=" + config.apikey + "&appsecret=" + config.apisecret + "&emailid=" + email }, function ( data ) {
                if( data && data.errorCode ) {
                    reject( data );
                } else {
                    resolve( data );
                }   
            });
        });
    }

    // User Password Forgot Token( GET )
    module.getUserPasswordForgotToken = function( email ) {
        return new Promise( function( resolve, reject ) {
            config.request( { uri: config.apidomain + "/raas/v1/account/password/forgot?appkey=" + config.apikey + "&appsecret=" + config.apisecret + "&email=" + email }, function ( data ) {
                if( data && data.errorCode ) {
                    reject( data );
                } else {
                    resolve( data );
                }   
            });
        });
    }
	
	// User Password Reset( POST )
    module.postUserPasswordReset = function( vtoken, password, welcomeEmailTemplate ) {
        var formData={
            "password": password
        }
        return new Promise( function( resolve, reject ) {
            config.request( { method: 'POST', uri: config.apidomain + "/raas/v1/account/password/reset?appkey=" + config.apikey + "&appsecret=" + config.apisecret + "&vtoken=" + vtoken + "&welcomeEmailTemplate=" + welcomeEmailTemplate , headers: { 'content-type': 'application/json' }, body: JSON.stringify(formData) }, function ( data ) {
                if( data && data.errorCode ) {
                    reject( data );
                } else {
                    resolve( data );
                }
            });
        });
    }
	
	    // User Password Forgot Send( GET )
    module.getUserPasswordForgotSend = function( email , domain , template) {
        return new Promise( function( resolve, reject ) {
            config.request( { uri: config.apidomain + "/raas/client/password/forgot?apikey=" + config.apikey  + "&emailid=" + email+"&resetpasswordurl="+domain+"&template="+template }, function ( data ) {
				
                if( data && data.errorCode ) {
                    reject( data );
                } else {
                    resolve( data );
                }   
            });
        });
    }

    // User Profile By Access Token( GET )
    module.getUserProfileByAccessToken = function ( access_token ) {
        return new Promise( function( resolve, reject ) {
            config.request( config.apidomain + "/api/v2/userprofile?access_token=" + access_token, function ( data ) {
                if( data && data.errorCode ) {
                    reject( data );
                } else {
                    resolve( data );
                }   
            });
        });
    }

    // Deprecated
    // User Password( GET )
    module.getUserPassword = function ( userid ) {
        return new Promise( function( resolve, reject ) {
            config.request( { uri: config.apidomain + "/raas/v1/user/password?appkey=" + config.apikey + "&appsecret=" + config.apisecret + "&userid=" + userid }, function ( data ) {
                if( data && data.errorCode ) {
                    reject( data );
                } else {
                    resolve( data );
                }   
            });
        });
    }

    // Deprecated
    // User Password Update( POST )
    module.postUserPasswordUpdate = function( formData ) {
        return new Promise( function( resolve, reject ) {
            config.request( { method: 'POST', uri: config.apidomain + "/raas/v1/user/password?appkey=" + config.apikey + "&appsecret=" + config.apisecret + "&userid=" + formData.userid, form: formData, headers: { 'content-type': 'application/x-www-form-urlencoded' } }, function ( data ) {
                if( data && data.errorCode ) {
                    reject( data );
                } else {
                    resolve( data );
                }   
            });
        });
    }
    
    // Deprecated
    // User Password Set( POST )
    module.postUserPasswordSet = function( formData ) {
        return new Promise( function( resolve, reject ) {
            config.request( { method: 'POST', uri: config.apidomain + "/raas/v1/user/password?appkey=" + config.apikey + "&appsecret=" + config.apisecret + "&userid=" + formData.userid + "&action=" + formData.action, form: formData, headers: { 'content-type': 'application/x-www-form-urlencoded'} }, function ( data ) {
                if( data && data.errorCode ) {
                    reject( data );
                } else {
                    resolve( data );
                }   
            });
        });
    }

    // User Profile By Id( GET )
    module.getUserProfileById = function ( userid ) {
        return new Promise( function( resolve, reject ) {
            config.request( { uri: config.apidomain + "/raas/v1/user?appkey=" + config.apikey + "&appsecret=" + config.apisecret + "&userid=" + userid }, function ( data ) {
                if( data && data.errorCode ) {
                    reject( data );
                } else {
                    resolve( data );
                }   
            });
        });
    }

    // User Profile By Email( GET )
    module.getUserProfileByEmail = function ( email ) {
        return new Promise( function( resolve, reject ) {
            config.request( { uri: config.apidomain + "/raas/v1/user?appkey=" + config.apikey + "&appsecret=" + config.apisecret + "&emailid=" + email }, function ( data ) {
                if( data && data.errorCode ) {
                    reject( data );
                } else {
                    resolve( data );
                }   
            });
        });
    }

    // User Registration( POST )
    module.postUserRegistration = function( formData ) {
        return new Promise( function( resolve, reject ) {
            config.request( { method: 'POST',uri: config.apidomain + "/raas/v1/user/register?appkey=" + config.apikey + "&appsecret=" + config.apisecret, headers: { 'content-type': 'application/json' }, body: JSON.stringify(formData) }, function ( data ) {
                if( data && data.errorCode ) {
                    reject( data );
                } else {
                    resolve( data );
                }   
            });
        });
    }

    // User Update( POST )
    module.postUserUpdate = function( formData ) {
        return new Promise( function( resolve, reject ) {
            config.request( { method: 'POST',uri: config.apidomain + "/raas/v1/user?appkey=" + config.apikey + "&appsecret=" + config.apisecret + "&userid=" + formData.userid, headers: { 'content-type': 'application/json' }, body: JSON.stringify(formData) }, function ( data ) {
                if( data && data.errorCode ) {
                    reject( data );
                } else {
                    resolve( data );
                }   
            });
        });
    }

    // User Email Verification Resend ( GET )
    module.getUserEmailVerificationResend = function ( email, link, template ) {
        return new Promise( function( resolve, reject ) {
            config.request( { uri: config.apidomain + "/raas/v1/account/verificationemail?appkey=" + config.apikey + "&appsecret=" + config.apisecret + "&emailid=" + email + "&link=" + link + "&template=" + template }, function ( data ) {
                if( data && data.errorCode ) {
                    reject( data );
                } else {
                    resolve( data );
                }   
            });
        });
    }

    // Token Validate (GET)
    module.getTokenValidate = function ( access_token ) {
        return new Promise( function( resolve, reject ) {
            config.request( { uri: config.apidomain + "/api/v2/access_token/validate?key=" + config.apikey + "&secret=" + config.apisecret + "&access_token=" + access_token }, function ( data ) {
                if( data && data.errorCode ) {
                    reject( data );
                } else {
                    resolve( data );
                }   
            });
        });
    }


    // Token Invalidate (GET)
    module.getTokenInvalidate = function ( access_token ) {
        return new Promise( function( resolve, reject ) {
            config.request( { uri: config.apidomain + "/api/v2/access_token/invalidate?key=" + config.apikey + "&secret=" + config.apisecret + "&access_token=" + access_token }, function ( data ) {
                if( data && data.errorCode ) {
                    reject( data );
                } else {
                    resolve( data );
                }   
            });
        });
    }

    // ** Account API **

    // Account Block/Unblock( POST )
    module.postUserAccountBlockUnblock = function( formData ) {
        return new Promise( function( resolve, reject ) {
            config.request( { method: 'POST',uri: config.apidomain + "/raas/v1/account/status?appkey=" + config.apikey + "&appsecret=" + config.apisecret + "&accountid=" + formData.accountid, headers: { 'content-type': 'application/json' }, body: JSON.stringify(formData) }, function ( data ) {
                if( data && data.errorCode ) {
                    reject( data );
                } else {
                    resolve( data );
                }   
            });
        });
    }

    // Account Link( POST )
    module.postAccountLink = function( formData ) {
        return new Promise( function( resolve, reject ) {
            config.request( { method: 'POST',uri: config.apidomain + "/raas/v1/account/link?appkey=" + config.apikey + "&appsecret=" + config.apisecret, headers: { 'content-type': 'application/json' }, body: JSON.stringify(formData) }, function ( data ) {
                if( data && data.errorCode ) {
                    reject( data );
                } else {
                    resolve( data );
                }   
            });
        });
    }

    // Account Delete( GET )
    module.getAccountDelete = function( uid ) {
        return new Promise( function( resolve, reject ) {
            config.request( { uri: config.apidomain + "/raas/v1/account/delete?appkey=" + config.apikey + "&appsecret=" + config.apisecret + "&accountid=" + uid }, function ( data ) {
                if( data && data.errorCode ) {
                    reject( data );
                } else {
                    resolve( data );
                }   
            });
        });
    }

    // Account Delete with Email Confirmation (GET)
    module.getAccountDeleteWithEmailConfirm = function( uid, link, template ) {
        return new Promise( function( resolve, reject ) {
            config.request( { uri: config.apidomain + "/raas/v1/account/deleteuseremail?appkey=" + config.apikey + "&appsecret=" + config.apisecret + "&accountid=" + uid + "&deleteuserlink=" + link + "&template=" + template}, function ( data ) {
                if( data && data.errorCode ) {
                    reject( data );
                } else {
                    resolve( data );
                }   
            });
        });
    }

    // Account Password Change( POST )
    module.postAccountPasswordChange = function( formData ) {
        return new Promise( function( resolve, reject ) {
            config.request( { method: 'POST',uri: config.apidomain + "/raas/v1/account/password?appkey=" + config.apikey + "&appsecret=" + config.apisecret + "&accountid=" + formData.accountid, headers: { 'content-type': 'application/json' }, body: JSON.stringify(formData) }, function ( data ) {
                if( data && data.errorCode ) {
                    reject( data );
                } else {
                    resolve( data );
                }   
            });
        });
    }

    // Account Password Get( GET )
    module.getAccountPassword = function( uid ) {
        return new Promise( function( resolve, reject ) {
            config.request( { uri: config.apidomain + "/raas/v1/account/password?appkey=" + config.apikey + "&appsecret=" + config.apisecret + "&accountid=" + uid }, function ( data ) {
                if( data && data.errorCode ) {
                    reject( data );
                } else {
                    resolve( data );
                }   
            });
        });
    }

    // Account Password Set( POST )
    module.postAccountPasswordSet = function( formData ) {
        return new Promise( function( resolve, reject ) {
            config.request( { method: 'POST',uri: config.apidomain + "/raas/v1/account/password?appkey=" + config.apikey + "&appsecret=" + config.apisecret + "&accountid=" + formData.accountid + "&action=set", headers: { 'content-type': 'application/json' }, body: JSON.stringify(formData) }, function ( data ) {
                if( data && data.errorCode ) {
                    reject( data );
                } else {
                    resolve( data );
                }   
            });
        });
    }

    // Account Unlink( POST )
    module.postAccountUnlink = function( formData ) {
        return new Promise( function( resolve, reject ) {
            config.request( { method: 'POST',uri: config.apidomain + "/raas/v1/account/unlink?appkey=" + config.apikey + "&appsecret=" + config.apisecret, headers: { 'content-type': 'application/json' }, body: JSON.stringify(formData) }, function ( data ) {
                if( data && data.errorCode ) {
                    reject( data );
                } else {
                    resolve( data );
                }   
            });
        });
    }

    // UID, the identifier for each user account, it may have multiple IDs(identifier for each social platform) attached with
    // Account Profiles( GET )
    module.getAccountProfiles = function( uid ) {
        return new Promise( function( resolve, reject ) {
            config.request( { uri: config.apidomain + "/raas/v1/account?appkey=" + config.apikey + "&appsecret=" + config.apisecret + "&accountid=" + uid }, function ( data ) {
                if( data && data.errorCode ) {
                    reject( data );
                } else {
                    resolve( data );
                }   
            });
        });
    }

    // currentusername
    // newusername
    // Account Username Change (POST)
    module.postAccountUsernameChange = function( formData ) {
        return new Promise( function( resolve, reject ) {
            config.request( { method: 'POST',uri: config.apidomain + "/raas/v1/account/changeusername?appkey=" + config.apikey + "&appsecret=" + config.apisecret + "&accountId=" + formData.accountid, headers: { 'content-type': 'application/json' }, body: JSON.stringify(formData) }, function ( data ) {
                if( data && data.errorCode ) {
                    reject( data );
                } else {
                    resolve( data );
                }   
            });
        });
    }

    // Account Username Check (Server) (GET)
    // This API is used to check username exists or not on your site
    module.getAccountUsernameCheck = function( username ) {
        return new Promise( function( resolve, reject ) {
            config.request( { uri: config.apidomain + "/raas/v1/user/checkusername?appkey=" + config.apikey + "&appsecret=" + config.apisecret + "&username=" + username }, function ( data ) {
                if( data && data.errorCode ) {
                    reject( data );
                } else {
                    resolve( data );
                }   
            });
        });
    }

    // Account Username Set (POST)
    // This API is used to set a users username.
    // newusername: String
    module.postAccountUsernameSet = function( formData ) {
        return new Promise( function( resolve, reject ) {
            config.request( { method: 'POST',uri: config.apidomain + "/raas/v1/account/setusername?appkey=" + config.apikey + "&appsecret=" + config.apisecret + "&accountId=" + formData.accountid, headers: { 'content-type': 'application/json' }, body: JSON.stringify(formData) }, function ( data ) {
                if( data && data.errorCode ) {
                    reject( data );
                } else {
                    resolve( data );
                }   
            });
        });
    }
    // User Password Forgot Send( GET )
    // API is used to send a forgot password email. 
    module.getUserPasswordForgotSend = function(email, domain, template) {
        return new Promise(function(resolve, reject) {
            config.request({
                uri: config.apidomain + "/raas/client/password/forgot?apikey=" + config.apikey + "&emailid=" + email + "&resetpasswordurl=" + domain + "&template=" + template
            }, function(data) {

                if (data && data.errorCode) {
                    reject(data);
                } else {
                    resolve(data);
                }
            });
        });
    }
    // Verify email link( GET )
    // API is used to verify email link. 
    module.getUserVerifyEmail = function(vtoken, callback) {
        return new Promise(function(resolve, reject) {
            config.request({
                uri: config.apidomain + "/raas/client/auth/verifyemail?apikey=" + config.apikey + "&vtoken=" + vtoken + "&callback=" + callback
            }, function(data) {

                if (data && data.errorCode) {
                    reject(data);
                } else {
                    resolve(data);
                }
            });
        });
    }

    return module;
};

module.exports = function (config) {

    var module = {};
    var authEndpoint = "/identity/v2/auth/";
    var backUpManageEndPoint = "/identity/v2/manage/account/2FA/backupcode";
    var helper = require('./../helper.js');

	module.login = {};
    module.twoFactor = {};
    module.profile = {};
    module.customObject = {};
    module.backUpCode ={};
    module.autoLogin ={};

    // Token Validity( GET )
    module.validity = function (access_token, fields) {
        helper.checkFields(fields, config);
        return new Promise(function (resolve, reject) {
            config.request({uri: config.apidomain + authEndpoint +"access_token/Validate?apikey=" + config.apikey + "&access_token=" + access_token}, function (data) {
                if (helper.checkError(data)) {
                    reject(data);
                } else {
                    resolve(data);
                }
            });
        });
    };

    // Token Invalidate( GET )
    module.invalidate = function (access_token, fields) {
        helper.checkFields(fields, config);
        return new Promise(function (resolve, reject) {
            config.request({uri: config.apidomain + authEndpoint +"access_token/InValidate?apikey=" + config.apikey + "&access_token=" + access_token}, function (data) {
                if (helper.checkError(data)) {
                    reject(data);
                } else {
                    resolve(data);
                }
            });
        });
    };

    //Login by Email( POST )
    module.login.byEmail = function (email, password, verificationUrl, loginUrl, emailTemplate, reCaptchaKey, securityanswer, fields ) {
        verificationUrl = helper.checkNullOrUndefined(verificationUrl);
        loginUrl = helper.checkNullOrUndefined(loginUrl);
        emailTemplate = helper.checkNullOrUndefined(emailTemplate);
        reCaptchaKey = helper.checkNullOrUndefined(reCaptchaKey);
        securityanswer = helper.checkNullOrUndefined(securityanswer);

        var formData = {
            "email": email,
            "password": password,
            "securityanswer": securityanswer
        }
        helper.checkFields(fields, config);
        return new Promise(function (resolve, reject) {
            config.request({
                method: 'POST',
                uri: config.apidomain + authEndpoint +"login?apikey=" + config.apikey + "&loginUrl=" + loginUrl + "&verificationUrl=" + verificationUrl + "&emailTemplate=" + emailTemplate + "&g-recaptcha-response="+ reCaptchaKey,
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
  

    // Login by Username( POST )
    module.login.byUsername = function (username, password, verificationUrl, loginUrl, emailTemplate, reCaptchaKey, securityanswer, fields) {
        verificationUrl = helper.checkNullOrUndefined(verificationUrl);
        loginUrl = helper.checkNullOrUndefined(loginUrl);
        emailTemplate = helper.checkNullOrUndefined(emailTemplate);
        reCaptchaKey = helper.checkNullOrUndefined(reCaptchaKey);
        securityanswer = helper.checkNullOrUndefined(securityanswer);

        var formData = {
            "username": username,
            "password": password,
            "securityanswer": securityanswer
        }
        helper.checkFields(fields, config);
        return new Promise(function (resolve, reject) {
            config.request({
                method: 'POST',
                uri: config.apidomain + authEndpoint +"login?apikey=" + config.apikey + "&loginUrl=" + loginUrl + "&verificationUrl=" + verificationUrl + "&emailTemplate=" + emailTemplate + "&g-recaptcha-response="+ reCaptchaKey,
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

    // User Registration( POST )
    /*
    @params fromData (JSON) A valid json data (required)
    @params verificationUrl (optional)
    @params emailTemplate (optional)
    @params startDate A valid start date in ISO format (optional)
    @params endDate A valid end date in ISO format with valid range (optional)
     */
    module.register = function (formData, verificationUrl, emailTemplate ,startDate, endDate, fields ) {
        verificationUrl = helper.checkNullOrUndefined(verificationUrl);
        emailTemplate = helper.checkNullOrUndefined(emailTemplate);
        helper.checkFields(fields, config);
        return new Promise(function (resolve, reject) {
            helper.getSott(function (sott) {
            config.request({
                method: 'POST',
                uri: config.apidomain + authEndpoint +"register?apikey=" + config.apikey + "&verificationUrl=" + verificationUrl + "&emailTemplate=" + emailTemplate,
                headers: {'X-LoginRadius-Sott' : sott, 'content-type': 'application/json'},
                body: JSON.stringify(formData)
            }, function (data) {
                if (helper.checkError(data)) {
                    reject(data);
                } else {
                    resolve(data);
                }
            });
        },config, startDate, endDate);
        });
    }

    // Resend Email Verification( PUT )
    module.resendEmailVerification = function (email, verificationUrl, emailTemplate, fields) {
        verificationUrl = helper.checkNullOrUndefined(verificationUrl);
        emailTemplate = helper.checkNullOrUndefined(emailTemplate);
        helper.checkFields(fields, config);
        var formData = {
            "email": email
        }
        return new Promise(function (resolve, reject) {
            config.request({
                method: 'PUT',
                uri: config.apidomain + authEndpoint +"register?apikey=" + config.apikey + "&verificationUrl=" + verificationUrl + "&emailTemplate=" + emailTemplate,
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

    // GET Profile By Access Token( GET )
    module.profile.getByToken = function (access_token, fields) {
        helper.checkFields(fields, config);
        return new Promise(function (resolve, reject) {
            config.request({uri: config.apidomain + authEndpoint +"account?apikey=" + config.apikey + "&access_token=" + access_token}, function (data) {
                if (helper.checkError(data)) {
                    reject(data);
                } else {
                    resolve(data);
                }
            });
        });
    }

    // Update Profile By Access Token( PUT )
    /*
     @nullSupport: (boolean) Default value will be false, pass true if wants to update other fields with null.
     */
    module.profile.updateByToken = function (access_token, formData, verificationUrl, emailTemplate, nullSupport, fields) {
        verificationUrl = helper.checkNullOrUndefined(verificationUrl);
        emailTemplate = helper.checkNullOrUndefined(emailTemplate);
        nullSupport = helper.checkNullSupport(nullSupport);
        helper.checkFields(fields, config);
        return new Promise(function (resolve, reject) {
            config.request({
                method: 'PUT',
                uri: config.apidomain + authEndpoint +"account?apikey=" + config.apikey + "&access_token=" + access_token + "&verificationUrl=" + verificationUrl + "&emailTemplate=" + emailTemplate + "&nullSupport=" + nullSupport,
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

    // Delete Account With Email Confirmation( DELETE )
    module.removeAccountByEmailConfirmation = function (access_token, deleteUrl, emailTemplate, fields) {
        helper.checkFields(fields, config);
        deleteUrl = (typeof deleteUrl === 'undefined') ? '' : deleteUrl;
        emailTemplate = helper.checkNullOrUndefined(emailTemplate);
        return new Promise(function (resolve, reject) {
            config.request({
                method: 'DELETE',
                uri: config.apidomain + authEndpoint +"account?apikey=" + config.apikey + "&access_token=" + access_token + "&verificationUrl=" + deleteUrl + "&emailTemplate=" + emailTemplate
            }, function (data) {
                if (helper.checkError(data)) {
                    reject(data);
                } else {
                    resolve(data);
                }
            });
        });
    }

    // Forgot Password( POST )
    module.forgotPassword = function (email, resetPasswordUrl, emailTemplate, fields) {
        emailTemplate = helper.checkNullOrUndefined(emailTemplate);
        var formData = {
            "email": email
        }
        helper.checkFields(fields, config);
        return new Promise(function (resolve, reject) {
            config.request({
                method: 'POST',
                uri: config.apidomain + authEndpoint +"password?apikey=" + config.apikey + "&resetPasswordUrl=" + resetPasswordUrl + "&emailTemplate=" + emailTemplate,
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

    // Reset Password( PUT )
    module.resetPassword = function (vtoken, password, welcomeEmailTemplate,resetPasswordEmailTemplate, fields) {
        welcomeEmailTemplate = helper.checkNullOrUndefined( welcomeEmailTemplate );
        resetPasswordEmailTemplate = helper.checkNullOrUndefined( resetPasswordEmailTemplate );
        helper.checkFields(fields, config);
        var formData = {
            "resettoken": vtoken,
            "password": password,
            "welcomeEmailTemplate": welcomeEmailTemplate,
            "resetPasswordEmailTemplate": resetPasswordEmailTemplate
        }
        return new Promise(function (resolve, reject) {
            config.request({
                method: 'PUT',
                uri: config.apidomain + authEndpoint +"password?apikey=" + config.apikey,
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

    // Reset Password By Security Question( PUT )
    /*
     var securityanswer = {"cb7*******3e40ef8a****01fb****20": "Security Answer of this question ID"};
     var userid = "";                          //Email / Username / Phone (User id by which user will log in)
     var password = "xxxxxxxxxxxxx";
     var resetPasswordEmailTemplate = "template name" // Template which will send after resetting password successfully.(Optional)
     */
    module.resetPasswordbySecurityQuestion = function ( securityanswer, userid, password, resetPasswordEmailTemplate, fields ) {
        resetPasswordEmailTemplate = helper.checkNullOrUndefined( resetPasswordEmailTemplate );
        var formData = {
            "securityanswer": securityanswer,
            "userid": userid,
            "password": password,
            "resetPasswordEmailTemplate": resetPasswordEmailTemplate
        }
        helper.checkFields(fields, config);
        return new Promise(function (resolve, reject) {
            config.request({
                method: 'PUT',
                uri: config.apidomain + authEndpoint +"password/securityanswer?apikey=" + config.apikey,
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

    // Reset Password By Security Question and email( PUT )
    /*
     var securityanswer = {"cb7*******3e40ef8a****01fb****20": "Security Answer of this question ID"};
     var email = "";                          //Email by which user will log in
     var password = "xxxxxxxxxxxxx";
     var resetPasswordEmailTemplate = "template name" // Template which will send after resetting password successfully.(Optional)
     */
    module.resetPasswordbyEmail = function ( securityanswer, email, password, resetPasswordEmailTemplate, fields ) {
        resetPasswordEmailTemplate = helper.checkNullOrUndefined( resetPasswordEmailTemplate );
        var formData = {
            "securityanswer": securityanswer,
            "email": email,
            "password": password,
            "resetPasswordEmailTemplate": resetPasswordEmailTemplate
        }
        helper.checkFields(fields, config);
        return new Promise(function (resolve, reject) {
            config.request({
                method: 'PUT',
                uri: config.apidomain + authEndpoint +"password/securityanswer?apikey=" + config.apikey,
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

    // Reset Password By Security Question and username( PUT )
    /*
     var securityanswer = {"cb7*******3e40ef8a****01fb****20": "Security Answer of this question ID"};
     var username = "";                          //Username by which user will log in
     var password = "xxxxxxxxxxxxx";
     var resetPasswordEmailTemplate = "template name" // Template which will send after resetting password successfully.(Optional)
     */
    module.resetPasswordbyUsername = function ( securityanswer, username, password, resetPasswordEmailTemplate, fields ) {
        resetPasswordEmailTemplate = helper.checkNullOrUndefined( resetPasswordEmailTemplate );
        var formData = {
            "securityanswer": securityanswer,
            "username": username,
            "password": password,
            "resetPasswordEmailTemplate": resetPasswordEmailTemplate
        }
        helper.checkFields(fields, config);
        return new Promise(function (resolve, reject) {
            config.request({
                method: 'PUT',
                uri: config.apidomain + authEndpoint +"password/securityanswer?apikey=" + config.apikey,
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

    // Reset Password By Security Question and phone( PUT )
    /*
     var securityanswer = {"cb7*******3e40ef8a****01fb****20": "Security Answer of this question ID"};
     var phone = "";                          //phone by which user will log in
     var password = "xxxxxxxxxxxxx";
     var resetPasswordEmailTemplate = "template name" // Template which will send after resetting password successfully.(Optional)
     */
    module.resetPasswordbyPhone = function ( securityanswer, phone, password, resetPasswordEmailTemplate, fields ) {
        resetPasswordEmailTemplate = helper.checkNullOrUndefined( resetPasswordEmailTemplate );
        var formData = {
            "securityanswer": securityanswer,
            "phone": phone,
            "password": password,
            "resetPasswordEmailTemplate": resetPasswordEmailTemplate
        }
        helper.checkFields(fields, config);
        return new Promise(function (resolve, reject) {
            config.request({
                method: 'PUT',
                uri: config.apidomain + authEndpoint +"password/securityanswer?apikey=" + config.apikey,
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

    // Update Security Question by Access_token( PUT )
    module.updateSecurityQuestionByAccessToken = function (access_token, securityanswer, fields) {
        var formData = {
            "SecurityQuestionAnswer": securityanswer
        }
        helper.checkFields(fields, config);
        return new Promise(function (resolve, reject) {
            config.request({
                method: 'PUT',
                uri: config.apidomain + authEndpoint +"account?apikey=" + config.apikey + "&access_token="+ access_token,
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
    // Change Password( PUT )
    module.changePassword = function (access_token, oldpassword, newpassword, fields) {
        var formData = {
            "oldpassword": oldpassword,
            "newpassword": newpassword
        };
        helper.checkFields(fields, config);
        return new Promise(function (resolve, reject) {
            config.request({
                method: 'PUT',
                uri: config.apidomain + authEndpoint +"password?apikey=" + config.apikey + "&access_token=" + access_token,
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

    // Add Email( POST )
    module.addEmail = function (access_token, email, type, verificationUrl, emailTemplate, fields) {
        formData = {
            "Email": email,
            "Type": type
        };
        verificationUrl = helper.checkNullOrUndefined(verificationUrl);
        emailTemplate = helper.checkNullOrUndefined(emailTemplate);
        helper.checkFields(fields, config);
        return new Promise(function (resolve, reject) {
            config.request({
                method: 'POST',
                uri: config.apidomain + authEndpoint +"email?apikey=" + config.apikey + "&access_token=" + access_token,
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

    // Remove Email( DELETE )
    module.removeEmail = function (access_token, email, fields) {
        formData = {
            "Email": email
        };
        helper.checkFields(fields, config);
        return new Promise(function (resolve, reject) {
            config.request({
                method: 'DELETE',
                uri: config.apidomain + authEndpoint +"email?apikey=" + config.apikey + "&access_token=" + access_token,
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

    // Verify Email( GET )
    module.getVerifyEmail = function (VerificationToken, url, fields) {
        helper.checkFields(fields, config);
        return new Promise(function (resolve, reject) {
            config.request({uri: config.apidomain + authEndpoint +"email?apikey=" + config.apikey + "&VerificationToken=" + VerificationToken + "&url=" + url}, function (data) {
                if (helper.checkError(data)) {
                    reject(data);
                } else {
                    resolve(data);
                }
            });
        });
    };

    // Check Email Availability( GET )
    module.getCheckEmail = function (email, fields) {
        helper.checkFields(fields, config);
        return new Promise(function (resolve, reject) {
            config.request({uri: config.apidomain + authEndpoint +"email?apikey=" + config.apikey + "&email=" + email}, function (data) {
                if (helper.checkError(data)) {
                    reject(data);
                } else {
                    resolve(data);
                }
            });
        });
    };

    // Change Username( PUT )
    module.changeUsername = function (access_token, username, fields) {
        formData = {
            "username": username
        };
        helper.checkFields(fields, config);
        return new Promise(function (resolve, reject) {
            config.request({
                method: "PUT",
                uri: config.apidomain + authEndpoint +"username?apikey=" + config.apikey + "&access_token=" + access_token,
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

    // Check Username Availability( GET )
    module.checkUsername = function (username, fields) {
        helper.checkFields(fields, config);
        return new Promise(function (resolve, reject) {
            config.request({uri: config.apidomain + authEndpoint +"username?apikey=" + config.apikey + "&username=" + username}, function (data) {
                if (helper.checkError(data)) {
                    reject(data);
                } else {
                    resolve(data);
                }
            });
        });
    };

    // Account Link( PUT )
    module.accountLink = function (access_token, candidateToken, fields) {
        formData = {
            "candidateToken": candidateToken
        };
        helper.checkFields(fields, config);
        return new Promise(function (resolve, reject) {
            config.request({
                method: "PUT",
                uri: config.apidomain + authEndpoint +"socialIdentity?apikey=" + config.apikey + "&access_token=" + access_token,
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

    // Account Unlink( DELETE )
    module.accountUnlink = function (access_token, provider, providerid, fields) {
        formData = {
            "provider": provider,
            "providerid": providerid
        };
        helper.checkFields(fields, config);
        return new Promise(function (resolve, reject) {
            config.request({
                method: "DELETE",
                uri: config.apidomain + authEndpoint +"socialIdentity?apikey=" + config.apikey + "&access_token=" + access_token,
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

    // Get Social Identity( GET )
    module.getSocialProfile = function (access_token, emailTemplate, fields) {
        helper.checkFields(fields, config);
        return new Promise(function (resolve, reject) {
            config.request({uri: config.apidomain + authEndpoint +"socialIdentity?apikey=" + config.apikey + "&access_token=" + access_token + "&emailTemplate=" + emailTemplate}, function (data) {
                if (helper.checkError(data)) {
                    reject(data);
                } else {
                    resolve(data);
                }
            });
        });
    };

    // Create Custom Object By Access Token( POST )
    module.customObject.create = function (access_token, objectName, customObjectData, fields) {
        helper.checkFields(fields, config);
        return new Promise(function (resolve, reject) {
            config.request({
                method: "POST",
                uri: config.apidomain + authEndpoint +"customobject?apikey=" + config.apikey + "&access_token=" + access_token + "&objectname=" + objectName,
                headers: {'content-type': 'application/json'},
                body: JSON.stringify(customObjectData)
            }, function (data) {
                if (helper.checkError(data)) {
                    reject(data);
                } else {
                    resolve(data);
                }
            });
        });
    };

    // Update Custom Object Data( PUT )
    module.customObject.update = function (access_token, objectRecordId, objectName, customObjectData, isAllowedReplace, fields ) {
        isAllowedReplace = helper.allowedReplaceType(isAllowedReplace);
        helper.checkFields(fields, config);
        return new Promise(function (resolve, reject) {
            config.request({
                method: "PUT",
                uri: config.apidomain + authEndpoint +"customobject/" + objectRecordId + "?apikey=" + config.apikey + "&access_token=" + access_token + "&objectname=" + objectName+ "&updateType=" + isAllowedReplace,
                headers: {'content-type': 'application/json'},
                body: JSON.stringify(customObjectData)
            }, function (data) {
                if (helper.checkError(data)) {
                    reject(data);
                } else {
                    resolve(data);
                }
            });
        });
    };

    // Get Custom Object Sets By Token( GET )
    module.customObject.setByToken = function (access_token, objectName, fields) {
        helper.checkFields(fields, config);
        return new Promise(function (resolve, reject) {
            config.request({uri: config.apidomain + authEndpoint +"customobject?apikey=" + config.apikey + "&access_token=" + access_token + "&objectname=" + objectName}, function (data) {
                if (helper.checkError(data)) {
                    reject(data);
                } else {
                    resolve(data);
                }
            });
        });
    };

    // Get Custom Object Set By ID( GET )
    module.customObject.setByID = function (access_token, objectRecordId, objectName, fields) {
        helper.checkFields(fields, config);
        return new Promise(function (resolve, reject) {
            config.request({uri: config.apidomain + authEndpoint +"customobject/" + objectRecordId + "?apikey=" + config.apikey + "&access_token=" + access_token + "&objectname=" + objectName}, function (data) {
                if (helper.checkError(data)) {
                    reject(data);
                } else {
                    resolve(data);
                }
            });
        });
    };

    // Delete Custom Object Set( DELETE )
    module.customObject.delete = function (access_token, objectRecordId, objectName, fields) {
        helper.checkFields(fields, config);
        return new Promise(function (resolve, reject) {
            config.request({
                method: "DELETE",
                uri: config.apidomain + authEndpoint +"customobject/" + objectRecordId + "?apikey=" + config.apikey + "&access_token=" + access_token + "&objectname=" + objectName
            }, function (data) {
                if (helper.checkError(data)) {
                    reject(data);
                } else {
                    resolve(data);
                }
            });
        });
    };

    // Get 2FA by Token( GET )
    module.twoFactor.ByToken = function (access_token, smsTemplate2FA, fields) {
        helper.checkFields(fields, config);
        smsTemplate2FA = helper.checkNullOrUndefined(smsTemplate2FA);
        return new Promise(function (resolve, reject) {
            config.request({uri: config.apidomain + authEndpoint +"account/2FA?apikey=" + config.apikey + "&access_token=" + access_token + "&smsTemplate2FA=" + smsTemplate2FA}, function (data) {
                if (helper.checkError(data)) {
                    reject(data);
                } else {
                    resolve(data);
                }
            });
        });
    };

    // Get 2FA Phone Login( GET )
    module.twoFactor.phoneLogin = function (phone, password, loginUrl, verificationUrl, smsTemplate, smsTemplate2FA, fields) {
        loginUrl = helper.checkNullOrUndefined(loginUrl);
        verificationUrl = helper.checkNullOrUndefined(verificationUrl);
        smsTemplate = helper.checkNullOrUndefined(smsTemplate);
        smsTemplate2FA = helper.checkNullOrUndefined(smsTemplate2FA);
        helper.checkFields(fields, config);
        return new Promise(function (resolve, reject) {
            config.request({uri: config.apidomain + authEndpoint +"login/2FA?apikey=" + config.apikey + "&phone=" + phone + "&password=" + password + "&loginUrl=" + loginUrl + "&verificationUrl=" + verificationUrl + "&smsTemplate=" + smsTemplate + "&smsTemplate2FA=" + smsTemplate2FA}, function (data) {
                if (helper.checkError(data)) {
                    reject(data);
                } else {
                    resolve(data);
                }
            });
        });
    };

    // Get 2FA Email Login( GET )
    module.twoFactor.emailLogin = function (email, password, loginUrl, verificationUrl, emailTemplate, smsTemplate2FA, fields) {
        loginUrl = helper.checkNullOrUndefined(loginUrl);
        verificationUrl = helper.checkNullOrUndefined(verificationUrl);
        emailTemplate = helper.checkNullOrUndefined(emailTemplate);
        smsTemplate2FA = helper.checkNullOrUndefined(smsTemplate2FA);
        helper.checkFields(fields, config);
        return new Promise(function (resolve, reject) {
            config.request({uri: config.apidomain + authEndpoint +"login/2FA?apikey=" + config.apikey + "&email=" + email + "&password=" + password + "&loginUrl=" + loginUrl + "&verificationUrl=" + verificationUrl + "&emailTemplate=" + emailTemplate + "&smsTemplate2FA=" + smsTemplate2FA}, function (data) {
                if (helper.checkError(data)) {
                    reject(data);
                } else {
                    resolve(data);
                }
            });
        });
    };

    // Get 2FA Username Login( GET )
    module.twoFactor.usernameLogin = function (username, password, loginUrl, verificationUrl, emailTemplate, smsTemplate2FA, fields) {
        loginUrl = helper.checkNullOrUndefined(loginUrl);
        verificationUrl = helper.checkNullOrUndefined(verificationUrl);
        emailTemplate = helper.checkNullOrUndefined(emailTemplate);
        smsTemplate2FA = helper.checkNullOrUndefined(smsTemplate2FA);
        helper.checkFields(fields, config);
        return new Promise(function (resolve, reject) {
            config.request({uri: config.apidomain + authEndpoint +"login/2FA?apikey=" + config.apikey + "&username=" + username + "&password=" + password + "&loginUrl=" + loginUrl + "&verificationUrl=" + verificationUrl + "&emailTemplate=" + emailTemplate + "&smsTemplate2FA=" + smsTemplate2FA}, function (data) {
                if (helper.checkError(data)) {
                    reject(data);
                } else {
                    resolve(data);
                }
            });
        });
    };

    // 2FA Update Phone Number( PUT )
    module.twoFactor.updatePhone = function (SecondFactorAuthenticationToken, phoneNo2FA, smsTemplate2FA, fields) {
        var formData = {
            "phoneNo2FA": phoneNo2FA
        };
        smsTemplate2FA = helper.checkNullOrUndefined(smsTemplate2FA);
        helper.checkFields(fields, config);
        return new Promise(function (resolve, reject) {
            config.request({
                method: "PUT",
                uri: config.apidomain + authEndpoint +"login/2FA?apikey=" + config.apikey + "&SecondFactorAuthenticationToken=" + SecondFactorAuthenticationToken + "&smsTemplate2FA=" + smsTemplate2FA,
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

    // Get 2FA Verify Google Authenticator Code OR OTP( GET )
    module.twoFactor.verifyGoogleAuth = function (SecondFactorAuthenticationToken, googleAuthenticatorCode, otp, smsTemplate2FA, fields) {
        smsTemplate2FA = helper.checkNullOrUndefined(smsTemplate2FA);
        helper.checkFields(fields, config);
        return new Promise(function (resolve, reject) {
            config.request({uri: config.apidomain + authEndpoint +"login/2FA/Verification?apikey=" + config.apikey + "&SecondFactorAuthenticationToken=" + SecondFactorAuthenticationToken + "&googleAuthenticatorCode=" + googleAuthenticatorCode + "&otp=" + otp + "&smsTemplate2FA=" + smsTemplate2FA}, function (data) {
                if (helper.checkError(data)) {
                    reject(data);
                } else {
                    resolve(data);
                }
            });
        });
    };

    // 2FA Update Phone Number by Token( PUT )
    module.twoFactor.updatePhoneByToken = function (access_token, phoneNo2FA, smsTemplate, fields) {
        var formData = {
            "phoneNo2FA": phoneNo2FA
        };
        smsTemplate = helper.checkNullOrUndefined(smsTemplate);
        helper.checkFields(fields, config);
        return new Promise(function (resolve, reject) {
            config.request({
                method: "PUT",
                uri: config.apidomain + authEndpoint +"account/2FA?apikey=" + config.apikey + "&access_token=" + access_token + "&smsTemplate=" + smsTemplate,
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

    // 2FA by Google Authenticator Code OR OTP by Token( GET )
    module.twoFactor.googleAuthByToken = function (access_token, googleAuthenticatorCode, otp, smsTemplate, fields) {
        smsTemplate = helper.checkNullOrUndefined(smsTemplate);
        helper.checkFields(fields, config);
        return new Promise(function (resolve, reject) {
            config.request({uri: config.apidomain + authEndpoint +"account/2FA/Verification?apikey=" + config.apikey + "&access_token=" + access_token + "&GoogleAuthenticatorCode=" + googleAuthenticatorCode + "&Otp=" + otp + "&SmsTemplate=" + smsTemplate}, function (data) {
                if (helper.checkError(data)) {
                    reject(data);
                } else {
                    resolve(data);
                }
            });
        });
    };

    //Get SOTT directly.
    module.getSott =  function (startDate, endDate, fields) {
        helper.checkFields(fields, config);
        return new Promise(function (resolve, reject) {
            helper.getSott(function (sott) {
                resolve(sott);
            },config, startDate, endDate);
        });
    };

    /**Remove /Reset Google Authenticator and SMS Authenticator By UID
     *@param uid {String}
     *@param authenticator {String "otpauthenticator" or "googleauthenticator"}
     */
    module.twoFactor.removeAuthByUid = function (uid, authenticator, fields ) {
        var payload ={};
        payload[authenticator] = true;
        helper.checkFields(fields, config);
        return new Promise(function (resolve, reject) {
            config.request({
                method: "DELETE",
                uri: config.apidomain + "/identity/v2/manage/account/2FA/authenticator?uid=" + uid,
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

    /**Remove /Reset Google Authenticator and SMS Authenticator By Token
     *@param access_token {String}
     *@param authenticator {String "otpauthenticator" or "googleauthenticator"}
     */
    module.twoFactor.removeAuthByToken = function (access_token, authenticator, fields ) {
        var payload ={};
        payload[authenticator] = true;
        helper.checkFields(fields, config);
        return new Promise(function (resolve, reject) {
            config.request({
                method: "DELETE",
                uri: config.apidomain + authEndpoint +"account/2FA/authenticator?apikey=" + config.apikey + "&access_token=" + access_token,
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

    //Login By BackUp Code
    module.backUpCode.login = function ( SecondFactorAuthenticationToken, backup_code, fields ) {
        helper.checkFields(fields, config);
        return new Promise(function (resolve, reject) {
            config.request({
                uri: config.apidomain + authEndpoint +"login/2FA/backupcode?apikey=" + config.apikey + "&SecondFactorAuthenticationToken=" + SecondFactorAuthenticationToken + "&backupcode=" +backup_code
            }, function (data) {
                if (helper.checkError(data)) {
                    reject(data);
                } else {
                    resolve(data);
                }
            });
        });
    };

    //Get Backup code for login by access token
    module.backUpCode.getByToken = function ( access_token, fields ) {
        helper.checkFields(fields, config);
        return new Promise(function (resolve, reject) {
            config.request({
                uri: config.apidomain + authEndpoint +"account/2FA/backupcode?apikey=" + config.apikey + "&access_token=" + access_token
            }, function (data) {
                if (helper.checkError(data)) {
                    reject(data);
                } else {
                    resolve(data);
                }
            });
        });
    };

    //Reset Backup code by access token
    module.backUpCode.resetByToken = function ( access_token, fields ) {
        helper.checkFields(fields, config);
        return new Promise(function (resolve, reject) {
            config.request({
                uri: config.apidomain + authEndpoint +"account/2FA/backupcode/reset?apikey=" + config.apikey + "&access_token=" + access_token
            }, function (data) {
                if (helper.checkError(data)) {
                    reject(data);
                } else {
                    resolve(data);
                }
            });
        });
    };

    //Management API
    //Get Backup code by UID
    module.backUpCode.getByUid = function ( uid, fields ) {
        helper.checkFields(fields, config);
        return new Promise(function (resolve, reject) {
            config.request({
                uri: config.apidomain + backUpManageEndPoint +"?uid=" + uid
            }, function (data) {
                if (helper.checkError(data)) {
                    reject(data);
                } else {
                    resolve(data);
                }
            },true);
        });
    };

    //Reset Backup code by UID
    module.backUpCode.resetByUid = function ( uid, fields ) {
        helper.checkFields(fields, config);
        return new Promise(function (resolve, reject) {
            config.request({
                uri: config.apidomain + backUpManageEndPoint +"/reset?uid=" + uid
            }, function (data) {
                if (helper.checkError(data)) {
                    reject(data);
                } else {
                    resolve(data);
                }
            },true);
        });
    };

    //Email prompt auto login send email with token by Email( GET )
    module.autoLogin.byEmail = function ( email, clientGuid, autoLoginEmailTemplate, welcomeEmailTemplate, fields ) {
        helper.checkFields(fields, config);
        return new Promise(function (resolve, reject) {
            config.request({
                uri: config.apidomain + authEndpoint +"login/autologin?apikey=" + config.apikey + "&email="+ email + "&clientGuid=" + clientGuid + "&autoLoginEmailTemplate=" +autoLoginEmailTemplate + "&welcomeEmailTemplate=" + welcomeEmailTemplate
            }, function (data) {
                if (helper.checkError(data)) {
                    reject(data);
                } else {
                    resolve(data);
                }
            });
        });
    };

    //Email prompt auto login send email with token by UserName( GET  )
    module.autoLogin.byUsername = function ( username, clientGuid, autoLoginEmailTemplate, welcomeEmailTemplate, fields ) {
        helper.checkFields(fields, config);
        return new Promise(function (resolve, reject) {
            config.request({
                uri: config.apidomain + authEndpoint +"login/autologin?apikey=" + config.apikey + "&userName="+ username + "&clientGuid=" + clientGuid + "&autoLoginEmailTemplate=" +autoLoginEmailTemplate + "&welcomeEmailTemplate=" + welcomeEmailTemplate
            }, function (data) {
                if (helper.checkError(data)) {
                    reject(data);
                } else {
                    resolve(data);
                }
            });
        });
    };

    //Email prompt auto login send otp by Phone( GET  )
    module.autoLogin.byPhone = function ( phone, smsTemplate, fields ) {
        smsTemplate = helper.checkNullOrUndefined(smsTemplate);
        helper.checkFields(fields, config);
        return new Promise(function (resolve, reject) {
            config.request({
                uri: config.apidomain + authEndpoint +"login/autologin?apikey=" + config.apikey + "&phone="+ phone + "&SMStemplate=" + smsTemplate
            }, function (data) {
                if (helper.checkError(data)) {
                    reject(data);
                } else {
                    resolve(data);
                }
            });
        });
    };

    //Verify Auto Login Email for Login( GET  )
    module.autoLogin.verify = function ( vtoken, welcomeEmailTemplate, fields ) {
        welcomeEmailTemplate = helper.checkNullOrUndefined(welcomeEmailTemplate);
        helper.checkFields(fields, config);
        return new Promise(function (resolve, reject) {
            config.request({
                uri: config.apidomain + authEndpoint +"email/autologin?apikey=" + config.apikey + "&vtoken="+ vtoken + "&welcomeEmailTemplate=" + welcomeEmailTemplate
            }, function (data) {
                if (helper.checkError(data)) {
                    reject(data);
                } else {
                    resolve(data);
                }
            });
        });
    };

    //Email Prompt Auto Login Ping( GET )
    module.autoLogin.ping = function ( clientGuid, fields ) {
        helper.checkFields(fields, config);
        return new Promise(function (resolve, reject) {
            config.request({
                uri: config.apidomain + authEndpoint +"login/autologin/ping?apikey=" + config.apikey + "&clientGuid=" + clientGuid
            }, function (data) {
                if (helper.checkError(data)) {
                    reject(data);
                } else {
                    resolve(data);
                }
            });
        });
    };

    //This API is used to get Server Start Time and End Time( GET )
    module.getServerTime = function ( timeDifference, fields ) {
        if(!timeDifference){
           var timeDifference = "10";
        }
        helper.checkFields(fields, config);
        return new Promise(function (resolve, reject) {
            config.request({
                method: 'GET',
                uri: config.apidomain + "/identity/v2/serverinfo?timedifference=" + timeDifference+ "&apikey="+ config.apikey
            }, function (data) {
                if (helper.checkError(data)) {
                    reject(data);
                } else {
                    resolve(data);
                }
            });
        });
    };

    //Get Security Questions By Email
    module.securityQuestionByEmail = function ( email, fields ) {
        helper.checkFields(fields, config);
        return new Promise(function (resolve, reject) {
            config.request({
                uri: config.apidomain + authEndpoint +"securityquestion/email?apikey=" + config.apikey + "&email="+ email
            }, function (data) {
                if (helper.checkError(data)) {
                    reject(data);
                } else {
                    resolve(data);
                }
            });
        });
    };

    //Get Security Questions By Username
    module.securityQuestionByUsername = function ( username, fields ) {
        helper.checkFields(fields, config);
        return new Promise(function (resolve, reject) {
            config.request({
                uri: config.apidomain + authEndpoint +"securityquestion/username?apikey=" + config.apikey + "&username="+ username
            }, function (data) {
                if (helper.checkError(data)) {
                    reject(data);
                } else {
                    resolve(data);
                }
            });
        });
    };

    //Get Security Questions By Access Token
    module.securityQuestionByToken = function ( access_token, fields ) {
        helper.checkFields(fields, config);
        return new Promise(function (resolve, reject) {
            config.request({
                uri: config.apidomain + authEndpoint +"securityquestion/accesstoken?apikey=" + config.apikey + "&access_token="+ access_token
            }, function (data) {
                if (helper.checkError(data)) {
                    reject(data);
                } else {
                    resolve(data);
                }
            });
        });
    };

    //Get Security Questions By Phone
    module.securityQuestionByPhone = function ( phone, fields ) {
        helper.checkFields(fields, config);
        return new Promise(function (resolve, reject) {
            config.request({
                uri: config.apidomain + authEndpoint +"securityquestion/phone?apikey=" + config.apikey + "&phone="+ phone
            }, function (data) {
                if (helper.checkError(data)) {
                    reject(data);
                } else {
                    resolve(data);
                }
            });
        });
    };

    //Instant Link Login By Email
    module.instantLinkLoginByEmail = function ( email, oneclicksignintemplate, verificationurl, fields ) {
        oneclicksignintemplate = helper.checkNullOrUndefined(oneclicksignintemplate);
        verificationurl = helper.checkNullOrUndefined(verificationurl);
        helper.checkFields(fields, config);
        return new Promise(function (resolve, reject) {
            config.request({
                uri: config.apidomain + authEndpoint +"login/oneclicksignin?apikey=" + config.apikey + "&email="+ email + "&oneclicksignintemplate="+ oneclicksignintemplate + "&verificationurl="+ verificationurl
            }, function (data) {
                if (helper.checkError(data)) {
                    reject(data);
                } else {
                    resolve(data);
                }
            });
        });
    };

    //Instant Link Login By Username
    module.instantLinkLoginByUsername = function ( username, oneclicksignintemplate, verificationurl, fields ) {
        oneclicksignintemplate = helper.checkNullOrUndefined(oneclicksignintemplate);
        verificationurl = helper.checkNullOrUndefined(verificationurl);
        helper.checkFields(fields, config);
        return new Promise(function (resolve, reject) {
            config.request({
                uri: config.apidomain + authEndpoint +"login/oneclicksignin?apikey=" + config.apikey + "&username="+ username + "&oneclicksignintemplate="+ oneclicksignintemplate + "&verificationurl="+ verificationurl
            }, function (data) {
                if (helper.checkError(data)) {
                    reject(data);
                } else {
                    resolve(data);
                }
            });
        });
    };

    //Instant Link Login Verification
    module.instantLinkLoginVerify = function ( verificationtoken, welcomeemailtemplate, fields ) {
        welcomeemailtemplate = helper.checkNullOrUndefined(welcomeemailtemplate);
        helper.checkFields(fields, config);
        return new Promise(function (resolve, reject) {
            config.request({
                uri: config.apidomain + authEndpoint +"login/oneclickverify?apikey=" + config.apikey + "&verificationtoken="+ verificationtoken + "&welcomeemailtemplate="+ welcomeemailtemplate
            }, function (data) {
                if (helper.checkError(data)) {
                    reject(data);
                } else {
                    resolve(data);
                }
            });
        });
    };

    //Password Less Login OR Simplified Instant Registration By Email Id
    module.simplifiedRegistrationByEmail = function ( email, name, clientguid, redirecturl, noregistrationemailtemplate, welcomeemailtemplate, fields ) {
        name = helper.checkNullOrUndefined(name);
        redirecturl = helper.checkNullOrUndefined(redirecturl);
        noregistrationemailtemplate = helper.checkNullOrUndefined(noregistrationemailtemplate);
        welcomeemailtemplate = helper.checkNullOrUndefined(welcomeemailtemplate);
        helper.checkFields(fields, config);
        return new Promise(function (resolve, reject) {
            config.request({
                uri: config.apidomain + authEndpoint +"noregistration/email?apikey=" + config.apikey + "&email="+ email + "&name="+ name + "&clientguid="+ clientguid + "&redirecturl="+ redirecturl + "&noregistrationemailtemplate=" + noregistrationemailtemplate + "&welcomeemailtemplate=" + welcomeemailtemplate
            }, function (data) {
                if (helper.checkError(data)) {
                    reject(data);
                } else {
                    resolve(data);
                }
            });
        });
    };

    //Password Less Login OR Simplified Instant Registration By Phone
    module.simplifiedRegistrationByPhone = function ( phone, name, smstemplate, fields ) {
        name = helper.checkNullOrUndefined(name);
        smstemplate = helper.checkNullOrUndefined(smstemplate);
        helper.checkFields(fields, config);
        return new Promise(function (resolve, reject) {
            config.request({
                uri: config.apidomain + authEndpoint +"noregistration/phone?apikey=" + config.apikey + "&phone="+ phone + "&name="+ name + "&smstemplate="+ smstemplate
            }, function (data) {
                if (helper.checkError(data)) {
                    reject(data);
                } else {
                    resolve(data);
                }
            });
        });
    };

    //Password Less Login OR Simplified Instant Registration OTP Verification
    module.simplifiedRegistrationVerifyOtp = function ( phone, otp, smstemplate, fields ) {
        smstemplate = helper.checkNullOrUndefined(smstemplate);
        formData = {
            "phone": phone
        };
        helper.checkFields(fields, config);
        return new Promise(function (resolve, reject) {
            config.request({
                method: "PUT",
                uri: config.apidomain + authEndpoint +"noregistration/phone/verify?apikey=" + config.apikey + "&otp=" + otp + "&smstemplate="+ smstemplate,
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

    return module;
};
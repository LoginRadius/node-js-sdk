module.exports = function (config) {

    var module = {};
    var authEndpoint = "/identity/v2/auth/";
    var backUpManageEndPoint = "/identity/v2/manage/account/2FA/backupcode";
    var helper = require('./../helper.js');

	module.login = {};
    module.twoFactor = {};
    module.profile = {};
    module.customObject = {};
    module.twoFactor.backUpCode ={};
    module.autoLogin ={};
    module.autoLogin.sendEmailWithToken = {};

    // Token Validity( GET )
    module.validity = function (access_token) {
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
    module.invalidate = function (access_token) {
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

    module.login.byEmail = function (email, password, verificationUrl, loginUrl, emailTemplate, reCaptchaKey) {
        verificationUrl = helper.checkNullOrUndefined(verificationUrl);
        loginUrl = helper.checkNullOrUndefined(loginUrl);
        emailTemplate = helper.checkNullOrUndefined(emailTemplate);
        reCaptchaKey = helper.checkNullOrUndefined(reCaptchaKey);
        return new Promise(function (resolve, reject) {
            config.request({uri: config.apidomain + authEndpoint +"login?apikey=" + config.apikey + "&email=" + email + "&password=" + password + "&loginUrl=" + loginUrl + "&verificationUrl=" + verificationUrl + "&emailTemplate=" + emailTemplate + "&g-recaptcha-response="+ reCaptchaKey, }, function (data) {
                if (helper.checkError(data)) {
                    reject(data);
                } else {
                    resolve(data);
                }
            });
        });
    };
  

    // Login by Username( GET )
    module.login.byUsername = function (username, password, verificationUrl, loginUrl, emailTemplate, reCaptchaKey) {
        verificationUrl = helper.checkNullOrUndefined(verificationUrl);
        loginUrl = helper.checkNullOrUndefined(loginUrl);
        emailTemplate = helper.checkNullOrUndefined(emailTemplate);
        reCaptchaKey = helper.checkNullOrUndefined(reCaptchaKey);
        return new Promise(function (resolve, reject) {
            config.request({uri: config.apidomain + authEndpoint +"login?apikey=" + config.apikey + "&username=" + username + "&password=" + password + "&loginUrl=" + loginUrl + "&verificationUrl=" + verificationUrl + "&emailTemplate=" + emailTemplate + "&g-recaptcha-response="+ reCaptchaKey}, function (data) {
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
    @params sottValidityTime A valid time in minute(By default value will be 10) (optional)
     */
    module.register = function (formData, verificationUrl, emailTemplate ,startDate, endDate, timeDifference) {
        verificationUrl = helper.checkNullOrUndefined(verificationUrl);
        emailTemplate = helper.checkNullOrUndefined(emailTemplate);
        timeDifference = helper.checkNullOrUndefined(timeDifference);

        return new Promise(function (resolve, reject) {
            helper.getSott(function (sott) {
            config.request({
                method: 'POST',
                uri: config.apidomain + authEndpoint +"register?apikey=" + config.apikey + "&verificationUrl=" + verificationUrl + "&emailTemplate=" + emailTemplate + "&sott=" + sott,
                headers: {'content-type': 'application/json'},
                body: JSON.stringify(formData)
            }, function (data) {
                if (helper.checkError(data)) {
                    reject(data);
                } else {
                    resolve(data);
                }
            });
        },config, startDate, endDate, timeDifference);
        });
    }

    // Resend Email Verification( PUT )
    module.resendEmailVerification = function (email, verificationUrl, emailTemplate) {
        verificationUrl = helper.checkNullOrUndefined(verificationUrl);
        emailTemplate = helper.checkNullOrUndefined(emailTemplate);
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
    module.profile.getByToken = function (access_token) {
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
    module.profile.updateByToken = function (access_token, formData, verificationUrl, emailTemplate, nullSupport) {
        verificationUrl = helper.checkNullOrUndefined(verificationUrl);
        emailTemplate = helper.checkNullOrUndefined(emailTemplate);
        nullSupport = helper.checkNullSupport(nullSupport);
        formData.NullSupport = nullSupport;
        return new Promise(function (resolve, reject) {
            config.request({
                method: 'PUT',
                uri: config.apidomain + authEndpoint +"account?apikey=" + config.apikey + "&access_token=" + access_token + "&verificationUrl=" + verificationUrl + "&emailTemplate=" + emailTemplate,
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
    module.removeAccountByEmailConfirmation = function (access_token, deleteUrl, emailTemplate) {
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
    module.forgotPassword = function (email, resetPasswordUrl, emailTemplate) {
        emailTemplate = helper.checkNullOrUndefined(emailTemplate);
        var formData = {
            "email": email
        }
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
    module.resetPassword = function (vtoken, password) {
        var formData = {
            "resettoken": vtoken,
            "password": password
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
    module.resetPasswordbySecurityQuestion = function (securityanswer, userid, password) {
        var formData = {
            "securityanswer": securityanswer,
            "userid": userid,
            "password": password
        }
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
    module.updateSecurityQuestionByAccessToken = function (access_token, securityanswer) {
        var formData = {
            "SecurityQuestionAnswer": securityanswer
        }
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
    module.changePassword = function (access_token, oldpassword, newpassword) {
        var formData = {
            "oldpassword": oldpassword,
            "newpassword": newpassword
        };
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
    module.addEmail = function (access_token, email, type, verificationUrl, emailTemplate) {
        formData = {
            "Email": email,
            "Type": type
        };
        verificationUrl = helper.checkNullOrUndefined(verificationUrl);
        emailTemplate = helper.checkNullOrUndefined(emailTemplate);
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
    module.removeEmail = function (access_token, email) {
        formData = {
            "Email": email
        };
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
    module.getVerifyEmail = function (VerificationToken, url) {
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
    module.getCheckEmail = function (email) {
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
    module.changeUsername = function (access_token, username) {
        formData = {
            "username": username
        };
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
    module.checkUsername = function (username) {
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
    module.accountLink = function (access_token, candidateToken) {
        formData = {
            "candidateToken": candidateToken
        };
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
    module.accountUnlink = function (access_token, provider, providerid) {
        formData = {
            "provider": provider,
            "providerid": providerid
        };
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
    module.getSocialProfile = function (access_token, emailTemplate) {
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
    module.customObject.create = function (access_token, objectName, customObjectData) {
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
    module.customObject.update = function (access_token, objectRecordId, objectName, customObjectData) {
        return new Promise(function (resolve, reject) {
            config.request({
                method: "PUT",
                uri: config.apidomain + authEndpoint +"customobject/" + objectRecordId + "?apikey=" + config.apikey + "&access_token=" + access_token + "&objectname=" + objectName,
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
    module.customObject.setByToken = function (access_token, objectName) {
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
    module.customObject.setByID = function (access_token, objectRecordId, objectName) {
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
    module.customObject.delete = function (access_token, objectRecordId, objectName) {
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
    module.twoFactor.ByToken = function (access_token, smsTemplate2FA) {
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
    module.twoFactor.phoneLogin = function (phone, password, loginUrl, verificationUrl, smsTemplate, smsTemplate2FA) {
        loginUrl = helper.checkNullOrUndefined(loginUrl);
        verificationUrl = helper.checkNullOrUndefined(verificationUrl);
        smsTemplate = helper.checkNullOrUndefined(smsTemplate);
        smsTemplate2FA = helper.checkNullOrUndefined(smsTemplate2FA);
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
    module.twoFactor.emailLogin = function (email, password, loginUrl, verificationUrl, emailTemplate, smsTemplate2FA) {
        loginUrl = helper.checkNullOrUndefined(loginUrl);
        verificationUrl = helper.checkNullOrUndefined(verificationUrl);
        emailTemplate = helper.checkNullOrUndefined(emailTemplate);
        smsTemplate2FA = helper.checkNullOrUndefined(smsTemplate2FA);
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
    module.twoFactor.usernameLogin = function (username, password, loginUrl, verificationUrl, emailTemplate, smsTemplate2FA) {
        loginUrl = helper.checkNullOrUndefined(loginUrl);
        verificationUrl = helper.checkNullOrUndefined(verificationUrl);
        emailTemplate = helper.checkNullOrUndefined(emailTemplate);
        smsTemplate2FA = helper.checkNullOrUndefined(smsTemplate2FA);
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
    module.twoFactor.updatePhone = function (SecondFactorAuthenticationToken, phoneNo2FA, smsTemplate2FA) {
        var formData = {
            "phoneNo2FA": phoneNo2FA
        };
        smsTemplate2FA = helper.checkNullOrUndefined(smsTemplate2FA);
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
    module.twoFactor.verifyGoogleAuth = function (SecondFactorAuthenticationToken, googleAuthenticatorCode, otp, smsTemplate2FA) {
        smsTemplate2FA = helper.checkNullOrUndefined(smsTemplate2FA);
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
    module.twoFactor.updatePhoneByToken = function (access_token, phoneNo2FA, smsTemplate) {
        var formData = {
            "phoneNo2FA": phoneNo2FA
        };
        smsTemplate = helper.checkNullOrUndefined(smsTemplate);
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
    module.twoFactor.googleAuthByToken = function (access_token, googleAuthenticatorCode, otp, smsTemplate) {
        smsTemplate = helper.checkNullOrUndefined(smsTemplate);
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
    module.getSott =  function (startDate, endDate, timeDifference) {
        return new Promise(function (resolve, reject) {
            helper.getSott(function (sott) {
                resolve(sott);
            },config, startDate, endDate, timeDifference);
        });
    };

    /**Remove /Reset Google Authenticator and SMS Authenticator By UID
     *@param uid {String}
     *@param authenticator {String "otpauthenticator" or "googleauthenticator"}
     */
    module.twoFactor.removeAuthByUid = function (uid, authenticator ) {
        var payload ={};
        payload[authenticator] = true;
        return new Promise(function (resolve, reject) {
            config.request({
                method: "DELETE",
                uri: config.apidomain + "/identity/v2/manage/account/2FA/authenticator?apikey=" + config.apikey + "&apisecret=" + config.apisecret + "&uid=" + uid,
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

    /**Remove /Reset Google Authenticator and SMS Authenticator By Token
     *@param access_token {String}
     *@param authenticator {String "otpauthenticator" or "googleauthenticator"}
     */
    module.twoFactor.removeAuthByToken = function (access_token, authenticator ) {
        var payload ={};
        payload[authenticator] = true;
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
    module.twoFactor.backUpCode.login = function ( SecondFactorAuthenticationToken, backup_code ) {
        return new Promise(function (resolve, reject) {
            config.request({
                uri: config.apidomain + authEndpoint +"login/2FA/backupcode?apikey=" + config.apikey + "&SecondFactorAuthenticationToken=" + access_token + "&backupcode=" +backup_code
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
    module.twoFactor.backUpCode.getByToken = function ( access_token ) {
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
    module.twoFactor.backUpCode.resetByToken = function ( access_token ) {
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
    module.twoFactor.backUpCode.getByUid = function ( uid ) {
        return new Promise(function (resolve, reject) {
            config.request({
                uri: config.apidomain + backUpManageEndPoint +"?apikey=" + config.apikey + "&apisecret="+ config.apisecret + "&uid=" + uid
            }, function (data) {
                if (helper.checkError(data)) {
                    reject(data);
                } else {
                    resolve(data);
                }
            });
        });
    };

    //Reset Backup code by UID
    module.twoFactor.backUpCode.resetByUid = function ( uid ) {
        return new Promise(function (resolve, reject) {
            config.request({
                uri: config.apidomain + backUpManageEndPoint +"/reset?apikey=" + config.apikey + "&apisecret="+ config.apisecret + "&uid=" + uid
            }, function (data) {
                if (helper.checkError(data)) {
                    reject(data);
                } else {
                    resolve(data);
                }
            });
        });
    };

    //Email prompt auto login send email with token by Email( GET )
    module.autoLogin.sendEmailWithToken.byEmail = function ( email, clientGuid, autoLoginEmailTemplate, welcomeEmailTemplate ) {
        return new Promise(function (resolve, reject) {
            config.request({
                uri: config.apidomain + authEndpoint +"login/autologin/?apikey=" + config.apikey + "&email="+ email + "&clientGuid=" + clientGuid + "&autoLoginEmailTemplate=" +autoLoginEmailTemplate + "&welcomeEmailTemplate=" + welcomeEmailTemplate
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
    module.autoLogin.sendEmailWithToken.byUsername = function ( username, clientGuid, autoLoginEmailTemplate, welcomeEmailTemplate ) {
        return new Promise(function (resolve, reject) {
            config.request({
                uri: config.apidomain + authEndpoint +"login/autologin/?apikey=" + config.apikey + "&userName="+ username + "&clientGuid=" + clientGuid + "&autoLoginEmailTemplate=" +autoLoginEmailTemplate + "&welcomeEmailTemplate=" + welcomeEmailTemplate
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
    module.autoLogin.ping = function ( clientGuid ) {
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

    return module;
};
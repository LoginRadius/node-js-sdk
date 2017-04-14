module.exports = function (config) {

    var module = {};
    var phoneAuthEndpoint = "/identity/v2/auth/";
    var helper = require('./../helper.js');

    module.otp = {};

    // Phone User Registration by SMS ( POST )
    module.register = function (formData, verificationUrl, smsTemplate) {
        verificationUrl = helper.checkNullOrUndefined(verificationUrl);
        smsTemplate = helper.checkNullOrUndefined(smsTemplate);

        return new Promise(function (resolve, reject) {
            helper.getSott(function (sott) {
                config.request({
                    method: "POST",
                    uri: config.apidomain + phoneAuthEndpoint + "register?apikey=" + config.apikey + "&verificationUrl=" + verificationUrl + "&smsTemplate=" + smsTemplate + "&sott=" + sott,
                    headers: {'content-type': 'application/json'},
                    body: JSON.stringify(formData)
                }, function (data) {
                    if (helper.checkError(data)) {
                        reject(data);
                    } else {
                        resolve(data);
                    }
                });
            }, config);
        });

    }

    // Phone Login( GET )
    module.login = function (phone, password, loginUrl, smsTemplate) {
        loginUrl = helper.checkNullOrUndefined(loginUrl);
        smsTemplate = helper.checkNullOrUndefined(smsTemplate);
        return new Promise(function (resolve, reject) {
            config.request({uri: config.apidomain + phoneAuthEndpoint +"login?apikey=" + config.apikey + "&phone=" + phone + "&password=" + password + "&loginUrl=" + loginUrl + "&smsTemplate=" + smsTemplate}, function (data) {
                console.log(data);
                if (helper.checkError(data)) {
                    reject(data);
                } else {
                    resolve(data);
                }
            });
        });
    }

    // Phone Number Update( PUT )
    module.update = function (phone, access_token, smsTemplate) {
        smsTemplate = helper.checkNullOrUndefined(smsTemplate);
        var formData = {
            "phone": phone
        }
        return new Promise(function (resolve, reject) {
            config.request({
                method: "PUT",
                uri: config.apidomain + phoneAuthEndpoint +"phone?apikey=" + config.apikey + "&access_token=" + access_token + "&smsTemplate=" + smsTemplate,
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

    // Phone Number Availability( GET )
    module.getPhoneAvailable = function (phone) {
        return new Promise(function (resolve, reject) {
            config.request({uri: config.apidomain + phoneAuthEndpoint +"phone?apikey=" + config.apikey + "&phone=" + phone}, function (data) {
                if (helper.checkError(data)) {
                    reject(data);
                } else {
                    resolve(data);
                }
            });
        });
    }

    // Phone Forgot Password by OTP( POST )
    module.forgotPassword = function (phone, smsTemplate) {
        smsTemplate = helper.checkNullOrUndefined(smsTemplate);
        var formData = {
            "phone": phone
        }
        return new Promise(function (resolve, reject) {
            config.request({
                method: "POST",
                uri: config.apidomain + phoneAuthEndpoint +"password/otp?apikey=" + config.apikey + "&smsTemplate=" + smsTemplate,
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

    // Phone Reset Password by OTP( PUT )
    module.resetPassword = function (phone, otp, password, smsTemplate) {
        smsTemplate = helper.checkNullOrUndefined(smsTemplate);
        var formData = {
            "phone": phone,
            "otp": otp,
            "password": password
        }
        return new Promise(function (resolve, reject) {
            config.request({
                method: "PUT",
                uri: config.apidomain + phoneAuthEndpoint +"password/otp?apikey=" + config.apikey + "&smsTemplate=" + smsTemplate,
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

    // Phone Resend OTP( POST )
    module.otp.resend = function (phone, smsTemplate) {
        smsTemplate = helper.checkNullOrUndefined(smsTemplate);
        var formData = {
            "phone": phone
        }
        return new Promise(function (resolve, reject) {
            config.request({
                method: "POST",
                uri: config.apidomain + phoneAuthEndpoint +"phone/otp?apikey=" + config.apikey + "&smsTemplate=" + smsTemplate,
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

    // Phone Verify OTP( PUT )
    module.otp.verify = function (phone, otp, smsTemplate) {
        smsTemplate = helper.checkNullOrUndefined(smsTemplate);
        var formData = {
            "phone": phone
        }
        return new Promise(function (resolve, reject) {
            config.request({
                method: "PUT",
                uri: config.apidomain + phoneAuthEndpoint +"phone/otp?apikey=" + config.apikey + "&otp=" + otp + "&smsTemplate=" + smsTemplate,
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

    // Phone Verify OTP by Token( PUT )
    module.otp.verifyByToken = function (phone, access_token, otp, smsTemplate) {
        smsTemplate = helper.checkNullOrUndefined(smsTemplate);
        var formData = {
            "phone": phone
        }
        return new Promise(function (resolve, reject) {
            config.request({
                method: "PUT",
                uri: config.apidomain + phoneAuthEndpoint +"phone/otp?apikey=" + config.apikey + "&access_token=" + access_token + "&otp=" + otp + "&smsTemplate=" + smsTemplate,
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

    // Phone Send One time Passcode( GET )
    module.otp.send = function (phone, smsTemplate) {
        smsTemplate = helper.checkNullOrUndefined(smsTemplate);
        return new Promise(function (resolve, reject) {
            config.request({uri: config.apidomain + phoneAuthEndpoint +"login/otp?apikey=" + config.apikey + "&phone=" + phone + "&smsTemplate=" + smsTemplate}, function (data) {
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
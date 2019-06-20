// Config variable 
const config = {    
    apidomain: '<YOUR-API-CUSTOM-DOMAIN>',
    apikey: '<YOUR-API-KEY>',
    apisecret: '<YOUR-SECRET-KEY>',
    sitename: '<YOUR-SITE-NAME>',
    api_request_signing: '',
    proxy: {
        method: '',
        host: '',
        port: '',
        user: '',
        password: ''
    }
};
const port = 3000
// Module dependencies.
const express = require('express'),
        lrv2 = require('loginradius-sdk')(config),
        bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/demo', express.static(__dirname + '/demo'));
app.post('/ajax_handler/login', function (req, res) {        
    var action = req.body.action ? req.body.action : '';
    var output = {};
    output.status = 'error';
    output.message = 'an error occoured';  
    if (action == 'loginByEmail') {// login By Email
        var email = req.body.email ? req.body.email : '';
        var password = req.body.password ? req.body.password : '';
        if (email == '') {
            output.message = 'email is required';
        } else if (password == '') {
            output.message = 'password is required';
        } else {
            lrv2.authentication.login.byEmail(email, password).then(function (response) {
                if ((response.access_token) && (response.access_token != '')) {
                    output.data = response;
                    output.message = "Logged in successfully";
                    output.status = 'success';
                }
                res.send(output);
            }).catch(function (error) {
                output.message = error.Description;
                res.send(output);
            });
        }
    } else if (action == 'getProfile') {//get profile by token
        var token = req.body.token ? req.body.token : '';
        if (token == '') {
            output.message = 'Token is required';
        } else {
            lrv2.authentication.profile.getByToken(token).then(function (response) {
                if ((response.EmailVerified)) {
                    output.data = response;
                    output.message = "Profile fetched";
                    output.status = 'success';
                } else {
                    output.message = "Email is not verified.";
                }
                res.send(output);
            }).catch(function (error) {
                output.message = error.Description;
                res.send(output);
            });
        }
    } else if (action == 'registration') {//registration
        
        var email = req.body.email ? req.body.email : '';
        var password = req.body.password ? req.body.password : '';
        var verificationurl = req.body.verificationurl ? req.body.verificationurl : '';
        if (email == '') {
            output.message = 'email is required';
        } else if (password == '') {
            output.message = 'password is required';
        } else {
            var payload = {};            
            payload.Email = [{
                "Type": "Primary",
                "Value": email
            }];
            payload.password = password;
       
           lrv2.authentication.register(payload, verificationurl).then(function (response) {
           
                if ((response.EmailVerified)) {
                    output.data = response;
                    output.message = "You have successfully registered.";
                    output.status = 'success';
                } else {
                    output.message = "You have successfully registered, Please check your email.";
                    output.status = 'registered';
                }
                res.send(output);
            }).catch(function (error) {
                output.message = error.Description;
                res.send(output);
            });
        }
    } else if (action == 'pwLessLogin') {//pwLessLogin
        var email = req.body.email ? req.body.email : '';
        var verificationurl = req.body.verificationurl ? req.body.verificationurl : '';
        if (email == '') {
            output.message = 'The Email Id field is required.';
        } else {
            lrv2.authentication.passwordlessLoginByEmail(email, '', verificationurl).then(function (response) {
                if (response.IsPosted) {
                    output.message = "One time login link has been sent to your provided email id, check email for further instruction.";
                    output.status = 'success';
                } else {
                    output.message = "Email is not verified.";
                }
                res.send(output);
            }).catch(function (error) {
                output.message = error.Description;
                res.send(output);
            });
        }
    } else if (action == 'forgotPassword') {//forgotPassword
        var email = req.body.email ? req.body.email : '';
        var resetPasswordUrl = req.body.resetPasswordUrl ? req.body.resetPasswordUrl : '';
        if (email == '') {
            output.message = 'The Email Id field is required.';
        } else {
            lrv2.authentication.forgotPassword(email, resetPasswordUrl).then(function (response) {
                if (response.IsPosted) {
                    output.message = "We'll email you an instruction on how to reset your password";
                    output.status = 'success';
                }
                res.send(output);
            }).catch(function (error) {
                output.message = error.Description;
                res.send(output);
            });
        }
    } else if (action == 'resetPassword') {//resetPassword
        var token = req.body.resettoken ? req.body.resettoken : '';
        var password = req.body.password ? req.body.password : '';
        
        if (token == '') {
            output.message = 'Token is required';
        } else if (password == '') {
            output.message = 'Password is required';
        } else {
            lrv2.authentication.resetPassword(token, password).then(function (response) {
                if ((response.IsPosted)) {
                    output.message = "Password has been reset successfully.";
                    output.status = 'success';
                }
                res.send(output);
            }).catch(function (error) {
                output.message = error.Description;
                res.send(output);
            });
        }
    } else if (action == 'pwLessLinkVerify') {//pwLessLinkVerify
        var token = req.body.token ? req.body.token : '';
        if (token == '') {
            output.message = 'Token is required';
        } else {
            lrv2.authentication.passwordlessLoginVerify(token).then(function (response) {
                if ((response.access_token)) {
                    output.data = response;
                    output.message = "Link has been verified.";
                    output.status = 'success';
                }
                res.send(output);
            }).catch(function (error) {
                output.message = error.Description;
                res.send(output);
            });
        }
    } else if (action == 'emailVerify') {//emailVerify
        var vtoken = req.body.vtoken ? req.body.vtoken : '';
        if (vtoken == '') {
            output.message = 'Verification token is required';
        } else {
            lrv2.authentication.getVerifyEmail(vtoken).then(function (response) {
                if ((response.IsPosted)) {
                    output.message = "Your email has been verified successfully.";
                    output.status = 'success';
                }
                res.send(output);
            }).catch(function (error) {
                output.message = error.Description;
                res.send(output);
            });
        }
    } else if (action == 'mfaLogin') {//mfaLogin
        var email = req.body.email ? req.body.email : '';
        var password = req.body.password ? req.body.password : '';
        if (email == '') {
            output.message = 'email is required';
        } else if (password == '') {
            output.message = 'password is required';
        } else {
            lrv2.authentication.mfaEmailLogin(email, password).then(function (response) {
                if ((response.access_token) && (response.access_token != '')) {
                    output.data = response;
                    output.message = "Logged in successfully";
                    output.status = 'success';
                }
                res.send(output);
            }).catch(function (error) {
                output.message = error.Description;
                res.send(output);
            });
        }
    }  else if (action == 'mfaValidate') {//mfaValidate
        var secondFactorAuthenticationToken = req.body.secondFactorAuthenticationToken ? req.body.secondFactorAuthenticationToken : '';
        var googleAuthCode = req.body.googleAuthCode ? req.body.googleAuthCode : '';
        if (secondFactorAuthenticationToken == '') {
            output.message = 'Second Factor Authentication Token is required';
        } else if (googleAuthCode == '') {
            output.message = 'Google Auth Code is required';
        } else {
            lrv2.authentication.mfaValidateGoogleAuthCode(secondFactorAuthenticationToken, googleAuthCode).then(function (response) {
                if ((response.access_token) && (response.access_token != '')) {
                    output.data = response;
                    output.message = "Mfa validate google auth code.";
                    output.status = 'success';
                }
                res.send(output);
            }).catch(function (error) {
                output.message = error.Description;
                res.send(output);
            });
        }
    }
});
app.post('/ajax_handler/profile', function (req, res) {
    var action = req.body.action ? req.body.action : '';
    var output = {};
    output.status = 'error';
    output.message = 'an error occoured';
    if (action == 'updateAccount') {
        var token = req.body.token ? req.body.token : '';
        var firstname = req.body.firstname ? req.body.firstname : '';
        var lastname = req.body.lastname ? req.body.lastname : '';
        var about = req.body.about ? req.body.about : '';
        if (token == '') {
            output.message = 'Token is required';
        } else {
            var payload = {};  
            payload.FirstName = firstname;
            payload.LastName = lastname;
            payload.About = about;
                        
            lrv2.authentication.profile.updateByToken(token, payload).then(function (response) {
                if (response.IsPosted) {
                    output.message = "Profile has been updated successfully.";
                    output.status = 'success';
                } else {
                    output.message = "Account not updated";
                }
                res.send(output);
            }).catch(function (error) {
                output.message = error.Description;
                res.send(output);
            });
        }
    } else if (action == 'getProfileByUid') {
        var uid = req.body.uid ? req.body.uid : '';
        if (uid == '') {
            output.message = 'uid is required';
        } else {       
            lrv2.account.profile.getByUid(uid).then(function (response) {              
                if (response.Uid) {
                      output.data = response;
                      output.message = "fetched profile";
                      output.status = 'success';
                } else {
                    output.message = "profile not fetched";
                }
                res.send(output);
            }).catch(function (error) {
                output.message = error.Description;
                res.send(output);
            });
        }
    } else if (action == 'changePassword') {
        var token = req.body.token ? req.body.token : '';
        var oldpassword = req.body.oldpassword ? req.body.oldpassword : '';
        var newpassword = req.body.newpassword ? req.body.newpassword : '';
        if (token == '') {
            output.message = 'Token is required';
        } else if (oldpassword == '') {
            output.message = 'old passwpord is required';
        } else if (newpassword == '') {
            output.message = 'new passwpord is required';
        } else {
            lrv2.authentication.changePassword(token, oldpassword, newpassword).then(function (response) {
                if (response.IsPosted) {
                    output.message = "Password has been changed successfully.";
                    output.status = 'success';
                } else {
                    output.message = "Password has not Updated.";
                }
                res.send(output);
            }).catch(function (error) {
                output.message = error.Description;
                res.send(output);
            });
        }
    } else if (action == 'setPassword') {
        var uid = req.body.uid ? req.body.uid : '';
        var newpassword = req.body.newpassword ? req.body.newpassword : '';
        if (uid == '') {
            output.message = 'Uid is required';
        } else if (newpassword == '') {
            output.message = 'new passwpord is required';
        } else {
            lrv2.account.setPassword(uid, newpassword).then(function (response) {
                if (response.PasswordHash) {
                    output.message = "Password has been set successfully.";
                    output.status = 'success';
                } else {
                    output.message = "Password not Created.";
                }
                res.send(output);
            }).catch(function (error) {
                output.message = error.Description;
                res.send(output);
            });
        }
    } else if (action == 'createCustomObjects') {
        var uid = req.body.uid ? req.body.uid : '';
        var objectName = req.body.objectName ? req.body.objectName : '';
        var payload = req.body.payload ? JSON.parse(req.body.payload) : '';
        if (uid == '') {
            output.message = 'Uid is required';
        } else if (objectName == '') {
            output.message = 'Object name is required.';
        } else if (payload == '') {
            output.message = 'Payload is required.';
        } else {
            lrv2.customObject.createByUid(uid, objectName, payload).then(function (response) {
                if (response.Uid) {
                    output.message = "Custom object created successfully.";
                    output.status = 'success';
                } else {
                    output.message = "Custom Object not created.";
                }
                res.send(output);
            }).catch(function (error) {
                output.message = error.Description;
                res.send(output);
            });
        }
    } else if (action == 'getCustomObjects') {
        var uid = req.body.uid ? req.body.uid : '';
        var objectName = req.body.objectName ? req.body.objectName : '';
        var payload = req.body.payload ? req.body.payload : '';
        if (uid == '') {
            output.message = 'Uid is required';
        } else if (objectName == '') {
            output.message = 'Object name is required.';
        } else {
            lrv2.customObject.getByUID(uid, objectName).then(function (response) {
                if (response.Count && response.Count != 0) {
                    output.result = response;
                    output.message = "List of custom object.";
                    output.status = 'success';
                } else {
                    output.message = "Custom Object is empty.";
                }
                res.send(output);
            }).catch(function (error) {
                output.message = error.Description;
                res.send(output);
            });
        }
    } else if (action == 'updateCustomObjects') {
        var uid = req.body.uid ? req.body.uid : '';
        var objectName = req.body.objectName ? req.body.objectName : '';
        var objectRecordId = req.body.objectRecordId ? req.body.objectRecordId : '';
        var payload = req.body.payload ? JSON.parse(req.body.payload) : '';
        if (uid == '') {
            output.message = 'Uid is required';
        } else if (objectName == '') {
            output.message = 'Object name is required.';
        } else if (objectRecordId == '') {
            output.message = 'object Record Id is required.';
        } else if (payload == '') {
            output.message = 'Payload is required.';
        } else {
            lrv2.customObject.update(uid, objectRecordId, objectName, payload, 'replace').then(function (response) {
                if (response.Uid) {
                    output.message = "Custom object updated successfully.";
                    output.status = 'success';
                } else {
                    output.message = "Custom Object is not updated.";
                }
                res.send(output);
            }).catch(function (error) {
                output.message = error.Description;
                res.send(output);
            });
        }
    } else if (action == 'deleteCustomObjects') {
        var uid = req.body.uid ? req.body.uid : '';
        var objectName = req.body.objectName ? req.body.objectName : '';
        var objectRecordId = req.body.objectRecordId ? req.body.objectRecordId : '';
        if (uid == '') {
            output.message = 'Uid is required';
        } else if (objectName == '') {
            output.message = 'Object name is required.';
        } else if (objectRecordId == '') {
            output.message = 'object Record Id is required.';
        } else {
            lrv2.customObject.remove(uid, objectRecordId, objectName).then(function (response) {
                if (response.IsDeleted) {
                    output.message = "Custom object deleted successfully.";
                    output.status = 'success';
                } else {
                    output.message = "Custom Object not updated.";
                }
                res.send(output);
            }).catch(function (error) {
                output.message = error.Description;
                res.send(output);
            });
        }
    } else if (action == 'handleCreateRole') {
        var roles = req.body.roles ? JSON.parse(req.body.roles) : '';
        if (roles == '') {
            output.message = 'Roles field is required';
        } else {
            lrv2.role.create(roles).then(function (response) {
                if ((response.Count) && (response.Count != 0)) {
                    output.message = "Roles has been created.";
                    output.status = 'success';
                } else {
                    output.message = "Roles not exist.";
                }
                res.send(output);
            }).catch(function (error) {
                output.message = error.Description;
                res.send(output);
            });
        }
    } else if (action == 'handleDeleteRole') {
        var roles = req.body.roles ? req.body.roles : '';
        if (roles == '') {
            output.message = 'Roles field is required';
        } else {
            lrv2.role.remove(roles).then(function (response) {
                if (response.IsDeleted) {
                    output.message = "Role has been deleted.";
                    output.status = 'success';
                } else {
                    output.message = "Roles not remove.";
                }
                res.send(output);
            }).catch(function (error) {
                output.message = error.Description;
                res.send(output);
            });
        }
    } else if (action == 'handleAssignUserRole') {
        var uid = req.body.uid ? req.body.uid : '';      
        var roles = req.body.roles ? JSON.parse(req.body.roles) : '';
        if (uid == '') {
            output.message = 'Uid field is required';
        } else if (roles == '') {
            output.message = 'Roles field is required';
        } else {      
            lrv2.role.assignRolesByUid(uid, roles).then(function (response) {
                response = JSON.parse(response);
                if ((response.Roles) && (response.Roles != '')) {
                    output.message = "Role assigned successfully.";
                    output.status = 'success';
                }
                res.send(output);
            }).catch(function (error) {
                output.message = error.Description;
                res.send(output);
            });
        }
    } else if (action == 'getAllRoles') {
        lrv2.role.get().then(function (response) {
            if ((response.Count) && (response.Count != 0)) {
                output.result = response;
                output.message = "Role fetched";
                output.status = 'success';
            } else {
                output.message = "Roles is empty";
            }
            res.send(output);
        }).catch(function (error) {
            output.message = error.Description;
            res.send(output);
        });
    } else if (action == 'getUserRoles') {
        var uid = req.body.uid ? req.body.uid : '';
        lrv2.role.getRolesByUid(uid).then(function (response) {         
            if ((response.Roles) && (response.Roles != '')) {
                output.data = response;
                output.message = "Role fetched";
                output.status = 'success';
            } else {
                output.message = "user roles is empty";
            }
            res.send(output);
        }).catch(function (error) {
            output.message = error.Description;
            res.send(output);
        });
    } else if (action == 'resetMultifactor') {
        var uid = req.body.uid ? req.body.uid : '';
        lrv2.authentication.mfaResetGoogleAuthenticatorByUid(uid, 'googleauthenticator').then(function (response) {
            if (response.IsDeleted) {
                output.data = response;
                output.message = "Google authenticator reset successfully.";
                output.status = 'success';
            } else {
                output.message = "mfa not reset.";
            }
            res.send(output);
        }).catch(function (error) {
            output.message = error.Description;
            res.send(output);
        });
    }
});
app.listen(port, () => console.log(`Demo app can be accessed at localhost:${port}/demo`));
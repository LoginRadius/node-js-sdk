/*  Config variable  */
var config = {
  apiDomain: 'api.loginradius.com',
  apiKey: '{{ Your API KEY }}',
  apiSecret: '{{ Your API Secret }}',
  siteName: '{{ Your Sitename }}',
  serverRegion: '',
  apiRequestSigning: false,
  proxy: {
    protocol: '',
    host: '',
    port: '',
    user: '',
    password: ''
  }
};

// Module dependencies.
var express = require('express');
var lrv2 = new require('loginradius-sdk')(config);
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var PORT = 3000;
app.use('/demo', express.static(path.join(__dirname, '/demo')));
app.use(bodyParser.urlencoded({
  extended: true
}));

app.post('/ajax_handler/login', function (req, res) {
  var action = req.body.action ? req.body.action : '';
  var output = {};
  output.status = 'error';
  output.message = 'an error occoured';
  if (action === 'loginByEmail') { // login By Email
    var email = req.body.email ? req.body.email : '';
    var password = req.body.password ? req.body.password : '';
    if (email === '') {
      output.message = 'email is required';
    } else if (password === '') {
      output.message = 'password is required';
    } else {
      var emailTemplate = '';
      var fields = '';
      var loginUrl = '';
      var verificationUrl = 'http://localhost:3000/demo';

      lrv2.authenticationApi.loginByEmail(req.body, emailTemplate, fields, loginUrl, verificationUrl).then(function (response) {
        if ((response.access_token) && (response.access_token !== '')) {
          output.data = response;
          output.message = 'Logged in successfully';
          output.status = 'success';
        }
        res.send(output);
      }).catch(function (error) {
        output.message = error.Description;
        res.send(output);
      });
    }
  } else if (action === 'getProfile') { // get profile by token
    var token = req.body.token ? req.body.token : '';
    if (token === '') {
      output.message = 'Token is required';
    } else {
      var fields = '';
      var emailTemplate = '';
      var verificationUrl = '';
      var welcomeEmailTemplate = '';
      lrv2.authenticationApi.getProfileByAccessToken(token, fields, emailTemplate, verificationUrl, welcomeEmailTemplate).then(function (response) {
        if ((response.EmailVerified)) {
          output.data = response;
          output.message = 'Profile fetched';
          output.status = 'success';
        } else {
          output.message = 'Email is not verified.';
        }
        res.send(output);
      }).catch(function (error) {
        output.message = error.Description;
        res.send(output);
      });
    }
  } else if (action === 'registration') { // registration
    var email = req.body.email ? req.body.email : '';
    var password = req.body.password ? req.body.password : '';
    if (email === '') {
      output.message = 'email is required';
    } else if (password === '') {
      output.message = 'password is required';
    } else {
      var userprofileModel = {};
      userprofileModel.Email = [{
        'Type': 'Primary',
        'Value': email
      }];
      userprofileModel.password = password;
      var emailTemplate = '';
      var verificationUrl = 'http://localhost:3000/demo';
      var welcomeEmailTemplate = '';
      var fields = '';
      var options = '';

      lrv2.getSott(config).then(function (sott) {
        lrv2.authenticationApi.userRegistrationByEmail(userprofileModel, sott, emailTemplate, fields, options, verificationUrl, welcomeEmailTemplate).then(function (response) {
          if ((response.EmailVerified)) {
            output.data = response;
            output.message = 'You have successfully registered.';
            output.status = 'success';
          } else {
            output.message = 'You have successfully registered, Please check your email.';
            output.status = 'registered';
          }
          res.send(output);
        }).catch(function (error) {
          output.message = error.Description;
          res.send(output);
        });
      });
    }
  } else if (action === 'pwLessLogin') { // pwLessLogin
    var email = req.body.email ? req.body.email : '';
    var verificationUrl = req.body.verificationurl ? req.body.verificationurl : '';
    if (email === '') {
      output.message = 'The Email Id field is required.';
    } else {
      var passwordLessLoginTemplate = '';
      lrv2.passwordLessLoginApi.passwordlessLoginByEmail(email, passwordLessLoginTemplate, verificationUrl).then(function (response) {
        if (response.IsPosted) {
          output.message = 'One time login link has been sent to your provided email id, check email for further instruction.';
          output.status = 'success';
        } else {
          output.message = 'Email is not verified.';
        }
        res.send(output);
      }).catch(function (error) {
        output.message = error.Description;
        res.send(output);
      });
    }
  } else if (action === 'forgotPassword') { // forgotPassword
    var email = req.body.email ? req.body.email : '';
    var resetPasswordUrl = req.body.resetPasswordUrl ? req.body.resetPasswordUrl : '';
    if (email === '') {
      output.message = 'The Email Id field is required.';
    } else {
      var emailTemplate = '';
      lrv2.authenticationApi.forgotPassword(email, resetPasswordUrl, emailTemplate).then(function (response) {
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
  } else if (action === 'resetPassword') { // resetPassword
    var token = req.body.resettoken ? req.body.resettoken : '';
    var password = req.body.password ? req.body.password : '';

    if (token === '') {
      output.message = 'Token is required';
    } else if (password === '') {
      output.message = 'Password is required';
    } else {
      var formData = {
        'resettoken': req.body.resettoken,
        'password': req.body.password,
        'welcomeEmailTemplate': '',
        'resetPasswordEmailTemplate': ''
      };
      lrv2.authenticationApi.resetPasswordByResetToken(formData).then(function (response) {
        if ((response.IsPosted)) {
          output.message = 'Password has been reset successfully.';
          output.status = 'success';
        }
        res.send(output);
      }).catch(function (error) {
        output.message = error.Description;
        res.send(output);
      });
    }
  } else if (action === 'pwLessLinkVerify') { // pwLessLinkVerify
    var verificationToken = req.body.token ? req.body.token : '';
    if (verificationToken === '') {
      output.message = 'Token is required';
    } else {
      var fields = '';
      var welcomeEmailTemplate = '';

      lrv2.passwordLessLoginApi.passwordlessLoginVerification(verificationToken, fields, welcomeEmailTemplate).then(function (response) {
        if ((response.access_token)) {
          output.data = response;
          output.message = 'Link has been verified.';
          output.status = 'success';
        }
        res.send(output);
      }).catch(function (error) {
        output.message = error.Description;
        res.send(output);
      });
    }
  } else if (action === 'emailVerify') { // emailVerify
    var verificationToken = req.body.vtoken ? req.body.vtoken : '';
    if (verificationToken === '') {
      output.message = 'Verification token is required';
    } else {
      var fields = '';
      var url = '';
      var welcomeEmailTemplate = '';
      lrv2.authenticationApi.verifyEmail(verificationToken, fields, url, welcomeEmailTemplate).then(function (response) {
        if ((response.IsPosted)) {
          output.message = 'Your email has been verified successfully.';
          output.status = 'success';
        }
        res.send(output);
      }).catch(function (error) {
        output.message = error.Description;
        res.send(output);
      });
    }
  } else if (action === 'mfaLogin') { // mfaLogin
    var email = req.body.email ? req.body.email : '';
    var password = req.body.password ? req.body.password : '';
    if (email === '') {
      output.message = 'email is required';
    } else if (password === '') {
      output.message = 'password is required';
    } else {
      var emailTemplate = '';
      var emailTemplate2FA = '';
      var fields = '';
      var loginUrl = '';
      var smsTemplate = '';
      var smsTemplate2FA = '';
      var verificationUrl = 'http://localhost:3000/demo';

      lrv2.multiFactorAuthenticationApi.mfaLoginByEmail(email, password, emailTemplate, fields, loginUrl, smsTemplate, smsTemplate2FA, verificationUrl, emailTemplate2FA).then(function (response) {
        if ((response.access_token) && (response.access_token !== '')) {
          output.data = response;
          output.message = 'Logged in successfully';
          output.status = 'success';
        }
        res.send(output);
      }).catch(function (error) {
        output.message = error.Description;
        res.send(output);
      });
    }
  } else if (action === 'mfaValidate') { // mfaValidate
    var secondFactorAuthenticationToken = req.body.secondFactorAuthenticationToken ? req.body.secondFactorAuthenticationToken : '';
    var googleAuthCode = req.body.googleAuthCode ? req.body.googleAuthCode : '';
    if (secondFactorAuthenticationToken === '') {
      output.message = 'Second Factor Authentication Token is required';
    } else if (googleAuthCode === '') {
      output.message = 'Google Auth Code is required';
    } else {
      var fields = '';
      var rbaBrowserEmailTemplate='';
      var rbaCityEmailTemplate='';
      var rbaCountryEmailTemplate='';
      var rbaIpEmailTemplate='';
      lrv2.multiFactorAuthenticationApi.mfaValidateGoogleAuthCode(googleAuthCode, secondFactorAuthenticationToken, fields, rbaBrowserEmailTemplate, rbaCityEmailTemplate, rbaCountryEmailTemplate, rbaIpEmailTemplate).then(function (response) {
        if ((response.access_token) && (response.access_token !== '')) {
          output.data = response;
          output.message = 'Mfa validate google auth code.';
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
  if (action === 'updateAccount') {
    var accessToken = req.body.token ? req.body.token : '';
    var firstname = req.body.firstname ? req.body.firstname : '';
    var lastname = req.body.lastname ? req.body.lastname : '';
    var about = req.body.about ? req.body.about : '';
    if (accessToken === '') {
      output.message = 'Token is required';
    } else {
      var userProfileUpdateModel = {};
      userProfileUpdateModel.FirstName = firstname;
      userProfileUpdateModel.LastName = lastname;
      userProfileUpdateModel.About = about;
      var emailTemplate = '';
      var fields = '';
      var nullSupport = true;
      var verificationUrl = 'http://localhost:3000/demo';
      var smsTemplate = '';

      lrv2.authenticationApi.updateProfileByAccessToken(accessToken, userProfileUpdateModel, emailTemplate, fields, nullSupport, smsTemplate, verificationUrl).then(function (response) {
        if (response.IsPosted) {
          output.message = 'Profile has been updated successfully.';
          output.status = 'success';
        } else {
          output.message = 'Account not updated';
        }
        res.send(output);
      }).catch(function (error) {
        output.message = error.Description;
        res.send(output);
      });
    }
  } else if (action === 'getProfileByUid') {
    var uid = req.body.uid ? req.body.uid : '';
    if (uid === '') {
      output.message = 'uid is required';
    } else {
      var fields = '*';
      lrv2.accountApi.getAccountProfileByUid(uid, fields).then(function (response) {
        if (response.Uid) {
          output.data = response;
          output.message = 'fetched profile';
          output.status = 'success';
        } else {
          output.message = 'profile not fetched';
        }
        res.send(output);
      }).catch(function (error) {
        output.message = error.Description;
        res.send(output);
      });
    }
  } else if (action === 'changePassword') {
    var accessToken = req.body.token ? req.body.token : '';
    var oldPassword = req.body.oldpassword ? req.body.oldpassword : '';
    var newPassword = req.body.newpassword ? req.body.newpassword : '';
    if (accessToken === '') {
      output.message = 'Token is required';
    } else if (oldPassword === '') {
      output.message = 'old passwpord is required';
    } else if (newPassword === '') {
      output.message = 'new passwpord is required';
    } else {
      lrv2.authenticationApi.changePassword(accessToken, newPassword, oldPassword).then(function (response) {
        if (response.IsPosted) {
          output.message = 'Password has been changed successfully.';
          output.status = 'success';
        } else {
          output.message = 'Password has not Updated.';
        }
        res.send(output);
      }).catch(function (error) {
        output.message = error.Description;
        res.send(output);
      });
    }
  } else if (action === 'setPassword') {
    var uid = req.body.uid ? req.body.uid : '';
    var newpassword = req.body.newpassword ? req.body.newpassword : '';
    if (uid === '') {
      output.message = 'Uid is required';
    } else if (newpassword === '') {
      output.message = 'new passwpord is required';
    } else {
      lrv2.accountApi.setAccountPasswordByUid(newpassword, uid).then(function (response) {
        if (response.PasswordHash) {
          output.message = 'Password has been set successfully.';
          output.status = 'success';
        } else {
          output.message = 'Password not Created.';
        }
        res.send(output);
      }).catch(function (error) {
        output.message = error.Description;
        res.send(output);
      });
    }
  } else if (action === 'createCustomObjects') {
    var uid = req.body.uid ? req.body.uid : '';
    var objectName = req.body.objectName ? req.body.objectName : '';
    var payload = req.body.payload ? JSON.parse(req.body.payload) : '';
    if (uid === '') {
      output.message = 'Uid is required';
    } else if (objectName === '') {
      output.message = 'Object name is required.';
    } else if (payload === '') {
      output.message = 'Payload is required.';
    } else {
      lrv2.customObjectApi.createCustomObjectByUid(objectName, payload, uid).then(function (response) {
        if (response.Uid) {
          output.message = 'Custom object created successfully.';
          output.status = 'success';
        } else {
          output.message = 'Custom Object not created.';
        }
        res.send(output);
      }).catch(function (error) {
        output.message = error.Description;
        res.send(output);
      });
    }
  } else if (action === 'getCustomObjects') {
    var uid = req.body.uid ? req.body.uid : '';
    var objectName = req.body.objectName ? req.body.objectName : '';
    // var payload = req.body.payload ? req.body.payload : '';
    if (uid === '') {
      output.message = 'Uid is required';
    } else if (objectName === '') {
      output.message = 'Object name is required.';
    } else {
      lrv2.customObjectApi.getCustomObjectByUid(objectName, uid).then(function (response) {
        if (response.Count) {
          output.result = response;
          output.message = 'List of custom object.';
          output.status = 'success';
        } else {
          output.message = 'Custom Object is empty.';
        }
        res.send(output);
      }).catch(function (error) {
        output.message = error.Description;
        res.send(output);
      });
    }
  } else if (action === 'updateCustomObjects') {
    var uid = req.body.uid ? req.body.uid : '';
    var objectName = req.body.objectName ? req.body.objectName : '';
    var objectRecordId = req.body.objectRecordId ? req.body.objectRecordId : '';
    var payload = req.body.payload ? JSON.parse(req.body.payload) : '';
    if (uid === '') {
      output.message = 'Uid is required';
    } else if (objectName === '') {
      output.message = 'Object name is required.';
    } else if (objectRecordId === '') {
      output.message = 'object Record Id is required.';
    } else if (payload === '') {
      output.message = 'Payload is required.';
    } else {
      var updateType = 'partialreplace';
      lrv2.customObjectApi.updateCustomObjectByUid(objectName, objectRecordId, payload, uid, updateType).then(function (response) {
        if (response.Uid) {
          output.message = 'Custom object updated successfully.';
          output.status = 'success';
        } else {
          output.message = 'Custom Object is not updated.';
        }
        res.send(output);
      }).catch(function (error) {
        output.message = error.Description;
        res.send(output);
      });
    }
  } else if (action === 'deleteCustomObjects') {
    var uid = req.body.uid ? req.body.uid : '';
    var objectName = req.body.objectName ? req.body.objectName : '';
    var objectRecordId = req.body.objectRecordId ? req.body.objectRecordId : '';
    if (uid === '') {
      output.message = 'Uid is required';
    } else if (objectName === '') {
      output.message = 'Object name is required.';
    } else if (objectRecordId === '') {
      output.message = 'object Record Id is required.';
    } else {
      lrv2.customObjectApi.deleteCustomObjectByRecordID(objectName, objectRecordId, uid).then(function (response) {
        if (response.IsDeleted) {
          output.message = 'Custom object deleted successfully.';
          output.status = 'success';
        } else {
          output.message = 'Custom Object not updated.';
        }
        res.send(output);
      }).catch(function (error) {
        output.message = error.Description;
        res.send(output);
      });
    }
  } else if (action === 'handleCreateRole') {
    var roles = req.body.roles ? JSON.parse(req.body.roles) : '';
    if (roles === '') {
      output.message = 'Roles field is required';
    } else {
      lrv2.roleApi.createRoles(roles).then(function (response) {
        if (response.Count) {
          output.message = 'Roles has been created.';
          output.status = 'success';
        } else {
          output.message = 'Roles not exist.';
        }
        res.send(output);
      }).catch(function (error) {
        output.message = error.Description;
        res.send(output);
      });
    }
  } else if (action === 'handleDeleteRole') {
    var roles = req.body.roles ? req.body.roles : '';
    if (roles === '') {
      output.message = 'Roles field is required';
    } else {
      lrv2.roleApi.deleteRole(roles).then(function (response) {
        if (response.IsDeleted) {
          output.message = 'Role has been deleted.';
          output.status = 'success';
        } else {
          output.message = 'Roles not remove.';
        }
        res.send(output);
      }).catch(function (error) {
        output.message = error.Description;
        res.send(output);
      });
    }
  } else if (action === 'handleAssignUserRole') {
    var uid = req.body.uid ? req.body.uid : '';
    var roles = req.body.roles ? JSON.parse(req.body.roles) : '';
    if (uid === '') {
      output.message = 'Uid field is required';
    } else if (roles === '') {
      output.message = 'Roles field is required';
    } else {
      lrv2.roleApi.assignRolesByUid(roles, uid).then(function (response) {
        if ((response.Roles) && (response.Roles !== '')) {
          output.message = 'Role assigned successfully.';
          output.status = 'success';
        }
        res.send(output);
      }).catch(function (error) {
        output.message = error.Message;
        res.send(output);
      });
    }
  } else if (action === 'getAllRoles') {
    lrv2.roleApi.getRolesList().then(function (response) {
      if (response.Count) {
        output.result = response;
        output.message = 'Role fetched';
        output.status = 'success';
      } else {
        output.message = 'Roles is empty';
      }
      res.send(output);
    }).catch(function (error) {
      output.message = error.Description;
      res.send(output);
    });
  } else if (action === 'getUserRoles') {
    var uid = req.body.uid ? req.body.uid : '';
    lrv2.roleApi.getRolesByUid(uid).then(function (response) {
      if ((response.Roles) && (response.Roles !== '')) {
        output.data = response;
        output.message = 'Role fetched';
        output.status = 'success';
      } else {
        output.message = 'user roles is empty';
      }
      res.send(output);
    }).catch(function (error) {
      output.message = error.Description;
      res.send(output);
    });
  } else if (action === 'resetMultifactor') {
    var uid = req.body.uid ? req.body.uid : '';
    lrv2.multiFactorAuthenticationApi.mfaResetGoogleAuthenticatorByUid(true, uid).then(function (response) {
      if (response.IsDeleted) {
        output.data = response;
        output.message = 'Google authenticator reset successfully.';
        output.status = 'success';
      } else {
        output.message = 'mfa not reset.';
      }
      res.send(output);
    }).catch(function (error) {
      output.message = error.Description;
      res.send(output);
    });
  }
});
app.listen(PORT, () => console.log('Demo app can be accessed at localhost:' + PORT + '/demo'));

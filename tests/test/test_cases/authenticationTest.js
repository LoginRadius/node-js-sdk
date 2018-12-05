var common = require('../common');
var lrtest = common.lrtest;
var expect = common.expect;
var variables = common.variables;

it('Token Validity( GET )', function(done){
    this.timeout(5000);
    lrtest.authentication.validity(variables.access_token).then(function(response){
  expect(response.access_token).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });


  it('Token Invalidate( GET )', function(done){
    this.timeout(5000);
    lrtest.authentication.invalidate(variables.access_token).then(function(response){
  expect(response.access_token).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });


  it('Login by Email( POST )', function(done){
    this.timeout(5000);
    lrtest.authentication.login.byEmail(variables.email,variables.password).then(function(response){
  expect(response.Profile).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });

  it('Login by Username( POST )', function(done){
    this.timeout(5000);
    lrtest.authentication.login.byUsername(variables.username,variables.password).then(function(response){
  expect(response.Profile).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });


  it(' User Registration( POST )', function(done){
    this.timeout(5000);
    lrtest.authentication.userregister(variables.formdata).then(function(response){
  expect(response.IsPosted).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });


  it('Resend Email Verification( PUT )', function(done){
    this.timeout(5000);
    lrtest.authentication.resendEmailVerification(variables.formdata).then(function(response){
  expect(response.IsPosted).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });

  it('GET Profile By Access Token( GET )', function(done){
    this.timeout(5000);
    lrtest.authentication.profile.getByToken(variables.access_token).then(function(response){
  expect(response.Uid).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });


  it('Update Profile By Access Token( PUT )', function(done){
    this.timeout(5000);
    lrtest.authentication.profile.updateByToken(variables.update_json).then(function(response){
  expect(response.IsPosted).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });

  it('Delete Account With Email Confirmation( DELETE )', function(done){
    this.timeout(5000);
    lrtest.authentication.removeAccountByEmailConfirmation(variables.access_token).then(function(response){
  expect(response.IsDeleteRequestAccepted).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });


  it('Forgot Password( POST )', function(done){
    this.timeout(5000);
    lrtest.authentication.forgotPassword(variables.email,variables.resetPasswordUrl).then(function(response){
  expect(response.IsPosted).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });


  it('Reset Password( PUT )', function(done){
    this.timeout(5000);
    lrtest.authentication.resetPassword(variables.vtoken,variables.password).then(function(response){
  expect(response.IsPosted).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });


  it('Reset Password By Security Question( PUT )', function(done){
    this.timeout(5000);
    lrtest.authentication.resetPasswordbySecurityQuestion(variables.securityanswer,variables.userid,variables.password).then(function(response){
  expect(response.IsPosted).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });


  it(' Reset Password By Security Question and email( PUT )', function(done){
    this.timeout(5000);
    lrtest.authentication.resetPasswordbyEmail(variables.securityanswer,variables.email,variables.password).then(function(response){
  expect(response.IsPosted).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });


  it('Reset Password By Security Question and username( PUT )', function(done){
    this.timeout(5000);
    lrtest.authentication.resetPasswordbyUsername(variables.securityanswer,variables.username,variables.password).then(function(response){
  expect(response.IsPosted).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });


  it('Reset Password By Security Question and phone( PUT )', function(done){
    this.timeout(5000);
    lrtest.authentication.resetPasswordbyPhone(variables.securityanswer,variables.phone,variables.password).then(function(response){
  expect(response.IsPosted).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });


  it('Update Security Question by Access_token( PUT )', function(done){
    this.timeout(5000);
    lrtest.authentication.updateSecurityQuestionByAccessToken(variables.access_token,variables.securityanswer).then(function(response){
  expect(response.Uid).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });


  it(' Change Password( PUT )', function(done){
    this.timeout(5000);
    lrtest.authentication.changePassword(variables.access_token,variables.oldpassword).then(function(response){
  expect(response.IsPosted).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });


  it('Add Email( POST )', function(done){
    this.timeout(5000);
    lrtest.authentication.addEmail(variables.access_token,variables.email,variables.type).then(function(response){
  expect(response.IsPosted).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });


  it('Remove Email( DELETE )', function(done){
    this.timeout(5000);
    lrtest.authentication.removeEmail(variables.access_token,variables.email).then(function(response){
  expect(response.IsDeleted).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });


  it('Verify Email( GET )', function(done){
    this.timeout(5000);
    lrtest.authentication.getVerifyEmail(variables.VerificationToken).then(function(response){
  expect(response.Uid).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });


  it('Check Email Availability( GET )', function(done){
    this.timeout(5000);
    lrtest.authentication.getCheckEmail(variables.email).then(function(response){
  expect(response.IsExist).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });


  it('Change Username( PUT )', function(done){
    this.timeout(5000);
    lrtest.authentication.changeUsername(variables.access_token,variables.username).then(function(response){
  expect(response.IsPosted).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });


  it('Check Username Availability( GET )', function(done){
    this.timeout(5000);
    lrtest.authentication.checkUsername(variables.username).then(function(response){
  expect(response.IsExist).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });


  it('Account Link( PUT )', function(done){
    this.timeout(5000);
    lrtest.authentication.accountLink(variables.access_token,variables.candidateToken).then(function(response){
  expect(response.IsPosted).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });


  it('Account Unlink( DELETE )', function(done){
    this.timeout(5000);
    lrtest.authentication.accountUnlink(variables.access_token,variables.provider,variables.providerid).then(function(response){
  expect(response.IsDeleted).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });


  it('Get Social Identity( GET )', function(done){
    this.timeout(5000);
    lrtest.authentication.getSocialProfile(variables.access_token).then(function(response){
  expect(response.Uid).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });


  it('Create Custom Object By Access Token( POST )', function(done){
    this.timeout(5000);
    lrtest.authentication.customObject.create(variables.access_token,variables.objectName,variables.customObjectData).then(function(response){
  expect(response.Uid).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });


  it('Update Custom Object Data( PUT )', function(done){
    this.timeout(5000);
    lrtest.authentication.customObject.update(variables.access_token,variables.objectRecordId,variables.objectName,variables.customObjectData).then(function(response){
  expect(response.Uid).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });


  it('Get Custom Object Sets By Token( GET )', function(done){
    this.timeout(5000);
    lrtest.authentication.customObject.setByToken(variables.access_token,variables.objectName).then(function(response){
  expect(response.Uid).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });


  it('Get Custom Object Set By ID( GET )', function(done){
    this.timeout(5000);
    lrtest.authentication.customObject.setByID(variables.access_token,variables.objectRecordId,variables.objectName).then(function(response){
  expect(response.Uid).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });


  it('Delete Custom Object Set( DELETE )', function(done){
    this.timeout(5000);
    lrtest.authentication.customObject.delete(variables.access_token,variables.objectRecordId,variables.objectName).then(function(response){
  expect(response.IsDeleted).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });


  it('Get 2FA by Token( GET )', function(done){
    this.timeout(5000);
    lrtest.authentication.twoFactor.ByToken(variables.access_token).then(function(response){
  expect(response.QRCode).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });


  it('Get 2FA Phone Login( GET )', function(done){
    this.timeout(5000);
    lrtest.authentication.twoFactor.phoneLogin(variables.phone,variables.password).then(function(response){
  expect(response.SecondFactorAuthentication).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });


  it('Get 2FA Email Login( GET )', function(done){
    this.timeout(5000);
    lrtest.authentication.twoFactor.emailLogin('zvdgrh@mailazy.com','123123').then(function(response){
      console.log(response);
  expect(response.SecondFactorAuthentication).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });


  it('Get 2FA Username Login( GET )', function(done){
    this.timeout(5000);
    lrtest.authentication.twoFactor.usernameLogin(variables.username,variables.password).then(function(response){
  expect(response.SecondFactorAuthentication).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });


  it('2FA Update Phone Number( PUT )', function(done){
    this.timeout(5000);
    lrtest.authentication.twoFactor.updatePhone(variables.SecondFactorAuthenticationToken,variables.phoneNo2FA).then(function(response){
  expect(response.AccountSid).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });


  it('verify the otp to enable the two-factor-authentication', function(done){
    this.timeout(5000);
    lrtest.authentication.twoFactor.verifyTwoFAOTPByToken(variables.access_token,variables.formdata).then(function(response){
  expect(response.Uid).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });


  it('verify the google authenticator code to enable two-factor-authentication', function(done){
    this.timeout(5000);
    lrtest.authentication.twoFactor.verifyTwoFAGoogleAuthCodeByToken(variables.access_token,variables.formdata).then(function(response){
  expect(response.Uid).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });


  it('validate MFA by Backup Code', function(done){
    this.timeout(5000);
    lrtest.authentication.validateMFAByBackupCode(variables.access_token,variables.backupcode).then(function(response){
  expect(response.SecondFactorValidationToken).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });


  it('validate MFA by passing the google authenticator code', function(done){
    this.timeout(5000);
    lrtest.authentication.validateMFAByGoogleAuthenticatorCode(variables.access_token,variables.googleAuthenticatorCode).then(function(response){
  expect(response.SecondFactorValidationToken).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });


  it('Multi-factor authentication by passing the One Time Password', function(done){
    this.timeout(5000);
    lrtest.authentication.validateMFAByOTP(variables.access_token,variables.formdata).then(function(response){
  expect(response.SecondFactorValidationToken).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });


  it('re-authenticate via Multi-factor-authentication by passing the password', function(done){
    this.timeout(5000);
    lrtest.authentication.validateMFAByPassword(variables.access_token,variables.formdata).then(function(response){
  expect(response.SecondFactorValidationToken).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });


  it('Multi-factor-authentication by passing the google authenticator code', function(done){
    this.timeout(5000);
    lrtest.authentication.mfaValidateGoogleAuthCode(variables.secondfactorauthenticationtoken,variables.googleAuthenticatorCode).then(function(response){
  expect(response.Identities).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });


  it('Multi-factor authentication by passing the One Time Password', function(done){
    this.timeout(5000);
    lrtest.authentication.mfaValidateOTP(variables.secondfactorauthenticationtoken,variables.formdata).then(function(response){
  expect(response.Identities).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });


  it('validate the backup code', function(done){
    this.timeout(5000);
    lrtest.authentication.mfaValidateOTP(variables.secondfactorauthenticationtoken,variables.backupcode).then(function(response){
  expect(response.Profile).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });


  it('Reset Google Authenticator and SMS Authenticator By UID', function(done){
    this.timeout(5000);
    lrtest.authentication.removeAuthByUid(variables.uid,variables.authenticator).then(function(response){
  expect(response.IsDeleted).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });

  it('Reset Google Authenticator and SMS Authenticator By Token', function(done){
    this.timeout(5000);
    lrtest.authentication.removeAuthByUid(variables.access_token,variables.authenticator).then(function(response){
  expect(response.IsDeleted).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });


  // it('Login By BackUp Code', function(done){
  //   this.timeout(5000);
  //   lrtest.authentication.backUpCode.login(variables.SecondFactorAuthenticationToken,variables.backup_code).then(function(response){
  // expect(response.IsDeleted).to.exist;
  // done();
  // }).catch(function(error){
  //    console.log(error);
  // })
  // });


  it('Get Backup code for login by access token', function(done){
    this.timeout(5000);
    lrtest.authentication.backUpCode.getByToken(variables.access_token).then(function(response){
  expect(response.BackUpCodes).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });


  it('Reset Backup code by access token', function(done){
    this.timeout(5000);
    lrtest.authentication.backUpCode.resetByToken(variables.access_token).then(function(response){
  expect(response.BackUpCodes).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });

  it('Get Backup code by UID', function(done){
    this.timeout(5000);
    lrtest.authentication.backUpCode.getByUid(variables.uid).then(function(response){
  expect(response.BackUpCodes).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });


  it('Reset Backup code by UID', function(done){
    this.timeout(5000);
    lrtest.authentication.backUpCode.resetByUid(variables.uid).then(function(response){
  expect(response.BackUpCodes).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });


  it('Smart login send email with token by Email( GET )', function(done){
    this.timeout(5000);
    lrtest.authentication.smartLogin.byEmail(variables.email,variables.clientGuid).then(function(response){
  expect(response.IsPosted).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });


  it('Smart login send email with token by UserName( GET  )', function(done){
    this.timeout(5000);
    lrtest.authentication.smartLogin.byUsername(variables.username,variables.clientGuid).then(function(response){
  expect(response.IsPosted).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });


  it('Verify Smart Login Email for Login( GET  )', function(done){
    this.timeout(5000);
    lrtest.authentication.smartLogin.verify(variables.verificationtoken).then(function(response){
  expect(response.IsPosted).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });


  it('Smart Login Ping( GET )', function(done){
    this.timeout(5000);
    lrtest.authentication.smartLogin.ping(variables.clientGuid).then(function(response){
  expect(response.Profile).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });


  it('get Server Start Time and End Time( GET )', function(done){
    this.timeout(5000);
    lrtest.authentication.getServerTime(variables.timeDifference).then(function(response){
  expect(response.ServerLocation).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });


  it('Get Security Questions By Email', function(done){
    this.timeout(5000);
    lrtest.authentication.securityQuestionByEmail(variables.email).then(function(response){
  expect(response.QuestionId).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });


  it('Get Security Questions By Username', function(done){
    this.timeout(5000);
    lrtest.authentication.securityQuestionByUsername(variables.username).then(function(response){
  expect(response.QuestionId).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });


  it('Get Security Questions By Access Token', function(done){
    this.timeout(5000);
    lrtest.authentication.securityQuestionByToken(variables.access_token).then(function(response){
  expect(response.QuestionId).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });


  it('Get Security Questions By Phone', function(done){
    this.timeout(5000);
    lrtest.authentication.securityQuestionByPhone(variables.phone).then(function(response){
  expect(response.QuestionId).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });


  it('PasswordLess Login By Email', function(done){
    this.timeout(5000);
    lrtest.authentication.passwordlessLoginByEmail(variables.email).then(function(response){
  expect(response.IsPosted).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });

  it('PasswordLess Login By Username', function(done){
    this.timeout(5000);
    lrtest.authentication.passwordlessLoginByUsername(variables.username).then(function(response){
  expect(response.IsPosted).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });


  it('PasswordLess Login Verification', function(done){
    this.timeout(5000);
    lrtest.authentication.passwordlessLoginVerify(variables.VerificationToken).then(function(response){
  expect(response.Profile).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });


  it('Pone Send One time Passcode for PasswordLess Login (GET)', function(done){
    this.timeout(5000);
    lrtest.authentication.passwordlessPhoneOTP(variables.phone).then(function(response){
  expect(response.Data).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });


  it('Phone Login Using One Time Passcode by PasswordLess Login', function(done){
    this.timeout(5000);
    lrtest.authentication.passwordlessOTPLogin(variables.formdata).then(function(response){
  expect(response.Profile).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });


  it('One Touch Login By Email Id', function(done){
    this.timeout(5000);
    lrtest.authentication.oneTouchLoginByEmail(variables.email,variables.clientguid).then(function(response){
  expect(response.IsPosted).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });

  
  it('One Touch Login By Phone', function(done){
    this.timeout(5000);
    lrtest.authentication.oneTouchLoginByPhone(variables.phone).then(function(response){
  expect(response.AccountSid).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });


  it('One Touch Login OTP Verification', function(done){
    this.timeout(5000);
    lrtest.authentication.oneTouchLoginVerifyOtp(variables.phone,variables.otp).then(function(response){
  expect(response.Profile).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });

  it('Auth Verify email by OTP', function(done){
    this.timeout(5000);
    lrtest.authentication.authVerifyEmailByOTP(variables.phone,variables.otp).then(function(response){
  expect(response.Profile).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });


  it('Auth reset Password By OTP', function(done){
    this.timeout(5000);
    lrtest.authentication.authResetPasswordByOTP(variables.password,variables.email,variables.otp).then(function(response){
  expect(response.IsPosted).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });


  it('Accept Privacy Policy (GET)', function(done){
    this.timeout(5000);
    lrtest.authentication.acceptPrivacyPolicy(variables.access_token).then(function(response){
  expect(response.Uid).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });

  
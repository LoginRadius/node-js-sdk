var common = require('../common');
var lrtest = common.lrtest;
var expect = common.expect;
var variables = common.variables;

it('Phone User Registration by SMS ( POST )', function(done){
    this.timeout(5000);
    lrtest.phoneAuthentication.register(variables.formdata).then(function(response){
  expect(response.IsPosted).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });


  it('Phone Login( POST )', function(done){
    this.timeout(5000);
    lrtest.phoneAuthentication.login(variables.phone,variables.password).then(function(response){
  expect(response.Profile).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });


  it('Phone Number Update( PUT )', function(done){
    this.timeout(5000);
    lrtest.phoneAuthentication.update(variables.phone,variables.access_token).then(function(response){
  expect(response.IsPosted).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });



  it('Phone Number Availability( GET )', function(done){
    this.timeout(5000);
    lrtest.phoneAuthentication.getPhoneAvailable(variables.phone).then(function(response){
  expect(response.IsExist).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });


  it('Phone Forgot Password by OTP( POST )', function(done){
    this.timeout(5000);
    lrtest.phoneAuthentication.forgotPassword(variables.phone).then(function(response){
  expect(response.IsPosted).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });


  it('Phone Reset Password by OTP( PUT )', function(done){
    this.timeout(5000);
    lrtest.phoneAuthentication.resetPassword(variables.phone,variables.otp,variables.password).then(function(response){
  expect(response.IsPosted).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });



  it('Phone Resend OTP( POST )', function(done){
    this.timeout(5000);
    lrtest.phoneAuthentication.otp.resend(variables.phone).then(function(response){
  expect(response.IsPosted).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });


  it('Phone Verify OTP( PUT )', function(done){
    this.timeout(5000);
    lrtest.phoneAuthentication.otp.verify(variables.phone,variables.otp).then(function(response){
  expect(response.Profile).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });


  it('Phone Verify OTP by Token( PUT )', function(done){
    this.timeout(5000);
    lrtest.phoneAuthentication.otp.verifyByToken(variables.access_token,variables.otp).then(function(response){
  expect(response.IsPosted).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });


  
  it('Remove phone ID by access token', function(done){
    this.timeout(5000);
    lrtest.phoneAuthentication.removePhoneIDbyaccesstoken(variables.access_token).then(function(response){
  expect(response.IsDeleted).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });
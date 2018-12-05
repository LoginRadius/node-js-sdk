var common = require('../common');
var lrtest = common.lrtest;
var expect = common.expect;
var variables = common.variables;

it('Get access token by uid', function(done){
    this.timeout(5000);
    lrtest.account.getByUid(variables.uid).then(function(response){
  expect(response.access_token).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });


  it('Create Account', function(done){
    this.timeout(5000);
    lrtest.account.create(variables.formdata).then(function(response){
        console.log(response);
   expect(response.Uid).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });


  it('Forgot password token', function(done){
    this.timeout(5000);
    lrtest.account.forgotPasswordToken(variables.email).then(function(response){
   expect(response.ForgotToken).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });

  it('Email Verify token', function(done){
    this.timeout(5000);
    lrtest.account.emailVerifyToken(variables.email).then(function(response){
        console.log(response);
   expect(response).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });

  it('Get profile by email id', function(done){
    this.timeout(5000);
    lrtest.account.profile.getByEmail(variables.email).then(function(response){
        console.log(response);
   expect(response.Uid).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });


  it('Get profile by username', function(done){
    this.timeout(5000);
    lrtest.account.profile.getByUsername(variables.username).then(function(response){
        console.log(response);
  expect(response.Uid).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });


  it('Get Profile by Phone', function(done){
    this.timeout(5000);
    lrtest.account.profile.getByPhone(variables.phone).then(function(response){
        console.log(response);
   expect(response.Uid).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });


  it('Get Profile by UID', function(done){
    this.timeout(5000);
    lrtest.account.profile.getByUid(variables.uid).then(function(response){
        console.log(response);
  expect(response.Uid).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });

  it(' Account Update( PUT )', function(done){
    this.timeout(5000);
    lrtest.account.update(variables.uid,variables.update_json).then(function(response){
        console.log(response);
  expect(response.Uid).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });

  it('Account Delete( DELETE )', function(done){
    this.timeout(5000);
    lrtest.account.remove(variables.uid).then(function(response){
        console.log(response);
  expect(response.IsDeleted).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });


  it('Account Set Password( PUT )', function(done){
    this.timeout(5000);
    lrtest.account.setPassword(variables.uid,variables.password).then(function(response){
        console.log(response);
  expect(response.PasswordHash).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });


  it('Account GET Password( GET )', function(done){
    this.timeout(5000);
    lrtest.account.getPassword(variables.uid).then(function(response){
        console.log(response);
  expect(response.PasswordHash).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });


  it('Account Invalidate Verification Email( PUT )', function(done){
    this.timeout(5000);
    lrtest.account.invalidateVerificationEmail(variables.uid).then(function(response){
        console.log(response);
  expect(response.IsPosted).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });


  it('Account Deleted Profile by Email( GET )', function(done){
    this.timeout(5000);
    lrtest.account.getDeletedAccountByEmail(variables.uid).then(function(response){
        console.log(response);
  expect(response.IsPosted).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });

  it('Put Assign Role( PUT )', function(done){
    this.timeout(5000);
    lrtest.account.assignRole(variables.uid,variables.roles).then(function(response){
        console.log(response);
  expect(response.Roles).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });

  it(' UnAssign Role( DELETE )', function(done){
    this.timeout(5000);
    lrtest.account.unassignRole(variables.uid,variables.roles).then(function(response){
        console.log(response);
  expect(response.IsDeleted).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });


  it(' Get Role By Uid( GET )', function(done){
    this.timeout(5000);
    lrtest.account.getRoleByUid(variables.uid).then(function(response){
        console.log(response);
  expect(response.Roles).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });

  it('Update Security Question( PUT )', function(done){
    this.timeout(5000);
    lrtest.account.updateSecurityQuestion(variables.uid,variables.security_question).then(function(response){
        console.log(response);
  expect(response.Uid).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });


  it('Reset phone ID verification or Invalidate phone( PUT )', function(done){
    this.timeout(5000);
    lrtest.account.invalidatephone(variables.uid).then(function(response){
        console.log(response);
  expect(response.IsPosted).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });


  it('Remove email ', function(done){
    this.timeout(5000);
    lrtest.account.removeEmail(variables.uid,variables.email).then(function(response){
        console.log(response);
  expect(response.Uid).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
     done();
  })
  });


  it('Account Identities By email', function(done){
    this.timeout(5000);
    lrtest.account.getIdentitiesByEmail(variables.email).then(function(response){
        console.log(response);
  expect(response.Data[0].Uid).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });
  
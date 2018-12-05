var common = require('../common');
var lrtest = common.lrtest;
var expect = common.expect;
var variables = common.variables;

it('Get Record by Type and API Secret (GET)', function(done){
    this.timeout(5000);
    lrtest.customRegistrationData.getBySecret(variables.cutomRegistrationType).then(function(response){
  expect(response.Id).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });

  it('Get Record by Type (GET)', function(done){
    this.timeout(5000);
    lrtest.customRegistrationData.get(variables.cutomRegistrationType).then(function(response){
  expect(response.Id).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });


  it('Create Registration Data( POST )', function(done){
    this.timeout(5000);
    lrtest.customRegistrationData.create(variables.formdata).then(function(response){
  expect(response.IsPosted).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });


  it('Update Record by id ( PUT )', function(done){
    this.timeout(5000);
    lrtest.customRegistrationData.update(variables.recordId,variables.formdata).then(function(response){
  expect(response.IsPosted).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });


  it('Delete Record by Id( DELETE )', function(done){
    this.timeout(5000);
    lrtest.customRegistrationData.remove(variables.recordId).then(function(response){
  expect(response.IsDeleted).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });


  it('Validate Code', function(done){
    this.timeout(5000);
    lrtest.customRegistrationData.validateCode(variables.formdata).then(function(response){
  expect(response.IsValid).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });
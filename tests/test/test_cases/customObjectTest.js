var common = require('../common');
var lrtest = common.lrtest;
var expect = common.expect;
var variables = common.variables;

it('Account Create Custom Object( POST )', function(done){
    this.timeout(5000);
    lrtest.customObject.createByUid(variables.uid,variables.objectName,variables.formdata).then(function(response){
  expect(response.Uid).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });


  it('Account Update Custom Object( PUT )', function(done){
    this.timeout(5000);
    lrtest.customObject.update(variables.uid,variables.objectRecordId,variables.objectName,variables.formdata).then(function(response){
  expect(response.Uid).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });


  it('Account Custom Object By UID( GET )', function(done){
    this.timeout(5000);
    lrtest.customObject.getByUID(variables.uid,variables.objectName).then(function(response){
  expect(response.data).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });


  it('Account Custom Object by ObjectRecordId( GET )', function(done){
    this.timeout(5000);
    lrtest.customObject.getByObjectRecordId(variables.uid,variables.objectRecordId,variables.objectName).then(function(response){
  expect(response.Uid).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });


  it('Account Delete Custom Object by ObjectRecordId( DELETE )', function(done){
    this.timeout(5000);
    lrtest.customObject.remove(variables.uid,variables.objectRecordId,variables.objectName).then(function(response){
  expect(response.IsDeleted).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });


var common = require('../common');
var lrtest = common.lrtest;
var expect = common.expect;
var variables = common.variables;

it('Create Account Role( POST )', function(done){
    this.timeout(5000);
    lrtest.role.create(variables.formdata).then(function(response){
  expect(response.data).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });


  it('Get Account Role( GET )', function(done){
    this.timeout(5000);
    lrtest.role.get().then(function(response){
  expect(response.data).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });


  it('Delete Account Role( DELETE )', function(done){
    this.timeout(5000);
    lrtest.role.remove(variables.role).then(function(response){
  expect(response.IsDeleted).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });


  it('Add Permissions To Role( PUT )', function(done){
    this.timeout(5000);
    lrtest.role.permission.add(variables.role,variables.formdata).then(function(response){
  expect(response.Name).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });


  it('Remove Account Permission( DELETE )', function(done){
    this.timeout(5000);
    lrtest.role.permission.remove(variables.role,variables.formdata).then(function(response){
  expect(response.Name).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });


  it('Get Context with Roles and Permissions( GET )', function(done){
    this.timeout(5000);
    lrtest.role.context.get(variables.uid).then(function(response){
  expect(response.Data).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });


  it('Add/Update Role Context with  Roles and Permissions( PUT )', function(done){
    this.timeout(5000);
    lrtest.role.context.add(variables.uid,variables.formdata).then(function(response){
  expect(response.Data).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });


  it('Delete Context ( Delete )', function(done){
    this.timeout(5000);
    lrtest.role.context.delete(variables.uid,variables.roleContextName).then(function(response){
  expect(response.IsDeleted).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });


  it('Delete Role from context ( Delete )', function(done){
    this.timeout(5000);
    lrtest.role.context.deleteRole(variables.uid,variables.roleContextName,variables.roleName).then(function(response){
  expect(response.IsDeleted).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });


  it(' Delete Additional Permission ( Delete )', function(done){
    this.timeout(5000);
    lrtest.role.context.deletePermission(variables.uid,variables.roleContextName,variables.additionalPermission).then(function(response){
  expect(response.IsDeleted).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });
  
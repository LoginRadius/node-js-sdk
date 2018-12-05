var common = require('../common');
var lrtest = common.lrtest;
var expect = common.expect;
var variables = common.variables;



it('Get Configuration', function(done){
    lrtest.configApi.getConfigurationList().then(function(response){
        console.log(response);
  expect(response.AppName).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });
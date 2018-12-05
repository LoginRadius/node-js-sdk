var common = require('../common');
var lrtest = common.lrtest;
var expect = common.expect;
var variables = common.variables;

it('TEST SOTT API', function(done){
    this.timeout(5000);
    lrtest.sott.then(function(response){
      //  console.log(response);
  expect(response.Sott).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });
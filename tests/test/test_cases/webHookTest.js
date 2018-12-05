var common = require('../common');
var lrtest = common.lrtest;
var expect = common.expect;
var variables = common.variables;

it('Test WebHook( GET )', function(done){
    this.timeout(5000);
    lrtest.webHook.test().then(function(response){
  expect(response.IsAllowed).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });


  it('Subscribe Web Hooks( POST )', function(done){
    this.timeout(5000);
    lrtest.webHook.subscribe(variables.target_url,variables.event).then(function(response){
  expect(response.IsPosted).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });


  it('Get Subscribed Web Hooks( GET )', function(done){
    this.timeout(5000);
    lrtest.webHook.getSubscribed(variables.event).then(function(response){
  expect(response.data).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });


  it('Unsubscribe Web Hooks( DELETE )', function(done){
    this.timeout(5000);
    lrtest.webHook.unsubscribe(variables.target_url,variables.event).then(function(response){
  expect(response.IsDeleted).to.exist;
  done();
  }).catch(function(error){
     console.log(error);
  })
  });


var expect  = require('chai').expect;
var request = require('request');
//var config = require('hello');
// var qq = require('./hello');
// var variabless = qq.qwe();
// var lrtest = require('loginradius-sdk')(variabless);
function importTest(name, path) {
    describe(name, function () {
        require(path);
    });
}


describe("NodeJS SDK Unit Testing", function () {
    beforeEach(function () {
       console.log("running something before each test");
    });
    //importTest("accesstokenTest", './test_cases/accesstokenTest');
    importTest("cloudapi", './test_cases/cloudApiTest');
  
    after(function () {
        console.log("after all tests");
    });
});
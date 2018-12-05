
var expect  = require('chai').expect;
var request = require('request');
var config = require('./config_variables');
var variables = config.qwe();
var lrtest = require('loginradius-sdk')(variables);
exports.expect = expect;
exports.request = request;
exports.lrtest = lrtest;
exports.variables = variables;

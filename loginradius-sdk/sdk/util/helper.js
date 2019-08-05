/*
 * Created by LoginRadius Development Team
   Copyright 2019 LoginRadius Inc. All rights reserved.
*/
var querystring = require('querystring');
var crypto = require('crypto');

/**
 * Define the JSON error format
 */
var jsondata = {
  'Description': 'Oops something went wrong, Please try again.',
  'ErrorCode': 1000,
  'Message': 'Oops something went wrong, Please try again.',
  'IsProviderError': false,
  'ProviderErrorResponse': null
};
/**
 * Check null or undefined
 * @param {string} as input
 * @return input is null or not
 */
var isNullOrWhiteSpace = function (input) {
  return !((input === null || typeof (input) === 'undefined') ? '' : input);
};

/**
 * Get Error response
 * @param {string} status
 * @param {json} input
 * @return json of api response
 */
var checkError = function (status, input) {
  if (status === 'serverError') {
    return (input !== '') ? input : jsondata;
  }
  return input && input.ErrorCode;
};

/**
 * Check json is correct or not
 * @param {string} input
 * @return input is json or not
 */
var checkJson = function (input) {
  return !!((input === null || input === undefined ||
    Array.isArray(input) || typeof input !== 'object'));
};

/**
 * Gererate the sott
 * @param {json} config as site config
 * @param {string} startDate as start date
 * @param {string} endDate as end date
 * @return generated sott
 */
var getSott = function (config, startDate, endDate) {
  return new Promise(function (resolve, reject) {
    var cipher = require('./sott')(config.apiSecret, config.apiKey, startDate, endDate);
    cipher.then(
      function (sott) {
        resolve(sott);
      },
      function (reason) {
        reject(reason);
      });
  });
};

/**
 * Get Validation Message
 * @param {string} type as error string
 * @return jsondata as json error object
 */
var getValidationMessage = function (type) {
  jsondata.Description = 'The API Request Paramter ' + type + ' is not Correct or WellFormated';
  return jsondata;
};

/**
 * Manage the api response
 * @param {string} status as error status
 * @param {json} data as response data
 * @param {*} resolve as promise resolve
 * @param {*} reject as promise reject
 */
var manageRequestResponse = function (status, data, resolve, reject) {
  if (checkError(status, data)) {
    reject(data);
  } else {
    resolve(data);
  }
};

/**
 * Get Query String
 * @param {object} string as json input object
 * @return qauery string
 */
var getQueryString = function (string) {
  return querystring.stringify(string, null, null, encodeURIComponent);
};

/**
 * Generate signin header
 * @param {object} options as options object
 * @param {string} apiSecret
 * @return header object
 */
var generateSigningHeader = function (options, apiSecret) {
  var SIXTY = 60;
  var SIXTYTHOUSAND = 60000;
  var TEN = 10;
  var expiryDate = new Date();
  expiryDate = new Date(expiryDate.getTime() + SIXTY * SIXTYTHOUSAND);
  var month = expiryDate.getMonth() + 1;

  expiryDate = expiryDate.getFullYear() + '-' + (month < TEN ? '0' + month : month) + '-' + (expiryDate.getDate() < TEN ? '0' + expiryDate.getDate() : expiryDate.getDate()) + ' ' + (expiryDate.getHours() < TEN ? '0' + expiryDate.getHours() : expiryDate.getHours()) + ':' + (expiryDate.getMinutes() < TEN ? '0' + expiryDate.getMinutes() : expiryDate.getMinutes()) + ':' + (expiryDate.getSeconds() < TEN ? '0' + expiryDate.getSeconds() : expiryDate.getSeconds());

  var encodeUrl = encodeURIComponent(decodeURIComponent(options.uri)).toLowerCase();

  var urlString;
  if (options.body) {
    urlString = expiryDate + ':' + encodeUrl + ':' + options.body;
  } else {
    urlString = expiryDate + ':' + encodeUrl;
  }
  var hash = crypto.createHmac('sha256', apiSecret)
    .update(urlString)
    .digest('base64');

  return {
    'X-Request-Expires': expiryDate,
    'digest': 'SHA-256=' + hash
  };
};

module.exports = {
  isNullOrWhiteSpace,
  checkError,
  getSott,
  getValidationMessage,
  checkJson,
  manageRequestResponse,
  getQueryString,
  generateSigningHeader
};

'use strict';

module.exports = function (config, sottconfig, startDate, endDate, timeDifference) {
  var helper = require(config.HELPER_PATH)();
 
  var key = !helper.isNullOrWhiteSpace(sottconfig.apiKey) ? sottconfig.apiKey : config.apiKey;
  var secret = !helper.isNullOrWhiteSpace(sottconfig.apiSecret) ? sottconfig.apiSecret : config.apiSecret;
  var time = !helper.isNullOrWhiteSpace(timeDifference) ? parseInt(timeDifference) : 10;


  var crypto = require('crypto');
  return new Promise(function (resolve, reject) {
    var tempToken = '';


    if (startDate && endDate) {
      tempToken = startDate + '#' + key + '#' + endDate;
    } else {
      var date = new Date();
      var nextMonth = date.getUTCMonth() + 1;
      tempToken =
        date.getUTCFullYear() +
        '/' +
        nextMonth +
        '/' +
        date.getUTCDate() +
        ' ' +
        date.getUTCHours() +
        ':' +
        (date.getUTCMinutes() < 10
          ? '0' + date.getUTCMinutes()
          : date.getUTCMinutes()) +
        ':' +
        (date.getUTCSeconds() < 10
          ? '0' + date.getUTCSeconds()
          : date.getUTCSeconds()) +
        '#' +
        key +
        '#';
      date.setUTCMinutes(date.getUTCMinutes() + time);
      tempToken +=
        date.getUTCFullYear() +
        '/' +
        nextMonth +
        '/' +
        date.getUTCDate() +
        ' ' +
        date.getUTCHours() +
        ':' +
        (date.getUTCMinutes() < 10
          ? '0' + date.getUTCMinutes()
          : date.getUTCMinutes()) +
        ':' +
        (date.getUTCSeconds() < 10
          ? '0' + date.getUTCSeconds()
          : date.getUTCSeconds());
    }
    encrypt(tempToken, resolve, reject);
  });

  function encrypt(plainText, resolve, reject) {
    var initVector = 'tu89geji340t89u2';
    var keySize = 256;
    var iterations = 10000;
    var keyLenNumber = 8;
    var initVectorBuffer = Buffer.from(initVector, 'utf8');
    var plainTextBuffer = Buffer.from(plainText, 'utf8');
    crypto.pbkdf2(
      secret,
      Buffer.from(new Array(keyLenNumber)),
      iterations,
      keySize / keyLenNumber,
      'sha1',
      function (err, keyBytes) {
        if (err) reject(err);
        var cipher = crypto.createCipheriv(
          'aes-256-cbc',
          keyBytes,
          initVectorBuffer
        );
        var cryptedText = cipher.update(plainTextBuffer, 'utf8', 'base64');
        cryptedText += cipher.final('base64');

        var hash = crypto.createHash('md5');
        hash.update(cryptedText, 'ascii');
        resolve(cryptedText + '*' + hash.digest().toString('hex'));
      }
    );
  }
};
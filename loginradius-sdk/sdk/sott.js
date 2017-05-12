"use strict";

module.exports = function (config, startDate, endDate, timeDifference) {

    const crypto = require('crypto');
    let date;
    var startDateTime = new Date();
    var endDateTime = new Date(endDate);
    var getServerTime = function (callBack) {
        if(( startDate) || ( endDate ) ){
            dateTime(function (date) {
                startDate = date;
            },startDateTime)
            if(!endDate || endDateTime == startDateTime){
                startDateTime.setUTCMinutes(startDateTime.getUTCMinutes() + 10);
                dateTime(function (date) {
                    endDate = date;
                },startDateTime)
            }
            else {
                dateTime(function (date) {
                    endDate = date;
                }, endDateTime )
            }
            var data = {"Sott":{"StartTime":startDate,"EndTime":endDate}}
            return callBack(data);
        }
        else {
            if (!timeDifference) {
                timeDifference = 10;
            }
            config.request({
                method: 'GET',
                uri: config.apidomain + "/identity/v2/serverinfo?timedifference=" + timeDifference+ "&apikey="+ config.apikey
            }, function (data) {
                return callBack(data);
            });
        }
    }
    
    var dateTime = function (localDate, date) {
        // date = date ? new Date(date) : new Date()
        date = date.getUTCFullYear() + "-"
        + eval(date.getUTCMonth() + 1) + "-"
        + date.getUTCDate() + " "
        + date.getUTCHours() + ":"
        + (date.getUTCMinutes() < 10 ? "0" + date.getUTCMinutes() : date.getUTCMinutes()) + ":"
        + (date.getUTCSeconds() < 10 ? "0" + date.getUTCSeconds() : date.getUTCSeconds());
        return(localDate(date))
    }

    return new Promise(
        function (resolve, reject) {

            getServerTime(function (date ) {
                var tempToken = date.Sott.StartTime + "#" + config.apikey + "#" + date.Sott.EndTime;
                encrypt(tempToken, resolve, reject);
            })
        }
    );


    function encrypt(plainText, resolve, reject) {
        const initVector = "tu89geji340t89u2";
        const keySize = 256;
        let initVectorBuffer = new Buffer(initVector, 'utf8');
        let plainTextBuffer = new Buffer(plainText, 'utf8');
        crypto.pbkdf2(config.apisecret, new Buffer(new Array(8)), 10000, keySize / 8, 'sha1', function (err, keyBytes) {
            if (err) reject(err);
            let cipher = crypto.createCipheriv('aes-256-cbc', keyBytes, initVectorBuffer);
            let cryptedText = cipher.update(plainTextBuffer, 'utf8', 'base64');
            cryptedText += cipher.final('base64');

            const hash = crypto.createHash('md5');
            hash.update(cryptedText, 'ascii');
            resolve(cryptedText.split("+").join("%2B") + "*" + (hash.digest()).toString('hex'));
        });
    }

};
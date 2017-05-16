"use strict";

module.exports = function (secret, key, startDate, endDate) {

    const crypto = require('crypto');

    return new Promise(
        function (resolve, reject) {
            if(!startDate){
                let date = new Date();
                var tempToken =
                    date.getUTCFullYear() + "/"
                    + eval(date.getUTCMonth() + 1) + "/"
                    + date.getUTCDate() + " "
                    + date.getUTCHours() + ":"
                    + (date.getUTCMinutes() < 10 ? "0" + date.getUTCMinutes() : date.getUTCMinutes()) + ":"
                    + (date.getUTCSeconds() < 10 ? "0" + date.getUTCSeconds() : date.getUTCSeconds())
                    + "#" + key + "#";

                    date.setUTCMinutes(date.getUTCMinutes() + 10);

                tempToken +=
                    date.getUTCFullYear() + "/"
                    + eval(date.getUTCMonth() + 1) + "/"
                    + date.getUTCDate() + " "
                    + date.getUTCHours() + ":"
                    + (date.getUTCMinutes() < 10 ? "0" + date.getUTCMinutes() : date.getUTCMinutes()) + ":"
                    + (date.getUTCSeconds() < 10 ? "0" + date.getUTCSeconds() : date.getUTCSeconds());
            }
            else {
                var tempToken = startDate + "#" + key + "#" + endDate;
            }
            encrypt(tempToken, resolve, reject);
        }
    );

    function encrypt(plainText, resolve, reject) {
        const initVector = "tu89geji340t89u2";
        const keySize = 256;
        let initVectorBuffer = new Buffer(initVector, 'utf8');
        let plainTextBuffer = new Buffer(plainText, 'utf8');
        crypto.pbkdf2(secret, new Buffer(new Array(8)), 10000, keySize / 8, 'sha1', function (err, keyBytes) {
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
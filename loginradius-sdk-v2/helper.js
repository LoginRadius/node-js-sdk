//Check null or undefined parameter
function checkNullOrUndefined(input) {
    return (input === null || typeof(input) === 'undefined') ? '' : input;
};

//Get Error response
function checkError(input) {
    return input && input.ErrorCode;
};

//Calculate SOTT.
function getSott(callback, config, startDate, endDate) {
    var cipher = require('./sdk/sott')(config.apisecret, config.apikey, startDate, endDate);
    cipher.then(
        function(sott) {
            // console.log(sott);
            return callback(sott);
        },
        function(reason) {
            console.log(reason);
        })
}

module.exports = {
    checkNullOrUndefined: checkNullOrUndefined,
    checkError: checkError,
    getSott: getSott
}
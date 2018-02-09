//Check null or undefined parameter
function checkNullOrUndefined(input) {
    return (input === null || typeof(input) === 'undefined') ? '' : input;
};

//Check value for null support
function checkNullSupport(input) {
    if(input)
        return true;
    else
        return false;
};

function checkFields(input, config) {
    var fields = (input === null || typeof(input) === 'undefined') ? '*' : input;
    config.fieldsParam = "&fields=";
    config.fieldsValue = fields;
}

//Get Error response
function checkError(input) {
    return input && input.ErrorCode;
};

//
function allowedReplaceType(input) {
    if(input)
        return "replace";
    else
        return "partialreplace";
};


//Calculate SOTT.
function getSott(callback, config, startDate, endDate ) {
    var cipher = require('./sdk/sott')(config.apisecret, config.apikey, startDate, endDate);
    cipher.then(
        function(sott) {
            return callback(sott);
        },
        function(reason) {
            console.log(reason);
        })
}

module.exports = {
    checkNullOrUndefined: checkNullOrUndefined,
    checkError: checkError,
    getSott: getSott,
    checkNullSupport: checkNullSupport,
    allowedReplaceType: allowedReplaceType,
    checkFields: checkFields
}
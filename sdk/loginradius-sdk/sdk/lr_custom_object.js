module.exports = function ( config ) {
    
    var module = {};

	// Custom Object Create/Update (POST)
	module.postObjectCreateUpdate = function( objectid, uid, formData ) {

		// Additional Custom json object
		config.request( { method: 'POST', uri: config.apidomain + "/raas/v1/user/customObject/upsert?appkey=" + config.apikey + "&appsecret=" + config.apisecret + "&objectid=" + objectid + "&accountid=" + uid, form: formData, headers: { 'content-type': 'application/x-www-form-urlencoded' } }, function ( data ) {
            if( data && data.errorCode ) {
                reject( data );
            } else {
                resolve( data );
            }  
        });
	}

	// Custom Object by Account ID (GET)
	module.getObjectByAccountId = function( objectid, uid  ) {

		config.request( { uri: config.apidomain + "/raas/v1/user/customObject?appkey=" + config.apikey + "&appsecret=" + config.apisecret + "&objectid=" + objectid + "&accountid=" + uid }, function ( data ) {
            if( data && data.errorCode ) {
                reject( data );
            } else {
                resolve( data );
            }   
        });
	}

	// Custom Object by Multiple Account IDs (GET)
	module.getObjectByAccountIds = function( objectid, uids  ) {

		config.request( { uri: config.apidomain + "/raas/v1/user/customObject?appkey=" + config.apikey + "&appsecret=" + config.apisecret + "&objectid=" + objectid + "&accountids=" + uids }, function ( data ) {
            if( data && data.errorCode ) {
                reject( data );
            } else {
                resolve( data );
            }   
        });
	}

	// Custom Object Check ( GET )
	module.getObjectCheck = function( objectid, uid  ) {

		config.request( { uri: config.apidomain + "/raas/v1/user/customObject/check?appkey=" + config.apikey + "&appsecret=" + config.apisecret + "&objectid=" + objectid + "&accountid=" + uid }, function ( data ) {
            if( data && data.errorCode ) {
                reject( data );
            } else {
                resolve( data );
            }   
        });
	}

    // Deprecated
	// Custom Object by Unique Object ID ( GET )
	module.getObjectByUniqueObjectId = function( objectid, uid  ) {

		config.request( { uri: config.apidomain + "/raas/v1/user/customObject?appkey=" + config.apikey + "&appsecret=" + config.apisecret + "&objectid=" + objectid }, function ( data ) {
            if( data && data.errorCode ) {
                reject( data );
            } else {
                resolve( data );
            }   
        });
	}

	// Custom Objects by Query ( GET )
	module.getObjectByQuery = function( objectid, query, cursor ) {

		config.request( { uri: config.apidomain + "/raas/v1/user/customObject?appkey=" + config.apikey + "&appsecret=" + config.apisecret + "&objectid=" + objectid + "&q=" + query + "&cursor=" + cursor }, function ( data ) {
            if( data && data.errorCode ) {
                reject( data );
            } else {
                resolve( data );
            }   
        });
	}

	// Custom Object by Object ID ( GET )
	module.getObjectByObjectId = function( objectid, cursor ) {

		config.request( { uri: config.apidomain + "/raas/v1/user/customObject?appkey=" + config.apikey + "&appsecret=" + config.apisecret + "&objectid=" + objectid + "&cursor=" + cursor }, function ( data ) {
            if( data && data.errorCode ) {
                reject( data );
            } else {
                resolve( data );
            }   
        });
	}

	// Custom Object Delete ( POST )
	module.postObjectDelete= function( objectid, uid ) {

		// Additional Custom json object
		config.request( { method: 'POST', uri: config.apidomain + "/raas/v1/user/customObject/status?appkey=" + config.apikey + "&appsecret=" + config.apisecret + "&objectid=" + objectid + "&accountid=" + uid, headers: { 'content-type': 'application/x-www-form-urlencoded' } }, function ( data ) {
            if( data && data.errorCode ) {
                reject( data );
            } else {
                resolve( data );
            }   
        });
	}

	// Custom Object Stats ( GET )
	module.getObjectStats = function( objectid ) {

		config.request( { uri: config.apidomain + "/raas/v1/user/customObject/stats?appkey=" + config.apikey + "&appsecret=" + config.apisecret + "&objectid=" + objectid }, function ( data ) {
            if( data && data.errorCode ) {
                reject( data );
            } else {
                resolve( data );
            }   
        });
	}

    return module;
};
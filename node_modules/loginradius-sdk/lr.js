var request = require( 'request' );
var _ = require( 'underscore' );

module.exports = function(config){
	config.request = function( options, callback ) {
		request( options, function ( error, response, body ) {
			if ( error ) {
				console.log( error );
			} else {
				callback( JSON.parse( body ) );
			}
	    });
	}	

	var social_login = require('./sdk/lr_social_login.js')( config );
	var raas = require('./sdk/lr_raas.js')( config );
	var custom_object = require('./sdk/lr_custom_object.js')( config );

	return _.extend( social_login, raas, custom_object );
}
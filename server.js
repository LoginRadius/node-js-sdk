/**
 * Module dependencies.
 */
var express = require('express')
  , routes = require('./routes/routes.js')
  , lr = require('LoginRadius');

var app = module.exports = express.createServer();

// Configuration

app.configure( function() {
	app.set( 'views', __dirname + '/views' );
	app.set( 'view engine', 'jade' );
	app.use( express.bodyParser() );
	app.use( express.methodOverride() );
	app.use( app.router );
	app.use( express.static( __dirname + '/public') );
});





// Routes
app.get( '/', routes.index );
app.post( '/callback', routes.callback );
app.get( '/sociallogin', routes.sociallogin );
app.get( '/userreg', routes.userreg );
app.get( '/userreg/*', routes.userreg );

app.listen( 3000, function() {
	console.log( "Express server listening on port %d in %s mode", app.address().port, app.settings.env );
});
/**
 * Module dependencies.
 */
var config = {
	apidomain: 'https://api.loginradius.com',
	apikey: '{{ Your API KEY }}',
	apisecret: '{{ Your API Secret }}',
	sitename: '{{ Your Sitename }}'
}

var express = require('express')
  , routes = require('./routes/routes.js')
  , lr = require('LoginRadius')(config);

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
app.get( '/', routes.index(config) );
app.post( '/callback', routes.callback(lr) );
app.get( '/sociallogin', routes.sociallogin(config) );
app.get( '/userreg', routes.userreg(config) );
app.get( '/userreg/*', routes.userreg(config) );

app.listen( 3000, function() {
	console.log( "Express server listening on port %d in %s mode", app.address().port, app.settings.env );
});
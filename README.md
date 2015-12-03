# LoginRadius Combined SDK for Node.js

LoginRadius Combined Node SDK features a combined SDK set to encompass Social Login, Customer Registration and Custom Object

# Getting Started

## Configuration
- Navigate to routes/index.js and find

	exports.index = function ( req, res ) {
		res.render( 'index', { title: 'LoginRadius NodeJs SDK Demo', data: '', apikey: '{{ LR API KEY }}' } );
	};
	
- Change the placeholder {{ LR API KEY }} with your own LoginRadius API Key

- Navigate to node_modules/LoginRadius/config.js
- Replace the two placeholders with your LoginRadius API Key and API Secret

## Running the Demo

run node server.js at command line

Navigate to localhost:3000 in a web browser after server started messages has been given

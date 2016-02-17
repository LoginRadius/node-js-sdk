
/*
* GET home page.
*/

//To load LoginRadius module
var lr = require('LoginRadius');
var apikey = 'f98a9ddb-5f36-47e3-9511-645c6de5bf97';

exports.index = function ( request, response ) {
	response.render( 'index', { title: 'LoginRadius NodeJs SDK Demo', data: '', apikey: apikey } );
};

//callback returns complete asynchronous user data
exports.callback = function ( request, response ) {

	if ( request.body.token != undefined && request.body.token != '' ) { 
		var data = {};

		lr.getAccessToken( request.body.token ).then( function( accesstoken ) {
			
			data.token = accesstoken.access_token;

			return lr.getUserProfile( data.token );

		}).catch( function( error ) {

			console.log( error );

		}).then( function( userprofile ){
			data.userprofile = userprofile;

			//To get user contacts
			return lr.getContacts( data.token, 0 );

		}).catch( function( error ) {

			console.log( error );

		}).then( function( contacts ) {
			data.contacts = contacts;

			//To get user albums
			return lr.getAlbums( data.token );
				
		}).catch( function( error ) {

			console.log( error );

		}).then( function( albums ) {
			data.albums = albums;
			//To get user photo
			return lr.getPhotos( data.token, albums[0].ID );

		}).catch( function( error ) {

			console.log( error );

		}).then( function( photos ) {
			data.photos = photos;
		
			//To get user check-ins
			return lr.getCheckins( data.token );

		}).catch( function( error ) {

			console.log( error );

		}).then( function( checkins ) {
			data.checkins = checkins;

			//To get user audios
			return lr.getAudios( data.token );

		}).catch( function( error ) {

			console.log( error );

		}).then( function( audios ) {	
			data.audios = audios;

			//To get user mentions
			return lr.getMentions( data.token );
				
		}).catch( function( error ) {

			console.log( error );

		}).then( function( mentions ) {	
			data.mentions = mentions;

			//To get user followings
			return lr.getFollowings( data.token );

		}).catch( function( error ) {

			console.log( error );

		}).then( function( followings ) {	
			data.followings = followings;

			//To get user events
			return lr.getEvents( data.token );

		}).catch( function( error ) {

			console.log( error );

		}).then( function( events ) {
			data.events = events;
			//To get user posts
			return lr.getPosts( data.token );

		}).catch( function( error ) {

			console.log( error );

		}).then( function( posts ) {
			data.posts = posts;

			return lr.getCompanies( data.token );

		}).catch( function( error ) {

			console.log( error );

		}).then( function( companies ) {
			data.companies = companies;

			//To get user groups
			return lr.getGroups( data.token );

		}).catch( function( error ) {

			console.log( error );

		}).then( function( groups ) {

			data.groups = groups;

			//To get user statuses
			return lr.getStatuses( data.token );

		}).catch( function( error ) {

			console.log( error );

		}).then( function( statuses ) {
			data.statuses = statuses;

			//To get user videos
			return lr.getVideos( data.token );

		}).catch( function( error ) {

			console.log( error );

		}).then( function( videos ) {
			data.videos = videos;

			//To get user likes
			return lr.getLikes( data.token );
				
		}).catch( function( error ) {

			console.log( error );

		}).then( function( likes ) {

			data.likes = likes;

			//To post status on facebook, twitter and linkedin
			return lr.postStatus( data.token, "", "", "I'm life Enjoying", "", "", "" );	
			
		}).catch( function( error ) {

			console.log( error );

		}).then( function( poststatus ) {
			
			data.isposted = poststatus && poststatus.isPosted == true ? "successfully posted!!" : "Not posted!!";

			//To send direct message on twitter and linkedin
			return lr.postMessage( data.token, "1652632832", "Hello", "How r U?" );
		}).catch( function( error ) {

			console.log( error );

		}).then( function( postmsg ) {
			
			data.issent = postmsg && postmsg.isPosted == true ? "successfully sent!!" : "Not sent!!";

			response.render('index', {
				title: 'Welcome to User Profile Data',
				data: data
			});
		});
		
	}
};

exports.sociallogin = function( request, response ) {
	response.render( 'sociallogin', { title: 'Social Login', data: '', apikey: apikey } );
};

exports.userreg = function ( request, response ) {
	response.render( 'userreg', { title: 'User Registration', url: request.url, data: '', apikey: apikey } );
};
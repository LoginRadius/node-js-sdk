/*
* GET home page.
*/

exports.index = function (config) {
	return function( request, response ) {
		response.render( 'index', { title: 'LoginRadius NodeJs SDK Demo', data: '', apikey: config.apikey } );
	}
};

//callback returns complete asynchronous user data
exports.callback = function ( config ) {
	return function( request, response ) {
		if ( request.body.token != undefined && request.body.token != '' ) { 
			var data = {};

			config.lr.getAccessToken( request.body.token ).then( function( accesstoken ) {
				
				data.token = accesstoken.access_token;

				return config.lr.getUserProfile( data.token );

			}).catch( function( error ) {

				console.log( error );

			}).then( function( userprofile ){
				data.userprofile = userprofile;

				//To get user contacts
				return config.lr.getContacts( data.token, 0 );

			}).catch( function( error ) {

				console.log( error );

			}).then( function( contacts ) {
				data.contacts = contacts;

				//To get user albums
				return config.lr.getAlbums( data.token );
					
			}).catch( function( error ) {

				console.log( error );

			}).then( function( albums ) {
				data.albums = albums;
				//To get user photo
				return config.lr.getPhotos( data.token, albums[0].ID );

			}).catch( function( error ) {

				console.log( error );

			}).then( function( photos ) {
				data.photos = photos;
			
				//To get user check-ins
				return config.lr.getCheckins( data.token );

			}).catch( function( error ) {

				console.log( error );

			}).then( function( checkins ) {
				data.checkins = checkins;

				//To get user audios
				return config.lr.getAudios( data.token );

			}).catch( function( error ) {

				console.log( error );

			}).then( function( audios ) {	
				data.audios = audios;

				//To get user mentions
				return config.lr.getMentions( data.token );
					
			}).catch( function( error ) {

				console.log( error );

			}).then( function( mentions ) {	
				data.mentions = mentions;

				//To get user followings
				return config.lr.getFollowings( data.token );

			}).catch( function( error ) {

				console.log( error );

			}).then( function( followings ) {	
				data.followings = followings;

				//To get user events
				return config.lr.getEvents( data.token );

			}).catch( function( error ) {

				console.log( error );

			}).then( function( events ) {
				data.events = events;
				//To get user posts
				return config.lr.getPosts( data.token );

			}).catch( function( error ) {

				console.log( error );

			}).then( function( posts ) {
				data.posts = posts;

				return config.lr.getCompanies( data.token );

			}).catch( function( error ) {

				console.log( error );

			}).then( function( companies ) {
				data.companies = companies;

				//To get user groups
				return config.lr.getGroups( data.token );

			}).catch( function( error ) {

				console.log( error );

			}).then( function( groups ) {

				data.groups = groups;

				//To get user statuses
				return config.lr.getStatuses( data.token );

			}).catch( function( error ) {

				console.log( error );

			}).then( function( statuses ) {
				data.statuses = statuses;

				//To get user videos
				return config.lr.getVideos( data.token );

			}).catch( function( error ) {

				console.log( error );

			}).then( function( videos ) {
				data.videos = videos;

				//To get user likes
				return config.lr.getLikes( data.token );
					
			}).catch( function( error ) {

				console.log( error );

			}).then( function( likes ) {

				data.likes = likes;

				//To post status on facebook, twitter and linkedin
				return config.lr.postStatus( data.token, "", "", "I'm life Enjoying", "", "", "" );	
				
			}).catch( function( error ) {

				console.log( error );

			}).then( function( poststatus ) {
				
				data.isposted = poststatus && poststatus.isPosted == true ? "successfully posted!!" : "Not posted!!";

				//To send direct message on twitter and linkedin
				return config.lr.postMessage( data.token, "1652632832", "Hello", "How r U?" );
			}).catch( function( error ) {

				console.log( error );

			}).then( function( postmsg ) {
				
				data.issent = postmsg && postmsg.isPosted == true ? "successfully sent!!" : "Not sent!!";

				response.render('sociallogin', {
					title: 'Welcome to Social Login User Profile Data',
					data: data
				});
			});
			
		}
	}
};

exports.sociallogin = function(config) {
	return function( request, response ) {
		response.render( 'sociallogin', { title: 'Social Login', data: '', apikey: config.apikey } );
	}
};

exports.userreg = function (config) {
	
	return function( request, response ) {

		var url = request.url;

		if ( request.body.token != undefined && request.body.token != '' ) { 
			config.lr.getUserProfile( request.body.token ).then( function( data ) {
				console.log(data);
				response.render( 'userreg', { title: 'User Registration', url: url, data: data, apikey: config.apikey, sitename: config.sitename } );
			}).catch( function( error ) {

				console.log( error );

			});
		} else {
			response.render( 'userreg', { title: 'User Registration', url: url, data: null, apikey: config.apikey, sitename: config.sitename } );
		}
		
	}
};
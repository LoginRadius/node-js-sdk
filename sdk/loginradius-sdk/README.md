# LoginRadius Combined SDK for Node.js

LoginRadius Combined Node SDK features a combined SDK set to encompass Social Login, Customer Registration and Custom Object

# Getting Started

## Configuration

- Create var config in project
	
		var config = {
			apidomain: 'https://api.loginradius.com',
			apikey: '{{ Your API KEY }}',
			apisecret: '{{ Your API Secret }}',
			sitename: '{{ Your Sitename }}'
		}

- Replace the placeholders in the config object with your LoginRadius credentials apikey, apisecret, sitename. These can be obtained from https://loginradius.com
- require the loginradius-sdk package and pass it the config object

		var lr = require('loginradius-sdk')(config);

## API Examples

### SocialLogin API

#### Access Token (GET)
https://docs.loginradius.com/api/v1/social-login/access-token
##### Example:

	lr.getAccessToken( token ).then( function( accesstoken ) {
		console.log( accesstoken );
	}).catch( function( error ) {
		console.log( error );
	});
	
#### User Profile Data (GET)
https://docs.loginradius.com/api/v1/social-login/user-profile
##### Example:

	lr.getUserProfile( accesstoken ).then( function( response ) {
		console.log( response );
	}).catch( function( error ) {
		console.log( error );
	});
	
#### Photo Albums Data (GET)
https://docs.loginradius.com/api/v1/social-login/photo
##### Example:

	lr.getAlbums( accesstoken ).then( function( response ) {
		console.log( response );
	}).catch( function( error ) {
		console.log( error );
	});
	
#### Photos Data (GET)
http://apidocs.loginradius.com/docs/photo
##### Example:

	lr.getPhotos( accesstoken, albumId ).then( function( response ) {
		console.log( response );
	}).catch( function( error ) {
		console.log( error );
	});
	
#### Checkins Data (GET)
https://docs.loginradius.com/api/v1/social-login/check-in
##### Example:

	lr.getCheckins( accesstoken ).then( function( response ) {
		console.log( response );
	}).catch( function( error ) {
		console.log( error );
	});
	
#### Audio Data (GET)
https://docs.loginradius.com/api/v1/social-login/audio
##### Example:

	lr.getAudios( accesstoken ).then( function( response ) {
		console.log( response );
	}).catch( function( error ) {
		console.log( error );
	});
	
#### Contacts Data (GET)
https://docs.loginradius.com/api/v1/social-login/contact
##### Example:

	lr.getContacts( accesstoken, 0 ).then( function( response ) {
		console.log( response );
	}).catch( function( error ) {
		console.log( error );
	});
	
#### Mentions Data (GET)
https://docs.loginradius.com/api/v1/social-login/mention
##### Example:

	lr.getMentions( accesstoken ).then( function( response ) {
		console.log( response );
	}).catch( function( error ) {
		console.log( error );
	});
	
#### Following Data (GET)
https://docs.loginradius.com/api/v1/social-login/following
##### Example:

	lr.getFollowings( accesstoken ).then( function( response ) {
		console.log( response );
	}).catch( function( error ) {
		console.log( error );
	});
	
#### Events Data (GET)
https://docs.loginradius.com/api/v1/social-login/event
##### Example:

	lr.getEvents( accesstoken ).then( function( response ) {
		console.log( response );
	}).catch( function( error ) {
		console.log( error );
	});
	
#### Posts Data (GET)
https://docs.loginradius.com/api/v1/social-login/post
##### Example:

	lr.getPosts( accesstoken ).then( function( response ) {
		console.log( response );
	}).catch( function( error ) {
		console.log( error );
	});
	
#### Followed Companies Data (GET)
https://docs.loginradius.com/api/v1/social-login/following
##### Example:

	lr.getCompanies( accesstoken ).then( function( response ) {
		console.log( response );
	}).catch( function( error ) {
		console.log( error );
	});
	
#### Groups Data (GET)
https://docs.loginradius.com/api/v1/social-login/group
##### Example:

	lr.getGroups( accesstoken ).then( function( response ) {
		console.log( response );
	}).catch( function( error ) {
		console.log( error );
	});
	
#### Status Data (GET)
https://docs.loginradius.com/api/v1/social-login/status-posting
##### Example:

	lr.getStatuses( accesstoken ).then( function( response ) {
		console.log( response );
	}).catch( function( error ) {
		console.log( error );
	});
	
#### Videos Data (GET)
https://docs.loginradius.com/api/v1/social-login/video
##### Example:

	lr.getVideos( accesstoken ).then( function( response ) {
		console.log( response );
	}).catch( function( error ) {
		console.log( error );
	});
	
#### Likes Data (GET)
https://docs.loginradius.com/api/v1/social-login/like
##### Example:

	lr.getLikes( accesstoken ).then( function( response ) {
		console.log( response );
	}).catch( function( error ) {
		console.log( error );
	});
	
#### Pages Data (GET)
https://docs.loginradius.com/api/v1/social-login/page
##### Example:

	lr.getPage( access_token, pagename ).then( function( response ) {
		console.log( response );
	}).catch( function( error ) {
		console.log( error );
	});
	
#### Status Data (POST)
https://docs.loginradius.com/api/v1/social-login/post-status-posting
##### Example:

	lr.postStatus( accesstoken, title, url, status, imageurl, caption, description ).then( function( response ) {
		console.log( response );
	}).catch( function( error ) {
		console.log( error );
	});
	
#### Send Message Data (POST)
https://docs.loginradius.com/api/v1/social-login/post-message-api
##### Example:

	lr.postMessage( accesstoken, to, subject, message ).then( function( response ) {
		console.log( response );
	}).catch( function( error ) {
		console.log( error );
	});

### User Registration API

#### User Authentication (GET)
This API is used to authenticate users and returns the profile data associated with the authenticated user.

https://docs.loginradius.com/api/v1/user-registration/user-authentication
##### Example:

	var username = "johndoe1234@mailinator.com";
	var password = "test1234";

	lr.getUserAuthentication( username, password ).then( function( response ) {
		console.log( response );
	}).catch( function( error ) {
		console.log( error );
	});

#### User Create (POST)
This API is used to create a new user on your site. This API bypasses the normal email verification process and manually creates the user for your system.
https://docs.loginradius.com/api/v1/user-registration/user-create
##### Example:

	var formData = {
		"emailid": "johndoe1234@mailinator.com",
		"password": "test1234",
		"firstname": "John",
		"lastname": "Doe",
		"gender": "Male",
		"birthdate": "01-28-1976",
		"country": "Canada",
		"city": "Edmonton",
		"state": "Alberta",
		"phonenumber": "8651234567",
		"address1": "1234 Lane NW",
		"address2": "Apt 201",
		"company": "loginradius",
		"postalcode": "T5M0H3",
		"customfields": {"CustomField":"Value"} // Define custom fields from LoginRadius dashboard
	}

	lr.postUserCreate( formData ).then( function( response ) {
		console.log( response );
	}).catch( function( error ) {
		console.log( error );
	});

#### User Create Registration Profile (POST)
This API is used to create a user using the currently logged in social provider.
https://docs.loginradius.com/api/v1/user-registration/user-create-registration-profile
##### Example:

	var formData = {
		"accountid": "{{UID}}",
		"password": "test1234",
		"emailid": "johndoe12344@mailinator.com"
	};

	lr.postUserCreateRegistrationProfile( formData ).then( function( response ) {
		console.log( response );
	}).catch( function( error ) {
		console.log( error );
	});
	
#### Delete User with Email Confirmation (GET)
This API is used to remove an user's account from LoginRadius system. For security and mis-click concerns, it will send a delete confirmation email to user's email inbox to ask user to confirm the action.
https://docs.loginradius.com/api/v1/user-registration/user-delete-with-email-confirmation
##### Example:

	var id = "{{ID}}";
	var link = "http://localhost/delete";
	var template = "Deleted";

	lr.getUserDeleteWithEmailConfirm( id, link, template ).then( function( response ) {
		console.log( response );
	}).catch( function( error ) {
		console.log( error );
	});

#### User Email Add/Remove (POST)
This API is used to add or remove a particular email from one user's account.
https://docs.loginradius.com/api/v1/user-registration/user-email-add-remove
##### Example:

	var formData = {
		"accountid": "{{UID}}",
		"action": "Add/Remove",
		"EmailId": "Email Address",
		"EmailType": "Business/Personal"
	};

	lr.postUserEmailAddRemove( formData ).then( function( response ) {
		console.log( response );
	}).catch( function( error ) {
		console.log( error );
	});

#### User Check Email Availability (GET)
This API is used to check the availability of an email from your Customer registration system.
https://docs.loginradius.com/api/v1/user-registration/user-email-availability
##### Example:

	var email = "tester@mail.com";

	lr.getUserEmailAvailability( email ).then( function( response ) {
		console.log( response );
	}).catch( function( error ) {
		console.log( error );
	});

#### Users Check Email Availability Server (GET)
This API checks for the existence of the specified email in your Cloud Storage.
https://docs.loginradius.com/api/v1/user-registration/user-email-availability-server
##### Example:

	var email = "tester@mail.com";

	lr.getUserEmailAvailabilityServer( email ).then( function( response ) {
		console.log( response );
	}).catch( function( error ) {
		console.log( error );
	});

#### User Forgot Password Token (GET)
This API generates a forgot password token so you can manually pass into the reset password page and reset some's password.
https://docs.loginradius.com/api/v1/user-registration/user-password-forgot-token
##### Example:

	var email = "tester@mail.com";

	lr.getUserPasswordForgotToken( email ).then( function( response ) {
		console.log( response );
	}).catch( function( error ) {
		console.log( error );
	});

#### User Password Reset( POST )
This API is used to reset password using vtoken.
https://docs.loginradius.com/api/v1/user-registration/account-password-reset
##### Example:

	var vtoken = '***********';
	var password = '******';
	var welcomeEmailTemplate = '';

	lr.postUserPasswordReset( vtoken, password, welcomeEmailTemplate ).then( function( response ) {
		console.log( response );
	}).catch( function( error ) {
		console.log( error );
	});


#### User Register (POST)
This API used to register user from server side, verification email will be send to provided email address
https://docs.loginradius.com/api/v1/user-registration/user-registration
##### Example:

	var formData = {
		"emailid": "testanotheruser@mailinator.com",
		"password": "test1234",
		"firstname": "Test",
		"lastname":	"User",
		"gender": "F",
		"birthdate": "mm-dd-yyyy",
		"country":	"Canada",
		"city":	"Edmonton",
		"state": "Alberta",
		"phonenumber": "7801234567",
		"address1":	"Box 1777",
		"address2": "",
		"company": "LoginRadius",
		"postalcode": "T5J1L5",
		"emailsubscription": true,
		"customfields": {"CustomField":"Value"}, // Define custom fields from LoginRadius dashboard
		"emailverificationurl":	"http://localhost/login"
	};

	lr.postUserRegistration( formData ).then( function( response ) {
		console.log( response );
	}).catch( function( error ) {
		console.log( error );
	});
	

#### User Update (POST)
This API is used to Modify/Update details of an existing user.
https://docs.loginradius.com/api/v1/user-registration/user-update
##### Example:

	var formData = {
		"userid": "94a76a7c1d374f9698e2ad7b932377ab",
		"firstname": "John",
		"lastname": "Doe",
		"gender": "F",
		"birthdate": "01-13-1921",
		"city": "",
		"state": "",
		"phonenumber": "",
		"nickname": "",
		"profilename": "",
		"website": "",
		"hometown": "",
		"industry": "",
		"relationshipstatus": "",
		"Languages": "",
		"age": "",
		"placeslived": "",
		"address1": "1234 Lane NW",
		"address2": "Apt 201",
		"company": "loginradius",
		"postalcode": "T5M0H3",
		"emailsubscription": true,
		"customfields": {"CustomField":"Value"}, // Define custom fields from LoginRadius dashboard
		"imageUrl": "",
		"thumbnailImageUrl": "",
		"timezone": "",
		"about": "",
		"webprofiles": "",
		"type": "",
		"country": "",
	};
	
	lr.postUserUpdate( formData ).then( function( response ) {
		console.log( response );
	}).catch( function( error ) {
		console.log( error );
	});


#### User Profile By User ID (GET)
This API retrieves the profile data associated with the specific user using the users unique UserID.
https://docs.loginradius.com/api/v1/user-registration/user-profile-by-id
##### Example:

	var userid = "{{ID}}";

	lr.getUserProfileById( userid ).then( function( response ) {
		console.log( response );
	}).catch( function( error ) {
		console.log( error );
	});

#### --Deprecated-- User Password  (GET)
This API returns the encrypted hashed password for the specified User. This API is officially deprecated, We encourage you to use the Account Password Get API.
##### Example:

	var userid = "{{ID}}";

	lr.getUserPassword( userid ).then( function( response ) {
		console.log( response );
	}).catch( function( error ) {
		console.log( error );
	});

#### User Profile By Access Token (GET)
The User Profile API is used to get profile data from the user’s account after authentication. The profile data will be retrieved via oAuth and OpenID protocols. The data will be normalized into LoginRadius’ standard data format.
https://docs.loginradius.com/api/v1/user-registration/user-profile-by-access-token
##### Example:

	var access_token = "{{Access Token}}";

	lr.getUserProfileByAccessToken( access_token ).then( function( response ) {
		console.log( response );
	}).catch( function( error ) {
		console.log( error );
	});

#### User Profile By Email (GET)
This API retrieves the profile data associated with the specific user using the passing in email address.
https://docs.loginradius.com/api/v1/user-registration/user-profile-by-email
##### Example:

	var email = "johndoe1234@mailinator.com";

	lr.getUserProfileByEmail( email ).then( function( response ) {
		console.log( response );
	}).catch( function( error ) {
		console.log( error );
	});

#### Resend Email Verification (GET)
This API is used to generate an email-token that can be sent out to a user in a link in order to verify their email.
https://docs.loginradius.com/api/v1/user-registration/user-verification-email-resend
##### Example:

	var email = "test@mailinator.com"; // User's email address
	var link = "http://localhost/login"; // Verification Url link address
	var template = ""; // Verification Email Template

	lr.getUserEmailVerificationResend( email, link, template ).then( function( response ) {
		console.log( response );
	}).catch( function( error ) {
		console.log( error );
	});
	
#### Token Validate (GET)
This API is used to validate access_token, check it is valid, expired or active.
https://docs.loginradius.com/api/v1/user-registration/token-validate
##### Example:

	lr.getTokenValidate( access_token ).then( function( response ) {
		console.log( response );
	}).catch( function( error ) {
		console.log( error );
	});

#### Token Invalidate (GET)
This API is used to invalidate access token, means expiring token. After this API call passed access_token no longer be active and will not accepted by LoginRadius APIs.
https://docs.loginradius.com/api/v1/user-registration/token-invalidate
##### Example:

	lr.getTokenInvalidate( access_token ).then( function( response ) {
		console.log( response );
	}).catch( function( error ) {
		console.log( error );
	});

### Account API

#### Link Account (POST)
This API is used to link a user account with a specified providers user account.
https://docs.loginradius.com/api/v1/user-registration/account-link
##### Example:

	var formData = {
		"accountid": "d644d13338424330b889193c501b77d8", //UID, the identifier for each user account
		"provider": "twitter", //A supported social provider in lower case
		"providerid": "1234567" //The ID of the social provider
	};
	
	lr.postAccountLink( formData ).then( function( response ) {
		console.log( response );
	}).catch( function( error ) {
		console.log( error );
	});

#### Unlink Account (POST)
https://docs.loginradius.com/api/v1/user-registration/account-unlink
##### Example:

	var formData = {
		"accountid": "d644d13338424330b889193c501b77d8", //UID, the identifier for each user account
		"provider": "twitter", //A supported social provider in lower case
		"providerid": "1234567" //The ID of the social provider
	};

	lr.postAccountUnlink( formData ).then( function( response ) {
		console.log( response );
	}).catch( function( error ) {
		console.log( error );
	});
	
#### Block/Unblock Account (POST)
This API is used to block or un-block a user using the users unique UserID (UID).
https://docs.loginradius.com/api/v1/user-registration/account-block-unblock
##### Example:

	var formData = {
		"accountid": "d644d13338424330b889193c501b77d8", //UID, the identifier for each user account
		"isblock": false //{Bool} true to block the account, false to unblock the account.
	};

	lr.postUserAccountBlockUnblock( formData ).then( function( response ) {
		console.log( response );
	}).catch( function( error ) {
		console.log( error );
	});

#### Account Profiles (GET)
This API is used to retrieve all of the profile data from each of the linked social provider accounts associated with the account. For ex: A user has linked facebook and google account then this api will retrieve both profile data.
https://docs.loginradius.com/api/v1/user-registration/account-profiles
##### Example:

	var uid = "d644d13338424330b889193c501b77d8";

	lr.getAccountProfiles( uid ).then( function( response ) {
		console.log( response );
	}).catch( function( error ) {
		console.log( error );
	});

#### Account Delete (GET)
Delete an account from your LoginRadius app.
https://docs.loginradius.com/api/v1/user-registration/account-delete
##### Example:

	var uid = "d644d13338424330b889193c501b77d8";

	lr.getAccountDelete( uid ).then( function( response ) {
		console.log( response );
	}).catch( function( error ) {
		console.log( error );
	});

#### Account Delete with Email Confirmation (GET)
This API is used to remove an account from LoginRadius system. For security and mis-click concerns, it will send a delete confirmation email to account email address and email inbox to ask the ​user to confirm the action.
https://docs.loginradius.com/api/v1/user-registration/account-delete-with-email-confirmation
##### Example:

	lr.getAccountDeleteWithEmailConfirm( uid, link, template ).then( function( response ) {
		console.log( response );
	}).catch( function( error ) {
		console.log( error );
	});

#### Change Account Password (POST)
This API is used to change the password field of an account, you need to know the old password before you change it.
https://docs.loginradius.com/api/v1/user-registration/account-password-change
##### Example:

	var formData = {
		"accountid": "462c90fe93af4ef3a640ac17c7bdfe60", //UID, the identifier for each user account
		"oldpassword": "old", //Old Password
		"newpassword": "new" //New Password
	};

	lr.postAccountPasswordChange( formData ).then( function( response ) {
		console.log( response );
	}).catch( function( error ) {
		console.log( error );
	});

#### Get Account Password (GET)
This API is used to get the password field of an account.
https://docs.loginradius.com/api/v1/user-registration/account-password-get
##### Example:

	var uid = "462c90fe93af4ef3a640ac17c7bdfe60";

	lr.getAccountPassword( uid ).then( function( response ) {
		console.log( response );
	}).catch( function( error ) {
		console.log( error );
	});

#### Set Account Password (POST)
This API is used to set a password for an account. It does not require to know the previous(old) password.
https://docs.loginradius.com/api/v1/user-registration/account-password-set
##### Example:

	var formData = {
		"accountid": "462c90fe93af4ef3a640ac17c7bdfe60", //UID, the identifier for each user account
		"action": "set", //Action
		"password": "test1234" //Password
	}

	lr.postAccountPasswordSet( formData ).then( function( response ) {
		console.log( response );
	}).catch( function( error ) {
		console.log( error );
	});

#### Change UserName (POST)
This API is used for changing user name by account Id.
https://docs.loginradius.com/api/v1/user-registration/account-username-change
##### Example:

	var formData = {
		"accountid": "462c90fe93af4ef3a640ac17c7bdfe60", //UID, the identifier for each user account
		"oldusername": "oldusername", //Current username
		"newusername": "newusername" //New username
	}

	lr.postAccountUsernameChange( formData ).then( function( response ) {
		console.log( response );
	}).catch( function( error ) {
		console.log( error );
	});

#### Check UserName (GET)
This API is used to check username exists or not on your site.
https://docs.loginradius.com/api/v1/user-registration/account-username-check-client-server
##### Example:

	var username = "tester";

	lr.getAccountUsernameCheck( username ).then( function( response ) {
		console.log( response );
	}).catch( function( error ) {
		console.log( error );
	});

#### Set UserName (POST)
This API is used for set user name by user Id.
https://docs.loginradius.com/api/v1/user-registration/account-username-set
##### Example:

	var formData = {
		"accountid": "462c90fe93af4ef3a640ac17c7bdfe60", //UID, the identifier for each user account
		"newusername": "newusername" //New username
	}

	lr.postAccountUsernameSet( formData ).then( function( response ) {
		console.log( response );
	}).catch( function( error ) {
		console.log( error );
	});

#### User Password Forgot Send( GET )
This API is used to trigger email for forgot password
##### Example:

	lr.getUserPasswordForgotSend( email, domain, template ).then( function( response ) {
        console.log( response );
    }).catch( function( error ) {
        console.log( error );
    });


#### Verify email link( GET )
API is used to verify email link.
##### Example:

	lr.getUserVerifyEmail( vtoken, callback ).then( function( response ) {
        console.log( response );
    }).catch( function( error ) {
        console.log( error );
    });

### Custom Object API

#### Custom Object Create/Update (POST)
This API is used to write information in JSON format to the custom object for the specified account.
https://docs.loginradius.com/api/v1/user-registration/custom-object-create
##### Example:

	var objectid = "{{Custom Object ID}}";
	var uid = "{{UID}}";
	var formData = {
		"key01": "value01",
		"key02": "value02",
		"key03": "value03",
		"key04": "value04"
	}

	lr.postObjectCreateUpdate( objectid, uid, formData ).then( function( response ) {
		console.log( response );
	}).catch( function( error ) {
		console.log( error );
	});

#### Custom Object by Account ID (GET)
This API is used to retrieve all of the custom objects by account ID (UID).
https://docs.loginradius.com/api/v1/user-registration/get-object-by-accountid
##### Example:

	var objectid = "{{Custom Object ID}}";
	var uid = "{{UID}}";
	
	lr.getObjectByAccountId( objectid, uid  ).then( function( response ) {
		console.log( response );
	}).catch( function( error ) {
		console.log( error );
	});
	
#### Custom Object by Multiple Account IDs (GET)
This API is used to retrieve all of the custom objects via a list of account IDs(UID) separated by , (Max 20).
https://docs.loginradius.com/api/v1/user-registration/custom-object-by-multiple-accountids
##### Example:

	var objectid = "{{Custom Object ID}}";
	var ids = "{{UID}},{{UID}}"; // Max 20
	
	lr.getObjectByAccountIds( objectid, uids  ).then( function( response ) {
		console.log( response );
	}).catch( function( error ) {
		console.log( error );
	});

#### Custom Object Check (GET)
This API is used to check the presence of a Custom Object for the specified account ID(UID)
https://docs.loginradius.com/api/v1/user-registration/custom-object-check
##### Example:
	
	var objectid = "{{Custom Object ID}}";
	var uid = "{{UID}}";
	
	lr.getObjectCheck( objectid, uid  ).then( function( response ) {
		console.log( response );
	}).catch( function( error ) {
		console.log( error );
	});

#### Custom Objects by Query (GET)
This API is used to retrieve all of the Custom Objects based on the specified query.
https://docs.loginradius.com/api/v1/user-registration/custom-objects-by-query
##### Example:

	var objectid = "{{Custom Object ID}}";
	var query = "{{Query}}";
	var cursor = 1;
	
	lr.getObjectByQuery( objectid, query, cursor ).then( function( response ) {
		console.log( response );
	}).catch( function( error ) {
		console.log( error );
	});

#### Custom Object by Object ID (GET)
This API is used to retrieve all of the Custom objects based on the Object ID.
https://docs.loginradius.com/api/v1/user-registration/get-object-by-objectid
##### Example:

	var objectid = "{{Custom Object ID}}";
	var cursor = 1;

	lr.getObjectByObjectId( objectid, cursor ).then( function( response ) {
		console.log( response );
	}).catch( function( error ) {
		console.log( error );
	});

#### Custom Object Delete (POST)
This API is used to remove the specified Custom Object based on the account ID(UID).
https://docs.loginradius.com/api/v1/user-registration/delete-custom-object-set
##### Example:
	
	var objectid = "{{Custom Object ID}}";
	var uid = "{{UID}}";
	var formdata = {
		"isBlock": false
	};
	
	lr.postObjectDelete( objectid, uid, formdata ).then( function( response ) {
		console.log( response );
	}).catch( function( error ) {
		console.log( error );
	});

#### Custom Object Stats (GET)
This API is used to get the current storage information for a specified Custom Object.
https://docs.loginradius.com/api/v1/user-registration/custom-object-stats
##### Example:

	var objectid = "{{Custom Object ID}}";
		
	lr.getObjectStats( objectid ).then( function( response ) {
		console.log( response );
	}).catch( function( error ) {
		console.log( error );
	});



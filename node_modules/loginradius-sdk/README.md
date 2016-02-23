# LoginRadius Combined SDK for Node.js

LoginRadius Combined Node SDK features a combined SDK set to encompass Social Login, Customer Registration and Custom Object

# Getting Started

## Configuration
- Edit server.js
- Replace the placeholders in the config object with your LoginRadius credentials
- apikey, apisecret, sitename

## Running the Demo

run node server.js at command line

Navigate to localhost:3000 in a web browser after server started messages has been given. You will see a menu which allows you to select Social Login or User Registration.

## API Examples

### SocialLogin API

#### Get Access token
http://apidocs.loginradius.com/docs/access-token

	lr.getAccessToken( token );
	
#### Get User Profile Data
http://apidocs.loginradius.com/docs/user-profile

	lr.getUserProfile( accesstoken );

#### Get photo Albums Data
http://apidocs.loginradius.com/docs/album

	lr.getAlbums( accesstoken );
	
#### Get photos Data
http://apidocs.loginradius.com/docs/photo

	lr.getPhotos( accesstoken, albumId );
	
#### Get Checkins Data
http://apidocs.loginradius.com/docs/check-in

	lr.getCheckins( accesstoken );

#### Get Audio Data
http://apidocs.loginradius.com/docs/audio

	lr.getAudios( accesstoken );
	
#### Get Contacts Data
http://apidocs.loginradius.com/docs/contact

	lr.getContacts( accesstoken, 0 );
	
#### Get Mentions Data
http://apidocs.loginradius.com/docs/mention

	lr.getMentions( accesstoken );

#### Get Following Data
http://apidocs.loginradius.com/docs/following

	lr.getFollowings( accesstoken );
	
#### Get Events Data
http://apidocs.loginradius.com/docs/event

	lr.getEvents( accesstoken );
	
#### Get Posts Data
http://apidocs.loginradius.com/docs/post

	lr.getPosts( accesstoken );
	
#### Get Followed Companies Data
http://apidocs.loginradius.com/docs/following

	lr.getCompanies( accesstoken );
	
#### Get groups Data
http://apidocs.loginradius.com/docs/group

	lr.getGroups( accesstoken );
	
#### Get status Data
http://apidocs.loginradius.com/docs/get-status-posting

	lr.getStatuses( accesstoken );
	
#### Get Videos Data
http://apidocs.loginradius.com/docs/video

	lr.getVideos( accesstoken );
	
#### Get Likes Data
http://apidocs.loginradius.com/docs/like

	lr.getLikes( accesstoken );
	
#### Get Pages Data
http://apidocs.loginradius.com/docs/page

	lr.getPage( access_token, pagename );
		
#### Post Status Data
http://apidocs.loginradius.com/docs/post-status-posting

	lr.postStatus( accesstoken, title, url, status, imageurl, caption, description );
	
#### Send Message Data
http://apidocs.loginradius.com/docs/post-message

	lr.postMessage( accesstoken, to, subject, message );


### User Registration API

#### User Authentication (GET)
This API is used to authenticate users and returns the profile data associated with the authenticated user.
http://apidocs.loginradius.com/docs/user-authentication

	lr.getUserAuthentication( username, password );

#### User Create (POST)
This API is used to create a new user on your site. This API bypasses the normal email verification process and manually creates the user for your system.
http://apidocs.loginradius.com/docs/create-user

	lr.postUserCreate( formData );

#### User Create Registration Profile (POST)
This API is used to create a user using the currently logged in social provider.
http://apidocs.loginradius.com/docs/create-user-registration-profile

	lr.postUserCreateRegistrationProfile( formData );
	
#### Delete User with Email Confirmation (GET)
This API is used to remove an user's account from LoginRadius system. For security and mis-click concerns, it will send a delete confirmation email to user's email inbox to ask user to confirm the action.
http://apidocs.loginradius.com/docs/user-delete-with-email-confirmation

	lr.getUserDeleteWithEmailConfirm( id, link, template );

#### User Email Add/Remove (POST)
This API is used to add or remove a particular email from one user's account.
http://apidocs.loginradius.com/docs/user-email-set

	lr.postUserEmailAddRemove( formData );

#### User Check Email Availability (GET)
This API is used to check the availability of an email from your Customer registration system.
http://apidocs.loginradius.com/docs/user-email-availability-server

	lr.getUserEmailAvailability( email );

#### User Forgot Password Token (GET)
This API generates a forgot password token so you can manually pass into the reset password page and reset some's password.
http://apidocs.loginradius.com/docs/user-password-forgot-token

	lr.getUserPasswordForgotToken( email );

#### User Register
This API used to register user from server side, verification email will be send to provided email address
http://apidocs.loginradius.com/docs/registration-api

	lr.postUserRegistration( formData );
	

#### User Update (POST)
This API is used to Modify/Update details of an existing user.
http://apidocs.loginradius.com/docs/update-user

	lr.postUserUpdate( formData );


#### Get User Profile By User ID
This API retrieves the profile data associated with the specific user using the users unique UserID.
http://apidocs.loginradius.com/docs/get-user-profile

	lr.getUserProfileById( userid );

#### Get User Profile By Email
This API retrieves the profile data associated with the specific user using the passing in email address.
http://apidocs.loginradius.com/docs/user-profile-by-email

	lr.getUserProfileByEmail( email );

### Account API

#### Link Account
This API is used to link a user account with a specified providers user account.
http://apidocs.loginradius.com/docs/link-user

	lr.postAccountLink( formData );

#### Unlink Account

	lr.postAccountUnlink( formData );
	
#### Block/Unblock Account
This API is used to block or un-block a user using the users unique UserID (UID).
http://apidocs.loginradius.com/docs/account-blockunblock

	lr.postUserAccountBlockUnblock( formData );

#### Get User Profiles
This API is used to retrieve all of the profile data from each of the linked social provider accounts associated with the account. For ex: A user has linked facebook and google account then this api will retrieve both profile data.
http://apidocs.loginradius.com/docs/get-user-profiles

	lr.getAccountProfiles( uid );

#### Account Delete
Delete an account from your LoginRadius app.
http://apidocs.loginradius.com/docs/account-delete

	lr.getAccountDelete( uid, callback );

#### Change Account Password
This API is used to change the password field of an account, you need to know the old password before you change it.
http://apidocs.loginradius.com/docs/account-password-change

	lr.postAccountPasswordChange( formData );

#### Get Account Password
This API is used to get the password field of an account.
http://apidocs.loginradius.com/docs/account-password-get

	lr.getAccountPassword( uid );

#### Set Account Password
This API is used to set a password for an account. It does not require to know the previous(old) password.
http://apidocs.loginradius.com/docs/account-password-set

	lr.postAccountPasswordSet( formData );

#### Change UserName
This API is used for changing user name by account Id.
http://apidocs.loginradius.com/docs/user-name-change

	lr.postAccountUsernameChange( formData );

#### Check UserName
This API is used to check username exists or not on your site.
http://apidocs.loginradius.com/docs/user-name-check-server

	lr.getAccountUsernameCheck( username );

#### Set UserName
This API is used for set user name by user Id.
http://apidocs.loginradius.com/docs/user-name-set

	lr.postAccountUsernameSet( formData );

#### Resend Email Verification
This API is used to generate an email-token that can be sent out to a user in a link in order to verify their email.
http://apidocs.loginradius.com/docs/verification-email-resend

	lr.getUserEmailVerificationResend( email, link, template );

### Custom Object API

#### Custom Object Create/Update (POST)
This API is used to write information in JSON format to the custom object for the specified account.
http://apidocs.loginradius.com/docs/save-custom-object

	lr.postObjectCreateUpdate( objectid, uid, formData );

#### Custom Object by Account ID (GET)
This API is used to retrieve all of the custom objects by account ID (UID).
http://apidocs.loginradius.com/docs/get-custom-object-by-account-id

	lr.getObjectByAccountId( objectid, uid  );
	
#### Custom Object by Multiple Account IDs (GET)
This API is used to retrieve all of the custom objects via a list of account IDs(UID) separated by , (Max 20).
http://apidocs.loginradius.com/docs/get-custom-object-by-multiple-account-ids

	lr.getObjectByAccountIds( objectid, uids  );

#### Custom Object Check (GET)
This API is used to check the presence of a Custom Object for the specified account ID(UID)
http://apidocs.loginradius.com/docs/custom-object-check

	lr.getObjectCheck( objectid, uid  );

#### Custom Objects by Query (GET)
This API is used to retrieve all of the Custom Objects based on the specified query.
http://apidocs.loginradius.com/docs/get-custom-objects-by-query

	lr.getObjectByQuery( objectid, query, cursor );

#### Custom Object by Object ID (GET)
This API is used to retrieve all of the Custom objects based on the Object ID.
http://apidocs.loginradius.com/docs/get-all-custom-object-records

	lr.getObjectByObjectId( objectid, cursor );

#### Custom Object Delete (POST)
This API is used to remove the specified Custom Object based on the account ID(UID).
http://apidocs.loginradius.com/docs/delete-custom-object

	lr.postObjectDelete( objectid, uid );

#### Custom Object Stats (GET)
This API is used to get the current storage information for a specified Custom Object.
http://apidocs.loginradius.com/docs/get-custom-object-stats

	lr.getObjectStats( objectid );



LoginRadius library for Node-JS
=====
NodeJS library for the LoginRadius API. Get social authentication, user profile data and send messages using many social network and email clients such as Facebook, Google, Twitter, Yahoo, LinkedIn, etc.
 
Note : Documentation sample code is dependent of [express][1] module for nodejs
 
Installation
----
 1. **Font-end interface:** Add social login interface code from your LoginRadius user account to your webpage.
 2. **Call-back setup:** Set-up the callback URL in your LoginRadius user account, this is the URL where user would be redirected after authentication.
 3. **Library set-up and installation:** Add the LoginRadius nodejs module   into your project and follow the instructions to implementLoginRadius nodejs module  into your callback page.

Basic Setup
------
Download [LoginRadius nodejs module][2]  and add in node_module directory of project. Add node module reference to your callback handler

**Sample code for authentication and get basic profile data**

    var lr = require('LoginRadius');


Callback handler and user profile : for getting user profile and handle successfully authentication call  [socialAuthentication][3] method it takes token, secret (as provided on manage page of LoginRadius) and one callback handler (in callback handler two arguments pass first boolean type and second JSON object)
 
	function handler(isauthenicated, userprofile){
    //use your user profile data
	}

    lr.socialAuthentication(req.body.token, secret, handler);




Advance features(for Paid customers only)
===

LoginRaidus Contacts API
-----
You can use this API to fetch contacts from users social networks/email clients - Facebook, Twitter, LinkedIn, Google, Yahoo.

> LoginRadius generates a unique session token, when user logs in with
> any of social network. The lifetime of LoginRadius token is 15 mins, get/Save this Token to call this API.

 **Get User Contacts:** Get User Contacts: for getting User Contacts call  [getUserContacts][5] method it takes token, secret (as provided on manage page of LoginRadius) and one callback  handler (in callback handler two arguments pass first boolean type and second JSON object)
 

**Nodejs**

    function handler(isauthenicated, contactlist){
    //use your user profile data
	}
	lr.getUserContacts(req.body.token, secret, handler);

This API is use to get contacts/network data for user’s social account. This API is only supported by oAuth ID providers such as Facebook, LinkedIn, Twitter, Google, Yahoo, MSN.


LoginRadius Post API
---
You can use this API to Post data to users social networks/email - Facebook, Twitter, LinkedIn, Google, Yahoo.

> LoginRadius generates a unique session token, when user logs in with
> any of social network. The lifetime of LoginRadius token is 15 mins, get/Save this Token to call this API.
 

**Update status message:** For update status message call [setStatusMessage][7] method it  takes token,  secret (as provided on manage page of LoginRadius) and one callback handler (in callback handler two arguments pass first boolean type and second JSON object)

**Nodejs**
	
	 var status = {
   	 to :'',
  	 title :'',
  	 url : '',
     imageurl : '',
     status : 'This is LoginRadius Nodejs modile testing :)',
     caption : '',
     description : ''
	};
 
	function handler(isauthenicated, statusmessage){
    //use your user profile data
 	}
    lr.setStatusMessage(req.body.token, secret, status  ,handler); 

This API is use to set status message on user wall and user friends wall.        

Get Posts 
--
You can use this API to get posts from users social network - Facebook

> LoginRadius generates a unique session token, when user logs in with
> any of social network. The lifetime of LoginRadius token is 15 mins, get/Save this Token to call this API.

**Get User Post:** for getting user timeline call  [getPosts][9] method it  takes token, secret (as provided on manage page of LoginRadius) and one callback handler (in callback handler two arguments pass first boolean type and second JSON object)

**Nodejs**


	function handler(isauthenicated, postlist){
    //use your user profile data
	}
    lr.getPosts(req.body.token, secret, handler);


 
 This API is use to get user post on user wall it works only in facebook
 
Get Twitter Mentions
--

You can use this API to get mentions from users social network - Twitter.

> LoginRadius generates a unique session token, when user logs in with
> any of social network. The lifetime of LoginRadius token is 15 mins, get/Save this Token to call this API.

**Get Twitter Mention:** For getting twitter mention call [getMentions][11] method it  takes token, secret (as provided on manage page of LoginRadius) and one callback handler (in callback handler two arguments pass first boolean type and second JSON object)
 
**Nodejs**
	
	function handler(isauthenicated, twittermentionlist){
    //use your user profile data
	}
    lr.getMentions(req.body.token, secret, handler);
 
Mention  List has detail about user mention list  it have fields for mention data  such as ID, Text,DateTime,etc. 
Facebook Groups
--
You can use this API to get groups from users social network - Facebook.

> LoginRadius generates a unique session token, when user logs in with
> any of social network. The lifetime of LoginRadius token is 15 mins, get/Save this Token to call this API.

 
**Get User groups:** For getting user Groups call [getGroups][13] method it  takes token, secret (as provided on manage page of LoginRadius) and one callback handler (in callback handler two arguments pass first boolean type and second JSON object)
 
**Nodejs**

	function handler(isauthenicated, grouplist){
    //use your user profile data
	}
    lr.getGroups(req.body.token, secret, handler);


 Groups List has detail about user groups which may be subscribed by user or it may be created by  user, it have two fields such as ID, Name etc.

Get LinkedIn follow companies
--
You can use this API to get followed companies list from users social network - LinkedIn.

> LoginRadius generates a unique session token, when user logs in with
> any of social network. The lifetime of LoginRadius token is 15 mins, get/Save this Token to call this API.

**Get Follow Company:** For getting user followed company call [getCompanies][15] method it  takes token, secret (as provided on manage page of LoginRadius) and one callback handler (in callback handler two arguments pass first boolean type and second JSON object)
 
**Nodejs**

	function handler(isauthenicated, companylist){
    //use your user profile data
	}
    lr.getCompanies(req.body.token, secret, handler);


Function is use to get user's followed companies. It return companies in List format.

Get Facebook events
--
You can use this API to get events from users social network - Facebook.

> LoginRadius generates a unique session token, when user logs in with
> any of social network. The lifetime of LoginRadius token is 15 mins, get/Save this Token to call this API.

**Get User Events :** For getting user events call [getEvents][17] method it  takes token, secret (as provided on manage page of LoginRadius) and one callback handler (in callback handler two arguments pass first boolean type and second JSON object)
 
**Nodejs**

	function handler(isauthenicated, eventlist){
    //use your user profile data
	}
    lr.getEvents(req.body.token, secret, handler);
 
Events List has detail about user event and user friends event which is linked with user  this has limited  fields such as ID, Name,StartTime, RsvpStatus,Location etc.


Get Status
---
You can use this API to get status messages from users social network - Facebook.

> LoginRadius generates a unique session token, when user logs in with
> any of social network. The lifetime of LoginRadius token is 15 mins, get/Save this Token to call this API.

**Get Status Message:** For getting Status Message call [getStatusMessages][19] method it  takes token, secret (as provided on manage page of LoginRadius) and one callback handler (in callback handler two arguments pass first boolean type and second JSON object)

**Nodejs**
 
	function handler(isauthenicated, statusmessageslist){
    //use your user profile data
	}
    lr.getStatusMessages(req.body.token, secret, handler);
 
This api returns user status message containing these fields  such as ID,ImageUrl ,Linkes etc. (see the list of all data fields below)


Get TimeLine
--
> LoginRadius generates a unique session token, when user logs in with
> any of social network. The lifetime of LoginRadius token is 15 mins, get/Save this Token to call this API.

Saved/Get Your LoginRadius Token That LoginRadius Provide You When You Login   , authenticate from LoginRadius .

**Get TimeLine:** For getting user timeline call  [getTimelineFeed][21] method it  takes token, secret (as provided on manage page of LoginRadius) and one callback handler (in callback handler two arguments pass first boolean type and second JSON object)
 
**Nodejs**

	function handler(isauthenicated, twittertimelinelist){
    //use your user profile data
	}
    lr.getTimelineFeed(req.body.token, secret, handler);

This API is use to get user timline feed it works only in twitter
 


Direct Message
--

> LoginRadius generates a unique session token, when user logs in with
> any of social network. The lifetime of LoginRadius token is 15 mins, get/Save this Token to call this API.

**Send Direct Message:** For send direct message in linkedin and twitter call   [sendDirectMessage][23] method it  takes token, secret (as provided on manage page of LoginRadius) and sendto,subject,message and one callback handler (in callback handler two arguments pass first boolean type and second JSON object)

**Nodejs** 

	function handler(isauthenicated, message){
    //use your user profile data
	}
    lr.sendDirectMessage(req.body.token,secret, sendto, subject, message, handler);
 
Send Direct Message: This API is use to send direct message to user  and user friends inbox
 
 
**Request:** Please let us know your feedback and comments. If you have any questions or need a further assistance please contact us at hello@loginradius.com.


  [1]: http://expressjs.com/
  [2]: https://github.com/LoginRadius/Node-js-SDK
  [3]: http://api.loginradius.com/nodejs/symbols/_global_.html#socialAuthentication
  [4]: http://api.loginradius.com/nodejs/symbols/_global_.html#socialAuthentication
  [5]: http://api.loginradius.com/nodejs/symbols/_global_.html#getUserContacts
  [6]: http://api.loginradius.com/nodejs/symbols/_global_.html#getUserContacts
  [7]: http://api.loginradius.com/nodejs/symbols/_global_.html#setStatusMessage
  [8]: http://api.loginradius.com/nodejs/symbols/_global_.html#setStatusMessage
  [9]: http://api.loginradius.com/nodejs/symbols/_global_.html#getPosts
  [10]: http://api.loginradius.com/nodejs/symbols/_global_.html#getPosts
  [11]: http://api.loginradius.com/nodejs/symbols/_global_.html#getMentions
  [12]: http://api.loginradius.com/nodejs/symbols/_global_.html#getMentions
  [13]: http://api.loginradius.com/nodejs/symbols/_global_.html#getGroups
  [14]: http://api.loginradius.com/nodejs/symbols/_global_.html#getGroups
  [15]: http://api.loginradius.com/nodejs/symbols/_global_.html#getCompanies
  [16]: http://api.loginradius.com/nodejs/symbols/_global_.html#getCompanies
  [17]: http://api.loginradius.com/nodejs/symbols/_global_.html#getEvents
  [18]: http://api.loginradius.com/nodejs/symbols/_global_.html#getEvents
  [19]: http://api.loginradius.com/nodejs/symbols/_global_.html#getStatusMessages
  [20]: http://api.loginradius.com/nodejs/symbols/_global_.html#getStatusMessages
  [21]: http://api.loginradius.com/nodejs/symbols/_global_.html#getTimelineFeed
  [22]: http://api.loginradius.com/nodejs/symbols/_global_.html#getTimelineFeed
  [23]: http://api.loginradius.com/nodejs/symbols/_global_.html#sendDirectMessage
  [24]: http://api.loginradius.com/nodejs/symbols/_global_.html#sendDirectMessage

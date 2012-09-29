LoginRadius's node-js SDK is used to implement Social Login on your Python website
==========

LoginRadius's node-js SDK is a development kit that lets you integrate Social Login through providers such as Facebook, Google, Twitter, and over 20 more on a Node-js website. The SDK also fetches user profile data and can be customized from your LoginRadius user account. Ex: social icon sets, login interface, provider settings, etc.

Steps to implement LoginRadius node-js SDK
===

Step 1: Download the LoginRadius SDK and add it to your web project inside node_module directory.

  a. Copy the LoginRadius SDK file to your project directory.
  
  b. Include SDK class file on your callback page.
      
      var lr = require('LoginRadius');
      
Step 2: Create LoginRadius object in your code file

  On your callback page, create a LoginRadius object using your unique LoginRadius API Secret.
      
      lr.loginradiusauth(req.body.token ,'--YOUR API SECRET---');
          
Step 3: Validate, authenticate and store data from LoginRadius: 

Validate the object using 'IsAuthenticated' variable. After successful validation, access user profile data such as ID, First Name, Last Name, Email using profile.ID, profile.FirstName, profile.LastName, etc.


Note: Few providers like Twitter, LinkedIn, etc. doesn't provide email address with User Profile data, so you need to handle these cases in your callback page.

These are the quick and easy steps to integrate Social Login on your Python website, if you have any questions or need a further assistance please contact us at hello@loginradius.com.
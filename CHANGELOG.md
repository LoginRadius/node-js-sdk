# Node SDK
-----

>LoginRadius Node JS SDK Change Log provides information regarding what has changed, more specifically what changes, improvements and bug fix has been made to the SDK. For more details please refer to the [LoginRadius API Documention](https://docs.loginradius.com/api/v2/sdk-libraries/nodejs)


=============================================================

Version 4.3.0
Released on Feb 09, 2018
<br>
- Added configuration API.
- Improved structure and naming convention
- APIKey and APISecret will pass in header in all management APIs
- Splitted Reset Password by Security Answer into three APIs(by email, phone and username)

=============================================================

Version 4.2.0

Released on August 31, 2017
<br>
- Added No Registration by phone and email APIs.
- Added Invalidate Phone number APIs.
- Added create, retrieve, update and delete Custom Registration Data APIs.
- Added retrive Security Question APIs.
- Added server side API to generate SOTT.
- Added Auto Login by Phone and Username.
- Added email verify Auto Login API.
- Allows you to set proxy configurations, if you want to setup Http Server Proxy Configuration through your NodeJs SDK.
- Enhanced Reset password APIs by adding an parater ResetPasswordEmailTemplate to Send Email or SMS on password reset.
- Enhanced all APIs with projection of fields which allows to select fields that you require as an API response.
- Enhanced Custom Object Update API by adding an extra parater isAllowedReplace.
- Enhanced Account profile Update API by adding an extra parater nullSupport.
- Enhanced Login APIs by adding and extra parameter securityanswer.

See the documentation [here](https://docs.loginradius.com/api/v2/sdk-libraries/nodejs)

=============================================================
Version 4.1.1

Released on May 16, 2017
<br>
- Improved code

See the documentation [here](https://docs.loginradius.com/api/v2/sdk-libraries/nodejs)
=============================================================
Version 4.1.0

Released on May 12, 2017
<br>
- Add start and end time for SOTT to validate it for long time frame.
- Add API to get server time for SOTT if don't pass the start and end time.
- Improved SOTT feature.
- Add Email prompt auto login API.
- Add Email prompt auto login Ping API
- Add Role Context and additional permission API

See the documentation [here](https://docs.loginradius.com/api/v2/sdk-libraries/nodejs)

=============================================================

Version 4.0.0

Released on April 14, 2017

Enhancements

Updated with V2 APIs
- Added new multiple APIs for better user experience.
- Improved structure and naming convention
- Improved security feature
- Added Phone Authentication APIs to handle phone login,registration and verification etc.
- Added APIs for two factore authentication
- Added Rest hook APIs
- Added web hook APIs
<br>
See the documentation [here](https://docs.loginradius.com/api/v2/sdk-libraries/nodejs)

=============================================================

### v3.2.1 (2017-04-04)
=============================================================
- Added Password reset API
- Improved code
<br>
See the documentation [here](https://docs.loginradius.com/api/v1/sdk-libraries/nodejs)


### v3.1.1 (2016-10-08)
=============================================================
- Added User Verify Email API
- Added Get Session API
- Added User Password forgot API
<br>
See the documentation [here](https://docs.loginradius.com/api/v1/sdk-libraries/nodejs)


### v3.0.6 (2016-05-12)
=============================================================
- Improved documentation (Added more examples of endpoint usage)
- Improved parameter names to match apidocs
- updated SDK to include all new endpoints at time of release
<br>
See the documentation [here](https://docs.loginradius.com/api/v1/sdk-libraries/nodejs)
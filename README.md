# Node-js-sdk-v2

Customer Identity public repo for Node.js V2 SDK, based on LoginRadius V2 APIs.

![Home Image](http://docs.lrcontent.com/resources/github/banner-1544x500.png)

## Introduction

LoginRadius Node.js Customer Registration wrapper provides access to LoginRadius Identity Management Platform API.

LoginRadius is an Identity Management Platform that simplifies user registration while securing data. LoginRadius Platform simplifies and secures your user registration process, increases conversion with Social Login that combines 30 major social platforms, and offers a full solution with Traditional User Registration. You can gather a wealth of user profile data from Social Login or Traditional User Registration.

LoginRadius centralizes it all in one place, making it easy to manage and access. Easily integrate LoginRadius with all of your third-party applications, like MailChimp, Google Analytics, Livefyre and many more, making it easy to utilize the data you are capturing.

LoginRadius helps businesses boost user engagement on their web/mobile platform, manage online identities, utilize social media for marketing, capture accurate consumer data, and get unique social insight into their customer base.

Please visit [here](http://www.loginradius.com/) for more information.

# Installing

```bash
$ npm install loginradius-sdk
```

# Documentation

##### **Disclaimer**<br>
> This library is meant to help you with a quick implementation of the LoginRadius platform and also to serve as a reference point for the LoginRadius API. Keep in mind that it is an open source library, which means you are free to download and customize the library functions based on your specific application needs.

LoginRadius Combined Node SDK features a combined SDK set to encompass Social Login, User Registration, and Custom Object.

## Getting Started

This document contains information and examples regarding the LoginRadius Node.js SDK. It provides guidance for working with social authentication, user profile data, and sending messages with a variety of social networks such as Facebook, Google, Twitter, Yahoo, LinkedIn, and more.
You can get the SDK from [here](http://github.com/LoginRadius/node-js-sdk)

**Note**: The latest version(11.0.0) of Node js SDK works with LoginRadius V2 APIs.

Installation <br/>
run `npm install loginradius-sdk` <br/>
Configuration <br/>
Create `const config` in project

```js
const config = {
  apiDomain: 'api.loginradius.com',
  apiKey: '{{ Your API KEY }}',
  apiSecret: '{{ Your API Secret }}',
  siteName: '{{ Your Sitename }}',
  apiRequestSigning: false,
  proxy: {
    host: '',
    port: '',
    user: '',
    password: '',
  },
};
```

Replace the placeholders in the config object with your LoginRadius credentials apikey, apisecret, sitename. These can be obtained from [here](https://www.loginradius.com/docs/api/v2/admin-console/platform-security/api-key-and-secret)

Pass the proxy configurations if you want to set Http Server Proxy Configuration through your NodeJs SDK. Host and port are required to set Http Server Proxy configuration (username and password are optional).

Require the loginradius-sdk package and pass the `config` object

```js
const lrv2 = require('loginradius-sdk')(config);
```
### API Documentation
- [Account API](AccountAPI.md)
- [Authentication API](AuthenticationAPI.md)
- [Configuration API](ConfigurationAPI.md)
- [ConsentManagement API](ConsentManagementAPI.md)
- [CustomObject API](CustomObjectAPI.md)
- [CustomRegistrationData API](CustomRegistrationDataAPI.md)
- [MultiFactorAuthentication API](MultiFactorAuthenticationAPI.md)
- [NativeSocial API](NativeSocialAPI.md)
- [OneTouchLogin API](OneTouchLoginAPI.md)
- [PasswordLessLogin API](PasswordLessLoginAPI.md)
- [PhoneAuthentication API](PhoneAuthenticationAPI.md)
- [PINAuthentication API](PINAuthenticationAPI.md)
- [ReAuthentication API](ReAuthenticationAPI.md)
- [RiskBasedAuthentication API](RiskBasedAuthenticationAPI.md)
- [Role API](RoleAPI.md)
- [SmartLogin API](SmartLoginAPI.md)
- [Social API](SocialAPI.md)
- [Sott API](SottAPI.md)
- [Webhook API](WebhookAPI.md)

## Demo <br/>

We have a demo web application using the Node SDK, which includes the following features:

- Traditional email login
- Multi-Factor login
- Passwordless login
- Social login
- Register
- Email verification
- Forgot password
- Reset password
- Change password
- Set password
- Update account
- Account linking
- Custom object management
- Roles management <br/>

You can get a copy of our demo project at [Github](http://github.com/LoginRadius/node-js-sdk).

### Demo Configuration

Terminal/Command Line:

1. Install Node.Js here . Ensure `npm --version` and `node --version` runs properly
2. Navigate to the demo directory, and run: `npm install`
3. Set your LoginRadius credentials on the client and server side:
   - Client side: `demo/demo/assets/js/options.js`
   - Server side (note: do not set credentials as consts i.e. with quotes): `demo/server.js`
4. Navigate to the demo directory, and run: node server.js
5. Demo will appear on http://localhost:3000

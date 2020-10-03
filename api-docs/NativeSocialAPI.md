## NativeSocial API

<details>
    <summary>GET: Access Token via Facebook Token</summary>

The API is used to get LoginRadius access token by sending Facebook's access token. It will be valid for the specific duration of time specified in the response. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/native-social-login-api/access-token-via-facebook-token)

```js
let fbAccessToken = '<fbAccessToken>'; //Required
let socialAppName = '<socialAppName>'; //Optional

lrv2.nativeSocialApi
  .getAccessTokenByFacebookAccessToken(fbAccessToken, socialAppName)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Access Token via Twitter Token</summary>
 
The API is used to get LoginRadius access token by sending Twitter's access token. It will be valid for the specific duration of time specified in the response. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/native-social-login-api/access-token-via-twitter-token)

```js
let twAccessToken = '<twAccessToken>'; //Required
let twTokenSecret = '<twTokenSecret>'; //Required
let socialAppName = '<socialAppName>'; //Optional

lrv2.nativeSocialApi
  .getAccessTokenByTwitterAccessToken(
    twAccessToken,
    twTokenSecret,
    socialAppName
  )
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Access Token via Google Token</summary>

The API is used to get LoginRadius access token by sending Google's access token. It will be valid for the specific duration of time specified in the response. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/native-social-login-api/access-token-via-google-token)

```js
let googleAccessToken = '<googleAccessToken>'; //Required
let clientId = '<clientId>'; //Optional
let refreshToken = '<refreshToken>'; //Optional
let socialAppName = '<socialAppName>'; //Optional

lrv2.nativeSocialApi
  .getAccessTokenByGoogleAccessToken(
    googleAccessToken,
    clientId,
    refreshToken,
    socialAppName
  )
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Access Token using google JWT token for Native Mobile Login</summary>

This API is used to Get LoginRadius Access Token using google jwt id token for google native mobile login/registration. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/native-social-login-api/access-token-via-googlejwt)

```js
let idToken = '<idToken>'; //Required

lrv2.nativeSocialApi
  .getAccessTokenByGoogleJWTAccessToken(idToken)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Access Token via Linkedin Token</summary>

The API is used to get LoginRadius access token by sending Linkedin's access token. It will be valid for the specific duration of time specified in the response. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/native-social-login-api/access-token-via-linkedin-token/)

```js
let lnAccessToken = '<lnAccessToken>'; //Required
let socialAppName = '<socialAppName>'; //Optional

lrv2.nativeSocialApi
  .getAccessTokenByLinkedinAccessToken(lnAccessToken, socialAppName)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Get Access Token By Foursquare Access Token</summary>

The API is used to get LoginRadius access token by sending Foursquare's access token. It will be valid for the specific duration of time specified in the response. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/native-social-login-api/access-token-via-foursquare-token/)

```js
let fsAccessToken = '<fsAccessToken>'; //Required

lrv2.nativeSocialApi
  .getAccessTokenByFoursquareAccessToken(fsAccessToken)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Access Token via Apple Id Code</summary>

The API is used to get LoginRadius access token by sending a valid Apple ID OAuth Code. It will be valid for the specific duration of time specified in the response. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/native-social-login-api/access-token-via-apple-id-code)

```js
let code = '<code>'; //Required
let socialAppName = '<socialAppName>'; //Optional

lrv2.nativeSocialApi
  .getAccessTokenByAppleIdCode(code, socialAppName)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Access Token via WeChat Code</summary>

This API is used to retrieve a LoginRadius access token by passing in a valid WeChat OAuth Code. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/native-social-login-api/access-token-via-wechat-code)

```js
let code = '<code>'; //Required

lrv2.nativeSocialApi
  .getAccessTokenByWeChatCode(code)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Access Token via Vkontakte Code</summary>
 
The API is used to get LoginRadius access token by sending Vkontakte's access token. It will be valid for the specific duration of time specified in the response. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/native-social-login-api/access-token-via-vkontakte-token)

```js
let vkAccessToken = '<vkAccessToken>'; //Required

lrv2.nativeSocialApi
  .getAccessTokenByVkontakteAccessToken(vkAccessToken)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Access Token via Google AuthCode</summary>
 
The API is used to get LoginRadius access token by sending Google's AuthCode. It will be valid for the specific duration of time specified in the response. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/native-social-login-api/access-token-via-google-auth-code)

```js
let googleAuthcode = '<googleAuthcode>'; //Required
let socialAppName = '<socialAppName>'; //Optional

lrv2.nativeSocialApi
  .getAccessTokenByGoogleAuthCode(googleAuthcode, socialAppName)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

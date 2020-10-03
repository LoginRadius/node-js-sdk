## SmartLogin API

<details>
    <summary>GET: Smart Login Verify Token</summary>

This API verifies the provided token for Smart Login. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/smart-login/smart-login-verify-token/)

```js
let verificationToken = '<verificationToken>'; //Required
let welcomeEmailTemplate = '<welcomeEmailTemplate>'; //Optional

lrv2.smartLoginApi
  .smartLoginTokenVerification(verificationToken, welcomeEmailTemplate)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Smart Login By Email</summary>

This API sends a Smart Login link to the user's Email Id. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/smart-login/smart-login-by-email)

```js
let clientGuid = '<clientGuid>'; //Required
let email = '<email>'; //Required
let redirectUrl = '<redirectUrl>'; //Optional
let smartLoginEmailTemplate = '<smartLoginEmailTemplate>'; //Optional
let welcomeEmailTemplate = '<welcomeEmailTemplate>'; //Optional

lrv2.smartLoginApi
  .smartLoginByEmail(
    clientGuid,
    email,
    redirectUrl,
    smartLoginEmailTemplate,
    welcomeEmailTemplate
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
    <summary>GET: Smart Login By Username</summary>

This API sends a Smart Login link to the user's Email Id. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/smart-login/smart-login-by-username)

```js
let clientGuid = '<clientGuid>'; //Required
let username = '<username>'; //Required
let redirectUrl = '<redirectUrl>'; //Optional
let smartLoginEmailTemplate = '<smartLoginEmailTemplate>'; //Optional
let welcomeEmailTemplate = '<welcomeEmailTemplate>'; //Optional

lrv2.smartLoginApi
  .smartLoginByUserName(
    clientGuid,
    username,
    redirectUrl,
    smartLoginEmailTemplate,
    welcomeEmailTemplate
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
    <summary>GET: Smart Login Ping</summary>

This API is used to check if the Smart Login link has been clicked or not. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/smart-login/smart-login-ping)

```js
let clientGuid = '<clientGuid>'; //Required
let fields = null; //Optional

lrv2.smartLoginApi
  .smartLoginPing(clientGuid, fields)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

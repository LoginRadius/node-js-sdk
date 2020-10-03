## RiskBasedAuthentication API

<details>
    <summary>POST: Risk Based Authentication Login by Email</summary>

This API retrieves a copy of the user data based on the Email [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/auth-login-by-email)

```js
let emailAuthenticationModel = {
  email: '<email>',
  password: '<password>',
}; //Required
let emailTemplate = '<emailTemplate>'; //Optional
let fields = null; //Optional
let loginUrl = '<loginUrl>'; //Optional
let passwordDelegation = true; //Optional
let passwordDelegationApp = '<passwordDelegationApp>'; //Optional
let rbaBrowserEmailTemplate = '<rbaBrowserEmailTemplate>'; //Optional
let rbaBrowserSmsTemplate = '<rbaBrowserSmsTemplate>'; //Optional
let rbaCityEmailTemplate = '<rbaCityEmailTemplate>'; //Optional
let rbaCitySmsTemplate = '<rbaCitySmsTemplate>'; //Optional
let rbaCountryEmailTemplate = '<rbaCountryEmailTemplate>'; //Optional
let rbaCountrySmsTemplate = '<rbaCountrySmsTemplate>'; //Optional
let rbaIpEmailTemplate = '<rbaIpEmailTemplate>'; //Optional
let rbaIpSmsTemplate = '<rbaIpSmsTemplate>'; //Optional
let rbaOneclickEmailTemplate = '<rbaOneclickEmailTemplate>'; //Optional
let rbaOTPSmsTemplate = '<rbaOTPSmsTemplate>'; //Optional
let smsTemplate = '<smsTemplate>'; //Optional
let verificationUrl = '<verificationUrl>'; //Optional

lrv2.riskBasedAuthenticationApi
  .rbaLoginByEmail(
    emailAuthenticationModel,
    emailTemplate,
    fields,
    loginUrl,
    passwordDelegation,
    passwordDelegationApp,
    rbaBrowserEmailTemplate,
    rbaBrowserSmsTemplate,
    rbaCityEmailTemplate,
    rbaCitySmsTemplate,
    rbaCountryEmailTemplate,
    rbaCountrySmsTemplate,
    rbaIpEmailTemplate,
    rbaIpSmsTemplate,
    rbaOneclickEmailTemplate,
    rbaOTPSmsTemplate,
    smsTemplate,
    verificationUrl
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
    <summary>POST: Risk Based Authentication Login by Username</summary>

This API retrieves a copy of the user data based on the Username [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/auth-login-by-username)

```js
let userNameAuthenticationModel = {
  password: '<password>',
  username: '<username>',
}; //Required
let emailTemplate = '<emailTemplate>'; //Optional
let fields = null; //Optional
let loginUrl = '<loginUrl>'; //Optional
let passwordDelegation = true; //Optional
let passwordDelegationApp = '<passwordDelegationApp>'; //Optional
let rbaBrowserEmailTemplate = '<rbaBrowserEmailTemplate>'; //Optional
let rbaBrowserSmsTemplate = '<rbaBrowserSmsTemplate>'; //Optional
let rbaCityEmailTemplate = '<rbaCityEmailTemplate>'; //Optional
let rbaCitySmsTemplate = '<rbaCitySmsTemplate>'; //Optional
let rbaCountryEmailTemplate = '<rbaCountryEmailTemplate>'; //Optional
let rbaCountrySmsTemplate = '<rbaCountrySmsTemplate>'; //Optional
let rbaIpEmailTemplate = '<rbaIpEmailTemplate>'; //Optional
let rbaIpSmsTemplate = '<rbaIpSmsTemplate>'; //Optional
let rbaOneclickEmailTemplate = '<rbaOneclickEmailTemplate>'; //Optional
let rbaOTPSmsTemplate = '<rbaOTPSmsTemplate>'; //Optional
let smsTemplate = '<smsTemplate>'; //Optional
let verificationUrl = '<verificationUrl>'; //Optional

lrv2.riskBasedAuthenticationApi
  .rbaLoginByUserName(
    userNameAuthenticationModel,
    emailTemplate,
    fields,
    loginUrl,
    passwordDelegation,
    passwordDelegationApp,
    rbaBrowserEmailTemplate,
    rbaBrowserSmsTemplate,
    rbaCityEmailTemplate,
    rbaCitySmsTemplate,
    rbaCountryEmailTemplate,
    rbaCountrySmsTemplate,
    rbaIpEmailTemplate,
    rbaIpSmsTemplate,
    rbaOneclickEmailTemplate,
    rbaOTPSmsTemplate,
    smsTemplate,
    verificationUrl
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
    <summary>POST: Risk Based Authentication Phone Login</summary>

This API retrieves a copy of the user data based on the Phone. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/phone-authentication/phone-login)

```js
let phoneAuthenticationModel = {
  password: '<password>',
  phone: '<phone>',
}; //Required
let emailTemplate = '<emailTemplate>'; //Optional
let fields = null; //Optional
let loginUrl = '<loginUrl>'; //Optional
let passwordDelegation = true; //Optional
let passwordDelegationApp = '<passwordDelegationApp>'; //Optional
let rbaBrowserEmailTemplate = '<rbaBrowserEmailTemplate>'; //Optional
let rbaBrowserSmsTemplate = '<rbaBrowserSmsTemplate>'; //Optional
let rbaCityEmailTemplate = '<rbaCityEmailTemplate>'; //Optional
let rbaCitySmsTemplate = '<rbaCitySmsTemplate>'; //Optional
let rbaCountryEmailTemplate = '<rbaCountryEmailTemplate>'; //Optional
let rbaCountrySmsTemplate = '<rbaCountrySmsTemplate>'; //Optional
let rbaIpEmailTemplate = '<rbaIpEmailTemplate>'; //Optional
let rbaIpSmsTemplate = '<rbaIpSmsTemplate>'; //Optional
let rbaOneclickEmailTemplate = '<rbaOneclickEmailTemplate>'; //Optional
let rbaOTPSmsTemplate = '<rbaOTPSmsTemplate>'; //Optional
let smsTemplate = '<smsTemplate>'; //Optional
let verificationUrl = '<verificationUrl>'; //Optional

lrv2.riskBasedAuthenticationApi
  .rbaLoginByPhone(
    phoneAuthenticationModel,
    emailTemplate,
    fields,
    loginUrl,
    passwordDelegation,
    passwordDelegationApp,
    rbaBrowserEmailTemplate,
    rbaBrowserSmsTemplate,
    rbaCityEmailTemplate,
    rbaCitySmsTemplate,
    rbaCountryEmailTemplate,
    rbaCountrySmsTemplate,
    rbaIpEmailTemplate,
    rbaIpSmsTemplate,
    rbaOneclickEmailTemplate,
    rbaOTPSmsTemplate,
    smsTemplate,
    verificationUrl
  )
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

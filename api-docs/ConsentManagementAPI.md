## ConsentManagement API

<details>
    <summary>PUT: Update Consent By Access Token</summary>

This API is to update consents using access token. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/consent-management/update-consent-by-access-token/)

```js
let accessToken = '<accessToken>'; //Required

let consentUpdateModel = {
  consents: [
    {
      consentOptionId: '<consentOptionId>',
      isAccepted: true,
    },
  ],
}; //Required

lrv2.consentManagementApi
  .updateConsentProfileByAccessToken(accessToken, consentUpdateModel)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>POST: Consent By ConsentToken</summary>

This API is to submit consent form using consent token. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/consent-management/consent-by-consent-token/)

```js
let consentToken = '<consentToken>'; //Required

let consentSubmitModel = {
  data: [
    {
      consentOptionId: '<consentOptionId>',
      isAccepted: true,
    },
  ],
  events: [
    {
      event: '<event>',
      isCustom: true,
    },
  ],
}; //Required

lrv2.consentManagementApi
  .submitConsentByConsentToken(consentToken, consentSubmitModel)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>POST: Post Consent By Access Token</summary>

API to provide a way to end user to submit a consent form for particular event type. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/consent-management/consent-by-access-token/)

```js
let accessToken = '<accessToken>'; //Required

let consentSubmitModel = {
  data: [
    {
      consentOptionId: '<consentOptionId>',
      isAccepted: true,
    },
  ],
  events: [
    {
      event: '<event>',
      isCustom: true,
    },
  ],
}; //Required

lrv2.consentManagementApi
  .submitConsentByAccessToken(accessToken, consentSubmitModel)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Get Consent Logs By Uid</summary>

This API is used to get the Consent logs of the user. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/consent-management/consent-log-by-uid/)

```js
let uid = '<uid>'; //Required

lrv2.consentManagementApi
  .getConsentLogsByUid(uid)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Get Consent Log by Access Token</summary>

This API is used to fetch consent logs. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/consent-management/consent-log-by-access-token/)

```js
let accessToken = '<accessToken>'; //Required

lrv2.consentManagementApi
  .getConsentLogs(accessToken)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Get Verify Consent By Access Token</summary>

This API is used to check if consent is submitted for a particular event or not. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/consent-management/verify-consent-by-access-token/)

```js
let accessToken = '<accessToken>'; //Required
let event = '<event>'; //Required
let isCustom = true; //Required

lrv2.consentManagementApi
  .verifyConsentByAccessToken(accessToken, event, isCustom)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

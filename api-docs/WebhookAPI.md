## WebHook API

<details>
    <summary>POST: Webhook Subscribe</summary>

API can be used to configure a WebHook on your LoginRadius site. Webhooks also work on subscribe and notification model, subscribe your hook and get a notification. Equivalent to RESThook but these provide security on basis of signature and RESThook work on unique URL. Following are the events that are allowed by LoginRadius to trigger a WebHook service call. [More Info](https://www.loginradius.com/docs/api/v2/integrations/webhooks/webhook-subscribe)

```js
let webHookSubscribeModel = {
  event: '<event>',
  targetUrl: '<targetUrl>',
}; //Required

lrv2.webHookApi
  .webHookSubscribe(webHookSubscribeModel)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Webhook Subscribed URLs</summary>

This API is used to fatch all the subscribed URLs, for particular event [More Info](https://www.loginradius.com/docs/api/v2/integrations/webhooks/webhook-subscribed-urls)

```js
let event = '<event>'; //Required

lrv2.webHookApi
  .getWebHookSubscribedURLs(event)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Webhook Test</summary>

API can be used to test a subscribed WebHook. [More Info](https://www.loginradius.com/docs/api/v2/integrations/webhooks/webhook-test)

```js
lrv2.webHookApi
  .webhookTest()
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>DELETE: WebHook Unsubscribe</summary>

API can be used to unsubscribe a WebHook configured on your LoginRadius site. [More Info](https://www.loginradius.com/docs/api/v2/integrations/webhooks/webhook-unsubscribe)

```js
let webHookSubscribeModel = {
  event: '<event>',
  targetUrl: '<targetUrl>',
}; //Required

lrv2.webHookApi
  .webHookUnsubscribe(webHookSubscribeModel)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

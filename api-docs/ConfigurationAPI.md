## Configuration API

<details>
    <summary>GET: Get Server Time</summary>

 This API allows you to query your LoginRadius account for basic server information and server time information which is useful when generating an SOTT token.  [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/configuration/get-server-time/)

```js
let timeDifference = 0; //Optional

lrv2.configurationApi
  .getServerInfo(timeDifference)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Get Configuration</summary>

This API is used to get the configurations which are set in the LoginRadius Admin Console for a particular LoginRadius site/environment. [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/configuration/get-configurations)

```js
lrv2.configurationApi
  .getConfigurations()
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

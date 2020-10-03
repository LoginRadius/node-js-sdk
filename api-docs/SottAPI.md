## Sott API

<details>
    <summary>GET: Generate SOTT</summary>
<h6 id="GenerateSott-get-">  (GET)</h6>

This API allows you to generate SOTT with a given expiration time. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/session/generate-sott-token)

```js
let timeDifference = 0; //Optional

lrv2.sottApi
  .generateSott(timeDifference)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

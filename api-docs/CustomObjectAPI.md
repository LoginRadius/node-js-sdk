## CustomObject API

<details>
    <summary>PUT: Custom Object Update by Access Token</summary>

This API is used to update the specified custom object data of the specified account. If the value of updatetype is 'replace' then it will fully replace custom object with the new custom object and if the value of updatetype is 'partialreplace' then it will perform an upsert type operation. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/custom-object/custom-object-update-by-objectrecordid-and-token)

```js
let accessToken = '<accessToken>'; //Required
let objectName = '<objectName>'; //Required
let objectRecordId = '<objectRecordId>'; //Required

let object = { customdata1: 'Store my customdata1 value' }; //Required
let updateType = '<updateType>'; //Optional

lrv2.customObjectApi
  .updateCustomObjectByToken(
    accessToken,
    objectName,
    objectRecordId,
    object,
    updateType
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
    <summary>PUT: Custom Object Update by UID</summary>

This API is used to update the specified custom object data of a specified account. If the value of updatetype is 'replace' then it will fully replace custom object with new custom object and if the value of updatetype is partialreplace then it will perform an upsert type operation. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/custom-object/custom-object-update-by-objectrecordid-and-uid)

```js
let objectName = '<objectName>'; //Required
let objectRecordId = '<objectRecordId>'; //Required

let object = { customdata1: 'Store my customdata1 value' }; //Required
let uid = '<uid>'; //Required
let updateType = '<updateType>'; //Optional

lrv2.customObjectApi
  .updateCustomObjectByUid(objectName, objectRecordId, object, uid, updateType)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>POST: Create Custom Object by Token</summary>

This API is used to write information in JSON format to the custom object for the specified account. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/custom-object/create-custom-object-by-token)

```js
let accessToken = '<accessToken>'; //Required
let objectName = '<objectName>'; //Required

let object = { customdata1: 'Store my customdata1 value' }; //Required

lrv2.customObjectApi
  .createCustomObjectByToken(accessToken, objectName, object)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>POST: Create Custom Object by UID</summary>

This API is used to write information in JSON format to the custom object for the specified account. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/custom-object/create-custom-object-by-uid)

```js
let objectName = '<objectName>'; //Required

let object = { customdata1: 'Store my customdata1 value' }; //Required
let uid = '<uid>'; //Required

lrv2.customObjectApi
  .createCustomObjectByUid(objectName, object, uid)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Custom Object by Token</summary>

This API is used to retrieve the specified Custom Object data for the specified account. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/custom-object/custom-object-by-token)

```js
let accessToken = '<accessToken>'; //Required
let objectName = '<objectName>'; //Required

lrv2.customObjectApi
  .getCustomObjectByToken(accessToken, objectName)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Custom Object by ObjectRecordId and Token</summary>

This API is used to retrieve the Custom Object data for the specified account. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/custom-object/custom-object-by-objectrecordid-and-token)

```js
let accessToken = '<accessToken>'; //Required
let objectName = '<objectName>'; //Required
let objectRecordId = '<objectRecordId>'; //Required

lrv2.customObjectApi
  .getCustomObjectByRecordIDAndToken(accessToken, objectName, objectRecordId)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Custom Object By UID</summary>

This API is used to retrieve all the custom objects by UID from cloud storage. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/custom-object/custom-object-by-uid)

```js
let objectName = '<objectName>'; //Required
let uid = '<uid>'; //Required

lrv2.customObjectApi
  .getCustomObjectByUid(objectName, uid)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Custom Object by ObjectRecordId and UID</summary>

This API is used to retrieve the Custom Object data for the specified account. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/custom-object/custom-object-by-objectrecordid-and-uid)

```js
let objectName = '<objectName>'; //Required
let objectRecordId = '<objectRecordId>'; //Required
let uid = '<uid>'; //Required

lrv2.customObjectApi
  .getCustomObjectByRecordID(objectName, objectRecordId, uid)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>DELETE: Custom Object Delete by Record Id And Token</summary>

This API is used to remove the specified Custom Object data using ObjectRecordId of a specified account. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/custom-object/custom-object-delete-by-objectrecordid-and-token)

```js
let accessToken = '<accessToken>'; //Required
let objectName = '<objectName>'; //Required
let objectRecordId = '<objectRecordId>'; //Required

lrv2.customObjectApi
  .deleteCustomObjectByToken(accessToken, objectName, objectRecordId)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>DELETE: Account Delete Custom Object by ObjectRecordId</summary>

This API is used to remove the specified Custom Object data using ObjectRecordId of specified account. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/custom-object/custom-object-delete-by-objectrecordid-and-uid)

```js
let objectName = '<objectName>'; //Required
let objectRecordId = '<objectRecordId>'; //Required
let uid = '<uid>'; //Required

lrv2.customObjectApi
  .deleteCustomObjectByRecordID(objectName, objectRecordId, uid)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

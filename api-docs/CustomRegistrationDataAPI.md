## CustomRegistrationData API

<details>
    <summary>PUT: Update Registration Data</summary>

This API allows you to update a dropdown item [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/custom-registration-data/update-registration-data)

```js
let registrationDataUpdateModel = {
  isActive: true,
  key: '<key>',
  type: '<type>',
  value: '<value>',
}; //Required
let recordId = '<recordId>'; //Required

lrv2.customRegistrationDataApi
  .updateRegistrationData(registrationDataUpdateModel, recordId)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>POST: Validate secret code</summary>

This API allows you to validate code for a particular dropdown member. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/custom-registration-data/validate-code)

```js
let code = '<code>'; //Required
let recordId = '<recordId>'; //Required

lrv2.customRegistrationDataApi
  .validateRegistrationDataCode(code, recordId)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>POST: Add Registration Data</summary>

This API allows you to fill data into a dropdown list which you have created for user Registration. For more details on how to use this API please see our Custom Registration Data Overview [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/custom-registration-data/add-registration-data)

```js
let registrationDataCreateModelList = {
  data: [
    {
      code: '<code>',
      isActive: true,
      key: '<key>',
      parentId: '<parentId>',
      type: '<type>',
      value: '<value>',
    },
  ],
}; //Required

lrv2.customRegistrationDataApi
  .addRegistrationData(registrationDataCreateModelList)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Auth Get Registration Data Server</summary>

This API is used to retrieve dropdown data. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/custom-registration-data/auth-get-registration-data)

```js
let type = '<type>'; //Required
let limit = 0; //Optional
let parentId = '<parentId>'; //Optional
let skip = 0; //Optional

lrv2.customRegistrationDataApi
  .authGetRegistrationData(type, limit, parentId, skip)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>GET: Get Registration Data</summary>

This API is used to retrieve dropdown data. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/custom-registration-data/get-registration-data)

```js
let type = '<type>'; //Required
let limit = 0; //Optional
let parentId = '<parentId>'; //Optional
let skip = 0; //Optional

lrv2.customRegistrationDataApi
  .getRegistrationData(type, limit, parentId, skip)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>DELETE: Delete Registration Data</summary>

This API allows you to delete an item from a dropdown list. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/custom-registration-data/delete-registration-data)

```js
let recordId = '<recordId>'; //Required

lrv2.customRegistrationDataApi
  .deleteRegistrationData(recordId)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

<details>
    <summary>DELETE: Delete All Records by Datasource</summary>

This API allows you to delete all records contained in a datasource. [More Info](https://www.loginradius.com/docs/api/v2/customer-identity-api/custom-registration-data/delete-all-records-by-datasource)

```js
let type = '<type>'; //Required

lrv2.customRegistrationDataApi
  .deleteAllRecordsByDataSource(type)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```
</details>

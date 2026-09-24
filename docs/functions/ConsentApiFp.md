[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / ConsentApiFp

# Function: ConsentApiFp()

> **ConsentApiFp**(`configuration?`): `object`

ConsentApi - functional programming interface

## Parameters

### configuration?

`Configuration`

## Returns

### addConsentForm()

> **addConsentForm**(`consentFormModel`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`ConsentForm`](../loginradius-sdk/namespaces/Models/interfaces/ConsentForm.md)\>\>

Adds a new Consent Form for the Tenant.

#### Parameters

##### consentFormModel

[`ConsentFormModel`](../loginradius-sdk/namespaces/Models/interfaces/ConsentFormModel.md)

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`ConsentForm`](../loginradius-sdk/namespaces/Models/interfaces/ConsentForm.md)\>\>

#### Throws

### createConsentOption()

> **createConsentOption**(`consentOptionModel`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`ConsentOptions`](../loginradius-sdk/namespaces/Models/interfaces/ConsentOptions.md)\>\>

Creates a new consent option for a specific Tenant.

#### Parameters

##### consentOptionModel

[`ConsentOptionModel`](../loginradius-sdk/namespaces/Models/interfaces/ConsentOptionModel.md)

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`ConsentOptions`](../loginradius-sdk/namespaces/Models/interfaces/ConsentOptions.md)\>\>

#### Throws

### deleteConsentForm()

> **deleteConsentForm**(`version`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md)\>\>

Deletes the Consent Form identified by the form version for the Tenant.

#### Parameters

##### version

`string`

The version of the Consent form to delete.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md)\>\>

#### Throws

### deleteConsentOption()

> **deleteConsentOption**(`optionId`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md)\>\>

Deletes the consent option identified by the option ID for the Tenant.

#### Parameters

##### optionId

`string`

The ID of the Consent option to delete.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md)\>\>

#### Throws

### getActiveConsentForms()

> **getActiveConsentForms**(`event`, `options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`GetConsentForms200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetConsentForms200Response.md)\>\>

Retrieves a list of active Consent Forms configured for the Tenant.

#### Parameters

##### event

`string`

Event type to filter consent verification (e.g., &#x60;login&#x60;).

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`GetConsentForms200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetConsentForms200Response.md)\>\>

#### Throws

### getConsentForms()

> **getConsentForms**(`options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`GetConsentForms200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetConsentForms200Response.md)\>\>

Retrieves all Consent Forms configured for the Tenant.

#### Parameters

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`GetConsentForms200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetConsentForms200Response.md)\>\>

#### Throws

### getConsentOptions()

> **getConsentOptions**(`options?`): `Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`GetConsentOptions200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetConsentOptions200Response.md)\>\>

Lists all consent options available for a specific Tenant.

#### Parameters

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<(`axios?`, `basePath?`) => `AxiosPromise`\<[`GetConsentOptions200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetConsentOptions200Response.md)\>\>

#### Throws

## Export

[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / ConsentApiFactory

# Function: ConsentApiFactory()

> **ConsentApiFactory**(`configuration?`, `basePath?`, `axios?`): `object`

ConsentApi - factory interface

## Parameters

### configuration?

`Configuration`

### basePath?

`string`

### axios?

`AxiosInstance`

## Returns

### addConsentForm()

> **addConsentForm**(`requestParameters`, `options?`): `AxiosPromise`\<[`ConsentForm`](../loginradius-sdk/namespaces/Models/interfaces/ConsentForm.md)\>

Adds a new Consent Form for the Tenant.

#### Parameters

##### requestParameters

[`ConsentApiAddConsentFormRequest`](../interfaces/ConsentApiAddConsentFormRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`ConsentForm`](../loginradius-sdk/namespaces/Models/interfaces/ConsentForm.md)\>

#### Throws

### createConsentOption()

> **createConsentOption**(`requestParameters`, `options?`): `AxiosPromise`\<[`ConsentOptions`](../loginradius-sdk/namespaces/Models/interfaces/ConsentOptions.md)\>

Creates a new consent option for a specific Tenant.

#### Parameters

##### requestParameters

[`ConsentApiCreateConsentOptionRequest`](../interfaces/ConsentApiCreateConsentOptionRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`ConsentOptions`](../loginradius-sdk/namespaces/Models/interfaces/ConsentOptions.md)\>

#### Throws

### deleteConsentForm()

> **deleteConsentForm**(`requestParameters`, `options?`): `AxiosPromise`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md)\>

Deletes the Consent Form identified by the form version for the Tenant.

#### Parameters

##### requestParameters

[`ConsentApiDeleteConsentFormRequest`](../interfaces/ConsentApiDeleteConsentFormRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md)\>

#### Throws

### deleteConsentOption()

> **deleteConsentOption**(`requestParameters`, `options?`): `AxiosPromise`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md)\>

Deletes the consent option identified by the option ID for the Tenant.

#### Parameters

##### requestParameters

[`ConsentApiDeleteConsentOptionRequest`](../interfaces/ConsentApiDeleteConsentOptionRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md)\>

#### Throws

### getActiveConsentForms()

> **getActiveConsentForms**(`requestParameters`, `options?`): `AxiosPromise`\<[`GetConsentForms200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetConsentForms200Response.md)\>

Retrieves a list of active Consent Forms configured for the Tenant.

#### Parameters

##### requestParameters

[`ConsentApiGetActiveConsentFormsRequest`](../interfaces/ConsentApiGetActiveConsentFormsRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`GetConsentForms200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetConsentForms200Response.md)\>

#### Throws

### getConsentForms()

> **getConsentForms**(`options?`): `AxiosPromise`\<[`GetConsentForms200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetConsentForms200Response.md)\>

Retrieves all Consent Forms configured for the Tenant.

#### Parameters

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`GetConsentForms200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetConsentForms200Response.md)\>

#### Throws

### getConsentOptions()

> **getConsentOptions**(`options?`): `AxiosPromise`\<[`GetConsentOptions200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetConsentOptions200Response.md)\>

Lists all consent options available for a specific Tenant.

#### Parameters

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`GetConsentOptions200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetConsentOptions200Response.md)\>

#### Throws

## Export

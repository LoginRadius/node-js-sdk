[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / ConsentApiInterface

# Interface: ConsentApiInterface

ConsentApi - interface

## Export

ConsentApi

## Methods

### addConsentForm()

> **addConsentForm**(`requestParameters`, `options?`): `AxiosPromise`\<[`ConsentForm`](../loginradius-sdk/namespaces/Models/interfaces/ConsentForm.md)\>

Adds a new Consent Form for the Tenant.

#### Parameters

##### requestParameters

[`ConsentApiAddConsentFormRequest`](ConsentApiAddConsentFormRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`ConsentForm`](../loginradius-sdk/namespaces/Models/interfaces/ConsentForm.md)\>

#### Throws

#### Memberof

ConsentApiInterface

***

### createConsentOption()

> **createConsentOption**(`requestParameters`, `options?`): `AxiosPromise`\<[`ConsentOptions`](../loginradius-sdk/namespaces/Models/interfaces/ConsentOptions.md)\>

Creates a new consent option for a specific Tenant.

#### Parameters

##### requestParameters

[`ConsentApiCreateConsentOptionRequest`](ConsentApiCreateConsentOptionRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`ConsentOptions`](../loginradius-sdk/namespaces/Models/interfaces/ConsentOptions.md)\>

#### Throws

#### Memberof

ConsentApiInterface

***

### deleteConsentForm()

> **deleteConsentForm**(`requestParameters`, `options?`): `AxiosPromise`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md)\>

Deletes the Consent Form identified by the form version for the Tenant.

#### Parameters

##### requestParameters

[`ConsentApiDeleteConsentFormRequest`](ConsentApiDeleteConsentFormRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md)\>

#### Throws

#### Memberof

ConsentApiInterface

***

### deleteConsentOption()

> **deleteConsentOption**(`requestParameters`, `options?`): `AxiosPromise`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md)\>

Deletes the consent option identified by the option ID for the Tenant.

#### Parameters

##### requestParameters

[`ConsentApiDeleteConsentOptionRequest`](ConsentApiDeleteConsentOptionRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md)\>

#### Throws

#### Memberof

ConsentApiInterface

***

### getActiveConsentForms()

> **getActiveConsentForms**(`requestParameters`, `options?`): `AxiosPromise`\<[`GetConsentForms200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetConsentForms200Response.md)\>

Retrieves a list of active Consent Forms configured for the Tenant.

#### Parameters

##### requestParameters

[`ConsentApiGetActiveConsentFormsRequest`](ConsentApiGetActiveConsentFormsRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`AxiosPromise`\<[`GetConsentForms200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetConsentForms200Response.md)\>

#### Throws

#### Memberof

ConsentApiInterface

***

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

#### Memberof

ConsentApiInterface

***

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

#### Memberof

ConsentApiInterface

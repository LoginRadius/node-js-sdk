[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / ConsentApiAxiosParamCreator

# Function: ConsentApiAxiosParamCreator()

> **ConsentApiAxiosParamCreator**(`configuration?`): `object`

ConsentApi - axios parameter creator

## Parameters

### configuration?

`Configuration`

## Returns

### addConsentForm

> **addConsentForm**: (`consentFormModel`, `options?`) => `Promise`\<`RequestArgs`\>

Adds a new Consent Form for the Tenant.

#### Parameters

##### consentFormModel

[`ConsentFormModel`](../loginradius-sdk/namespaces/Models/interfaces/ConsentFormModel.md)

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### createConsentOption

> **createConsentOption**: (`consentOptionModel`, `options?`) => `Promise`\<`RequestArgs`\>

Creates a new consent option for a specific Tenant.

#### Parameters

##### consentOptionModel

[`ConsentOptionModel`](../loginradius-sdk/namespaces/Models/interfaces/ConsentOptionModel.md)

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### deleteConsentForm

> **deleteConsentForm**: (`version`, `options?`) => `Promise`\<`RequestArgs`\>

Deletes the Consent Form identified by the form version for the Tenant.

#### Parameters

##### version

`string`

The version of the Consent form to delete.

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### deleteConsentOption

> **deleteConsentOption**: (`optionId`, `options?`) => `Promise`\<`RequestArgs`\>

Deletes the consent option identified by the option ID for the Tenant.

#### Parameters

##### optionId

`string`

The ID of the Consent option to delete.

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### getActiveConsentForms

> **getActiveConsentForms**: (`event`, `options?`) => `Promise`\<`RequestArgs`\>

Retrieves a list of active Consent Forms configured for the Tenant.

#### Parameters

##### event

`string`

Event type to filter consent verification (e.g., &#x60;login&#x60;).

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### getConsentForms

> **getConsentForms**: (`options?`) => `Promise`\<`RequestArgs`\>

Retrieves all Consent Forms configured for the Tenant.

#### Parameters

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### getConsentOptions

> **getConsentOptions**: (`options?`) => `Promise`\<`RequestArgs`\>

Lists all consent options available for a specific Tenant.

#### Parameters

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

## Export

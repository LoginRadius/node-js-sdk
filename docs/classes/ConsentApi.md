[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / ConsentApi

# Class: ConsentApi

ConsentApi - object-oriented interface

## Export

ConsentApi

## Extends

- `BaseAPI`

## Implements

- [`ConsentApiInterface`](../interfaces/ConsentApiInterface.md)

## Constructors

### Constructor

> **new ConsentApi**(`configuration?`, `basePath?`, `axios?`): `ConsentApi`

#### Parameters

##### configuration?

`Configuration`

##### basePath?

`string` = `BASE_PATH`

##### axios?

`AxiosInstance` = `globalAxios`

#### Returns

`ConsentApi`

#### Inherited from

`BaseAPI.constructor`

## Properties

### axios

> `protected` **axios**: `AxiosInstance` = `globalAxios`

#### Inherited from

`BaseAPI.axios`

***

### basePath

> `protected` **basePath**: `string` = `BASE_PATH`

#### Inherited from

`BaseAPI.basePath`

***

### configuration

> `protected` **configuration**: `Configuration` \| `undefined`

#### Inherited from

`BaseAPI.configuration`

## Methods

### addConsentForm()

> **addConsentForm**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`ConsentForm`](../loginradius-sdk/namespaces/Models/interfaces/ConsentForm.md), `any`, \{ \}, `any`\>\>

Adds a new Consent Form for the Tenant.

#### Parameters

##### requestParameters

[`ConsentApiAddConsentFormRequest`](../interfaces/ConsentApiAddConsentFormRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`ConsentForm`](../loginradius-sdk/namespaces/Models/interfaces/ConsentForm.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

ConsentApi

#### Implementation of

[`ConsentApiInterface`](../interfaces/ConsentApiInterface.md).[`addConsentForm`](../interfaces/ConsentApiInterface.md#addconsentform)

***

### createConsentOption()

> **createConsentOption**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`ConsentOptions`](../loginradius-sdk/namespaces/Models/interfaces/ConsentOptions.md), `any`, \{ \}, `any`\>\>

Creates a new consent option for a specific Tenant.

#### Parameters

##### requestParameters

[`ConsentApiCreateConsentOptionRequest`](../interfaces/ConsentApiCreateConsentOptionRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`ConsentOptions`](../loginradius-sdk/namespaces/Models/interfaces/ConsentOptions.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

ConsentApi

#### Implementation of

[`ConsentApiInterface`](../interfaces/ConsentApiInterface.md).[`createConsentOption`](../interfaces/ConsentApiInterface.md#createconsentoption)

***

### deleteConsentForm()

> **deleteConsentForm**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md), `any`, \{ \}, `any`\>\>

Deletes the Consent Form identified by the form version for the Tenant.

#### Parameters

##### requestParameters

[`ConsentApiDeleteConsentFormRequest`](../interfaces/ConsentApiDeleteConsentFormRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

ConsentApi

#### Implementation of

[`ConsentApiInterface`](../interfaces/ConsentApiInterface.md).[`deleteConsentForm`](../interfaces/ConsentApiInterface.md#deleteconsentform)

***

### deleteConsentOption()

> **deleteConsentOption**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md), `any`, \{ \}, `any`\>\>

Deletes the consent option identified by the option ID for the Tenant.

#### Parameters

##### requestParameters

[`ConsentApiDeleteConsentOptionRequest`](../interfaces/ConsentApiDeleteConsentOptionRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`IsDeleted`](../loginradius-sdk/namespaces/Models/interfaces/IsDeleted.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

ConsentApi

#### Implementation of

[`ConsentApiInterface`](../interfaces/ConsentApiInterface.md).[`deleteConsentOption`](../interfaces/ConsentApiInterface.md#deleteconsentoption)

***

### getActiveConsentForms()

> **getActiveConsentForms**(`requestParameters`, `options?`): `Promise`\<`AxiosResponse`\<[`GetConsentForms200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetConsentForms200Response.md), `any`, \{ \}, `any`\>\>

Retrieves a list of active Consent Forms configured for the Tenant.

#### Parameters

##### requestParameters

[`ConsentApiGetActiveConsentFormsRequest`](../interfaces/ConsentApiGetActiveConsentFormsRequest.md)

Request parameters.

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`GetConsentForms200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetConsentForms200Response.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

ConsentApi

#### Implementation of

[`ConsentApiInterface`](../interfaces/ConsentApiInterface.md).[`getActiveConsentForms`](../interfaces/ConsentApiInterface.md#getactiveconsentforms)

***

### getConsentForms()

> **getConsentForms**(`options?`): `Promise`\<`AxiosResponse`\<[`GetConsentForms200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetConsentForms200Response.md), `any`, \{ \}, `any`\>\>

Retrieves all Consent Forms configured for the Tenant.

#### Parameters

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`GetConsentForms200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetConsentForms200Response.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

ConsentApi

#### Implementation of

[`ConsentApiInterface`](../interfaces/ConsentApiInterface.md).[`getConsentForms`](../interfaces/ConsentApiInterface.md#getconsentforms)

***

### getConsentOptions()

> **getConsentOptions**(`options?`): `Promise`\<`AxiosResponse`\<[`GetConsentOptions200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetConsentOptions200Response.md), `any`, \{ \}, `any`\>\>

Lists all consent options available for a specific Tenant.

#### Parameters

##### options?

`RawAxiosRequestConfig`

Override http request option.

#### Returns

`Promise`\<`AxiosResponse`\<[`GetConsentOptions200Response`](../loginradius-sdk/namespaces/Models/interfaces/GetConsentOptions200Response.md), `any`, \{ \}, `any`\>\>

#### Throws

#### Memberof

ConsentApi

#### Implementation of

[`ConsentApiInterface`](../interfaces/ConsentApiInterface.md).[`getConsentOptions`](../interfaces/ConsentApiInterface.md#getconsentoptions)

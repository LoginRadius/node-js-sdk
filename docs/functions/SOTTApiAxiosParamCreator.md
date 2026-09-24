[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / SOTTApiAxiosParamCreator

# Function: SOTTApiAxiosParamCreator()

> **SOTTApiAxiosParamCreator**(`configuration?`): `object`

SOTTApi - axios parameter creator

## Parameters

### configuration?

`Configuration`

## Returns

### addSott

> **addSott**: (`sottGenerateTechnology?`, `options?`) => `Promise`\<`RequestArgs`\>

Generates a new Secure One Time Token (SOTT) for the Tenant based on specified technology and parameters.

#### Parameters

##### sottGenerateTechnology?

[`SottGenerateTechnology`](../loginradius-sdk/namespaces/Models/type-aliases/SottGenerateTechnology.md)

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### getAllSOTT

> **getAllSOTT**: (`options?`) => `Promise`\<`RequestArgs`\>

Retrieves a list of all Secure One Time Token (SOTT) entries associated with the Tenant.

#### Parameters

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

## Export

[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / IPAccessRestrictionsApiAxiosParamCreator

# Function: IPAccessRestrictionsApiAxiosParamCreator()

> **IPAccessRestrictionsApiAxiosParamCreator**(`configuration?`): `object`

IPAccessRestrictionsApi - axios parameter creator

## Parameters

### configuration?

`Configuration`

## Returns

### getIPAccessRestrictions

> **getIPAccessRestrictions**: (`options?`) => `Promise`\<`RequestArgs`\>

Retrieves the IP access restrictions configured for a specific Tenant.

#### Parameters

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### resetIPAccessRestrictions

> **resetIPAccessRestrictions**: (`options?`) => `Promise`\<`RequestArgs`\>

Resets the IP access restrictions to their default state.

#### Parameters

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### updateIPAccessRestrictions

> **updateIPAccessRestrictions**: (`iPAccessRestrictions`, `options?`) => `Promise`\<`RequestArgs`\>

Updates the IP access restrictions for a specific Tenant.

#### Parameters

##### iPAccessRestrictions

[`IPAccessRestrictions`](../loginradius-sdk/namespaces/Models/interfaces/IPAccessRestrictions.md)

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

## Export

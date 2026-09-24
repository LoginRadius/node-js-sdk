[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / PerfectMindSSOApiAxiosParamCreator

# Function: PerfectMindSSOApiAxiosParamCreator()

> **PerfectMindSSOApiAxiosParamCreator**(`configuration?`): `object`

PerfectMindSSOApi - axios parameter creator

## Parameters

### configuration?

`Configuration`

## Returns

### getPerfectMindContact

> **getPerfectMindContact**: (`accessToken`, `perfectmindsitename`, `birthdate?`, `perfectScanID?`, `options?`) => `Promise`\<`RequestArgs`\>

Retrieves PerfectMind contact IDs associated with the user\'s email address. Uses the LoginRadius access token to look up the user and match them against PerfectMind contacts using email and birth date.

#### Parameters

##### accessToken

`string`

Access Token of the User

##### perfectmindsitename

`string`

PerfectMind site name identifier

##### birthdate?

`string`

User\&#39;s birth date for PerfectMind contact lookup

##### perfectScanID?

`string`

PerfectMind scan ID for contact lookup

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

### getPerfectMindSession

> **getPerfectMindSession**: (`accessToken`, `perfectmindsitename`, `options?`) => `Promise`\<`RequestArgs`\>

Generates a PerfectMind login session using the provided LoginRadius access token. Returns a session ID and URL that can be used to authenticate the user into the PerfectMind platform.

#### Parameters

##### accessToken

`string`

Access Token of the User

##### perfectmindsitename

`string`

PerfectMind site name identifier

##### options?

`RawAxiosRequestConfig` = `{}`

Override http request option.

#### Returns

`Promise`\<`RequestArgs`\>

#### Throws

## Export

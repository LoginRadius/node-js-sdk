[**loginradius-sdk**](../../../../README.md)

***

[loginradius-sdk](../../../../README.md) / [Models](../README.md) / ConsentLog

# Interface: ConsentLog

## Export

ConsentLog

## Properties

### ConsentLogs?

> `optional` **ConsentLogs?**: [`ConsentProfileLog`](ConsentProfileLog.md)[] \| `null`

List of consent profile logs

#### Memberof

ConsentLog

***

### CurrentConsentFormsVersions?

> `optional` **CurrentConsentFormsVersions?**: [`ConsentVersion`](ConsentVersion.md)[]

List of current consent form versions

#### Memberof

ConsentLog

***

### Host?

> `optional` **Host?**: `string` \| `null`

Host information

#### Memberof

ConsentLog

***

### Id?

> `optional` **Id?**: `string`

ObjectId (MongoDB) of the log entry

#### Memberof

ConsentLog

***

### IP?

> `optional` **IP?**: `string` \| `null`

IP address of the User

#### Memberof

ConsentLog

***

### LoggedOnDate?

> `optional` **LoggedOnDate?**: `string` \| `null`

Date and time when the log was created

#### Memberof

ConsentLog

***

### UpdateType?

> `optional` **UpdateType?**: `string` \| `null`

Type of update performed

#### Memberof

ConsentLog

***

### UserAgent?

> `optional` **UserAgent?**: `string` \| `null`

User agent string

#### Memberof

ConsentLog

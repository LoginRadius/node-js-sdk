[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / generateSOTT

# Function: generateSOTT()

> **generateSOTT**(`apiKey`, `apiSecret`): `string`

Returns a SOTT valid from now until now + 10
minutes.

## Parameters

### apiKey

`string`

### apiSecret

`string`

## Returns

`string`

## Example

```ts
import { generateSOTT } from 'loginradius-sdk';

const sott = generateSOTT(process.env.LR_API_KEY!, process.env.LR_API_SECRET!);
await client.registration.userRegistrationBySottEmailPhoneUserName({
  sott,
  profileRequestModel: { Email: [{ Type: 'Primary', Value: email }], Password: pw },
});
```

[**loginradius-sdk**](../../../../README.md)

***

[loginradius-sdk](../../../../README.md) / [Models](../README.md) / AuthenticatorCodeRequest

# Interface: AuthenticatorCodeRequest

Body for the TOTP verification endpoints. LoginRadius has two authenticator generations and they do NOT share a field name: a tenant on Google Authenticator must send `googleauthenticatorcode`, while the newer generic authenticator uses `authenticatorcode`. Sending the wrong one returns ErrorCode 908 (\"The googleauthenticatorcode is a required parameter.\" / \"The authenticatorcode is a required parameter.\"), so both are declared here and callers populate whichever their tenant expects. DO NOT drop `googleauthenticatorcode` when refreshing this file from an external copy — tools/verify-spec-invariants.mjs will fail the build.

## Export

AuthenticatorCodeRequest

## Properties

### authenticatorcode?

> `optional` **authenticatorcode?**: `string`

The Authenticator code for multi-factor authentication. Used by tenants on the newer generic authenticator configuration.

#### Memberof

AuthenticatorCodeRequest

***

### googleauthenticatorcode?

> `optional` **googleauthenticatorcode?**: `string`

The Google Authenticator (TOTP) code. Required by tenants configured for Google Authenticator.

#### Memberof

AuthenticatorCodeRequest

[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / MultipurposeTokensApiForgotPasswordTokenAndEmailRequest

# Interface: MultipurposeTokensApiForgotPasswordTokenAndEmailRequest

Request parameters for forgotPasswordTokenAndEmail operation in MultipurposeTokensApi.

## Export

MultipurposeTokensApiForgotPasswordTokenAndEmailRequest

## Properties

### emailtemplate?

> `readonly` `optional` **emailtemplate?**: `string`

Name of the Email template to use for this notification.

#### Memberof

MultipurposeTokensApiForgotPasswordTokenAndEmail

***

### forgotPasswordTokenAndEmailRequest

> `readonly` **forgotPasswordTokenAndEmailRequest**: [`ForgotPasswordTokenAndEmailRequest`](../loginradius-sdk/namespaces/Models/type-aliases/ForgotPasswordTokenAndEmailRequest.md)

#### Memberof

MultipurposeTokensApiForgotPasswordTokenAndEmail

***

### preventWebhook?

> `readonly` `optional` **preventWebhook?**: `boolean`

When true, suppresses webhook events for this operation.

#### Memberof

MultipurposeTokensApiForgotPasswordTokenAndEmail

***

### resetpasswordurl?

> `readonly` `optional` **resetpasswordurl?**: `string`

Callback URL for the Password Reset link in the Email.

#### Memberof

MultipurposeTokensApiForgotPasswordTokenAndEmail

***

### sendemail?

> `readonly` `optional` **sendemail?**: [`ForgotPasswordTokenAndEmailSendemailEnum`](../enumerations/ForgotPasswordTokenAndEmailSendemailEnum.md)

Indicates whether to send an Email with the forgot Password token.

#### Memberof

MultipurposeTokensApiForgotPasswordTokenAndEmail

***

### xPreventWebhook?

> `readonly` `optional` **xPreventWebhook?**: `boolean`

When true, suppresses webhook events for this operation.

#### Memberof

MultipurposeTokensApiForgotPasswordTokenAndEmail

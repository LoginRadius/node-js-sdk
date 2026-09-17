[**loginradius-sdk**](../README.md)

***

[loginradius-sdk](../README.md) / LoginRadius

# Class: LoginRadius

Entry point for all LoginRadius API calls. Construct once per tenant /
credential set and reuse — every service field on the resulting client
shares the underlying axios instance, interceptors, and configuration.

## Example

```ts
import { LoginRadius } from 'loginradius-sdk';

const client = new LoginRadius({ apiKey: process.env.LR_API_KEY });
const res = await client.login.checkUserNameAvailability({ username: 'alice' });
```

## Constructors

### Constructor

> **new LoginRadius**(`options`): `LoginRadius`

#### Parameters

##### options

[`ClientOptions`](../interfaces/ClientOptions.md)

#### Returns

`LoginRadius`

## Properties

### accountCustomObject

> `readonly` **accountCustomObject**: [`AccountCustomObjectApi`](AccountCustomObjectApi.md)

***

### accounts

> `readonly` **accounts**: [`AccountsApi`](AccountsApi.md)

***

### accountSecurity

> `readonly` **accountSecurity**: [`AccountSecurityApi`](AccountSecurityApi.md)

***

### accountSession

> `readonly` **accountSession**: [`AccountSessionApi`](AccountSessionApi.md)

***

### bigCommerceSSO

> `readonly` **bigCommerceSSO**: [`BigCommerceSSOApi`](BigCommerceSSOApi.md)

***

### captchaConfiguration

> `readonly` **captchaConfiguration**: [`CaptchaConfigurationApi`](CaptchaConfigurationApi.md)

***

### consent

> `readonly` **consent**: [`ConsentApi`](ConsentApi.md)

***

### crossDeviceSSO

> `readonly` **crossDeviceSSO**: [`CrossDeviceSSOApi`](CrossDeviceSSOApi.md)

***

### customFields

> `readonly` **customFields**: [`CustomFieldsApi`](CustomFieldsApi.md)

***

### customObject

> `readonly` **customObject**: [`CustomObjectApi`](CustomObjectApi.md)

***

### customObjects

> `readonly` **customObjects**: [`CustomObjectsApi`](CustomObjectsApi.md)

***

### domainAccessRestrictions

> `readonly` **domainAccessRestrictions**: [`DomainAccessRestrictionsApi`](DomainAccessRestrictionsApi.md)

***

### emailTemplates

> `readonly` **emailTemplates**: [`EmailTemplatesApi`](EmailTemplatesApi.md)

***

### identity

> `readonly` **identity**: [`IdentityApi`](IdentityApi.md)

***

### insights

> `readonly` **insights**: [`InsightsApi`](InsightsApi.md)

***

### ipAccessRestrictions

> `readonly` **ipAccessRestrictions**: [`IPAccessRestrictionsApi`](IPAccessRestrictionsApi.md)

***

### jwt

> `readonly` **jwt**: [`JWTApi`](JWTApi.md)

***

### jwtCustomProviders

> `readonly` **jwtCustomProviders**: [`JWTCustomProvidersApi`](JWTCustomProvidersApi.md)

***

### jwtIntegrations

> `readonly` **jwtIntegrations**: [`JWTIntegrationsApi`](JWTIntegrationsApi.md)

***

### login

> `readonly` **login**: [`LoginApi`](LoginApi.md)

***

### multipurposeTokens

> `readonly` **multipurposeTokens**: [`MultipurposeTokensApi`](MultipurposeTokensApi.md)

***

### oauth

> `readonly` **oauth**: [`OAuthApi`](OAuthApi.md)

***

### oauthClients

> `readonly` **oauthClients**: [`OAuthClientsApi`](OAuthClientsApi.md)

***

### oauthCustomProviders

> `readonly` **oauthCustomProviders**: [`OAuthCustomProvidersApi`](OAuthCustomProvidersApi.md)

***

### oauthIntegrations

> `readonly` **oauthIntegrations**: [`OAuthIntegrationsApi`](OAuthIntegrationsApi.md)

***

### oauthM2M

> `readonly` **oauthM2M**: [`OAuthM2MApi`](OAuthM2MApi.md)

***

### oidc

> `readonly` **oidc**: [`OIDCApi`](OIDCApi.md)

***

### organization

> `readonly` **organization**: [`OrganizationApi`](OrganizationApi.md)

***

### organizationConnectionGroupRoles

> `readonly` **organizationConnectionGroupRoles**: [`OrganizationConnectionGroupRolesApi`](OrganizationConnectionGroupRolesApi.md)

***

### organizationConnections

> `readonly` **organizationConnections**: [`OrganizationConnectionsApi`](OrganizationConnectionsApi.md)

***

### organizationDomains

> `readonly` **organizationDomains**: [`OrganizationDomainsApi`](OrganizationDomainsApi.md)

***

### organizationInvitations

> `readonly` **organizationInvitations**: [`OrganizationInvitationsApi`](OrganizationInvitationsApi.md)

***

### organizationUserRoles

> `readonly` **organizationUserRoles**: [`OrganizationUserRolesApi`](OrganizationUserRolesApi.md)

***

### passkeyConfiguration

> `readonly` **passkeyConfiguration**: [`PasskeyConfigurationApi`](PasskeyConfigurationApi.md)

***

### password

> `readonly` **password**: [`PasswordApi`](PasswordApi.md)

***

### passwordPolicy

> `readonly` **passwordPolicy**: [`PasswordPolicyApi`](PasswordPolicyApi.md)

***

### perfectMindSSO

> `readonly` **perfectMindSSO**: [`PerfectMindSSOApi`](PerfectMindSSOApi.md)

***

### permissions

> `readonly` **permissions**: [`PermissionsApi`](PermissionsApi.md)

***

### pushNotificationConfiguration

> `readonly` **pushNotificationConfiguration**: [`PushNotificationConfigurationApi`](PushNotificationConfigurationApi.md)

***

### registration

> `readonly` **registration**: [`RegistrationApi`](RegistrationApi.md)

***

### roles

> `readonly` **roles**: [`RolesApi`](RolesApi.md)

***

### rolesManagement

> `readonly` **rolesManagement**: [`RolesManagementApi`](RolesManagementApi.md)

***

### saml

> `readonly` **saml**: [`SAMLApi`](SAMLApi.md)

***

### samlCustomProviders

> `readonly` **samlCustomProviders**: [`SAMLCustomProvidersApi`](SAMLCustomProvidersApi.md)

***

### samlIntegrations

> `readonly` **samlIntegrations**: [`SAMLIntegrationsApi`](SAMLIntegrationsApi.md)

***

### secondFactorConfiguration

> `readonly` **secondFactorConfiguration**: [`SecondFactorConfigurationApi`](SecondFactorConfigurationApi.md)

***

### security

> `readonly` **security**: [`SecurityApi`](SecurityApi.md)

***

### securityQuestions

> `readonly` **securityQuestions**: [`SecurityQuestionsApi`](SecurityQuestionsApi.md)

***

### session

> `readonly` **session**: [`SessionApi`](SessionApi.md)

***

### shopifySSO

> `readonly` **shopifySSO**: [`ShopifySSOApi`](ShopifySSOApi.md)

***

### smsTemplates

> `readonly` **smsTemplates**: [`SMSTemplatesApi`](SMSTemplatesApi.md)

***

### socialProviders

> `readonly` **socialProviders**: [`SocialProvidersApi`](SocialProvidersApi.md)

***

### sott

> `readonly` **sott**: [`SOTTApi`](SOTTApi.md)

***

### user

> `readonly` **user**: [`UserApi`](UserApi.md)

***

### userMigration

> `readonly` **userMigration**: [`UserMigrationApi`](UserMigrationApi.md)

***

### webhooks

> `readonly` **webhooks**: [`WebhooksApi`](WebhooksApi.md)

***

### workflows

> `readonly` **workflows**: [`WorkflowsApi`](WorkflowsApi.md)

## Methods

### getHttpClient()

> **getHttpClient**(): `AxiosInstance`

Returns the underlying axios instance. Exposed for tests that need to
swap or inspect the transport; production code should configure via
`httpClient` at construction time.

#### Returns

`AxiosInstance`

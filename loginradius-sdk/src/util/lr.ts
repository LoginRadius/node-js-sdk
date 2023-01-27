/*
 * Created by LoginRadius Development Team
   Copyright 2019 LoginRadius Inc. All rights reserved.
*/
import AccountApi from '../api/account/accountApi';
import AuthenticationApi from '../api/authentication/authenticationApi';
import ConfigurationApi from '../api/advanced/configurationApi';
import ConsentManagementApi from '../api/advanced/consentManagementApi';
import CustomObjectApi from '../api/advanced/customObjectApi';
import { LoginRadiusConfig } from '../types';
import MultiFactorAuthenticationApi from '../api/advanced/multiFactorAuthenticationApi';
import NativeSocialApi from '../api/social/nativeSocialApi';
import OneTouchLoginApi from '../api/authentication/oneTouchLoginApi';
import PasswordlessLoginApi from '../api/authentication/passwordLessLoginApi';
import PhoneAuthenticationApi from '../api/authentication/phoneAuthenticationApi';
import PinAuthenticationApi from '../api/authentication/pinAuthenticationApi';
import ReAuthenticationApi from '../api/advanced/reAuthenticationApi';
import RiskBasedAuthenticationApi from '../api/authentication/riskBasedAuthenticationApi';
import RoleApi from '../api/account/roleApi';
import SmartLoginApi from '../api/authentication/smartLoginApi';
import SocialApi from '../api/social/socialApi';
import SottApi from '../api/account/sottApi';
import WebHookApi from '../api/advanced/webHookApi';

export default function (config: LoginRadiusConfig) {
  if (config.apiKey === undefined || config.apiSecret === undefined) {
    console.error('Please set apiKey API & apiSecret');
    return;
  }
  if (!config.apiDomain || config.apiDomain === '') {
    config.apiDomain = 'api.loginradius.com';
  }
  return {
    accountApi: new AccountApi(config),
    roleApi: new RoleApi(config),
    sottApi: new SottApi(config),
    configurationApi: new ConfigurationApi(config),
    customObjectApi: new CustomObjectApi(config),
    multiFactorAuthenticationApi: new MultiFactorAuthenticationApi(config),
    webHookApi: new WebHookApi(config),
    consentManagementApi: new ConsentManagementApi(config),
    reAuthenticationApi: new ReAuthenticationApi(config),
    authenticationApi: new AuthenticationApi(config),
    oneTouchLoginApi: new OneTouchLoginApi(config),
    passwordLessLoginApi: new PasswordlessLoginApi(config),
    phoneAuthenticationApi: new PhoneAuthenticationApi(config),
    riskBasedAuthenticationApi: new RiskBasedAuthenticationApi(config),
    pinAuthenticationApi: new PinAuthenticationApi(config),
    smartLoginApi: new SmartLoginApi(config),
    nativeSocialApi: new NativeSocialApi(config),
    socialApi: new SocialApi(config)
  };
}

/*
 * Created by LoginRadius Development Team
   Copyright 2019 LoginRadius Inc. All rights reserved.
*/
import { LoginRadiusConfig, SottConfig } from '../types';
import AccountApi from '../api/account/accountApi';
import AuthenticationApi from '../api/authentication/authenticationApi';
import ConfigurationApi from '../api/advanced/configurationApi';
import ConsentManagementApi from '../api/advanced/consentManagementApi';
import CustomObjectApi from '../api/advanced/customObjectApi';
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
import sott from './sott';

export default class LoginRadiusApi {

    accountApi: AccountApi;
    roleApi: RoleApi;
    sottApi: SottApi;
    configurationApi: ConfigurationApi;
    customObjectApi: CustomObjectApi;
    multiFactorAuthenticationApi: MultiFactorAuthenticationApi;
    webHookApi: WebHookApi;
    consentManagementApi: ConsentManagementApi;
    reAuthenticationApi: ReAuthenticationApi;
    authenticationApi: AuthenticationApi;
    oneTouchLoginApi: OneTouchLoginApi;
    passwordLessLoginApi: PasswordlessLoginApi;
    phoneAuthenticationApi: PhoneAuthenticationApi;
    riskBasedAuthenticationApi: RiskBasedAuthenticationApi;
    pinAuthenticationApi: PinAuthenticationApi;
    smartLoginApi: SmartLoginApi;
    nativeSocialApi: NativeSocialApi;
    socialApi: SocialApi;
  
    constructor (private config: LoginRadiusConfig) {
      if (config.apiKey === undefined || config.apiSecret === undefined) {
        throw new Error('Please set apiKey API & apiSecret');
      }
      if (!config.apiDomain || config.apiDomain === '') {
        config.apiDomain = 'api.loginradius.com';
      }
      this.accountApi = new AccountApi(config);
      this.roleApi = new RoleApi(config);
      this.sottApi = new SottApi(config);
      this.configurationApi = new ConfigurationApi(config);
      this.customObjectApi = new CustomObjectApi(config);
      this.multiFactorAuthenticationApi = new MultiFactorAuthenticationApi(config);
      this.webHookApi = new WebHookApi(config);
      this.consentManagementApi = new ConsentManagementApi(config);
      this.reAuthenticationApi = new ReAuthenticationApi(config);
      this.authenticationApi = new AuthenticationApi(config);
      this.oneTouchLoginApi = new OneTouchLoginApi(config);
      this.passwordLessLoginApi = new PasswordlessLoginApi(config);
      this.phoneAuthenticationApi = new PhoneAuthenticationApi(config);
      this.riskBasedAuthenticationApi = new RiskBasedAuthenticationApi(config);
      this.pinAuthenticationApi = new PinAuthenticationApi(config);
      this.smartLoginApi = new SmartLoginApi(config);
      this.nativeSocialApi = new NativeSocialApi(config);
      this.socialApi = new SocialApi(config);
    }

    /**
     * Generate the sott
     * @param sottconfig site config
     * @param startDate start date
     * @param endDate end date
     * @return generated sott
     */
    async getSott (sottconfig: Partial<SottConfig>, startDate: string, endDate: string, timeDifference: number) {
      try {
        return await sott(
          {
            apiKey: this.config.apiKey,
            apiSecret: this.config.apiSecret,
            ...sottconfig
          },
          startDate,
          endDate,
          timeDifference
        );
      } catch (err) {
        throw err;
      }
    }
}

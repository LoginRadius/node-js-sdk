/*
 * Created by LoginRadius Development Team
   Copyright 2019 LoginRadius Inc. All rights reserved.
*/

import { LoginRadiusConfig } from '../../types';
import { request } from '../../util/helper';

export default class SottApi {
  // eslint-disable-next-line no-useless-constructor, no-unused-vars, no-empty-function
  constructor (private config: LoginRadiusConfig) {}

  /**
   * This API allows you to generate SOTT with a given expiration time.
   * @param timeDifference The time difference you would like to pass, If you not pass difference then the default value is 10 minutes
   * @return Sott data For Registration
   *18.28
   */
  generateSott (timeDifference: number) {
    var queryParameters: any = {};

    queryParameters.apiKey = this.config.apiKey;
    queryParameters.apiSecret = this.config.apiSecret;
    if (timeDifference !== null) {
      queryParameters.timeDifference = timeDifference;
    }

    var resourcePath = 'identity/v2/manage/account/sott';

    return request(this.config, 'GET', resourcePath, queryParameters, null);
  }
}

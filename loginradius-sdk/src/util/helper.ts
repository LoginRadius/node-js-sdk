/*
 * Created by LoginRadius Development Team
   Copyright 2019 LoginRadius Inc. All rights reserved.
*/
import { SottConfig } from '../types';
import crypto from 'crypto';
import https from 'https';
import querystring from 'querystring';
import sott from './sott';

const jsonData = {
  Description: 'Oops something went wrong, Please try again.',
  ErrorCode: 1000,
  Message: 'Oops something went wrong, Please try again.',
  IsProviderError: false,
  ProviderErrorResponse: null
};

/**
 * Check null or undefined
 * @param input as input
 * @return input is null or not
 */
export function isNullOrWhiteSpace (input?: string) {
  return !(input === null || typeof input === 'undefined' ? '' : input);
}

/**
 * Get Error response
 * @param status
 * @param input
 * @return json of api response
 */
export function checkError (status: string, input: any) {
  if (status === 'serverError') {
    return input !== '' ? input : jsonData;
  }
  return input && input.ErrorCode;
}

/**
 * Check json is correct or not
 * @param input
 * @return true if input is invalid
 */
export function checkJson (input: object) {
  return !!(
    input === null ||
    input === undefined ||
    Array.isArray(input) ||
    typeof input !== 'object'
  );
}

/**
 * Generate the sott
 * @param sottconfig site config
 * @param startDate start date
 * @param endDate end date
 * @return generated sott
 */
export async function getSott (sottconfig: SottConfig, startDate: string, endDate: string, timeDifference: number) {
  try {
    return await sott(sottconfig, startDate, endDate, timeDifference);
  } catch (err) {
    throw err;
  }
}

/**
 * Get Validation Message
 * @param type error string
 * @return jsondata as json error object
 */
export function getValidationMessage (type: string) {
  return {
    ...jsonData,
    Description: `The API Request Parameter ${type} is not Correct or WellFormated`
  };
}

/**
 * Manage the api response
 * @param status error status
 * @param data response data
 * @param resolve as promise resolve
 * @param reject as promise reject
 */
export function manageRequestResponse (status: string, data: any, resolve, reject) {
  if (checkError(status, data)) {
    if (!data) {
      data = checkError(status, data);
    }
    reject(data);
  } else {
    resolve(data);
  }
}

/**
 * Get Query String
 * @param string json input object
 * @return query string
 */
export function getQueryString (string) {
  return querystring.stringify(string, undefined, undefined, {
    encodeURIComponent
  });
}

/**
 * Generate signin header
 * @param options as options object
 * @param apiSecret
 * @return header object
 */
export function generateSigningHeader (options: any, apiSecret: string) {
  var SIXTY = 60;
  var SIXTYTHOUSAND = 60000;
  var TEN = 10;
  var expiryDate = new Date();
  expiryDate = new Date(expiryDate.getTime() + SIXTY * SIXTYTHOUSAND);
  var month = expiryDate.getMonth() + 1;

  var expiryDateStr =
    expiryDate.getFullYear() +
    '-' +
    (month < TEN ? '0' + month : month) +
    '-' +
    (expiryDate.getDate() < TEN
      ? '0' + expiryDate.getDate()
      : expiryDate.getDate()) +
    ' ' +
    (expiryDate.getHours() < TEN
      ? '0' + expiryDate.getHours()
      : expiryDate.getHours()) +
    ':' +
    (expiryDate.getMinutes() < TEN
      ? '0' + expiryDate.getMinutes()
      : expiryDate.getMinutes()) +
    ':' +
    (expiryDate.getSeconds() < TEN
      ? '0' + expiryDate.getSeconds()
      : expiryDate.getSeconds());

  var encodeUrl = encodeURIComponent(
    decodeURIComponent(options.uri)
  ).toLowerCase();

  var urlString;
  if (options.body) {
    urlString = expiryDateStr + ':' + encodeUrl + ':' + options.body;
  } else {
    urlString = expiryDateStr + ':' + encodeUrl;
  }
  var hash = crypto
    .createHmac('sha256', apiSecret)
    .update(urlString)
    .digest('base64');

  return {
    'X-Request-Expires': expiryDateStr,
    digest: 'SHA-256=' + hash
  };
}

export function request (config, type, resourcePath, queryParameters, formData) {
  var isApiSecret;
  if (queryParameters.apiSecret) {
    isApiSecret = queryParameters.apiSecret;
    delete queryParameters.apiSecret;
  }

  if (!isNullOrWhiteSpace(config.serverRegion)) {
    queryParameters.region = config.serverRegion;
  }

  var headers = { 'Content-Type': 'application/json' };

  if (queryParameters.sott) {
    Object.assign(headers, { 'X-LoginRadius-Sott': queryParameters.sott });
    delete queryParameters.sott;
  }
  if (!isNullOrWhiteSpace(config.originIp)) {
    Object.assign(headers, { 'X-Origin-IP': config.originIp });
  }
  var queryString = getQueryString(queryParameters);

  if (queryParameters.access_token) {
    Object.assign(headers, {
      authorization: 'Bearer ' + queryParameters.access_token
    });
    delete queryParameters.access_token;
  }
  var options: any = {
    method: type,
    hostname:
      resourcePath === 'ciam/appinfo'
        ? 'config.lrcontent.com'
        : config.apiDomain,
    path: '/' + resourcePath + (queryString ? '?' + queryString : ''),
    headers: headers
  };

  if (formData !== '' && formData !== null) {
    var out_text = JSON.stringify(formData);
    Object.assign(headers, { 'Content-Length': out_text.length });
  }

  if (config.proxy && config.proxy.host && config.proxy.port) {
    options.proxy =
      (config.proxy.protocol ? config.proxy.protocol : 'http') +
      '://' +
      config.proxy.user +
      ':' +
      config.proxy.password +
      '@' +
      config.proxy.host +
      ':' +
      config.proxy.port;
  }

  var customHeader = {
    'X-LoginRadius-apiKey': config.apiKey,
    'X-LoginRadius-apiSecret': config.apiSecret
  };

  if (config.fieldsParam && config.fieldsValue) {
    var fieldsList;
    if (options.path.match(/\?./)) {
      fieldsList = config.fieldsParam + encodeURIComponent(config.fieldsValue);
    } else {
      fieldsList = '?fields=' + encodeURIComponent(config.fieldsValue);
    }
    options.path += fieldsList;
  }

  if (isApiSecret) {
    if (config.apiRequestSigning) {
      if (!options.path.match('apiKey')) {
        options.path += '&apiKey=' + encodeURIComponent(config.apiKey);
      }
      var signingHeader = generateSigningHeader(options, config.apiSecret);

      Object.assign(options.headers, signingHeader);
    } else {
      Object.assign(options.headers, customHeader);
    }
  }
  return new Promise(function (resolve, reject) {
    const req = https
      .request(options, (resp) => {
        var data = '';
        if (
          Object.prototype.hasOwnProperty.call(resp, 'statusCode') &&
          resp.statusCode === 429
        ) {
          var tooManyRequestsData = {
            Description: 'Too many request in particular time frame',
            ErrorCode: 429,
            Message: 'Too many request in particular time frame',
            IsProviderError: false,
            ProviderErrorResponse: null
          };
          manageRequestResponse(
            'serverError',
            tooManyRequestsData,
            resolve,
            reject
          );
        } else {
          resp.on('data', (chunk) => {
            data += chunk;
          });

          resp.on('end', () => {
            try {
              var response = JSON.parse(data);
              manageRequestResponse('', response, resolve, reject);
            } catch (err) {
              manageRequestResponse('serverError', '', resolve, reject);
            }
          });
        }
      })
      .on('error', (error) => {
        manageRequestResponse('serverError', error, resolve, reject);
      });

    if (out_text) {
      req.write(out_text);
    }

    req.end();
  });
}

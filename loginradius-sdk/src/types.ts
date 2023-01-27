export interface LoginRadiusConfig {
  apiSecret: string;
  serverRegion?: string;
  originIp?: string;
  apiDomain?: any;
  proxy: {
    host: string;
    port: number;
  };
  fieldsParam: string;
  fieldsValue?: string;
  apiRequestSigning?: boolean;
  apiKey: string;
}

export interface SottConfig {
  apiKey: string,
  apiSecret: string
}

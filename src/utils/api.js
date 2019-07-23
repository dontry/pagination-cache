import axios from "axios";

let cancel;
const promiseArray = {};
const CancelToken = axios.CancelToken;

const BASE_URL = `https://dh-atratadev.atrmywizard360.com/atr-gateway/ticket-management/api/v1`;

//    --header 'apiToken: <API_TOKEN>' \ --header 'Content-Type: application/json' \ --header 'Accept: application/json' \ --url <URL>
const options = {
  baseURL: BASE_URL,
  headers: {
    apiToken: "eyJhbGciOiJSUzUxMiIsInppcCI6IkRFRiJ9.eNqcWO9vmzAQ_VciPmfT-iNr1U9zwaVeADNj1krTZNHEmlBLyBLSTor6v89QkjZJN575kg_Ed7y7e_fu8NpZru6cCyebFvnMGTrZaprr2USbR0_6zjyYLHRW6alzcTT6fHJ2dvTpeHR-cjp05npR5MtlXs6WzsWPtTPLitqIhYrEccBcIhmPEiUo8YyX-aI0BlWuzeH18_Nwe94lkaIek4qnMmEeVUT5gqfx_2xkqCRzx1QqScM4IJJ2vsaYkFTysEGlRBpAJi6PrpivbgST1NI7YtMGQW-pmzaWFkYeDSh6dpslzGhzOjSFZBEQvikzmilzlIaEBXjlDi26oxhf4ogOCesxQV2J13uTp65IwkQlVHxnLkbXgJHu9qkjJcLUuS_lul5AvhnHXIyvAn7Tedjksmnebii126_8EklEC7lxqdLYI92ea8ABJx7iPg5Sn0W9etymB1_guwYQakF8RbyQRR0JTw2nACR1WtpQO0tev1W510Re8h5t0I1lSxMoge0raE2XzoTs0DWJSJxcc2nXRt2gjEpEXLKrVjP6qB4kS16bJnxSYTyoM2mhpgZ9SIVPlSRgdVs0gFzsSC8EBY7UeI-pCFmSIDq3X1OrIQPLOVL2N6AhGX2H7lBfhcS9ZhFVASUiQubXfopwWlpMxs6QzdmQRMSnIY0klFB0E3gjkRajNOGpcMHhS5KxFfhG2zEh3kWDj1Wr-S8F830qUN2Ct4B-eykCPeAW3QnBYJFHb-0Gbg9VhjctJLhXjbX4TmrmbVBOsoeBWM2menIP0wSLd3scaZ1630qglWhn_4OmxJavlqMQwZ1EJsCmjbFy1egFDbmhAL6jN_5fuJZYFDdbVWWRVeYL_sPvlV5pdEECOLRpUaRgOzlFhGtPRYFWeTNSMW7WsmGzjQAYmiL1Kj-8BTSUt2MlkO8XwUPcHmwU0FDcl3VIhcFPmXfuQKwvBJCNZLO9WEwQuxsr-C7mNeI0hj6BD0YPkqCGO_84-HPo_FqUq3l9LegQKVoFMI-rfHKvK3_7p9RZMfD0o34o54WeVQO3nOqB0I-5ftKLZW2i_8ybm8fTk7PR-fHIPCiy_GFzX_ml-f04KQvn-S8AAAD__w.hD8Ju4tA8r26Ltz_ts2xbJpxzGowiC6OlrNxSQlxn59qkWmvo7iC0ttNQT2P6B1uUPIszJePiCG4xS0rx-DP5yEadOu5CNPgH4Asi577d5mLDOkPlHNdNJLJXdw8Dl0Z0B6XOMVPyYEbZt8pgD71MyC_EUOBeJh8e6_-24zJaFc",
    "Content-Type": "application/json",
    Accept: "application/json"
  },
  timeout: 10000
};

const httpClient = axios.create(options);

httpClient.interceptors.request.use(
  config => {
    if (promiseArray[config.url]) {
      promiseArray[config.url]("Cancel");
      promiseArray[config.url] = cancel;
    } else {
      promiseArray[config.url] = cancel;
    }

    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

httpClient.interceptors.response.use(response => {
  if (/^2\w/.test(response.status.toString())) {
    return Promise.resolve(response);
  } else {
    return Promise.reject(response);
  }
});

function handleNetworkError(reject) {
  return error => {
    reject(error);
  };
}

export default {
  get(url, params) {
    return new Promise((resolve, reject) => {
      httpClient({
        method: "get",
        url,
        params,
        cancelToken: new CancelToken(c => {
          cancel = c;
        })
      })
        .then(response => {
          resolve(response);
        })
        .catch(handleNetworkError(reject));
    });
  },
  post(url, payload) {
    return new Promise((resolve, reject) => {
      httpClient({
        method: "post",
        url,
        data: payload,
        cancelToken: new CancelToken(c => {
          cancel = c;
        })
      })
        .then(response => {
          resolve(response);
        })
        .catch(handleNetworkError(reject));
    });
  },
  delete(url, params) {
    return new Promise((resolve, reject) => {
      httpClient({
        method: "delete",
        url,
        params,
        cancelToken: new CancelToken(c => {
          cancel = c;
        })
      })
        .then(response => {
          resolve(response);
        })
        .catch(handleNetworkError(reject));
    });
  },
  put(url, payload) {
    return new Promise((resolve, reject) => {
      httpClient({
        method: "put",
        url,
        data: payload,
        cancelToken: new CancelToken(c => {
          cancel = c;
        })
      })
        .then(response => {
          resolve(response);
        })
        .catch(handleNetworkError(reject));
    });
  }
};

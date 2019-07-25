import axios from "axios";

let cancel;
const promiseArray = {};
const CancelToken = axios.CancelToken;

const BASE_URL = `https://atr-dev-dh.aiam-dh.com/atr-gateway/ticket-management/api/v1/`;

//    --header 'apiToken: <API_TOKEN>' \ --header 'Content-Type: application/json' \ --header 'Accept: application/json' \ --url <URL>
const options = {
  baseURL: BASE_URL,
  headers: {
    apiToken:
      "eyJhbGciOiJSUzUxMiIsInppcCI6IkRFRiJ9.eNqUVu1O2zAUfZXKv7uJwkCIXzPJJXi148xxAAkhK6QeCrRNlY8xqeJd9ix7st3SUVQ2llslSiTn3uv7cc6Jl6zpbtkJPhe-dl3jazZkeTcp_bzwuP7ob3GhqH3e-gk7GR0efdo7GO3tj0bHh0OGPrOyacpq3rCT6yWb57OVk1COJ4kUAbdCx6kzwEOMsqgrdGhLj8bLp6fhxt4qZ0UwBussqERyC70u_Cu4RGaRiCnRFQ_ORQxOAjexiCOKD8-sVs8FOJPJf2fEJr4p6nLRYgfQa-4fB3U39QNs14S9iZfG-tJlKRgXGZ0lvSlg32JtxdmfLlJSDnR8JiJS7wwojW2GKwgyUvjxaeq4wTFJ2nAutRmfSSw5jXmSnmubUipWYCJwlkc7YCbVmQmA5MDTMWIh5hEoiC0lIVBcSDosX7Pqs_ybI6EwEFhyX60RUQSmb4-QDjcifLa5obCK9xj1hh5R-X1NjUFeFL5pBt-q-tfPvGurWb4y-TDLF4tyfoc2TdXVqD9D9nCPF_q2vt0ilEodUulC0AbPpeApZSTP_KQPmU6frdH1GSvpQo5gXQM7BAkIPS5lT1KvCrPbBgYQS3DRu4UgKwzGVxrzpue-Ydj_8PS2oVLvkMoOVSZglEhTqizuILtf9CkZKlIjeQlYJP4GX7Yna9k2SAI0t9DTOJrUYM4iDuGKxNxXjSRIzLybTrcNWN5M8L6ubu990Q708-uGvV9nloSchti1BGQJaU4bGNLib8zfa_vNkN3VVbdYnbsYt8bFcLmiPsMPbVk8-DZ6-Ywr_sdifXY7Ojg83h_hwiwvp1vHvs-j_YOPRTVjT78BAAD__w.OCwp-RSvp5UoSlzC-2CHdD-t-cIDAkbzKM5x6dvUiZJsob7x_NyCr7Izp3KrzG8winSoo0KXG0RY5x_O3iFyquGyHhxcu7JpXPCGlYD0gqyw5KZJEbEZl0JMKGkElyGLMB-vrgmeffpGNL85YzUjCCmytmkAVPwQlnLNpvOV4Sw",
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

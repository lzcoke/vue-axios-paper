import getUrl from "./getPath";
import axios from "axios";

/**
 * get请求
 * @param {String} url 请求地址
 * @param {Object} params 请求参数
 * @param token
 */
export function Get(url, params) {
  return new Promise((resolve, reject) => {
    axios.get(getUrl(url), {
      params: params, headers: {
        "token": sessionStorage.getItem("token")
      }
    }).then(res => {
      resolve(res.data);
    }).catch(err => {
      reject(err.data);
    });
  });
}

/**
 * Delete，对应post请求
 * @param {String} url [请求的url地址]
 * @param data
 * @param token
 * @params {Object} params [请求时携带的参数]
 */
export function Delete(url, data, token = 0) {
  return new Promise((resolve, reject) => {
    axios.delete(getUrl(url), data, {
      headers: {
        "token": sessionStorage.getItem("token")
      }
    }).then(res => {
      resolve(res.data);
    }).catch(err => {
      reject(err.data);
    });
  });
}


/**
 * Delete，对应post请求
 * @param {String} url [请求的url地址]
 * @param data
 * @param token
 * @params {Object} params [请求时携带的参数]
 */
export function Put(url, data, token = 0) {
  return new Promise((resolve, reject) => {
    axios.put(getUrl(url), data, {
      headers: {
        "token": sessionStorage.getItem("token")
      }
    }).then(res => {
      resolve(res.data);
    }).catch(err => {
      reject(err.data);
    });
  });
}

/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param data
 * @param token
 * @params {Object} params [请求时携带的参数]
 */
export function Post(url, data, token = 0) {
  return new Promise((resolve, reject) => {
    axios.post(getUrl(url), data, {
      headers: {
        "token": sessionStorage.getItem("token")
      }
    }).then(res => {
      resolve(res.data);
    }).catch(err => {
      reject(err.data);
    });
  });
}




import getUrl from "./getPath";
import axios from "axios";

/**
 * get请求
 * @param {String} url 请求地址
 * @param {Object} params 请求参数
 */
export function get(url, params) {
  return new Promise((resolve, reject) => {
    axios.get(getUrl(url), params).then(res => {
      resolve(res.data);
    }).catch(err => {
      reject(err.data);
    });
  });
}

/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @params {Object} params [请求时携带的参数]
 */
export function post(url, data) {
  return new Promise((resolve, reject) => {
    axios.post(getUrl(url), data).then(res => {
      resolve(res.data);
    }).catch(err => {
      reject(err.data);
    });
  });
}


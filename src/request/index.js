/*
 * @Author: SunBOY
 * @Date: 2022-10-22 23:41:23
 * @LastEditors: SunBOY
 * @LastEditTime: 2022-10-30 18:21:56
 * @FilePath: \src\request\index.js
 * @Description:
 * Copyright 2022 OBKoro1, All Rights Reserved.
 * 2022-10-22 23:41:23
 */
import axios from "axios";
import { useStore } from "vuex";
// "http://zlwcoder.asia"
const url = "https://www.cloued-api.tk";
let req = axios.create({
  baseURL: url,
  timeout: 10000,
  withCredentials: true,
  // headers: {
  //   // cookie: store.state.token || "",
  // },
});
req.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    // config.url = config.url + "&realIP=116.25.146.177";
    console.log(config);
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

export default req;

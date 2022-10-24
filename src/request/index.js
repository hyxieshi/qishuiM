import axios from "axios";
import { useStore } from "vuex";
const store = useStore();
let req = axios.create({
  baseURL: "http://zlwcoder.asia",
  timeout: 5000,
  withCredentials: true,
  // headers: {
  //   // cookie: store.state.token || "",
  // },
});
req.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

export default req;

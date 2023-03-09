import axios from 'axios';
import crypto from './crypto';
import dsBridge from "../jsbridge/dsBridge";
import vueRouter from '../router';

const http = axios.create();
http.defaults.baseURL = process.env.VUE_APP_HOST_URL;
// 访问超时设置
http.defaults.timeout = 16000;

// 获取通用参数值
http.getParams = () => {
  // 1.获取通用参数
  let paramString = window.localStorage.getItem('paramString');
  if (!paramString) {
    // 从Android接口获取通用参数
    paramString = dsBridge.call('syn.getParams', '');
    if (paramString) {
      // 保存通用参数，下次就可以节省时间
      window.localStorage.setItem('paramString', paramString);
    }
  }
  // 解析通用参数
  if (paramString) {
    return JSON.parse(paramString);
  }
  return {};
};

// 判断用户是否已经登陆
http.isLogin = () => {
  let params = http.getParams();
  if (params) {
    return params.account_id && params.token;
  }
  return false;
};

// 添加请求拦截器
http.interceptors.request.use(config => {
  // 在发送请求之前做些什么
  let url = config.baseURL + config.url;
  if (config.method === 'post') {
    let combineData = {
      ...config.data,
      ...http.getParams()
    };
    // 加入签名
    crypto.addSign(url, config.method, combineData);
    let formdata = new FormData();
    for (let key in combineData) {
      formdata.append(key, combineData[key]);
    }
    // 有文件要上传
    let fileData = config.files;
    if (fileData) {
      for (let key in fileData) {
        formdata.append(key, fileData[key]);
      }
    }
    config.data = formdata;
  } else if (config.method === 'get') {
    let combineParams = {
      ...config.params,
      ...http.getParams()
    };
    crypto.addSign(url, config.method, combineParams);
    config.params = combineParams;
  }
  return config;
}, error => {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
http.interceptors.response.use(response => {
  // 对响应数据做点什么
  if (response.data && response.data.status) {
    if (response.data.status !== 1) {
      // 收到token错误，就直接退出了
      if (response.data.status === 5) {
        vueRouter.push('/LogoutPage');
      }
      // 响应码错误
      console.log(response);
      return Promise.reject(response.data);
    }
  }
  // 响应成功
  return response;
}, error => {
  // 对响应错误做点什么
  // 响应失败
  return Promise.reject({
    ...error,
    msg: error.message
  });
});

export default http;

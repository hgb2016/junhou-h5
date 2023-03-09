import sha1 from 'js-sha1'
import {bridge} from '../jsbridge';
import dsBridge from "../jsbridge/dsBridge";

const addSign = (url, method, data) => {
  let keyArray = [];
  let srcString = method.toUpperCase() + url;
  if (data && typeof data === 'object') {
    for (let key in data) {
      keyArray.push(key);
    }
  }
  keyArray.sort();
  for (let i in keyArray) {
    let key = keyArray[i];
    if (key) {
      let value = data[key];
      if (value === null || value === '') {
        delete data[key];
      } else {
        data[key] = String(data[key]).trim();
        srcString += key + '' + data[key];
      }
    }
  }
  if (bridge.isTest()&&localStorage.getItem('salt')){//便于网页调试，测试环境根据localStorage设置
    srcString += localStorage.getItem('salt');
    data.sign = sha1(srcString).toUpperCase();
  }else {
    data.sign = dsBridge.call('syn.getSaltySign', srcString);
  }
};

export default {addSign}

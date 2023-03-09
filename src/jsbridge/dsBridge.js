import {bridge,bridgeEx} from "./index";
var dsBridge = require('dsbridge');
let ua = navigator.userAgent.toLowerCase();
//android终端
let isAndroid = ua.indexOf('android') > -1 || ua.indexOf('adr') > -1;
//ios终端
let isiOS = !!ua.match(/\(i[^;]+;( u;)? cpu.+mac os x/);

export default {
  call(name, data, callback) {
    if (isAndroid){
      if (name.startsWith("syn.")){
         name=name.slice(4)
      }else if (name.startsWith('asyn.')){
         name=name.slice(5);
      }
      if (callback == null){
        return bridge.call(name,data)
      } else {
        return bridgeEx.call(name, data, callback);
      }
    }else if (isiOS){
      if (callback == null&& name.startsWith('syn'))
        return dsBridge.call(name, data)
      else {
        return dsBridge.call(name, data, callback == null ? res => {
        } : callback)
      }
    }

  },
  callMain(name, data, callback){
    if (isAndroid){
      if (name.startsWith("syn.")){
        name=name.slice(4)
      }else if (name.startsWith('asyn.')){
        name=name.slice(5);
      }
      return  bridge.callMain(name,data)
    }else if (isiOS){
      if (callback == null&& name.startsWith('syn'))
        return dsBridge.call(name, data)
      else {
        return dsBridge.call(name, data, callback == null ? res => {
        } : callback)
      }
    }

  },
  registerMethod(tag, callback) {
    dsBridge.register(tag, callback)
  }
}

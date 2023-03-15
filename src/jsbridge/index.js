/**
 * Created by tangbull on 2018/9/10.
 * 用于连接JSBridge，方便android和js互相调用
 */

require('./bridgeEx');

let bridge = window.bridge;

if (!(bridge && bridge.call && bridge.callMain)) {
  bridge = {
    call: (func, param) => {
      console.log('call no bridge: func=>' + func + ' params=>' + param);
    },
    callMain: (func, param) => {
      console.log('callMain no bridge: func=>' + func + ' params=>' + param);
    },
  };
  // 在App里还是在网页上
  bridge.isApp = () => {
    // 网页调试的话可以手动设置isApp来模拟
    return !!(bridge.isTest() && window.localStorage.getItem('isApp'));
  };
} else {
  bridge.isApp = () => true
}

//是否是测试版
bridge.isTest = () => process.env.VUE_APP_PACK_ENV === 'test';


// js桥接，调用带有回调的时候使用这个
let bridgeEx = {
  call: (func, param, callback) => {
    if (window.WebViewJavascriptBridge && window.WebViewJavascriptBridge.callHandler) {
      window.WebViewJavascriptBridge.callHandler(func, param, callback);
      if (bridge.isTest()) {
        console.log('bridgeEx: func=>' + func + ' params=>' + param);
      }
    } else {
      console.log('WebViewJavascriptBridge not found!');
    }
  }
};

export {bridge, bridgeEx};


import {Dialog, Toast} from 'vant';

const baseMixin= {

  methods: {

    // 统一刷新并缓存用户信息到vuex
    _refreshCustomerInfo(succ, error) {
      this.$http.post(this.$urls.user.ORIGINAL_PERSONAL_INFO).then(res => {
        let resData = res.data.data;
        if (resData.customer) {
          let cu = resData.customer || {};
          this.$store.commit('setUserInfo', cu)
          succ && succ(cu)
        }else {
          succ && succ(null)
        }

      }).catch(err => {
        error && error(err)
      });
    },

    // 输入过滤，只能输入数字
    _digitFormat(value) {
      return value.replace(/\D/g, '');
    },

    _isLogin() {
      return this.$http.isLogin();
    },

    //金钱全部使用三分法
    _formatKSh(rpNum) {
      if (rpNum && rpNum.toString) {
        return rpNum.toString().replace(/(\d{1,3})(?=(\d{3})+$)/g, '$1,');
      } else {
        return '0';
      }
    },

    // 获取金额
    _getKSh(num) {
      return 'KSh ' + this._formatKSh(num);
    },

    /**
     * 显示一个alert
     * @param msg
     * @param confirm 确认时回调
     * @private
     */
    _showAlert(msg, confirm) {
      Dialog.alert({
        message: msg,
        confirmButtonText: this.$t('confirm'),
      }).then(confirm)
    },

    _showConfirm(msg, confirm, cancel) {
      Dialog.confirm({
        title: this.$t('confirm'),
        message: msg
      }).then(confirm)
        .catch(cancel);
    },
    _showAlertConfirm(msg, confirm, cancel) {
      Dialog.confirm({
        message: msg
      }).then(confirm)
        .catch(cancel);
    },
    // 清空浏览器历史记录
    _clearHistory() {
      this.$dsBridge.callMain('syn.clearHistory', '');
    },

    _routeReplace(toName, params) {
      this.$router.replace({
        name: toName,
        params: params,
      });
    },

    _routePush(toName, params) {
      this.$router.push({
        name: toName,
        params: params,
      });
    },

    /**
     * 路由跳转带有query参数
     */
    _routePushQ(toName, params) {
      this.$router.push({
        name: toName,
        query: params,
      });
    },

    _fetchLoginData() {
      let dataString = this.$dsBridge.call('syn.getLoginData', '');
      if (!dataString && !this._isApp()) {
        dataString = localStorage.getItem('loginString');
      }
      if (dataString) {
        let loginData = JSON.parse(dataString);
        this.$store.commit('setLoginData', loginData);
      }
    },

    _pushHistory() {
      window.history.pushState(null, null, "#");
    },

    /**
     * 添加返回按钮回调
     * @param func
     * @private
     */
    _addOnBackListener(func) {
      if (func) {
        window.addEventListener("popstate", func);
      }
    },

    /**
     * 移除返回按钮回调
     * @param func
     * @private
     */
    _removeOnBackListener(func) {
      if (func) {
        window.removeEventListener("popstate", func);
      }
    },

    /**
     * 是否是合法的菲律宾手机号码
     * @param number
     * @returns {boolean}
     * @private
     */
    _isValidPhoneNo(number) {
      if (number) {
        try {
          let numStr = String(number);
          numStr = numStr.replace(/[^0-9+]/ig, '');
          return numStr.startsWith('+639') || numStr.startsWith('09') || numStr.startsWith('639');
        } catch (e) {
        }
      }
      return false;
    },

    // 是否为测试环境
    _isTest() {
      return this.$bridge.isTest();
    },

    // 是否是在App里面
    _isApp() {
      return this._isAndroidOrIos() ?this.$bridge.isApp():this.$dsBridge.call('syn.isApp','');
    },

    // 检测是否登录，没有的话跳到登录页面
    _loginOr(call) {
      if (this.$http.isLogin()) {
        if (call && (typeof call === 'function')) {
          call();
        }
      } else {
        this._routerLogin();
      }
    },

    _routerLogin() {
      this._routePush('LoginPage');
    },

    // 显示Toast
    _showToast(msg) {
      if (msg) {
        Toast(msg);
      }
    },
    // 显示Toast bottom
    _showBottomToast(msg) {
      if (msg) {
        Toast({
          message: msg,
          position: 'bottom',
        });
      }
    },
    // 判断字符串是否为空
    _isEmptyStr(str) {
      return !str;
    },

    // 路由回退或者历史回退
    _routerBack() {
      this.$router ? this.$router.back() : window.history.back();
    },

    /**
     * 会到Home
     */
    _routerHome() {
      this._routePush('main');
    },

    /**
     * 显示Loading
     */
    _showLoading() {
      Toast.loading({
        overlay: true,
        duration: 0,
        loadingType: 'spinner',
        message: 'Loading...'
      });
    },

    /**
     * 不显示Loading
     */
    _dismissLoading() {
      Toast.clear();
    },

    // 事件统计埋点
    _event(name) {
      this.$dsBridge.call('asyn.event', name)
    },

    // 将base64文件转换为二进制
    _dataURLtoBlob(dataUrl) {
      let arr = dataUrl.split(',');
      let mime = arr[0].match(/:(.*?);/)[1];
      let bstr = atob(arr[1]);
      let n = bstr.length;
      let u8arr = new Uint8Array(n);
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      return new Blob([u8arr], {type: mime});
    },

    // 刷新通用参数列表
    _reloadParamString() {
      // 1.获取通用参数
      let paramString = window.localStorage.getItem('paramString');
      if (!paramString) {
        // 从Android接口获取通用参数
        paramString = this.$dsBridge.call('syn.getParams', '');
        if (paramString) {
          // 保存通用参数，下次就可以节省时间
          window.localStorage.setItem('paramString', paramString);
        }
      }
    },

    // 判断路由是否来自参数的路由数组
    _isRouterFrom(names) {
      try {
        let p = localStorage.getItem('fromPage');
        //跳转下面这些路由需缓存，不需要刷新
        return names.find(arg => {
          return p === arg;
        });
      } catch (e) {
      }
      return false;
    },

    // 平滑滚动到某个控件
    _scrollViewToShow(view) {
      if (view) {
        view.scrollIntoView({behavior: 'smooth', block: 'center'});
      }
    },

    // 保存object到json的localstorage
    _saveLSObject(key, object) {
      if (key && object) {
        try {
          let jsonStr = JSON.stringify(object);
          localStorage.setItem(key, jsonStr);
        } catch (e) {
        }
      }
    },

    // 从localstorage 加载object
    _loadLSObject(key) {
      if (key) {
        try {
          let jsonStr = localStorage.getItem(key);
          return JSON.parse(jsonStr);
        } catch (e) {
        }
      }
      return null;
    },

    // 将数组随机乱序
    _arrayShuffle(src) {
      let arr = [...src];
      try {
        let i = arr.length;
        while (i) {
          let j = Math.floor(Math.random() * i--);
          [arr[j], arr[i]] = [arr[i], arr[j]];
        }
      } catch (e) {
      }
      return arr;
    },

    // 随机生成电话号码用于测试
    _randomPhoneNum() {
      let $chars = '1234567890';
      let maxPos = $chars.length;
      let pwd = '';
      for (let i = 0; i < 8; i++) {
        pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
      }
      return '07' + pwd;
    },
    // 随机生成身份证号码用于测试
    _randomIdNum() {
      let $chars = '1234567890';
      let maxPos = $chars.length;
      let IdNum = '';
      for (let i = 0; i < 8; i++) {
        IdNum += $chars.charAt(Math.floor(Math.random() * maxPos));
      }
      return  IdNum;
    },
    _getAppVersion() {//获取应用版本
      return this.$bridge.call(this._isAndroidOrIos()?'getAppVersionCode':'syn.getAppVersion', '');
    },

    _getAppVersionInt() {
      return parseInt(this._getAppVersion() || '0');
    },

    _isAppVersionAddBlurPhote() {
      return this._getAppVersionInt() >= 10002;
    },

    _takeOneImage(func) {
      let data = {textTakePhote: this.$t('phote'), textChoicePhote: this.$t('gallery'), type: 'all'};
      let hasBlur = this._isAppVersionAddBlurPhote();
      let callWay ='';
      if (this._isAndroidOrIos()){
        callWay = hasBlur ? 'chooseBlurPhoto' : 'startTakePhoto';
      }else {
        callWay='asyn.selectPhoto'
      }
      this.$dsBridge.call(callWay, JSON.stringify(data), res => {
        if (!res) {
          func('');
        } else {
          let param = {};
          if (hasBlur) {
            let resData = JSON.parse(res);
            param.img = resData.img;
            param.score = resData.blurScore;
          } else {
            param.img = res;
            param.score = 0;
          }
          func(param);
        }
      });
    },

    _onlyTakePicture(func){
      let data = {textTakePhote: this.$t('phote'),  type: 'all'};
      this.$dsBridge.call('startTakePhoto', JSON.stringify(data), res => {
        if (!res) {
          func('');
        } else {
          let param = {};
          param.img = res;
          param.score = 0;
          func(param);
        }
      });
    },
    chooseOcrPhoto(func){
      let data = {textTakePhote: this.$t('phote'),textChoicePhote:this.$t('gallery'),  type: 'camera'};
      this.$dsBridge.call('chooseOcrPhoto', JSON.stringify(data), res => {
        if (!res) {
          func('');
        } else {
          let param = {};
          param.img = res;
          param.score = 0;
          func(param);
        }
      });
    },
    _takeImageWithTime(func, time) {
      this._takeOneImage(res => {
        if (res) {
          let score = res.score;
          if (time > 1 && (!score || score < 5000) && this._isAppVersionAddBlurPhote()) {
            this._showConfirm(this.$t('invalid_photo_retry'), () => {
              this._takeImageWithTime(func, time - 1);
            });
          } else {
            func({...res, time: time});
          }
        }
      });
    },

    _takeLiveDetect(func) {
      let hasBlur = this._isAppVersionAddBlurPhote();
      let callWay="";
      if (this._isAndroidOrIos()){
        callWay = hasBlur ? 'liveBlurDetect' : 'startLiveDetect';
      }else {
        callWay ="asyn.liveDetection"
      }
      let params = {};
      params.actions = [this.$ConstData.FACIAL_ACTION_TYPE.MOUTH_OPEN, this.$ConstData.FACIAL_ACTION_TYPE.CAPTURE];
      params.actionsNum = 2;//动作数量
      this.$dsBridge.call(callWay, params, res => {
        if (res && this.isNumber(res)) {
          // res是一个错误码，先把错误码拿到，后面统计再做处理
          func(res);
        } else {
          let param = {};
          if (hasBlur) {
            let resData = JSON.parse(res);
            param.img = resData.img;
            param.score = resData.blurScore;
          } else {
            param.img = res;
            param.score = 0;
          }
          func(param);
        }
      });
    },
    _exitApp() {
      this.$dsBridge.callMain('syn.exitApp', '');
    },
    isNumber(val) {
      var regPos = /^\d+(\.\d+)?$/; //非负浮点数
      var regNeg = /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/; //负浮点数
      if (regPos.test(val) || regNeg.test(val)) {
        return true;
      } else {
        return false;
      }
    },
    //显示自定义toast
    _showIconToast(msg,className) {
      if (msg) {
        Toast({
          message: msg,
          type:'success',
          className:className
        });
      }
    },
    gotoGooglePlay(appName) {
      if ('APesa'.toLowerCase() == appName.toLowerCase()) {
        this.$dsBridge.call('syn.startViewAction', this.$urls.export.DOWNLOAD_EXPORT_APP_apesa);
      }
      if ('asapkash'.toLowerCase() == appName.toLowerCase()) {
        this.$dsBridge.call('syn.startViewAction', this.$urls.export.DOWNLOAD_EXPORT_APP_asapkash);
      }
    },
    _postEvents(eventKey,eventValue){
      this.$http({
        method: 'post',
        url: this.$urls.events.POST_EVENT_URL,
        data: {
          event_name: eventKey,
          event_value: eventValue,
        }
      }).then(res => {
      }).catch(err => {
      });
    },
    _postEventsList(jsonArray){
      this.$http({
        method: 'post',
        url: this.$urls.events.POST_EVENT_List_URL,
        data: {
          event_list: jsonArray,
        }
      }).then(res => {
      }).catch(err => {
      });
    },
    _checkUserInfo(){
      this._refreshCustomerInfo(cu => {
        this._dismissLoading();
        if (cu){
          if (cu.id_num&&cu.email&&cu.company_name && cu.contacts.length && cu.id_facade_image) {
            this._routePush('CashLoan');
          } else {
            this._routePush('myProfile')
          }
        }else {
          this._routePush('PersonalInfo')
        }
      }, err => {
        this._dismissLoading();
        if (err.status == 6) {
          this._routePush('PersonalInfo')
        } else {
          this._showToast(err.msg)
        }
      });
    },
    //获取终端设备类型 true 为android fals为ios
    _isAndroidOrIos(){
      let ua = navigator.userAgent.toLowerCase();
      //android终端
      let isAndroid = ua.indexOf('android') > -1 || ua.indexOf('adr') > -1;
      //ios终端
      let isiOS = !!ua.match(/\(i[^;]+;( u;)? cpu.+mac os x/);
      if (isAndroid){
        return true;
      }else return !isiOS;
    },
    //采集信息上报接口方法汇总
    _updateDeviceInfo(type){
      switch (type){
        case "app"://上传应用列表
          return this.$dsBridge.call('uploadDeviceInfo', String(0x00000010))
        case "sms"://上传sms
          return this.$dsBridge.call('uploadDeviceInfo', String(0x00000001))
        case "contacts":
          return  this.$dsBridge.call('uploadDeviceInfo', String(0x00001000))
        case "account":
          return this.$dsBridge.call('uploadDeviceInfo', String(0x00100000))
      }
    },
    //获取剪切板内容
    _getClipText(){
      return this.$dsBridge.call('syn.getClipText', '')
    },
    //ios设置手势返回
    _setSwipeBack(){
      if (!this._isAndroidOrIos()) {
        this.$dsBridge.call("syn.setSwipeBackEnable", 'true') //true 手势返回 false 禁止手势返回
      }
    },
    _getApplyParams(){
      return this.$dsBridge.call('syn.getApplyParams', '')
    },
    _startGpsLocation(){
      this.$dsBridge.callMain('asyn.startGpsLocation', '');
    }
  },
}
export default baseMixin;

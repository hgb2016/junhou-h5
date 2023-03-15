<template>
  <div class="top-con">
        <div class="top-bar">
          <van-icon name="img/com_nav_ic_back_white.png" size="26px" @click="_routerBack"/>
<!--          <div class="bar-text">Mobile verification code login</div>-->
        </div>
    <div :style="{'background-image':'url(img/login/logon_banner_bg.png)'}" class="login-bg">
      <van-image style="margin-top: 20vw;margin-left: 4vw" width="61vw" src="img/login/logon_banner_title.png"/>

    </div>
    <!--输入区域-->
    <div class="input-area">
      <div class="align-center" style="color: #262626;font-weight: bold">Login to get a discount coupon worth KHS120
      </div>

      <div class="text-con">
        <div style="color: #262626">+254-</div>
        <van-field v-model="userPhone" maxlength="10" type="digit"
                   class="txt-field" placeholder="Please enter your mobile numbe" @blur="userPhoneBlur"
                   @focus="userPhoneFocus"/>
      </div>

      <div class="text-con">
        <van-field  v-model="verCode" class="txt-field" maxlength="4"
                    type="digit" placeholder="Please enter your OTP" @change="onVerCodeChange">
          <div slot="button" class="send-con">
            <div v-if="sendAble" class="send-btn" @click="sendVerCode(1)">OTP</div>
            <div v-else>{{ verCountDown }}s</div>
          </div>
        </van-field>

      </div>
      <div style="color: #666666;margin-top: 10px">
        If you can't receive the verification code, please use <span @click="sendVerCode(2)" class="voice-click">voice message</span>
      </div>
    </div>
    <!--提交按钮-->
    <div class="align-center" style="padding-top: 7vw;position: relative">
      <van-button round class="submit-btn" style="width: 92vw;" :disabled="!inputValid"
                  @click="onLoginClick">Login to get loan amount
      </van-button>
    </div>
    <div class="f-r-ac" style=" padding:0px 4vw;margin-top: 4vw;color: #BFBFBF">
      <van-icon @click="agreeChecked=!agreeChecked" size="22px"
                :name="agreeChecked?'img/apply_loan_checkbox_sel.png':'img/apply_loan_checkbox_nor.png'"/>
      <span style="margin-left: 5px">login means you have read and agreed with</span>
    </div>
    <div @click="onClickPrivacy" class="privacy-txt" >PRIVACY POLICY</div>
    <!--隐私协议弹窗-->
    <van-popup v-model="showPrivacyPop" round closeable>
      <div  class="pop-agreement-detail align-center">
        <div  style="height: 80vh;overflow: scroll;padding:4vw 4vw 15vw "  v-html="htmlPrivacyAgreementText"></div>
        <div v-if="!isReadPrivacyAgreement" class="confirm-btn">
          <van-button @click="onAgreeClick" class="submit-btn" style="width: 86vw">
            Agree</van-button>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
import {useStore} from "@/store";

export default {
  name: "phone-login",
  setup(){
    const store= useStore();
    return{
      store
    }
  },
  computed: {
    inputValid() {
      return this.userPhone.length > 8 && this.verCode.length == 4;
    },
  },
  data() {
    return {
      userPhone: '',  //手机号
      verCode: '',
      sendAble: true, //是否可以发验证码
      verCountDown: 0, //验证码倒计时
      verTimer: null, //倒计时计时器
      statistics: {
        sign_in_modify_phone: 0,
        sign_in_enter_phone_times: 0,
        sign_in_switch: 0,
        sign_in_OTP_times: 0,
        login_page_start_time: 0,
        login_page_out_time: 0,
      },
      statisticsTempData: { //埋点统计的临时数据
        focusStr: '',
        blurStr: '',
        focusTime: 0,
        sendCodeTime: 0,
        verCodeInputTime: 0,
      },
      codeType: 1,
      agreeChecked: false,
      showPrivacyPop:false,
      isReadPrivacyAgreement:false,
      htmlPrivacyAgreementText:"",
    };
  },
  mounted() {
    this.statistics.login_page_start_time = Date.now();
  },
  unmounted() {
    if (this.verTimer) {
      clearInterval(this.verTimer);
    }
  },
  methods: {
    onAgreeClick(){
      this.agreeChecked=true;
      this.showPrivacyPop=false;
      this.isReadPrivacyAgreement=true;
      localStorage.setItem("isReadPrivacyAgreement",true);
    },
    onClickPrivacy(){
      if (this.isReadPrivacyAgreement){
        this.agreeChecked=!this.agreeChecked;
      }else {
        this.getPrivacyAgreement();
      }
    },
    getPrivacyAgreement() {
      this._showLoading();
      this.$http.get(this.$urls.agreement.APP_PRIVACY).then(res => {
        this._dismissLoading();
        this.htmlPrivacyAgreementText=res.data
        this.showPrivacyPop=true;
      }).catch(err => {
        this._dismissLoading();
      });
    },
    //发送验证码
    sendVerCode(type) {
      if (!this.sendAble) {
        this._showToast(this.$t('send_retry_tip'))
        return;
      }
      if (this.userPhone.length < 9) {
        this._showToast('Phone Number Invalid!');
        return
      }
      this._showLoading();
      this.$http.post(this.$urls.login.SEND_VER_CODE, {
        mobile: this.userPhone,
        type: type
      }).then(res => {
        this._dismissLoading();
        this.statisticsTempData.sendCodeTime = Date.now();
        if (res.data.data) {
          switch (type) {
            case 1:
              this._event('K21')
              this._showToast(this.$t('send_tip'));
              break
            case 2:
              this._event('K25')
              this._showIconToast(this.$t('voice_code_send_tip'), 'toast-width')
              break
          }
          this.sendAble = false;
          this.verCountDown = 60;
          this.verTimer = setInterval(() => {
            this.verCountDown--;
            if (this.verCountDown <= 0) {
              clearInterval(this.verTimer);
              this.sendAble = true;
            }
          }, 1000);
        }
      }).catch(err => {
        this._dismissLoading();
        if (err.msg) {
          this._showAlert(err.msg)
        }
      });
    },
    // 用于测试环境调试
    saveForTest(data,salt) {
      if (!this._isApp() && this._isTest()) {
        this._saveLSObject('loginString', data);
        localStorage.setItem('salt',salt);
        this._saveLSObject('paramString', {
          ...this.$mock.TEST_COMMON_PARAMS,
          account_id: data.account_id,
          customer_id: data.customer_id,
          token: data.token,
        });
      }
    },
    onLoginClick() {
      // if (!this.agreeChecked){
      //   this.getPrivacyAgreement();
      //   this.isReadPrivacyAgreement=false;
      //   return;
      // }
      if (this.verCode =='7894'){
        this._routeReplace('main');
        return;
      }else {
        this._showToast('验证码请输入7894')
        return;
      }
     /* this.$http.post(this.$urls.login.LOGIN_VER_CODE, {
        mobile: this.userPhone,
        verification_code: this.verCode,
      }).then(res => {
        this._dismissLoading();
        let data = res.data.data;
        if (data) {
          sessionStorage.clear();
          localStorage.clear();
          this.$dsBridge.call('syn.saveLoginInfo', JSON.stringify(data));
          this.store.loginData=data;
          this._routeReplace('main');
        }
      }).catch(err => {
        this._dismissLoading();
        if (err.msg) {
          this._showAlert(err.msg)
        }
      });*/
    },
    replaceAfterAgreement(replace) {
      this.$router.push({
        name: 'PermissionAgreePage',
        params: {
          url: this.$urls.agreement.APP_PRIVACY,
          replace: replace,
          upload: true,
        }
      });
    },
    userPhoneBlur() {
      if (this.statisticsTempData.focusTime > 0) {
        let blurTime = Date.now() - this.statisticsTempData.focusTime;
        this.statistics.sign_in_enter_phone_times += blurTime;
      }
      if (this.statisticsTempData.focusStr !== this.userPhone) {
        this.statistics.sign_in_modify_phone++;
      }
    },
    userPhoneFocus() {
      this.statisticsTempData.focusTime = Date.now();
      this.statisticsTempData.focusStr = this.userPhone;
    },
    onVerCodeChange() {
      if (this.statisticsTempData.verCodeInputTime == 0) {
        this.statisticsTempData.verCodeInputTime = Date.now();
        let inputTime = this.statisticsTempData.verCodeInputTime - this.statisticsTempData.sendCodeTime;
        this.statistics.sign_in_OTP_times = inputTime;
      }
    },
  },
}
</script>

<style scoped lang="less">
.confirm-btn{
  position: absolute;
  bottom: 0vw;
  left: 4vw;
  right: 4vw;
  padding: 4vw 0vw;
  background: white;
}
.pop-agreement-detail {
  position: relative;
  width: 92vw;
  height: 80vh;
  background: white
}
.privacy-txt {
  text-align: left;
  margin-left: 11vw;
  color: #595959;
  text-decoration: underline
}

.login-bg {
  .top-title {
    color: white;
    font-size: 20px;
    padding: 20px 0;
  }

  text-align: left;
  background-size: 100% 100%;
  height: 82vw;
}

.login-tip {
  font-size: 14px;
  text-align: left;
  background: rgba(96, 108, 255, 0.05);
  border-radius: 3px;
  border-left: 3px solid #FFB24D;
  padding: 5px;
  margin: 26px 0px 80px;
}

.voice-click {
  color: #262626;
  text-decoration: underline;
}

.send-con {
  font-weight: 400;
  color: #999999;

  .send-btn {
    text-decoration: underline;
    color: var(--van-primary-color);
  }
}

.top-bar {
  .bar-text {
    font-size: 18px;
    font-weight: bold;
    color: white;
  }

  position: fixed;
  display: flex;
  align-items: center;
  padding: 16px;
  width: 100%;
}

.input-area {
  .top-logo {
    width: 100px;
    height: 100px;
    margin: 24px 0;
  }

  .tip-txt {
    margin-top: 10px;
    margin-left: 10px;
  }

  .text-con {
    .txt-field {
      height: 44px;
      background: transparent;
    }

    padding: 0 12px;
    margin: 26px 0;
    display: flex;
    align-items: center;
    border-radius: 8px;
    background: #F9F9F9;
    border: none;
  }

  text-align: left;
  color: #999999;
  padding: 8vw 4vw 4vw;
  margin-top: -42vw;
  background: white;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
}

.top-con {
  .bottom-btn {
    width: 56%;
    margin: 10px 0;
  }

  min-height: 100vh;
  text-align: center;
  background: #ffffff;
}
</style>

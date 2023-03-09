<template>
  <div>
    <van-nav-bar  :title="$t('settings')" @click-left="_routerBack" placeholder>
      <template slot="left">
        <van-icon name="static/img/com_nav_ic_back_white.png" size="22"/>
      </template>
    </van-nav-bar>

    <!--列表内容-->

      <van-cell @click="jumpPolicyAgreement" center title-class="title-style" :title="$t('privacy_agreement')"  is-link style="margin-top: 5px">
        <div slot="icon" style="display: flex;justify-content: center">
            <van-image width="24px" src="static/img/setting_ic_privacy_policy.png"/>
        </div>
      </van-cell>
      <van-cell @click="onVersionClick" center title-class="title-style" value-class="val-cls" :value="'v ' + (this.$dsBridge.call('syn.getAppVersion', '') || '1.0.0')" title="Version"  style="margin-top: 5px">
        <div slot="icon" style="display: flex;justify-content: center">
          <van-image width="24px" src="static/img/setting_ic_version.png"/>
        </div>
      </van-cell>

      <div v-if="isLogin" class="align-center exit-txt" @click="onLogoutClick">
        <van-image width="24px" src="static/img/setting_ic_logout.png"/>
        <div style="margin-left: 8px">{{$t('logout')}}</div>
      </div>

     <div v-if="isTestPage" @click="_routePush('FactoryMain')" style="width: 100vw;height: 50px;position: fixed;bottom: 0">
    </div>
  </div>
</template>

<script>
  export default {
    name: "set-page",
    computed:{
      isLogin(){
        return this._isLogin();
      },
      isTestPage(){
        return this._isTest();
      }
    },
    data() {
      return {
      };
    },
    methods: {
      jumpPolicyAgreement(){
        this._routePush('PolicyAgreement')
      },
      onVersionClick() {
        this._showToast(this.h5VersionInfo);
        this.hideCode += '0';
      },
      onLogoutClick() {
        this._showConfirm('Log Out?', () => {
          this._routeReplace('LogoutPage')
        }, () => {
        })
      },
    },
  }
</script>

<style scoped lang="less">
  .val-cls{
    color: #595959;
    font-size: 14px;
  }
  .exit-txt{
    display: flex;
    margin-top: 53px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: white;
    padding:10px 0px;
    font-size: 16px;
    font-weight: bold;
    color: #FF5C35;
  }
  .list-con {
    margin-top: 5px;
    background: white;
  }
  .title-style{
    font-size: 16px;
    color: #333333;
    font-weight: bold;
    margin-left: 10px;
  }

  .top-bar {
    .bar-text {
      font-size: 18px;
      font-weight: bold;
      color: #333333;
    }
    position: fixed;
    display: flex;
    align-items: center;
    height: 59px;
    padding: 0 16px;
    width: 100%;
    background: white;
  }
</style>

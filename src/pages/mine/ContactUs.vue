<template>
  <div>

    <van-nav-bar  :title="$t('contact_us')" @click-left="_routerBack" placeholder>
      <template slot="left">
        <van-icon name="static/img/com_nav_ic_back_white.png" size="22"/>
      </template>
    </van-nav-bar>


    <van-cell @click="onPhoneClick(hotline)" size="large"   center title-class="title-style" :title="$t('custmoer_hotline')" value-class="val-cls" :value="hotline"   style="margin-top: 13px">
      <div slot="icon" style="display: flex;justify-content: center">
        <van-image width="24px" src="static/img/about_us_ic_customer.png"/>
      </div>
    </van-cell>
    <a :href="'mailto:' + email">
    <van-cell size="large"  center title-class="title-style" :title="$t('customer_service_email')" value-class="val-cls" :value="email"  style="margin-top: 5px">
      <div slot="icon" style="display: flex;justify-content: center">
        <van-image width="24px" src="static/img/about_us_ic_email.png"/>
      </div>
    </van-cell>
    </a>
  </div>
</template>

<script>
  export default {
    name: "ContactUs",
    data() {
      return {
        email: 'help@ambercash.com',
        hotline: '+254207903622',
      };
    },
    methods: {
      onPhoneClick(it) {
        window.location.href = "tel:" + it;
      },
    },
  }
</script>

<style scoped lang="less">
  .title-style{
    font-size: 16px;
    color: #333333;
    font-weight: bold;
    margin-left: 10px;
  }
  .val-cls{
    color: #595959;
    font-size: 14px;
  }
  .list-con {
    .list-title {
      font-weight: bold;
      font-size: 16px;
      margin: 16px 0 0 16px;
      color: #333333;
    }
    .list-div {
      padding: 0 16px;
      color: #dddddd;
      margin: 0;
    }
    .list-item {
      .list-txt {
        flex: 1;
        font-size: 15px;
        font-weight: 500;
        color: #333333;
      }
      display: flex;
      padding: 14px 16px;
      align-items: center;
      justify-content: space-between;
    }
    padding-top: 59px;
    background: white;
  }

  .list-item:active {
    background: #fcfcfc;
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

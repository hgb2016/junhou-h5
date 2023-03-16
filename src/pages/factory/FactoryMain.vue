<template>
  <div>
    <van-nav-bar left-arrow  @click-left="_routerBack" title="Test Case" fixed :z-index="10"></van-nav-bar>
    <div class="navbar-con-16">
      <van-cell-group>
        <van-cell title="Copy Test" is-link  @click="_routePush('FactoryCopy')"></van-cell>
        <van-cell title="QR Scan" is-link @click="onQRScanClick"></van-cell>
        <van-cell title="Face Detect" is-link @click="onFaceLiveClick"></van-cell>
        <van-cell title="Take Photo" is-link @click="onTakePhotoClick"></van-cell>
        <van-cell title="Fill UserInfo" is-link @click="onFillUserInfo"></van-cell>
        <van-cell title="LiveDetectPage" is-link to="LiveDetectPage"></van-cell>
      </van-cell-group>
    </div>


  </div>
</template>

<script>
  import {Dialog} from 'vant';

  export default {
    name: "factory-main",
    data() {
      return {
        showImageDialog: false,
        imageDialogData: '',
      };
    },
    methods: {
      onFillUserInfo(){
        this._routePush("FactoryInfoFill")
      },
      onTakePhotoClick(){
        this.$dsBridge.call('startTakePhoto', '', res => {
          if (res) {
            this.imageDialogData = res;
            this.showImageDialog = true;
          } else {
            this._showToast('Failed');
          }
        });
      },
      onFaceLiveClick() {
        this.$dsBridge.call('startLiveDetect', '', res => {
          if (res) {
            this.imageDialogData = res;
            this.showImageDialog = true;
          } else {
            this._showToast('Failed');
          }
        });
      },
      onQRScanClick() {
        this.$dsBridge.call('startQRScan', '', res => {
          if (res) {
            Dialog({message: res});
          } else {
            this._showToast('Failed');
          }
        });
      }
    },
  }
</script>

<style scoped>
  .dialog-img {
    max-width: 100%;
    height: auto;
  }
</style>

<template>
  <div>
    <van-nav-bar left-arrow @click-left="_routerBack" title="Test Case" fixed :z-index="10"></van-nav-bar>
    <div class="navbar-con-16">
      <van-cell-group>
        <van-cell title="Fill in information with one click" is-link @click="onSubmitInfoTest"></van-cell>
        <van-cell center title="Show login information" >
          <van-switch v-model="loginInfoChecked" />
        </van-cell>
        <van-cell center title="Show param information" >
          <van-switch v-model="showParamString" />
        </van-cell>
      </van-cell-group>
      <div style="margin: 10px;padding: 10px;background: white"  v-if="loginInfoChecked">
        {{loginData}}
      </div>
      <div style="margin: 10px;padding: 10px;background: white"  v-if="showParamString">
        {{this.$http.getParams()}}
      </div>
    </div>

    <!--图片显示弹窗-->
    <van-dialog v-model="showImageDialog" class="align-center padding10">
      <img :src="imageDialogData" class="dialog-img">
    </van-dialog>
  </div>
</template>

<script>
  import {Dialog} from 'vant';
  import {mapState} from "vuex";

  export default {
    name: "factory-info-fill",
    data() {
      return {
        loginInfoChecked:false,
        showParamString:false,
        showImageDialog: false,
        imageDialogData: '',
        imgNames: ['id_facade_image', 'id_back_image', 'id_handhold_image'],
        photosInfo: {},
        userInfo: {
          first_name:"ad",
          middle_name:"dad",
          last_name:"dqd",
          full_name:"ad dad dqd",
          birthdate: "1995-03-01",
          certifier_name: "ljdaksd",
          certifier_phone: "0766909257",
          com_address_detail: "ajdhjahdjsahd",
          com_address_str: "ajdhjahdjsahd Mandera East Mandera",
          com_city_id: "695",
          com_city_name: "Mandera East",
          com_province_id: "361",
          com_province_name: "Mandera",
          company_name: "dlsakdad",
          company_telephone: "02138293273",
          contacts: [{
            create_time: "2021-05-07 14:20:07",
            customer_id: 22,
            first_name: null,
            full_name: "dqsda",
            id: 135,
            last_name: null,
            middle_name: null,
            phone: "0567644644",
            phone_num: "0567644644",
            relation: 3,
            update_time: null,
          }, {
            create_time: "2021-05-07 14:20:08",
            customer_id: 22,
            first_name: null,
            full_name: "4131",
            id: 136,
            last_name: null,
            middle_name: null,
            phone: "0571282277",
            phone_num: "0571282277",
            relation: 6,
            update_time: null,
          }],
          id_num_type:1,
          education: 4,
          email: "231839@qq.com",
          facebook: "dmaksd",
          gender: 1,
          id_num: "079095367333",
          income: 3,
          industry_id: 2,
          job_id: 3,
          job_name: "dadf",
          live_address_detail: "fafdf",
          live_address_str: "fafdf Laisamis Marsabit",
          live_city_id: "700",
          live_city_name: "Laisamis",
          live_province_id: "362",
          live_province_name: "Marsabit",
          marital_status: 2,
          work_duration: 1,

        }
      };
    },
    computed:{
      ...mapState(['loginData'])
    },
    methods: {
      setImageRes(idx, res) {
        if (res) {
          let name = this.imgNames[idx];
          this.photosInfo[name] = res;
        } else {
          this._showToast('Take Photo Failed!');
        }
      },
      onSubmitInfoTest() {
        this.userInfo.id_num=this._randomIdNum();
        console.log(this.userInfo.id_num)
        this.setImageRes(0, this.$mock.SIMPLE_PNG_DATA)
        this.setImageRes(1, this.$mock.SIMPLE_PNG_DATA)
        this.setImageRes(2, this.$mock.SIMPLE_PNG_DATA)
        this.setImageRes(3, this.$mock.SIMPLE_PNG_DATA)
        let fileInfo = {};
        for (let idx in this.imgNames) {
          let name = this.imgNames[idx];
          let ph = this.photosInfo[name];

          if (ph && !ph.startsWith('http')) {
            fileInfo[name] = this._dataURLtoBlob(ph);
          }
        }
        let params = {
          ...this.userInfo,
        };
        params.contacts = JSON.stringify(this.userInfo.contacts);
        //提交基本信息
          this._showLoading();
          this.$http({
            method: 'post',
            url: this.$urls.info.UPDATE_BASEINFO,
            data: {
              ...params,
            },
            files: fileInfo,
          }).then(res => {
            this._dismissLoading();
            this._showIconToast(this.$t('success'),
              'static/img/log_in_dialogs_ic_success.png','toast-width')
            // this._showToast(this.$t('success'));
          }).catch(err => {
            this._dismissLoading();
            this._showToast(err.msg);
          });
        },
      },
  }
</script>

<style scoped>
  .dialog-img {
    max-width: 100%;
    height: auto;
  }
</style>

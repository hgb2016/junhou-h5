<template>
  <div class="f-c-ac-jc">
      Home
  </div>
</template>

<script>
import { mapState } from 'pinia'
import {useStore} from "@/store";

export default {
  name: "tab-my-apply",
  computed:{
    ...mapState(useStore,['userInfo','applyInfo','loginData'])
  },
  setup(){
    const store= useStore();
    return{
      store
    }
  },
  mounted() {
  },
  methods:{
    jump(){
      this._routePush('FactoryMain');
    },
    setData() {
      this.store.userInfo = "Tangbull";
      this.store.applyInfo = this.$mock.TEST_COMMON_PARAMS;
      this.store.loginData = "1241";
    },
    clearData(){
      this.store.$reset();
    }
  }
}
</script>

<style scoped lang="less">

</style>

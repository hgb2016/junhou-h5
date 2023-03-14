<template>
  <div>

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
    setData() {
      this.store.userInfo = "dkasjdkaj";
      this.store.applyInfo = {data:"我是"};
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

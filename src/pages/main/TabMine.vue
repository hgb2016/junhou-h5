<template>
  <div class="f-c-ac-jc">
    <div>Mine</div>
  </div>
</template>

<script>
import {mapState} from "pinia/dist/pinia";
import {useStore} from "@/store";

export default {
  computed:{
    ...mapState(useStore,['userInfo','applyInfo','loginData'])
  },
  name: "TabMine",
  data() {
    return {
    };
  },

  methods: {

  }
}
</script>

<style scoped lang="less">

</style>

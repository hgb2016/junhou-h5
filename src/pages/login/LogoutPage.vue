<template>
  <div>
  </div>
</template>

<script>
  import {useStore} from "@/store";

  export default {
    name: "logout-page",
    mounted() {
      this._clearHistory();
      localStorage.clear();
      sessionStorage.clear();
      const store= useStore();
      store.$reset();
      this.$dsBridge.call('syn.logout', '');
      // 回到闪屏
      setTimeout(() => {
        localStorage.removeItem('paramString')
        this._routeReplace('SplashPage');
      }, 300);
    },
  }
</script>

<style scoped>
</style>

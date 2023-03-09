<template>
  <div>
  </div>
</template>

<script>
  export default {
    name: "logout-page",
    mounted() {
      this._clearHistory();
      localStorage.clear();
      sessionStorage.clear();
      this.$store.commit('resetState');
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

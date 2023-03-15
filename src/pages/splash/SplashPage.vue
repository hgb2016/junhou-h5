<template>
  <div>
<!--    <van-image src="img/guide/ad_page.jpg" class="splash-img" fit="cover"/>-->
  </div>
</template>

<script>
  export default {
    name: "SplashPage",
    mounted() {
      this._routePush('PhoneLogin');
    },
  }
</script>

<style scoped lang="less">
  .splash-img {
    width: 100vw;
    height: 100vh;
  }
</style>

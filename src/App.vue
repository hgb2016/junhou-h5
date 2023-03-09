<template>
  <van-config-provider :theme-vars="themeVars">
  <div id="app">
    <!--缓存的页面-->
    <router-view v-slot="{ Component }" v-if="$route.meta.keepAlive">
      <transition name="van-fade">
        <keep-alive>
          <component :is="Component"/>
        </keep-alive>
      </transition>
    </router-view>
    <!--不缓存的页面-->
    <router-view v-slot="{ Component }" v-if="!$route.meta.keepAlive">
      <transition name="van-fade">
        <component :is="Component"/>
      </transition>
    </router-view>
  </div>
  </van-config-provider>
</template>

<script>
  export default {
    name: "app",
    setup(){
      const themeVars = {
        primaryColor:"#FFB24D"
      };

      return {
        themeVars
      }
    }

  }
</script>


<style scoped lang="less">

  #app {
    background-color: #f7f7f7;
    height: 100vh;
    overflow-y: hidden;
  }
</style>

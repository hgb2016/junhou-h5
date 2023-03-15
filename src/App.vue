<template>
  <van-config-provider  :theme-vars="themeVars">
    <div id="app">
      <var-loading description="Loading" color="#FFB24D" size="large" type="cube" :loading="store.isLoading">
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
      </var-loading>
    </div>
  </van-config-provider>
</template>

<script>
import {StyleProvider} from '@varlet/ui'
import {useStore} from "@/store";

export default {
  name: "app",
  setup() {
    const store=useStore()

    const themeVars = {
      '--van-blue': "#FFB24D",//vant主题色
      '--color-primary': '#FFB24D', //varlet主题色
    };
    StyleProvider(themeVars)
    return {
      themeVars,
      store
    }

  },
  computed:{

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

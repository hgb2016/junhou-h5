<template>
  <div>
    <!--缓存的页面-->
    <router-view v-slot="{ Component }" v-if="$route.meta.keepAlive" class="main-router-view">
      <keep-alive>
        <component :is="Component"/>
      </keep-alive>
    </router-view>
    <!--不缓存的页面-->
    <router-view v-slot="{ Component }" v-if="!$route.meta.keepAlive" class="main-router-view">
      <component :is="Component"/>
    </router-view>
    <!--下方的TabBar-->
    <van-tabbar v-model="tabBarSelect" safe-area-inset-bottom fixed>
      <!--TabBar项目-->
      <van-tabbar-item v-for="(it, i) in tabItemList" :key="i" :to="it.to" replace>
        <div class="tab-txt">{{$t(it.name)}}</div>
        <template #icon="props">
          <van-icon :name="getTabIconSrc(it,props.active)" :badge="getBadgeTxt(it, i)" class="icon-img"/>
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
  export default {
    name: "MainPage",
    watch: {
      '$route'() {
        this.checkTabSelection();
      }
    },
    computed: {
      getBadgeTxt() {
        return (it, idx) => {
          if (idx == 2) {
            return 21;
          }
        }
      },
      // 获取图标资源
      getTabIconSrc() {
        return (item, active) => {
          let img = active ? item.active : item.normal;
          return 'img/tabs/' + img;
        }
      },
    },
    data() {
      return {
        tabBarSelect: 0,
        // Tab栏数据
        tabItemList: [
          {
            active: 'nav_ic_home_sel.png',
            normal: 'nav_ic_home_nor.png',
            name: 'tab_home',
            to: "home"
          },
          {
            active: 'nav_ic_mine_sel.png',
            normal: 'nav_ic_mine_nor.png',
            name: 'tab_mine',
            to: "mine"
          },
        ],
      };
    },
    methods: {
      // 看一下tab栏应给高亮哪一个
      checkTabSelection() {
        for (let i = 0; i < this.tabItemList.length; i++) {
          let p = this.tabItemList[i];
          if (this.$route.path.endsWith(p.to)) {
            this.tabBarSelect = i;
          }
        }
      }
    },
    mounted() {
      this.checkTabSelection();
    }
  }
</script>

<style scoped lang="less">
  .tab-txt {
    text-align: center;
    margin-top: -2px;
  }

  .main-router-view {
    height: calc(100vh - 50px);
    overflow-y: auto;
    box-sizing: border-box;
    background-color: #f8f8f8;
  }

  .icon-img {
    margin-bottom: -1px;
  }
</style>

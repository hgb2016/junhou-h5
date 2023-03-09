import {createRouter, createWebHashHistory} from 'vue-router';

const SplashPage = () => import('../pages/splash/SplashPage');
const MainPage = () => import('../pages/main/MainPage');
const TabHome = () => import('../pages/main/TabHome');
const TabMine = () => import('../pages/main/TabMine');
const FactoryMain = () => import('../pages/factory/FactoryMain');
const GuidePage = () => import('../pages/splash/GuidePage');
const PhoneLogin = () => import('../pages/login/PhoneLogin');
const FactoryTranslation = () => import('../pages/factory/FactoryTranslation');
const ContactUs = () => import('../pages/mine/ContactUs');
const SetPage = () => import('../pages/mine/SetPage');


const routes = [
  {path: '/:pathMatch(.*)*', redirect: 'SplashPage'},
  {name: 'SplashPage', component: SplashPage},
  {
    name: 'main', redirect: '/main/home', component: MainPage,
    children: [
      {name: 'home', path: 'home', component: TabHome, meta: {keepAlive: true}},

      {name: 'mine', path: 'mine', component: TabMine, meta: {keepAlive: true}},
    ], meta: {keepAlive: true}
  },
  {name: 'GuidePage', component: GuidePage},
  {name: 'FactoryMain', component: FactoryMain},
  {name: 'PhoneLogin', component: PhoneLogin},
  {name: 'SetPage', component: SetPage},
  {name: 'ContactUs', component: ContactUs},
  {name: 'FactoryTranslation', component: FactoryTranslation},
];

// 懒得写path，给他们自动生成一个，和name同名
routes.forEach(route => {
  route.path = route.path || '/' + (route.name || '');
});

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

// 生命周期之前
router.beforeEach((to, from, next) => {
  // 保存个路由来路，以备不时之需
  localStorage.setItem('fromPage', from.name);
  next();
});

//生命周期之后
router.afterEach((to, from) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  } else {
    document.title = 'Jun Hou';
  }
  // 滑动到顶吧
  window.scrollTo(0, 0);
});

export {router};

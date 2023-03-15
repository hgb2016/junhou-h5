import {createApp} from 'vue';
import { ConfigProvider } from 'vant';
import App from './App.vue';
import {createPinia} from 'pinia'
import {router} from './router';
import VueMixin from './mixins/VueMixin';
import i18n from './locales'
import stream from './http';
import urls from './http/urls';
import dsBridge from './jsbridge/dsBridge'
import {bridge, bridgeEx} from './jsbridge';
import ConstData from "@/constants/ConstData";
import 'vant/lib/index.css';
import 'vant/es/toast/style';
import 'vant/es/dialog/style';
import 'vant/es/notify/style';
import 'vant/es/image-preview/style';
import './style/common.less'
import mock from "@/mock";

const app = createApp(App);
app.use(router);
app.use(i18n);
app.mixin(VueMixin);
app.use(ConfigProvider)
app.use(createPinia())

app.config.globalProperties.$http = stream;
app.config.globalProperties.$urls = urls;
app.config.globalProperties.$dsBridge = dsBridge;
app.config.globalProperties.$bridge = bridge;
app.config.globalProperties.$bridgeEx = bridgeEx;
app.config.globalProperties.$ConstData = ConstData;
app.config.globalProperties.$mock = mock;
app.mount('#app');

import {createI18n} from 'vue-i18n/dist/vue-i18n.cjs.js'
import AppString from './strings';
import VantLocal from './VantLocal';
import VarletLocal from './VarletLocal';

// 解析语言数组
function getZhEnMessage() {
  let message = {zh: {}, en: {}};
  Object.keys(AppString).forEach(function (key) {
    message.zh[key] = AppString[key][0];
    message.en[key] = AppString[key][1];
  });
  return message;
}

const i18n = createI18n({
  messages: getZhEnMessage(),
  locale: 'zh'
});

i18n.reload = () => {
  let local = 'zh';
  if (window.localStorage.getItem('language') === 'en') {
    local = 'en';
  }
  VantLocal.setLocal(local);
  VarletLocal.setLocal(local);
  i18n.locale = local;
};

i18n.reload();
VarletLocal.initLocal();

export default i18n;

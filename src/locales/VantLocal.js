import {Locale} from 'vant';
import enUS from 'vant/lib/locale/lang/en-US';
import zhCN from 'vant/lib/locale/lang/zh-CN';

export default {
  setLocal(local) {
    if (local == 'en') {
      Locale.use('en-US', enUS);
    } else {
      Locale.use('zh-CN', zhCN);
    }
  }
}

import {Locale} from '@varlet/ui'
import enUS from '@varlet/ui/es/locale/en-US'
import zhCN from '@varlet/ui/es/locale/zh-CN';

export default {
  initLocal() {
    Locale.add('en-US', enUS);
    Locale.add('zh-CN', zhCN)
  },
  setLocal(local) {
    if (local == 'en') {
      Locale.use('en-US')
    } else {
      Locale.use('zh-CN')
    }
  }
}

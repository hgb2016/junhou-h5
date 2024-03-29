import {defineStore} from "pinia";
//参数1：定义一个仓库的唯一id名，Pinia会将所有的容器挂载到根容器；参数2：选项对象
export const useStore = defineStore('main', {
  state: () => {
    return {
      // 登录信息
      loginData: null,
      // 申请信息
      applyInfo: null,
      // 用户信息
      userInfo: null,
      // 当前账单
      currentBill: null,
      //是否
      isLoading: false
    }
  },
  getters: {
    //函数接受一个可选参数:state

    // count10(state){return state.count + 10}
    /*count10():number{   //在TS文件下，getters使用了this,则必须指定类型，否则会导致推导错误
      return this.count += 12
    }*/
  },
  actions: {}
})

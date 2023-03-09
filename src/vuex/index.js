
import Vuex from 'vuex';
import {createApp} from 'vue';
import App from "@/App";
import {router} from "@/router";

const app = createApp(App);
app.use(router);

const getInitialState = () => {
  return {
    // 登录信息
    loginData: null,
    // 申请信息
    applyInfo: null,
    // 用户信息
    userInfo: null,
    // 当前账单
    currentBill: null,
    //当前优惠券
    currentCoupon:null,
    //预授信
    cashCreditPre:null,
    //白名单用户信息
    whiteCustomer:null
  }
};

// 全局state
const state = getInitialState();


// setters方法
const mutations = {
  // 清空数据
  resetState(state) {
    Object.assign(state, getInitialState())
  },
  setApplyInfo(state, data) {
    state.applyInfo = data;
  },
  // 设置登录信息
  setLoginData(state, data) {
    state.loginData = data;
  },
  setUserInfo(state, data) {
    state.userInfo = data;
  },
  setCurrentBill(state, data) {
    state.currentBill = data;
  },
  setCurrentCoupon(state, data) {
    state.currentCoupon = data;
  },
  setWhiteCustomer(state, data) {
    state.whiteCustomer = data;
  },
  setCashCreditPre(state, data) {
    state.cashCreditPre = data;
  },
};

// getters方法
const getters = {};

const actions = {};

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
});

export default store;

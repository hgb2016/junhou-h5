export default {
  login: {
    LOGIN_PWD: '/api/v1/custom/login_pwd',
    LOGIN_VER_CODE: '/api/v1/custom/login',
    USER_REGISTER: '/api/v1/custom/register',
    RESET_PWD: '/api/v1/custom/forget_pwd',
    SEND_VER_CODE: '/api/v1/custom/send_verify_code',
  },
  agreement: {
    APP_PRIVACY: '/mykes/privacyPolicy',
    CASH_APPLY_AGREEMENT: '',
  },
  config: {
    GENERAL_CONFIG: '',
    GET_PRODUCTS_CONFIG: '/api/v1/config/products',
    PRODUCTS_CONFIG_confirm: '/api/v1/forward/20200922/A/confirm',
    GET_PARAMS_CONFIG: '/api/v1/customer/param',
    CASH_CREDIT_CONFIG: '/api/v1/config/cashcredit',
    GET_OPERATOR_URL: '',
    GET_PAGE_CONFIG_0621: '',
    EXPORT_CASH_CONFIG: '',
  },
  repay: {
    REPAY_CASH_LOAN: '/api/v1/cashCredit/payment',
    POST_REPAY_NUMBER: '/api/v1/cashCredit/repaidNumber',
    UPDATE_BANK_ACCOUNT: '/api/v1/cashCredit/bankAccount',
  },
  user: {
    FB_LOGIN: '',
    SEND_OUR_VERIFY_CODE: '',
    VERIFY_OUR_LOGIN_CODE: '',
    GET_ACCOUNT_INFO: '/api/v1/account/info',
    ORIGINAL_PERSONAL_INFO: '/api/v1/customer/originalPersonalInfo',
  },
  loan: {
    GET_COUPON_LIST: '/api/v1/customer/getCouponList',
    COUPON_REAL_RECEIVE: '/api/v1/customer/coupon/realReceive',
    GET_CURRENT_BILL: '/api/v1/customer/currentBill',
    LOAN_APPLY: '/api/v2/cashCredit/apply',
    LOAN_CASHCREDITPRE_APPLY: '/api/v2/cashCredit/pre/confirm',
    GET_BILL_LIST: '',
    GET_APPLY_LIST: '/api/v1/customer/applicationList',
    GET_APPLY_DETAIL: '',
    CHANGE_BANK_CARD: '',
    CHANGE_E_WALLET: '',
    REPAY_PAYMENT_CODE: '',
    DRAGON_REPAY_CODE: '',
    GET_NOTIFY_PAY_CODE: '',
    EXPORT_LOAN_APPLY: '',
    FACE_FAILURE_REPORT: '/api/v1/customer/face_failure_report',//人脸识别失败上报
  },
  bind: {
    GET_BIND_REWARD_INFO: '',
    DRAW_BIND_INCOME: '',
  },
  address: {
    GET_ADDRESS_LIST: '/api/v1/config/getLocationList'
  },
  info: {
    UPDATE_BASEINFO: '/api/v1/customer/update',
    UPDATE_BASE_INFO_V2: '',
    UPLOAD_TD_CRAWL_PWD: '',
    TD_QUERY_AUTH: '',
    UPDATE_EXPORT_USER_INFO: '',
  },
  share: {
    GET_APP_SHARE_DATA: '',
    GET_WITHDRAW_INFO: '',
    BIND_WITHDRAW_WALLET: '',
    DO_WITHDRAW_MONEY: '',
    GET_APPLY_REWARD_CONFIG: '',
    GET_BONUS_0614_LIST: '',
    GET_INVITED_LIST: '',
    GET_WITHDRAW_RECORD: '',
    DRAW_BIND_BANK_CARD: '',
    DOWNLOAD_GCASH_APP: '',
  },
  export: {
    DOWNLOAD_EXPORT_APP_apesa: 'https://play.google.com/store/apps/details?id=com.fintech.apesa',
    DOWNLOAD_EXPORT_APP_asapkash: 'https://play.google.com/store/apps/details?id=com.fintech.asapkash',
    SIMPLE_IMG_DATA: '',
  },
  events: {
    POST_EVENT_URL: '/api/v1/event/report',
    POST_EVENT_List_URL: '/api/v1/event/report/batch',
  },
  feedback:{
    FEEDBACK_ADD:'/api/v1/feedback/add',
    FEEDBACK_REPLY:'/api/v1/feedback/reply',
    FEEDBACK_RECORD:'/api/v1/feedback/record'
  }

};

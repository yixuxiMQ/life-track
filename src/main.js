import Vue from "vue";
import App from "./App.vue";
// 引入路由
import router from "@/router";
import store from '@/store'

import "@/assets/styles/resets.css";
import "@/assets/styles/border.css";
import "@/assets/styles/common.scss";
import "@/assets/js/fastclick.js";
import "@/assets/js/common.js";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  // 注册路由
  router,
  store
}).$mount("#app");

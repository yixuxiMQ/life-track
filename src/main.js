import Vue from "vue";
import App from "./App.vue";
// 引入路由
import router from "@/router";
import store from "@/store";

import "styles/resets.css";
import "styles/border.css";
import "styles/common.scss";
import "styles/iconfont.css";
import "js/common.js";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  // 注册路由
  router,
  store,
}).$mount("#app");

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/css/style.css";
import "./assets/icon/iconfont.css"
import "./assets/mui/css/mui.css"

import Mint from "mint-ui"
Vue.use(Mint)

import { Header, Tabbar, TabItem } from 'mint-ui'
Vue.use(Header).use(Tabbar).use(TabItem)

import "swiper/dist/css/swiper.css";
import "vant/lib/index.css"
import vant from 'vant';

Vue.use(vant);

Vue.config.productionTip = false;

import mui from "./assets/mui/js/mui.js";
Vue.prototype.$mui = mui

new Vue({
  router,
  store,
  watch: {
    "$route.path": function (newPath, oldPath) {
      // console.log("newPath---" + newPath);
      // console.log("oldPath---" + oldPath);
      this.$store.state.oldPath = oldPath
      if (oldPath == "/DingDanXQ") {
        this.$store.state.oldPath = "/Home"
      }
    }
  },
  render: h => h(App)
}).$mount("#app");

import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Dingdan from "./views/Dingdan.vue";
import Faxian from "./views/Faxian.vue";
import Wode from "./views/Wode.vue";
import Yindaoye from "./views/Yindaoye.vue"
import Business from "./views/Business.vue"
import TuPiao from "./views/TuPiao.vue"
import DingDanXQ from "./views/DingDanXQ.vue"
import Gg from "./views/Gg.vue"
import Address from "./views/Address.vue"
import AddressList from "./views/AddressList.vue"
import Guizezhongxian from "./views/Guizezhongxian.vue"
import HomeAddress from "./views/HomeAddress.vue"
import Wodekefu from "./views/Wodekefu.vue"
import Jingbishangcheng from "./views/Jingbishangcheng.vue"

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      redirect: "/Yindaoye"
    },
    {
      path: "/Home",
      component: Home
    },
    {
      path: "/Dingdan",
      component: Dingdan
    },
    {
      path: "/Faxian",
      component: Faxian
    },
    {
      path: "/Wode",
      component: Wode
    },
    {
      path: "/Yindaoye",
      component: Yindaoye
    },
    {
      path: "/Business",
      component: Business
    },
    {
      path: "/TuPiao",
      component: TuPiao
    },
    {
      path: "/DingDanXQ",
      component: DingDanXQ
    },
    {
      path: "/Gg",
      component: Gg
    },
    {
      path: "/Address",
      component: Address
    },
    {
      path: "/AddressList",
      component: AddressList
    }, {
      path: "/Guizezhongxian",
      component: Guizezhongxian
    },
    {
      path: "/HomeAddress",
      component: HomeAddress
    },
    {
      path: "/Wodekefu",
      component: Wodekefu
    },
    {
      path: "/Jingbishangcheng",
      component: Jingbishangcheng
    }
  ],
  linkActiveClass: 'is-selected'
});

<template>
  <div id="app">
    <!-- 头部 -->
    <!-- <mt-header fixed title="我的商城"></mt-header> -->
    <!-- 头部 end -->
    <!-- 内容 -->
    <transition mode="out-in">
      <router-view />
    </transition>
    <!-- 内容 end -->
    <!-- 底部 -->
    <div class="mint-tabbar is-fixed" v-show="tabbarshow">
      <router-link to="/Home" class="mint-tab-item">
        <div class="mint-tab-item-icon">
          <span class="iconfont icon-changyonglogo40"></span>
        </div>
        <div class="mint-tab-item-label">外卖</div>
      </router-link>
      <router-link to="/Faxian" class="mint-tab-item">
        <div class="mint-tab-item-icon">
          <span class="iconfont icon-faxian"></span>
        </div>
        <div class="mint-tab-item-label">发现</div>
      </router-link>
      <router-link to="/Dingdan" class="mint-tab-item">
        <div class="mint-tab-item-icon">
          <span class="iconfont icon-dingdan"></span>
        </div>
        <div class="mint-tab-item-label">订单</div>
      </router-link>
      <router-link to="/Wode" class="mint-tab-item">
        <div class="mint-tab-item-icon">
          <span class="iconfont icon-wode"></span>
        </div>
        <div class="mint-tab-item-label">我的</div>
      </router-link>
    </div>
    <!-- 底部 end -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabbarshow: true
    };
  },
  watch: {
    "$route.path": function(newpath, oldpath) {
      if (
        newpath == "/Business" ||
        newpath == "/DingDanXQ" ||
        newpath == "/Gg" ||
        newpath == "/Address" ||
        newpath == "/AddressList" ||
        newpath == "/HomeAddress"
      ) {
        this.tabbarshow = false;
      } else {
        this.tabbarshow = true;
      }
    }
  }
};
</script>

<style lang="scss">
#app {
  // padding-top: 40px;
  padding-bottom: 55px;
  overflow: hidden;
}
.mint-tabbar {
  .icon-changyonglogo40 {
    font-size: 30px;
  }
  .icon-dingdan {
    font-size: 20px;
  }
  .icon-faxian {
    font-size: 20px;
  }
  .icon-wode {
    font-size: 20px;
  }
}
.v-enter {
  opacity: 0;
  transform: translateX(100%);
}
.v-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}
.clearfix::before,
.clearfix::after {
  display: block;
  content: "";
  clear: both;
}
</style>

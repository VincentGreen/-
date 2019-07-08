<template>
  <div id="gzzx">
    <van-nav-bar title="资质与规则" left-arrow @click-left="onClickLeft" />
    <van-cell-group>
      <van-cell title="营业资质" />
      <van-cell title="服务承诺" />
      <van-cell title="公示栏" is-link />
      <van-cell title="饿了么平台规则" is-link />
      <van-cell title="餐饮中心规则" is-link />
      <van-cell title="非餐中心规则" is-link />
      <van-cell title="政府信息公示" is-link />
    </van-cell-group>
  </div>
</template>

<script>
export default {
  methods: {
    onClickLeft() {
      this.$router.push("/Wode");
    }
  }
};
</script>

<style lang="scss">
</style>


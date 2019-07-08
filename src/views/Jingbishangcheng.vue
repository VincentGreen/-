<template>
  <div>
    <van-nav-bar title="金币商城" left-arrow @click-left="onClickLeft" />
    <van-cell-group>
      <van-cell title="我的金币数量" value="8" />
      <van-cell title="金币商城" />
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

<style>
</style>

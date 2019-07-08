<template>
  <div>
    <van-nav-bar title="我的客服" left-arrow @click-left="onClickLeft" />
    <van-cell-group>
      <van-cell title="常见问题" />
      <van-cell title="询问客服" />
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

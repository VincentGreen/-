<template>
  <div class="gg">
    <div class="num">
      <h1>{{num}}</h1>
    </div>
    <img src="../assets/img/ydy1.jpg" alt />
  </div>
</template>

<script>
import { setInterval, clearInterval } from "timers";
export default {
  data() {
    return {
      num: 3,
      cleardata: null
    };
  },
  created() {
    this.cleardata = setInterval(() => {
      if (this.num == 0) {
        this.$router.push("/home");
      } else {
        this.num--;
      }
    }, 1000);
  },
  beforeDestroy() {
    clearInterval(this.cleardata);
  }
};
</script>

<style lang="scss">
.gg {
  width: 100%;
  height: 100%;
  position: relative;
  .num {
    width: 40px;
    height: 40px;
    position: absolute;
    top: 10px;
    right: 10px;
    border-radius: 50%;
    border: 2px solid #fff;
    h1 {
      width: 100%;
      height: 100%;
      font-size: 18px;
      text-align: center;
      line-height: 40px;
      color: #fff;
    }
  }
  img {
    width: 100%;
    height: 100%;
  }
}
</style>

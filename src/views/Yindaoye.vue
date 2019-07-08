<template>
  <div class="ydy">
    <!-- Swiper -->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="../assets/img/ydy1.jpg" alt />
        </div>
        <div class="swiper-slide">
          <img src="../assets/img/ydy2.jpg" alt />
        </div>
        <div class="swiper-slide">
          <img src="../assets/img/ydy3.jpg" alt />
        </div>
        <div class="swiper-slide">
          <img src="../assets/img/ydy4.jpg" alt />
          <van-button plain type="danger" url="/Home" class="btn">开始体验</van-button>
        </div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  created() {
    if (localStorage.One) {
      this.$router.push("/Gg");
    } else {
      localStorage.One = true;
    }
  },
  mounted() {
    new Swiper(".swiper-container", {
      pagination: {
        el: ".swiper-pagination"
      }
    });
  }
};
</script>

<style lang="scss">
.ydy {
  .swiper-container {
    z-index: 10000;
    .swiper-wrapper {
      .swiper-slide {
        position: relative;
        img {
          width: 100%;
          height: 100%;
        }
        .btn {
          position: absolute;
          right: 50%;
          margin-right: -12%;
          bottom: 10%;
          border-radius: 5px;
          color: rgb(104, 184, 230);
          border: 1px solid rgb(104, 184, 230);
          background-color: rgba(255, 255, 255, 0.5);
        }
      }
    }
  }
}
</style>

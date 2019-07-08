<template>
  <div id="Address">
    <div class="add-header">
      <router-link :to="this.$store.state.oldPath" tag="div" class="icon-url">
        <van-icon name="arrow-left" />
      </router-link>
      <span>添加地址</span>
    </div>
    <div class="add-ress">
      <div class="add-name">
        <span class="a-n-s">联系人</span>
        <input class="a-n" type="text" v-model="name" />
      </div>
      <div class="add-phone">
        <span class="a-p-s">电话</span>
        <input class="a-p" type="text" v-model="phone" />
      </div>
      <div class="add-address">
        <span class="a-a-s">地址</span>
        <input class="a-a" type="text" v-model="address" />
      </div>
      <van-button type="primary" class="add-btn" @click="add">确定</van-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: null,
      phone: null,
      address: null
    };
  },

  methods: {
    onClickLeft() {
      this.$router.push("/AddressList");
    },
    add() {
      if (this.name == null || this.phone == null || this.address == null) {
        this.$toast("请填写");
      } else {
        this.$store.commit("address", {
          name: this.name,
          phone: this.phone,
          add: this.address
        });
        this.$router.push(this.$store.state.oldPath);
      }
    }
  }
};
</script>

<style lang="scss">
.add-header {
  width: 100%;
  height: 40px;
  line-height: 40px;
  padding-left: 10px;
  text-align: center;
  background: #fff;
  .icon-url {
    display: inline-block;
    position: absolute;
    left: 10px;
  }
  span {
  }
}
.add-ress {
  background-color: #fff;
  padding: 10px;
  .add-name {
    .a-n-s {
    }
    .a-n {
    }
  }
  .add-btn {
    width: 100%;
  }
}
</style>

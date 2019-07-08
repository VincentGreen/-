<template>
  <div id="addressList">
    <van-nav-bar title="我的地址" left-arrow @click-left="onClickLeft" />
    <div class="addlist">
      <div class="list-name">
        <span class="name">姓名:</span>
        <span class="name">张三</span>
      </div>
      <div class="list-phon">
        <span class="phone">电话:</span>
        <span class="phone">12345678998</span>
      </div>
      <div class="list-add">
        <span class="addressList">地址:</span>
        <span class="addressList">广东省东莞市</span>
      </div>
    </div>
    <div class="addlist" v-for="(item,i) in addlist" :key="i">
      <div class="list-name">
        <van-icon name="passed" />
        <span class="name">姓名:</span>
        <span class="name">{{item.name}}</span>
      </div>
      <div class="list-phon">
        <span class="phone">电话:</span>
        <span class="phone">{{item.phone}}</span>
      </div>
      <div class="list-add">
        <span class="addressList">地址:</span>
        <span>{{item.add}}</span>
      </div>
    </div>
    <van-button type="danger" class="addadd" @click="addlistress">添加地址</van-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      addlist: []
    };
  },
  methods: {
    onClickLeft() {
      this.$router.push("/Wode");
    },
    addlistress() {
      this.$router.push("/Address");
    }
  },
  created() {
    this.addlist = this.$store.state.address;
  }
};
</script>

<style lang="scss">
.addlist {
  background-color: #fff;
  padding: 10px;
  margin-top: 10px;
  div {
    padding-top: 10px;
    .pass {
    }
    span {
      margin-left: 10px;
    }
  }
  .list-name {
    float: left;
  }
}
.addadd {
  width: 100%;
}
</style>

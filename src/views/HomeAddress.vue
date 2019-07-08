<template>
  <div id="HomeAddress">
    <van-nav-bar
      title="选择地址"
      right-text="新增地址"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <div class="addlist" v-for="(item,i) in addlist" :key="i" @click="addName(i)">
      <div class="list-name">
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
      this.$router.push("/Home");
    },
    onClickRight() {
      this.$router.push("/Address");
    },
    addName(i) {
      this.$store.commit("addName", {
        name: this.addlist[i].name,
        phone: this.addlist[i].phone,
        address: this.addlist[i].add
      });
      this.$router.push("/Home");
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
    span {
      margin-left: 10px;
    }
  }
  .list-name {
    float: left;
  }
}
</style>

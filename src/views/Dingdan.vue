<template>
  <div class="dingdan">
    <!-- <mt-header fixed title="订单"></mt-header> -->
    <div>
      <ul class="mui-table-view">
        <li class="mui-table-view-cell mui-media">
          <a href="javascript:;">
            <div class="mui-media-body">
              <img src="../assets/img/list4.webp" alt />
              <div class="c-right">
                <h4>{{name}}</h4>
                <p class="mui-ellipsis">2019-06-27 11:23</p>
              </div>
              <div class="right">
                <span>订单已送达</span>
              </div>
            </div>
            <div class="content" v-for="(item,i) in CartList" :key="i">
              <p>{{item.name}}</p>
              <span>￥{{item.price}}</span>
              <span class="item">x{{item.item}}</span>
            </div>
            <div class="foot">
              <router-link to="/Business" tag="button">再来一单</router-link>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      CartList: [],
      TotalPrice: 0,
      name: null
    };
  },
  created() {
    this.CartList = this.$store.state.cartList;
    for (var i = 0; i < this.CartList.length; i++) {
      this.TotalPrice += this.CartList[i].price * this.CartList[i].item;
    }
    this.TotalPrice = this.TotalPrice * 100;
    this.name = this.$store.state.cartName;
  }
};
</script>

<style lang="scss">
.mui-table-view {
  .mui-table-view-cell {
    a {
      .mui-media-body {
        img {
          width: 50px;
          height: 50px;
          float: left;
        }
        .c-right {
          margin-left: 10px;
          float: left;
          h4 {
            font-size: 16px;
            color: #333;
          }
          p {
          }
        }
        .right {
          float: right;
          span {
            font-size: 12px;
            color: #333;
          }
        }
      }
      .content {
        border-bottom: 1px solid rgb(218, 217, 217);
        padding-top: 10px;
        padding-bottom: 10px;
        margin-top: 10px;
        overflow: hidden;
        p {
          float: left;
        }
        span {
          float: right;
        }
        .item {
          font-size: 12px;
          color: #999;
        }
      }
      .foot {
        margin-top: 10px;
        button {
          float: right;
        }
      }
    }
  }
}
</style>

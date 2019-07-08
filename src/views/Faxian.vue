<template>
  <div class="faxian">
    <div class="header-top" v-show="sshow">
      <a href="javascript:;">
        <div class="money">
          <h3>金币商城</h3>
          <p>0元好物在这里</p>
          <img src="../assets/img/jinbi.webp" alt />
        </div>
      </a>
      <div class="left-top">
        <h3>推荐有奖</h3>
        <p>20元现金拿不停</p>
        <img src="../assets/img/piao.webp" alt />
      </div>
      <div class="left-bottom">
        <h3>周边优惠</h3>
        <p>领取口碑好券</p>
        <img src="../assets/img/juen.webp" alt />
      </div>
    </div>
    <div class="content" v-show="sshow">
      <div class="top">
        <p>--为你推荐--</p>
      </div>
      <div class="mui-content">
        <div class="mui-row" v-for="(item,i) in fslistp" :key="i">
          <div
            @click="ss(a)"
            class="mui-col-sm-6 mui-col-xs-6 con"
            v-for="(items,a) in fslistp[0]"
            :key="a"
          >
            <div>
              <div class="Imgs">
                <img :src="item[a].image" />
              </div>
              <div class="mui-media-body">
                <p class="nname">{{item[a].name}}</p>
                <p class="ccontent">
                  月售{{item[a].sellCount}}份
                  <span>好评率{{item[a].rating}}%</span>
                </p>
                <p class="money">
                  ￥
                  <span>{{item[a].price}}</span>
                </p>
                <span class="oldmoney"></span>
              </div>
              <div class="foot">
                <p>粥言</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="xq" v-show="!sshow" v-for="(item,i) in goods" :key="i">
      <div class="xq-img">
        <div class="xq-icon" @click="sshow=!sshow">
          <span>X</span>
        </div>
        <img :src="item.image" alt />
      </div>
      <div class="xq-content">
        <div class="xq-con-name">
          <van-tag color="#F78246">招牌</van-tag>
          <span class="xq-name">{{item.name}}</span>
        </div>
        <div class="xq-con-num">
          <p>月售2份</p>
          <span>￥{{item.price}}元起</span>
        </div>
        <div class="xq-con-js">
          <p>{{item.info}}</p>
        </div>
        <div class="qx-btn clearfix" v-show="fxShop">
          <van-button type="info" class="btn-business" @click="up">进入店铺</van-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { create } from "domain";
export default {
  data() {
    return {
      fslistp: [],
      sshow: true,
      fxShop: true,
      goods: []
    };
  },
  methods: {
    up() {
      this.$router.push("/Business");
    },
    ss(i) {
      this.sshow = !this.sshow;
      if (this.goods.length == 1) {
        this.goods.splice(0, 1);
      }
      this.goods.push({
        name: this.fslistp[0][i].name,
        image: this.fslistp[0][i].image,
        price: this.fslistp[0][i].price,
        info: this.fslistp[0][i].info
      });
      console.log(this.goods);
    }
  },
  mounted() {
    var _this = this;
    axios
      .get("/api/goods")
      .then(function(res) {
        // console.log(res);
        _this.fslistp.push(res.data.data[0].foods);
        console.log(_this.fslistp[0]);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
</script>

<style lang="scss">
.faxian {
  .header-top {
    background-color: #fff;
    overflow: hidden;
    a {
      display: block;
      width: 50%;
      height: 160px;
      float: left;
      .money {
        h3 {
          font-size: 16px;
          color: #ff9900;
          padding-top: 10px;
          margin-left: 20px;
        }
        p {
          margin-left: 20px;
        }
        img {
          width: 80px;
          height: 80px;
          float: right;
        }
      }
    }
    .left-top {
      width: 50%;
      float: right;
      h3 {
        font-size: 16px;
        color: #1ba9e1;
      }
      p {
        font-size: 12px;
        float: left;
      }
      img {
        width: 50px;
        height: 50px;
        float: right;
      }
    }
    .left-bottom {
      width: 50%;
      float: right;
      h3 {
        font-size: 16px;
        color: #1ba9e1;
      }
      p {
        font-size: 12px;
        float: left;
      }
      img {
        width: 50px;
        height: 50px;
        float: right;
      }
    }
  }
  .content {
    margin-top: 10px;
    background-color: #fff;
    .top {
      height: 50px;
      line-height: 50px;
      p {
        text-align: center;
        font-size: 16px;
        color: #333;
      }
    }
    .mui-content {
      .mui-row {
        background-color: #fff;
        .con {
          .Imgs {
            padding: 10px;
            img {
              width: 156px;
              height: 156px;
            }
          }
        }
        .mui-media-body {
          padding-left: 10px;
          p {
            margin: 0;
          }
          .nname {
            font-weight: 1000;
            font-size: 16px;
            color: #000;
            margin: 0;
          }
          .ccontent {
            font-size: 10px;
            span {
              margin-left: 10px;
            }
          }
          .money {
            font-size: 12px;
            color: #ff6000;
            display: inline-block;
            span {
              font-size: 16px;
            }
          }
          span.oldmoney {
            font-size: 12px;
            text-decoration: line-through;
            color: #ccc;
          }
        }
        .foot {
          padding-left: 10px;
          padding-right: 10px;
          p {
            border-top: 1px solid #ccc;
            font-size: 12px;
          }
        }
      }
    }
  }
  .xq {
    width: 100%;
    height: 580px;
    .xq-img {
      width: 100%;
      height: 400px;
      position: relative;
      overflow: hidden;
      .xq-icon {
        width: 30px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        position: absolute;
        top: 10px;
        right: 10px;
        z-index: 1000;
        border-radius: 50%;
        background-color: rgba(0, 0, 0, 0.5);
        color: #fff;
      }
      img {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
      }
    }
    .xq-content {
      padding: 10px;
      height: 400px;
      background-color: #fff;
      .xq-con-name {
        .xq-name {
          margin-left: 10px;
          font-weight: bold;
          color: rgb(43, 43, 43);
        }
      }
      .xq-con-num {
        margin-top: 10px;
        p {
          font-size: 12px;
        }
        span {
          font-size: 14px;
          color: #ff5339;
        }
        .xq-add {
          float: right;
          font-size: 20px;
          color: #2395ff;
        }
      }
      .xq-con-js {
        p {
          font-size: 12px;
        }
      }
      .qx-btn {
        float: right;
      }
    }
  }
}
</style>
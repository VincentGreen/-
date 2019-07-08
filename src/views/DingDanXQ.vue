<template>
  <div id="DingDanXQ">
    <van-nav-bar class="con" title="确认订单" left-text left-arrow @click-left="onClickLeft" />
    <div class="content">
      <div class="address">
        <p class="dd">订单配送至</p>
        <div class="ress">
          <span class="add-name">{{add.address}}</span>
          <van-icon name="arrow" />
        </div>
        <p class="name">
          联系人：{{add.name}}
          <span>电话：{{add.phone}}</span>
        </p>
      </div>
      <div class="time">
        <van-cell-group class="time-content">
          <van-cell class="time-s" title="送达时间" value="尽快送达(13.:33送达)" is-link />
          <van-cell class="time-z" title="支付方式" value="在线支付" />
        </van-cell-group>
      </div>
      <div class="content-c">
        <van-cell-group class="cc">
          <van-cell :title="name" />
          <div class="cai">
            <van-row class="cai-con" v-for="(index,i) in CartList" :key="i">
              <van-col span="2" class="cai-img">
                <img class="ci" :src="index.image" alt />
              </van-col>
              <van-col span="12" class="cai-name">
                <div class="cn">
                  <span class="cnn">{{index.name}}</span>
                  <span class="cn-num">x{{index.item}}</span>
                </div>
              </van-col>
              <van-col span="6" class="cai-price">
                <span class="cai-old">￥22</span>
                <span class="cai-new">￥{{index.price}}</span>
              </van-col>
            </van-row>
          </div>
          <van-cell class="hd" title="满减活动与折扣商品不同享" />
        </van-cell-group>
      </div>
    </div>
    <div class="zs">
      <van-cell-group>
        <van-cell title="订单备注" value="口味、偏好" is-link />
        <van-cell title="发票信息" value="该店不支持线上开票，请电话联系商户" />
        <van-cell title="号码保护" label="号码保护中，将对商家，骑手隐藏您的真实手机号" />
      </van-cell-group>
    </div>
    <van-submit-bar :price="TotalPrice" button-text="提交订单" @submit="onSubmit" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      CartList: [],
      TotalPrice: 0,
      name: null,
      add: {}
    };
  },
  methods: {
    onClickLeft() {
      this.$router.push("/Business");
    },
    onSubmit() {
      this.$router.push("/Dingdan");
    }
  },
  created() {
    this.CartList = this.$store.state.cartList;
    for (var i = 0; i < this.CartList.length; i++) {
      this.TotalPrice += this.CartList[i].price * this.CartList[i].item;
    }
    this.TotalPrice = this.TotalPrice * 100;
    this.name = this.$store.state.cartName;
    this.add = this.$store.state.addName;
  }
};
</script>

<style lang="scss">
#DingDanXQ {
  .con {
    background-color: #008eff;
    .van-nav-bar__left {
      .van-icon-arrow-left {
        color: #fff;
      }
    }
    .van-nav-bar__title {
      color: #fff;
      font-weight: bold;
    }
  }
  .content {
    padding: 10px;
    background-color: #008eff;
    .address {
      .dd {
        color: rgba(255, 255, 255, 0.8);
      }
      .ress {
        margin-bottom: 10px;
        .add-name {
          color: #fff;
          font-size: 20px;
          font-weight: bold;
        }
        .van-icon-arrow {
          float: right;
          color: #fff;
        }
      }
      .name {
        font-size: 14px;
        color: #fff;
        span {
          margin-left: 10px;
        }
      }
    }
    .time {
      margin-bottom: 10px;
      .time-content {
        .time-s {
          .van-cell__title {
            color: #000;
          }
          .van-cell__value {
            color: #008eff;
          }
        }
        .time-z {
          .van-cell__title {
            color: #000;
          }
          .van-cell__value {
            color: #008eff;
          }
        }
      }
    }
    .content-c {
      .cc {
        .cai {
          .cai-con {
            padding: 10px;
            .cai-img {
              margin-right: 10px;
              width: 40px;
              height: 40px;
              display: flex;
              position: relative;
              overflow: hidden;
              .ci {
                width: 100%;
                height: 100%;
                position: absolute;
                top: 0;
                left: 0;
                bottom: 0;
                right: 0;
              }
            }
            .cai-name {
              .cn {
                .cnn {
                  font-size: 14px;
                }
                .cn-num {
                  font-size: 12px;
                  float: right;
                }
              }
            }
            .cai-price {
              float: right;
              .cai-old {
                font-size: 12px;
                color: #999;
                text-decoration: line-through;
              }
              .cai-new {
                color: #ff4a07;
              }
            }
          }
        }
        .hd {
          .van-cell__title {
            font-size: 12px;
            color: #999;
          }
        }
      }
    }
  }
  .zs {
    margin-top: 10px;
  }
}
</style>


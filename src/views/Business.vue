<template>
  <div id="business">
    <router-link :to="this.$store.state.oldPath" tag="div" class="business-icon" v-show="saddshow">
      <van-icon name="arrow-left" />
    </router-link>
    <div class="business-header" v-for="(item,ii) in business" :key="'header'+ii" v-show="saddshow">
      <div class="header-img">
        <img src="../assets/img/sjmtf.webp" alt />
        <div class="business-tx">
          <img :src="item.avatar" alt />
        </div>
      </div>
      <div class="business-name">
        <p>{{item.name}}</p>
        <p class="name-span">
          评价{{item.score}}
          <span>月售{{item.sellCount}}单</span>
          <span>{{item.description}}约{{item.deliveryTime}}分钟</span>
        </p>
        <div class="business-name-content">
          <van-row>
            <van-col span="4">
              <van-tag type="danger">满减</van-tag>
            </van-col>
            <van-col span="15">
              <span>{{item.supports[0].description}}</span>
            </van-col>
            <van-col span="5">4个优惠</van-col>
          </van-row>
        </div>
        <div class="business-header-content">
          <p class="content-p">公告：店铺点餐，订餐热线：18073329841,15570768088</p>
        </div>
      </div>
    </div>
    <div class="business-content" v-show="saddshow">
      <van-tabs v-model="active">
        <van-tab title="点餐">
          <div class="dc">
            <img src="../assets/img/dc.webp" alt />
          </div>
          <div class="sjtj">
            <h4>商家推荐</h4>
            <van-swipe indicator-color="white" v-for="(item,c) in goods" :key="'wh'+c">
              <van-swipe-item
                style="display:inline-block;padding-right:10px;width:120px;"
                v-for="(items,d) in goods[0]"
                :key="'dd'+d"
              >
                <img style="width:105px;height:100px;" :src="item[d].image" alt />
                <p style="font-size:14px;color:#000;margin:0;">{{item[d].name}}</p>
                <p style="font-size:10px;margin:0;">月售{{item[d].sellCount}}好评率{{item[d].rating}}%</p>
                <span style="font-size:16px;color:#FF5D45;">￥{{item[d].price}}</span>
              </van-swipe-item>
            </van-swipe>
          </div>
          <div class="xxk clearfix">
            <div class="right">
              <div class="swiper-container swiper-new">
                <div class="swiper-wrapper">
                  <div class="swiper-slide con" v-for="(index,j) in goodsxxk" :key="'con'+j">
                    <div
                      class="cd clearfix"
                      v-for="(item,i) in index[j].foods"
                      :key="'cd'+i"
                      @click.stop="ss(i)"
                    >
                      <div class="cd-img">
                        <img :src="item.image" alt />
                      </div>
                      <div class="cd-nr">
                        <h4>{{item.name}}</h4>
                        <p>主要原料：{{item.description}}</p>
                        <div class="nr-bottom">
                          <van-tag plain type="danger">9.5折</van-tag>
                          <span class="yh">每单限1份优惠</span>
                          <span class="newj">￥{{item.price}}</span>
                          <span class="oldj">￥{{item.oldPrice}}</span>
                          <van-icon name="add" class="add-tb" @click.stop="add(item)" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </van-tab>
        <van-tab title="评价">
          <div class="pingjia">
            <div class="pingjia-pingfen">
              <span>4.7</span>
              <div class="pf">
                <p>商家评分</p>
                <van-rate v-model="value" readonly />
              </div>
            </div>
            <van-row>
              <van-col span="4">
                <div class="w-weidao">
                  <p>味道</p>
                  <span>4.7</span>
                </div>
              </van-col>
              <van-col span="4">
                <div class="b-baozhuang">
                  <p>包装</p>
                  <span>4.8</span>
                </div>
              </van-col>
              <van-col span="4">
                <div>
                  <p>配送</p>
                  <span>4.9</span>
                </div>
              </van-col>
            </van-row>
          </div>

          <div class="pinglun">
            <div class="biaoqian">
              <van-tag class="con" size="large" color="#0097FF">全部 10</van-tag>
              <van-tag size="large" color="#EBF5FF">最新</van-tag>
              <van-tag size="large" color="#EBF5FF">好评 9</van-tag>
              <van-tag size="large" color="#F5F5F5">差评 1</van-tag>
              <van-tag size="large" color="#EBF5FF">有图 5</van-tag>
            </div>
            <div class="xianshi">
              <van-icon name="checked" />
              <span>只看有内容的评论</span>
            </div>
            <div class="pinglun-nr">
              <div class="nr-img">
                <img src="../assets/img/1.jpg" alt />
              </div>
              <div class="nr-right">
                <div class="nr-name">
                  <p class>
                    匿名用户
                    <span>2019-06-18</span>
                  </p>
                </div>
                <div class="kh-pf">
                  <van-rate v-model="value" readonly />
                  <span>还行</span>
                </div>
                <div class="nrnr">
                  <p>内容内容内容内容内容内容内容内容内容内容内容内容内容</p>
                </div>
                <div class="nr-tp">
                  <img src="../assets/img/xsmtf.webp" alt />
                  <img src="../assets/img/xsmtf.webp" alt />
                  <img src="../assets/img/xsmtf.webp" alt />
                </div>
                <div class="nr-bq">
                  <van-icon name="thumb-circle-o" />
                  <van-tag class="nrcon" size="large">秘制鸡腿饭-正常</van-tag>
                  <van-tag class="nrcon" size="large">蜜汁鸡翅</van-tag>
                  <van-tag class="nrcon" size="large">鸡腿</van-tag>
                  <van-tag class="nrcon" size="large">蜜汁烧鸡腿</van-tag>
                </div>
              </div>
            </div>
          </div>
        </van-tab>
        <van-tab title="商家">
          <van-cell title="配送信息" size="large" label="由蜂鸟快送提供配送，约43分钟送达，距离1.9km 配送费￥0" />
          <div class="sj-fuwu">
            <h4>商家服务</h4>
            <div>
              <van-tag plain>赔</van-tag>
              <span>商家原因导致订单取消，赔付代金券</span>
            </div>
          </div>
          <div class="sj-shijing">
            <h4>商家实景</h4>
            <div class="sj-img">
              <div class="img-g">
                <img src="../assets/img/sjsj.webp" alt />
              </div>
              <div class="img-g">
                <img src="../assets/img/sjsj.webp" alt />
              </div>
            </div>
          </div>
          <div>
            <van-cell title="商家信息" size="large" label="暂无简介" />
            <van-cell title="品类" value="粤菜，其它快餐" size="large" />
            <van-cell title="商家电话" is-link value="13560420028" />
            <van-cell title="地址" value="广州市黄埔区联和长安街12号201房长安市场C区10号" size="large" />
            <van-cell title="营业时间" value="10:00-14:00.17:20-20:30" size="large" />
          </div>

          <div class="yyzz">
            <van-cell title="营业资质" is-link to />
          </div>
        </van-tab>
      </van-tabs>
    </div>
    <div class="business-foot">
      <van-row type="flex">
        <van-col span="4" class="cart">
          <span class="icon-num">{{num}}</span>
          <van-icon name="shopping-cart-o" @click="fa" />
          <van-action-sheet v-model="show" title="购物车">
            <div class="cart-cai" v-for="(index,f) in cai" :key="'cart-cai'+f">
              <van-icon name="delete" class="del" @click="del(f)" />
              <p>
                {{index.name}}
                <span>￥{{index.price}}</span>
              </p>
              <div class="leave">
                <span class="sub" @click="sub(f)">-</span>
                <input type="text" v-model="index.item" />
                <span class="add" @click="adds(f)">+</span>
              </div>
            </div>
          </van-action-sheet>
          <p class="cart-name">购物车</p>
        </van-col>
        <van-col span="14" class="price">
          <div class="price-top">
            <span class="newprice">￥{{price}}</span>
            <span class="oldprice">￥</span>
          </div>
          <div class="price-bottom">
            <p class="give">另配送分3.00元</p>
          </div>
        </van-col>
        <van-col span="6" class="cartAdd">
          <van-button type="primary" class="butcon" @click="name">付款</van-button>
        </van-col>
      </van-row>
    </div>
    <div class="xq" v-show="!saddshow" v-for="(aa,a) in goodss" :key="'xq'+a">
      <div class="xq-img">
        <div class="xq-icon" @click="saddshow=!saddshow">
          <span>X</span>
        </div>
        <img :src="aa.image" alt />
      </div>
      <div class="xq-content">
        <div class="xq-con-name">
          <van-tag color="#F78246">招牌</van-tag>
          <span class="xq-name">{{aa.name}}</span>
        </div>
        <div class="xq-con-num">
          <p>月售2份</p>
          <span>￥{{aa.price}}元起</span>
          <van-icon name="add" class="xq-add" @click="add1(aa)" />
        </div>
        <div class="xq-con-js">
          <p>{{aa.info}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Swiper from "swiper";
export default {
  name: "BetterScroll",
  data() {
    return {
      active: 0,
      value: 3,
      business: [],
      goods: [],
      goodsxxk: [],
      price: 0,
      show: false,
      item: 1,
      num: 0,
      cai: [],
      saddshow: true,
      goodss: [],
      line: 0
    };
  },
  methods: {
    // 添加菜品
    add(index) {
      index.item = 1;
      var list = this.cai.findIndex(con => {
        return con.name == index.name;
      });
      if (list != "-1") {
        this.cai[list].item += 1;
      } else {
        this.cai.push({
          name: index.name,
          price: index.price,
          item: index.item,
          image: index.image
        });
      }
      this.price += index.price;
      // this.saddshow = !this.saddshow
      // console.log(this.cai);
    },
    add1(index) {
      index.item = 1;
      var list = this.cai.findIndex(con => {
        return con.name == index.name;
      });
      if (list != "-1") {
        this.cai[list].item += 1;
      } else {
        this.cai.push({
          name: index.name,
          price: index.price,
          item: index.item,
          image: index.image
        });
      }
      this.price += index.price;
      // this.saddshow = !this.saddshow;
      // console.log(this.cai);
    },
    // 添加菜品数量
    adds(i) {
      this.cai[i].item += 1;
      for (var a = 0; a < this.cai.length; a++) {
        this.price += this.cai[a].price * this.cai[a].item;
      }
    },
    // 减少菜品数量
    sub(i) {
      this.cai[i].item -= 1;
      for (var a = 0; a < this.cai.length; a++) {
        this.price -= this.cai[a].price * this.cai[a].item;
      }
      var _this = this;
      if (this.cai[i].item == 0) {
        _this.cai.splice(i, 1);
        if (_this.cai.length == 0) {
          _this.show = false;
          _this.price = 0;
        }
      }
    },
    // 显示购物车
    fa() {
      this.show = true;
      if (this.cai.length == 0) {
        this.$toast("还没有选择商品哦~");
      }
    },
    // 手动关闭购物车
    onSelect(item) {
      // 点击选项时默认不会关闭菜单，可以手动关闭
      this.show = false;
    },
    // 删除购物车菜品
    del(i) {
      this.cai.splice(i, 1);
    },
    // 获取店名
    name() {
      if (this.cai.length == 0) {
        this.$toast("未选择商品");
        return;
      } else {
        this.$store.commit("name", this.business[0].name);
        this.$router.push("/DingDanXQ");
      }
    },
    ss(i) {
      // console.log(i)
      // console.log(this.goods[0])
      this.saddshow = !this.saddshow;
      if (this.goodss.length == 1) {
        this.goodss.splice(this.line, 1);
      }
      this.goodss.push({
        name: this.goods[this.line][i].name,
        image: this.goods[this.line][i].image,
        price: this.goods[this.line][i].price,
        info: this.goods[this.line][i].info
      });
    }
  },
  mounted() {
    var _this = this;
    // console.log(this);
    // 店铺介绍
    axios
      .get("/api/seller")
      .then(function(res) {
        // console.log(res);
        _this.business.push(res.data.data);
        // console.log(_this.business);
      })
      .catch(function(error) {
        console.log(error);
      });
    // 商品
    axios
      .get("/api/goods")
      .then(function(res) {
        // console.log(res);
        _this.goods.push(res.data.data[_this.line].foods);
        _this.goodsxxk.push(res.data.data);
        // console.log(_this.goodsxxk);
      })
      .catch(function(error) {
        console.log(error);
      });
    var swiper = new Swiper(".swiper-new", {
      direction: "vertical",
      slidesPerView: "auto",
      freeMode: true,
      mousewheel: true
    });
  },
  beforeUpdate() {
    this.$store.commit("add", this.cai);
    var _this = this;
    this.price = 0;
    for (var i = 0; i < this.cai.length; i++) {
      // 总价
      _this.price += _this.cai[i].price * _this.cai[i].item;
    }
    if (this.cai.length == 0) {
      // 购物车为零时隐藏
      this.show = false;
    }
    this.num = 0;
    for (var a = 0; a < this.cai.length; a++) {
      _this.num += this.cai[a].item;
    }
  }
};
</script>

<style lang="scss">
.business-icon {
  width: 40px;
  height: 40px;
  text-align: center;
  line-height: 45px;
  color: #fff;
  border-radius: 50%;
  background-color: rgba(116, 116, 116, 0.5);

  position: fixed;
  top: 0;
  left: 0;
  z-index: 111000;
}
.business-header {
  background-color: #fff;
  .header-img {
    width: 100%;
    height: 200px;
    position: relative;
    overflow: hidden;
    img {
      width: 100%;
      height: 80%;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
    .business-tx {
      overflow: hidden;
      position: absolute;
      top: 45%;
      left: 35%;
      width: 104px;
      height: 104px;
      border-radius: 50%;
      border: 2px solid #ccc;
      img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
      }
    }
  }
  .business-name {
    p {
      font-weight: bold;
      font-size: 20px;
      color: #000;
      text-align: center;
      margin: 0;
    }
    .name-span {
      font-size: 12px;
      color: #ccc;
      span {
        margin-left: 10px;
      }
    }
    .business-name-content {
      padding-left: 10px;
      font-size: 12px;
      color: rgb(112, 112, 112);
      span {
        margin-left: 10px;
      }
    }
    .business-header-content {
      .content-p {
        font-size: 12px;
        color: #ccc;
      }
    }
  }
}
.business-content {
  .van-tab__pane {
    .dc {
      padding-left: 10px;
      padding-right: 10px;
      width: 100%;
      height: 80px;
      background-color: #fff;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .sjtj {
      padding: 10px;
      background-color: #fff;
      .swiper-container {
        width: 100%;
        height: 100%;
      }
      .swiper-slide {
        text-align: center;
        font-size: 18px;
        background: #fff;

        /* Center slide text vertically */
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
      }
    }
    .xxk {
      width: 100%;
      height: 100%;
      display: flex;
      .right {
        flex: 1;
        background-color: #fff;
        div.swiper-new {
          width: 100%;
          div {
            div.con {
              padding: 10px;
              div.cd {
                width: 100%;
                .cd-img {
                  width: 100px;
                  height: 100px;
                  position: relative;
                  overflow: hidden;
                  display: flex;
                  float: left;
                  margin-right: 10px;
                  img {
                    width: 100%;
                    height: 100%;
                    display: block;
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                  }
                }
                .cd-nr {
                  width: 100%;
                  h4 {
                    font-size: 14px;
                  }
                  p {
                    font-size: 10px;
                  }
                  .nr-bottom {
                    .yh {
                      font-size: 10px;
                      margin-left: 10px;
                      color: #ff4444;
                    }
                    .newj {
                      font-size: 14px;
                      color: #ff4444;
                    }
                    .oldj {
                      font-size: 10px;
                      color: #999;
                      text-decoration: line-through;
                    }
                    .add-tb {
                      font-size: 22px;
                      float: right;
                      color: #2395ff;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }

    .pingjia {
      padding: 10px;
      background-color: #fff;
      .pingjia-pingfen {
        padding: 10px;
        float: left;
        overflow: hidden;
        span {
          font-size: 40px;
          color: #ff6000;
          margin: 10px;
          line-height: 100%;
        }
        .pf {
          display: inline-block;
          p {
            font-size: 14px;
            margin: 0;
          }
          .van-rate {
            .van-rate__item {
              .van-icon {
                font-size: 10px;
              }
            }
          }
        }
      }
      .van-row {
        text-align: center;
        .van-col {
          div {
            span {
              color: rgb(128, 128, 128);
              font-size: 20px;
            }
          }
          .b-baozhuang {
            border-right: 1px solid rgb(201, 201, 201);
          }
        }
      }
    }
    .pinglun {
      padding: 10px;
      background-color: #fff;
      margin-top: 10px;
      .biaoqian {
        border-bottom: 1px solid rgb(223, 223, 223);
        padding-bottom: 10px;
        span {
          margin: 5px;
          padding: 8px;
          color: rgb(114, 114, 114);
          font-size: 12px;
        }
        .con {
          color: #fff;
        }
      }
      .xianshi {
        padding: 10px;
        border-bottom: 1px solid rgb(223, 223, 223);
        .van-icon-checked {
          color: #76d572;
          font-size: 12px;
          padding-right: 4px;
        }
        span {
          font-size: 14px;
        }
      }
      .pinglun-nr {
        padding-top: 10px;
        .nr-img {
          float: left;
          padding-right: 10px;
          img {
            width: 40px;
            height: 40px;
            border-radius: 50%;
          }
        }
        .nr-right {
          margin-left: 50px;
          .nr-name {
            p {
              margin: 0;
              span {
                float: right;
              }
            }
          }
          .kh-pf {
            .van-rate {
              display: inline-block;
              padding-right: 10px;
              .van-rate__item {
                .van-icon {
                  font-size: 10px;
                }
              }
            }
            span {
              font-size: 12px;
              color: #ff8c47;
            }
          }
          .nrnr {
            p {
              font-size: 12px;
              color: #000;
            }
          }
          .nr-tp {
            img {
              width: 90px;
              margin-right: 4px;
            }
          }
          .nr-bq {
            .nrcon {
              font-size: 12px;
              background-color: #ebf5ff !important;
              color: #6d7885;
            }
          }
        }
      }
    }
    .sj-fuwu {
      padding: 10px;
      margin-top: 10px;
      background-color: #fff;
      h4 {
        padding: 10px;
      }
      span {
        padding-left: 10px;
        font-size: 14px;
        color: #6d7885;
      }
    }
    .sj-shijing {
      margin-top: 10px;
      margin-bottom: 10px;
      padding: 10px;
      background-color: #fff;
      h4 {
        padding: 10px;
      }
      .sj-img {
        overflow: hidden;
        .img-g {
          margin: 4px;
          width: 100px;
          height: 100px;
          position: relative;
          overflow: hidden;
          float: left;
          img {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            margin: auto;
          }
        }
      }
    }
    .yyzz {
      margin-top: 10px;
    }
  }
}
.business-foot {
  width: 100%;
  background: #fff;
  position: fixed;
  bottom: 0;
  z-index: 1000;
  .cart {
    text-align: center;
    .icon-num {
      display: inline-block;
      width: 14px;
      height: 14px;
      background-color: #ff4444;
      color: #fff;
      border-radius: 50%;
      font-size: 12px;
      line-height: 14px;
      position: absolute;
      top: 0;
      left: 35px;
      z-index: 1000;
    }
    .van-icon-shopping-cart-o {
      font-size: 20px;
    }
    .cart-name {
      margin: 0;
    }
    .cart-cai {
      padding: 10px;
      .del {
        margin-right: 10px;
      }
      p {
        width: 60%;
        display: inline-block;
        text-align: left;
        color: #000;
        span {
          float: right;
        }
      }
      .leave {
        display: inline-block;
        height: 30px;
        float: right;
        .sub {
          border: 1px solid #ccc;
          display: inline-block;
          text-align: center;
          width: 20px;
          height: 24px;
        }
        input {
          width: 40px;
          height: 10px;
        }
        .add {
          border: 1px solid #ccc;
          display: inline-block;
          text-align: center;
          width: 20px;
          height: 24px;
        }
      }
    }
  }
  .price {
    text-align: center;
    .price-top {
      .newprice {
        color: #ff4444;
      }
      .oldprice {
        font-size: 14px;
        color: #999;
        text-decoration: line-through;
      }
    }
    .price-bottom {
      .give {
        margin: 0;
      }
    }
  }
  .cartAdd {
    .butcon {
      width: 100%;
      height: 100%;
      text-align: center;
      line-height: 100%;
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
</style>

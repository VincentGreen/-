<template>
  <div class="home">
    <header class="mint-header is-fixed">
      <div class="mint-header-button is-left"></div>
      <h1 class="mint-header-title">点菜</h1>
      <div class="mint-header-button is-right"></div>
    </header>

    <div class="header-icon">
      <router-link to="/HomeAddress" tag="div" class="icon-top">
        <van-icon name="location" class="icon-name" />
        <span class="address-name">{{add.address}}</span>
        <span class="add-icon"></span>
      </router-link>
    </div>

    <div class="mint-searchbar">
      <div class="mint-searchbar-inner">
        <i class="mintui mintui-search"></i>
        <input type="search" placeholder="搜索" class="mint-searchbar-core" />
      </div>
    </div>

    <div class="mui-content">
      <div class="mui-row">
        <div class="mui-col-sm-6 mui-col-xs-3">
          <router-link to="/TuPiao" tag="div" class="contentList">
            <img src="../assets/img/list5.webp" alt />
            <p>美食</p>
          </router-link>
        </div>
        <div class="mui-col-sm-6 mui-col-xs-3">
          <router-link to="/TuPiao" tag="div" class="contentList">
            <img src="../assets/img/list1.webp" alt />
            <p>商超便利</p>
          </router-link>
        </div>
        <div class="mui-col-sm-6 mui-col-xs-3">
          <router-link to="/TuPiao" tag="div" class="contentList">
            <img src="../assets/img/list2.webp" alt />
            <p>水果</p>
          </router-link>
        </div>
        <div class="mui-col-sm-6 mui-col-xs-3">
          <router-link to="/TuPiao" tag="div" class="contentList">
            <img src="../assets/img/list3.webp" alt />
            <p>医药健康</p>
          </router-link>
        </div>
        <div class="mui-col-sm-6 mui-col-xs-3">
          <router-link to="/TuPiao" tag="div" class="contentList">
            <img src="../assets/img/list4.webp" alt />
            <p>浪漫鲜花</p>
          </router-link>
        </div>
        <div class="mui-col-sm-6 mui-col-xs-3">
          <router-link to="/TuPiao" tag="div" class="contentList">
            <img src="../assets/img/list6.webp" alt />
            <p>汉堡披萨</p>
          </router-link>
        </div>
        <div class="mui-col-sm-6 mui-col-xs-3">
          <router-link to="/TuPiao" tag="div" class="contentList">
            <img src="../assets/img/list7.webp" alt />
            <p>厨房生鲜</p>
          </router-link>
        </div>
        <div class="mui-col-sm-6 mui-col-xs-3">
          <router-link to="/TuPiao" tag="div" class="contentList">
            <img src="../assets/img/list8.webp" alt />
            <p>炸鸡炸串</p>
          </router-link>
        </div>
      </div>
    </div>

    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in listImg" :key="item">
        <img :src="item" alt />
      </mt-swipe-item>
    </mt-swipe>

    <mt-navbar v-model="selected">
      <mt-tab-item id="1">综合排序</mt-tab-item>
      <mt-tab-item id="2">距离最近</mt-tab-item>
      <mt-tab-item id="3">品质联盟</mt-tab-item>
      <mt-tab-item id="4">筛选</mt-tab-item>
    </mt-navbar>

    <!-- tab-container -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <router-link to="/Business" tag="div" class="listItem" v-for="(item,i) in listp" :key="i">
          <div class="dImg">
            <img :src="item.avatar" alt />
          </div>
          <div class="content-left">
            <div class="content-left-header">
              <p>{{item.name}}</p>
            </div>
            <div class="content-left-body">
              <van-rate :size="10" v-model="value" readonly />
              <span class="left cnn">{{item.score}}</span>
              <span class="left">月售{{item.sellCount}}单</span>
              <van-tag type="primary" class="right">{{item.description}}</van-tag>
            </div>
            <div class="content-left-foot">
              <span class="left con">￥{{item.money}}起送</span>
              <span class="left">派送费{{item.deliveryPrice}}元</span>
              <span class="right">{{item.deliveryTime}}分钟</span>
              <span class="right con">{{item.length}}km</span>
            </div>
          </div>
          <div class="content-foot">
            <div class="content-foot-top">
              <van-tag plain>木桶饭</van-tag>
              <span class="sp"></span>
              <van-tag plain>品质联盟</van-tag>
            </div>
            <div class="content-foot-body">
              <van-row gutter="20" v-for="(items,j) in item.supports" :key="j">
                <van-col span="2">
                  <van-tag style="padding: 2px;" type="danger">满</van-tag>
                </van-col>
                <van-col span="17">
                  <span>{{items.description}}</span>
                </van-col>
                <van-col span="5"></van-col>
              </van-row>
            </div>
          </div>
        </router-link>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <router-link to="/Business" tag="div" class="listItem" v-for="(item,i) in listp2" :key="i">
          <div class="dImg">
            <img :src="item.img" alt />
          </div>
          <div class="content-left">
            <div class="content-left-header">
              <p>{{item.name}}</p>
            </div>
            <div class="content-left-body">
              <van-rate :size="10" v-model="value" readonly />
              <span class="left cnn">4.3</span>
              <span class="left">月售1268单</span>
              <van-tag type="primary" class="right">蜂鸟专送</van-tag>
            </div>
            <div class="content-left-foot">
              <span class="left con">{{item.money}}</span>
              <span class="left">{{item.run}}</span>
              <span class="right">{{item.time}}</span>
              <span class="right con">{{item.length}}</span>
            </div>
          </div>
          <div class="content-foot">
            <div class="content-foot-top">
              <van-tag plain>木桶饭</van-tag>
              <span class="sp"></span>
              <van-tag plain>品质联盟</van-tag>
            </div>
            <div class="content-foot-body">
              <van-row gutter="20">
                <van-col span="2">
                  <van-tag style="padding: 2px;" type="danger">满</van-tag>
                </van-col>
                <van-col span="17">
                  <span>满3减2，</span>
                  <span>满25减2，</span>
                  <span>满35减5</span>
                </van-col>
                <van-col span="5"></van-col>
              </van-row>
              <van-row gutter="20">
                <van-col span="2">
                  <van-tag style="padding: 2px;" type="danger">折</van-tag>
                </van-col>
                <van-col span="17">
                  <span>折扣商品8折起</span>
                </van-col>
                <van-col span="5"></van-col>
              </van-row>
            </div>
          </div>
        </router-link>
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <router-link to="/Business" tag="div" class="listItem" v-for="(item,i) in listp3" :key="i">
          <div class="dImg">
            <img :src="item.img" alt />
          </div>
          <div class="content-left">
            <div class="content-left-header">
              <p>{{item.name}}</p>
            </div>
            <div class="content-left-body">
              <van-rate :size="10" v-model="value" readonly />
              <span class="left cnn">4.3</span>
              <span class="left">月售1268单</span>
              <van-tag type="primary" class="right">蜂鸟专送</van-tag>
            </div>
            <div class="content-left-foot">
              <span class="left con">{{item.money}}</span>
              <span class="left">{{item.run}}</span>
              <span class="right">{{item.time}}</span>
              <span class="right con">{{item.length}}</span>
            </div>
          </div>
          <div class="content-foot">
            <div class="content-foot-top">
              <van-tag plain>木桶饭</van-tag>
              <span class="sp"></span>
              <van-tag plain>品质联盟</van-tag>
            </div>
            <div class="content-foot-body">
              <van-row gutter="20">
                <van-col span="2">
                  <van-tag style="padding: 2px;" type="danger">满</van-tag>
                </van-col>
                <van-col span="17">
                  <span>满3减2，</span>
                  <span>满25减2，</span>
                  <span>满35减5</span>
                </van-col>
                <van-col span="5"></van-col>
              </van-row>
              <van-row gutter="20">
                <van-col span="2">
                  <van-tag style="padding: 2px;" type="danger">折</van-tag>
                </van-col>
                <van-col span="17">
                  <span>折扣商品8折起</span>
                </van-col>
                <van-col span="5"></van-col>
              </van-row>
            </div>
          </div>
        </router-link>
      </mt-tab-container-item>
      <mt-tab-container-item id="4">
        <router-link to="/Business" tag="div" class="listItem" v-for="(item,i) in listp" :key="i">
          <div class="dImg">
            <img :src="item.avatar" alt />
          </div>
          <div class="content-left">
            <div class="content-left-header">
              <p>{{item.name}}</p>
            </div>
            <div class="content-left-body">
              <van-rate :size="10" v-model="value" readonly />
              <span class="left cnn">{{item.score}}</span>
              <span class="left">月售{{item.sellCount}}单</span>
              <van-tag type="primary" class="right">{{item.description}}</van-tag>
            </div>
            <div class="content-left-foot">
              <span class="left con">￥{{item.money}}起送</span>
              <span class="left">派送费{{item.deliveryPrice}}元</span>
              <span class="right">{{item.deliveryTime}}分钟</span>
              <span class="right con">{{item.length}}km</span>
            </div>
          </div>
          <div class="content-foot">
            <div class="content-foot-top">
              <van-tag plain>木桶饭</van-tag>
              <span class="sp"></span>
              <van-tag plain>品质联盟</van-tag>
            </div>
            <div class="content-foot-body">
              <van-row gutter="20" v-for="(items,j) in item.supports" :key="j">
                <van-col span="2">
                  <van-tag style="padding: 2px;" type="danger">满</van-tag>
                </van-col>
                <van-col span="17">
                  <span>{{items.description}}</span>
                </van-col>
                <van-col span="5"></van-col>
              </van-row>
            </div>
          </div>
        </router-link>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
export default {
  data() {
    return {
      msg: 1,
      selected: "1",
      value: 3,
      listImg: [
        "../assets/img/img1.webp",
        "../assets/img/img2.webp",
        "../assets/img/img3.webp"
      ],
      listp: [],
      listp2: [
        {
          img: "../assets/img/xsmtf.webp",
          name: "湘帅木桶饭（免配送费店）",
          money: "￥20起送",
          run: "派送费￥0.5",
          length: "1.2km",
          time: "20分钟"
        },
        {
          img: "../assets/img/sxmtf.webp",
          name: "三湘农家木桶饭（免配送费店）",
          money: "￥20起送",
          run: "派送费￥0.5",
          length: "1.2km",
          time: "20分钟"
        },
        {
          img: "../assets/img/dtswms.webp",
          name: "大塘烧味美食（黄陂店）",
          money: "￥20起送",
          run: "派送费￥0.5",
          length: "1.2km",
          time: "20分钟"
        },
        {
          img: "../assets/img/dtswms.webp",
          name: "大塘烧味美食（黄陂店）",
          money: "￥20起送",
          run: "派送费￥0.5",
          length: "1.2km",
          time: "20分钟"
        },
        {
          img: "../assets/img/dtswms.webp",
          name: "大塘烧味美食（黄陂店）",
          money: "￥20起送",
          run: "派送费￥0.5",
          length: "1.2km",
          time: "20分钟"
        }
      ],
      listp3: [
        {
          img: "../assets/img/xsmtf.webp",
          name: "湘帅木桶饭（免配送费店）",
          money: "￥20起送",
          run: "派送费￥0.5",
          length: "1.2km",
          time: "20分钟"
        },
        {
          img: "../assets/img/sxmtf.webp",
          name: "三湘农家木桶饭（免配送费店）",
          money: "￥20起送",
          run: "派送费￥0.5",
          length: "1.2km",
          time: "20分钟"
        },
        {
          img: "../assets/img/dtswms.webp",
          name: "大塘烧味美食（黄陂店）",
          money: "￥20起送",
          run: "派送费￥0.5",
          length: "1.2km",
          time: "20分钟"
        },
        {
          img: "../assets/img/sxmtf.webp",
          name: "三湘农家木桶饭（免配送费店）",
          money: "￥20起送",
          run: "派送费￥0.5",
          length: "1.2km",
          time: "20分钟"
        },
        {
          img: "../assets/img/dtswms.webp",
          name: "大塘烧味美食（黄陂店）",
          money: "￥20起送",
          run: "派送费￥0.5",
          length: "1.2km",
          time: "20分钟"
        },
        {
          img: "../assets/img/xsmtf.webp",
          name: "湘帅木桶饭（免配送费店）",
          money: "￥20起送",
          run: "派送费￥0.5",
          length: "1.2km",
          time: "20分钟"
        }
      ],
      add: []
    };
  },
  methods: {},
  mounted() {
    var _this = this;
    // console.log(this)
    axios
      .get("/api/seller")
      .then(function(res) {
        // console.log(res);
        _this.listp.push(res.data.data);
        // console.log(_this.listp);
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  created() {
    this.add = this.$store.state.addName;
  }
};
</script>

<style lang="scss" scoped>
.header-icon {
  background-color: #26a2ff;
  width: 100%;
  height: 40px;
  margin-top: 40px;
  color: #fff;
  .icon-top {
    margin-left: 10px;
    margin-right: 10px;
  }
  .address-name {
    margin-left: 6px;
  }
  .add-icon {
    display: inline-block;
    margin-bottom: -5px;
    margin-left: 10px;
    border-top: 8px solid #fff;
    border-bottom: 8px solid transparent;
    border-right: 8px solid transparent;
    border-left: 8px solid transparent;
  }
}

.mint-searchbar {
  background-color: #26a2ff;
  .mint-searchbar-core {
    height: 26px;
    margin-top: 16px;
    background-color: #fff;
  }
}

.mint-swipe {
  margin-top: 4px;
  margin-bottom: 4px;
  width: 100%;
  height: 120px;
  img {
    height: 100%;
    width: 100%;
  }
}

.contentList {
  background: #fff;
  text-align: center;
  img {
    width: 50px;
    height: 50px;
    padding-top: 10px;
  }
  p {
    margin: 0px;
    font-size: 12px;
  }
}

.mint-navbar {
  margin-top: 2px;
}

.listItem {
  width: 100%;
  padding: 10px;
  border-top: 1px solid #ccc;
  background-color: #fff;
  overflow: hidden;
  .dImg {
    display: inline-block;
    margin-right: 10px;
    float: left;
    img {
      width: 60px;
      height: 60px;
    }
  }
  .content-left {
    padding-left: 70px;
    .content-left-header {
      p {
        margin: 0;
        font-weight: 1000;
        color: #000;
      }
    }
    .content-left-body {
      font-size: 12px;
      color: rgb(126, 126, 126);
      .van-rate {
        overflow: hidden;
        float: left;
        .van-rate__item {
          display: inline-block;
          .van-rate__icon {
          }
        }
      }
      span {
        margin-left: 6px;
      }
      .right {
        float: right;
      }
    }
    .content-left-foot {
      height: 18px;
      overflow: hidden;
      font-size: 12px;
      color: rgb(126, 126, 126);
      span.left {
        float: left;
        margin: 2px;
        padding-right: 4px;
      }
      span.right {
        float: right;
        margin: 2px;
        padding-right: 4px;
      }
      .con {
        border-right: 1px solid #ccc;
      }
    }
  }
  .content-foot {
    margin-left: 70px;
    .content-foot-top {
      padding-top: 10px;
      span.sp {
        display: inline-block;
        width: 10%;
      }
    }
    .content-foot-body {
      margin-top: 5px;
      font-size: 12px !important;
      color: rgb(126, 126, 126);
    }
  }
}
</style>
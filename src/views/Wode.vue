<template>
  <div class="wode">
    <header class="mint-header top-header">
      <div class="mint-header-button is-left">
        <div class="toxiang">
          <img src="../assets/img/1.jpg" alt />
        </div>
      </div>
      <div class="mint-header-title">
        <h3>用户名</h3>
        <p>103****1032</p>
      </div>
      <div class="mint-header-button is-right mint-header-right">
        <div class="smell"></div>
      </div>
    </header>

    <div class="content-top">
      <div class="mui-content">
        <div class="mui-row">
          <div class="mui-col-xs-6 fuli bordercon">
            <p class="hong">
              5
              <span>个</span>
            </p>
            <p>红包</p>
          </div>
          <div class="mui-col-xs-6 fuli">
            <p class="lu">
              88
              <span>个</span>
            </p>
            <p>金币</p>
          </div>
        </div>
      </div>
    </div>

    <div class="body-content">
      <ul class="mui-table-view">
        <router-link to="/AddressList" tag="li" class="mui-table-view-cell">
          <a class="mui-navigate-right">我的地址</a>
        </router-link>
      </ul>

      <ul class="mui-table-view">
        <router-link to="/Jingbishangcheng" tag="li" class="mui-table-view-cell">
          <a class="mui-navigate-right">金币商城</a>
        </router-link>
      </ul>

      <ul class="mui-table-view">
        <router-link to="/Wodekefu" tag="li" class="mui-table-view-cell">
          <a class="mui-navigate-right">我的客服</a>
        </router-link>
        <router-link to="/Guizezhongxian" tag="li" class="mui-table-view-cell">
          <a class="mui-navigate-right">规则中心</a>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
.top-header {
  height: 100px !important;
  // top: -40px;
  // z-index: 1000;
  .mint-header-button {
    .toxiang {
      img {
        width: 60px;
        height: 60px;
        background-color: #c4e7f5;
        border-radius: 50%;
      }
    }
  }
  .mint-header-title {
    text-align: left;
    h3 {
      margin-bottom: 10px;
    }
    p {
      color: #fff;
      font-size: 12px;
    }
  }
  .mint-header-right {
    position: relative;
    .smell {
      width: 10px;
      height: 10px;
      border-right: 2px solid #fff;
      border-bottom: 2px solid #fff;
      transform: rotate(-45deg);
      position: absolute;
      right: 10px;
    }
  }
}
.content-top {
  // position: relative;
  // top: -40px;
  .mui-content {
    background-color: #fff;
    height: 100px;
    text-align: center;
    font-size: 12px;
    font-weight: 1000;
    color: #666666;
    .mui-row {
      .fuli {
        top: 30px;
        .hong {
          font-size: 24px;
          color: #ff5f3e;
          margin: 0;
          span {
            font-size: 14px;
          }
        }
        .lu {
          font-size: 24px;
          color: #6ac20b;
          margin: 0;
          span {
            font-size: 14px;
          }
        }
      }
      .bordercon {
        border-right: 1px solid #ccc;
      }
    }
  }
}
.body-content {
  .mui-table-view {
    margin-bottom: 10px;
    color: #5e5e5e;
  }
}
</style>

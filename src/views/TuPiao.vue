<template>
  <div>
    <div>
      <van-tabs v-model="active">
        <van-tab title="全部">
          <van-tabs v-model="item">
            <van-tab title="综合排序">
              <router-link to="/Business" tag="div" class="nr-fl">
                <div class="nr-fl-img">
                  <img src="../assets/img/tpp.webp" alt />
                </div>
                <div class="nr-right">
                  <div class="nr-name">
                    <van-tag color="#FFE829">品牌</van-tag>
                    <span>华莱士（高塘石店）</span>
                    <van-icon name="ellipsis" />
                  </div>
                  <div class="nr-pf">
                    <van-rate v-model="value" />
                    <span>4.4月售2525单</span>
                  </div>
                  <div class="nr-fy">
                    <span class="con">￥0起送</span>
                    <span>远距离配送费￥1.5</span>
                    <span class="right">53分钟</span>
                    <span class="right con">3.34km</span>
                  </div>
                  <div class="nr-bq">
                    <van-tag plain>炸鸡炸串</van-tag>
                  </div>
                  <div class="nr-yh">
                    <van-row>
                      <van-col span="2">
                        <van-tag type="danger">减</van-tag>
                      </van-col>
                      <van-col span="18">
                        <p>
                          <span style="font-size:12px;">满26减8</span>
                          <span>满50减18</span>
                          <span>满100减35</span>
                        </p>
                      </van-col>
                      <van-col span="4">4个优惠</van-col>
                    </van-row>
                  </div>
                </div>
              </router-link>
              <router-link to="/Business" tag="div" class="nr-fl">
                <div class="nr-fl-img">
                  <img src="../assets/img/tpp.webp" alt />
                </div>
                <div class="nr-right">
                  <div class="nr-name">
                    <van-tag color="#FFE829">品牌</van-tag>
                    <span>华莱士（高塘石店）</span>
                    <van-icon name="ellipsis" />
                  </div>
                  <div class="nr-pf">
                    <van-rate v-model="value" />
                    <span>4.4月售2525单</span>
                  </div>
                  <div class="nr-fy">
                    <span class="con">￥0起送</span>
                    <span>远距离配送费￥1.5</span>
                    <span class="right">53分钟</span>
                    <span class="right con">3.34km</span>
                  </div>
                  <div class="nr-bq">
                    <van-tag plain>炸鸡炸串</van-tag>
                  </div>
                  <div class="nr-yh">
                    <van-row>
                      <van-col span="2">
                        <van-tag type="danger">减</van-tag>
                      </van-col>
                      <van-col span="18">
                        <p>
                          <span style="font-size:12px;">满26减8</span>
                          <span>满50减18</span>
                          <span>满100减35</span>
                        </p>
                      </van-col>
                      <van-col span="4">4个优惠</van-col>
                    </van-row>
                  </div>
                </div>
              </router-link>
              <router-link to="/Business" tag="div" class="nr-fl">
                <div class="nr-fl-img">
                  <img src="../assets/img/tpp.webp" alt />
                </div>
                <div class="nr-right">
                  <div class="nr-name">
                    <van-tag color="#FFE829">品牌</van-tag>
                    <span>华莱士（高塘石店）</span>
                    <van-icon name="ellipsis" />
                  </div>
                  <div class="nr-pf">
                    <van-rate v-model="value" />
                    <span>4.4月售2525单</span>
                  </div>
                  <div class="nr-fy">
                    <span class="con">￥0起送</span>
                    <span>远距离配送费￥1.5</span>
                    <span class="right">53分钟</span>
                    <span class="right con">3.34km</span>
                  </div>
                  <div class="nr-bq">
                    <van-tag plain>炸鸡炸串</van-tag>
                  </div>
                  <div class="nr-yh">
                    <van-row>
                      <van-col span="2">
                        <van-tag type="danger">减</van-tag>
                      </van-col>
                      <van-col span="18">
                        <p>
                          <span style="font-size:12px;">满26减8</span>
                          <span>满50减18</span>
                          <span>满100减35</span>
                        </p>
                      </van-col>
                      <van-col span="4">4个优惠</van-col>
                    </van-row>
                  </div>
                </div>
              </router-link>
              <router-link to="/Business" tag="div" class="nr-fl">
                <div class="nr-fl-img">
                  <img src="../assets/img/tpp.webp" alt />
                </div>
                <div class="nr-right">
                  <div class="nr-name">
                    <van-tag color="#FFE829">品牌</van-tag>
                    <span>华莱士（高塘石店）</span>
                    <van-icon name="ellipsis" />
                  </div>
                  <div class="nr-pf">
                    <van-rate v-model="value" />
                    <span>4.4月售2525单</span>
                  </div>
                  <div class="nr-fy">
                    <span class="con">￥0起送</span>
                    <span>远距离配送费￥1.5</span>
                    <span class="right">53分钟</span>
                    <span class="right con">3.34km</span>
                  </div>
                  <div class="nr-bq">
                    <van-tag plain>炸鸡炸串</van-tag>
                  </div>
                  <div class="nr-yh">
                    <van-row>
                      <van-col span="2">
                        <van-tag type="danger">减</van-tag>
                      </van-col>
                      <van-col span="18">
                        <p>
                          <span style="font-size:12px;">满26减8</span>
                          <span>满50减18</span>
                          <span>满100减35</span>
                        </p>
                      </van-col>
                      <van-col span="4">4个优惠</van-col>
                    </van-row>
                  </div>
                </div>
              </router-link>
            </van-tab>
            <van-tab title="距离最近">
              <router-link to="/Business" tag="div" class="nr-fl">
                <div class="nr-fl-img">
                  <img src="../assets/img/tpp.webp" alt />
                </div>
                <div class="nr-right">
                  <div class="nr-name">
                    <van-tag color="#FFE829">品牌</van-tag>
                    <span>华莱士（高塘石店）</span>
                    <van-icon name="ellipsis" />
                  </div>
                  <div class="nr-pf">
                    <van-rate v-model="value" />
                    <span>4.4月售2525单</span>
                  </div>
                  <div class="nr-fy">
                    <span class="con">￥0起送</span>
                    <span>远距离配送费￥1.5</span>
                    <span class="right">53分钟</span>
                    <span class="right con">3.34km</span>
                  </div>
                  <div class="nr-bq">
                    <van-tag plain>炸鸡炸串</van-tag>
                  </div>
                  <div class="nr-yh">
                    <van-row>
                      <van-col span="2">
                        <van-tag type="danger">减</van-tag>
                      </van-col>
                      <van-col span="18">
                        <p>
                          <span style="font-size:12px;">满26减8</span>
                          <span>满50减18</span>
                          <span>满100减35</span>
                        </p>
                      </van-col>
                      <van-col span="4">4个优惠</van-col>
                    </van-row>
                  </div>
                </div>
              </router-link>
              <router-link to="/Business" tag="div" class="nr-fl">
                <div class="nr-fl-img">
                  <img src="../assets/img/tpp.webp" alt />
                </div>
                <div class="nr-right">
                  <div class="nr-name">
                    <van-tag color="#FFE829">品牌</van-tag>
                    <span>华莱士（高塘石店）</span>
                    <van-icon name="ellipsis" />
                  </div>
                  <div class="nr-pf">
                    <van-rate v-model="value" />
                    <span>4.4月售2525单</span>
                  </div>
                  <div class="nr-fy">
                    <span class="con">￥0起送</span>
                    <span>远距离配送费￥1.5</span>
                    <span class="right">53分钟</span>
                    <span class="right con">3.34km</span>
                  </div>
                  <div class="nr-bq">
                    <van-tag plain>炸鸡炸串</van-tag>
                  </div>
                  <div class="nr-yh">
                    <van-row>
                      <van-col span="2">
                        <van-tag type="danger">减</van-tag>
                      </van-col>
                      <van-col span="18">
                        <p>
                          <span style="font-size:12px;">满26减8</span>
                          <span>满50减18</span>
                          <span>满100减35</span>
                        </p>
                      </van-col>
                      <van-col span="4">4个优惠</van-col>
                    </van-row>
                  </div>
                </div>
              </router-link>
              <router-link to="/Business" tag="div" class="nr-fl">
                <div class="nr-fl-img">
                  <img src="../assets/img/tpp.webp" alt />
                </div>
                <div class="nr-right">
                  <div class="nr-name">
                    <van-tag color="#FFE829">品牌</van-tag>
                    <span>华莱士（高塘石店）</span>
                    <van-icon name="ellipsis" />
                  </div>
                  <div class="nr-pf">
                    <van-rate v-model="value" />
                    <span>4.4月售2525单</span>
                  </div>
                  <div class="nr-fy">
                    <span class="con">￥0起送</span>
                    <span>远距离配送费￥1.5</span>
                    <span class="right">53分钟</span>
                    <span class="right con">3.34km</span>
                  </div>
                  <div class="nr-bq">
                    <van-tag plain>炸鸡炸串</van-tag>
                  </div>
                  <div class="nr-yh">
                    <van-row>
                      <van-col span="2">
                        <van-tag type="danger">减</van-tag>
                      </van-col>
                      <van-col span="18">
                        <p>
                          <span style="font-size:12px;">满26减8</span>
                          <span>满50减18</span>
                          <span>满100减35</span>
                        </p>
                      </van-col>
                      <van-col span="4">4个优惠</van-col>
                    </van-row>
                  </div>
                </div>
              </router-link>
              <router-link to="/Business" tag="div" class="nr-fl">
                <div class="nr-fl-img">
                  <img src="../assets/img/tpp.webp" alt />
                </div>
                <div class="nr-right">
                  <div class="nr-name">
                    <van-tag color="#FFE829">品牌</van-tag>
                    <span>华莱士（高塘石店）</span>
                    <van-icon name="ellipsis" />
                  </div>
                  <div class="nr-pf">
                    <van-rate v-model="value" />
                    <span>4.4月售2525单</span>
                  </div>
                  <div class="nr-fy">
                    <span class="con">￥0起送</span>
                    <span>远距离配送费￥1.5</span>
                    <span class="right">53分钟</span>
                    <span class="right con">3.34km</span>
                  </div>
                  <div class="nr-bq">
                    <van-tag plain>炸鸡炸串</van-tag>
                  </div>
                  <div class="nr-yh">
                    <van-row>
                      <van-col span="2">
                        <van-tag type="danger">减</van-tag>
                      </van-col>
                      <van-col span="18">
                        <p>
                          <span style="font-size:12px;">满26减8</span>
                          <span>满50减18</span>
                          <span>满100减35</span>
                        </p>
                      </van-col>
                      <van-col span="4">4个优惠</van-col>
                    </van-row>
                  </div>
                </div>
              </router-link>
            </van-tab>
            <van-tab title="品质联盟">
              <router-link to="/Business" tag="div" class="nr-fl">
                <div class="nr-fl-img">
                  <img src="../assets/img/tpp.webp" alt />
                </div>
                <div class="nr-right">
                  <div class="nr-name">
                    <van-tag color="#FFE829">品牌</van-tag>
                    <span>华莱士（高塘石店）</span>
                    <van-icon name="ellipsis" />
                  </div>
                  <div class="nr-pf">
                    <van-rate v-model="value" />
                    <span>4.4月售2525单</span>
                  </div>
                  <div class="nr-fy">
                    <span class="con">￥0起送</span>
                    <span>远距离配送费￥1.5</span>
                    <span class="right">53分钟</span>
                    <span class="right con">3.34km</span>
                  </div>
                  <div class="nr-bq">
                    <van-tag plain>炸鸡炸串</van-tag>
                  </div>
                  <div class="nr-yh">
                    <van-row>
                      <van-col span="2">
                        <van-tag type="danger">减</van-tag>
                      </van-col>
                      <van-col span="18">
                        <p>
                          <span style="font-size:12px;">满26减8</span>
                          <span>满50减18</span>
                          <span>满100减35</span>
                        </p>
                      </van-col>
                      <van-col span="4">4个优惠</van-col>
                    </van-row>
                  </div>
                </div>
              </router-link>
              <router-link to="/Business" tag="div" class="nr-fl">
                <div class="nr-fl-img">
                  <img src="../assets/img/tpp.webp" alt />
                </div>
                <div class="nr-right">
                  <div class="nr-name">
                    <van-tag color="#FFE829">品牌</van-tag>
                    <span>华莱士（高塘石店）</span>
                    <van-icon name="ellipsis" />
                  </div>
                  <div class="nr-pf">
                    <van-rate v-model="value" />
                    <span>4.4月售2525单</span>
                  </div>
                  <div class="nr-fy">
                    <span class="con">￥0起送</span>
                    <span>远距离配送费￥1.5</span>
                    <span class="right">53分钟</span>
                    <span class="right con">3.34km</span>
                  </div>
                  <div class="nr-bq">
                    <van-tag plain>炸鸡炸串</van-tag>
                  </div>
                  <div class="nr-yh">
                    <van-row>
                      <van-col span="2">
                        <van-tag type="danger">减</van-tag>
                      </van-col>
                      <van-col span="18">
                        <p>
                          <span style="font-size:12px;">满26减8</span>
                          <span>满50减18</span>
                          <span>满100减35</span>
                        </p>
                      </van-col>
                      <van-col span="4">4个优惠</van-col>
                    </van-row>
                  </div>
                </div>
              </router-link>
              <router-link to="/Business" tag="div" class="nr-fl">
                <div class="nr-fl-img">
                  <img src="../assets/img/tpp.webp" alt />
                </div>
                <div class="nr-right">
                  <div class="nr-name">
                    <van-tag color="#FFE829">品牌</van-tag>
                    <span>华莱士（高塘石店）</span>
                    <van-icon name="ellipsis" />
                  </div>
                  <div class="nr-pf">
                    <van-rate v-model="value" />
                    <span>4.4月售2525单</span>
                  </div>
                  <div class="nr-fy">
                    <span class="con">￥0起送</span>
                    <span>远距离配送费￥1.5</span>
                    <span class="right">53分钟</span>
                    <span class="right con">3.34km</span>
                  </div>
                  <div class="nr-bq">
                    <van-tag plain>炸鸡炸串</van-tag>
                  </div>
                  <div class="nr-yh">
                    <van-row>
                      <van-col span="2">
                        <van-tag type="danger">减</van-tag>
                      </van-col>
                      <van-col span="18">
                        <p>
                          <span style="font-size:12px;">满26减8</span>
                          <span>满50减18</span>
                          <span>满100减35</span>
                        </p>
                      </van-col>
                      <van-col span="4">4个优惠</van-col>
                    </van-row>
                  </div>
                </div>
              </router-link>
              <router-link to="/Business" tag="div" class="nr-fl">
                <div class="nr-fl-img">
                  <img src="../assets/img/tpp.webp" alt />
                </div>
                <div class="nr-right">
                  <div class="nr-name">
                    <van-tag color="#FFE829">品牌</van-tag>
                    <span>华莱士（高塘石店）</span>
                    <van-icon name="ellipsis" />
                  </div>
                  <div class="nr-pf">
                    <van-rate v-model="value" />
                    <span>4.4月售2525单</span>
                  </div>
                  <div class="nr-fy">
                    <span class="con">￥0起送</span>
                    <span>远距离配送费￥1.5</span>
                    <span class="right">53分钟</span>
                    <span class="right con">3.34km</span>
                  </div>
                  <div class="nr-bq">
                    <van-tag plain>炸鸡炸串</van-tag>
                  </div>
                  <div class="nr-yh">
                    <van-row>
                      <van-col span="2">
                        <van-tag type="danger">减</van-tag>
                      </van-col>
                      <van-col span="18">
                        <p>
                          <span style="font-size:12px;">满26减8</span>
                          <span>满50减18</span>
                          <span>满100减35</span>
                        </p>
                      </van-col>
                      <van-col span="4">4个优惠</van-col>
                    </van-row>
                  </div>
                </div>
              </router-link>
            </van-tab>
            <van-tab title="筛选">
              <router-link to="/Business" tag="div" class="nr-fl">
                <div class="nr-fl-img">
                  <img src="../assets/img/tpp.webp" alt />
                </div>
                <div class="nr-right">
                  <div class="nr-name">
                    <van-tag color="#FFE829">品牌</van-tag>
                    <span>华莱士（高塘石店）</span>
                    <van-icon name="ellipsis" />
                  </div>
                  <div class="nr-pf">
                    <van-rate v-model="value" />
                    <span>4.4月售2525单</span>
                  </div>
                  <div class="nr-fy">
                    <span class="con">￥0起送</span>
                    <span>远距离配送费￥1.5</span>
                    <span class="right">53分钟</span>
                    <span class="right con">3.34km</span>
                  </div>
                  <div class="nr-bq">
                    <van-tag plain>炸鸡炸串</van-tag>
                  </div>
                  <div class="nr-yh">
                    <van-row>
                      <van-col span="2">
                        <van-tag type="danger">减</van-tag>
                      </van-col>
                      <van-col span="18">
                        <p>
                          <span style="font-size:12px;">满26减8</span>
                          <span>满50减18</span>
                          <span>满100减35</span>
                        </p>
                      </van-col>
                      <van-col span="4">4个优惠</van-col>
                    </van-row>
                  </div>
                </div>
              </router-link>
              <router-link to="/Business" tag="div" class="nr-fl">
                <div class="nr-fl-img">
                  <img src="../assets/img/tpp.webp" alt />
                </div>
                <div class="nr-right">
                  <div class="nr-name">
                    <van-tag color="#FFE829">品牌</van-tag>
                    <span>华莱士（高塘石店）</span>
                    <van-icon name="ellipsis" />
                  </div>
                  <div class="nr-pf">
                    <van-rate v-model="value" />
                    <span>4.4月售2525单</span>
                  </div>
                  <div class="nr-fy">
                    <span class="con">￥0起送</span>
                    <span>远距离配送费￥1.5</span>
                    <span class="right">53分钟</span>
                    <span class="right con">3.34km</span>
                  </div>
                  <div class="nr-bq">
                    <van-tag plain>炸鸡炸串</van-tag>
                  </div>
                  <div class="nr-yh">
                    <van-row>
                      <van-col span="2">
                        <van-tag type="danger">减</van-tag>
                      </van-col>
                      <van-col span="18">
                        <p>
                          <span style="font-size:12px;">满26减8</span>
                          <span>满50减18</span>
                          <span>满100减35</span>
                        </p>
                      </van-col>
                      <van-col span="4">4个优惠</van-col>
                    </van-row>
                  </div>
                </div>
              </router-link>
              <router-link to="/Business" tag="div" class="nr-fl">
                <div class="nr-fl-img">
                  <img src="../assets/img/tpp.webp" alt />
                </div>
                <div class="nr-right">
                  <div class="nr-name">
                    <van-tag color="#FFE829">品牌</van-tag>
                    <span>华莱士（高塘石店）</span>
                    <van-icon name="ellipsis" />
                  </div>
                  <div class="nr-pf">
                    <van-rate v-model="value" />
                    <span>4.4月售2525单</span>
                  </div>
                  <div class="nr-fy">
                    <span class="con">￥0起送</span>
                    <span>远距离配送费￥1.5</span>
                    <span class="right">53分钟</span>
                    <span class="right con">3.34km</span>
                  </div>
                  <div class="nr-bq">
                    <van-tag plain>炸鸡炸串</van-tag>
                  </div>
                  <div class="nr-yh">
                    <van-row>
                      <van-col span="2">
                        <van-tag type="danger">减</van-tag>
                      </van-col>
                      <van-col span="18">
                        <p>
                          <span style="font-size:12px;">满26减8</span>
                          <span>满50减18</span>
                          <span>满100减35</span>
                        </p>
                      </van-col>
                      <van-col span="4">4个优惠</van-col>
                    </van-row>
                  </div>
                </div>
              </router-link>
              <router-link to="/Business" tag="div" class="nr-fl">
                <div class="nr-fl-img">
                  <img src="../assets/img/tpp.webp" alt />
                </div>
                <div class="nr-right">
                  <div class="nr-name">
                    <van-tag color="#FFE829">品牌</van-tag>
                    <span>华莱士（高塘石店）</span>
                    <van-icon name="ellipsis" />
                  </div>
                  <div class="nr-pf">
                    <van-rate v-model="value" />
                    <span>4.4月售2525单</span>
                  </div>
                  <div class="nr-fy">
                    <span class="con">￥0起送</span>
                    <span>远距离配送费￥1.5</span>
                    <span class="right">53分钟</span>
                    <span class="right con">3.34km</span>
                  </div>
                  <div class="nr-bq">
                    <van-tag plain>炸鸡炸串</van-tag>
                  </div>
                  <div class="nr-yh">
                    <van-row>
                      <van-col span="2">
                        <van-tag type="danger">减</van-tag>
                      </van-col>
                      <van-col span="18">
                        <p>
                          <span style="font-size:12px;">满26减8</span>
                          <span>满50减18</span>
                          <span>满100减35</span>
                        </p>
                      </van-col>
                      <van-col span="4">4个优惠</van-col>
                    </van-row>
                  </div>
                </div>
              </router-link>
            </van-tab>
          </van-tabs>
        </van-tab>
        <van-tab title="炸鸡炸串">
          <van-tabs v-model="item">
            <van-tab title="综合排序">
              <router-link to="/Business" tag="div" class="nr-fl">
                <div class="nr-fl-img">
                  <img src="../assets/img/tpp.webp" alt />
                </div>
                <div class="nr-right">
                  <div class="nr-name">
                    <van-tag color="#FFE829">品牌</van-tag>
                    <span>华莱士（高塘石店）</span>
                    <van-icon name="ellipsis" />
                  </div>
                  <div class="nr-pf">
                    <van-rate v-model="value" />
                    <span>4.4月售2525单</span>
                  </div>
                  <div class="nr-fy">
                    <span class="con">￥0起送</span>
                    <span>远距离配送费￥1.5</span>
                    <span class="right">53分钟</span>
                    <span class="right con">3.34km</span>
                  </div>
                  <div class="nr-bq">
                    <van-tag plain>炸鸡炸串</van-tag>
                  </div>
                  <div class="nr-yh">
                    <van-row>
                      <van-col span="2">
                        <van-tag type="danger">减</van-tag>
                      </van-col>
                      <van-col span="18">
                        <p>
                          <span style="font-size:12px;">满26减8</span>
                          <span>满50减18</span>
                          <span>满100减35</span>
                        </p>
                      </van-col>
                      <van-col span="4">4个优惠</van-col>
                    </van-row>
                  </div>
                </div>
              </router-link>
              <router-link to="/Business" tag="div" class="nr-fl">
                <div class="nr-fl-img">
                  <img src="../assets/img/tpp.webp" alt />
                </div>
                <div class="nr-right">
                  <div class="nr-name">
                    <van-tag color="#FFE829">品牌</van-tag>
                    <span>华莱士（高塘石店）</span>
                    <van-icon name="ellipsis" />
                  </div>
                  <div class="nr-pf">
                    <van-rate v-model="value" />
                    <span>4.4月售2525单</span>
                  </div>
                  <div class="nr-fy">
                    <span class="con">￥0起送</span>
                    <span>远距离配送费￥1.5</span>
                    <span class="right">53分钟</span>
                    <span class="right con">3.34km</span>
                  </div>
                  <div class="nr-bq">
                    <van-tag plain>炸鸡炸串</van-tag>
                  </div>
                  <div class="nr-yh">
                    <van-row>
                      <van-col span="2">
                        <van-tag type="danger">减</van-tag>
                      </van-col>
                      <van-col span="18">
                        <p>
                          <span style="font-size:12px;">满26减8</span>
                          <span>满50减18</span>
                          <span>满100减35</span>
                        </p>
                      </van-col>
                      <van-col span="4">4个优惠</van-col>
                    </van-row>
                  </div>
                </div>
              </router-link>
              <router-link to="/Business" tag="div" class="nr-fl">
                <div class="nr-fl-img">
                  <img src="../assets/img/tpp.webp" alt />
                </div>
                <div class="nr-right">
                  <div class="nr-name">
                    <van-tag color="#FFE829">品牌</van-tag>
                    <span>华莱士（高塘石店）</span>
                    <van-icon name="ellipsis" />
                  </div>
                  <div class="nr-pf">
                    <van-rate v-model="value" />
                    <span>4.4月售2525单</span>
                  </div>
                  <div class="nr-fy">
                    <span class="con">￥0起送</span>
                    <span>远距离配送费￥1.5</span>
                    <span class="right">53分钟</span>
                    <span class="right con">3.34km</span>
                  </div>
                  <div class="nr-bq">
                    <van-tag plain>炸鸡炸串</van-tag>
                  </div>
                  <div class="nr-yh">
                    <van-row>
                      <van-col span="2">
                        <van-tag type="danger">减</van-tag>
                      </van-col>
                      <van-col span="18">
                        <p>
                          <span style="font-size:12px;">满26减8</span>
                          <span>满50减18</span>
                          <span>满100减35</span>
                        </p>
                      </van-col>
                      <van-col span="4">4个优惠</van-col>
                    </van-row>
                  </div>
                </div>
              </router-link>
              <router-link to="/Business" tag="div" class="nr-fl">
                <div class="nr-fl-img">
                  <img src="../assets/img/tpp.webp" alt />
                </div>
                <div class="nr-right">
                  <div class="nr-name">
                    <van-tag color="#FFE829">品牌</van-tag>
                    <span>华莱士（高塘石店）</span>
                    <van-icon name="ellipsis" />
                  </div>
                  <div class="nr-pf">
                    <van-rate v-model="value" />
                    <span>4.4月售2525单</span>
                  </div>
                  <div class="nr-fy">
                    <span class="con">￥0起送</span>
                    <span>远距离配送费￥1.5</span>
                    <span class="right">53分钟</span>
                    <span class="right con">3.34km</span>
                  </div>
                  <div class="nr-bq">
                    <van-tag plain>炸鸡炸串</van-tag>
                  </div>
                  <div class="nr-yh">
                    <van-row>
                      <van-col span="2">
                        <van-tag type="danger">减</van-tag>
                      </van-col>
                      <van-col span="18">
                        <p>
                          <span style="font-size:12px;">满26减8</span>
                          <span>满50减18</span>
                          <span>满100减35</span>
                        </p>
                      </van-col>
                      <van-col span="4">4个优惠</van-col>
                    </van-row>
                  </div>
                </div>
              </router-link>
              <router-link to="/Business" tag="div" class="nr-fl">
                <div class="nr-fl-img">
                  <img src="../assets/img/tpp.webp" alt />
                </div>
                <div class="nr-right">
                  <div class="nr-name">
                    <van-tag color="#FFE829">品牌</van-tag>
                    <span>华莱士（高塘石店）</span>
                    <van-icon name="ellipsis" />
                  </div>
                  <div class="nr-pf">
                    <van-rate v-model="value" />
                    <span>4.4月售2525单</span>
                  </div>
                  <div class="nr-fy">
                    <span class="con">￥0起送</span>
                    <span>远距离配送费￥1.5</span>
                    <span class="right">53分钟</span>
                    <span class="right con">3.34km</span>
                  </div>
                  <div class="nr-bq">
                    <van-tag plain>炸鸡炸串</van-tag>
                  </div>
                  <div class="nr-yh">
                    <van-row>
                      <van-col span="2">
                        <van-tag type="danger">减</van-tag>
                      </van-col>
                      <van-col span="18">
                        <p>
                          <span style="font-size:12px;">满26减8</span>
                          <span>满50减18</span>
                          <span>满100减35</span>
                        </p>
                      </van-col>
                      <van-col span="4">4个优惠</van-col>
                    </van-row>
                  </div>
                </div>
              </router-link>
              <router-link to="/Business" tag="div" class="nr-fl">
                <div class="nr-fl-img">
                  <img src="../assets/img/tpp.webp" alt />
                </div>
                <div class="nr-right">
                  <div class="nr-name">
                    <van-tag color="#FFE829">品牌</van-tag>
                    <span>华莱士（高塘石店）</span>
                    <van-icon name="ellipsis" />
                  </div>
                  <div class="nr-pf">
                    <van-rate v-model="value" />
                    <span>4.4月售2525单</span>
                  </div>
                  <div class="nr-fy">
                    <span class="con">￥0起送</span>
                    <span>远距离配送费￥1.5</span>
                    <span class="right">53分钟</span>
                    <span class="right con">3.34km</span>
                  </div>
                  <div class="nr-bq">
                    <van-tag plain>炸鸡炸串</van-tag>
                  </div>
                  <div class="nr-yh">
                    <van-row>
                      <van-col span="2">
                        <van-tag type="danger">减</van-tag>
                      </van-col>
                      <van-col span="18">
                        <p>
                          <span style="font-size:12px;">满26减8</span>
                          <span>满50减18</span>
                          <span>满100减35</span>
                        </p>
                      </van-col>
                      <van-col span="4">4个优惠</van-col>
                    </van-row>
                  </div>
                </div>
              </router-link>
              <router-link to="/Business" tag="div" class="nr-fl">
                <div class="nr-fl-img">
                  <img src="../assets/img/tpp.webp" alt />
                </div>
                <div class="nr-right">
                  <div class="nr-name">
                    <van-tag color="#FFE829">品牌</van-tag>
                    <span>华莱士（高塘石店）</span>
                    <van-icon name="ellipsis" />
                  </div>
                  <div class="nr-pf">
                    <van-rate v-model="value" />
                    <span>4.4月售2525单</span>
                  </div>
                  <div class="nr-fy">
                    <span class="con">￥0起送</span>
                    <span>远距离配送费￥1.5</span>
                    <span class="right">53分钟</span>
                    <span class="right con">3.34km</span>
                  </div>
                  <div class="nr-bq">
                    <van-tag plain>炸鸡炸串</van-tag>
                  </div>
                  <div class="nr-yh">
                    <van-row>
                      <van-col span="2">
                        <van-tag type="danger">减</van-tag>
                      </van-col>
                      <van-col span="18">
                        <p>
                          <span style="font-size:12px;">满26减8</span>
                          <span>满50减18</span>
                          <span>满100减35</span>
                        </p>
                      </van-col>
                      <van-col span="4">4个优惠</van-col>
                    </van-row>
                  </div>
                </div>
              </router-link>
              <router-link to="/Business" tag="div" class="nr-fl">
                <div class="nr-fl-img">
                  <img src="../assets/img/tpp.webp" alt />
                </div>
                <div class="nr-right">
                  <div class="nr-name">
                    <van-tag color="#FFE829">品牌</van-tag>
                    <span>华莱士（高塘石店）</span>
                    <van-icon name="ellipsis" />
                  </div>
                  <div class="nr-pf">
                    <van-rate v-model="value" />
                    <span>4.4月售2525单</span>
                  </div>
                  <div class="nr-fy">
                    <span class="con">￥0起送</span>
                    <span>远距离配送费￥1.5</span>
                    <span class="right">53分钟</span>
                    <span class="right con">3.34km</span>
                  </div>
                  <div class="nr-bq">
                    <van-tag plain>炸鸡炸串</van-tag>
                  </div>
                  <div class="nr-yh">
                    <van-row>
                      <van-col span="2">
                        <van-tag type="danger">减</van-tag>
                      </van-col>
                      <van-col span="18">
                        <p>
                          <span style="font-size:12px;">满26减8</span>
                          <span>满50减18</span>
                          <span>满100减35</span>
                        </p>
                      </van-col>
                      <van-col span="4">4个优惠</van-col>
                    </van-row>
                  </div>
                </div>
              </router-link>
              <router-link to="/Business" tag="div" class="nr-fl">
                <div class="nr-fl-img">
                  <img src="../assets/img/tpp.webp" alt />
                </div>
                <div class="nr-right">
                  <div class="nr-name">
                    <van-tag color="#FFE829">品牌</van-tag>
                    <span>华莱士（高塘石店）</span>
                    <van-icon name="ellipsis" />
                  </div>
                  <div class="nr-pf">
                    <van-rate v-model="value" />
                    <span>4.4月售2525单</span>
                  </div>
                  <div class="nr-fy">
                    <span class="con">￥0起送</span>
                    <span>远距离配送费￥1.5</span>
                    <span class="right">53分钟</span>
                    <span class="right con">3.34km</span>
                  </div>
                  <div class="nr-bq">
                    <van-tag plain>炸鸡炸串</van-tag>
                  </div>
                  <div class="nr-yh">
                    <van-row>
                      <van-col span="2">
                        <van-tag type="danger">减</van-tag>
                      </van-col>
                      <van-col span="18">
                        <p>
                          <span style="font-size:12px;">满26减8</span>
                          <span>满50减18</span>
                          <span>满100减35</span>
                        </p>
                      </van-col>
                      <van-col span="4">4个优惠</van-col>
                    </van-row>
                  </div>
                </div>
              </router-link>
              <router-link to="/Business" tag="div" class="nr-fl">
                <div class="nr-fl-img">
                  <img src="../assets/img/tpp.webp" alt />
                </div>
                <div class="nr-right">
                  <div class="nr-name">
                    <van-tag color="#FFE829">品牌</van-tag>
                    <span>华莱士（高塘石店）</span>
                    <van-icon name="ellipsis" />
                  </div>
                  <div class="nr-pf">
                    <van-rate v-model="value" />
                    <span>4.4月售2525单</span>
                  </div>
                  <div class="nr-fy">
                    <span class="con">￥0起送</span>
                    <span>远距离配送费￥1.5</span>
                    <span class="right">53分钟</span>
                    <span class="right con">3.34km</span>
                  </div>
                  <div class="nr-bq">
                    <van-tag plain>炸鸡炸串</van-tag>
                  </div>
                  <div class="nr-yh">
                    <van-row>
                      <van-col span="2">
                        <van-tag type="danger">减</van-tag>
                      </van-col>
                      <van-col span="18">
                        <p>
                          <span style="font-size:12px;">满26减8</span>
                          <span>满50减18</span>
                          <span>满100减35</span>
                        </p>
                      </van-col>
                      <van-col span="4">4个优惠</van-col>
                    </van-row>
                  </div>
                </div>
              </router-link>
              <router-link to="/Business" tag="div" class="nr-fl">
                <div class="nr-fl-img">
                  <img src="../assets/img/tpp.webp" alt />
                </div>
                <div class="nr-right">
                  <div class="nr-name">
                    <van-tag color="#FFE829">品牌</van-tag>
                    <span>华莱士（高塘石店）</span>
                    <van-icon name="ellipsis" />
                  </div>
                  <div class="nr-pf">
                    <van-rate v-model="value" />
                    <span>4.4月售2525单</span>
                  </div>
                  <div class="nr-fy">
                    <span class="con">￥0起送</span>
                    <span>远距离配送费￥1.5</span>
                    <span class="right">53分钟</span>
                    <span class="right con">3.34km</span>
                  </div>
                  <div class="nr-bq">
                    <van-tag plain>炸鸡炸串</van-tag>
                  </div>
                  <div class="nr-yh">
                    <van-row>
                      <van-col span="2">
                        <van-tag type="danger">减</van-tag>
                      </van-col>
                      <van-col span="18">
                        <p>
                          <span style="font-size:12px;">满26减8</span>
                          <span>满50减18</span>
                          <span>满100减35</span>
                        </p>
                      </van-col>
                      <van-col span="4">4个优惠</van-col>
                    </van-row>
                  </div>
                </div>
              </router-link>
              <router-link to="/Business" tag="div" class="nr-fl">
                <div class="nr-fl-img">
                  <img src="../assets/img/tpp.webp" alt />
                </div>
                <div class="nr-right">
                  <div class="nr-name">
                    <van-tag color="#FFE829">品牌</van-tag>
                    <span>华莱士（高塘石店）</span>
                    <van-icon name="ellipsis" />
                  </div>
                  <div class="nr-pf">
                    <van-rate v-model="value" />
                    <span>4.4月售2525单</span>
                  </div>
                  <div class="nr-fy">
                    <span class="con">￥0起送</span>
                    <span>远距离配送费￥1.5</span>
                    <span class="right">53分钟</span>
                    <span class="right con">3.34km</span>
                  </div>
                  <div class="nr-bq">
                    <van-tag plain>炸鸡炸串</van-tag>
                  </div>
                  <div class="nr-yh">
                    <van-row>
                      <van-col span="2">
                        <van-tag type="danger">减</van-tag>
                      </van-col>
                      <van-col span="18">
                        <p>
                          <span style="font-size:12px;">满26减8</span>
                          <span>满50减18</span>
                          <span>满100减35</span>
                        </p>
                      </van-col>
                      <van-col span="4">4个优惠</van-col>
                    </van-row>
                  </div>
                </div>
              </router-link>
              <router-link to="/Business" tag="div" class="nr-fl">
                <div class="nr-fl-img">
                  <img src="../assets/img/tpp.webp" alt />
                </div>
                <div class="nr-right">
                  <div class="nr-name">
                    <van-tag color="#FFE829">品牌</van-tag>
                    <span>华莱士（高塘石店）</span>
                    <van-icon name="ellipsis" />
                  </div>
                  <div class="nr-pf">
                    <van-rate v-model="value" />
                    <span>4.4月售2525单</span>
                  </div>
                  <div class="nr-fy">
                    <span class="con">￥0起送</span>
                    <span>远距离配送费￥1.5</span>
                    <span class="right">53分钟</span>
                    <span class="right con">3.34km</span>
                  </div>
                  <div class="nr-bq">
                    <van-tag plain>炸鸡炸串</van-tag>
                  </div>
                  <div class="nr-yh">
                    <van-row>
                      <van-col span="2">
                        <van-tag type="danger">减</van-tag>
                      </van-col>
                      <van-col span="18">
                        <p>
                          <span style="font-size:12px;">满26减8</span>
                          <span>满50减18</span>
                          <span>满100减35</span>
                        </p>
                      </van-col>
                      <van-col span="4">4个优惠</van-col>
                    </van-row>
                  </div>
                </div>
              </router-link>
            </van-tab>
            <van-tab title="距离最近">
              <router-link to="/Business" tag="div" class="nr-fl">
                <div class="nr-fl-img">
                  <img src="../assets/img/tpp.webp" alt />
                </div>
                <div class="nr-right">
                  <div class="nr-name">
                    <van-tag color="#FFE829">品牌</van-tag>
                    <span>华莱士（高塘石店）</span>
                    <van-icon name="ellipsis" />
                  </div>
                  <div class="nr-pf">
                    <van-rate v-model="value" />
                    <span>4.4月售2525单</span>
                  </div>
                  <div class="nr-fy">
                    <span class="con">￥0起送</span>
                    <span>远距离配送费￥1.5</span>
                    <span class="right">53分钟</span>
                    <span class="right con">3.34km</span>
                  </div>
                  <div class="nr-bq">
                    <van-tag plain>炸鸡炸串</van-tag>
                  </div>
                  <div class="nr-yh">
                    <van-row>
                      <van-col span="2">
                        <van-tag type="danger">减</van-tag>
                      </van-col>
                      <van-col span="18">
                        <p>
                          <span style="font-size:12px;">满26减8</span>
                          <span>满50减18</span>
                          <span>满100减35</span>
                        </p>
                      </van-col>
                      <van-col span="4">4个优惠</van-col>
                    </van-row>
                  </div>
                </div>
              </router-link>
              <router-link to="/Business" tag="div" class="nr-fl">
                <div class="nr-fl-img">
                  <img src="../assets/img/tpp.webp" alt />
                </div>
                <div class="nr-right">
                  <div class="nr-name">
                    <van-tag color="#FFE829">品牌</van-tag>
                    <span>华莱士（高塘石店）</span>
                    <van-icon name="ellipsis" />
                  </div>
                  <div class="nr-pf">
                    <van-rate v-model="value" />
                    <span>4.4月售2525单</span>
                  </div>
                  <div class="nr-fy">
                    <span class="con">￥0起送</span>
                    <span>远距离配送费￥1.5</span>
                    <span class="right">53分钟</span>
                    <span class="right con">3.34km</span>
                  </div>
                  <div class="nr-bq">
                    <van-tag plain>炸鸡炸串</van-tag>
                  </div>
                  <div class="nr-yh">
                    <van-row>
                      <van-col span="2">
                        <van-tag type="danger">减</van-tag>
                      </van-col>
                      <van-col span="18">
                        <p>
                          <span style="font-size:12px;">满26减8</span>
                          <span>满50减18</span>
                          <span>满100减35</span>
                        </p>
                      </van-col>
                      <van-col span="4">4个优惠</van-col>
                    </van-row>
                  </div>
                </div>
              </router-link>
              <router-link to="/Business" tag="div" class="nr-fl">
                <div class="nr-fl-img">
                  <img src="../assets/img/tpp.webp" alt />
                </div>
                <div class="nr-right">
                  <div class="nr-name">
                    <van-tag color="#FFE829">品牌</van-tag>
                    <span>华莱士（高塘石店）</span>
                    <van-icon name="ellipsis" />
                  </div>
                  <div class="nr-pf">
                    <van-rate v-model="value" />
                    <span>4.4月售2525单</span>
                  </div>
                  <div class="nr-fy">
                    <span class="con">￥0起送</span>
                    <span>远距离配送费￥1.5</span>
                    <span class="right">53分钟</span>
                    <span class="right con">3.34km</span>
                  </div>
                  <div class="nr-bq">
                    <van-tag plain>炸鸡炸串</van-tag>
                  </div>
                  <div class="nr-yh">
                    <van-row>
                      <van-col span="2">
                        <van-tag type="danger">减</van-tag>
                      </van-col>
                      <van-col span="18">
                        <p>
                          <span style="font-size:12px;">满26减8</span>
                          <span>满50减18</span>
                          <span>满100减35</span>
                        </p>
                      </van-col>
                      <van-col span="4">4个优惠</van-col>
                    </van-row>
                  </div>
                </div>
              </router-link>
              <router-link to="/Business" tag="div" class="nr-fl">
                <div class="nr-fl-img">
                  <img src="../assets/img/tpp.webp" alt />
                </div>
                <div class="nr-right">
                  <div class="nr-name">
                    <van-tag color="#FFE829">品牌</van-tag>
                    <span>华莱士（高塘石店）</span>
                    <van-icon name="ellipsis" />
                  </div>
                  <div class="nr-pf">
                    <van-rate v-model="value" />
                    <span>4.4月售2525单</span>
                  </div>
                  <div class="nr-fy">
                    <span class="con">￥0起送</span>
                    <span>远距离配送费￥1.5</span>
                    <span class="right">53分钟</span>
                    <span class="right con">3.34km</span>
                  </div>
                  <div class="nr-bq">
                    <van-tag plain>炸鸡炸串</van-tag>
                  </div>
                  <div class="nr-yh">
                    <van-row>
                      <van-col span="2">
                        <van-tag type="danger">减</van-tag>
                      </van-col>
                      <van-col span="18">
                        <p>
                          <span style="font-size:12px;">满26减8</span>
                          <span>满50减18</span>
                          <span>满100减35</span>
                        </p>
                      </van-col>
                      <van-col span="4">4个优惠</van-col>
                    </van-row>
                  </div>
                </div>
              </router-link>
              <router-link to="/Business" tag="div" class="nr-fl">
                <div class="nr-fl-img">
                  <img src="../assets/img/tpp.webp" alt />
                </div>
                <div class="nr-right">
                  <div class="nr-name">
                    <van-tag color="#FFE829">品牌</van-tag>
                    <span>华莱士（高塘石店）</span>
                    <van-icon name="ellipsis" />
                  </div>
                  <div class="nr-pf">
                    <van-rate v-model="value" />
                    <span>4.4月售2525单</span>
                  </div>
                  <div class="nr-fy">
                    <span class="con">￥0起送</span>
                    <span>远距离配送费￥1.5</span>
                    <span class="right">53分钟</span>
                    <span class="right con">3.34km</span>
                  </div>
                  <div class="nr-bq">
                    <van-tag plain>炸鸡炸串</van-tag>
                  </div>
                  <div class="nr-yh">
                    <van-row>
                      <van-col span="2">
                        <van-tag type="danger">减</van-tag>
                      </van-col>
                      <van-col span="18">
                        <p>
                          <span style="font-size:12px;">满26减8</span>
                          <span>满50减18</span>
                          <span>满100减35</span>
                        </p>
                      </van-col>
                      <van-col span="4">4个优惠</van-col>
                    </van-row>
                  </div>
                </div>
              </router-link>
              <router-link to="/Business" tag="div" class="nr-fl">
                <div class="nr-fl-img">
                  <img src="../assets/img/tpp.webp" alt />
                </div>
                <div class="nr-right">
                  <div class="nr-name">
                    <van-tag color="#FFE829">品牌</van-tag>
                    <span>华莱士（高塘石店）</span>
                    <van-icon name="ellipsis" />
                  </div>
                  <div class="nr-pf">
                    <van-rate v-model="value" />
                    <span>4.4月售2525单</span>
                  </div>
                  <div class="nr-fy">
                    <span class="con">￥0起送</span>
                    <span>远距离配送费￥1.5</span>
                    <span class="right">53分钟</span>
                    <span class="right con">3.34km</span>
                  </div>
                  <div class="nr-bq">
                    <van-tag plain>炸鸡炸串</van-tag>
                  </div>
                  <div class="nr-yh">
                    <van-row>
                      <van-col span="2">
                        <van-tag type="danger">减</van-tag>
                      </van-col>
                      <van-col span="18">
                        <p>
                          <span style="font-size:12px;">满26减8</span>
                          <span>满50减18</span>
                          <span>满100减35</span>
                        </p>
                      </van-col>
                      <van-col span="4">4个优惠</van-col>
                    </van-row>
                  </div>
                </div>
              </router-link>
              <router-link to="/Business" tag="div" class="nr-fl">
                <div class="nr-fl-img">
                  <img src="../assets/img/tpp.webp" alt />
                </div>
                <div class="nr-right">
                  <div class="nr-name">
                    <van-tag color="#FFE829">品牌</van-tag>
                    <span>华莱士（高塘石店）</span>
                    <van-icon name="ellipsis" />
                  </div>
                  <div class="nr-pf">
                    <van-rate v-model="value" />
                    <span>4.4月售2525单</span>
                  </div>
                  <div class="nr-fy">
                    <span class="con">￥0起送</span>
                    <span>远距离配送费￥1.5</span>
                    <span class="right">53分钟</span>
                    <span class="right con">3.34km</span>
                  </div>
                  <div class="nr-bq">
                    <van-tag plain>炸鸡炸串</van-tag>
                  </div>
                  <div class="nr-yh">
                    <van-row>
                      <van-col span="2">
                        <van-tag type="danger">减</van-tag>
                      </van-col>
                      <van-col span="18">
                        <p>
                          <span style="font-size:12px;">满26减8</span>
                          <span>满50减18</span>
                          <span>满100减35</span>
                        </p>
                      </van-col>
                      <van-col span="4">4个优惠</van-col>
                    </van-row>
                  </div>
                </div>
              </router-link>
              <router-link to="/Business" tag="div" class="nr-fl">
                <div class="nr-fl-img">
                  <img src="../assets/img/tpp.webp" alt />
                </div>
                <div class="nr-right">
                  <div class="nr-name">
                    <van-tag color="#FFE829">品牌</van-tag>
                    <span>华莱士（高塘石店）</span>
                    <van-icon name="ellipsis" />
                  </div>
                  <div class="nr-pf">
                    <van-rate v-model="value" />
                    <span>4.4月售2525单</span>
                  </div>
                  <div class="nr-fy">
                    <span class="con">￥0起送</span>
                    <span>远距离配送费￥1.5</span>
                    <span class="right">53分钟</span>
                    <span class="right con">3.34km</span>
                  </div>
                  <div class="nr-bq">
                    <van-tag plain>炸鸡炸串</van-tag>
                  </div>
                  <div class="nr-yh">
                    <van-row>
                      <van-col span="2">
                        <van-tag type="danger">减</van-tag>
                      </van-col>
                      <van-col span="18">
                        <p>
                          <span style="font-size:12px;">满26减8</span>
                          <span>满50减18</span>
                          <span>满100减35</span>
                        </p>
                      </van-col>
                      <van-col span="4">4个优惠</van-col>
                    </van-row>
                  </div>
                </div>
              </router-link>
              <router-link to="/Business" tag="div" class="nr-fl">
                <div class="nr-fl-img">
                  <img src="../assets/img/tpp.webp" alt />
                </div>
                <div class="nr-right">
                  <div class="nr-name">
                    <van-tag color="#FFE829">品牌</van-tag>
                    <span>华莱士（高塘石店）</span>
                    <van-icon name="ellipsis" />
                  </div>
                  <div class="nr-pf">
                    <van-rate v-model="value" />
                    <span>4.4月售2525单</span>
                  </div>
                  <div class="nr-fy">
                    <span class="con">￥0起送</span>
                    <span>远距离配送费￥1.5</span>
                    <span class="right">53分钟</span>
                    <span class="right con">3.34km</span>
                  </div>
                  <div class="nr-bq">
                    <van-tag plain>炸鸡炸串</van-tag>
                  </div>
                  <div class="nr-yh">
                    <van-row>
                      <van-col span="2">
                        <van-tag type="danger">减</van-tag>
                      </van-col>
                      <van-col span="18">
                        <p>
                          <span style="font-size:12px;">满26减8</span>
                          <span>满50减18</span>
                          <span>满100减35</span>
                        </p>
                      </van-col>
                      <van-col span="4">4个优惠</van-col>
                    </van-row>
                  </div>
                </div>
              </router-link>
              <router-link to="/Business" tag="div" class="nr-fl">
                <div class="nr-fl-img">
                  <img src="../assets/img/tpp.webp" alt />
                </div>
                <div class="nr-right">
                  <div class="nr-name">
                    <van-tag color="#FFE829">品牌</van-tag>
                    <span>华莱士（高塘石店）</span>
                    <van-icon name="ellipsis" />
                  </div>
                  <div class="nr-pf">
                    <van-rate v-model="value" />
                    <span>4.4月售2525单</span>
                  </div>
                  <div class="nr-fy">
                    <span class="con">￥0起送</span>
                    <span>远距离配送费￥1.5</span>
                    <span class="right">53分钟</span>
                    <span class="right con">3.34km</span>
                  </div>
                  <div class="nr-bq">
                    <van-tag plain>炸鸡炸串</van-tag>
                  </div>
                  <div class="nr-yh">
                    <van-row>
                      <van-col span="2">
                        <van-tag type="danger">减</van-tag>
                      </van-col>
                      <van-col span="18">
                        <p>
                          <span style="font-size:12px;">满26减8</span>
                          <span>满50减18</span>
                          <span>满100减35</span>
                        </p>
                      </van-col>
                      <van-col span="4">4个优惠</van-col>
                    </van-row>
                  </div>
                </div>
              </router-link>
              <router-link to="/Business" tag="div" class="nr-fl">
                <div class="nr-fl-img">
                  <img src="../assets/img/tpp.webp" alt />
                </div>
                <div class="nr-right">
                  <div class="nr-name">
                    <van-tag color="#FFE829">品牌</van-tag>
                    <span>华莱士（高塘石店）</span>
                    <van-icon name="ellipsis" />
                  </div>
                  <div class="nr-pf">
                    <van-rate v-model="value" />
                    <span>4.4月售2525单</span>
                  </div>
                  <div class="nr-fy">
                    <span class="con">￥0起送</span>
                    <span>远距离配送费￥1.5</span>
                    <span class="right">53分钟</span>
                    <span class="right con">3.34km</span>
                  </div>
                  <div class="nr-bq">
                    <van-tag plain>炸鸡炸串</van-tag>
                  </div>
                  <div class="nr-yh">
                    <van-row>
                      <van-col span="2">
                        <van-tag type="danger">减</van-tag>
                      </van-col>
                      <van-col span="18">
                        <p>
                          <span style="font-size:12px;">满26减8</span>
                          <span>满50减18</span>
                          <span>满100减35</span>
                        </p>
                      </van-col>
                      <van-col span="4">4个优惠</van-col>
                    </van-row>
                  </div>
                </div>
              </router-link>
              <router-link to="/Business" tag="div" class="nr-fl">
                <div class="nr-fl-img">
                  <img src="../assets/img/tpp.webp" alt />
                </div>
                <div class="nr-right">
                  <div class="nr-name">
                    <van-tag color="#FFE829">品牌</van-tag>
                    <span>华莱士（高塘石店）</span>
                    <van-icon name="ellipsis" />
                  </div>
                  <div class="nr-pf">
                    <van-rate v-model="value" />
                    <span>4.4月售2525单</span>
                  </div>
                  <div class="nr-fy">
                    <span class="con">￥0起送</span>
                    <span>远距离配送费￥1.5</span>
                    <span class="right">53分钟</span>
                    <span class="right con">3.34km</span>
                  </div>
                  <div class="nr-bq">
                    <van-tag plain>炸鸡炸串</van-tag>
                  </div>
                  <div class="nr-yh">
                    <van-row>
                      <van-col span="2">
                        <van-tag type="danger">减</van-tag>
                      </van-col>
                      <van-col span="18">
                        <p>
                          <span style="font-size:12px;">满26减8</span>
                          <span>满50减18</span>
                          <span>满100减35</span>
                        </p>
                      </van-col>
                      <van-col span="4">4个优惠</van-col>
                    </van-row>
                  </div>
                </div>
              </router-link>
              <router-link to="/Business" tag="div" class="nr-fl">
                <div class="nr-fl-img">
                  <img src="../assets/img/tpp.webp" alt />
                </div>
                <div class="nr-right">
                  <div class="nr-name">
                    <van-tag color="#FFE829">品牌</van-tag>
                    <span>华莱士（高塘石店）</span>
                    <van-icon name="ellipsis" />
                  </div>
                  <div class="nr-pf">
                    <van-rate v-model="value" />
                    <span>4.4月售2525单</span>
                  </div>
                  <div class="nr-fy">
                    <span class="con">￥0起送</span>
                    <span>远距离配送费￥1.5</span>
                    <span class="right">53分钟</span>
                    <span class="right con">3.34km</span>
                  </div>
                  <div class="nr-bq">
                    <van-tag plain>炸鸡炸串</van-tag>
                  </div>
                  <div class="nr-yh">
                    <van-row>
                      <van-col span="2">
                        <van-tag type="danger">减</van-tag>
                      </van-col>
                      <van-col span="18">
                        <p>
                          <span style="font-size:12px;">满26减8</span>
                          <span>满50减18</span>
                          <span>满100减35</span>
                        </p>
                      </van-col>
                      <van-col span="4">4个优惠</van-col>
                    </van-row>
                  </div>
                </div>
              </router-link>
            </van-tab>
            <van-tab title="品质联盟">
              <div class="nr-fl">
                <div class="nr-fl-img">
                  <img src="../assets/img/tpp.webp" alt />
                </div>
                <div class="nr-right">
                  <div class="nr-name">
                    <van-tag color="#FFE829">品牌</van-tag>
                    <span>华莱士（高塘石店）</span>
                    <van-icon name="ellipsis" />
                  </div>
                  <div class="nr-pf">
                    <van-rate v-model="value" />
                    <span>4.4月售2525单</span>
                  </div>
                  <div class="nr-fy">
                    <span class="con">￥0起送</span>
                    <span>远距离配送费￥1.5</span>
                    <span class="right">53分钟</span>
                    <span class="right con">3.34km</span>
                  </div>
                  <div class="nr-bq">
                    <van-tag plain>炸鸡炸串</van-tag>
                  </div>
                  <div class="nr-yh">
                    <van-row>
                      <van-col span="2">
                        <van-tag type="danger">减</van-tag>
                      </van-col>
                      <van-col span="18">
                        <p>
                          <span style="font-size:12px;">满26减8</span>
                          <span>满50减18</span>
                          <span>满100减35</span>
                        </p>
                      </van-col>
                      <van-col span="4">4个优惠</van-col>
                    </van-row>
                  </div>
                </div>
              </div>
              <div class="nr-fl">
                <div class="nr-fl-img">
                  <img src="../assets/img/tpp.webp" alt />
                </div>
                <div class="nr-right">
                  <div class="nr-name">
                    <van-tag color="#FFE829">品牌</van-tag>
                    <span>华莱士（高塘石店）</span>
                    <van-icon name="ellipsis" />
                  </div>
                  <div class="nr-pf">
                    <van-rate v-model="value" />
                    <span>4.4月售2525单</span>
                  </div>
                  <div class="nr-fy">
                    <span class="con">￥0起送</span>
                    <span>远距离配送费￥1.5</span>
                    <span class="right">53分钟</span>
                    <span class="right con">3.34km</span>
                  </div>
                  <div class="nr-bq">
                    <van-tag plain>炸鸡炸串</van-tag>
                  </div>
                  <div class="nr-yh">
                    <van-row>
                      <van-col span="2">
                        <van-tag type="danger">减</van-tag>
                      </van-col>
                      <van-col span="18">
                        <p>
                          <span style="font-size:12px;">满26减8</span>
                          <span>满50减18</span>
                          <span>满100减35</span>
                        </p>
                      </van-col>
                      <van-col span="4">4个优惠</van-col>
                    </van-row>
                  </div>
                </div>
              </div>
              <div class="nr-fl">
                <div class="nr-fl-img">
                  <img src="../assets/img/tpp.webp" alt />
                </div>
                <div class="nr-right">
                  <div class="nr-name">
                    <van-tag color="#FFE829">品牌</van-tag>
                    <span>华莱士（高塘石店）</span>
                    <van-icon name="ellipsis" />
                  </div>
                  <div class="nr-pf">
                    <van-rate v-model="value" />
                    <span>4.4月售2525单</span>
                  </div>
                  <div class="nr-fy">
                    <span class="con">￥0起送</span>
                    <span>远距离配送费￥1.5</span>
                    <span class="right">53分钟</span>
                    <span class="right con">3.34km</span>
                  </div>
                  <div class="nr-bq">
                    <van-tag plain>炸鸡炸串</van-tag>
                  </div>
                  <div class="nr-yh">
                    <van-row>
                      <van-col span="2">
                        <van-tag type="danger">减</van-tag>
                      </van-col>
                      <van-col span="18">
                        <p>
                          <span style="font-size:12px;">满26减8</span>
                          <span>满50减18</span>
                          <span>满100减35</span>
                        </p>
                      </van-col>
                      <van-col span="4">4个优惠</van-col>
                    </van-row>
                  </div>
                </div>
              </div>
              <div class="nr-fl">
                <div class="nr-fl-img">
                  <img src="../assets/img/tpp.webp" alt />
                </div>
                <div class="nr-right">
                  <div class="nr-name">
                    <van-tag color="#FFE829">品牌</van-tag>
                    <span>华莱士（高塘石店）</span>
                    <van-icon name="ellipsis" />
                  </div>
                  <div class="nr-pf">
                    <van-rate v-model="value" />
                    <span>4.4月售2525单</span>
                  </div>
                  <div class="nr-fy">
                    <span class="con">￥0起送</span>
                    <span>远距离配送费￥1.5</span>
                    <span class="right">53分钟</span>
                    <span class="right con">3.34km</span>
                  </div>
                  <div class="nr-bq">
                    <van-tag plain>炸鸡炸串</van-tag>
                  </div>
                  <div class="nr-yh">
                    <van-row>
                      <van-col span="2">
                        <van-tag type="danger">减</van-tag>
                      </van-col>
                      <van-col span="18">
                        <p>
                          <span style="font-size:12px;">满26减8</span>
                          <span>满50减18</span>
                          <span>满100减35</span>
                        </p>
                      </van-col>
                      <van-col span="4">4个优惠</van-col>
                    </van-row>
                  </div>
                </div>
              </div>
            </van-tab>
            <van-tab title="筛选">
              <div class="nr-fl">
                <div class="nr-fl-img">
                  <img src="../assets/img/tpp.webp" alt />
                </div>
                <div class="nr-right">
                  <div class="nr-name">
                    <van-tag color="#FFE829">品牌</van-tag>
                    <span>华莱士（高塘石店）</span>
                    <van-icon name="ellipsis" />
                  </div>
                  <div class="nr-pf">
                    <van-rate v-model="value" />
                    <span>4.4月售2525单</span>
                  </div>
                  <div class="nr-fy">
                    <span class="con">￥0起送</span>
                    <span>远距离配送费￥1.5</span>
                    <span class="right">53分钟</span>
                    <span class="right con">3.34km</span>
                  </div>
                  <div class="nr-bq">
                    <van-tag plain>炸鸡炸串</van-tag>
                  </div>
                  <div class="nr-yh">
                    <van-row>
                      <van-col span="2">
                        <van-tag type="danger">减</van-tag>
                      </van-col>
                      <van-col span="18">
                        <p>
                          <span style="font-size:12px;">满26减8</span>
                          <span>满50减18</span>
                          <span>满100减35</span>
                        </p>
                      </van-col>
                      <van-col span="4">4个优惠</van-col>
                    </van-row>
                  </div>
                </div>
              </div>
              <div class="nr-fl">
                <div class="nr-fl-img">
                  <img src="../assets/img/tpp.webp" alt />
                </div>
                <div class="nr-right">
                  <div class="nr-name">
                    <van-tag color="#FFE829">品牌</van-tag>
                    <span>华莱士（高塘石店）</span>
                    <van-icon name="ellipsis" />
                  </div>
                  <div class="nr-pf">
                    <van-rate v-model="value" />
                    <span>4.4月售2525单</span>
                  </div>
                  <div class="nr-fy">
                    <span class="con">￥0起送</span>
                    <span>远距离配送费￥1.5</span>
                    <span class="right">53分钟</span>
                    <span class="right con">3.34km</span>
                  </div>
                  <div class="nr-bq">
                    <van-tag plain>炸鸡炸串</van-tag>
                  </div>
                  <div class="nr-yh">
                    <van-row>
                      <van-col span="2">
                        <van-tag type="danger">减</van-tag>
                      </van-col>
                      <van-col span="18">
                        <p>
                          <span style="font-size:12px;">满26减8</span>
                          <span>满50减18</span>
                          <span>满100减35</span>
                        </p>
                      </van-col>
                      <van-col span="4">4个优惠</van-col>
                    </van-row>
                  </div>
                </div>
              </div>
              <div class="nr-fl">
                <div class="nr-fl-img">
                  <img src="../assets/img/tpp.webp" alt />
                </div>
                <div class="nr-right">
                  <div class="nr-name">
                    <van-tag color="#FFE829">品牌</van-tag>
                    <span>华莱士（高塘石店）</span>
                    <van-icon name="ellipsis" />
                  </div>
                  <div class="nr-pf">
                    <van-rate v-model="value" />
                    <span>4.4月售2525单</span>
                  </div>
                  <div class="nr-fy">
                    <span class="con">￥0起送</span>
                    <span>远距离配送费￥1.5</span>
                    <span class="right">53分钟</span>
                    <span class="right con">3.34km</span>
                  </div>
                  <div class="nr-bq">
                    <van-tag plain>炸鸡炸串</van-tag>
                  </div>
                  <div class="nr-yh">
                    <van-row>
                      <van-col span="2">
                        <van-tag type="danger">减</van-tag>
                      </van-col>
                      <van-col span="18">
                        <p>
                          <span style="font-size:12px;">满26减8</span>
                          <span>满50减18</span>
                          <span>满100减35</span>
                        </p>
                      </van-col>
                      <van-col span="4">4个优惠</van-col>
                    </van-row>
                  </div>
                </div>
              </div>
              <div class="nr-fl">
                <div class="nr-fl-img">
                  <img src="../assets/img/tpp.webp" alt />
                </div>
                <div class="nr-right">
                  <div class="nr-name">
                    <van-tag color="#FFE829">品牌</van-tag>
                    <span>华莱士（高塘石店）</span>
                    <van-icon name="ellipsis" />
                  </div>
                  <div class="nr-pf">
                    <van-rate v-model="value" />
                    <span>4.4月售2525单</span>
                  </div>
                  <div class="nr-fy">
                    <span class="con">￥0起送</span>
                    <span>远距离配送费￥1.5</span>
                    <span class="right">53分钟</span>
                    <span class="right con">3.34km</span>
                  </div>
                  <div class="nr-bq">
                    <van-tag plain>炸鸡炸串</van-tag>
                  </div>
                  <div class="nr-yh">
                    <van-row>
                      <van-col span="2">
                        <van-tag type="danger">减</van-tag>
                      </van-col>
                      <van-col span="18">
                        <p>
                          <span style="font-size:12px;">满26减8</span>
                          <span>满50减18</span>
                          <span>满100减35</span>
                        </p>
                      </van-col>
                      <van-col span="4">4个优惠</van-col>
                    </van-row>
                  </div>
                </div>
              </div>
            </van-tab>
          </van-tabs>
        </van-tab>
        <van-tab title="韩国炸鸡">
          <van-tabs v-model="item">
            <van-tab title="综合排序">
              <div class="nr-fl">
                <div class="nr-fl-img">
                  <img src="../assets/img/tpp.webp" alt />
                </div>
                <div class="nr-right">
                  <div class="nr-name">
                    <van-tag color="#FFE829">品牌</van-tag>
                    <span>华莱士（高塘石店）</span>
                    <van-icon name="ellipsis" />
                  </div>
                  <div class="nr-pf">
                    <van-rate v-model="value" />
                    <span>4.4月售2525单</span>
                  </div>
                  <div class="nr-fy">
                    <span class="con">￥0起送</span>
                    <span>远距离配送费￥1.5</span>
                    <span class="right">53分钟</span>
                    <span class="right con">3.34km</span>
                  </div>
                  <div class="nr-bq">
                    <van-tag plain>炸鸡炸串</van-tag>
                  </div>
                  <div class="nr-yh">
                    <van-row>
                      <van-col span="2">
                        <van-tag type="danger">减</van-tag>
                      </van-col>
                      <van-col span="18">
                        <p>
                          <span style="font-size:12px;">满26减8</span>
                          <span>满50减18</span>
                          <span>满100减35</span>
                        </p>
                      </van-col>
                      <van-col span="4">4个优惠</van-col>
                    </van-row>
                  </div>
                </div>
              </div>
              <div class="nr-fl">
                <div class="nr-fl-img">
                  <img src="../assets/img/tpp.webp" alt />
                </div>
                <div class="nr-right">
                  <div class="nr-name">
                    <van-tag color="#FFE829">品牌</van-tag>
                    <span>华莱士（高塘石店）</span>
                    <van-icon name="ellipsis" />
                  </div>
                  <div class="nr-pf">
                    <van-rate v-model="value" />
                    <span>4.4月售2525单</span>
                  </div>
                  <div class="nr-fy">
                    <span class="con">￥0起送</span>
                    <span>远距离配送费￥1.5</span>
                    <span class="right">53分钟</span>
                    <span class="right con">3.34km</span>
                  </div>
                  <div class="nr-bq">
                    <van-tag plain>炸鸡炸串</van-tag>
                  </div>
                  <div class="nr-yh">
                    <van-row>
                      <van-col span="2">
                        <van-tag type="danger">减</van-tag>
                      </van-col>
                      <van-col span="18">
                        <p>
                          <span style="font-size:12px;">满26减8</span>
                          <span>满50减18</span>
                          <span>满100减35</span>
                        </p>
                      </van-col>
                      <van-col span="4">4个优惠</van-col>
                    </van-row>
                  </div>
                </div>
              </div>
              <div class="nr-fl">
                <div class="nr-fl-img">
                  <img src="../assets/img/tpp.webp" alt />
                </div>
                <div class="nr-right">
                  <div class="nr-name">
                    <van-tag color="#FFE829">品牌</van-tag>
                    <span>华莱士（高塘石店）</span>
                    <van-icon name="ellipsis" />
                  </div>
                  <div class="nr-pf">
                    <van-rate v-model="value" />
                    <span>4.4月售2525单</span>
                  </div>
                  <div class="nr-fy">
                    <span class="con">￥0起送</span>
                    <span>远距离配送费￥1.5</span>
                    <span class="right">53分钟</span>
                    <span class="right con">3.34km</span>
                  </div>
                  <div class="nr-bq">
                    <van-tag plain>炸鸡炸串</van-tag>
                  </div>
                  <div class="nr-yh">
                    <van-row>
                      <van-col span="2">
                        <van-tag type="danger">减</van-tag>
                      </van-col>
                      <van-col span="18">
                        <p>
                          <span style="font-size:12px;">满26减8</span>
                          <span>满50减18</span>
                          <span>满100减35</span>
                        </p>
                      </van-col>
                      <van-col span="4">4个优惠</van-col>
                    </van-row>
                  </div>
                </div>
              </div>
              <div class="nr-fl">
                <div class="nr-fl-img">
                  <img src="../assets/img/tpp.webp" alt />
                </div>
                <div class="nr-right">
                  <div class="nr-name">
                    <van-tag color="#FFE829">品牌</van-tag>
                    <span>华莱士（高塘石店）</span>
                    <van-icon name="ellipsis" />
                  </div>
                  <div class="nr-pf">
                    <van-rate v-model="value" />
                    <span>4.4月售2525单</span>
                  </div>
                  <div class="nr-fy">
                    <span class="con">￥0起送</span>
                    <span>远距离配送费￥1.5</span>
                    <span class="right">53分钟</span>
                    <span class="right con">3.34km</span>
                  </div>
                  <div class="nr-bq">
                    <van-tag plain>炸鸡炸串</van-tag>
                  </div>
                  <div class="nr-yh">
                    <van-row>
                      <van-col span="2">
                        <van-tag type="danger">减</van-tag>
                      </van-col>
                      <van-col span="18">
                        <p>
                          <span style="font-size:12px;">满26减8</span>
                          <span>满50减18</span>
                          <span>满100减35</span>
                        </p>
                      </van-col>
                      <van-col span="4">4个优惠</van-col>
                    </van-row>
                  </div>
                </div>
              </div>
            </van-tab>
            <van-tab title="距离最近">
              <div class="nr-fl">
                <div class="nr-fl-img">
                  <img src="../assets/img/tpp.webp" alt />
                </div>
                <div class="nr-right">
                  <div class="nr-name">
                    <van-tag color="#FFE829">品牌</van-tag>
                    <span>华莱士（高塘石店）</span>
                    <van-icon name="ellipsis" />
                  </div>
                  <div class="nr-pf">
                    <van-rate v-model="value" />
                    <span>4.4月售2525单</span>
                  </div>
                  <div class="nr-fy">
                    <span class="con">￥0起送</span>
                    <span>远距离配送费￥1.5</span>
                    <span class="right">53分钟</span>
                    <span class="right con">3.34km</span>
                  </div>
                  <div class="nr-bq">
                    <van-tag plain>炸鸡炸串</van-tag>
                  </div>
                  <div class="nr-yh">
                    <van-row>
                      <van-col span="2">
                        <van-tag type="danger">减</van-tag>
                      </van-col>
                      <van-col span="18">
                        <p>
                          <span style="font-size:12px;">满26减8</span>
                          <span>满50减18</span>
                          <span>满100减35</span>
                        </p>
                      </van-col>
                      <van-col span="4">4个优惠</van-col>
                    </van-row>
                  </div>
                </div>
              </div>
              <div class="nr-fl">
                <div class="nr-fl-img">
                  <img src="../assets/img/tpp.webp" alt />
                </div>
                <div class="nr-right">
                  <div class="nr-name">
                    <van-tag color="#FFE829">品牌</van-tag>
                    <span>华莱士（高塘石店）</span>
                    <van-icon name="ellipsis" />
                  </div>
                  <div class="nr-pf">
                    <van-rate v-model="value" />
                    <span>4.4月售2525单</span>
                  </div>
                  <div class="nr-fy">
                    <span class="con">￥0起送</span>
                    <span>远距离配送费￥1.5</span>
                    <span class="right">53分钟</span>
                    <span class="right con">3.34km</span>
                  </div>
                  <div class="nr-bq">
                    <van-tag plain>炸鸡炸串</van-tag>
                  </div>
                  <div class="nr-yh">
                    <van-row>
                      <van-col span="2">
                        <van-tag type="danger">减</van-tag>
                      </van-col>
                      <van-col span="18">
                        <p>
                          <span style="font-size:12px;">满26减8</span>
                          <span>满50减18</span>
                          <span>满100减35</span>
                        </p>
                      </van-col>
                      <van-col span="4">4个优惠</van-col>
                    </van-row>
                  </div>
                </div>
              </div>
              <div class="nr-fl">
                <div class="nr-fl-img">
                  <img src="../assets/img/tpp.webp" alt />
                </div>
                <div class="nr-right">
                  <div class="nr-name">
                    <van-tag color="#FFE829">品牌</van-tag>
                    <span>华莱士（高塘石店）</span>
                    <van-icon name="ellipsis" />
                  </div>
                  <div class="nr-pf">
                    <van-rate v-model="value" />
                    <span>4.4月售2525单</span>
                  </div>
                  <div class="nr-fy">
                    <span class="con">￥0起送</span>
                    <span>远距离配送费￥1.5</span>
                    <span class="right">53分钟</span>
                    <span class="right con">3.34km</span>
                  </div>
                  <div class="nr-bq">
                    <van-tag plain>炸鸡炸串</van-tag>
                  </div>
                  <div class="nr-yh">
                    <van-row>
                      <van-col span="2">
                        <van-tag type="danger">减</van-tag>
                      </van-col>
                      <van-col span="18">
                        <p>
                          <span style="font-size:12px;">满26减8</span>
                          <span>满50减18</span>
                          <span>满100减35</span>
                        </p>
                      </van-col>
                      <van-col span="4">4个优惠</van-col>
                    </van-row>
                  </div>
                </div>
              </div>
              <div class="nr-fl">
                <div class="nr-fl-img">
                  <img src="../assets/img/tpp.webp" alt />
                </div>
                <div class="nr-right">
                  <div class="nr-name">
                    <van-tag color="#FFE829">品牌</van-tag>
                    <span>华莱士（高塘石店）</span>
                    <van-icon name="ellipsis" />
                  </div>
                  <div class="nr-pf">
                    <van-rate v-model="value" />
                    <span>4.4月售2525单</span>
                  </div>
                  <div class="nr-fy">
                    <span class="con">￥0起送</span>
                    <span>远距离配送费￥1.5</span>
                    <span class="right">53分钟</span>
                    <span class="right con">3.34km</span>
                  </div>
                  <div class="nr-bq">
                    <van-tag plain>炸鸡炸串</van-tag>
                  </div>
                  <div class="nr-yh">
                    <van-row>
                      <van-col span="2">
                        <van-tag type="danger">减</van-tag>
                      </van-col>
                      <van-col span="18">
                        <p>
                          <span style="font-size:12px;">满26减8</span>
                          <span>满50减18</span>
                          <span>满100减35</span>
                        </p>
                      </van-col>
                      <van-col span="4">4个优惠</van-col>
                    </van-row>
                  </div>
                </div>
              </div>
            </van-tab>
            <van-tab title="品质联盟">
              <div class="nr-fl">
                <div class="nr-fl-img">
                  <img src="../assets/img/tpp.webp" alt />
                </div>
                <div class="nr-right">
                  <div class="nr-name">
                    <van-tag color="#FFE829">品牌</van-tag>
                    <span>华莱士（高塘石店）</span>
                    <van-icon name="ellipsis" />
                  </div>
                  <div class="nr-pf">
                    <van-rate v-model="value" />
                    <span>4.4月售2525单</span>
                  </div>
                  <div class="nr-fy">
                    <span class="con">￥0起送</span>
                    <span>远距离配送费￥1.5</span>
                    <span class="right">53分钟</span>
                    <span class="right con">3.34km</span>
                  </div>
                  <div class="nr-bq">
                    <van-tag plain>炸鸡炸串</van-tag>
                  </div>
                  <div class="nr-yh">
                    <van-row>
                      <van-col span="2">
                        <van-tag type="danger">减</van-tag>
                      </van-col>
                      <van-col span="18">
                        <p>
                          <span style="font-size:12px;">满26减8</span>
                          <span>满50减18</span>
                          <span>满100减35</span>
                        </p>
                      </van-col>
                      <van-col span="4">4个优惠</van-col>
                    </van-row>
                  </div>
                </div>
              </div>
              <div class="nr-fl">
                <div class="nr-fl-img">
                  <img src="../assets/img/tpp.webp" alt />
                </div>
                <div class="nr-right">
                  <div class="nr-name">
                    <van-tag color="#FFE829">品牌</van-tag>
                    <span>华莱士（高塘石店）</span>
                    <van-icon name="ellipsis" />
                  </div>
                  <div class="nr-pf">
                    <van-rate v-model="value" />
                    <span>4.4月售2525单</span>
                  </div>
                  <div class="nr-fy">
                    <span class="con">￥0起送</span>
                    <span>远距离配送费￥1.5</span>
                    <span class="right">53分钟</span>
                    <span class="right con">3.34km</span>
                  </div>
                  <div class="nr-bq">
                    <van-tag plain>炸鸡炸串</van-tag>
                  </div>
                  <div class="nr-yh">
                    <van-row>
                      <van-col span="2">
                        <van-tag type="danger">减</van-tag>
                      </van-col>
                      <van-col span="18">
                        <p>
                          <span style="font-size:12px;">满26减8</span>
                          <span>满50减18</span>
                          <span>满100减35</span>
                        </p>
                      </van-col>
                      <van-col span="4">4个优惠</van-col>
                    </van-row>
                  </div>
                </div>
              </div>
              <div class="nr-fl">
                <div class="nr-fl-img">
                  <img src="../assets/img/tpp.webp" alt />
                </div>
                <div class="nr-right">
                  <div class="nr-name">
                    <van-tag color="#FFE829">品牌</van-tag>
                    <span>华莱士（高塘石店）</span>
                    <van-icon name="ellipsis" />
                  </div>
                  <div class="nr-pf">
                    <van-rate v-model="value" />
                    <span>4.4月售2525单</span>
                  </div>
                  <div class="nr-fy">
                    <span class="con">￥0起送</span>
                    <span>远距离配送费￥1.5</span>
                    <span class="right">53分钟</span>
                    <span class="right con">3.34km</span>
                  </div>
                  <div class="nr-bq">
                    <van-tag plain>炸鸡炸串</van-tag>
                  </div>
                  <div class="nr-yh">
                    <van-row>
                      <van-col span="2">
                        <van-tag type="danger">减</van-tag>
                      </van-col>
                      <van-col span="18">
                        <p>
                          <span style="font-size:12px;">满26减8</span>
                          <span>满50减18</span>
                          <span>满100减35</span>
                        </p>
                      </van-col>
                      <van-col span="4">4个优惠</van-col>
                    </van-row>
                  </div>
                </div>
              </div>
              <div class="nr-fl">
                <div class="nr-fl-img">
                  <img src="../assets/img/tpp.webp" alt />
                </div>
                <div class="nr-right">
                  <div class="nr-name">
                    <van-tag color="#FFE829">品牌</van-tag>
                    <span>华莱士（高塘石店）</span>
                    <van-icon name="ellipsis" />
                  </div>
                  <div class="nr-pf">
                    <van-rate v-model="value" />
                    <span>4.4月售2525单</span>
                  </div>
                  <div class="nr-fy">
                    <span class="con">￥0起送</span>
                    <span>远距离配送费￥1.5</span>
                    <span class="right">53分钟</span>
                    <span class="right con">3.34km</span>
                  </div>
                  <div class="nr-bq">
                    <van-tag plain>炸鸡炸串</van-tag>
                  </div>
                  <div class="nr-yh">
                    <van-row>
                      <van-col span="2">
                        <van-tag type="danger">减</van-tag>
                      </van-col>
                      <van-col span="18">
                        <p>
                          <span style="font-size:12px;">满26减8</span>
                          <span>满50减18</span>
                          <span>满100减35</span>
                        </p>
                      </van-col>
                      <van-col span="4">4个优惠</van-col>
                    </van-row>
                  </div>
                </div>
              </div>
            </van-tab>
            <van-tab title="筛选">
              <div class="nr-fl">
                <div class="nr-fl-img">
                  <img src="../assets/img/tpp.webp" alt />
                </div>
                <div class="nr-right">
                  <div class="nr-name">
                    <van-tag color="#FFE829">品牌</van-tag>
                    <span>华莱士（高塘石店）</span>
                    <van-icon name="ellipsis" />
                  </div>
                  <div class="nr-pf">
                    <van-rate v-model="value" />
                    <span>4.4月售2525单</span>
                  </div>
                  <div class="nr-fy">
                    <span class="con">￥0起送</span>
                    <span>远距离配送费￥1.5</span>
                    <span class="right">53分钟</span>
                    <span class="right con">3.34km</span>
                  </div>
                  <div class="nr-bq">
                    <van-tag plain>炸鸡炸串</van-tag>
                  </div>
                  <div class="nr-yh">
                    <van-row>
                      <van-col span="2">
                        <van-tag type="danger">减</van-tag>
                      </van-col>
                      <van-col span="18">
                        <p>
                          <span style="font-size:12px;">满26减8</span>
                          <span>满50减18</span>
                          <span>满100减35</span>
                        </p>
                      </van-col>
                      <van-col span="4">4个优惠</van-col>
                    </van-row>
                  </div>
                </div>
              </div>
              <div class="nr-fl">
                <div class="nr-fl-img">
                  <img src="../assets/img/tpp.webp" alt />
                </div>
                <div class="nr-right">
                  <div class="nr-name">
                    <van-tag color="#FFE829">品牌</van-tag>
                    <span>华莱士（高塘石店）</span>
                    <van-icon name="ellipsis" />
                  </div>
                  <div class="nr-pf">
                    <van-rate v-model="value" />
                    <span>4.4月售2525单</span>
                  </div>
                  <div class="nr-fy">
                    <span class="con">￥0起送</span>
                    <span>远距离配送费￥1.5</span>
                    <span class="right">53分钟</span>
                    <span class="right con">3.34km</span>
                  </div>
                  <div class="nr-bq">
                    <van-tag plain>炸鸡炸串</van-tag>
                  </div>
                  <div class="nr-yh">
                    <van-row>
                      <van-col span="2">
                        <van-tag type="danger">减</van-tag>
                      </van-col>
                      <van-col span="18">
                        <p>
                          <span style="font-size:12px;">满26减8</span>
                          <span>满50减18</span>
                          <span>满100减35</span>
                        </p>
                      </van-col>
                      <van-col span="4">4个优惠</van-col>
                    </van-row>
                  </div>
                </div>
              </div>
              <div class="nr-fl">
                <div class="nr-fl-img">
                  <img src="../assets/img/tpp.webp" alt />
                </div>
                <div class="nr-right">
                  <div class="nr-name">
                    <van-tag color="#FFE829">品牌</van-tag>
                    <span>华莱士（高塘石店）</span>
                    <van-icon name="ellipsis" />
                  </div>
                  <div class="nr-pf">
                    <van-rate v-model="value" />
                    <span>4.4月售2525单</span>
                  </div>
                  <div class="nr-fy">
                    <span class="con">￥0起送</span>
                    <span>远距离配送费￥1.5</span>
                    <span class="right">53分钟</span>
                    <span class="right con">3.34km</span>
                  </div>
                  <div class="nr-bq">
                    <van-tag plain>炸鸡炸串</van-tag>
                  </div>
                  <div class="nr-yh">
                    <van-row>
                      <van-col span="2">
                        <van-tag type="danger">减</van-tag>
                      </van-col>
                      <van-col span="18">
                        <p>
                          <span style="font-size:12px;">满26减8</span>
                          <span>满50减18</span>
                          <span>满100减35</span>
                        </p>
                      </van-col>
                      <van-col span="4">4个优惠</van-col>
                    </van-row>
                  </div>
                </div>
              </div>
              <div class="nr-fl">
                <div class="nr-fl-img">
                  <img src="../assets/img/tpp.webp" alt />
                </div>
                <div class="nr-right">
                  <div class="nr-name">
                    <van-tag color="#FFE829">品牌</van-tag>
                    <span>华莱士（高塘石店）</span>
                    <van-icon name="ellipsis" />
                  </div>
                  <div class="nr-pf">
                    <van-rate v-model="value" />
                    <span>4.4月售2525单</span>
                  </div>
                  <div class="nr-fy">
                    <span class="con">￥0起送</span>
                    <span>远距离配送费￥1.5</span>
                    <span class="right">53分钟</span>
                    <span class="right con">3.34km</span>
                  </div>
                  <div class="nr-bq">
                    <van-tag plain>炸鸡炸串</van-tag>
                  </div>
                  <div class="nr-yh">
                    <van-row>
                      <van-col span="2">
                        <van-tag type="danger">减</van-tag>
                      </van-col>
                      <van-col span="18">
                        <p>
                          <span style="font-size:12px;">满26减8</span>
                          <span>满50减18</span>
                          <span>满100减35</span>
                        </p>
                      </van-col>
                      <van-col span="4">4个优惠</van-col>
                    </van-row>
                  </div>
                </div>
              </div>
            </van-tab>
          </van-tabs>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      item: 0,
      value: 3
    };
  }
};
</script>

<style lang="scss">
.nr-fl {
  background-color: #fff;
  padding: 5px;
  position: relative;
  overflow: hidden;
  .nr-fl-img {
    float: left;
    width: 80px;
    height: 80px;
    position: relative;
    overflow: hidden;
    margin-right: 5px;
    img {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      margin: auto;
    }
  }
  .nr-right {
    .nr-name {
      margin-bottom: 10px;
      .van-tag {
        color: #000;
        margin-right: 4px;
      }
      span {
        font-weight: bold;
      }
      .van-icon-ellipsis {
        float: right;
      }
    }
    .nr-pf {
      margin-bottom: 10px;
      .van-rate {
        display: inline-block;
        margin-right: 10px;
        .van-rate__item {
          .van-icon {
            font-size: 10px;
          }
        }
      }
      span {
        font-size: 12px;
      }
    }
    .nr-fy {
      span {
        font-size: 10px;
        color: #ccc;
      }
      span.right {
        float: right;
      }
      span.con {
        padding-right: 10px;
        margin-right: 10px;
        border-right: 1px solid #ccc;
      }
    }
    .nr-bq {
      display: inline-block;
      margin-left: 80px;
      margin-bottom: 10px;
      .van-tag {
      }
    }
    .nr-yh {
      margin-left: 80px;
      .van-col--18 {
        p {
          font-size: 12px;
          span {
            font-size: 10px;
          }
        }
      }
      .van-col--4 {
        font-size: 10px;
        color: #ccc;
      }
    }
  }
}
</style>

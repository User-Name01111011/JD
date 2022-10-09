<template>
  <div class="top-bar">
    <div class="shortcut-btn">
      <div class="area dt">
        <i class="iconfont iconfont-location"></i>
        <span class="area-text">{{topBarTree.areas[store.area].name}}</span>
      </div>
      <div class="dd">
        <ul class="ui-areamini-list">
          <li v-for="item in topBarTree.areas" @click="areaClick(item.id)" :class="{ active: store.area == item.id}"
            :key="item.id"><a>{{item.name}}</a></li>
        </ul>
      </div>
    </div>
    <ul class="shortcut">
      <li>
        <div class="dt">
          <a class="link-login">你好，请登录</a>
          <a class="link-regist style-red">免费注册</a>
        </div>
      </li>
      <li>
        <div class="dt"><a href="#" target="_blank" rel="noopener noreferrer">我的订单</a></div>
      </li>
      <li class="shortcut-btn">
        <div class="dt">
          <a href="#" target="_blank" rel="noopener noreferrer">我的京东</a>
          <i class="iconfont"></i>
        </div>
        <div class="dd">
          <ul class="myjd-list" v-for="itemf in topBarTree.myjds">
            <li v-for="itemc in itemf"><a :href="itemc.href" target="_blank"
                rel="noopener noreferrer">{{itemc.name}}</a></li>
          </ul>
        </div>
      </li>
      <li>
        <div class="dt"><a href="#" target="_blank" rel="noopener noreferrer">京东会员</a></div>
      </li>
      <li class="shortcut-btn">
        <div class="dt">
          <a href="#" target="_blank" rel="noopener noreferrer" class="style-red">企业采购</a>
          <i class="iconfont"></i>
        </div>
        <div class="dd">
          <ul class="company-list">
            <li v-for="item of topBarTree.companies"><a :href="item.href" target="_blank"
                rel="noopener noreferrer">{{item.name}}</a></li>
          </ul>
        </div>
      </li>
      <li class="shortcut-btn serve">
        <div class="dt">
          <a href="#">商家服务</a>
          <i class="iconfont"></i>
        </div>
        <div class="dd">
          <ul class="serve-list">
            <li v-for="item of topBarTree.serves"><a :href="item.href" target="_blank"
                rel="noopener noreferrer">{{item.name}}</a></li>
          </ul>
        </div>
      </li>
      <li class="shortcut-btn navs">
        <div class="dt">
          <a href="#">网站导航</a>
          <i class="iconfont"></i>
        </div>
        <div class="dd">
          <div v-for="itemf of topBarTree.navs" class="navs-wrapper">
            <h5>{{itemf.title}}</h5>
            <ul class="navs-list">
              <li v-for="itemc of itemf.list"><a :href="itemc.href" target="_blank"
                  rel="noopener noreferrer">{{itemc.name}}</a></li>
            </ul>
          </div>
        </div>
      </li>
      <li class="mobile">
        <div class="dt">
          <a href="#">手机京东</a>
        </div>
        <div class="mobile_static">
          <div class="mobile_static_qrcode"></div>
        </div>
        <div class="mobile_pop">
          <div>
            <div class="mobile_pop_item">
              <div class="mobile_pop_qrcode mobile_pop_qrcode_1"><img
                  src="//img12.360buyimg.com/img/jfs/t1/67481/15/565/28110/5cec9234E71c47244/dc4cf353fd96922e.png.avif">
              </div>
              <div class="mobile_pop_info">
                <h5 class="mobile_pop_tit">手机京东</h5>
                <p class="mobile_pop_value">新人专享大礼包</p>
                <p class="mobile_pop_device">
                  <a class="mobile_pop_device_lk mobile_pop_device_ios"
                    href="https://itunes.apple.com/cn/app/id414245413" target="_blank">APP Store</a>
                  <a class="mobile_pop_device_lk mobile_pop_device_and"
                    href="https://storage.jd.com/jdmobile/JDMALL-PC2.apk" target="_blank">安卓市场</a>
                  <a class="mobile_pop_device_lk mobile_pop_device_pad"
                    href="https://itunes.apple.com/cn/app/jing-dong-hd/id434374726" target="_blank">APP Store</a>
                </p>
              </div>
            </div>
            <div class="mobile_pop_item">
              <div class="mobile_pop_qrcode mobile_pop_qrcode_2">
                <img
                  src="//img10.360buyimg.com/img/jfs/t1/133427/32/6189/44062/5f2a5467Efff804d1/7cbc252ed5993190.png.avif">
              </div>
              <div class="mobile_pop_info">
                <h5 class="mobile_pop_tit">关注京东JD.COM</h5>
                <p class="mobile_pop_value">抢5元红包</p>
              </div>
            </div>
            <div class="mobile_pop_item">
              <div class="mobile_pop_qrcode mobile_pop_qrcode_3"><img
                  src="//img14.360buyimg.com/img/jfs/t1/36947/5/10895/15408/5cec924bE6c038530/5cf21582b416c186.jpg.avif">
              </div>
              <div class="mobile_pop_info">
                <h5 class="mobile_pop_tit"><a href="https://m.jr.jd.com/integrate/download/html/pc.html"
                    target="_blank">京东金融客户端</a>
                </h5>
                <p class="mobile_pop_value">新人专享大礼包</p>
                <p class="mobile_pop_device"><a class="mobile_pop_device_lk mobile_pop_device_ios"
                    href="https://itunes.apple.com/cn/app/jing-dong-jin-rong-hui-li/id895682747?mt=8"
                    target="_blank">APP Store</a>
                  <a class="mobile_pop_device_lk mobile_pop_device_and"
                    href="http://211.151.9.66/downapp/jrapp_jr188.apk" target="_blank">安卓市场</a>
                </p>
              </div>
            </div>
            <div class="mobile_pop_item">
              <div class="mobile_pop_qrcode mobile_pop_qrcode_4"><img
                  src="//img13.360buyimg.com/img/jfs/t1/93019/8/17752/28300/5e8c23b8E4c6c7c13/9c45c518ad785873.png.avif">
              </div>
              <div class="mobile_pop_info">
                <h5 class="mobile_pop_tit">京东健康客户端</h5>
                <p class="mobile_pop_value"></p>
                <p class="mobile_pop_device">
                  <a class="mobile_pop_device_lk mobile_pop_device_ios"
                    href="https://hlc.m.jd.com/download/?downloadSource=jdh_JDcom" target="_blank">APP Store</a>
                  <a class="mobile_pop_device_lk mobile_pop_device_and"
                    href="https://hlc.m.jd.com/download/?downloadSource=jdh_JDcom" target="_blank">安卓市场</a>
                </p>
              </div>
            </div>
            <div class="mobile_pop_item">
              <div class="mobile_pop_qrcode mobile_pop_qrcode_5">
                <img
                  src="//img12.360buyimg.com/img/jfs/t1/170279/40/10824/19657/6045bf7dE610d6258/3e925badd90757a3.jpg.avif">
              </div>
              <div class="mobile_pop_info">
                <h5 class="mobile_pop_tit">关注京东小程序</h5>
                <p class="mobile_pop_value">新人0.1元购</p>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li>
        <div class="dt"><a>网站无障碍</a></div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { store } from '@/store.js'

import topBarTree from './topBar.json'

function areaClick(id) {
  store.area = id
}
</script>

<style lang="scss" scoped>
.top-bar {
  @include wrapper;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 30px;
  border-bottom: 1px solid #ddd;
  background-color: #e3e4e5;
  font-size: 12px;
  line-height: 28px;
  color: #999;

  .style-red {
    color: #f10215;
  }

  .dt {
    height: 30px;
    padding: 0 7px;
  }

  .iconfont {
    display: inline-block;
    width: 12px;
    height: 12px;
    margin: 0 -3px 0 4px;
  }

  .dd {
    display: none;
    border: 1px solid #ccc;
    background-color: #fff;
    -webkit-box-shadow: 1px 2px 1px rgb(0 0 0 / 10%);
    box-shadow: 1px 2px 1px rgb(0 0 0 / 10%);
    position: absolute;
    top: 29px;
    z-index: 9;
  }

  a:hover {
    color: #e33333;
  }
}

.area {
  cursor: pointer;
  position: relative;

  .iconfont {
    font-size: 14px;
    color: #f10215;
    margin-right: 4px;
  }
}

.iconfont {
  font-family: iconfont, sans-serif;
  font-style: normal;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}

.shortcut {
  display: flex;

  >li {
    display: flex;
    align-items: center;

    &:nth-last-child(n + 2)::after {
      content: '|';
      width: 1px;
      margin: 0 5px;
      color: #ccc;
    }
  }
}

.link-login {
  margin: 0 7px 0 0;
}

.shortcut-btn {
  box-sizing: border-box;
  position: relative;

  .dt {
    z-index: 10;

    border: 1px solid #e3e4e5 {
      bottom: none;
    }
  }

  &:hover {
    border-color: #ccc;

    .dd {
      display: block;
    }

    &.navs {
      .dd {
        display: flex;
      }
    }

    .dt {
      background-color: #fff;
      border-color: #ccc;
    }
  }

  &.serve {
    .dd {
      right: 11px;
      width: 170px;
      padding: 10px 0;
    }
  }

  &.navs {
    .dd {
      display: none;
      align-items: flex-start;
      right: -88px;
      width: 1188px;
      padding: 15px 0;
    }
  }

  &.mobile {
    width: 88px;
  }
}

.ui-areamini-list {
  @include flex-wrap;
  width: 300px;
  padding: 10px;

  li {
    width: 60px;
    padding: 2px 0;
    cursor: pointer;

    a {
      display: inline-block;
      padding: 0 8px;
      line-height: 24px;

      &:hover {
        background-color: #f4f4f4;
      }
    }

    &.active {
      a {
        background-color: #f10215;
        color: #fff;
      }
    }
  }
}

.myjd-list {
  @include flex-wrap;
  width: 265px;
  padding: 10px 0 10px 15px;
  overflow: hidden;

  &:nth-child(n + 2) {
    border-top: 1px solid #f1f1f1;
  }

  li {
    width: 88px;
  }
}

.company-list {
  @include flex-wrap;
  left: 0;
  width: 140px;
  padding: 10px 0 10px 12px;

  li {
    max-width: calc(100% - 11px);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    &:nth-child(odd) {
      padding-right: 11px;
    }
  }
}

.serve-list {
  @include flex-wrap;

  li {
    width: 70px;
    padding: 0 0 0 15px;
  }
}

.navs-wrapper {
  width: 255px;
  padding-left: 20px;

  &:first-child {
    width: 340px;
  }

  &:nth-child(n + 2) {
    border-left: 1px solid #eee;
  }

  h5 {
    margin-bottom: 5px;
    font-weight: 700;
    color: #666;
  }
}

.navs-list {
  @include flex-wrap;

  li {
    overflow: hidden;
    width: 85px;
    white-space: nowrap;
  }
}

.mobile {
  position: relative;

  &:hover {
    .mobile_pop {
      display: block;
    }

    .mobile_static {
      display: none;
    }
  }
}

.mobile_static {
  position: absolute;
  top: 35px;
  left: 0;
  width: 76px;
  height: 76px;
  background: #fff;
  -webkit-box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
  box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
}

.mobile_static_qrcode {
  margin: 5px auto;
  width: 66px;
  height: 66px;
  background: #f6f6f6 url(data:image/png;base64,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) 50% no-repeat;
}

.mobile_pop,
.mobile_static {
  &:before {
    content: "";
    position: absolute;
    display: block;
    top: -9px;
    left: 50%;
    margin-left: -5px;
    width: 0;
    height: 0;
    line-height: 0;
    font-size: 0;
    border: 5px solid transparent;
    border-bottom-color: #fff;
  }
}

.mobile_pop {
  display: none;
  position: absolute;
  left: auto;
  right: 0;
  top: 30px;
  width: 190px;
  background-color: #fff;
  border: 1px solid #cfcfcf;
  border-bottom: 3px solid #60575a;
  z-index: 9;

  &:before {
    border-color: transparent transparent #fff;
    left: 154px;
  }
}

.mobile_pop_item {
  display: flex;
  align-items: flex-start;
  position: relative;
  z-index: 5;
  padding: 15px 5px;
  border-bottom: 1px solid #e7e7e7;
}

.mobile_pop_qrcode {
  width: 74px;
  height: 74px;
  border: 1px solid #ccc;
  background-color: #f7f7f7;

  img {
    width: 70px;
    height: 70px;
    margin: 2px 0 0 2px;
  }
}

.mobile_pop_info {
  margin: 0 0 0 5px;
  min-height: 70px;
}

.mobile_pop_tit {
  color: #666;
  font-size: 12px;
  line-height: 17px;
}

.mobile_pop_value {
  margin: 3px 0;
  line-height: 14px;
  color: #f10214;
}

.mobile_pop_device,
.mobile_pop_device_lk {
  overflow: hidden;
  height: 25px;
}

.mobile_pop_device_ios {
  background-position: 0 0;
}

.mobile_pop_device_and {
  background-position: 0 -26px;
}

.mobile_pop_device_pad {
  background-position: 0 -52px;
}

.mobile_pop_device_lk {
  float: left;
  margin-right: 2px;
  width: 25px;
  font-size: 0;
}

.mobile_pop_device_lk {
  background-image: url(//misc.360buyimg.com/mtd/pc/index/home/images/sprite_mobile@1x.png);
}
</style>
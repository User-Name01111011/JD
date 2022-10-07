<template>
  <header class="header">
    <div @mouseenter="logoEnter" class="logo">
      <a href="#" class="logo-icon"></a>
      <a href="#" class="logo-scene" :class="{active: logoStatus.isEnter}" :style="logoStatus.bg">
        <p class="logo_scene_text" :class="{active: logoStatus.isText}">轻松做大餐</p>
        <p class="logo_scene_btn" :class="{active: logoStatus.isText}">去看看&gt;</p>
      </a>
    </div>
    <div class="center" :class="{fixtop: scrollY > 670}">
      <a href="#" class="logo"></a>
      <form action="get" class="search">
        <input class="input" type="text" :placeholder="placeholderArr[placeholderIndex]" />
        <span class="photo-search-btn">
          <span class="photo-search-login"></span>
        </span>
        <button class="btn"><i class="iconfont"></i></button>
      </form>
      <div class="settleup" clstag="h|keycount|h|keycount|head|cart_null">
        <div class="cw-icon">
          <i class="iconfont"></i>
          <a target="_blank" href="#">我的购物车</a>
          <span class="ci-count">{{store.settleUpCount}}</span>
        </div>
        <div class="dropdown-layer">
          <div id="J_cart_pop"><span class="loading"></span></div>
        </div>
      </div>
      <div class="hotwords">
        <a v-for="item of hotWords" :href="item.href" target="_blank">{{item.name}}</a>
      </div>
      <ul class="navitems" role="navigation">
        <li v-for="item of navList"><a target="_blank" :href="item.href">{{item.name}}</a></li>
      </ul>
    </div>
    <div class="treasure"><a id="J_promo_lk" class="promo_lk" href="treasure.href" target="_blank"
        style="treasure.style"></a>
    </div>
  </header>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { store } from '@/store.js'

let placeholderIndex = ref(0)
let placeholderArr = ['雷神笔记本', '怡宝矿泉水', '黄金手链', '针式打印机']

let hotWords = [{ name: "电脑数码日", href: "#" }, { name: "出行防疫", href: "#" }, { name: "潮玩电子", href: "#" }, { name: "iPhone14", href: "#" }, { name: "热卖潮品", href: "#" }, { name: "京东京造", href: "#" }, { name: "手机爆款", href: "#" }]

let navList = [{ name: "京东五金城", href: "#" }, { name: "京东超市", href: "#" }, { name: "秒杀", href: "#" }, { name: "京东家电", href: "#" }, { name: "京东生鲜", href: "#" }, { name: "优惠券", href: "#" }, { name: "PLUS会员", href: "#" }, { name: "拍卖", href: "#" }, { name: "品牌闪购", href: "#" }, { name: "进口好物", href: "#" }]

let treasure = { href: "//pro.jd.com/mall/active/8ip7u8QSsCD8XAxsNPWAujLACbs/index.html?babelChannel=ttt4", style: "background-image: url(//img11.360buyimg.com/babel/jfs/t1/208615/31/26072/71483/63326a8dEd27dc0d4/b16acc0caaec4c85.png.avif;); background-size: cover;" }

let logoStatus = reactive({
  bg: '',
  isEnter: false,
  isText: false
})
function logoEnter() {
  if (logoStatus.isEnter) return
  logoStatus.isEnter = true
  let timeStamp = new Date().getTime()
  logoStatus.bg = 'background-image: url(//img1.360buyimg.com/da/jfs/t1/14716/32/11447/94000/5c90a83bEaa611013/18490bf08654ba09.gif?v=' + timeStamp + ');'
  setTimeout(() => {
    logoStatus.isEnter = false
    // logoStatus.logoSceneBg = ''
  }, 6000)
  setTimeout(() => {
    logoStatus.isText = true
    setTimeout(() => {
      logoStatus.isText = false
    }, 3000)
  }, 3000)
}
const props = defineProps(['scrollY'])
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  @include wrapper;
  height: 130px;
  background: #fff;
  border-bottom: 1px solid #ddd;

  padding: {
    top: 10px;
  }

  >.logo {
    width: 190px;
    height: 120px;
    background-color: #fff;
    position: relative;

    .logo-icon {
      display: block;
      width: 190px;
      height: 120px;
      background: url(//misc.360buyimg.com/mtd/pc/index_2019/1.0.1/assets/sprite/header/sprite.png) no-repeat;
      overflow: hidden;
    }

    .logo-scene {
      width: 100%;
      height: 100%;
      background-color: #fff;
      margin: 0 auto;
      filter: alpha(opacity=0);
      background: #fff no-repeat center/auto 100%;
      position: absolute;
      top: 0;
      opacity: 0;
      z-index: 1;
      text-align: center;
      line-height: 20px;

      &.active {
        opacity: 1;
        filter: alpha(opacity=100);
      }

      .logo_scene_text {
        background: transparent;

        margin: {
          top: 36px;
        }

        color: rgb(155, 120, 83);

        font: {
          size: 16px;
          weight: 700;
        }
      }

      .logo_scene_btn {
        width: 60px;
        background: rgb(255, 208, 125) no-repeat 50%;
        border-radius: 11px;
        margin: 10px auto 0;
        text-align: center;
        text-indent: 4px;
        color: #fff;
        font-size: 12px;
      }

      .logo_scene_btn,
      .logo_scene_text {
        opacity: 0;
        filter: alpha(opacity=0);
        transition: .3s;

        &.active {
          opacity: 1;
          filter: alpha(opacity=100);
        }
      }
    }
  }

  .center {
    @include flex-wrap;
    justify-content: right;
    width: 800px;
    padding: 15px 0 0;
    overflow: hidden;

    >.logo {
      display: none;
      width: 125px;
      height: 40px;

      background: {
        image: url(//misc.360buyimg.com/mtd/pc/index_2019/1.0.1/assets/sprite/header/sprite.png);
        position: 0 -120px;
        repeat: no-repeat;
      }
    }

    &.fixtop {
      @include wrapper;
      justify-content: left;
      align-items: center;
      border-bottom: 2px solid #f10214;
      background-color: #fff;
      -webkit-box-shadow: 2px 2px 2px rgb(0 0 0 / 20%);
      box-shadow: 2px 2px 2pxrgba(0, 0, 0, .2);
      position: fixed;
      top: 0;
      left: 0;

      .search {
        margin: 0 0 0 136px;
      }
    }
  }
}

.search {
  display: flex;
  width: 546px;
  height: 32px;
  border: 2px solid #e2231a;
  background: #fff;

  .input {
    padding: 2px 0 2px 17px;
    width: 425px;
    height: 26px;
    border: 1px solid transparent;
    outline: none;
    line-height: 26px;
    font-size: 12px;

    &::-webkit-input-placeholder {
      color: #999;
    }

    &::-moz-placeholder {
      color: #999;
    }

    &:focus::-webkit-input-placeholder {
      color: #ccc;
    }

    &:focus::-moz-placeholder:hover {
      color: #ccc;
    }
  }

  .photo-search-btn {
    width: 44px;

    .photo-search-login {
      display: block;
      width: 20px;
      height: 20px;
      margin: 6px auto 0;
      line-height: 14px;
      font-size: 20px;
      text-align: center;
      font-family: iconfont, sans-serif;
      color: #9f9f9f;
      cursor: pointer;
    }
  }

  .btn {
    border-radius: 0;
    width: 58px;
    height: 32px;
    line-height: 32px;
    border: none;
    background-color: #e1251b;
    font-size: 20px;
    font-weight: 700;
    color: #fff;
    -webkit-transition: background .2s ease;
    transition: background .2s ease;

    &:hover {
      background-color: #c81623;
    }

    .iconfont {
      font-family: iconfont, sans-serif;
      font-style: normal;
      -webkit-text-stroke-width: 0.2px;
      -moz-osx-font-smoothing: grayscale;
    }
  }
}

.settleup {
  margin: 0 0 0 20px;

  .cw-icon {
    width: 130px;
    height: 34px;
    background-color: #fff;
    border: 1px solid #eee;
    text-align: center;
    line-height: 34px;
    overflow: hidden;
    position: relative;
    z-index: 1;

    .iconfont,
    a {
      font-size: 12px;
      color: #e1251b;
      -webkit-transition: color .2s ease;
      transition: color .2s ease;
    }

    .iconfont {
      margin-right: 13px;
      font-size: 16px;
    }

    .ci-count {
      position: absolute;
      top: 1px;
      left: 29px;
      right: auto;
      padding: 1px 3px;
      font-size: 12px;
      line-height: 12px;
      color: #fff;
      background-color: #e1251b;
      border-radius: 7px;
      min-width: 12px;
      text-align: center;
    }
  }

  .dropdown-layer {
    top: 36px;
    right: 0;
    width: 308px;
    border-color: #c81623;
  }
}

.hotwords {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 550px;
  height: 20px;
  margin: 2px 152px 0 0;
  line-height: 20px;

  a {
    font-size: 12px;
    margin-right: 10px;
    color: #999;

    &:hover {
      color: #c81623;
    }
  }

  a:first-child {
    color: #e1251b;
  }
}

.navitems {
  display: flex;
  align-items: center;
  overflow: hidden;
  height: 40px;
  padding-top: 17px;

  li {
    overflow: hidden;

    a {
      display: block;
      height: 40px;
      line-height: 40px;
      font-size: 15px;
      color: #333;
      margin: 0 11px;
      -webkit-transition: color .2s ease;
      transition: color .2s ease;

      &:hover {
        color: #c81623;
      }
    }
  }
}

.treasure {
  width: 190px;
  height: 120px;
}
</style>
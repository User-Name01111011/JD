<template>
  <div class="spec">
    <div class="core">
      <div class="offer">
        <div class="hd">
          <a href="#" class="link">
            <h3 class="title">每日特价</h3>
            <i class="arrow"></i>
          </a>
          <a href="#" class="special">精选</a>
        </div>
        <div class="body">
          <div v-for="item of spec.offer" class="item">
            <a :href="item.href" target="_blank">
              <div class="icon">
                <img :src="item.src" alt="">
                <div v-if="item.lowestFirst" class="lowest-first">{{item.lowestFirst}}最低价</div>
              </div>
              <div class="info">
                <div class="name">{{item.title}}</div>
                <div class="price"><span class="dollar">￥</span>{{item.price}}</div>
                <p v-if="item.soldNum" class="sold">已抢<span class="num">{{item.soldNum}}</span>件</p>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div class="lightning-buy">
        <div class="hd">
          <a href="#" class="link">
            <h3 class="title">品牌闪购</h3>
            <i class="arrow"></i>
          </a>
        </div>
        <div class="body">
          <a :href="spec.lightningBuy[0].href" target="_blank" class="goods-core">
            <img class="logo" :src="spec.lightningBuy[0].src" alt="">
            <h6 class="name">{{spec.lightningBuy[0].name}}</h6>
            <div class="desc">
              <span class="promo">低至{{spec.lightningBuy[0].promo}}元</span>
              <span class="extra">仅剩<span class="day">{{countdownTime}}</span></span>
            </div>
            <img class="goods" :src="spec.lightningBuy[0].goodsSrc" alt="">
          </a>
          <div class="goods-other-list">
            <a v-for="item of spec.lightningBuy.slice(1, 7)" :href="item.href" class="item">
              <img :src="item.src" alt="" class="logo">
              <h6 class="name">{{item.name}}</h6>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="core">
      <a href="" target="_blank" class="nice-good-logo">
        <div class="container">
          探索新生活<i class="arrow"></i>
        </div>
      </a>
      <Swiper 
        :slides-per-view="swiperOptions.slidesPerView"
        :space-between="swiperOptions.spaceBetween"
        @mouseenter="swiperPause"
        @mouseleave="swiperPlay"
        class="nice-good-swiper swiper-no-swiping">
        <SwiperSlide
          v-for="slide of spec.niceGood">
          <a :href="slide.href" target="_blank">
            <img class="icon" :src="slide.src" alt="">
            <p class="name">{{slide.title}}</p>
          </a>
        </SwiperSlide>
        <SwiperSlide
          v-for="slide of spec.niceGood.slice(0, 5)">
          <a :href="slide.href" target="_blank">
            <img class="icon" :src="slide.src" alt="">
            <p class="name">{{slide.title}}</p>
          </a>
        </SwiperSlide>
        <input @input="swiperScrollbarInput" type="range" min="0" max="100" value="0" class="swiper-scrollbar">
      </Swiper>
    </div>
    <div class="core">
      <div class="new-arrival">
        <div class="hd">
          <a href="#" class="link">
            <h3 class="title">新品首发</h3>
            <i class="arrow"></i>
          </a>
        </div>
        <Swiper
          :modules="newArrivalSwiperModules"
          :slides-per-view="newArrivalSwiperOptions.slidesPerView"
          :centered-slides="newArrivalSwiperOptions.centeredSlides"
          :autoplay="newArrivalSwiperOptions.autoplay"
          :loop="newArrivalSwiperOptions.loop"
          :looped-slides="newArrivalSwiperOptions.loopedSlides"
          :navigation="newArrivalSwiperOptions.navigation"
          :speed="newArrivalSwiperOptions.speed"
          class="swiper-no-swiping">
          <SwiperSlide v-for="slide of spec.newArrival">
            <a :href="slide.href" target="_blank">
              <img :src="slide.src" alt="">
              <div class="info">
                <p class="name">{{slide.title}}</p>
                <p class="desc">来这里发现更多新品</p>
                <p class="price">
                  <span class="dollar">￥</span>
                  <span class="num">{{Math.trunc(slide.price)+'.'+(slide.price * 100).toString().slice(-2)}}</span>起
                </p>
                <div class="label-new">NEW</div>
              </div>
            </a>
          </SwiperSlide>
        </Swiper>
      </div>
      <div class="joy">
        <div class="hd">
          <a href="#" class="link">
            <h3 class="title">JOY 寻宝</h3>
            <i class="arrow"></i>
          </a>
        </div>
        <div class="tab-hd">
          <a v-for="(hd, index) of spec.joy"
            :href="hd.head.href"
            class="item"
            :class="{active: joyIndex == index}"
            @mouseenter="joyIndex = index">{{hd.head.title}}</a>
        </div>
        <div v-for="(bd, index) of spec.joy"
          class="tab-body"
          :class="{active: joyIndex == index}">
          <a v-for="item of bd.body" :href="item.href" target="_blank" class="item">
            <img :src="item.src" alt="">
            <div class="txt">
              <p class="name">{{item.title}}</p>
              <p class="price">
                <span class="dollar">¥</span>
                <span class="num">{{Math.trunc(item.price)}}.<span class="decimal">{{(item.price * 100).toString().slice(-2)}}</span>
                </span>
              </p>
            </div>
          </a>
        </div>
      </div>
      <div class="nice-shop">
        <div class="hd">
          <a href="#" class="link">
            <h3 class="title">逛好店</h3>
            <i class="arrow"></i>
          </a>
        </div>
        <div class="body">
          <a v-for="item of spec.niceShop" class="item" :href="item.href" target="_blank">
            <div class="info">
              <p class="title">{{item.title}}</p>
              <p class="tags">
                <span class="tag origin">{{item.origin}}</span>
                <span class="tag theme">{{item.theme}}</span>
              </p>
              <p class="social">
                {{item.social > 100000 ? Math.round(item.social / 1000) / 10 + '万' : item.social}}人关注
              </p>
            </div>
            <img :src="item.src" alt="">
          </a>
        </div>
      </div>
      <div class="coupon">
        <div class="hd">
          <a href="#" class="link">
            <h3 class="title">领券中心</h3>
            <i class="arrow"></i>
          </a>
        </div>
        <div class="body">
          <a v-for="item of spec.coupon" :href="item.href" class="item" target="_blank">
            <div class="icon"><img :src="item.src" alt=""></div>
            <div class="info">
              <p class="price"><span class="dollar">¥</span>{{item.price}}</p>
              <p class="limit">满{{item.limit}}元可用</p>
              <p class="desc">{{item.desc}}</p>
            </div>
            <div class="more-txt">更多好券</div>
            <div class="more-arrow">&gt;</div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { spec } from './home.json'

import { reactive, onMounted, ref, computed } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Navigation } from 'swiper'
import anime from 'animejs'

import 'swiper/scss'

let nowTime = new Date().getTime()
let lastTime = new Date(spec.lightningBuy[0].extra).setHours(0)
let countdown, countdownTime = computed(()=>{
  if(Math.floor((lastTime - nowTime)/1000)/86400 > 1){
    return countdown.value + '天'
  }else{
    return (countdown.h < 10 ? '0' + countdown.h:countdown.h)+
    ":"+(countdown.m < 10 ? '0' + countdown.m:countdown.m)+
    ":"+(countdown.s < 10 ? '0' + countdown.s:countdown.s)
  }
})
if(lastTime - nowTime < 1){
//重新请求品牌闪购,重置lightningBuy数据
}else if(Math.floor((lastTime - nowTime)/1000)/86400 > 1){
  countdown = ref(Math.trunc(Math.floor((lastTime - nowTime)/1000)/86400))
}else {
  countdown = reactive({
    h: Math.floor(Math.floor((lastTime - nowTime)/1000)/3600),
    m: Math.floor(Math.floor((lastTime - nowTime)/1000)/60%60),
    s: Math.floor(Math.floor((lastTime - nowTime)/1000)%60)
  })
  setInterval(() => {
    if (countdown.s > 0) countdown.s--
    else if (countdown.m > 0) {
      countdown.m--
      countdown.s = 59
    } else if (countdown.h > 0) {
      countdown.h--
      countdown.m = 59
      countdown.s = 59
    } else {
      countdown.s = 0
      // fetch 请求下一场品牌闪购,重置lightningBuy数据
    }
  }, 1000)
}

let swiperOptions = reactive({
  Scrollbar: {
    draggable: true,
    snapOnRelease: false,
    dragSize: 99,
  },
  slidesPerView: 'auto',
  spaceBetween: 50,
})

let swiperAnime, swiperScrollbar

function swiperPause(){
  swiperAnime.pause()
  swiperScrollbar.value = swiperAnime.currentTime / 400
}
function swiperPlay(){
  swiperAnime.play()
}
function swiperScrollbarInput(e){
  swiperAnime.seek(swiperAnime.duration * (e.target.value / 100))
}
onMounted(()=>{
  swiperScrollbar = document.querySelector(".nice-good-swiper .swiper-scrollbar")
  swiperAnime = anime({
    targets: ".nice-good-swiper .swiper-wrapper",
    translateX: -2000,
    loop: true,
    autoplay: true,
    easing: 'linear',
    duration: 40000
  })
})


let newArrivalSwiperOptions = reactive({
  slidesPerView: 'auto',
  centeredSlides: true,
  autoplay: {
    disableOnInteraction: false
  },
  loop: true,
  loopedSlides: 10,
  navigation: true,
  speed: 600
})

let newArrivalSwiperModules = reactive([Autoplay, Navigation])

let joyIndex = ref(1)
</script>

<style lang="scss" scoped>
.spec {
  @include scroll-location;
}
.arrow {
  width: 16px;
  height: 16px;

  background: {
    image: url(//misc.360buyimg.com/mtd/pc/index_2019/1.0.1/assets/sprite/tit_arrow/sprite.png);
    position: -16px 0;
  }

  position: relative;

  &::after {
    content: "";
    width: 16px;
    height: 16px;

    background: {
      image: inherit;
      position: 0 0;
    }

    position: absolute;
    top: 0;
    left: 0;
    visibility: hidden;
    opacity: 0;
    -webkit-transition: all .2s ease;
    transition: all .2s ease;
  }
}

.core {
  @include flex-between;
  margin: 0 0 20px;

  .offer,
  .lightning-buy {
    width: 590px;
    height: 340px;
    background-color: #fff
  }

  .hd {
    @include flex-between;
    align-items: center;
    height: 60px;
    padding: 0 20px;

    .link {
      display: flex;
      align-items: center;
      position: relative;
      height: 32px;
      margin: 0 0 4px;

      .title {
        font-weight: 700;
        font-size: 24px;
        color: #333;
        line-height: 32px;
      }

      .arrow {
        margin: 1px 0 0 10px;
      }

      &:hover {
        .arrow::after {
          opacity: 1;
          visibility: visible;
        }
      }
    }

    .special {
      font-size: 14px;
      font-family: Microsoft Yahei, PingFangSC-Medium, sans-serif, serif;
      color: #e1251b;
      line-height: 14px;
      padding-bottom: 2px;
      border-bottom: 2px #e1251b solid;
      margin: 0 -5px 0 0;
    }
  }

  .offer {
    .body {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      align-content: flex-start;
      justify-content: space-between;
      width: 560px;
      height: 270px;
      padding: 0 15px 15px;
      position: relative;
    }

    .item {
      @include img-hover;
      .icon {
        img {
          width: 100%;
          height: 100%;
        }
      }

      .info {
        .name {
          overflow: hidden;
          text-overflow: ellipsis;
          word-break: break-all;
          color: #333;
        }

        .price {
          line-height: 16px;

          font: {
            size: 18px;
            weight: 700;
            family: Arial-BoldMT, Microsoft Yahei, PingFangSC-Medium, sans-serif, serif;
          }

          color: #e1251b;

          .dollar {
            font-size: 12px;
          }
        }
      }
    }

    .item:first-child {
      background-color: rgba(109, 126, 146, .05);
      width: 170px;
      height: 265px;
      margin-right: 6px;
      position: relative;

      .icon {
        width: 120px;
        height: 120px;
        margin: 46px auto 0;
        text-align: center;
      }

      .lowest-first {
        position: absolute;
        top: 0;
        left: 0;
        display: inline-block;
        width: 90px;
        height: 24px;

        background: {
          image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAAAYBAMAAACIFvdWAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAASUExURfa3PfekAPesGfenC/a0MvewJ5uweioAAABjSURBVHjajdAxDYBQAMRQBhBwEggKsECCge9fDEwEaNLcmzt16i1b6nbekrTtSOp67Knr427b+lzzKEa8FCNQy4gPH/FnI8hGkI0gG0E2gmwEYYTCCIURCiMURiiMUBihMEJd/HcrFSr6YboAAAAASUVORK5CYII=);
          size: cover;
          position: 50%;
        }

        font: {
          family: MicrosoftYaHei-Bold, Microsoft Yahei, PingFangSC-Medium, sans-serif, serif;
          weight: 700;
          size: 12px;
        }

        line-height: 24px;
        color: #fff;
        text-align: center;
      }

      .info {
        text-align: center;

        .name {
          width: 150px;
          height: 19px;
          margin: 9px auto 4px;
          text-align: center;
          line-height: 19px;
          font-size: 14px;
          font-family: Microsoft Yahei, PingFangSC-Medium, sans-serif, serif;
        }

        .price {
          display: inline-block;
          margin-top: 4px;
        }
      }
    }

    .item:nth-child(n + 2) {
      width: 170px;
      height: 89px;
      margin: 18px 0 26px 19px;

      a {
        display: flex;

        .icon {
          width: 84px;
          height: 84px;
          position: relative;

          .lowest-first {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 84px;
            height: 16px;
            background: rgba(0, 0, 0, .6);
            overflow: hidden;
            white-space: nowrap;
            text-align: center;
            font-size: 11px;
            color: #fff;
            line-height: 16px;
          }
        }

        .info {
          width: 75px;
          margin: 0 0 0 6px;

          .name {
            width: 100%;
            height: 32px;
            font-size: 12px;
            line-height: 16px;
            font-family: Microsoft Yahei, PingFangSC-Medium, sans-serif, serif;
          }

          .price {
            margin-top: 5px;
            font-size: 14px;
          }

          .sold {
            margin-top: 14px;
            font-size: 12px;
            line-height: 16px;
            color: #999;

            .num {
              display: inline-block;
              line-height: 18px;
              color: #e1251b;
            }
          }
        }
      }
    }
  }

  .lightning-buy {
    .body {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      padding: 0 20px 0 15px;
    }

    .goods-core {
      @include img-hover;
      width: 270px;
      height: 265px;
      margin-right: 15px;
      background: linear-gradient(180deg, rgba(255, 211, 130, .05), rgba(134, 93, 19, .05));

      .logo {
        display: block;
        width: 70px;
        height: 35px;
        margin: 15px auto 0;
        z-index: 1;
      }

      .name {
        margin-top: 6px;
        text-align: center;
        color: #333;
        font-weight: 700;
        font-size: 16px;
        z-index: 1;
      }

      .desc {
        margin: 1px 0 13px;
        text-align: center;
        font-size: 12px;
        color: #666;
        z-index: 1;

        .extra {
          &::before {
            content: "";
            display: inline-block;
            width: 1px;
            height: 10px;
            background-color: rgba(102, 102, 102, .4);
            margin: 0 5px;
          }

          .day {
            margin: 0 4px;
            font-weight: 700;
          }
        }
      }

      .goods {
        display: block;
        width: 130px;
        height: 130px;
        margin: 0 auto;
        -webkit-transition: opacity .2s ease;
        transition: opacity .2s ease;
      }
    }

    .goods-other-list {
      display: flex;
      flex-wrap: wrap;
      align-content: flex-start;
      width: 270px;
      margin: -40px 0 0;

      .item {
        @include img-hover;
        display: inline-block;
        width: 135px;
        height: 72px;
        padding: 14px 0;
        margin: 0 0 4px;
        text-align: center;
        overflow: hidden;
        position: relative;

        .logo {
          display: block;
          width: 100px;
          height: 50px;
          margin: 0 auto;
        }

        .name {
          margin-top: 6px;
          text-align: center;
          color: #666;
          font-size: 12px;
          font-weight: 400;
          @include ellipsis;
        }

        &:nth-child(odd)::after {
          content: "";
          position: absolute;
          width: 1px;
          height: 60px;
          right: 0;
          top: 50%;
          margin-top: -30px;
          background: -webkit-gradient(linear, left top, left bottom, from(white), color-stop(#eeeeee), color-stop(#eeeeee), to(white));
          background: linear-gradient(180deg, white, #eeeeee, #eeeeee, white);
        }
      }
    }
  }
}

.nice-good-logo {
  width: 190px;
  height: 260px;

  background: {
    image: url(//misc.360buyimg.com/mtd/pc/index_2019/1.0.1/assets/img/4dca746078b49c72a9877d2998d0abc8.png);
    color: #eee;
    size: 100% 100%;
  }

  .container {
    width: 140px;
    height: 25px;
    margin-top: 15px;
    margin-left: auto;
    margin-right: auto;
    padding: 55px 0 10px 20px;

    background: {
      image: url(data:image/png;base64,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);
      size: contain;
      position: 50%;
      repeat: no-repeat;
    }

    font-size: 16px;
    color: rgba(255, 255, 255, .8);

    .arrow {
      display: inline-block;
      vertical-align: middle;
      background-position: 0 16px;
      margin: -2px 0 0 6px;
    }
  }

  &:hover {
    .arrow::after {
      opacity: 1;
      visibility: visible;
      background-position: 0 0;
    }
  }
}

:deep(.nice-good-swiper) {
  width: 990px;
  height: 260px;
  background-color: #fff;

  .swiper-slide {
    @include img-hover;
    width: 150px;
    height: 210px;

    a {
      display: flex;
      flex-direction: column;
    }

    &:nth-child(odd) {
      margin-top: 50px;

      .name {
        order: -1;
        margin: 0 0 10px;
      }
    }

    &:nth-child(even) {
      margin-top: 20px;

      .name {
        margin: 10px 0 0;
      }
    }

    .icon {
      width: 150px;
      height: 150px;
    }

    .name {
      @include ellipsis;
      width: 100%;
      color: #333;
      -webkit-transition: color .2s ease;
      transition: color .2s ease;
      text-align: center;
      font-size: 14px;
    }
    
    &:hover {
      .name {
        color: inherit;
      }
    }
  }

  .swiper-scrollbar {
    position: absolute;
    left: 15px;
    bottom: 10px;
    width: calc(100% - 30px);
    opacity: 0;
    -webkit-transition: opacity .3s ease;
    transition: opacity .3s ease;
    visibility: hidden;
    z-index: 1;
    -webkit-appearance: none;
    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      width: 88px;
      height: 9px;
      border-radius: 4px;
      background: #d8d8d8;
      margin-top: -4.5px;
    }
    &::-webkit-slider-runnable-track{
      width: 100%;
      height: 3px;
      background-color: #f3f3f3;
      border-radius: 3px;
    }
  }

  &:hover {
    .swiper-scrollbar {
      visibility: visible;
      opacity: 1;
    }
  }
}

.core-2 {
  width: 290px;
  height: 340px;
  background-color: #fff
}

.new-arrival {
  @extend .core-2;
  :deep(.swiper) {
    height: 250px;
    .swiper-slide {
      @include img-hover;
      width: 130px;
      text-align: center;
      position: relative;
      -webkit-transition: all .4s ease;
      transition: all .4s ease;
      -webkit-transform: scale(.8);
      -ms-transform: scale(.8);
      transform: scale(.8);
      -webkit-transform-origin: center center;
      -ms-transform-origin: center center;
      transform-origin: center center;
      &:hover {
        .name {
          color: inherit;
        }
      }
      &.swiper-slide-active {
        -webkit-transform: scale(1);
        -ms-transform: scale(1);
        transform: scale(1);
        .info {
          opacity: 1;
        }
      }
      img {
        width: 100%;
        height: 130px;
        margin: 10px 0 0;
      }
      .info {
        -webkit-transition: opacity .4s ease;
        transition: opacity .4s ease;
        opacity: 0;
        filter: alpha(opacity=0);
      }
      .name {
        @include ellipsis;
        width: 200px;
        margin: 20px 0 4px -35px;
        line-height: 19px;
        font-size: 14px;
        color: #333;
        font-family: Microsoft Yahei,PingFangSC-Medium,sans-serif,serif;
      }
      .desc {
        @include ellipsis;
        width: 200px;
        height: 16px;
        margin: 0 0 0 -35px;
        line-height: 16px;
        letter-spacing: 0;
        font-size: 12px;
        font-family: Microsoft Yahei,PingFangSC-Medium,Heiti SC,tahoma,arial,Hiragino Sans GB,"\5B8B\4F53",sans-serif,serif;
        color: #999;
      }
      .price {
        margin-top: 20px;
        font-family: Arial-BoldMT,Microsoft Yahei,PingFangSC-Medium,sans-serif,serif;
        font-size: 16px;
        color: #e1251b;
        .dollar {
          font-size: 12px;
        }
        .num {
          font-size: 18px;
        }
      }
      .label-new {
        position: absolute;
        top: 10px;
        right: 0;
        width: 48px;
        height: 20px;
        line-height: 20px;
        background: {
          image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAUCAMAAAD84U6VAAAA3lBMVEVHcEzzUCjpOCD8ZS32Vij7YSrjKRruQiPoMx/3WiryTCXwSCTmLR7sPSHtPiP2UijsPSDxSCT6XynnLR38Zi7tPyL8ai7yTSXnLx74XirySyT1VCf8ZyzkKhz1VCf3XCnwRyToOSDrPB/wSCPvRyTsPCHzTSXyTiboNR/kKRz8bC73Win9ZiztQSP2VyjiIxfpPSToMx7kKhz0WSzoOR78Zy38ZS3jJxrhJBjlLh3mMiDlLB3/VVXxSif5YS38ZSz7aS36XSnuRyTiJhnkLh3jKx38ZiviKBr8Zy38ZS3HXuWjAAAASnRSTlMAzMzNzMzMzMzMzMzMzMzMzMzMz8zZzMzMzMzZ68zC2czMzMLZwtnCw7Hxw7HCzO5A2upA2dbK1urehbsDS4W83N7M92lvadpvb9rYxuQAAAE8SURBVHjahZNrV4JAEIbX4ipmuZmaLClWEAYiWHm/de///6FmmToL6Dn7fN7nzMy+MwRZL4LlA3APRFF0y/F9/4bzCGzDzZoIxkGazpMkeQKuOHeA53m2ZwM9YL9nLJyQPz7i9LLWMQzjxB0Mzup1Xdctq1GttiuVc0VRTNO8Vql6ytg3vn9/mzpOSXgVwggESqnafHkefmb9xFPNqZUr9BvtbrFCkxvQ1SqYaUJwL/h7bKksgMHCFRnPNAAFlwuZ0S/OQGkmtFpsQhZxTsgP3S0OjcJwQ4I5f98RLWEBy0JhVBR2IVl+afkZoIIuhi4KYOy2KGgHv3R8BhCwJXkO/xVCHFqeAwowNH6rPAfxrVlw8hxEcHw15DmI1cDlk+cglk+styQHWO8f2QF5NqfHEQd05ETxRn3O4Yn+AsUUTS7xfkfuAAAAAElFTkSuQmCC);
          size: cover;
          position: 50%;
        }
        color: white;
        font-size: 12px;
        font-family: Arial-BoldMT,Microsoft Yahei,PingFangSC-Medium,sans-serif,serif;
      }
    }
    .swiper-button-prev {
    @extend .slider-navigation-prev;
    margin-top: -50px;
    text-indent: 3px;

    &::after {
      content: "<";
    }
  }

  .swiper-button-next {
    @extend .slider-navigation-next;
    margin-top: -50px;
    &::after {
      content: ">";
    }
  }
  }
}

.joy {
  @extend .core-2;
  .tab-hd {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    height: 30px;
    margin: -4px auto 0;
    .item {
      @include ellipsis;
      width: 62px;
      max-width: 70px;
      height: 20px;
      background-color: #f6f6f6;
      border-radius: 12px;
      margin: 0 4px;
      text-align: center;
      color: #999;
      font-size: 12px;
      line-height: 20px;
      font-family: Microsoft Yahei,PingFangSC-Medium,sans-serif,serif;
      &.active {
        background-color: #e1251b;
        color: #fff;
      }
    }
  }
  .tab-body {
    display: none;
    &.active {
      display: block;
    }
    .item {
      display: flex;
      margin: 0 15px 10px;
      img {
        width: 70px;
        height: 70px;
      }
      .txt {
        width: 180px;
        margin: 0 0 0 10px;
        .name {
          max-height: 2.6em;
          line-height: 1.3em;
          font-size: 14px;
          word-break: break-all;
          color: #333;
          overflow: hidden;
          font-family: Microsoft Yahei,PingFangSC-Medium,sans-serif,serif;
        }
        .price {
          margin-top: 10px;
          font-family: Arial-BoldMT,Microsoft Yahei,PingFangSC-Medium,sans-serif,serif;
          font-size: 16px;
          color: #e1251b;
          .dollar {
            font-size: 12px;
            font-weight: 400;
          }
          .decimal {
            font-size: 12px;
          }
        }
      }
    }
  }
}

.nice-shop {
  @extend .core-2;
  .body {
    padding: 0 15px;
    .item {
      @include img-hover;
      display: flex;
      justify-content: space-between;
      width: 235px;
      height: 98px;
      padding: 15px 10px 15px 15px;
      background: {
        size: contain;
        position: 50%;
        repeat: no-repeat;
        size: cover;
      }
      margin-bottom: 10px;
      position: relative;
      &:nth-child(1) {
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQQAAACAAgMAAACQMP/jAAAACVBMVEXr8urx9fDv9O5sPmP1AAABCklEQVRo3qXXsQ2DUBQEwS2NEl5gECGlULoLsPTBmitgNem1404u3DEhJsSEmBATYkJMiAkxISbEhJgQE2JCTIgJMSEmxISAIIVJC2lhuJAWhgtpYbiQFkYLR1q4fgpMiAkxISbEhJgQE2JCTIgJMSEmxISYEBNiQkyICTGhlwQtfNLC1mJMiAkxISbEhJgQE54LtxbOnsaEmBATYkJMiAkxISbEhJgQE2JCTIgJMSEmxISYEBNiQguCFCYtpIXhQloYLqSF4UJaGC0caeHq3zEhJsSEmBATYkJMiAkxISbEhJgQE2JCTIgJMSEmxISY0LtHWLUsbMGYEBNiQkyICTEhJrTf4c50TPgCJSR8FkpvdvMAAAAASUVORK5CYII=);
      }
      &:nth-child(2) {
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQQAAACAAQMAAADXkIUzAAAABlBMVEXv7/bz8/hwiQw0AAAA6klEQVRYw4XOMRHAMAwEwYduaIYiCC5VaJRA2Ku3uHyoKI7ERqIpiuJIbCSaoiiOxEaiKYoiEkPxKC5FJIbiUVyKSAzFo7gUkRiKR3EpIjEUj+JSRGIoHsWliMRQPIpLEYmheBRHYiPRFEVxJDYSTVEUR2Ij0RRFcSQ2Ek1RFEdiI9EURXEkNhJNURRHYiPRFEVxJDYSTVEUkRiKR3EpIjEUj+JSRGIoHsWliMRQPIpLEYmheBSXIhJD8SguRSSG4lFcikgMxaM4EhuJpiiKI7GRaIqiOBIbiaYoiiOxkWiKojgSG9UURcGNH/PGPpNjQrMwAAAAAElFTkSuQmCC);
      }
      &:hover {
        .title {
          color: inherit;
        }
      }
      .info {
        width: 120px;
      }
      .title {
        max-height: 38px;
        line-height: 1.3em;
        font-size: 14px;
        color: #333;
        -webkit-transition: color .2s ease;
        transition: color .2s ease;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      .tags {
        margin-top: 5px;
        .tag {
          display: inline-block;
          height: 16px;
          padding: 0 2px;
          border: 1px solid transparent;
          border-radius: 2px;
          text-align: center;
          font-size: 12px;
          line-height: 17px;
        }
        .origin {
          border-color: #e2231a;
          margin-right: 5px;
          color: #e2231a;
        }
        .theme {
          border-color: #596fab;
          color: #596fab;
        }
      }
      .social {
        color: #999;
        font-size: 12px;
        position: absolute;
        bottom: 15px;
      }
      img {
        display: block;
        width: auto;
        height: auto;
        max-width: 90px;
        max-height: 90px;
        padding: 5px;
        background-color: #fff;
        border-radius: 4px;
        -webkit-box-shadow: 0 2px 8px rgb(0 0 0 / 5%);
        box-shadow: 0 2px 8px rgb(0 0 0 / 5%);
      }
    }
  }
}

.coupon {
  @extend .core-2;
  .body {
    height: 280px;
    padding: 0 15px;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASIAAAEYCAYAAAD4X/t9AAAABGdBTUEAALGPC/xhBQAAAAZiS0dEAP8A/wD/oL2nkwAAN8NJREFUeNrtnXd4XFeZ//2P427ZsizLjqss997tOI6dRhpJCAkJLXQI+wMW2IeFBX7ALr3Dwu6zsCxLWRbYJAR+EAglIZ1QQgKhF6vMjHoZSaNRCWze33nPPefqvWfOvXdmJCcEf/M8n2dGI2syGs35zPd9T5kZVOV/jz32GI2NjdHo6CgA4DSHXcBOqPa/GRARAAAiAgBARBARAAAiAgBARBARAAAiAgBARBARAAAiAgBARBARAAAiAgBARBARAAAiAgBARBARAAAiAgBARBARAAAiAgBARBARAAAiAgBARBARAAAiAgBARBARAAAiAgBARBARAAAiAgBARBARAAAiAgBARBARAAAiAgBARBARAAAiAgBARBARAAAiAgBARBARAAAiAgBARBARAAAiAgBARBARAAAiAgBARBARAAAiAgBARBARAOBJK6I/F4ZpbGQEfwQAAI0OD9Ofero5oTw+InqsOELF226l3te9ikYybTSKVATA6Y1ywEhrC3W/5HoqfOEz9L/9fadORI9NjNP4A/dT76tuoMzOJsoe2U0jLc00Oj6OPwQApzPKAeyC7JE9lNm8mrqvv5aK3/6mCi3FaRTRn/9ME7/6BQ289R8od3AHta1frsmevQ8iAgBMikg5QfuhsYEyuzdS36tfTuM/foAee3RiaiL6c0c7DX78w9R+4lAooLYNZ0JEAIB4EbEjmlbo67nDuyj/7n+iP7WcTOwfeUX02EiBRr52M3VefRllNq6cvHMLRAQASBKRcEVb05nUcel5VPji5+l/B/PpInrs0UdVlPoh9b7ypZTZ0aTupEHd2YroHUNEAIByRSSckdm2jnpecj2N3Xc3PTYx4RGRikx/UneUf+87KHdkt7HYCv8dQkQAgEpFFJZrDbrXnH/HW+hPJ/8Qlmsz/tzfryNTx2XnT0apuDuCiAAA1YooUq6toI5LTlDhC5+lP/f30Yyu51ytI1NZdwARAQCmKiKnXOt69tNphu4DJZVhEBEA4FSISJRrMyr6IYgIADCdIjJARAAAiAgAABFBRAAAiAgAABFBRAAAiAgAABFBRAAAiAgAABFBRAAAiAgAABFBRAAAiAgAABFBRAAAiAgAABFBRAAAiAgAABFBRAAAiAgAABFBRAAAiAgAABFBRAAAiAgAABFNTUStLepBTOAPAcBpLaIJ7YLHX0RNKyh7ZDcNP/QgjeYHglQ0NoY/CACnEzzmeewrB7AL2AkVf1jrlETEbF5NufOOUNcNL6D8V2+mYj4PGQFwGkmIxzyPfXYAu4CdUK1PqheRKdHaGhsos2sD9X7wPZARAKeRhHjM89hnB1Rbkk2PiISQMjs3KDvehOY1AKdBc5rHOo/5qQpoekXEKCtyRCtyz8imIpbSo48GSEHhdtyO25+ct+s0NKDHuk5C0+SP6RMRN7APbKPB226l0YkJ/cCH7rqDet/7dg1f178MbsftuP3Je7sa2zzGeaxX25iGiHA7bsftf+UiQmmG23E7SjM0qwEAp2ezGtP3AGD6/gmdvseCRgCwoPEJXdCILR4AgCd8iwc2vQIAnvBNrzgGBACA84gAABARRAQAgIgAABARRAQAgIgAABARRAQAgIgAABARRAQAgIgAABARRAQAgIgAABARRAQAgIgAABARRAQAgIgAABARRAQAgIgAABARRAQAgIgAABARRAQAgIgAABARRAQAgIgAABARRAQAgIgAABARRAQAgIgAABARRAQAgIgAABARRAQAgIgAABARRAQAgIgAABARRAQAgIgAABARRAQAgIgAABARRAQAgIgAABARRAQAgIgAABARRAQAgIgAABARRAQAgIgAABARRAQAgIgAABARRAQAgIgAABARRAQAgIgAABARRAQAgIgAABARRAQAgIgAABARRAQAgIgAABARRAQAgIgAABARRAQAgIgAABARRAQAgIgAABARRAQAgIgAABARRAQAgIgAABARRAQAgIgAABARRAQAgIgAABARRAQA+IsRUWuLehAT+EMAcFqLaEK74PEXUdMKyh7ZTcMPPUij+YEgFY2N4Q8CwOkEj3ke+8oB7AJ2Arvh8RMRs3k15c47Ql03vIDyX72Zivk8ZATAaSQhHvM89tkB7AJ2QrU+qV5EpkRra2ygzK4N1PvB90BGAJxGEuIxz2OfHVBtSTY9IhJCyuzcoOx4E5rXAJwGzWke6zzmpyqg6RURo6zIEa3IPSObilhKjz4aIAWF23E7bn9y3q7T0IAe6zoJTZM/pk9E3MA+sI0Gb7uVRicm9AMfuusO6n3v2zV8Xf8yuB234/Yn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) no-repeat bottom;
    overflow: hidden;
    .item {
      display: flex;
      align-items: center;
      height: 82px;
      margin-bottom: 3px;
      &:hover {
        .more-txt {
          color: inherit;
        }
        .more-arrow {
          color: inherit;
        }
      }
      .icon {
        width: 50px;
        height: 50px;
        padding: 8px;
        background-color: #fff;
        border-radius: 50%;
        margin: 0 0 0 7px;
        overflow: hidden;
      }
      .info {
        align-self: stretch;
        width: 140px;
        padding: 5px 0 0;
        margin: 0 0 0 7px;
        .price {
          height: 34px;
          font-family: impact,sans-serif;
          line-height: 34px;
          color: #e33333;
          font-size: 28px;
          .dollar {
            margin-right: 3px;
            font-family: arial,sans-serif;
            font-weight: 400;
            font-size: 14px;
          }
        }
        .limit {
          @include ellipsis;
          height: 18px;
          color: #999;
          font-size: 12px;
          line-height: 18px;
        }
        .desc {
          @include ellipsis;
          height: 18px;
          font-size: 12px;
          line-height: 18px;
          color: #333;
        }
      }
        .more-txt {
          width: 1px;
          margin: 0 0 0 7px;
          font-size: 12px;
          color: #666;
          line-height: 15px;
        }
        .more-arrow {
          margin: 0 0 0 15px;
          font-size: 12px;
          color: #666;
        }
    }
  }
}
</style>
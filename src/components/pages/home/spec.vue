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
              <span class="extra">仅剩<span class="day">todo</span>天</span>
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
        :modules="modules"
        :scrollbar="swiperOptions.Scrollbar"
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
      </Swiper>

    </div>
  </div>
</template>

<script setup>
import { spec } from './home.json'

import { reactive, onMounted } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Scrollbar } from 'swiper'
import anime from 'animejs'

import 'swiper/scss'

let swiperOptions = reactive({
  Scrollbar: {
    draggable: true,
    snapOnRelease: false,
    dragSize: 99,
  },
  slidesPerView: 'auto',
  spaceBetween: 50,
})

let swiperAnime

function swiperPause(){
  console.log('pause')
  swiperAnime.pause()
}
function swiperPlay(){
  swiperAnime.play()
}

onMounted(()=>{
  swiperAnime = anime({
    targets: ".nice-good-swiper .swiper-wrapper",
    translateX: -2000,
    loop: true,
    autoplay: true,
    easing: 'linear',
    duration: 40000
  })
})

const modules = [Scrollbar]

</script>

<style lang="scss" scoped>
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
      @include img-hover;
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

:deep(.swiper) {
  width: 990px;
  height: 260px;
  background-color: #fff;

  .swiper-slide {
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
  }

  .swiper-scrollbar {
    position: absolute;
    left: 15px;
    bottom: 10px;
    width: calc(100% - 30px);
    height: 3px;
    border-radius: 3px;
    background-color: #f3f3f3;
    opacity: 0;
    -webkit-transition: opacity .3s ease;
    transition: opacity .3s ease;
    visibility: hidden;
    z-index: 1;

    .swiper-scrollbar-drag {
      width: 33px;
      height: 9px;
      border-radius: 4px;
      background-color: #d8d8d8;
      position: absolute;
      top: 50%;
      margin-top: -4.5px;
    }
  }

  &:hover {
    .swiper-scrollbar {
      visibility: visible;
      opacity: 1;
    }
  }
}
</style>
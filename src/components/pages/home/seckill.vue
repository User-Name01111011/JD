<template>
  <div class="seckill">
    <a href="#" target="_blank" class="countdown">
      <p class="title">京东秒杀</p>
      <div class="desc">
        <strong>{{seckill.countdown}}</strong>点场 距结束
      </div>
      <div class="timer">
        <div class="hour">{{countdown.h < 10 ? '0' + countdown.h:countdown.h}}</div>
            <div class="miute">{{countdown.m < 10 ? '0' + countdown.m:countdown.m}}</div>
                <div class="second">{{countdown.s < 10 ? '0' + countdown.s:countdown.s}}</div>
                </div>
    </a>
    <swiper :loop="true" :modules="modules" :navigation="swiperOptions.navigation">
      <swiper-slide v-for="n of seckill.sliders.length / 4" :key="n" :virtualIndex="n">
        <a v-for="slide of seckill.sliders.slice((n - 1) * 4, n * 4)" :href="slide.href" target="_blank">
          <img :src="slide.src" alt="">
          <h6 class="name">{{slide.title}}</h6>
          <p class="price">¥{{slide.price}}</p>
        </a>
      </swiper-slide>
    </swiper>
    <div class="brand">
      <a :href="seckill.brand.href" target="_blank">
        <img :src="seckill.brand.src" alt="">
        <div class="info">
          <p class="title">{{seckill.brand.title}}</p>
          <p class="promo">{{seckill.brand.promo}}</p>
          <div class="action">品类秒杀&gt;</div>
        </div>
      </a>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

import { seckill } from './home.json'

import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper'

import 'swiper/scss'

let nowTime = new Date()
const countdown = reactive({
  h: 3 - Math.abs(nowTime.getHours() - seckill.countdown.slice(0, 2)),
  m: Math.abs(59 - Math.abs(nowTime.getMinutes() - seckill.countdown.slice(3, 5))),
  s: 59 - nowTime.getSeconds()
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
    // fetch 请求下一场秒杀活动,重置seckill数据
  }
}, 1000)

let swiperOptions = reactive({
  navigation: true
})

const modules = [Navigation]
</script>

<style lang="scss" scoped>
.seckill {
  @include scroll-location;
  display: flex;
  height: 260px;
  margin-bottom: 20px;
  background: {
    image: linear-gradient(180deg, transparent 70px,#fff 70px, #fff 100%);
  }
}

.countdown {
  width: 190px;
  height: 100%;
  color: #fff;

  background: {
    color: #e83632;
    image: url(//misc.360buyimg.com/mtd/pc/index_2019/1.0.1/assets/img/4a15d8883775742e3efbb850ae14def7.png);
    size: contain;
    position: 50%;
    repeat: no-repeat;
  }

  &:hover {
    color: #fff;
  }

  .title {
    width: 100%;
    text-align: center;
    font-size: 30px;
    font-weight: 700;
    margin-top: 31px;
  }

  .desc {
    margin-top: 90px;
    font-size: 14px;
    text-align: center;

    strong {
      font-size: 18px;
      padding-right: 2px;
      vertical-align: middle;
      display: inline-block;
      margin-top: -1px;
    }
  }

  .timer {
    display: flex;
    justify-content: space-between;
    width: 130px;
    height: 30px;
    margin: 10px auto 0;
    color: #333;
    font-weight: 700;

    div {
      width: 30px;
      height: 30px;
      text-align: center;
      background-color: #2f3430;
      color: white;
      font-size: 20px;
      position: relative;

      &:nth-last-child(n + 2)::after {
        content: ":";
        position: absolute;
        top: 0;
        left: 30px;
        width: 20px;
        height: 100%;
        font-weight: bolder;
        font-size: 18px;
      }
    }
  }
}

:deep(.swiper) {
  width: 800px;
  height: 100%;
  overflow: hidden;

  .swiper-button-prev {
    @extend .slider-navigation-prev;

    text-indent: 3px;

    &::after {
      content: "<";
    }
  }

  .swiper-button-next {
    @extend .slider-navigation-next;

    &::after {
      content: ">";
    }
  }

  .swiper-slide {
    display: flex;

    a {
      @include img-hover;
      width: 200px;

      &:hover {
        .name {
          color: #c81623;
        }
      }
    }

    img {
      display: block;
      width: 140px;
      height: 140px;
      margin: 30px auto 0;
    }

    .name {
      @include ellipsis;
      width: 160px;
      margin: 13px auto 0;
      font-size: 12px;
      font-weight: 400;
      color: #333;
      -webkit-transition: color .2s ease;
      transition: color .2s ease;
    }

    .price {
      position: relative;
      overflow: hidden;
      width: 160px;
      height: 24px;
      background: #fff;
      margin: 7px auto 0;
      text-align: center;
      color: #e1251b;
      font-size: 12px;
      font-weight: 700;
      line-height: 22px;
      vertical-align: top;
    }
  }
}

.brand {
  @include img-hover;
  width: 180px;
  height: 240px;
  padding: 10px;

  img {
    display: block;
    width: 120px;
    height: 120px;
    margin: 20px auto 0;
    transition: opacity .2s linear;
  }

  .info {
    width: 100%;
    height: 90px;
    margin-top: 10px;
    background: linear-gradient(180deg, rgba(255, 255, 255, .5), rgba(220, 224, 236, .5));
    text-align: center;
    font-size: 14px;

    .title {
      color: #666;
    }

    .promo {
      color: #333;
      font-weight: 700;
    }

    .action {
      color: #e1251b;
      border-radius: 14px;
      width: 76px;
      height: 22px;
      padding-left: 4px;
      border: 1px solid #e1251b;
      margin: 4px auto 0;
      text-align: center;
      line-height: 22px;
      font-weight: 700;
      font-size: 12px;
      -webkit-transition: background-color .2s ease;
      transition: background-color .2s ease;
    }
  }
}
</style>
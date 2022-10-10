<template>
  <div class="seckill">
    <a href="#" target="_blank" class="countdown">
      <p class="title">京东秒杀</p>
      <div class="desc">
        <strong>{{seckill.countdown}}</strong>点场 距结束
      </div>
      <div class="timer">
        <div class="hour"></div>
        <div class="miute"></div>
        <div class="second"></div>
      </div>
    </a>
    <swiper 
      class="swiper"
      :loop="true"
      :modules="modules"
      :navigation="swiperOptions.navigation">
      <swiper-slide 
        v-for="n of seckill.sliders.length / 4"
        :key="n"
        :virtualIndex="n">
        <a 
          v-for="slide of seckill.sliders.slice((n - 1) * 4, n * 4)" 
          :href="slide.href" 
          target="_blank">
          <img :src="slide.src" alt="">
          <h6 class="name">{{slide.title}}</h6>
          <p class="price">¥{{slide.price}}</p>
        </a>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

import { seckill } from './home.json'

import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper'

import 'swiper/scss'
// import 'swiper/scss/navigation'

let swiperOptions = reactive({
  navigation: {
    nextElRef: ".next",
    prevElRef: ".prev",
  }
})

const modules = [Navigation]
</script>

<style lang="scss" scoped>
  .seckill {
    display: flex;
    height: 260px;
    margin-bottom: 20px;
    background-color: #fff;
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
          &:nth-last-child(n + 2)::after{
            content: ":";
            display: block;
            width: 20px;
            height: 100%;
            margin: 0 0 0 30px;
            font-weight: bolder;
            font-size: 18px;
          }
        }
      }
    }
  }
  .swiper {
    width: 800px;
    height: 100%;
    overflow: hidden;
    :deep(.swiper-button-prev){
      @extend .navigation;
      left: 0;
  
      border: {
        top-right-radius: 18px;
        bottom-right-radius: 18px;
      }
  
      text-indent: 3px;
      &::after{
        content: "<";
      }
    }
    :deep(.swiper-button-next){
      @extend .navigation;
      right: 0;
  
      border: {
        top-left-radius: 18px;
        bottom-left-radius: 18px;
      }

      text-indent: 9px;
      &::after{
        content: ">";
      }
    }
    :deep(.swiper-slide) {
      display: flex;
      @include img-hover;
      a {
        width: 200px;
        &:hover {
          .name{
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
</style>
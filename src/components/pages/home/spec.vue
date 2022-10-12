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
            <a v-for="item of spec.lightningBuy.slice(1, 7)"
              :href="item.href"
              class="item">
              <img :src="item.src" alt="" class="logo">
              <h6 class="name">{{item.name}}</h6>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { spec } from './home.json'

</script>

<style lang="scss" scoped>
  .core {
    @include flex-between;
    .offer, .lightning-buy {
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
          width: 16px;
          height: 16px;
          background: {
            image: url(//misc.360buyimg.com/mtd/pc/index_2019/1.0.1/assets/sprite/tit_arrow/sprite.png);
            position: -16px 0;
          }
          margin: 1px 0 0 10px;
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
        &:hover{
          .arrow::after{
            opacity: 1;
            visibility: visible;
          }
        }
      }
      .special {
        font-size: 14px;
        font-family: Microsoft Yahei,PingFangSC-Medium,sans-serif,serif;
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
              family: Arial-BoldMT,Microsoft Yahei,PingFangSC-Medium,sans-serif,serif;
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
        background-color: rgba(109,126,146,.05);
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
            family: MicrosoftYaHei-Bold,Microsoft Yahei,PingFangSC-Medium,sans-serif,serif;
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
            font-family: Microsoft Yahei,PingFangSC-Medium,sans-serif,serif;
          }
          .price {
            display: inline-block;
            margin-top: 4px;
          }
        }
      }
      .item:nth-child(n + 2){
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
              background: rgba(0,0,0,.6);
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
              font-family: Microsoft Yahei,PingFangSC-Medium,sans-serif,serif;
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
        background: linear-gradient(180deg,rgba(255,211,130,.05),rgba(134,93,19,.05));
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
            &::before{
              content: "";
              display: inline-block;
              width: 1px;
              height: 10px;
              background-color: rgba(102,102,102,.4);
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
          &:nth-child(odd)::after{
            content: "";
            position: absolute;
            width: 1px;
            height: 60px;
            right: 0;
            top: 50%;
            margin-top: -30px;
            background: -webkit-gradient(linear,left top,left bottom,from(white),color-stop(#eeeeee),color-stop(#eeeeee),to(white));
            background: linear-gradient(180deg,white,#eeeeee,#eeeeee,white);
          }
        }
      }
    }
  }
</style>
<template>
  <div class="spec">
    <div class="core">
      <div class="offer">
        <div class="hd">
          <a href="#" class="link">
            <h3 class="title"></h3>
            <i class="arrow"></i>
          </a>
          <a href="#" class="special"></a>
        </div>
        <div class="body">
          <div class="item">
            <a href="" target="_blank">
              <div class="icon">
                <img src="" alt="">
                <div class="lowest-first"></div>
              </div>
              <div class="info">
                <div class="name"></div>
                <div class="price"><span class="dollar"></span></div>
                <p class="sold-num"></p>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div class="lightning-buy">
        <div class="head">
          <a href="#" class="link">
            <h3 class="title"></h3>
            <i class="arrow"></i>
          </a>
        </div>
        <div class="body">
          <a href="" target="_blank" class="goods-core">
            <img class="logo" src="" alt="">
            <h6 class="name"></h6>
            <div class="desc">
              <span></span>
              <span><span class="day"></span></span>
            </div>
            <img class="goods" src="" alt="">
          </a>
          <div class="goods-other-list">
            <a href="" class="item">
              <img src="" alt="" class="logo">
              <h6 class="name"></h6>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

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
      height: 60px;
      padding: 0 20px;
      .link {
        display: flex;
        align-items: center;
        position: relative;
        height: 32px;
        margin: 12px 0 0;
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
          position: relative;
          &::after {
            content: "";
            width: 16px;
            height: 16px;
            background: {
              image: inherit;
              position: -16px 0;
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
        line-height: 19px;
        padding-bottom: 2px;
        margin: 0 -5px 0 0;
      }
    }
    .offer {
      .body {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-content: stretch;
        justify-content: space-between;
        width: 560px;
        height: 270px;
        padding: 0 15px 15px;
        position: relative;
      }
      .item:first-child {
        @include img-hover;
        background-color: rgba(109,126,146,.05);
        float: left;
        width: 170px;
        height: 265px;
        margin-right: 6px;
        position: relative;
        .icon {
          width: 120px;
          height: 120px;
          margin-top: 46px;
          text-align: center;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .lowest-first {
          position: absolute;
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
            margin: 9px 0 4px;
            text-align: center;
            overflow: hidden;
            text-overflow: ellipsis;
            word-break: break-all;
            line-height: 19px;
            color: #333;
            font-size: 14px;
            font-family: Microsoft Yahei,PingFangSC-Medium,sans-serif,serif;
          }
          .price {
            margin-top: 4px;
            line-height: 16px;
            font: {
              size: 18px;
              weight: 700;
              family: Arial-BoldMT,Microsoft Yahei,PingFangSC-Medium,sans-serif,serif;
            }
            color: #e1251b;
            letter-spacing: 0;
            .dollar {
              font-size: 12px;
            }
          }
        }
      }
      .item:nth-child(n + 2){
        
      }
    }
  }
</style>
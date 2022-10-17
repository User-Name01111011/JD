<template>
  <footer class="footer">
    <ul class="service">
      <li class="item"><h5 class="duo"></h5>品类齐全，轻松购物</li>
      <li class="item"><h5 class="kuai"></h5>多仓直发，极速配送</li>
      <li class="item"><h5 class="hao"></h5>正品行货，精致服务</li>
      <li class="item"><h5 class="sheng"></h5>天天低价，畅选无忧</li>
    </ul>
    <nav class="help">
      <div v-for="nav of foot.nav" class="nav">
        <h5 class="title">{{nav.title}}</h5>
        <ul class="list">
          <li v-for="item of nav.list"><a :href="item.href" target="_blank" rel="noopener noreferrer">{{item.title}}</a></li>
        </ul>
      </div>
      <div class="cover">
        <h5 class="title">京东自营覆盖区县</h5>
        <p class="info">京东已向全国2661个区县提供自营配送服务，支持货到付款、POS机刷卡和售后上门服务。</p>
        <a class="more" href="//help.jd.com/user/issue/103-983.html" target="_blank" rel="noopener noreferrer">查看详情></a>
      </div>
    </nav>
    <div class="copyright">
      <div class="inner">
        <p class="links">
          <span v-for="link of foot.links"><a :href="link.href" target="_blank" rel="noopener noreferrer">{{link.title}}</a></span>
        </p>
        <div class="info">
          <span>个人学习所用,侵删</span>
          <span><a href="//beian.miit.gov.cn" target="_blank" rel="noopener noreferrer">鄂ICP备2022008447号</a></span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { foot } from './home.json'

</script>

<style lang="scss" scoped>
.service {
  @include wrapper;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  height: 42px;
  padding: {
    top: 30px;
    bottom: 30px;
  }
  border-bottom: 1px solid #dedede;
  .item {
    @include ellipsis;
    display: flex;
    width: 235px;
    height: 42px;
    h5 {
      flex-shrink: 0;
      width: 36px;
      height: 42px;
      background-repeat: no-repeat;
      &.duo {
        background: {
          image: url(//img10.360buyimg.com/imagetools/jfs/t1/211298/12/18097/67160/6215e091E7fb1c693/cc1d8d291ea917c0.png);
          position: 0 -192px;
        }
      }
      &.kuai {
        background: {
          image: url(//img10.360buyimg.com/imagetools/jfs/t1/211298/12/18097/67160/6215e091E7fb1c693/cc1d8d291ea917c0.png);
          position: -41px -192px;
        }
      }
      &.hao {
        background: {
          image: url(//img10.360buyimg.com/imagetools/jfs/t1/211298/12/18097/67160/6215e091E7fb1c693/cc1d8d291ea917c0.png);
          position: -82px -192px;
        }
      }
      &.sheng {
        background: {
          image: url(//img10.360buyimg.com/imagetools/jfs/t1/211298/12/18097/67160/6215e091E7fb1c693/cc1d8d291ea917c0.png);
          position: -123px -192px;
        }
      }
      margin: 0 9px 0 0;
    }
    margin: 0 36px;
    line-height: 42px;
    font-size: 18px;
    font-weight: 700;
    color: #444;
  }
}

.help {
  @include wrapper;
  display: flex;
  overflow: hidden;
  height: 160px;
  padding: {
    top: 20px;
    bottom: 20px;
  }
      color: #666;
      font-size: 12px;
  .nav {
    width: 198px;
    line-height: 22px;
    .title {
      margin-bottom: 5px;
      font-size: 14px;
    }
  }
  .cover {
    width: 200px;
    height: 150px;
    .title {
      margin-bottom: 15px;
      text-align: center;
      font-size: 14px;
    }
    .info {
      padding: 0 10px;
    }
    .more {
      display: block;
      text-align: right;
    }
  }
}

.copyright {
  .inner {
    width: 1190px;
    padding: 15px 0;
    border-top: 1px solid #e1e1e1;
    margin: 0 auto;
    text-align: center;
    .links, .info {
      span:nth-child(n + 2)::before {
        content: "|";
        display: inline-block;
        width: 24px;
        text-align: center;
        color: #ccc;
      }
    }
    .links {
      font-size: 12px;
      color: #666;
    }
    .info {
      font-size: 12px;
      padding: 10px 0;
      line-height: 22px;
      color: #999;
    }
  }
}
</style>
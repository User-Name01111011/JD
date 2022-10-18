<template>
  <div class="channels">
    <h3 class="floorhd">频道广场</h3>
    <div class="list">
      <a v-for="itemB of channels.slice(0, 2)" class="item-b" :href="itemB.href" target="_blank">
        <img :src="itemB.src" alt="">
      </a>
      <div v-for="(itemS, index) of channels.slice(2)" class="item-s" :style="{order: index}">
        <a :href="itemS.content[0].href" target="_blank" class="title">
          <span class="main">{{itemS.title}}</span>
          <span class="intro">{{itemS.intro}}</span>
        </a>
        <div class="content">
          <a v-for="content of itemS.content" :href="content.href" target="_blank">
            <img :src="content.src" alt="">
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, watch } from 'vue'
import { channels } from './home.json'

const props = defineProps(['scrollY'])
watch(()=>props.scrollY, ()=>{
  if(props.scrollY){
    //todo axios
  }
})
</script>

<style lang="scss" scoped>
.channels {
  @include scroll-location;
  margin-bottom: 20px;
  overflow: hidden;
}
.list {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-content: space-between;
  justify-content: space-between;
  height: 940px;
}

.item-b, .item-s {
  width: 290px;
}

.item-b {
  @include img-hover;
  background-color: #fff;
  width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
    margin: 0 auto;
    &:nth-child(2){
      order: 3;
    }
}

.item-s {
  height: 180px;
  background-color: #fff;
  .title {
    @include ellipsis;
    display: block;
    height: 30px;
    margin: 0 10px 0 30px;
    padding: 17px 0 13px;
    line-height: 30px;
    .main {
      font-size: 22px;
      font-weight: 700;
      color: #333;
    }
    .intro {
      font-size: 14px;
      color: #999;
      margin-left: 5px;
    }
  }
  .content {
    display: flex;
    justify-content: space-between;
    width: 230px;
    padding-left: 30px;
    a {
      @include img-hover;
      width: 100px;
      height: 100px;
      img {
        width: auto;
        height: auto;
        max-width: 100%;
        max-height: 100%;
        margin: 0 auto;
        -webkit-transition: opacity .2s ease;
        transition: opacity .2s ease;
      }
    }
  }
}
</style>
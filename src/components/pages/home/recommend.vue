<template>
  <div class="recommend">
    <h3 class="floorhd">为你推荐</h3>
    <ul class="tab-hd">
      <li v-for="(tabHead, index) of recommend.tabHead"
        @click="tabClick(tabHead.id, index)"
        :class="{active: tabIndex == index}"
        class="item">
        <p class="title">{{tabHead.title}}</p>
        <p class="desc">{{tabHead.desc}}</p>
      </li>
    </ul>
    <ul class="tab-bd">
      <li v-for="(tabBody, index) in tabBodys[tabIndex]"
        :key="tabBody.id"
        :class="[{'item': !tabBody.class}, tabBody.class]">
        <a v-if="!tabBody.class" :href="tabBody.href" target="_blank">
          <img :src="tabBody.src" alt="">
          <div class="info">
            <p class="name">
              <i v-if="tabBody.info == 'self'" class="self">自营</i>
              <i v-if="tabBody.info == 'chosen'" class="chosen"></i>
              {{tabBody.title}}</p>
            <div class="price-info">
              <p class="price">
                <span class="dollar">¥</span>
                <span class="num">{{Math.trunc(tabBody.price)}}.<span class="decimal">{{(tabBody.price * 100).toString().slice(-2)}}</span>
                </span>
              </p>
              <p v-if="(typeof tabBody.pricePlus) == 'number'" class="price-plus">
                <span class="dollar">¥</span>
                <span class="num">{{Math.trunc(tabBody.pricePlus) + '.' + (tabBody.pricePlus * 100).toString().slice(-2)}}</span>
                <div class="ico"></div>
              </p>
            </div>
          </div>
          <div v-if="!tabBody.isAfter" class="hover">
            <div @click.prevent="deleteItem(index)" class="delete"></div>
            <div class="find">
              <div @click.prevent="loadMore($event, index)" class="find-btn">
                <i class="ico"></i>找相似</div>
              </div>
          </div>
        </a>
        <a v-else-if="tabBody.class == 'hotwords'" :href="tabBody.href" target="_blank">
          <p class="hd">精选热点</p>
          <ul>
            <li v-for="item of tabBody.list"><a :href="item.href" target="_blank">{{item.title}}</a></li>
          </ul>
        </a>
        <a v-else :href="tabBody.href" target="_blank">
          <img :src="tabBody.src" alt="">
          <div class="info">
            <div class="tags">
              <div v-if="tabBody.num" class="tag">{{tabBody.num}}款商品</div>
              <div v-if="tabBody.self" class="tag">自营</div>
              <div v-if="tabBody.follows" class="follows">{{tabBody.follows > 100000 ? Math.round(tabBody.follows / 1000) / 10 + '万' : tabBody.follows}}人关注</div>
            </div>
            <p class="title">{{tabBody.title}}</p>
            <p v-if="tabBody.desc" class="desc">{{tabBody.desc}}</p>
            <div v-if="tabBody.class == 'joy'" class="btn">JOY寻宝</div>
            <div v-else class="btn">逛好店</div>
          </div>
        </a>
      </li>
    </ul>
    <div class="loading"><em></em><em></em><em></em></div>
  </div>
</template>

<script setup>
import { ref,computed, reactive } from 'vue'
import { recommend } from './home.json'

let tabIndex = ref(0)

const props = defineProps(['scrollY'])

function tabClick(id, index){
  if(recommend.tabBody[index].length){
    //axios
  }
  tabIndex.value = index
}
let tabBodys = reactive(recommend.tabBody)
const data = [{
          "id": "item101",
          "href": "//item.jd.com/100021168937.html",
          "src": "//img12.360buyimg.com/jdcms/s150x150_jfs/t1/201639/28/26831/156101/6347606cEceba72d6/a3af9baff189548b.jpg.avif",
          "title": "增加1",
          "price": 3899.00,
          "pricePlus": 3799.00,
          "info": "chosen",
          "isAfter": true
        },
        {
          "id": "item102",
          "href": "//item.jd.com/10036349644371.html",
          "src": "//img11.360buyimg.com/jdcms/s150x150_jfs/t1/103750/18/26847/88210/63423756Eb82fa145/9b19395dcf18ddb3.jpg.avif",
          "title": "增加2",
          "price": 199.00,
          "isAfter": true
        },
        {
          "id": "item103",
          "href": "//item.jd.com/100016679587.html",
          "src": "//img12.360buyimg.com/jdcms/s150x150_jfs/t1/201807/24/17135/108175/6347dba4E03702110/d0e80ba49ac0ade1.jpg.avif",
          "title": "增加3",
          "price": 28.80,
          "info": "self",
          "isAfter": true
        },
        {
          "id": "item104",
          "href": "//item.jd.com/10057457452505.html",
          "src": "//img30.360buyimg.com/jdcms/s150x150_jfs/t1/174832/11/18990/117818/60e82d29Ee53e205b/88283d2e25778c8c.jpg.avif",
          "title": "增加4",
          "price": 11.37,
          "isAfter": true
        },
        {
          "id": "item105",
          "href": "//item.jd.com/100020792840.html",
          "src": "//img20.360buyimg.com/jdcms/s150x150_jfs/t1/133259/29/29201/53881/63457376Ecbdab0a5/ad6029be27e5528a.jpg.avif",
          "title": "增加5",
          "price": 2290.00,
          "info": "self",
          "isAfter": true
        }]
function loadMore(e, index){
  if(e.target.className.indexOf('disabled') == -1){
  //todu axios请求一行同类数据 data代替
    e.target.className += ' disabled'
    index == 0 && index++
    tabBodys[tabIndex.value].splice(Math.ceil(index / 5) * 5, 0, ...data)
  }
}
function deleteItem(index){
  //替换数据
  tabBodys[tabIndex.value][index] = data[0]
}
</script>

<style lang="scss" scoped>
.recommend {
  @include scroll-location;
}

.tab-hd {
  display: flex;
  padding: 0 55px;
  background-color: #fff;
  margin: 0 0 10px;

  .item {
    width: 180px;
    height: 60px;
    text-align: center;
    cursor: pointer;

    .title {
      width: 70px;
      height: 27px;
      padding: 0 5px;
      border-radius: 50px;
      margin: 7px auto 0;
      color: #333;
      font-size: 16px;
      font-weight: 700;
      line-height: 27px;
    }

    .desc {
      color: #999;
      font-size: 14px;
    }

    &.active {
      .title {
        background: #e1251b;
        color: #fff;
      }

      .desc {
        color: #e1251b;
      }
    }
  }
}

.tab-bd {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -10px 0 0;

  .item,
  .hotwords,
  .joy,
  .shop {
    width: 230px;
    height: 322px;
    background: #fff;
    margin: 0 10px 10px 0;
  }

  .item {
    @include img-hover;
    position: relative;

    img {
      display: block;
      width: 150px;
      height: 150px;
      margin: 30px auto 40px
    }

    .info {
      padding: 0 20px;

      .name {
        height: 48px;
        font-size: 14px;
        line-height: 24px;
        text-align: left;
        color: #666;
        -webkit-transition: color .2s ease;
        transition: color .2s ease;
        word-break: break-all;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;

        .self {
          display: inline-block;
          height: 16px;
          padding: 0 5px;
          background-color: #e1251b;
          border-radius: 2px;
          margin-right: 4px;
          color: #fff;
          line-height: 16px;
          font-size: 12px;
          font-family: Helvetica Neue, Hiragino Sans GB, SimSun, serif;
          font-style: normal;
        }

        .chosen {
          display: inline-block;
          position: relative;
          top: 3px;
          width: 54px;
          height: 16px;
          background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAAQCAYAAABdsIz2AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsSAAALEgHS3X78AAAC/ElEQVRIx92WTW7UQBCFv7KzjGSPPYrIGrHjAs4FIrgGEpeIlMVwjqy4Smb6Aogd7CAs/NMjZcm4WHS7bc94/hAsoCVLPXZ1T716Va9Klsvlm8Vi8VCW5TX/wZrP50/39/fv5Pb29vtyubx+fn7+639qTYYggKIIgqIKIoKyASIUEFqEGEUHpwVUEREAb4c7pxEioAifviR8+PjqKSrLchKUqh739DfslQ0KpEXlwIlzT4hJi5oIGQAUVCEtao9NPCQXmqSoEGJEoKVFUV6/XFOW5fXFPgdEBB1E6M8s8UxsAsykc9qvpKjCfm1yRARrMtKiwpqcFpgVFdZkgTl3bzS6JwDbF/Gp9x3oU1nrgiPe8WblnEqLmrXJg3tJUXuHHTMtSuS/2lXqE5hwFs88QGMyxJ8cATuXmaH9qcwqSmMyZt4pB2LMWjr4JrS0CiIxIhGCkHi2FJj5wLToTl2OUvGUOtkGMAR1HKCTDpdaNSC0+jOwlhQ1djVDJPIORsxuetBrk2FNPmLGWYEO6nIH2DHmtoGfX4PaCwF9Gg1XetOEvTU5a5OhiBeb3TPD39bkYb9XPE52dQLs/kAJzSpDpCUtLHaVgYgXhl4MZkUd6lADB77WPGOJF5O0qGhM5lhTRWUPsHNk/lBaTvPlvqeF7XDuiEF/t7OPkKCinZAMVXUYNKTrbow1UkRGz753pwRiUk1hxE5a1MFubXL/ZN62E3AFYr9rcelsfV3iQUhoEzIlHoeiPvX+EENTfVB1M5g+CCBg3L86djuA/QQSD/pZH5AeFKEh7KjiqY6eIhw74MRFvtVueuiTqTEJERdoEBgBNihxkPWkqFibPLAc+WutSemmlW6NGvR2bzrk6BR7+8CFvY++SOvPEIosImasmk7Iu9RtUeyAnanlUtzV38V8Pn+6vLy83nb0EHPnvB/ZhNE38tKs3qHcQ9EweXSjchNqzp23JvXziLMaKiYon79m5Hn+Qx4fH98uFouHqqpeHPXsH1hXV1ff7u7u3v8C0NSry9S8ID0AAAAASUVORK5CYII=);
          margin-right: 8px;
        }
      }

      .price-info {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
      }

      .price {
        height: 18px;
        margin-top: 10px;
        font-size: 16px;
        line-height: 18px;
        color: #e1251b;

        .dollar {
          margin-right: 3px;
          vertical-align: middle;

          font: {
            size: 12px;
            weight: 700;
            family: MicrosoftYahei-regular, Arial, Helvetica, sans-serif;
          }
        }

        .num {
          font: {
            size: 20px;
            weight: 700;
            family: arial, sans-serif;
          }

          .decimal {
            font-size: 12px;
          }
        }
      }

      .price-plus {
        display: flex;
        justify-content: right;
        align-items: baseline;
        margin-right: 1px;
        color: #333;
        font-size: 12px;

        .dollar {
          vertical-align: middle;
          margin-right: 3px;
          font-weight: 400;
          font-family: MicrosoftYahei-regular, Arial, Helvetica, sans-serif;
        }

        .num {
          @include ellipsis;
          height: 18px;

          font: {
            weight: 400;
            family: arial, sans-serif;
          }

          line-height: 18px;
        }

        .ico {
          width: 39px;
          height: 12px;

          background: {
            image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAMCAYAAADhyKTAAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsSAAALEgHS3X78AAACs0lEQVQ4y82US2xMYRTHf/fOnamZa6S0rhmtqXEJU2UhCBLhksamQiKRsBErDYnEI0QUTVlouiCz8Nh5hHgsmkqEtM1Mw6Ivr8UgpRji0ZGpPrR63bkztaiOTKeqmY2e1XfynfM/v/zPl0/QNK0cOMEEDEs4HG7wer0CsPZ/w4wMYfgw0sGaa2v53mdSF/yMb3420U6dKzfe8jWqAxCoKQZg3aa6NNHR7qY4rVRfXcP6zfUAeAsms3O7Slt7LznTssidlsWd+x959LQz2SMNH4LBYLmmaUk452QrL9uiVPmbcNgHaazbjkuZxMHjTzJyQXaIfO8zknnFkcVcvfGca7fbMU2TmS475UdWjw43WoiigKIomKZJV7fOosKpGa9IsqQsiiybyN7SJbhdOQQeRnjzroudu+/i8Xj+zB9z58KQWJEvh9wcB+1vv2UMlxgcTMn9F1px2CV2bFO5fG4VVRXL8S2Yk2rOWILz1KlcPLMC/+mlNLZ8onRfbcZwogi6bibzmnufKdl6k1vVLzBicVYum86BPb5Ut8cSjMXibNh8HTAZxEpeXh6WcYD0/4ghO6zYbCKGkQAgzy3T3aMna2YouUS7+ik71Uzl2SYunS9h9Upl/M6FP/Qw2zsHT8FcvF4vNpstrUYQ0vseP/sCQMEsecgBSWTLxgICD94na/yVy1joU8jPz8chu2h53EHb69RnkyKtaVryYQRqivnWpbPnUCuRr3oawPB30d1jMDAQB6CvP8au/c2YRidHDy6nqNBF69NObFaR+oZX1AY+oSgzAIjHohw7vAYl185PI0Fv7w/KTjZgl13/hguFQkiShKqqWK3WNLhQKPTbFQlRHFqAxWJBVVUMw6CjowNd13E6nSQSCWRZJjs7O9lvGAaRSATTNBEEAVEUcbvdKbP+CjcR4hfv4OvI0J6aTAAAAABJRU5ErkJggg==);
            repeat: no-repeat;
          }
        }
      }
    }

    .hover {
      opacity: 0;

      .delete {
        // display: none;
        position: absolute;
        top: 10px;
        right: 10px;
        width: 16px;
        height: 16px;

        background: {
          image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAALGPC/xhBQAAAAZiS0dEAP8A/wD/oL2nkwAAANJJREFUOMvtkU0KwjAQhafVZcFVVXoMD+EBWnsDb6WCBRdNfyDdxa16gRzFG/hGJhKllW4FH3wQpn0vMxmiv14yxpBSiuq6XoE1CMHzW1VVzBLkqEWu/qamadhMYr6CDARijsEOHPDfrDeAJQGBmG8ghWnOZpxPMCd80Vd5ISm4gDMoRpmdvJkNuCNga62lUQEfMxdslk4y6azf2HUdlWXJ5gXYu5nbtiXvTTaohb0hWmsXkMtrJ95m+GZe4RHEg12IIeJV+fPyGUwBjzYZDPhNPQCZAMge0sk3nAAAAABJRU5ErkJggg==);
          repeat: no-repeat;
          size: 16px;
          position: 50%;
        }

        cursor: pointer;

        &:hover {
          -webkit-transition: all .4s ease;
          transition: all .4s ease;
          background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAALGPC/xhBQAAAAZiS0dEAP8A/wD/oL2nkwAAAZpJREFUOMulk7tOAkEUhqfTXmVBK9hdoxC0EFFqEztLWg1SeWksfQZ9ha3UBDAa38DEwr3ANhZk2WgtSKEgnSHHcyazZGdBGyb5k83s/505lxnGxLITOrMW9Vlb0XatmGqgPNRAiL4N/o886B2t19gGM+Mqs+O6YinaJRrbKPhDbfLY8WXFVFKstbSNJys6wXErptXQMPwHDoQerUoMscxJqDOWol4EsLmQAnM+OQ7K+0NiiGWi5vfA9LKzB83ivgwj6Ga2wC+fQj2Z5T5iiGWiYSNjs3gAPasO/uExGnFvLgmNlRx0rqvQualBXV0PApAMJjosnUhw325Aq3QEbjoPnasKdG8fwF0rhGGSx8SYIvWqHO49O/D1+ATd6j242QLPMOIdTA6AabvpTfhE+Kf/DW9n55PgUQAv2jBeM6VdueNwz3TAL4meyAE8uYlYn5vJ84bxmrPbPCDB1BOaAs4/HMCQxkhzJhN1W6oZT/bLJ/CBGTVWc/IYoxfJwTlHRsVFJ1NpIoPwRYpcZQIjcLjEsas89WOa9jn/Ai8058i39DJCAAAAAElFTkSuQmCC);
        }
      }

      .find {
        position: absolute;
        bottom: 8px;
        left: 0;
        width: 100%;
        height: 66px;
        text-align: center;
        background: -webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, .8)), color-stop(35%, white), to(white));
        background: linear-gradient(180deg, rgba(255, 255, 255, .8) 0, white 35%, white);

        .find-btn {
          bottom: 27px;
          width: 120px;
          height: 28px;
          background-color: #333;
          border: 1px solid #353131;
          border-radius: 15px;
          margin: 18px auto 0;
          line-height: 28px;
          text-align: center;
          font-size: 12px;
          color: #fff;
          cursor: pointer;

          .ico {
            display: inline-block;
            vertical-align: middle;
            width: 16px;
            height: 16px;

            background: {
              image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAALGPC/xhBQAAAAZiS0dEAP8A/wD/oL2nkwAAAQlJREFUOMvN0ssuA2EUwPHG1EI3WGHt/gzS2CEkghC3NUXISLyFS1IsxQY7IXF5AJ5s/E/y7+SrdNFlJ/kl813O6ek5U6n05FMURejDgOK9q6Awil1c4UGX2MFI616n4CrW8IUX5FhV7t6n62qZxOAMDfxiCzVM4AynGHdv2zsHxpQJlvCDuusZfOAW975PeTbv3YVWgiG84TDpw4XBmeVGkvPk/BivGIzFMN4tK03QNEG4+5fgKE0Qli1rzvWsDWtaSfyFac/q3l1MexC/cuLBhrOftPu5DY29TZvYKJuYTKLf4G882f0VxTSeHfF62xg7fEhj2McNHnWNPc8q3X6VmbOvtZXbc88fVwgKM0eNW+sAAAAASUVORK5CYII=);
              size: 16px 16px;
              repeat: no-repeat;
            }

            margin: -4px 4px 0 0;
            line-height: 16px;
          }

          &:hover {
            background: #c81623;
            border-color: #c81623;
          }

          &.disabled {
            background-color: #b7b6b6;
            border-color: #b7b6b6;
            color: #fff;
            cursor: default;
          }
        }
      }
    }

    &:hover {
      .hover {
        -webkit-transition: all .4s ease;
        transition: all .4s ease;
        opacity: 1;
      }
    }
  }

  .hotwords {
    cursor: pointer;
    background-image: url(//misc.360buyimg.com/mtd/pc/index_2019/1.0.1/assets/sprite/content_bg/sprite.png);
    background-position: -460px 0;

    .hd {
      width: 110px;
      height: 34px;
      background: #f2272b;
      border-radius: 50px;
      margin: 20px auto 37px;
      line-height: 34px;
      color: #fff;
      font-size: 16px;
      font-weight: 700;
      text-align: center;

    }
    ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      padding: 0 20px;

      li {
        width: 88px;
        height: 36px;
        border: 1px solid #ffe0e8;
        border-radius: 5px;
        margin: 0 0 10px;
        text-align: center;
        line-height: 36px;
        font-size: 14px;

        a {
          @include ellipsis;
          display: block;
          width: 100%;
          height: 100%;
          color: #c81623;
        }
      }
    }
  }

  .joy,
  .shop {
    a {
      display: block;

      img {
        width: 150px;
        height: 150px;
        margin: 30px 40px 10px;
      }
      .info {
        margin: 0 20px;
        .title {
          margin-bottom: 5px;
          font-size: 14px;
          font-weight: 700;
          color: #333;
        }
        .tags {
          margin-bottom: 5px;

          .tag {
            font-weight: 700;
            padding: 0 3px;
          }

          .tag,
          .follows {
            display: inline-block;
            font-size: 12px;
            border-radius: 2px;
          }
        }

        .btn {
          padding-left: 5px;
          color: #fff;
          font-size: 12px;
          text-align: center;
          line-height: 24px;
          font-weight: 700;
        }
      }
    }
  }

  .joy {
    background-image: url(//misc.360buyimg.com/mtd/pc/index_2019/1.0.1/assets/sprite/content_bg/sprite.png);
    background-position: 0 0;

    a {
      .info {

        .tag {
          color: #116ce9;
          border: 1px solid #116ce9;
        }

        .title {
          @include ellipsis;
        }

        .desc {
          @include ellipsis;
          margin-bottom: 6px;
          color: #666;
          font-size: 12px;
        }

        .btn {
          width: 90px;
          height: 24px;
          background-image: url(//misc.360buyimg.com/mtd/pc/index_2019/1.0.1/assets/sprite/content_btn/sprite.png);
          background-position: 0 0;
        }
      }
    }
  }

  .shop {
    a {
      .info {
        .title {
          height: 45px;
          white-space: normal;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
        .tag {
          color: #7b20da;
          border: 1px solid #7b20da;
        }

        .follows {
          width: 89px;
          height: 20px;
          background: #efe0ff;
          margin-left: 5px;
          text-align: center;
          line-height: 20px;
          color: #7b20da;
        }
        .btn {
          width: 81px;
          height: 24px;
          background-image: url(//misc.360buyimg.com/mtd/pc/index_2019/1.0.1/assets/sprite/content_btn/sprite.png);
          background-position: 0 -48px;
        }
      }
    }
  }
}

.loading {
  margin-bottom: 82px;
  @-webkit-keyframes loading {
      0% {
        opacity: 1
      }
  
      50% {
        opacity: .4
      }
  
      to {
        opacity: 1
      }
    }
  
    @keyframes loading {
      0% {
        opacity: 1
      }
  
      50% {
        opacity: .4
      }
  
      to {
        opacity: 1
      }
    }
  em {
    display: block;
    width: 13px;
    height: 13px;
    margin: 12px auto;
    border-radius: 50%;
    -webkit-animation: loading 2s linear infinite;
    animation: loading 2s linear infinite;
    &:nth-child(1) {
      background-color: rgb(88, 88, 87);
      -webkit-animation-delay: .5s;
      animation-delay: .5s;
    }
    &:nth-child(2) {
      background-color: rgb(150, 151, 150);
      -webkit-animation-delay: 1s;
      animation-delay: 1s;
    }
    &:nth-child(3) {
      background-color: rgb(209, 210, 208);
      -webkit-animation-delay: 1.5s;
      animation-delay: 1.5s;
    }
  }
}
</style>
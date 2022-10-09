<template>
  <div class="fs">
    <nav class="cate" @mouseleave="cateLeave">
      <ul class="menu">
        <li v-for="(itemp, index) of menu" @mouseenter="menuLiEnter(index)" class="menu-item">
          <span v-for="itemc of itemp"><a :href="itemc.href">{{itemc.name}}</a></span>
        </li>
      </ul>
      <div class="cate-dropdown-list" v-show="cateDropdownIndex > -1">
        <div v-for="(cateDropdownItem, index) of cateDropdown" v-show="index == cateDropdownIndex"
          class="cate-dropdown-item">
          <div class="part-content">
            <div class="cate-channel">
              <a v-for="channel of cateDropdownItem.channel" :href="channel.href"
                target="_blank">{{channel.name}}></a>
            </div>
            <div class="cate-detail">
              <dl v-for="detail of cateDropdownItem.detail">
                <dt><a :href="detail.title.href">{{detail.title.name}}<span>></span></a></dt>
                <dd>
                  <a v-for="con of detail.con" :href="con.href" target="_blank">{{con.name}}</a>
                </dd>
              </dl>
            </div>
          </div>
          <div class="part-aside">
            <ul class="cate-brand">
              <li v-for="brand of cateDropdownItem.brand"><a :href="brand.href"><img :src="brand.src" alt=""></a></li>
            </ul>
            <ul class="cate-promotion">
              <li v-for="promotion of cateDropdownItem.promotion"><a :href="promotion.href"><img :src="promotion.src"
                    alt=""></a></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    <div class="center-slider">
      <button class="slider-navigation prev">&lt;</button>
      <button class="slider-navigation next">&gt;</button>
      <ul class="list">
        <li v-for="slide of centerSliders"
          class="item">
          <a :href="slide.href" target="_blank"><img :src="slide.src" alt=""></a>
        </li>
      </ul>
      <ul class="pagination">
        <li v-for="item of centerSliders.length"></li>
      </ul>
    </div>
    <div class="aside-slider">
      <button class="slider-navigation prev">&lt;</button>
      <button class="slider-navigation next">&gt;</button>
      <ul class="list">
        <li v-for="slide of asideSliders"
          class="item">
          <a v-for="slideItem of slide" :href="slideItem.href" target="_blank"><img :src="slideItem.src" alt=""></a>
        </li>
      </ul>
    </div>
    <div class="side-nav">
      <div class="user">
        <div class="top">
          <a class="avatar" href="#" target="_blank">
            <img :src="store.userInfo.portraitSrc" alt="">
          </a>
          <div class="show">
            <a href="#" class="tip">Hi~欢迎逛京东！</a>
            <p>
              <a href="#" class="login">登录</a>
              <span>|</span>
              <a href="#" class="regist">注册</a>
            </p>
          </div>
        </div>
        <div class="profit">
          <a class="new" href="#" target="_blank">新人福利</a>
          <a class="plus" href="#" target="_blank">PLUS会员</a>
        </div>
      </div>
      <div class="news">
        <div class="head">
          <h5 class="title">京东快报</h5>
          <a href="#" target="_blank" class="more">更多 &gt;</a>
        </div>
        <ul class="list">
          <li v-for="news of newsList" class="item">
            <a :href="news.href" target="_blank">
              <span class="tag">{{news.tag}}</span>{{news.name}}
            </a>
          </li>
        </ul>
      </div>
      <div class="service">
        <ul class="list">
          <li v-for="service of services" class="item">
            <a :href="service.href" target="_blank">
              <i class="icon">
                <img :src="service.src" alt="">
                <img :src="service.hoverSrc" alt="" class="hover">
              </i>
              <span class="txt">{{service.name}}</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { store } from '@/store.js'
import { cateDropdown, menu, centerSliders, asideSliders, newsList, services } from './home.json'


import { MySliders } from './mySliders'
import { ref } from 'vue'
import $ from 'jquery'

console.log(store.userInfo.portraitSrc)
let cateDropdownIndex = ref(-1)

function menuLiEnter(index) {
	cateDropdownIndex.value = index
}
function cateLeave(e) {
	if (e.toElement.className != '' && $("." + e.toElement.className + "").parents('.cate').length > 0) return
	cateDropdownIndex.value = -1
}

MySliders({
	el: '.center-slider',
	autoplay: true,
	pause: true,
	navigation: true,
	pagination: {
		el: '.pagination',
		event: 'mouseenter'
	}
})

MySliders({
	el: '.aside-slider',
	autoplay: true,
	pause: true,
	delay: 5000,
	navigation: true
})

</script>

<style lang="scss" scoped>
.fs {
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	height: 470px;
	margin: 10px 0 0;

	.cate {
		width: 190px;
		height: 100%;
		position: relative;
	}

	.menu {
		padding: 10px 0;
		background-color: #fefefe;

		li {
			height: 25px;
			padding-left: 18px;
			color: #333;
			line-height: 25px;
			-webkit-transition: color .2s ease;
			transition: color .2s ease;

			&:hover {
				background-color: #d9d9d9;
			}

			a {
				font-size: 14px;
			}

			span:nth-last-child(n + 2)::after {
				content: "/";
				padding: 0 2px;
				font-size: 12px;
			}
		}
	}

	.cate-dropdown-list {
		position: absolute;
		left: 191px;
		top: 0;
		width: 998px;
		min-height: 438px;
		padding: 20px 0 10px;
		border: 1px solid #f7f7f7;
		background-color: #fff;
		-webkit-box-shadow: 2px 0 5px rgb(0 0 0 / 30%);
		box-shadow: 2px 0 5px rgb(0 0 0 / 30%);
		-webkit-transition: top .25s ease;
		transition: top .25s ease;
		z-index: 9;
	}

	.cate-dropdown-item {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;

		.part-content {
			width: 780px;
			padding: 0 0 0 20px;

			.cate-channel {
				display: flex;
				overflow: hidden;
				height: 24px;

				a {
					*cursor: pointer;
					margin-right: 10px;
					padding: 0 10px;
					height: 24px;
					background-color: #333;
					line-height: 24px;
					font-size: 12px;
					color: #fff;
				}
			}

			.cate-detail {
				overflow: hidden;
				padding: 10px 0 0 0;

				dl {
					display: flex;
					align-items: flex-start;
					padding: 5px 0;

					dt {
						flex-shrink: 0;
						overflow: hidden;
						width: 70px;
						margin: 0 10px 0 0;
						text-align: right;
						font-weight: 700;
						white-space: nowrap;
						text-overflow: ellipsis;
						font-size: 12px;
						line-height: 22px;
						color: #333;

						span {
							margin-left: 5px;
							font-weight: bold;
						}
					}

					dd {
						@include flex-wrap;
						overflow: hidden;

						a {
							padding: 3px 7px;
							height: 16px;
							line-height: 16px;
							white-space: nowrap;
							font-size: 12px;
							color: #666;
						}
					}
				}
			}
		}

		.part-aside {
			width: 168px;
			padding: 0 15px;
		}

		.cate-brand {
			@include flex-wrap;
			justify-content: space-between;

			li {
				overflow: hidden;
				width: 83px;
				height: 35px;
				background-color: #e7e7e7;
				margin: 0 0 1px;

				img {
					width: 100%;
					height: 100%;
					object-fit: contain;
				}
			}
		}

		.cate-promotion {
			width: 100%;
			margin: 10px 0 1px;
			height: 134px;
			background-color: #e7e7e7;

			img {
				width: 100%;
				height: 100%;
			}
		}
	}
}

.center-slider {
	width: 590px;
	height: 100%;
	overflow: hidden;
	position: relative;

	.item {
		width: 590px;
		height: 470px;
		position: absolute;
		top: 0;
		left: 0;
		transition: opacity 300ms ease-in-out 0s;
		opacity: 0;
		z-index: 0;

		&.active {
			opacity: 1;
			z-index: 1;
		}
	}
	.pagination {
		display: flex;
		z-index: 2;
		position: absolute;
    left: 30px;
    bottom: 20px;
    -webkit-animation: skeletonShow .2s ease .1s both;
    animation: skeletonShow .2s ease .1s both;
		li {
			width: 8px;
			height: 8px;
			margin-right: 4px;
			border: 1px solid rgba(0,0,0,.05);
			background: rgba(255,255,255,.4);
			margin-right: 4px;
			border-radius: 50%;
			-webkit-transition: background .2s ease;
			transition: background .2s ease;
			&.active{
				width: 9px;
				height: 9px;
				background-color: #fff;
				border: 3px solid rgba(0,0,0,.1);
				margin-top: -3px;
			}
		}
	}
}

.slider-navigation {
	position: absolute;
	top: 50%;
	border-radius: 0;
	width: 25px;
	height: 35px;
	line-height: 35px;
	background-color: rgba(0, 0, 0, .15);
	margin-top: -20px;
	z-index: 2;
	border: none;
	outline: none;
	-webkit-transition: background-color .2s ease;
	transition: background-color .2s ease;
	cursor: pointer;
	font-size: 20px;
	text-align: left;
	color: rgba(255, 255, 255, .8);

	&.prev {
		left: 0;

		border: {
			top-right-radius: 18px;
			bottom-right-radius: 18px;
		}

		;
		text-indent: 5px;
	}

	&.next {
		right: 0;

		border: {
			top-left-radius: 18px;
			bottom-left-radius: 18px;
		}

		;
		text-indent: 9px;
	}

	&:hover {
		color: #fff;
		background-color: rgba(0, 0, 0, .4);
	}
}

.aside-slider {
	width: 190px;
	height: 100%;
	overflow: hidden;
	transition: opacity 300ms ease-in-out 0s;
	position: relative;

	&:hover {
		.slider-navigation {
			opacity: 1;
		}
	}

	.slider-navigation {
		opacity: 0;
	}

	.list {
		height: 100%;
	}

	.item {
		@include img-hover;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: 100%;
		opacity: 0;
		z-index: 0;
		position: absolute;
		top: 0;
		left: 0;
		transition: opacity 300ms ease-in-out 0s;

		&.active {
			opacity: 1;
			z-index: 1;
		}

		img {
			width: 100%;
			height: 150px;
		}
	}
}

.side-nav{
  width: 190px;
  height: 480px;
  z-index: 1;
}

.user{
  height: 102px;
  background: #fff;
  overflow: hidden;
  position: relative;
  &::after{
    content: " ";
    position: absolute;
    height: 1px;
    left: 15px;
    right: 15px;
    background: -webkit-gradient(linear,right top,left top,from(white),color-stop(#eeeeee),color-stop(#eeeeee),to(white));
    background: linear-gradient(270deg,white,#eeeeee,#eeeeee,white);
    bottom: 0;
  }
  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 13px 10px 0 20px;
    .avatar{
      width: 40px;
      height: 40px;
      border: 2px solid #fff;
      border-radius: 50%;
      overflow: hidden;
      -webkit-box-shadow: 0 2px 8px rgb(0 0 0 / 5%);
      box-shadow: 0 2px 8px rgb(0 0 0 / 5%);
      img {
        width: 100%;
        height: 100%;
      }
    }
    .show {
      width: 106px;
      color: #666;
      .tip {
        font-size: 12px;
      }
      p {
        overflow: hidden;
        height: 22px;
        line-height: 22px;
        width: 100%;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size: 12px;
        color: #333;
      }
      span {
        margin: 0 4px;
        color: #666;
      }
    }
  }
  .profit {
    display: flex;
    justify-content: center;
    height: 25px;
    margin: 10px 0 0;
    a {
      margin: 0 5px;
      width: 70px;
      height: 25px;
      line-height: 25px;
      font-size: 12px;
      text-align: center;
      border-radius: 13px;
      -webkit-transition: background .3s ease,color .3s ease;
      transition: background .3s ease,color .3s ease;
    }
    .new {
      background: #e1251b;
      color: #fff;
    }
    .plus {
      background: #363634;
      color: #e5d790;
    }
  }
}
.news {
  overflow: hidden;
  height: 130px;
  background: #fff;
  .head {
    display: flex;
    justify-content: space-between;
    height: 20px;
    padding: 10px 0 0;
    margin-bottom: 8px;
    line-height: 20px;
    .title {
      font-size: 14px;
      margin-left: 15px;
      color: #333;
    }
    .more {
      margin: 0 15px 0 0;
      font-size: 12px;
      color: #999;
    }
  }
  .list {
    margin: 0 15px;
    height: 88px;
    .item {
      @include ellipsis;
      max-width: 160px;
      width: 160px;
      height: 16px;
      margin-bottom: 6px;
      line-height: 16px;
      color: #666;
      font-size: 12px;
      .tag {
        display: inline-block;
        height: 16px;
        width: 35px;
        line-height: 16px;
        text-align: center;
        vertical-align: 0;
        color: #e1251b;
        background-color: rgba(225,37,27,.08);
        margin-right: 6px;
      }
    }
  }
}

.service {
  overflow: hidden;
  height: 238px;
  background-color: #fff;
    -webkit-transition: all .2s ease;
    transition: all .2s ease;
  .list {
    @include flex-wrap;
    justify-content: space-between;
    padding: 10px .5px 5px;
    .item {
      width: 63px;
      height: 55px;
      background: #fff;
      text-align: center;
      overflow: hidden;
      a {
        display: block;
        *cursor: pointer;
        -webkit-transition: all .2s linear;
        transition: all .2s linear;
        i {
          display: block;
          position: relative;
          width: 28px;
          height: 28px;
          margin: 0 auto;
          img {
            width: 28px;
            height: 28px;
          }
          .hover {
            position: absolute;
            top: 0;
            left: 0;
            opacity: 0;
            -webkit-transition: all .2s ease;
            transition: all .2s ease;
          }
        }
        .txt {
          display: block;
          height: 25px;
          line-height: 25px;
          border-bottom: 2px solid #fff;
          color: #333;
          font-size: 12px;
          -webkit-transition: color .15s ease;
          transition: color .15s ease;
        }
      }
      &:hover {
        .hover {
          opacity: 1;
        }
      }
    }
  }
}
</style>
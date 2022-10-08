<template>
	<div v-show="isPromotionalTop" class="promotional-top" :style="promotionalTop.style">
		<a :href="promotionalTop.href" target="_blank" rel="noopener noreferrer"><img :src="promotionalTop.src"
				alt="" /></a>
		<i class="promotional-top-close" @click="isPromotionalTop = false"></i>
	</div>
	<TopBar />
	<HomeHeader :scrollY="win.scrollY" />
	<main class="main">
		<ul class="elevator">
			<svg class="svgcont" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
				style="display: none;">
				<defs>
					<symbol id="icon_timline" viewBox="0 0 16 16">
						<path
							d="M12.986 5.582a.505.505 0 0 0 .25-.063c.34-.188.364-.738.056-1.252-.235-.391-.59-.643-.905-.643a.511.511 0 0 0-.251.063c-.338.188-.363.738-.055 1.252.234.391.59.643.905.643m-9.975 0c.317 0 .674-.252.91-.643.31-.514.286-1.064-.056-1.253a.52.52 0 0 0-.252-.062c-.317 0-.674.252-.91.643-.31.514-.285 1.064.056 1.252.076.042.16.063.252.063m10.779.956a.372.372 0 0 0-.295-.024.387.387 0 0 0-.225.201c-.013.025-.315.609-1.062 1.191-.738.573-2.062 1.26-4.185 1.279h-.075c-2.076 0-3.384-.653-4.116-1.2-.779-.581-1.094-1.177-1.097-1.182a.395.395 0 0 0-.23-.199.371.371 0 0 0-.293.031.42.42 0 0 0-.161.549c.039.077.413.772 1.316 1.45.826.622 2.29 1.363 4.573 1.363l.089-.001c2.331-.019 3.81-.793 4.641-1.439.862-.672 1.225-1.345 1.292-1.475a.419.419 0 0 0-.172-.544m-5.848-.124c1.092 0 2.268-.218 2.268-.697S9.034 5.02 7.942 5.02c-1.071 0-2.152.216-2.152.697s1.081.697 2.152.697m4.086 4.647c-1.004.574-1.052 1.597-1.015 2.223a.098.098 0 0 1-.113.104c-.693-.096-1.161-.407-1.757-.943a1.343 1.343 0 0 0-.933-.351l-.21.003c-3.809 0-6.897-2.458-6.897-5.489 0-3.032 3.088-5.489 6.897-5.489 3.808 0 6.896 2.457 6.896 5.489 0 1.834-1.129 3.461-2.868 4.453M8 0C3.589 0 0 2.931 0 6.533c0 3.603 3.589 6.533 8 6.533l.224-.002c.102 0 .204.033.272.099 1.239 1.205 2.568 1.323 3.303 1.336a.3.3 0 0 0 .303-.342c-.087-.613-.318-1.813.477-2.263C14.722 10.684 16 8.677 16 6.533 16 2.931 12.411 0 8 0">
						</path>
					</symbol>
					<symbol id="icon_feedback" viewBox="0 0 16 16">
						<path
							d="M1.4,15l0-1l14,0v1H1.4z M2.5,13H2l0-0.5c0-0.1,0-0.2,0-0.3c0-0.3,0.1-0.8,0.2-1.3c0.1-0.7,0.4-1.7,0.4-2 C2.7,8.7,2.8,8.4,3,8.3l8-8c0.3-0.3,0.8-0.3,1.1,0l2.7,2.7c0.3,0.3,0.3,0.8,0,1.1l0,0l-8,8c-0.1,0.1-0.4,0.3-0.6,0.4 c-0.7,0.2-1.4,0.3-2.1,0.4c-0.5,0.1-1,0.2-1.3,0.2C2.7,13,2.6,13,2.5,13z M11.6,1.1L3.7,9c0,0.1-0.1,0.1-0.1,0.2 c-0.1,0.2-0.3,1.1-0.4,1.9c-0.1,0.3-0.1,0.6-0.1,0.9c0.3,0,0.6-0.1,0.9-0.1c0.7-0.1,1.3-0.2,2-0.4c0,0,0.1-0.1,0.2-0.1L14,3.5 L11.6,1.1z M14.1,3.3C14.1,3.3,14.1,3.3,14.1,3.3L14.1,3.3z M11.4,0.9C11.4,0.9,11.4,0.9,11.4,0.9L11.4,0.9z">
						</path>
					</symbol>
				</defs>
			</svg>
			<li>京东秒杀</li>
			<li>特色优选</li>
			<li>频道广场</li>
			<li>为你推荐</li>
			<li><svg>
					<use xlink:href="#icon_timline"></use>
				</svg>客服</li>
			<li><svg>
					<use xlink:href="#icon_feedback"></use>
				</svg>反馈</li>
			<li v-show="win.scrollY > 670"><span class="elevator-totop-icon"></span>顶部</li>
		</ul>
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
		</div>
	</main>
</template>

<script setup>
import TopBar from 'components/common/TopBar/topBar.vue';
import HomeHeader from './homeHeader.vue';
import { store } from '@/store.js'
import { cateDropdown, menu, promotionalTop, centerSliders, asideSliders } from './home.json'
import { MySliders } from './mySliders'

import { ref, reactive, onMounted } from 'vue'
import $ from 'jquery'

let isPromotionalTop = ref(true)

let win = ref(window)

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
	pause: true,
	navigation: true
})

MySliders({
	el: '.aside-slider',
	pause: true,
	delay: 5000,
	navigation: true
})
</script>

<style lang="scss" scoped>
.promotional-top {
	@include wrapper;
	display: block;
	height: 80px;
	text-align: center;
	position: relative;
}

.promotional-top-close {
	cursor: pointer;
	font-weight: 700;
	font-size: 14px;
	color: #fff;
	background: #2d2d2d;
	width: 20px;
	height: 20px;
	text-align: center;
	line-height: 20px;
	opacity: .3;
	position: absolute;
	top: 5px;
	right: calc(50% - 595px);
	z-index: 9;
}

.promotional-top-close:after {
	content: "\E600";
	font-family: iconfont, sans-serif;
	font-style: normal;
	-webkit-text-stroke-width: 0.2px;
	-moz-osx-font-smoothing: grayscale;
}

.main {
	@include wrapper;
	margin: 10px 0 0;
	position: relative;
}

.elevator {
	position: absolute;
	top: 510px;
	right: calc(50% - 673px);
	z-index: 100;

	li {
		position: relative;
		display: block;
		width: 38px;
		height: 38px;
		padding: 10px;
		background: #fff;
		-webkit-transition: color .2s ease;
		transition: color .2s ease;
		z-index: 1;
		text-align: center;
		line-height: 19px;
		font-size: 14px;
		color: #333;

		&:hover {
			background: #c81623;
			color: #fff;

			&:nth-last-child(n + 2)::after {
				background: inherit;
				background: inherit;
			}

			svg {
				fill: #fff;
			}
		}

		&:nth-last-child(n + 2)::after {
			content: "";
			position: absolute;
			width: 40px;
			height: 1px;
			left: 50%;
			bottom: 0;
			margin-left: -20px;
			background: -webkit-gradient(linear, right top, left top, from(white), color-stop(#eeeeee), color-stop(#eeeeee), to(white));
			background: linear-gradient(270deg, white, #eeeeee, #eeeeee, white);
			z-index: 1;
		}

		svg {
			display: block;
			width: 16px;
			height: 16px;
			fill: #333;
			margin: 0 auto 3px;
			-webkit-transition: fill .2s ease;
			transition: fill .2s ease;
			// z-index: 3;
		}

		.elevator-totop-icon {
			display: block;
			height: 22px;
			line-height: 22px;
			font-family: iconfont, sans-serif;
			font-size: 20px;
		}
	}
}

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
</style>
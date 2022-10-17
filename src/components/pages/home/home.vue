<template>
	<div v-show="isPromotionalTop" class="promotional-top" :style="promotionalTop.style">
		<a :href="promotionalTop.href" target="_blank" rel="noopener noreferrer"><img :src="promotionalTop.src"
				alt="" /></a>
		<i class="promotional-top-close" @click="isPromotionalTop = false"></i>
	</div>
	<TopBar />
	<HomeHeader :scroll-y="scrollY"/>
	<main class="main">
		<ul class="elevator" :class="{fix: scrollY >= 690}">
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
			<li :class="{active: elevatorIndex == 0}" @click="toScroll('.seckill')">京东秒杀</li>
			<li :class="{active: elevatorIndex == 1}" @click="toScroll('.spec')">特色优选</li>
			<li :class="{active: elevatorIndex == 2}" @click="toScroll('.channels')">频道广场</li>
			<li :class="{active: elevatorIndex == 3}" @click="toScroll('.recommend')">为你推荐</li>
			<li><svg>
					<use xlink:href="#icon_timline"></use>
				</svg>客服</li>
			<li><svg>
					<use xlink:href="#icon_feedback"></use>
				</svg>反馈</li>
			<li @click="toScroll('body')" class="back-top"><span class="elevator-totop-icon"></span>顶部</li>
		</ul>
		<Fs/>
		<Seckill/>
		<spec :is-request="isRequest.spec"/>
		<channels/>
		<Recommend :scroll-y="scrollY"/>
	</main>
	<Foot/>
</template>

<script setup>
import TopBar from 'components/common/TopBar/topBar.vue';
import HomeHeader from './homeHeader.vue';
import Fs from './fs.vue'
import Seckill from './seckill.vue';
import spec from './spec.vue'
import channels from './channels.vue'
import Recommend from './recommend.vue';
import Foot from './foot.vue'

import { promotionalTop } from './home.json'

import { reactive, ref } from 'vue'

let isPromotionalTop = ref(true)

const scrollY = ref(0)
const elevatorIndex = ref(-1)
const isRequest = reactive({
	spec: false,
	channels: false,
	recommend: false
})
window.onscroll = ()=>{
	scrollY.value = window.pageYOffset
	if(scrollY.value > 100 && scrollY.value < 690){
		isRequest.spec = true
		elevatorIndex.value = -1
	}else if(scrollY.value < 970){
		elevatorIndex.value = 0
	}else if(scrollY.value < 1970){
		elevatorIndex.value = 1
	}else if(scrollY.value < 2995){
		elevatorIndex.value = 2
	}else{
		elevatorIndex.value = 3
	}
}
function toScroll(target){
	document.querySelector(target).scrollIntoView({
		behavior: "smooth",
		block: "start",
		inline: "nearest"
	})
}
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
	top: 500px;
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
		cursor: pointer;

		&.active {
			color: #e1251b;
		}
		
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
	.back-top {
		display: none;
		color: #e1251b;
	}
		@-webkit-keyframes eleShow {
			0% {
				top: 0
			}
	
			to {
				top: 75px
			}
		}
	
		@keyframes eleShow {
			0% {
				top: 0
			}
	
			to {
				top: 75px
			}
		}
	&.fix {
		position: fixed;
		top: 75px;
		-webkit-animation: eleShow .5s ease both;
    animation: eleShow .5s ease both;
		.back-top {
			display: block;
		}
	}
}
</style>
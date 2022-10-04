<template>
	<div v-show="isPromotionalTop" class="promotional-top" :style="promotionalTop.style">
		<a :href="promotionalTop.href" target="_blank" rel="noopener noreferrer"><img :src="promotionalTop.src"
				alt="" /></a>
		<i class="promotional-top-close" @click="isPromotionalTop = false"></i>
	</div>
	<TopBar />
	<header class="header">
		<div @mouseenter="logoEnter" class="logo">
			<a href="#" class="logo-icon"></a>
			<a href="#" class="logo-scene" :class="{active: logoStatus.isEnter}" :style="logoStatus.bg">
				<p class="logo_scene_text" :class="{active: logoStatus.isText}">轻松做大餐</p>
				<p class="logo_scene_btn" :class="{active: logoStatus.isText}">去看看&gt;</p>
			</a>
		</div>
		<div class="center">
			<form action="get" class="search">
				<input class="input" type="text" :placeholder="placeholderArr[placeholderIndex]" />
				<span class="photo-search-btn"></span>
				<button class="btn"><i class="iconfont"></i></button>
			</form>
			<div id="settleup" class="dropdown" clstag="h|keycount|h|keycount|head|cart_null">
				<div class="cw-icon">
					<i class="iconfont"></i>
					<a target="_blank" href="#">我的购物车</a>
					<i class="ci-count" id="shopping-amount">0</i>
				</div>
				<div class="dropdown-layer">
					<div id="J_cart_pop"><span class="loading"></span></div>
				</div>
			</div>
			<div class="hotwords">
				<a v-for="item of hotWords" :href="item.href" target="_blank">{{item.name}}</a>
			</div>
			<div id="navitems" role="navigation">
				<ul id="navitems-group1">
					<li v-for="item of navList"><a target="_blank" :href="item.href">{{item.name}}</a></li>
				</ul>
			</div>
		</div>
		<div id="treasure"><a id="J_promo_lk" class="promo_lk" href="treasure.href" target="_blank" style="treasure.style"></a>
		</div>
	</header>
</template>

<script setup>
import TopBar from 'components/common/TopBar/topBar.vue';

import { ref, reactive } from 'vue'

const promotionalTop = { href: '//ccc-x.jd.com/dsp/nc?ext=aHR0cHM6Ly9wcm8uamQuY29tL21hbGwvYWN0aXZlL2tXREhjS3VmWXNDOGZEZEhXU0I0eDRLeTg2Zy9pbmRleC5odG1sP2JhYmVsQ2hhbm5lbD10dHQz&log=bn7oTskfqR2Y2D4vuZEfWn9vlyBDRy2msniSxsGunVZJK6TyQQzDrGy0xHqQOyftqo-2IeAbilBFOG-OOSVqSbTNbJWk2Dw4M_zL0uBKaqqykmuBftR9xf6hekwjKYaQ8BPr7IwOyX6QFVuzMzl4q7kUm2nMO1zOt_MQiDMwrLp3SvNROl8RcQczopuA1EfXBybaWbuSX4mEaTKPZLwI2uxnAFt5SzZzP1FElga9PEAVQYY1EZorJVqLE-XqtdVbTErx5Rsy5BYppenZdyiu0YIG_ijnewiFiDQxVu4GRTGyTrPTqZRDQOEpWL6m_MLuXtxteF1CWpZmJ_UucVs4lgpDSSvXAny3rN9ywHR-wxRNwlji80xFhEGuDt_u7pUUQjpjBrpR8J3MPu5bK9YnIlnsxFf7tP2D2UUANv0nXwXu7cTotrwX-_e9QX2ERu_BBxdM-2cy7n05JAuE2EQIWKHu5jZ24uu1Iuu8TWT5tBePMZicCP5WqExS7cPCVfXw_Zw99QXKajjUx7zNWZfhXWDaM2f_Is2CxRml7Qk1y64VpkShlQ8qtWU58zUm-7P21iBEqpme_kk35wEnHoXJdS3k9BUkS4GFo3Bd7P-rtgBNEhdFf03rjpT4PDl5bQhVcAVEgE7CzHj2BquHqA5MB5SocYAPNSqoVvenJxoBP6uMr_FehA9KDMjf3jykDNWf6rrGelS3KjI6EgywevVaVf_yIFOdrHWUyiYeK81Ef7h4aPcbOrrU86tO4lRdgaT3j0HX54RoWvNwlDC0mZlv6HaC_xEZpCDi68BN8WWFZ6UuQFltjBxgE-xcs0K_UIARjThw7y844PRtfOy0Zz0aKZXAGzepypm5ytYcO3_MDQMZXXAuXjQ9Fq3mRVE_rIBriLiJeFJpFmnvJlo8q7wlKKY2ktsCL0VRBy7Zck7844OGc2oweKLjnJIV6LcMgJDLaZ_Icru6ETk5U1r0Yjtt6-QP-qkk-Iu42ZXKeCNDksLiCfsjWbl_Zxz7ATCBTF2X&v=404', style: 'background-color: rgb(7, 37, 110);', src: '//img11.360buyimg.com/pop/jfs/t1/154509/36/26418/91810/632c38c5E043cd40c/8050368fd42c7b97.jpg.avif' }

let isPromotionalTop = ref(true)

let placeholderIndex = ref(0)
let placeholderArr = ['雷神笔记本', '怡宝矿泉水', '黄金手链', '针式打印机']

let hotWords = [{name: "电脑数码日", href: "#"},{name: "出行防疫", href: "#"},{name: "潮玩电子", href: "#"},{name: "iPhone14", href: "#"},{name: "热卖潮品", href: "#"},{name: "京东京造", href: "#"},{name: "手机爆款", href: "#"}]

let navList = [{name: "京东五金城", href: "#"},{name: "京东超市", href: "#"},{name: "秒杀", href: "#"},{name: "京东家电", href: "#"},{name: "京东生鲜", href: "#"},{name: "优惠券", href: "#"},{name: "PLUS会员", href: "#"},{name: "拍卖", href: "#"},{name: "品牌闪购", href: "#"},{name: "进口好物", href: "#"}]

let treasure = {href: "//pro.jd.com/mall/active/8ip7u8QSsCD8XAxsNPWAujLACbs/index.html?babelChannel=ttt4", style: "background-image: url(//img11.360buyimg.com/babel/jfs/t1/208615/31/26072/71483/63326a8dEd27dc0d4/b16acc0caaec4c85.png.avif;); background-size: cover;"}

let logoStatus = reactive({
	bg: '',
	isEnter: false,
	isText: false
})
function logoEnter(){
	console.log(logoStatus.isEnter)
	if(logoStatus.isEnter) return
	logoStatus.isEnter = true
	let timeStamp = new Date().getTime()
	logoStatus.bg = 'background-image: url(//img1.360buyimg.com/da/jfs/t1/14716/32/11447/94000/5c90a83bEaa611013/18490bf08654ba09.gif?v=' + timeStamp + ');'
	setTimeout(()=>{
		logoStatus.isEnter = false
		// logoStatus.logoSceneBg = ''
	},6000)
	setTimeout(()=>{
		logoStatus.isText = true
		setTimeout(()=>{
			logoStatus.isText = false
		},3000)
	},3000)
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

.header{
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	@include wrapper;
	padding: {
		top: 10px;
		bottom: 10px;
	};

	.logo{
		width: 190px;
    height: 120px;
    background-color: #fff;
		position: relative;

		.logo-icon{
			display: block;
			width: 190px;
			height: 120px;
			background: url(//misc.360buyimg.com/mtd/pc/index_2019/1.0.1/assets/sprite/header/sprite.png) no-repeat;
			overflow: hidden;
		}
		.logo-scene{
			width: 100%;
			height: 100%;
			background-color: #fff;
			margin: 0 auto;
			filter: alpha(opacity=0);
			background: #fff no-repeat center/auto 100%;
			position: absolute;
			top: 0;
			opacity: 0;
			z-index: 1;
			text-align: center;
			line-height: 20px;
			&.active{
				opacity: 1;
			filter: alpha(opacity=100);
			}
			.logo_scene_text{
				background: transparent;
				margin: {
					top: 36px;
				}
				color: rgb(155, 120, 83);
				font: {
					size: 16px;
					weight: 700;
				}
			}
			.logo_scene_btn {
				width: 60px;
				background: rgb(255, 208, 125) no-repeat 50%;
				border-radius: 11px;
				margin: 10px auto 0;
				text-align: center;
				text-indent: 4px;
				color: #fff;
				font-size: 12px;
			}
			.logo_scene_btn, .logo_scene_text {
				opacity: 0;
				filter: alpha(opacity=0);
				transition: .3s;
				&.active{
					opacity: 1;
					filter: alpha(opacity=100);
				}
			}
		}
	}
	.center{
		@include flex-wrap;
		width: 800px;
	}
}
</style>
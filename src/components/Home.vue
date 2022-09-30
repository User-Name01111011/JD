<template>
	<div v-show="isPromotionalTop" class="promotional-top" :style="promotionalTop.style">
		<a :href="promotionalTop.href" target="_blank"><img :src="promotionalTop.src" alt="" /></a>
		<i class="promotional-top-close" @click="isPromotionalTop = false"></i>
	</div>
	<div class="top-bar">
		<div class="shortcut-btn">
			<div class="area">
				<i class="iconfont iconfont-location"></i>
				<span class="area-text">{{store.areas[store.area].name}}</span>
			</div>
			<div class="dropdown-layer">
				<ul class="ui-areamini-list">
					<li v-for="item in store.areas" @click="" :class="{ active: store.area == item.id}" :key="item.id"><a>{{item.name}}</a></li>
				</ul>
			</div>
		</div>
		<ul class="shortcut">
			<li>
				<div class="dt">
					<a href="#" class="link-login">你好，请登录</a>
					<a href="#" class="link-regist">免费注册</a>
				</div>
			</li>
			<li>
				<div class="dt">
					<a href="#">我的订单</a>
				</div>
			</li>
			<li>
				<div class="dt">
					<a href="#">我的京东</a>
				</div>
			</li>
			<li>
				<div class="dt">
					<a href="#">京东会员</a>
				</div>
			</li>
			<li>
				<div class="dt">
					<a href="#">企业采购</a>
				</div>
			</li>
			<li>
				<div class="dt">
					<a href="#">商家服务</a>
				</div>
			</li>
			<li>
				<div class="dt">
					<a href="#">网站导航</a>
				</div>
			</li>
			<li>
				<div class="dt">
					<a href="#">手机京东</a>
				</div>
			</li>
			<li>
				<div class="dt">
					<a href="#">网站无障碍</a>
				</div>
			</li>
		</ul>
	</div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { store } from '../store.js'

const promotionalTop = { href: '//ccc-x.jd.com/dsp/nc?ext=aHR0cHM6Ly9wcm8uamQuY29tL21hbGwvYWN0aXZlL2tXREhjS3VmWXNDOGZEZEhXU0I0eDRLeTg2Zy9pbmRleC5odG1sP2JhYmVsQ2hhbm5lbD10dHQz&log=bn7oTskfqR2Y2D4vuZEfWn9vlyBDRy2msniSxsGunVZJK6TyQQzDrGy0xHqQOyftqo-2IeAbilBFOG-OOSVqSbTNbJWk2Dw4M_zL0uBKaqqykmuBftR9xf6hekwjKYaQ8BPr7IwOyX6QFVuzMzl4q7kUm2nMO1zOt_MQiDMwrLp3SvNROl8RcQczopuA1EfXBybaWbuSX4mEaTKPZLwI2uxnAFt5SzZzP1FElga9PEAVQYY1EZorJVqLE-XqtdVbTErx5Rsy5BYppenZdyiu0YIG_ijnewiFiDQxVu4GRTGyTrPTqZRDQOEpWL6m_MLuXtxteF1CWpZmJ_UucVs4lgpDSSvXAny3rN9ywHR-wxRNwlji80xFhEGuDt_u7pUUQjpjBrpR8J3MPu5bK9YnIlnsxFf7tP2D2UUANv0nXwXu7cTotrwX-_e9QX2ERu_BBxdM-2cy7n05JAuE2EQIWKHu5jZ24uu1Iuu8TWT5tBePMZicCP5WqExS7cPCVfXw_Zw99QXKajjUx7zNWZfhXWDaM2f_Is2CxRml7Qk1y64VpkShlQ8qtWU58zUm-7P21iBEqpme_kk35wEnHoXJdS3k9BUkS4GFo3Bd7P-rtgBNEhdFf03rjpT4PDl5bQhVcAVEgE7CzHj2BquHqA5MB5SocYAPNSqoVvenJxoBP6uMr_FehA9KDMjf3jykDNWf6rrGelS3KjI6EgywevVaVf_yIFOdrHWUyiYeK81Ef7h4aPcbOrrU86tO4lRdgaT3j0HX54RoWvNwlDC0mZlv6HaC_xEZpCDi68BN8WWFZ6UuQFltjBxgE-xcs0K_UIARjThw7y844PRtfOy0Zz0aKZXAGzepypm5ytYcO3_MDQMZXXAuXjQ9Fq3mRVE_rIBriLiJeFJpFmnvJlo8q7wlKKY2ktsCL0VRBy7Zck7844OGc2oweKLjnJIV6LcMgJDLaZ_Icru6ETk5U1r0Yjtt6-QP-qkk-Iu42ZXKeCNDksLiCfsjWbl_Zxz7ATCBTF2X&v=404', style: 'background-color: rgb(7, 37, 110);', src: '//img11.360buyimg.com/pop/jfs/t1/154509/36/26418/91810/632c38c5E043cd40c/8050368fd42c7b97.jpg.avif' }

let isPromotionalTop = ref(true)

function areaClick(e){
	store.area = e.id
}

</script>

<style lang="scss" scoped>
$wrapperPadding: 0 calc(50% - 595px);

.promotional-top {
	display: block;
	width: 1190px;
	height: 80px;
	padding: $wrapperPadding;
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

.top-bar {
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 1190px;
	height: 30px;
	padding: $wrapperPadding;
	border-bottom: 1px solid #ddd;
	background-color: #e3e4e5;
	font-size: 12px;
	line-height: 28px;
	color: #999;
}

.area {
	height: 30px;
	padding: 0 7px;
	cursor: pointer;
	position: relative;
	z-index: 10;

	+.dropdown-layer{
		left: -1px;
	}
}

.iconfont {
	font-size: 14px;
	color: #f10215;
	margin-right: 4px;
	font-family: iconfont, sans-serif;
	font-style: normal;
	-webkit-text-stroke-width: 0.2px;
	-moz-osx-font-smoothing: grayscale;
}

.shortcut {
	display: flex;

	li {
		display: flex;
		align-items: center;

		&:nth-last-child(n + 2)::after {
			content: '|';
			margin: 0 5px;
		}
	}

	.dt {
		padding: 0 7px;
	}
}

.link-login {
	margin: 0 7px 0 0;
}

.shortcut-btn {
	box-sizing: border-box;

	border: 1px solid #e3e4e5 {
		bottom: 1px #fff;
	}

	&:hover {
		background-color: #fff;
		border-color: #ccc;

		.dropdown-layer {
			display: block;
		}

		.area{
			background-color: #fff;
		}
	}

	position: relative;
}

.dropdown-layer {
	display: none;
	border: 1px solid #ccc;
	background-color: #fff;
	-webkit-box-shadow: 1px 2px 1px rgb(0 0 0 / 10%);
	box-shadow: 1px 2px 1px rgb(0 0 0 / 10%);
	position: absolute;
	top: 29px;
	z-index: 9;
}

.ui-areamini-list {
	display: flex;
	flex-wrap: wrap;
	width: 300px;
	padding: 10px;

	li {

		width: 60px;
		padding: 2px 0;
		cursor: pointer;

		a {
				display: inline-block;
				padding: 0 8px;
				line-height: 24px;
		
				&:hover {
					background-color: #f4f4f4;
				}
			}
		&.active {
			a{
				background-color: #f10215;
				color: #fff;
			}
		}
	}
}
</style>
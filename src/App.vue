<script setup>
	import { store } from './store.js'
	import { jsonp } from 'vue-jsonp'

	import Home from './components/Home.vue'
import topBarTree from 'components/common/TopBar/topBar.json'



	jsonp('//pv.sohu.com/cityjson?ie=utf-8', {}, 1000).then(res => {
		for (const item of topBarTree.areas) {
			if(item.name.indexOf(returnCitySN.cname.slice(0, 2)) > -1){
				store.area = item.id
				continue
			}
		}
	}).catch(err => {
		for (const item of topBarTree.areas) {
			if(item.name.indexOf(returnCitySN.cname.slice(0, 2)) > -1){
				store.area = item.id
				continue
			}
		}
	})
</script>

<template>
	<home />
</template>

<style>
	
</style>

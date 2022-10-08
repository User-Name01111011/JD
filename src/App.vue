<script setup>
import { store } from './store.js'
import { jsonp } from 'vue-jsonp'

import home from './components/pages/home/home.vue'
import { areas } from 'components/common/TopBar/topBar.json'

jsonp('//pv.sohu.com/cityjson?ie=utf-8', {}, 1000).then(res => {
	for (const item of areas) {
		if (item.name.indexOf(returnCitySN.cname.slice(0, 2)) > -1) {
			store.area = item.id
			continue
		}
	}
}).catch(err => {
	for (const item of areas) {
		if (item.name.indexOf(returnCitySN?.cname.slice(0, 2)) > -1) {
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

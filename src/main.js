import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import '@/public/scss/_mixin.scss'
import '@/public/scss/common.scss'
import '@/config/vant.js'
import 'swiper/dist/css/swiper.css'

import Com from '@/public/base-ui.js'
Vue.use(Com);

import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper, /* { default global options } */)

import lazyLoad from 'vue-lazyload'
Vue.use(lazyLoad,{
	preLoad:1.3,
	attempt:1,
	loading:'@/public/img/loading.gif'
})


Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path:'/',
			redirect:'/home'
		},
		{
			path:'/login',
			name:'login',
			meta:{
				title:'校园超市'
			},
			component: ()=>import('@/views/Login/Login.vue')
		},
		{
			path:'/home',
			name:'home',
			meta:{
				title:'首页'
			},
			component: ()=>import('@/views/Home/Home.vue')
		},
		{
			path:'/catalogue',
			name:'catalogue',
			meta:{
				title:'分类'
			},
			component: ()=>import('@/views/catalogue/catalogue.vue')
		},
		{
			path:'/shopping',
			name:'shopping',
			meta:{
				title:'购物车'
			},
			component: ()=>import('@/views/shopping/shopping.vue')
		},
		{
			path:'/my',
			name:'my',
			meta:{
				title:'我的'
			},
			component: ()=>import('@/views/My/My.vue')
		},
		{
			path:'/map',
			name:'map',
			meta:{
				title:'选择地址'
			},
			component: ()=>import('@/components/Map.vue')
		}
	]
})

import Vue from 'vue'
import Router from 'vue-router'
let Main = () => import("../views/home/index.vue")
let Login = () => import("../views/login/index.vue")
let Home = () => import("../views/home/components/home.vue")
let Catalogue = () => import("../views/home/components/catalogue.vue")
let Shop = () => import("../views/home/components/shop.vue")
let My = () => import("../views/home/components/my.vue")
Vue.use(Router)

let router = new Router({
	routes: [
		{
			path: '/',
			redirect: '/main/home'
		},
		{
			path: '/main',
			name: 'main',
			component: Main,
			children: [
				{
					path: 'home',
					name: 'home',
					component: Home
				},
				{
					path: 'catalogue',
					name: 'catalogue',
					component: Catalogue
				},
				{
					path: 'shop',
					name: 'shop',
					component: Shop
				},
				{
					path: 'my',
					name: 'My',
					component: My
				}
			]
		},
		{
			path: '/login',
			name: 'login',
			component: Login
		}
	]
})
router.beforeEach((to, from, next) => {
	document.title = to.meta.title
	next()
})
export default router
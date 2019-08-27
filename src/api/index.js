import {axios} from '@/utils/http.js'

export default {
  
	checkCode: (data)=>axios.post('/api/user/checkCode',data),

	login: (data)=>axios.post('/api/user/login',data),
    

	banner: ()=>axios.get('/api/home/banner'),

	getShop: (data)=>axios.get('/api/home/shop',{
		params:data
	}),

	shopType: ()=>axios.get('/api/shop/shopType'),

	shopList: (data)=>axios.get('/api/shop/selectType',{
		params:data
	}),
	getShopCar: (data)=>axios.get('/api/car/addCar',{
		params:data
	}),
	addCar: (data)=>axios.post('/api/car/addCar',data),

	getUserInfo:(data)=>axios.get('/user/getUserInfo',data)

}
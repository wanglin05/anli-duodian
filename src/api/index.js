import axios from 'axios'

export default {
	login: (data) => axios.post('/user/login', data),
	banner: (data) => axios.get('/home/banner', data),
	getList: (data)=>axios.get('/api/home/shop',{
		params:data
	})
}

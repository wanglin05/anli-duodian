import axios from 'axios'

export default {
	login: (data) => axios.post('/api/user/login', data),
	banner: () => axios.get('/api/home/banner'),
	getList: (data)=>axios.get('/api/home/shop',{
		params:data
	})
}

import axios from 'axios'
// import { Message } from 'element-ui';

const httpAxios = axios.create({
	timeout: 2000
})

httpAxios.interceptors.request.use((config) => {
	return config={
		...config,
		headers:{
			...config.headers
		}
	}
}, (error) => {
	return Promise.reject(error)
})

httpAxios.interceptors.response.use((response)=>{
	let {code,message}=response.data
	if(code){
		return response.data
	}
	// Message({
	//   message:msg,
	//   type:'error'
	// })
	return Promise.reject(response.data)
},(error)=>{
	console.log(error)
	// Message({
	//   message:error.response.data.msg || error.response.statusText,
	//   type:"error"
	// })
	return Promise.reject(error)
})

export {
	httpAxios as axios
}

export default {
	install(Vue){
		Object.defineProperties(Vue.prototype,"$http",{
			value:httpAxios
		})
	}
}
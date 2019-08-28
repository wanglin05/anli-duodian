import axios from 'axios'

let httpAxios = axios.create({
	baseURL: '',
	timeout: 2000
})

httpAxios.interceptors.request.use(
	config => {
		return {
			...config,
			headers: {
				...config.headers,
				authorization: window.sessionStorage.getItem('authorization')
			}
		}
	},
	error => {
		return Promise.reject(error)
	}
)

httpAxios.interceptors.response.use(
	response => {
		let { code } = response.data
		if (code) {
			return response.data
		}
		return Promise.reject(response.data)
	},
	error => {
		return Promise.reject(error)
	}
)
export { httpAxios as axios }
export default {
	install(Vue) {
		Object.defineProperty(Vue.protitype, '$http', {
			value: httpAxios
		})
	}
}

export default {
	namespaced:true,
	state: {
		islogin:false
	},
	getters:{

	},
	mutations: {
		isloginFn(state){
			let islogin = sessionStorage.getItem('userinfo');
			if(islogin){
				state.islogin = true;
			}
		}
	},
	actions: {
  
	}
}
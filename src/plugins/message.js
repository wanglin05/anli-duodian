import Dialog from './dialog'

export default {
    install(Vue){
        Vue.prototype.$message = function(options) {
            console.log(options)
            return new Dialog(Vue,options);
        }
    }
}
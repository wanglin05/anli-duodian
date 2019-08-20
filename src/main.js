// The Vue build version to load with the `import` command    v-lazy
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import "./fonts/iconfont.css"
import Vue from 'vue'
import App from './App'
import router from "./router"
// import store from "./store/store"
// import plugins from "./plugins"
import AMap from 'vue-amap'
Vue.use(AMap)
AMap.initAMapApiLoader({
  key: 'XXXXXXXXXXXXXXXXXX',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor']
})
// Vue.use(plugins)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  // store,
  router,
  render: h => h(App),
}).$mount('#app')

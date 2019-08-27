import Vue from 'vue'
import Vuex from 'vuex'
import info from './info/index'
import car from './car/'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    info,
    car
  }
})


export default store;
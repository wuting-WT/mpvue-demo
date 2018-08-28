import Vue from 'vue'
import Vuex from 'vuex'
import model from './model'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {...model}
})

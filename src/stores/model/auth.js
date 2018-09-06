import { FETCH_USER, CHECK_LOGIN } from '../mutation-types'
import {post, basehost} from '@/utils'
const state = {
  loginStatus: {},
  user: {}
}
const actions = {
  [CHECK_LOGIN] ({state, commit}, params) {
    post(`${basehost}/api/merchant-login`, {...params}).then(data => commit(CHECK_LOGIN, data))
  }
}
const mutations = {
  [FETCH_USER] (state, payload) {
    state.user = {...payload}
  },
  [CHECK_LOGIN] (state, payload) {
    state.loginStatus = {...payload}
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

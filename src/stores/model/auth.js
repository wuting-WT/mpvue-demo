import { FETCH_USER } from '../mutation-types'
const state = {
  user: {}
}

const mutations = {
  [FETCH_USER] (state, payload) {
    console.log(payload)
    state.user = {...payload}
  }
}

export default {
  namespaced: true,
  state,
  mutations
}

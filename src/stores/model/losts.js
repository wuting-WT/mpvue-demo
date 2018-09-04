import { FETCH_LOST } from '../mutation-types'
import { get, basehost } from '@/utils'
const state = {
  losts: []
}

const actions = {
  [FETCH_LOST] ({state, commit}) {
    get(`${basehost}/api/losts`).then((res) => {
      commit(FETCH_LOST, res.data)
    })
  }
}

const mutations = {
  [FETCH_LOST] (state, payload) {
    state.losts = [...payload]
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

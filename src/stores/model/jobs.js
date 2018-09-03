import { FETCH_JOBS, APPLY_JOBS } from '../mutation-types'
import { get, basehost } from '@/utils'
const state = {
  jobs: []
}

const actions = {
  [FETCH_JOBS] ({state, commit}) {
    get(`${basehost}/api/jobs`).then((res) => {
      commit(FETCH_JOBS, res.data)
    })
  },
  [APPLY_JOBS] ({state, commit}, params) {
    state.jobs.forEach(item => {
      if (item.id === params) {
        item.isApply = !item.isApply
      }
    })
  }
}

const mutations = {
  [FETCH_JOBS] (state, payload) {
    state.jobs = [...payload]
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

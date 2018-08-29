import { FETCH_JOBS } from '../mutation-types'
import { get } from '@/utils'
const basehost = 'http://localhost:3001'
const state = {
  jobs: []
}

const actions = {
  [FETCH_JOBS] ({state, commit}) {
    get(`${basehost}/api/jobs`).then((res) => {
      commit(FETCH_JOBS, res.data)
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

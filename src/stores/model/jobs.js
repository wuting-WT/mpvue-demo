import { FETCH_JOBS } from '../mutation-types'
import { get } from '@/utils'
const state = {
  jobs: []
}

const actions = {
  [FETCH_JOBS] ({state, commit}) {
    get(`/job/findjob`).then((res) => {
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
  state,
  mutations,
  actions
}

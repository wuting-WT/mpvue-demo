import { FETCH_JOBS, APPLY_JOBS, FILTER_TIME, FILTER_PERSON, FILTER_PRICE } from '../mutation-types'
import { get, basehost } from '@/utils'
const state = {
  jobs: []
}

const actions = {
  [FETCH_JOBS] ({state, commit}, params) {
    get({
      url: `${basehost}/api/jobs`,
      loading: true
    }).then((res) => {
      commit(FETCH_JOBS, {data: res.data, reset: params})
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
    payload.reset ? !state.jobs.length ? state.jobs = [...state.jobs, ...payload.data] : state.jobs = [...state.jobs] : state.jobs = [...state.jobs, ...payload.data]
  },
  [FILTER_TIME] (state, payload) {
    if (payload === 'rise') {
      state.jobs.sort((pre, nex) => pre.created_time - nex.created_time)
    } else {
      state.jobs.reverse()
    }
  },
  [FILTER_PERSON] (state, payload) {
    if (payload === 'rise') {
      state.jobs.sort((pre, nex) => pre.apply_num - nex.apply_num)
    } else {
      state.jobs.reverse()
    }
  },
  [FILTER_PRICE] (state, payload) {
    if (payload === 'rise') {
      state.jobs.sort((pre, nex) => pre.price - nex.price)
    } else {
      state.jobs.reverse()
    }
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

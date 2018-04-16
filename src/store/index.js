import Vue from 'vue'
import Vuex from 'vuex'
import weibo from '../api/weibo'

Vue.use(Vuex)

const state = {
  nameQuery: '',
  searchResult: [], // searchByUser result user list
  target: null,
  circle: [] // target user's circle
}

const getters = {

}

const actions = {
  getSearchResult ({ commit, state }) {
    return new Promise((resolve, reject) => {
      if (state.nameQuery) {
        weibo.searchUserByName(
          state.nameQuery,
          data => {
            commit('setsearchResult', data)
            return resolve(data)
          },
          err => { return reject(err) }
        )
      }
    })
  },
  getCircle ({ commit, state }, withAddr) {
    return new Promise((resolve, reject) => {
      if (state.target) {
        weibo.getCircleByUid(
          state.target.uid,
          withAddr,
          data => {
            commit('setTarget', data.user)
            commit('setCircle', data.circle)
            return resolve(data)
          },
          err => { return reject(err) }
        )
      }
    })
  }
}

const mutations = {
  setNameQuery (state, query) {
    state.nameQuery = query
  },
  setsearchResult (state, result) {
    state.searchResult = result
  },
  setTarget (state, user) {
    state.target = user
  },
  setCircle (state, result) {
    state.circle = result
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})

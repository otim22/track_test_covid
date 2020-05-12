import Vue from "vue"
import Vuex from "vuex"
import apiClient from '@/configs/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    summary: {}
  },
  getters: {
    countries (state) {
      return state.summary.Countries || []
    },
    summary (state) {
      return state.summary.Global || {}
    }
  },
  mutations: {
    setSummary(state, payload) {
      state.summary = payload
    },
    setCountries(state, payload) {
      state.countries = payload
    }
  },
  actions: {
    async getSummary(context) {
      try {
        const response = await apiClient.get('/summary')
        context.commit('setSummary', response.data)
      } catch (error) {
        throw error(error)
      }
    },
    async getCountries(context) {
      try {
        const response = await apiClient.get('/countries')
        context.commit('setCountries', response.data)
      } catch (error) {
        throw error(error)
      }
    }
  },
})

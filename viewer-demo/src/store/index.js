import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  // 更改state的定义
  // state: sessionStorage.getItem('state') ? JSON.parse(sessionStorage.getItem('state')) : {
  //   access_token: ''
  // },
  // mutations: {
  //   getAccessToken (state, access_token) {
  //     state.access_token = access_token
  //     console.log('++++++', state.access_token)
  //   }
  // },
  // actions: {},
  // modules: {}
})
export default store

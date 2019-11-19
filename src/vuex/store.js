/*
 * @Author: Liang Liang
 * @Date: 2018-12-06 17:13:48
 * @LastEditors: Liang Liang
 * @LastEditTime: 2019-07-07 08:54:19
 * @Description:
 */
/*
 * @LastEditors: aFei
 * @LastEditTime: 2019-07-10 17:32:06
 */
import Vue from 'vue'
import Vuex from 'vuex'
import state from './states'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'
import modules from './modules'

Vue.use(Vuex)
const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  modules
})
export default store

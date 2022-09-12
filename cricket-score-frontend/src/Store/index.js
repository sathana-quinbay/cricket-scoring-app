import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)
import MyTeams from './myteams.store'
export default new Vuex.Store({
    modules:{
        MyTeams
    }
})
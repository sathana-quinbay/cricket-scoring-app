import Vue from "vue"
import Vuex from "vuex"
import PlayerStore from "@/Store/PlayerStore"
Vue.use(Vuex)
export default new Vuex.Store({
    modules:{
        PlayerStore
    }
})
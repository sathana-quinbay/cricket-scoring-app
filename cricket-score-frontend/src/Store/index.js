import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)
import match from "@/Store/match.store"
export default new Vuex.Store({
    modules:{
        match
    }
})
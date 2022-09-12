import Vue from "vue"
import Vuex from "vuex"
import PlayerStore from "@/Store/PlayerStore"
Vue.use(Vuex)
import match from "@/Store/match.store"
export default new Vuex.Store({
    modules:{

        PlayerStore,
        match

    }
})
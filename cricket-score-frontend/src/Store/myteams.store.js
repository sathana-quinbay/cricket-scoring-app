import { getTeams } from "@/Service/team.service";
export default ({
    state:
    {
        teams: []
    },
    getters:
    {
        getTeams(state) {
            return state.teams;
        }
    },
    mutations:
    {
        setTeams(state, value) {
            state.teams = value;
        }
    },
    actions:
    {
        GET_TEAMS() {
            getTeams({
                success: (response) => {
                    console.log(response)
                    this.commit('setTeams', response);
                },
                error: () => {
                    this.commit("setTeams", []);
                }
            })
        }
    }

})
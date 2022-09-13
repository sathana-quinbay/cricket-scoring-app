export default ({
    state:
    {
        teams: [{
            name: "bulls",
            img: "https://cdn.vectorstock.com/i/1000x1000/73/59/angry-bull-logo-vector-41117359.webp",
        }, {
            name: "dragons",
            img: "https://cdn.vectorstock.com/i/1000x1000/73/59/angry-bull-logo-vector-41117359.webp",
        }, {
            name: "fighters",
            img: "https://cdn.vectorstock.com/i/1000x1000/73/59/angry-bull-logo-vector-41117359.webp",
        }]
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
            // getTeams({
            //     success: (response) => {
            //         this.commit('setTeams', response);
            //     },
            //     error: () => {
            //         this.commit("setTeams", []);
            //     }
            // })
        }
    }

})
import {getAllMatches} from "../Service/match.service"
export default{
    state:{
        matchList:[

        ]
    },
    getters:{
        getMatchList(state)
        {
            return state.matchList;
        }
    },
    mutations:{
        setMatch(state,value)
        {
            state.matchList=value
        }
    },
    actions:{
       
        GET_MATCH_LIST()
        {
            console.log("get")
            getAllMatches({
                success:(response)=>{
                console.log(response)
                this.commit("setMatch",response)
                },
                error:(e)=>{
                   console.log(e);
                }
            }
            )
        }

    }
}
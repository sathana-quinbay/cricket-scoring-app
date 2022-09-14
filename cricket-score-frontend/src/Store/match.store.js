import {getAllMatches} from "../Service/match.service"
export default{
    state:{
        matchList:[
            {
                venue:"Chennai",
                overs:"10",
                date:"20/03/2022",
                time:"10:03 AM",
                status:"live",
            },
            {
                venue:"Tirupur",
                overs:"10",
                date:"20/03/2022",
                time:"10:03 AM",
                status:"scheduled",
            },
            {
                venue:"Mumbai",
                overs:"10",
                date:"20/03/2022",
                time:"10:03 AM",
                status:"live",
            }
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
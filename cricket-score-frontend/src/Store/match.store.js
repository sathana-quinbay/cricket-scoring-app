import {getAllMatches} from "../Service/match.service"
export default{
    state:{
        matchList:[{
            // chooseTo : null,
            
            // matchDate : "2022-09-23"
           
            
            // matchId
            // : 
            // "37"
            // matchLocation
            // : 
            // "hjk"
            // matchName
            // : 
            // "vhbjnkm vs fghjksd"
            // matchStatus
            // : 
            // null
            // matchTime
            // : 
            // "06:44"
            // overs
            // : 
            // 10
            // team1
            // : 
            // null
            // team1Id
            // : 
            // 70
            // team2
            // : 
            // null
            // team2Id
            // : 
            // 72
            // tossWonBy
            // : 
            // 0
            // userid
            // : 
            // 57
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
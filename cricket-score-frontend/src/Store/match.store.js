import {getAllMatches} from "../Service/match.service"
export default{
    state:{
        matchList:[],
        teamMatch:[{
            matchId: 57,
            userid: 57, 
            team1Id: 70, 
            team2Id: 72, 
            tossWonBy: 70, 
            matchName: "CSK vs RCB", 
            chooseTo: "Bat", 
            matchLocation: "Bangalore", 
            matchDate: "2022-09-23", 
            matchTime: "06:44", 
            matchStatus: null,
            overs: 10, 
        },
        {
            matchId: 57,
            userid: 57, 
            team1Id: 70, 
            team2Id: 72, 
            tossWonBy: 70, 
            matchName: "vhbjnkm vs fghjksd", 
            chooseTo: "Bat", 
            matchLocation: "Bangalore", 
            matchDate: "2022-09-23", 
            matchTime: "06:44", 
            matchStatus: null,
            overs: 10, 
        }],
        
            // team1: { 
            //     teamid: 70, 
            //     teamname: "vhbjnkm", 
            //     teamlocation: "ghjkl", 
            //     playerList: [ 
            //         { playerid: 157, 
            //         playername: "Ishan Kishan" }, 
            //         { playerid: 158, 
            //           playername: "Rohit Sharma" }, 
            //           { playerid: 159, 
            //             playername: "Surya Kumar Yadav" }, 
            //             { playerid: 160, 
            //                 playername: "Quinton De Kock" }, 
            //                 { "playerid": 161, "playername": "Hardik Pandya" }, { "playerid": 162, "playername": "Krunal Pandya" }, { "playerid": 163, "playername": "Keiron Pollard" }, { "playerid": 164, "playername": "Jasprit Bumrah" }, { "playerid": 165, "playername": "Lasith Malinga" }, { "playerid": 166, "playername": "Trent Bolt" }, { "playerid": 167, "playername": "Jofra Archer" } ], "teamstatus": "removed" }, "team2": { "teamid": 72, "teamname": "fghjksd", "teamlocation": "cghvjbknml", "playerList": [ { "playerid": 146, "playername": "Ruturaj Gaikwad" }, { "playerid": 147, "playername": "Faf Du Plesis" }, { "playerid": 148, "playername": "Suresh Raina" }, { "playerid": 149, "playername": "Ambati rayudu" }, { "playerid": 150, "playername": "Robin Uthappa" }, { "playerid": 151, "playername": "Ravindra Jadeja" }, { "playerid": 152, "playername": "M S Dhoni" }, { "playerid": 153, "playername": "Dwane Bravo" }, { "playerid": 154, "playername": "Deepak Chahar" }, { "playerid": 155, "playername": "Shardhul Thakur" }, { "playerid": 156, "playername": "Moin Ali" } ], "teamstatus": "removed"
            

        
    },
    getters:{
        getMatchList(state)
        {
            return state.matchList;
        },
        getTeamMatches(state){
            return state.teamMatch
        }
    },
    mutations:{
        setMatch(state,value){
            state.matchList=value
        },
        setTeamMatches(state,value){
            state.teamMatch = value
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
        },
      
    }

    }
// }
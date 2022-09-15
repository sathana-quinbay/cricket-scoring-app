import axios from "axios"
export const createPlayer = ({success,error,payload})=>{
    
    const userId=localStorage.getItem("userid")
    const teamId=payload.teamId
    const api=`http://10.30.1.86:8998/user/addPlayer/${userId}/${teamId}`
    axios.post(api,payload)
   
    .then(response => {
        success && success(response.data)
    })
    .catch((e) => {
        error && error(e)
    })
}
export const getPlayers = ({success,error,payload})=>{
    
    const api=`http://10.30.1.86:8998/user/createMatch`
    axios.post(api,payload)
    .then(response => {
        success && success(response.data)
    })
    .catch((e) => {
        error && error(e)
    })
}
export const getPlayersByTeam = ({success,error,payload})=>{
    var teamId=payload.teamId
    var userId=localStorage.getItem("userid")
    const api=`http://10.30.1.86:8998/user/getTeamById/${userId}/${teamId}`
    axios.get(api)
    .then(response => {
        success && success(response.data)
    })
    .catch((e) => {
        error && error(e)
    })
}
export const deletePlayerByTeam = ({success,error,payload})=>{
    var teamId=payload.teamId
    var userId=localStorage.getItem("userid")
    var playerId=payload.playerId
    const api=`http://10.30.1.86:8998/user/deletePlayer/${userId}/${teamId}/${playerId}`
    axios.delete(api)
    .then(response => {
        success && success(response.data)
    })
    .catch((e) => {
        error && error(e)
    })
}
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
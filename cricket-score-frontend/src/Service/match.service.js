import axios from "axios"
export const createMatch = ({success,error,payload})=>{
   
    const api=`http://10.30.1.86:8998/user/createMatch`
    axios.post(api,payload)
    .then(response => {
        success && success(response.data)
    })
    .catch((e) => {
        error && error(e)
    })
}
export const editMatch = ({success,error,payload})=>{
   
    const api=`http://10.30.1.86:8998/user/editMatch`
    axios.put(api,payload)
    .then(response => {
        success && success(response.data)
    })
    .catch((e) => {
        error && error(e)
    })
}
export const getAllMatches = ({success,error})=>{

    const userId = localStorage.getItem("userid")
    const api=`http://10.30.1.86:8998/user/getMatchByUserid/${userId}`
    axios.get(api)
    .then(response => {
        success && success(response.data)
    })
    .catch((e) => {
        error && error(e)
    })
}
export const getParticularMatch = ({success,error,payload})=>{

    const api=`http://10.30.1.86:8998/user/getMatchById/${payload}`
    axios.get(api)
    .then(response => {
        success && success(response.data)
    })
    .catch((e) => {
        error && error(e)
    })
}
export const tossWonByTeam = ({success,error,payload})=>{

    const api=`http://10.30.1.86:8998/user/setToss`
    axios.put(api,payload)
    .then(response => {
        success && success(response)
    })
    .catch((e) => {
        error && error(e)
    })
}

export const deleteMatch = ({success,error,payload})=>{
   
    // const userid = localStorage.getItem("userId");
    const api=`http://10.30.1.86:8998/user/deleteMatch/${payload}`
    axios.delete(api)
    .then(response => {
        success && success(response.data)
    })
    .catch((e) => {
        error && error(e)
    })
}

export const getTeamMatches = ({success,error,payload})=>{
    
    console.log(payload);
    const userid = localStorage.getItem("userid");
    const api=`http://10.30.1.86:8998/user/getMatchByTeamId/${userid}/${payload}`
    axios.get(api)
    .then(response => {
        success && success(response.data)
    })
    .catch((e) => {
        error && error(e)
    })
}
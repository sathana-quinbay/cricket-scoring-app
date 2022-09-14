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
   
    const api=`http://10.30.1.86:8998/user/createMatch`
    axios.post(api,payload)
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

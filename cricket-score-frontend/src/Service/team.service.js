import axios from "axios"

export const teamRegister = ({success,error,payload})=>{
    const userId = localStorage.getItem("userid")
    const api=`http://10.30.1.86:8998/user/addTeam/${userId}`

    axios.post(api,payload)
    .then(response => {
        success && success(response)
    })
    .catch((e) => {
        error && error(e)
    })

}
export const getTeams = ({success,error})=>{
    const userId = localStorage.getItem("userid")
    const api=`http://10.30.1.86:8998/user/getTeams/${userId}`
    axios.get(api)
    .then(response => {
        success && success(response.data)
    })
    .catch((e) => {
        error && error(e)
    })
}

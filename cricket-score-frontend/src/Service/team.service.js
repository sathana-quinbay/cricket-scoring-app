import axios from "axios"
export const teamRegister = ({success,error,payload})=>{
    const api="http://10.30.1.86:8998/user/addTeam/46"
    axios.post(api,payload)
    .then(response => {
        success && success(response)
    })
    .catch((e) => {
        error && error(e)
    })
}
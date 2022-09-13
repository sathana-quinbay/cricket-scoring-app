import axios from "axios"

export const UserLogin = ({success,error,payload})=>{
    axios.post("",payload)
    .then(response => {
        success && success(response)
    })
    .catch((e) => {
        error && error(e)
    })
}
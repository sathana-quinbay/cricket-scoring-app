import axios from "axios"
export const UserLogin = ({success,error,payload})=>{
    const api = "http://10.30.1.86:8998/user/logIn"
    console.log(payload);
    axios
    .post(api,payload)
    .then(response => {
        success && success(response)
    })
    .catch((e) => {
        error && error(e)
    })
}

export const UserRegister = ({success,error,payload})=>{
    const api = "http://10.30.1.86:8998/user/add"
    console.log(payload);
    axios
    .post(api,payload)
    .then(response => {
        success && success(response)
    })
    .catch((e) => {
        error && error(e)
    })
}


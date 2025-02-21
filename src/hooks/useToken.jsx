import { useState } from "react";

export default function useToken(){
    const getToken = ()=>{
        const tokenString = localStorage.getItem("token")
        const userToken = JSON.stringify(tokenString)
        return userToken
    }
    const [token, setToken ] = useState(getToken)

    const saveToken = userToken =>{
        localStorage.setItem("token",userToken)
        setToken(token)
    }

    return {
        setToken:saveToken,
        token
    }
}
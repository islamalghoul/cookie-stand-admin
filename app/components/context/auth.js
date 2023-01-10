"use client"
import { createContext, useState } from "react";
export const AuthContext=createContext();
import axios from "axios";


export  function AuthWrapper({children}){
    const [global,setGlobal]=useState({
        tokens:false,
        login,
    })
    async function login(userinfo){
        let res= await axios.post("https://djangolab29.herokuapp.com/api/token/",userinfo)
        setGlobal({
            tokens:res.data,
            login   
        })
        console.log(res.data)

    }
    
    return (
        <AuthContext.Provider value={global}>
            {children}

        </AuthContext.Provider>
    )
}


"use client"
import { createContext, useEffect, useState } from "react";
export const ThemeContext=createContext();

export default function ThemeWrapper({children}){   
    const [isDarkeTheme,setIsDarkeTheme]=useState(true)

    function toggalHandler(){
        setIsDarkeTheme(!isDarkeTheme)
        document.querySelector("body").classList.toggle("dark")
    }
    function intialTheme(){
        isDarkeTheme&& document.querySelector("body").classList.add("dark")
    }
    const globalState={
        isDarkeTheme:true,
        toggalHandler
    }
    useEffect(()=>intialTheme())

    return (

        <ThemeContext.Provider value={globalState}>
            {children}
        </ThemeContext.Provider>
        
    )
}
"use client"
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
import React , {useContext, useState} from 'react';
import LoginForm from './components/LoginForm'

import { AuthContext } from './components/context/auth'



export default function Home() {
  const[flage,setFlage]=useState(false)
  const {tokens} = useContext(AuthContext);
  let handelClick=(flage)=>{
    setFlage(flage)
    


  }


  return (<>
    
    <div className='bg-indigo-100m dark:bg-black'>

      {tokens ?<><Header handelClick={handelClick}/>
    
    <Main flage={flage}/>
    <Footer flage={flage}/></>:<LoginForm/>}
   
    
    </div>
  
    </>
   
  )
}
//

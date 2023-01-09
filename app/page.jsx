"use client"
import { Inter } from '@next/font/google'
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
import  {useContext, useState} from 'react';
import LoginForm from './components/LoginForm'
import ThemeWrapper from './components/context/theme'
import {AuthWrapper} from './components/context/auth'
import { AuthContext } from './components/context/auth'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const {tokens} = useContext(AuthContext)
  const[flage,setFlage]=useState(false)
  let handelClick=(flage)=>{
    setFlage(flage)
    


  }


  return (<>
    
    <div className='bg-indigo-100m dark:bg-black'>
    < ThemeWrapper>

    <AuthWrapper>
      {tokens ?<><Header handelClick={handelClick}/>
    
    <Main flage={flage}/>
    <Footer flage={flage}/></>:<LoginForm/>}
   
    </AuthWrapper>
    </ThemeWrapper>
    </div>
  
    </>
   
  )
}
//

"use client"
import { Inter } from '@next/font/google'
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
import  {useState} from 'react';
import ThemeWrapper from './components/context/theme'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const[flage,setFlage]=useState(false)
  let handelClick=(flage)=>{
    setFlage(flage)
    


  }


  return (
    < ThemeWrapper>
    <div className='bg-indigo-100m dark:bg-black'>
    <Header handelClick={handelClick}/>
    <Main flage={flage}/>
    <Footer flage={flage}/>

    </div>
    </ThemeWrapper>
  )
}
//

import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from './context/theme'
export default function Footer(props) {
  const {isDarkeTheme,toggalHandler}=useContext(ThemeContext)
  console.log(isDarkeTheme)
  return (
    <div className='bg-emerald-500 flex justify-between dark:bg-black fixed left-0 bottom-0 w-full'>
 
    {props.flage&&<p className='dark:text-white' >8 Location World Wide </p>}
    {!props.flage&& <p className='dark:text-white'> 0 Location World Wide</p>}
    <button class="m-4 bg-green-100 p-1 pl-2 pr-2 text-xs rounded " onClick={toggalHandler}>
  change the mode
</button>
    </div>  )  
}

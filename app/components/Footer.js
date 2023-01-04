import React from 'react'
export default function Footer(props) {
  return (
    <div className='flex bg-emerald-500 pl-1 fixed left-0 bottom-0 w-full'>
 
    {props.flage&&<p >8 Location World Wide </p>}
    {!props.flage&& <p > 0 Location World Wide</p>}
    </div>  )  
}

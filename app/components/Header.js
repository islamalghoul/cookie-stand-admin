import React from 'react'

export default function Header(props) {
  return (<div className='bg-emerald-500 flex justify-between'>
   <h1 className=' pl-1 text-3xl font-bold'>Cookie Stand Admin</h1>
   <button className='m-4 bg-green-100 p-1 pl-2 pr-2 text-xs rounded'onClick={()=>{props.handelClick(true)}}>Overview</button>
   </div>
  )
}

import React from 'react'
import data from './Data.js' 
import "./ReportTable.css"
import  {useState} from 'react';
export default function ReportTable() {
    
    let time=[6,7,8,9,10,11]
    
    let arr=time.map(item=>{
    return(
        <th className='text-center'>{item}am</th>
    )
   })
   time=[12,1,2,3,4,5,6,7]
   let arr2=time.map(item=>{

    return(
       
        <th  className='text-center'>{item}pm</th>
    )
   })
   let arr3=["6am","7am","8am","9am","10am","11am","12pm","1pm","2pm","3pm","4pm","5pm","6pm","7pm"]
   
   
   let arrsum=arr3.map(i=>{
    let sum=0
    for(let j=0 ;j<data.length;j++){
        sum+=data[j]["time_sale"][i]
    }
    return sum
   })
   let arrsum2=data.map((item,i)=>{
    let sum=0
    for(let j=0 ;j<arr3.length;j++){
        sum+=data[i]["time_sale"][arr3[j]]
    }
    return sum
   })

   let sum1=0
   for (let i=0;i<arrsum2.length;i++){
    sum1+=arrsum2[i]

   }
   let sum2=0
   for(let i=0;i<arrsum.length;i++){
    sum2+=arrsum[i]
   }
   let sum=sum1+sum2

  return (
    <div>
    <table >
    <tbody className='mt-6 bg-emerald-300  '>
    <tr className='line'  >
        <th className='text-center'>Location</th>

        {arr}
        {arr2}
        <th>Totals</th>
    </tr>
    
    {data.map((item,i)=>{
        return(
            <tr>
            <th className='text-center'>{item.location}</th>
            
            {arr3.map(l=>{
                return(
                    <td>{item["time_sale"][l]}</td>
                    
                    
                    
                )
            })}
            <th>{arrsum2[i]}</th>
            
            </tr>
            
        )
    })}
    <tr>
    <th>Totals</th>
    {arrsum.map(i=>{
        return(
            <th>{i}</th>
        )
    })}
    <th>{sum}</th>
    </tr>
    
    </tbody>
    </table>
    
    </div>
  )
}

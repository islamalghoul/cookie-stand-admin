"use client"
import React  from 'react';
import  {useState} from 'react';
import ReportTable from './ReportTable';
import CreateForm from './CreateForm';
 
export default function Main(props) {


  return (
    <div>
    <CreateForm/>
    {props.flage &&<ReportTable/>}
    {!props.flage&& <p className='text-center'> No Cookie Stands Available</p>}
          </div>
  )
}

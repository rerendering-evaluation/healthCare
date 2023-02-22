import React,{useState} from 'react'
import {Button} from '@mui/material'
import DoctorList from './DoctorList'

function DoctorServicesList() {

    const [doctList,setDoctList]=useState(true)


  return (
    <>
     <div className='text-2xl font-bold text-gray-600 text-center mt-5'>
      <h1 >Doctor Sercives </h1>
    </div>
    <div className='rounded border-gray-500 border-2 m-10 w-auto'>
        <div className='mx-10 mt-5 mb-2'>
        <Button variant="contained" onClick={()=> setDoctList(!doctList)}>Doctor List</Button>
        <div>
            {
                doctList ? null : <DoctorList/> 
            }
        </div>
        </div>

    </div>
    </>
   
  )
}

export default DoctorServicesList

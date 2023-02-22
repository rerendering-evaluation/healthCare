import React from 'react'
import { AiTwotoneEdit } from "react-icons/ai";
import { FormGroup, FormControlLabel,Checkbox,IconButton} from '@mui/material'
import {BiX} from 'react-icons/bi'
import { useContext } from "react";
import { MyContext } from "./ServicesContextApi";
import { useForm } from 'react-hook-form'

// import { dummydata } from './Data';

import {Button, Dialog, DialogActions, DialogContent,DialogTitle, TextField} from '@mui/material'
// import  Watch  from './Watch';

function AddPatient() {

    

  const contextData = useContext(MyContext);
  const {addIndePatient,data,setData,
    setAddtPatient, dataResult,}=contextData;
  const {addPatient}=contextData;

 
    const [open,setOpen]=React.useState(false)
    const handleEditItems =()=>{
               setOpen(true)
       }

    const handleClose =()=>{
               setOpen(false)   
       }

//        const { register, handleSubmit, formState: { errors } } = useForm();
//   const onSubmit = data => console.log(data);
//   console.log(errors)

// Add new Patient

const { register, handleSubmit,reset } = useForm();

 const onSubmit = (Data) =>{
   
   const addObj={
    IDNo:Data.IDNo,
    PatientName:Data.PatientName,
    MobileNo:Data.MobileNo,
    EntryDate:Data.EntryDate,
    Timing:Data.Timing,
    Doctor:Data.Doctor,
    DoctServices:Data.DoctServices
   }

 let obj = data
 obj.result = [...obj.result,addObj]
 setData(obj)
 setAddtPatient([...dataResult,addObj])
   console.log(Data)
   reset()
 }
const resetButton=()=>{
 reset()
}

  return (
    <div >
 <Button  variant="contained"
onClick={ handleEditItems}
>Add Patient</Button>
      <Dialog 
open={open}
fullWidth
     onClose={handleClose}
maxWidth='lg'
>
    
<div className='bg-white border-gray-400 flex justify-between text-center  text-red-400 mx-3  border-b-2'>
<DialogTitle className=' font-thin  text-cyan-600'>New Patient Entry</DialogTitle>
     <IconButton variant='outlined'
      >
        <div className='border-2 border-red-400 rounded text-red-400'>
         <BiX color='primary'
         onClick={handleClose} 
         />
         </div>
      </IconButton> 
      </div>

      <div className='mt-3 mx-20 font-semibold text-gray-700'>
</div>
<form onSubmit={handleSubmit(onSubmit)}>
    <div className='mt-3 ml-20  font-semibold text-gray-700 flex gap-20'>
    <TextField id="outlined-basic" variant="outlined" label="Patient ID" size="small" className='w-60' type="number" {...register("IDNo.")}/>
    <TextField id="outlined-basic" variant="outlined" label="Patient Name" size="small" className='w-96' {...register("PatientName")}/>
    <TextField id="outlined-basic" variant="outlined" label="Entry Timing" type="text" size="small" className='w-60' {...register("Timing")}/>
    </div>

<div className='mx-3 mt-10 ml-20 flex gap-20 '>
<TextField id="outlined-basic" variant="outlined" label="Mobile No." type="number" size="small" className='w-60' {...register("MobileNo.")}/>
<TextField id="outlined-basic" variant="outlined" label="Entry Date" type="text" size="small" className='w-60' {...register("EntryDate")}/>

</div>
<div className='mx-3 mt-10 ml-20 flex gap-20 '>
<TextField id="outlined-basic" variant="outlined" label="Doctor Assigned" size="small" className='w-60' {...register("Doctor")}/>
<TextField id="outlined-basic" variant="outlined" label="Doctor Services" size="small" className='w-60' {...register("DoctServices")}/>
</div>

        <div className=' rounded m-4'>
    <DialogActions>
<div className='flex gap-3 pb-3 mt-5'>
<Button variant='outlined'
color='error'
onClick={resetButton}
>Reset</Button>
<Button variant="contained" color="success"
onClick={handleClose}
type="submit"   
>
  Add
</Button>
</div>

    </DialogActions>
    </div>
    </form>

</Dialog>
    </div>
  )
}

export default AddPatient

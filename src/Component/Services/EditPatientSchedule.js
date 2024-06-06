import { memo } from "react";
import React from 'react';
import { AiTwotoneEdit } from "react-icons/ai";
import { FormGroup, FormControlLabel, Checkbox, IconButton } from '@mui/material';
import { BiX } from 'react-icons/bi';
import { useContext } from "react";
import { MyContext } from "./ServicesContextApi";
import { useForm } from "react-hook-form";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
const EditPatientSchedule = memo(function EditPatientSchedule() {
  console.log(window.globalCount++);
  const contextData = useContext(MyContext);
  const {
    addPatient,
    updateIndex,
    setDataResult,
    dataResult
  } = contextData;
  let {
    register,
    handleSubmit,
    reset
  } = useForm();
  let onSubmit = Data => {
    let PatientNo = Data.PatientNo;
    let Patient = Data.PatientName;
    let Mobile = Data.MobileNo;
    let Date = Data.EntryDate;
    let Time = Data.Timing;
    let Doctor = Data.Doctor;
    let DoctServices = Data.DoctServices;
    let upDataObj = {
      PatientNo: PatientNo,
      PatientName: Patient,
      MobileNo: Mobile,
      EntryDate: Date,
      Timing: Time,
      Doctor: Doctor,
      DoctServices: DoctServices
    };
    let temp = [...dataResult.splice(updateIndex - 1, 1, upDataObj)];
    //  [...dataResult];
    setDataResult(temp);
    console.log(temp);
    reset();

    // setDataResult=([...dataResult,upDataObj])
  };

  //   Modal open 
  const [open, setOpen] = React.useState(false);
  const handleEditItems = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return <div>
 <AiTwotoneEdit className='text-2xl' color='blue' onClick={handleEditItems} />

      <Dialog open={open} fullWidth onClose={handleClose} maxWidth='lg'>
    
      <div className='bg-white border-gray-400 flex justify-end text-center  text-red-400 mx-3  border-b-2'>
        <DialogTitle className=' font-thin relative right-96 text-cyan-600'>Edit Patient Schedule</DialogTitle>
     <IconButton variant='outlined'>
        <div className='border-2 border-red-400 rounded text-red-400'>
         <BiX color='primary' onClick={handleClose} />
         </div>
      </IconButton>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>

      <div className='mt-3 mx-20 font-semibold text-gray-700 flex  justify-between'>
      <TextField id="outlined-basic" variant="outlined" label="Patient No" disabled type="text" size="small" className='w-60' defaultValue={addPatient.PatientNo} {...register("PatientNo")} />
      <TextField id="outlined-basic" variant="outlined" label="PatientName" disabled type="text" size="small" className='w-60' defaultValue={addPatient.PatientName} {...register("PatientName")} />
      <TextField id="outlined-basic" variant="outlined" label="Mobile No" disabled type="text" size="small" className='w-60' defaultValue={addPatient.MobileNo} {...register("MobileNo")} />
  {/* <h1> Patient ID : <span className='mx-2 text-gray-500' >{addPatient.PatientNo}</span></h1>
   <h1 > Patient Name : <span className='mx-2 text-gray-500'>{addPatient.PatientName}</span></h1>
   <h1> Mobile No. : <span className='mx-2 text-gray-500'>{addPatient.MobileNo}</span></h1> */}
  </div>

  <div className='mt-8 ml-20  font-semibold text-gray-700 flex gap-40'>
   
  <TextField id="outlined-basic" variant="outlined" label="EntryDate" disabled type="text" size="small" className='w-60' defaultValue={addPatient.EntryDate} {...register("EntryDate")} />

          <TextField id="outlined-basic" variant="outlined" label="Entry Timing" disabled type="text" size="small" className='w-60' defaultValue={addPatient.Timing} {...register("Timing")} />
        </div>
        <div className='mx-3 mt-10 ml-20 flex gap-40 '>
          <TextField id="outlined-basic" variant="outlined" label="Doctor Assigned" type="text" size="small" className='w-60' defaultValue={addPatient.Doctor} {...register("Doctor")} />
          <TextField id="outlined-basic" variant="outlined" label="Doctor Services" type="text" size="small" className='w-60' defaultValue={addPatient.DoctServices} {...register("DoctServices")} />
        </div>

        <div>
          {/* <TextField id="outlined-basic" variant="outlined" size="small">{editObj.PatientName}</TextField> */}
        </div>
        
            <div className=' rounded m-4'>
          <div>
  {/* <TaableActions/> */}
          </div>
    <DialogActions>
            <div className='flex gap-3 pb-3 mt-5'>
              <Button variant='outlined' color='error' onClick={handleClose}>Close</Button>
              <Button variant="contained" color="success" onClick={handleClose} type="submit">
  Update
              </Button>
            </div>

    </DialogActions>
    </div>
    </form>

    </Dialog>
    </div>;
});
export default EditPatientSchedule;
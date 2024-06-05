import { useRef } from "react";
import { memo } from "react";
import React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { TextField } from '@mui/material';
export const PatientDate = memo(function PatientDate() {
  const value = React.useState(null);
  const value1 = React.useState(null);
  const date1 = new Date(value.value);
  const date2 = new Date(value1.value);
  const diffTime = Math.abs(date2 - date1);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  // console.log(diffTime + " milliseconds");
  // console.log(diffDays + " days");

  return <>
   <div className='lg:flex mt-3 relative lg:right-10'>
   <div>
   <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker label="Admit Date" value={value.value} ref={dummy} renderInput={params => <TextField {...params} size='small' className='lg:w-[64%]' />} />
    </LocalizationProvider>
   </div>
   <div>
   <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker label="Discharge Date" value={value1.value} ref={dummy} renderInput={params => <TextField {...params} size='small' className='w-[64%] relative lg:right-14 ' />} />
    </LocalizationProvider>
    
   </div>
   </div>
 <div>
 <TextField id="outlined-basic" label="Total Days" type="number" variant="outlined" size='small' className='w-[50%] relative lg:right-20 top-3' value={diffDays} />
 </div>
       
    </>;
});
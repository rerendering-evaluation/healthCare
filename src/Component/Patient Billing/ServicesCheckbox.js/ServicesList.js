import { useRef } from "react";
import { memo } from "react";
import { Autocomplete, TextField, Select, MenuItem } from '@mui/material';
import { TableBody, TableCell, TableRow, TableContainer, FormControl, InputLabel, Box } from '@mui/material';
import React, { useState } from 'react';
// import { DoctorsList } from './Data'
import NeurologyCheckbox from './NeurologyCheckbox';
import PathologyCheckbox from './PathologyCheckbox';
import RadiologyCheckbox from './RadiologyCheckbox';
// import { DoctServiceDetails } from './DoctServiceDetails';

export const ServicesList = memo(function ServicesList() {
  // const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  const age = React.useState('');
  const [doctName1, setDoctName1] = useState(true);
  const [doctName2, setDoctName2] = useState(true);
  const [doctName3, setDoctName3] = useState(true);
  const handleChange = event => {
    age.current.value = event.target.value;
  };
  return <>
      <div className=' w-60 ml-32 relative left-3'>
      {/* <Autocomplete
        multiple
        id="tags-outlined"
        options={DoctorsList}
        getOptionLabel={(option) => option.name}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField
            {...params}
            label="Doctor's Name List"
            placeholder="Doctor's Name"
           />
          
        )}
       /> */}
      
      <div className='overflow-hidden'>    
      <Box sx={{
          minWidth: 120
        }} className='mt-3'>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label" className='-mt-2'>Doctor's Name</InputLabel>
        <Select className='' labelId="demo-simple-select-label" id="demo-simple-select" size="small" label="Doctor's Name" ref={age}>
          <MenuItem value={10} onClick={() => setDoctName1(!doctName1)}>R.K.Patil</MenuItem>
          <MenuItem value={20} onClick={() => setDoctName2(!doctName2)}>Riya Joshi</MenuItem>
          <MenuItem value={30} onClick={() => setDoctName3(!doctName3)}>Arihant Kumar</MenuItem>
        </Select>
      </FormControl>
    </Box>
        </div>
    
      </div>
      <div className='flex gap-20 overflow-hidden ml-40'>
        <div>
        {doctName1 ? null : <PathologyCheckbox />}
        </div>
      <div>
      {doctName2 ? null : <RadiologyCheckbox />}
      </div>
            
            <div>
            {doctName3 ? null : <NeurologyCheckbox />}
            </div>
           
      </div>
    </>;
});
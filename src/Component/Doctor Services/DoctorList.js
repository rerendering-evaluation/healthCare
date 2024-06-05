import { memo } from "react";
import { Autocomplete, TextField, Select, MenuItem } from '@mui/material';
import { TableBody, TableCell, TableRow, TableContainer, FormControl, InputLabel, Box } from '@mui/material';
import React, { useState } from 'react';
import { DoctorsList } from './Data';
// import { DoctServiceDetails } from './DoctServiceDetails';
import { DoctorName1, DoctorName2, DoctorName3 } from './ServicesList';
const DoctorList = memo(function DoctorList() {
  // const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  const [age, setAge] = React.useState('');
  const [doctName1, setDoctName1] = useState(true);
  const [doctName2, setDoctName2] = useState(true);
  const [doctName3, setDoctName3] = useState(true);
  const handleChange = event => {
    setAge(event.target.value);
  };
  return <>
      <div className='my-10 w-80 lg:mx-40'>
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
        }} className='mt-3 w-30'>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Doctor's Name</InputLabel>
        <Select className='w-[70%] lg:w-[100%] ' labelId="demo-simple-select-label" id="demo-simple-select" value={age} label="Doctor's Name" onChange={handleChange}>
          <MenuItem value={10} onClick={() => setDoctName1(!doctName1)}>R.K.Patil</MenuItem>
          <MenuItem value={20} onClick={() => setDoctName2(!doctName2)}>Riya Joshi</MenuItem>
          <MenuItem value={30} onClick={() => setDoctName3(!doctName3)}>Arihant Kumar</MenuItem>
        </Select>
      </FormControl>
    </Box>
        </div>
    
      </div>
      <div className='lg:flex gap-10 overflow-hidden'>
        <div>
        {doctName1 ? null : <DoctorName1 />}
        </div>
      <div>
      {doctName2 ? null : <DoctorName2 />}
      </div>
            
            <div>
            {doctName3 ? null : <DoctorName3 />}
            </div>
           
      </div>
    </>;
});
export default DoctorList;
import { memo } from "react";
import React from 'react';
import { TextField, Button } from '@mui/material';
import { IconButton } from '@mui/material';
import { IoIosSearch } from 'react-icons/io';
import { useContext } from "react";
import { MyContext } from "./ServicesContextApi";
import AddPatient from './AddPatient';
// import AddItems from './AddItems';
const SearchBar = memo(function SearchBar() {
  const contextData = useContext(MyContext);
  const {
    filterData,
    value
  } = contextData;
  return <div>
      <div className='flex justify-between md:mt-8 mt-4  md:px-14 px-5 overflow-hidden'>
     
     <div className='md:flex md:gap-8 gap-3 items-center text-center mt-5 '>
     <h1 className='text-gray-600 text-lg'>Patient</h1>
     <div className='flex gap-5 mt-4 md:mt-0'>
         <div>
         <TextField id="outlined-basic" label="Search by Patient-Name" variant="outlined" value={value} onChange={filterData} size='small' className='md:w-96 md:h-10 w-40  bg-white border-gray-500' />
            </div>
            <div className='bg-white border-gray-400 border rounded md:w-16 h-10 text-center'>
            <IconButton variant='outlined'>
              <IoIosSearch />
              </IconButton>
              </div>
              <div className='place-items-end'>
              <AddPatient />
              </div>
     </div>
     </div>

     <div>
    </div>
             </div>
    </div>;
});
export default SearchBar;
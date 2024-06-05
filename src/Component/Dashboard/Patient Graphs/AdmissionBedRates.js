import { memo } from "react";
import React from 'react';
import { LineChart, AreaChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Area, ResponsiveContainer } from 'recharts';
import { SlGraph } from "react-icons/sl";
import { BsGraphDown } from "react-icons/bs";
const AdmissionBedRates = memo(function AdmissionBedRates() {
  const data = [{
    name: 'Jan',
    uv: 4000,
    pv: 2400,
    amt: 2400
  }, {
    name: 'Feb',
    uv: 3000,
    pv: 1398,
    amt: 2210
  }, {
    name: 'March',
    uv: 2000,
    pv: 9800,
    amt: 2290
  }, {
    name: 'April',
    uv: 2780,
    pv: 3908,
    amt: 2000
  }, {
    name: 'May',
    uv: 1890,
    pv: 4800,
    amt: 2181
  }, {
    name: 'June',
    uv: 8000,
    pv: 4000,
    amt: 2500
  }, {
    name: 'Jul',
    uv: 3490,
    pv: 4300,
    amt: 2100
  }];
  return <>
    <div className='lg:flex justify-center lg:mt-28 gap-1 mx-5 lg:mx-0'>

   
    <div className='lg:ml-16 relative lg:right-16'>
        <div className='w-[100%] bg-blue-100 text-center shadow-xl py-3 rounded-xl mt-10 px-7'>
            <h1 className='lg:text-xl text-blue-700 lg:font-semibold '>3.28%</h1>
            <h1 className='lg:text-xl'>Readmission Rate</h1>
            <h1 className='lg:mt-2 shadow-xl w-40 mx-auto'>2 <br /><span>Readmission</span></h1>
            <h1 className='mt-2'>81 <br /><span>Admission</span></h1>
        </div>
        <div className='w-[100%] bg-blue-100 text-center shadow-xl py-3 mt-9 rounded-xl '>
            <h1 className='lg:text-xl text-blue-700 lg:font-semibold'>14.55%</h1>
            <h1 className='lg:text-xl'>Bed Occupancy Rate</h1>
            <h1 className='lg:mt-2 shadow-xl w-40 mx-auto'>8 <br /><span>Occupied</span></h1>
            <h1 className='mt-2'>55 <br /><span>Total</span></h1>
        </div>
    </div>
       <div className='relative lg:right-7 '>
            <div className='bg-white lg:w-[91%] lg:mt-10 mt-5  drop-shadow-xl rounded-xl flex items-center gap-6 px-7 h-[40%]'>
            <div className='w-40 lg:mt-6'>
    <h1 className='lg:font-semibold lg:text-xl ml-3'>Total Male</h1>
    <div className='flex items-center gap-2 lg:mt-4 justify-center lg:pb-4 text-blue-700'>
    <h1 className='text-sm lg:text-lg'>2.2%</h1>
    <SlGraph />
  </div>
  <h1 className='text-center  lg:text-2xl lg:font-bold'>60.02 %</h1>
          </div>
            <ResponsiveContainer width="80%" height={100}
          //  aspect={2}
          className="lg:mt-8 mb-6">
        <AreaChart width={600} height={200} data={data} margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5
            }}>
          <CartesianGrid strokeDasharray="3 3" horizontal="" vertical="" />
          <Area type="monotone" dataKey="pv" stroke="#8884d8" fill="#1e5799" />
          
     
        </AreaChart>
      </ResponsiveContainer>    
            </div>
            
            <div className='bg-white lg:w-[91%] lg:mt-10 mt-5 drop-shadow-xl rounded-xl flex items-center gap-6 px-7 h-[40%]'>
            <div className='w-40 lg:mt-6'>
    <h1 className='lg:font-semibold lg:text-xl ml-4'>Total Female</h1>
    <div className='flex items-center gap-2 lg:mt-4 justify-center lg:pb-4 text-orange-700'>
    <h1 className='text-sm lg:text-lg'>2.1 %</h1>
    <BsGraphDown />
  </div>
  <h1 className='text-center  lg:text-2xl lg:font-bold'>30.08 %</h1>
          </div>
            <ResponsiveContainer width="80%" height={100}
          //  aspect={2}
          className="lg:mt-8 mb-6">
        <AreaChart width={600} height={200} data={data} margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5
            }}>
          <CartesianGrid strokeDasharray="3 3" horizontal="" vertical="" />
   
          <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#ed9017" />
        </AreaChart>
      </ResponsiveContainer>    
            </div>
            
            </div>
    </div>
    </>;
});
export default AdmissionBedRates;
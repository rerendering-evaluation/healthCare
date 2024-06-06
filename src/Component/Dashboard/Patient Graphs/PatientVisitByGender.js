import { memo } from "react";
import React from 'react';
import { LineChart, AreaChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Area, ResponsiveContainer } from 'recharts';
import { MdKeyboardArrowDown } from "react-icons/md";
const PatientVisitByGender = memo(function PatientVisitByGender() {
  console.log(window.globalCount++);
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
      <div className='lg:w-[80%] lg:mt-28 lg:mr-10 mx-5 lg:mx-0'>
        <div className='bg-white  mt-10 lg:ml-20 drop-shadow-xl rounded-xl'>
        <div className='flex items-center'>
            <h1 className='text-xl font-bold mx-4 lg:mb-10 mt-5'>Patient Visit By Gender </h1>
            {/* <Button variant="contained" className='relative bottom-2 left-80'>Monthly</Button> */}
            <div className='flex items-center gap-2 text-blue-700 bg-blue-100 p-2 rounded-lg relative lg:bottom-2 -bottom-3 lg:left-56 -left-4'>
                <h1>Monthly</h1>
                <MdKeyboardArrowDown className='text-xl' />
            </div>
            </div>
         <ResponsiveContainer width="90%" height={300}
        //  aspect={2}
        className="mt-8 ">
        <LineChart width={600} height={400} data={data} margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 0
          }}>
          <CartesianGrid strokeDasharray="3 3" horizontal="" vertical="" />
          <XAxis dataKey="name" />
          <YAxis />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" fill="#8884d8" />
          <Line type="monotone" dataKey="uv" stroke="#ffc658" fill="#ffc658" />
     
        </LineChart>
      </ResponsiveContainer>  
        </div>

      </div>
    </>;
});
export default PatientVisitByGender;
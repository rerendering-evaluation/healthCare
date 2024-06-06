import { memo } from "react";
import React from 'react';
import { Card } from '@mui/material';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import AveragePatientVisited from './AveragePatientVisited';
import PatientVisitByDepartment from './PatientVisitByDepartment';
const PatientVisit = memo(function PatientVisit() {
  console.log(window.globalCount++);
  const data = [{
    name: '',
    uv: 4000,
    pv: 2400,
    amt: 2400
  }, {
    name: '2016',
    uv: 3000,
    pv: 1398,
    amt: 2210
  }, {
    name: '2017',
    uv: 2000,
    pv: 9800,
    amt: 2290
  }, {
    name: '2018',
    uv: 2780,
    pv: 3908,
    amt: 2000
  }, {
    name: '2019',
    uv: 1890,
    pv: 4800,
    amt: 2181
  }, {
    name: '2020',
    uv: 2390,
    pv: 3800,
    amt: 2500
  }, {
    name: '2021',
    uv: 3490,
    pv: 4300,
    amt: 2100
  }];
  return <>
     <div>
     <div className='lg:flex lg:gap-10 lg:mx-20 pt-10 lg:mt-6 lg:h-80 '>
 <Card className='lg:h-96 lg:w-96 w-80 mx-5 lg:mx-0 shadow-2xl'>
 <div className='rounded-4xl drop-shadow-xl m-3'>
      <h1 className='lg:text-xl lg:font-bold mx-2 pt-6'>Patient Visited</h1>
    <ResponsiveContainer width='100%' height={240}
            //  aspect={2}
            className="mt-4">
        <AreaChart width={300} height={400} data={data} margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0
              }}>
          <CartesianGrid strokeDasharray="3 3" horizontal="" vertical="" />
          <XAxis dataKey="name" />
          {/* <YAxis type='number' domain={['dataMin', 'dataMax']}/> */}
          <Tooltip />
          {/* <Area type="monotone" dataKey="uv" stackId="1" stroke="#8884d8" fill="#8884d8" /> */}
          <Area type="monotone" dataKey="pv" stackId="1" stroke="##ffc578" fill="##ffc578" />
          <Area type="monotone" dataKey="amt" stackId="1" stroke="#ffc658" fill="#ffc658" />
        </AreaChart>
      </ResponsiveContainer>  
    </div>
 </Card>
 
    
   
    <AveragePatientVisited />
   <PatientVisitByDepartment />
   {/* <PatientVisitByDepartment/> */}
   </div>
        </div> 
    </>;
});
export default PatientVisit;
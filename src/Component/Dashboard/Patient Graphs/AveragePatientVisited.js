import React from 'react'
import {Card} from '@mui/material'
import { BarChart, Bar,XAxis,YAxis } from 'recharts';
import { MdKeyboardArrowDown } from "react-icons/md";




function AveragePatientVisited() {
    const data = [
        {
          name: 'Jan',
          uv: 4000,
          pv: 0,
          amt: 2400,
        },
        {
          name: 'Feb',
          uv: 3000,
          pv: 500,
          amt: 2210,
        },
        {
          name: 'March',
          uv: 2000,
          pv: 1000,
          amt: 2290,
        },
        {
          name: 'April',
          uv: 2780,
          pv: 1500,
          amt: 2000,
        },
        {
          name: 'May',
          uv: 1890,
          pv: 2000,
          amt: 2181,
        },
        {
          name: 'June',
          uv: 2390,
          pv: 2500,
          amt: 2500,
        },
        {
          name: 'July',
          uv: 3490,
          pv: 3000,
          amt: 2100,
        },
        {
          name: 'Aug',
          uv:  2000,
          pv: 3500,
          amt: 2100,
        },
        {
          name: 'Sept',
          uv: 6000,
          pv: 4000,
          amt: 2100,
        },
        {
          name: 'Oct',
          uv: 2390,
          pv: 4500,
          amt: 2100,
        },
        {
          name: 'Nov',
          uv: 3490,
          pv: 5000,
          amt: 2100,
        },
        {
          name: 'Dec',
          uv: 1890,
          pv: 5500,
          amt: 2100,
        },
      ];
      
  return (
    <>
      <div className='mt-5 lg:mt-0 w-80 lg:w-auto mx-5 lg:mx-0'>
        <Card className='h-96'>
        <div className='p-4 rounded-xl'>
            <div className='flex items-center'>
            <h1 className='lg:text-xl lg:font-bold mx-4 mb-10 mt-5'>Average Patient Visit </h1>
            {/* <Button variant="contained" className='relative bottom-2 left-80'>Monthly</Button> */}
            <div className='flex items-center gap-2 text-blue-700 bg-blue-100 p-2 rounded-lg relative bottom-2 lg:left-40'>
                <h1>Monthly</h1>
                <MdKeyboardArrowDown className='text-xl'/>
            </div>
            </div>
            
<div className='mt-6 relative lg:right-5 right-20'>
<BarChart width={500} height={200} data={data} className='w-60'>
        <XAxis dataKey="name" />
        <YAxis dataKey="pv" />
          <Bar dataKey="uv" fill="#8884d8" />
        </BarChart> 
</div>
         
        </div>
        </Card>
        
      </div>
    </>
  )
}

export default AveragePatientVisited

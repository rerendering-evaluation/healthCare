import React from 'react'
import {Card} from '@mui/material'
import { BsPersonSquare } from "react-icons/bs";
import { SlGraph } from "react-icons/sl";
import { FaHandHoldingHeart } from "react-icons/fa";
import { GiLoveInjection } from "react-icons/gi";
import { TbEmergencyBed } from "react-icons/tb";
import { MdHealthAndSafety } from "react-icons/md";


function HospitalCards() {
  return (
    <>
    <div className='lg:ml-20 mx-8 lg:mx-0 pt-12 z-30 '>
    <div className='lg:flex grid grid-cols-2 gap-9 z-30 -mt-5 lg:-mt-0'>
      {/* card 1 */}
    <Card className='lg:w-60 w-36 drop-shadow-xl h-28 z-30 my-3 lg:my-0'>
      <div className='bg-purple-200 z-30'>
      <div className='flex justify-center items-center lg:gap-10 gap-3 pt-1 lg:text-3xl text-xl'>
  <BsPersonSquare className='text-purple-900 p-1 lg:text-4xl text-lg lg:rounded-lg rounded bg-white'/>
  <h1>Patient</h1>
</div>
<h1 className='ml-10 pt-3 lg:font-bold lg:text-xl'>1,863</h1>
<div className='flex mx-5 lg:gap-10 gap-3 pt-1 text-purple-700'>
  <h1 className='text-sm'>Last 7 days</h1>
  <div className='flex items-center pb-4'>
    <SlGraph/>
    <h1>2.2%</h1>
  </div>
</div>
      </div>
</Card>

{/* card 2 */}
    <Card className='lg:w-60 w-36 drop-shadow-xl h-28 z-30 my-3 lg:my-0'>
      <div className='bg-orange-200'>
      <div className='flex justify-center items-center lg:gap-10 gap-3 pt-1 lg:text-3xl text-xl'>
  <FaHandHoldingHeart className='text-orange-700  p-1 lg:text-4xl text-lg lg:rounded-lg rounded bg-white'/>
  <h1>Reports</h1>
</div>
<h1 className='ml-10 pt-3  lg:font-bold lg:text-xl'>863</h1>
<div className='flex mx-5 lg:gap-10 gap-3 pt-1 text-orange-700'>
  <h1 className='text-sm'>Last 7 days</h1>
  <div className='flex items-center pb-4'>
    <SlGraph/>
    <h1>0.2%</h1>
  </div>
</div>
      </div>
</Card>

  

{/* card 3 */}
    <Card className='lg:w-60 w-36 drop-shadow-xl h-28 z-30 my-3 lg:my-0'>
      <div className='bg-green-200'>
      <div className='flex justify-center items-center lg:gap-10 gap-3 pt-1 lg:text-3xl text-xl'>
  <GiLoveInjection className='text-green-700  p-1 lg:text-4xl text-lg lg:rounded-lg rounded bg-white'/>
  <h1>Inject</h1>
</div>
<h1 className='ml-10 pt-3  lg:font-bold lg:text-xl'>1,863</h1>
<div className='flex mx-5 lg:gap-10 gap-3 pt-1 text-green-700'>
  <h1 className='text-sm'>Last 7 days</h1>
  <div className='flex items-center pb-4'>
    <SlGraph/>
    <h1>1.2%</h1>
  </div>
</div>
      </div>
</Card>

{/* card 4 */}
    <Card className='lg:w-60 w-36 drop-shadow-xl h-28 z-30 my-3 lg:my-0'>
      <div className='bg-blue-200'>
      <div className='flex justify-center items-center lg:gap-10 gap-3 pt-1 lg:text-3xl text-xl'>
  <TbEmergencyBed className='text-blue-700 p-1 lg:text-4xl text-lg lg:rounded-lg rounded bg-white'/>
  <h1>Surgery</h1>
</div>
<h1 className='ml-10 pt-3  lg:font-bold lg:text-xl'>1,863</h1>
<div className='flex mx-5 lg:gap-10 gap-3 pt-1 text-blue-700'>
  <h1 className='text-sm'>Last 7 days</h1>
  <div className='flex items-center pb-4'>
    <SlGraph/>
    <h1>+1.2%</h1>
  </div>
</div>
      </div>
</Card>

{/* card 5 */}
<Card className='lg:w-60 w-36 drop-shadow-xl h-28 z-30 my-3 lg:my-0 '>
      <div className='bg-pink-200'>
      <div className='flex justify-center items-center lg:gap-10 gap-3 pt-1 lg:text-3xl text-xl'>
  <MdHealthAndSafety className='text-pink-900 p-1 lg:text-4xl text-lg lg:rounded-lg rounded bg-white'/>
  <h1>Doctors</h1>
</div>
<h1 className='ml-10 pt-3  lg:font-bold lg:text-xl'>387</h1>
<div className='flex mx-5 lg:gap-10 gap-3 pt-1 text-pink-700'>
  <h1 className='text-sm'>Last 7 days</h1>
  <div className='flex items-center pb-4'>
    <SlGraph/>
    <h1>2.2%</h1>
  </div>
</div>
      </div>
</Card>

 </div>
</div>  
    </>
  )
}

export default HospitalCards

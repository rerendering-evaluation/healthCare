import { TextField,Button} from '@mui/material'
import React,{useState} from 'react'
import {PatientDate} from './Date and Time/PatientDate'
import Select from 'react-select';
import { ServicesList } from './ServicesCheckbox.js/ServicesList';

// import Select from 'react-select';
// import PathologyCheckbox from './ServicesCheckbox.js/PathologyCheckbox';
// import RadiologyCheckbox from './ServicesCheckbox.js/RadiologyCheckbox';
// import NeurologyCheckbox from './ServicesCheckbox.js/NeurologyCheckbox';
// import DoctorList from '../Doctor Services/DoctorList';


function BillingPatient() {


    const doctNames = [
        {label:'S.P.Patil',value:'S.P.Patil'},
              {label:'R.K.Patel',value:'R.K.Patel',},
              {label:'Arihant Kumar',value:'Arihant Kumar'},
              {label:'Riya Joshi',value:'Riya Joshi'},
      ];
    const wardNames = [
        {label:'General Ward',value:'General Ward'},
              {label:'ICU',value:'ICU',},
              {label:'Private Room',value:'Private Room'},
              {label:'OPD',value:'OPD'},
      ];
    const servicesNames = [
        {label:'Pathology',value:'Pathology'},
              {label:'Radiology',value:'Radiology',},
              {label:'Neurology',value:'Neurology'},
              {label:'Ooncology',value:'Ooncology'},
      ];

// for ward charges
const [number1, setNumber1] = useState('');
const [number2, setNumber2] = useState('');
const total = parseInt(number1)*parseInt(number2)
// console.log(total + "Ward Charges")

// for Doctor charges
const [doctCharge1, setDoctCahrge1] = useState('');
const [doctCharge2, setDoctCahrge2] = useState('');
const totalDoctCharge = parseInt(doctCharge1)*parseInt(doctCharge2)
// console.log(totalDoctCharge + "Ward Charges") 

// for Services charges
const [serviceCharge1, setServiceCahrge1] = useState('');
const [serviceCharge2, setServiceCahrge2] = useState('');
const totalserviceCharge = parseInt(serviceCharge1)*parseInt(serviceCharge2)
// console.log(totalserviceCharge + "Ward Charges")

// total patient bill 
const [bill,setBill]=useState('')
const [totalBill,setTotalBill]=useState(bill)
// setBill(bill)

const totalPtBill=()=>{
  setBill({
    bill:parseInt(total)+parseInt(totalDoctCharge)+parseInt(totalserviceCharge)
  })
  console.log(bill)
  setTotalBill(totalBill)
}

  return (
    <>
     <div className='border my-7 mx-60 flex justify-center'>
      
        <div> 
        <h1 className='text-center my-8 text-3xl font-bold text-gray-700'>Patient Billing</h1>
            <form>
                <div>
                    <div>
                    <h1 className='py-3 border-b-2 px-6 text-xl font-semibold text-gray-500'>General Details</h1>
                    <div className='flex gap-9 justify-center mt-6'>
                        
                <TextField id="outlined-basic" label="Patient Id" type="number" variant="outlined" size='small' className='w-[15%]'
                 />
                <TextField id="outlined-basic" label="Patient Name" type="text" variant="outlined" size='small' className='w-[40%]' 
              />
                <TextField id="outlined-basic" label="Mobile No." type="number" variant="outlined" size='small' className='w-[15%]' 
                />
               
                    </div>
                    <div className='flex justify-center mt-5'>
                    <PatientDate/>
                    </div>
                    </div>

                    {/* Doctor  services list*/}
                    <h1 className='py-3 border-b-2 px-6 text-xl font-semibold text-gray-500'>Services</h1>
                    <div className='flex gap-10  mt-6 mb-6'>
<ServicesList/>
                        </div>
                        
                        <h1 className='py-3 border-b-2 px-6 text-xl font-semibold text-gray-500'>Charges Assign</h1>
                        <div>

  {/* <WardCharges/> */}
                          {/* charges */}
                          <div>
                          <h1 className='py-3 border-b-1 px-12 text-lg font-semibold text-gray-500'>Ward Charges</h1>
   <div >
                          
<div className='flex items-center gap-8'>
  <div style={{width: '240px'}} className="ml-36">
<Select
    components={{ DropdownIndicator:() => null, IndicatorSeparator:() => null }}
    isMulti
    name="colors"
    placeholder="Assign Wards"
    options={wardNames}
    className="basic-multi-select"
    classNamePrefix="select"
  />
  </div>
  <TextField id="outlined-basic" label="Charges/Ward" size='small' type="number" variant="outlined" className='w-32'
  value={number1}
onChange={(e)=>{setNumber1(e.target.value)}}
    autoComplete="off"/>
  <p className='text-xl font-semibold px-3 text-gray-500'>+</p>
  <TextField id="outlined-basic" label="Total Days" size='small' type="number" variant="outlined" className='w-32'
   value={number2}
   onChange={(e)=>{setNumber2(e.target.value)}}
   autoComplete="off"

   />
  <p className='text-xl font-semibold px-3 text-gray-500'>=</p>
  <TextField id="outlined-basic" label="Total Charges" size='small'type="number"  variant="outlined"className='w-32' autoComplete="off"
  value={total}
  />
</div>

</div>                      
                          </div>
{/* Doctor Charges */}
                          <div className='mt-5 mb-6'>
                          <h1 className='py-3 border-b-1 px-12 text-lg font-semibold text-gray-500'>Doctor Charges</h1>
   <div >
                          
<div className='flex items-center gap-8'>
  <div style={{width: '240px'}} className="ml-36">
<Select
    components={{ DropdownIndicator:() => null, IndicatorSeparator:() => null }}
    isMulti
    name="colors"
    placeholder="Assign Doctor"
    options={doctNames}
    className="basic-multi-select"
    classNamePrefix="select"
  />
  </div>
  <TextField id="outlined-basic" label=" Doctor Charge" size='small' type="number" variant="outlined" className='w-32'
    value={doctCharge1} autoComplete="off"
    onChange={(e)=>{setDoctCahrge1(e.target.value)}}/>
  <p className='text-xl font-semibold px-3 text-gray-500'>+</p>
  <TextField id="outlined-basic" label="Charges/Day " size='small' type="number" variant="outlined" className='w-32'
  value={doctCharge2} autoComplete="off"
  onChange={(e)=>{setDoctCahrge2(e.target.value)}}/>
  <p className='text-xl font-semibold px-3 text-gray-500'>=</p>
  <TextField id="outlined-basic" label="Total Charges" size='small'type="number"  variant="outlined"className='w-32' 
  value={totalDoctCharge} autoComplete="off"/>
</div>

</div>                      
                          </div>

{/* Services Charges */}
                          <div className='mt-5 mb-6'>
                          <h1 className='py-3 border-b-1 px-12 text-lg font-semibold text-gray-500'>Services Charges</h1>
   <div >
                          
<div className='flex items-center gap-8'>
  <div style={{width: '240px'}} className="ml-36">
<Select
    components={{ DropdownIndicator:() => null, IndicatorSeparator:() => null }}
    isMulti
    name="colors"
    placeholder="Assign Services"
    options={servicesNames}
    className="basic-multi-select"
    classNamePrefix="select"
  />
  </div>
  <TextField id="outlined-basic" label="Charges/Services" size='small' type="number" variant="outlined" className='w-32'
  value={serviceCharge1} autoComplete="off"
  onChange={(e)=>{setServiceCahrge1(e.target.value)}}/>
  <p className='text-xl font-semibold px-3 text-gray-500'>+</p>
  <TextField id="outlined-basic" label="Total Services" size='small' type="number" variant="outlined" className='w-32'
  value={serviceCharge2} autoComplete="off"
  onChange={(e)=>{setServiceCahrge2(e.target.value)}}/>
  <p className='text-xl font-semibold px-3 text-gray-500'>=</p>
  <TextField id="outlined-basic" label="Total Charges" size='small'type="number"  variant="outlined"className='w-32' 
  value={totalserviceCharge} autoComplete="off"/>
</div>

</div>
</div>

{/* Total bill of the patient */}

<div className='flex justify-center gap-24 my-14 '>
<Button variant="contained" color="success" className='w-[13%] relative right-1' onClick={totalPtBill}>Save</Button>
</div>

                        </div>
                </div>
            </form>
        </div>
     </div>
    
    </>
  )
}

export default BillingPatient

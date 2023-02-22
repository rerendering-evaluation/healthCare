import React from 'react'

import HospitalCards from './Patient Graphs/HospitalCards';
// import PatientVisitByDepartment from './Patient Graphs/PatientVisitByDepartment';
import PatientVisit from './Patient Graphs/PatientVisit';
import PatientVisitByGender from './Patient Graphs/PatientVisitByGender';
import AdmissionBedRates from './Patient Graphs/AdmissionBedRates';
import GeneralPatientInfo from './Patient Graphs/GeneralPatientInfo';

function Home() {
  
 
  return (
    <>
    <div className='bg-gray-200'>
    <div className='z-30'>
<HospitalCards/>
    </div>
<PatientVisit/>
<div className='lg:flex justify-between'>
<PatientVisitByGender/>
<AdmissionBedRates/>
</div>
<GeneralPatientInfo/>
{/* <TreatmentCostByAge/> */}
   </div>
    </>
    
  )
}

export default Home

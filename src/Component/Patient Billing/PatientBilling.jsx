import React from 'react'
import BillingPatient from './BillingPatient'
import { ElementsContextProvider } from './PatiendBillingContextApi'

// import Home from './Home'

export default function PatientBilling() {
  return (
    <div className='w-full overflow-x-hidden'>
        <ElementsContextProvider>
            <BillingPatient/>
      </ElementsContextProvider>
    </div>
  )
}
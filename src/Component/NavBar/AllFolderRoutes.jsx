import { memo } from "react";
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes, NavLink, useLocation } from "react-router-dom";
import Dashboard from '../../Component/Dashboard/Dashboard';
import Services from '../../Component/Services/ServicesContextApi';
import DoctorServices from '../Doctor Services/DoctorServices';
import PatientBilling from '../Patient Billing/PatientBilling';
import { PtnServicesContextApi } from '../Patient Services/PtnServicesContextApi';
// import Main from '../Patient Services/me'
// import Main from '../Patient Services/Main';
// import PtnServicesContextApi from '../Patient Services/PtnServicesContextApi'
// import PatientServices from '../Services/PatientServices';
// import PortFolio from '../../Component/PortFolio/PortFolio';
// import DearInvestors from '../Dear Investors/DearInvestors';
// import TradeBook from '../Trade book/TradeBook';
// import About from '../AboutUs/About/About'
import NavBar from './NavBar';
export default memo(function AllFolderRoutes() {
  console.log(window.globalCount++);
  let location = useLocation();
  const NotFound = memo(() => {
    console.log(window.globalCount++);
    return <h1>404.. This page is not found! - {location.pathname}</h1>;
  });
  return <>
    {/* Navbar */}
    <NavBar />

    {/* ROUTES */}
    <div className='\'>

        <Routes>
            <Route path='/' element={<Dashboard />} />
            {/* <Route  path='/services' element={<Services/>}/> */}
            <Route path='/patient' element={<PtnServicesContextApi />} />
            <Route path='/doctorServices' element={<DoctorServices />} />
            <Route path='/patientBilling' element={<PatientBilling />} />
            
            {/* <Route path='/dear-investor' element={<DearInvestors/>}/> */}
            {/* <Route path='/trade-book' element={<TradeBook/>}/> */}
            {/* <Route path='/about' element={<About/>}/> */}

            {/* <Route path='EMR' element={<EMR/>}>
                <Route path='Complaints' element={<EMRComponents/>}/>
                <Route path='EMRpage' element={<EMRpage/>}/>
             </Route> */}
            <Route path='*' component={NotFound} />
        </Routes>
    </div> 
      
    </>;
});
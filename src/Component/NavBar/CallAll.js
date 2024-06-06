import { memo } from "react";
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes, NavLink, useLocation } from "react-router-dom";
import SuperMaster from "./Super Master/SuperMaster";
import Home from './Home/Home.js';
import Appointment from "./Appointment/Appointment.js";
import TryingCommon from "./Trying common/TryingCommon";
import TryingFire from "./Trying Fire/TryingFire";
import ServiceCreation from "./Service Master/ServiceCreation";
import Billing from "./Billing/Billing";
import BillingDetails from "./Billing/BillingDetails";
import AppointmentPage from "./Appointment/PaitentAppointment/AppointmentPage/AppointmentPage";
import EmployeeMaster from "./Appointment/EmployeeMaster/EmployeeMaster";
import QuestionCreation from "./Appointment/TemplateCreation/QuestionCreation/QuestionCreation";
import TemplateCreation from "./Appointment/TemplateCreation/Template Creation/TemplateCreation";
import EditTemplate from "./Appointment/TemplateCreation/Template Edit/EditTemplate";
import ViewTemplate from "./Appointment/TemplateCreation/View Template/ViewTemplate";
import AppointmentList from './Appointment/PaitentAppointment/AppointmentList/AppointmentList';
import PaymentPage from "./Billing/PaymentPage";
import EMRComponents from './EMR/EMRComponents';
import EMR from './EMR/EMR';
import EMRpage from './EMR/EMRpage';
export default memo(function CallAll() {
  console.log(window.globalCount++);
  let location = useLocation();
  const NotFound = memo(() => {
    console.log(window.globalCount++);
    return <h1>404.. This page is not found! - {location.pathname}</h1>;
  });
  return <div className="overflow-hidden font-Poppins">
    {/* <Router> */}
      <ul className="border-4 py-4 border-black flex space-x-4">
      <p className="text-xl font-semibold tracking-wide">Call All :-</p>
      
        <li className="underline underline-offset-4 decoration-4 hover:decoration-cyan-600 hover:text-lg hover:text-cyan-600">
          <NavLink to='/' className={({
          isActive
        }) => isActive ? 'text-cyan-600' : 'inactive'}>Home</NavLink></li>
        <li className="underline underline-offset-4 decoration-4 hover:decoration-cyan-600 hover:text-lg hover:text-cyan-600"><NavLink to='/Appointment' className={({
          isActive
        }) => isActive ? 'text-cyan-600' : 'inactive'}>Appointment</NavLink></li>
        <li className="underline underline-offset-4 decoration-4 hover:decoration-cyan-600 hover:text-lg hover:text-cyan-600"><NavLink to='/AppJs/ServiceCreation/' className={({
          isActive
        }) => isActive ? 'text-cyan-600' : 'inactive'}>ServiceCreation</NavLink></li>
        <li className="underline underline-offset-4 decoration-4 hover:decoration-cyan-600 hover:text-lg hover:text-cyan-600"><NavLink to='/AppJs/SuperMaster/' className={({
          isActive
        }) => isActive ? 'text-cyan-600' : 'inactive'}>SuperMaster</NavLink></li>
        <li className="underline underline-offset-4 decoration-4 hover:decoration-cyan-600 hover:text-lg hover:text-cyan-600"><NavLink to='/AppJs/TryingCommon/' className={({
          isActive
        }) => isActive ? 'text-cyan-600' : 'inactive'}>TryingCommon</NavLink></li>
        <li className="underline underline-offset-4 decoration-4 hover:decoration-cyan-600 hover:text-lg hover:text-cyan-600"><NavLink to='/AppJs/TryingFire/' className={({
          isActive
        }) => isActive ? 'text-cyan-600' : 'inactive'}>TryingFire</NavLink></li>
        <li className="underline underline-offset-4 decoration-4 hover:decoration-cyan-600 hover:text-lg hover:text-cyan-600"><NavLink to='/Billing' className={({
          isActive
        }) => isActive ? 'text-cyan-600' : 'inactive'}>Billing</NavLink></li>
        <li className="underline underline-offset-4 decoration-4 hover:decoration-cyan-600 hover:text-lg hover:text-cyan-600"><NavLink to='/EMR' className={({
          isActive
        }) => isActive ? 'text-cyan-600' : 'inactive'}>EMR</NavLink></li>
      </ul>
        <Routes>
          <Route path='/' element={<Home />} />
            <Route path='Appointment' element={<Appointment />}>
            {/* <Routes> */}
                <Route path='AppointmentList' element={<AppointmentList />} />
                <Route path='AppointmentPage' element={<AppointmentPage />} />
                <Route path='EmployeeMaster' element={<EmployeeMaster />} />
                <Route path='QuestionCreation' element={<QuestionCreation />} />
                <Route path='TemplateCreation' element={<TemplateCreation />} />
                <Route path='EditTemplate' element={<EditTemplate />} />
                <Route path='ViewTemplate' element={<ViewTemplate />} />
          {/* </Routes> */}
            </Route>
          <Route path='/AppJs/ServiceCreation' element={<ServiceCreation />} />
          <Route path='/AppJs/SuperMaster' element={<SuperMaster />} />
          <Route path='/AppJs/TryingCommon' element={<TryingCommon />} />
          <Route path='/AppJs/TryingFire' element={<TryingFire />} />
          <Route path='Billing' element={<Billing />}>
              <Route path='BillingDetails' element={<BillingDetails />} />
              <Route path='PaymentPage' element={<PaymentPage />} />
              
          </Route>
          <Route path='EMR' element={<EMR />}>
              <Route path='Complaints' element={<EMRComponents />} />
              <Route path='EMRpage' element={<EMRpage />} />
          </Route>
          <Route path='*' component={NotFound} />
        </Routes>
        {/* </Router> */}
        {/* < Home/> */}
        {/* <Appointment/> */}
        {/* <ServiceCreation/> */}
        {/* <Billing/> */}
        {/* <SuperMaster/> */}

        {/* <TryingCommon/> */}
        {/* <TryingFire/> */}




        {/* <MultiMain/> */}
        {/* <Trial2 /> */}
        {/* <Trial/>  */}
        {/* <Batch/> */}
        {/* <ClassLec/> */}
        {/* <MainForm /> */}
    </div>;
});
import { memo } from "react";
import React from 'react';
import NavScroll from './NavScroll';
const headContents = [{
  id: 1,
  head: "Home",
  routerLink: '/'
}, {
  id: 2,
  head: "Dashboard",
  routerLink: '/'
}, {
  id: 3,
  head: "Patient Services",
  routerLink: '/Patient'
}, {
  id: 4,
  head: "Doctor Services",
  routerLink: '/doctorServices'
}, {
  id: 5,
  head: "Patient Bill",
  routerLink: '/PatientBilling'
}];
export default memo(function NavBar() {
  return <div>
        <NavScroll headContents={headContents} />
    </div>;
});
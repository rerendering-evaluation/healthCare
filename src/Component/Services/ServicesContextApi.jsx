import { useRef } from "react";
import { memo } from "react";
import React, { useState } from 'react';
import { createContext } from "react";
import PatientServices from './PatientServices';
import SearchBar from './SearchBar';
export const dummydata = {
  actions: ["Edit", "Delete", "Billing"],
  result: [{
    id: 1,
    PatientNo: "77",
    PatientName: "Sham Kumar",
    MobileNo: 9960056427,
    EntryDate: '1/01/2023',
    Timing: '12:00 am ',
    Doctor: "S.P.Patil",
    DoctServices: "Pathology"
  }, {
    id: 2,
    PatientNo: "99",
    PatientName: "Rahul Patil",
    MobileNo: 9960056427,
    EntryDate: '1/01/2023',
    Timing: ' 1:00 pm',
    Doctor: "R.K.Patel",
    DoctServices: "Radiology"
  }, {
    id: 3,
    PatientNo: "10",
    PatientName: "Akash Sharma",
    MobileNo: 9960056427,
    EntryDate: '1/01/2023',
    Timing: ' 3:00 pm',
    Doctor: "Arihant Kumar",
    DoctServices: "Neurology"
  }, {
    id: 4,
    PatientNo: "98",
    PatientName: "Suraj Kumbar",
    MobileNo: 9960056427,
    EntryDate: '1/01/2023',
    Timing: '8:00 pm',
    Doctor: "Riya Joshi",
    DoctServices: "Pathology"
  }]

  //   schedule:["ScheduleChips"]
};
export const MyContext = createContext();
const ServicesContextApi = memo(function ServicesContextApi() {
  console.log(window.globalCount++);
  // Add patient

  const addPatient = React.useState({});
  const updateIndex = React.useState();
  const addIndePatient = (index, row) => {
    console.log(index, row);
    updateIndex.current = index;
    addPatient.current = {
      PatientNo: dummydata.result[index - 1].PatientNo,
      PatientName: dummydata.result[index - 1].PatientName,
      MobileNo: dummydata.result[index - 1].MobileNo,
      EntryDate: dummydata.result[index - 1].EntryDate,
      Timing: dummydata.result[index - 1].Timing,
      Doctor: dummydata.result[index - 1].Doctor,
      DoctServices: dummydata.result[index - 1].DoctServices
    };
  };

  // Table filter data
  const [data, setData] = React.useState(dummydata);
  const dataResult = React.useState(dummydata.result);
  const value = React.useState([]);
  const tableFilter = React.useState([]);
  const filterData = e => {
    if (e.target.value !== "" && e.target.value !== null) {
      value.current = value.current.value;
      let value = e.target.value;
      const filterTable = filertablefunc(value);
      let obj = {
        actions: ["Edit"],
        result: filterTable,
        schedule: ["ScheduleChips"]
      };
      setData(obj);
    } else {
      value.current = value.current.value;
      let obj = {
        actions: ["Edit"],
        result: dataResult.value,
        schedule: ["ScheduleChips"]
      };
      tableFilter.current = tableFilter.current.value;
      setData(obj);
    }
  };
  const filertablefunc = value => {
    let newData = data.result.filter(datarow => datarow.PatientName.toLowerCase().includes(value.toLowerCase()) || datarow.Doctor.toLowerCase().includes(value.toLowerCase()) || datarow.DoctServices.toLowerCase().includes(value.toLowerCase()));
    return newData;
  };

  // Delete row
  const deleteRow = index1 => {
    // const newList = dataResult.filter((li)=> li.id !== id)
    // setDataResult(newList)
    console.log(index1);
    var newArr = data.result.filter(row => row.id !== index1);
    setData(newArr);
  };
  const contextObject = {
    data,
    dataResult: dataResult.value,
    setData,
    setDataResult: v => dataResult.current = v,
    dummydata,
    value: value.value,
    setValue: v => value.current = v,
    setTableFilter: v => tableFilter.current = v,
    filterData,
    tableFilter: tableFilter.value,
    // editIndex:editIndex,
    // editObj,
    addIndePatient: addIndePatient,
    addPatient: addPatient.value,
    setAddtPatient: v => addPatient.current = v,
    setAddtPatient: v => addPatient.current = v,
    deleteRow: deleteRow,
    updateIndex: updateIndex.value

    // addName:addName,
    // passName,
  };
  return <>
    <MyContext.Provider value={contextObject}>
        
    <SearchBar data={data} />

      {data.result.length > 0 ? <>
          <PatientServices data={data} />
          </> : ''}
    </MyContext.Provider>
  
    </>;
});
export default ServicesContextApi;

// import React from "react";
// import Main from "./components/me";
// import MainTable from "./components/tableRow";
// import { createContext } from "react";

// export const GlobalContext = createContext();

// function ServicesContextApi() {
// const [data, setData] = React.useState([]);
// const [editObj,setEditObj]=React.useState({})
// const [updateIndex,setUpdateIndex]=React.useState()  

// const EditData=(index)=>{
//   setUpdateIndex(index)
//   setEditObj({
//     id:dummydata.result[index-1].id,
//     IDNo:dummydata.result[index-1].IDNo,
//     PatientName:dummydata.result[index-1].PatientName,
//     MobileNo:dummydata.result[index-1].MobileNo,
//     EntryDate:dummydata.result[index-1].EntryDate,
//     Timing:dummydata.result[index-1].Timing,
//     Doctor:dummydata.result[index-1].Doctor,
//     DoctServices:dummydata.result[index-1].DoctServices,
//   })

// }

//  const dummydata={
//     actions:["Edit","Delete","Billing"],

//       result:[
//           {
//             id:1,
//             IDNo:1,
//            PatientName:"Sham Kumar",
//            MobileNo:9960056427,
//            EntryDate:'1/01/2023',
//            Timing:'12:00 am ',
//            Doctor:"S.P.Patil",
//            DoctServices:"Pathology"
//            },
//            {
//                id:2,
//                IDNo:2,
//                PatientName:"Rahul Patil",
//                MobileNo:9960056427,
//                EntryDate:'1/01/2023',
//                Timing:' 1:00 pm',
//                Doctor:"R.K.Patel",
//                DoctServices:"Radiology"
//               },
//               {
//                id:3,
//                IDNo:3,
//                PatientName:"Akash Sharma",
//                MobileNo:9960056427,
//                EntryDate:'1/01/2023',
//                Timing:' 3:00 pm',
//                Doctor:"Arihant Kumar",
//                DoctServices:"Neurology"
//               },
//               {
//                id:4,
//                IDNo:4,
//                PatientName:"Suraj Kumbar",
//                MobileNo:9960056427,
//                EntryDate:'1/01/2023',
//                Timing:'8:00 pm',
//                Doctor:"Riya Joshi",
//                DoctServices:"Pathology"
//               },    
//         ],

//      //   schedule:["ScheduleChips"]
//   }

//   return (
//     <GlobalContext.Provider
//       value={{
//         data,setData,
//         Data: DataTable.result,
//         EditData:EditData,
//         editObj:editObj,
//         updateIndex:updateIndex
//       }}
//     >
//       <div>
//         <div className="mt-6">
//           <Main />
//         </div>
//         <div className="mt-5">
//           <MainTable sx={{ marginTop:2 }} data={DataTable} />
//         </div>
//       </div>

//     </GlobalContext.Provider>
//   );
// }

// export default ServicesContextApi;
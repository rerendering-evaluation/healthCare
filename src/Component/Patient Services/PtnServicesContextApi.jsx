
import React from "react";
import Main from "./Main";

import { createContext } from "react";
import { MainTable } from "./MainTable";
// import PatientServices from "./components/tableRow";


export const GlobalContext = createContext();

export function PtnServicesContextApi() {
  const [data, setData] = React.useState([]);
  const [editObj,setEditObj]=React.useState({})
  const [updateIndex,setUpdateIndex]=React.useState()  

  const EditData=(index)=>{
    setUpdateIndex(index)
    setEditObj({
      id:dummydata.result[index-1].id,
      IDNo:dummydata.result[index-1].IDNo,
      PatientName:dummydata.result[index-1].PatientName,
      MobileNo:dummydata.result[index-1].MobileNo,
      EntryDate:dummydata.result[index-1].EntryDate,
      Timing:dummydata.result[index-1].Timing,
      Doctor:dummydata.result[index-1].Doctor,
      DoctServices:dummydata.result[index-1].DoctServices,
    })

  }
// Passing services 
const [services,setServices]=React.useState()


  const dummydata = {
    result:[
      {
        id:1,
        IDNo:98,
       PatientName:"Sham Kumar",
       MobileNo:9960056427,
       EntryDate:'1/01/2023',
       Timing:'12:00 am ',
       Doctor:"S.P.Patil",
       DoctServices:"Pathology"
       },
       {
           id:2,
           IDNo:99,
           PatientName:"Rahul Patil",
           MobileNo:9960056427,
           EntryDate:'1/01/2023',
           Timing:' 1:00 pm',
           Doctor:"R.K.Patel",
           DoctServices:"Radiology"
          },
          {
           id:3,
           IDNo:87,
           PatientName:"Akash Sharma",
           MobileNo:9960056427,
           EntryDate:'1/01/2023',
           Timing:' 3:00 pm',
           Doctor:"Arihant Kumar",
           DoctServices:"Neurology"
          },
          {
           id:4,
           IDNo:66,
           PatientName:"Suraj Kumbar",
           MobileNo:9960056427,
           EntryDate:'1/01/2023',
           Timing:'8:00 pm',
           Doctor:"Riya Joshi",
           DoctServices:"Pathology"
          },    
    ],
  };

  

  return (
    <GlobalContext.Provider
      value={{
        data,setData,
        Data: dummydata.result,
        EditData:EditData,
        editObj:editObj,
        updateIndex:updateIndex,
        services,
        setServices:setServices
      }}
    >
      <div>
        <div className="mt-12 ">
          <Main />
        </div>
        <div className="mt-5">
          <MainTable sx={{ marginTop:2 }} data={dummydata} />
        </div>
      </div>
      
    </GlobalContext.Provider>
  );
}



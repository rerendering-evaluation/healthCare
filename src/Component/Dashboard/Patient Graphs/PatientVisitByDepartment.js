import { memo } from "react";
import React from 'react';
import { PieChart, Pie, ResponsiveContainer, Cell } from 'recharts';
import { GiPlainSquare } from "react-icons/gi";
const data = [{
  name: "Pathology",
  value: 400
}, {
  name: "Radiology",
  value: 300
}, {
  name: "Neurology",
  value: 300
}, {
  name: "Cardiology",
  value: 200
}];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  return <text x={x} y={y} fill="white" textAnchor={x > cx ? "start" : "end"} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>;
};
const PatientVisitByDepartment = memo(function PatientVisitByDepartment() {
  return <>
      <div className='gap-10 lg:-mt-2 mx-5 lg:mx-0 relative lg:right-3'>
        <div style={{
        width: "100%"
      }} className='bg-white rounded shadow-lg'>
            <h1 className='mt-3 pt-3 text-xl font-bold px-5'>Patient Visit By Department</h1>

            <div className='mt-3 flex justify-center gap-8'>
              <div>
              <h1 className='flex items-center gap-3'><GiPlainSquare className='text-blue-600' /> Pathology</h1>
            <h1 className='flex items-center gap-3'><GiPlainSquare className='text-orange-600' /> Radiology</h1>
              </div>
          <div>
            <h1 className='flex items-center gap-3'><GiPlainSquare className='text-green-600' />Neurology </h1>
            <h1 className='flex items-center gap-3'><GiPlainSquare className='text-yellow-600' /> Cardiology</h1>
          </div>

            </div>
            <div className='relative lg:-top-14 -top-10 right-9 lg:right-0'>
            <PieChart width={400} height={280}>
      <Pie data={data} cx={200} cy={170} labelLine={false} label={renderCustomizedLabel} outerRadius={100} fill="#8884d8" dataKey="value">
        {data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}
      </Pie>
    </PieChart>
 
            </div>
  
      
        </div>
        <div>
            {/* <AdmissionBedRates/> */}
        </div>
        <div>
            {/* <TreatmentCostByAge/> */}
        </div>
      </div>
    </>;
});
export default PatientVisitByDepartment;
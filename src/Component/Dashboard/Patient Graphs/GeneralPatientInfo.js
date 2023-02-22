import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.cyan,
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const Patients =[
    {
        srno:1,
        name:"Amol Mane",
        age:46,
        mobile:9960060327,
        booldGr:"A +ve",
        gender:"Male",
        bmw:"60 kg"
    },
    {
        srno:2,
        name:"Priya Patil",
        age:38,
        mobile:8308733051,
        booldGr:"O +ve",
        gender:"Female",
        bmw:"74 kg"
    },
    {
        srno:3,
        name:"Sanket Ware",
        age:27,
        mobile:9503201519,
        booldGr:"B -ve",
        gender:"Male",
        bmw:"65 kg"
    },
    {
        srno:4,
        name:"Ram Rumar",
        age:58,
        mobile:9521379748,
        booldGr:"A -ve",
        gender:"Male",
        bmw:"59 kg"
    },
    {
        srno:5,
        name:"Shanta Londe",
        age:64,
        mobile:8308733051,
        booldGr:"A +ve",
        gender:"Female",
        bmw:"43 Kg"
    },
    {
        srno:6,
        name:"Vijay Sharma",
        age:30,
        mobile:9960060327,
        booldGr:"AB +ve",
        gender:"Male",
        bmw:"67 kg"
    },
]

export default function GeneralPatientInfo() {
  return (
    <>
    <div className='lg:mx-20 py-10 mx-4 '>
        <div className='bg-white p-5 rounded-xl shadow-lg'>
        <h1 className='pb-5 lg:text-xl font-bold mx-5'>Patient General Information</h1>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth:{lg:700,sm:300}, }} aria-label="customized table">
        <TableHead className='bg-blue-300'>
          <TableRow>
            <StyledTableCell>Sr.No</StyledTableCell>
            <StyledTableCell align="center">Name</StyledTableCell>
            <StyledTableCell align="right">Age</StyledTableCell>
            <StyledTableCell align="right">Mobile No</StyledTableCell>
            <StyledTableCell align="right">Blood Group</StyledTableCell>
            <StyledTableCell align="right">Gender</StyledTableCell>
            <StyledTableCell align="right">BMW</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Patients.map((patient,index) => (
            <StyledTableRow key={index}>
                <StyledTableCell >{patient.srno}</StyledTableCell>
              <StyledTableCell component="th" scope="row" align="center">
                {patient.name}
              </StyledTableCell>
              <StyledTableCell align="right">{patient.age}</StyledTableCell>
              <StyledTableCell align="right">{patient.mobile}</StyledTableCell>
              <StyledTableCell align="right">{patient.booldGr}</StyledTableCell>
              <StyledTableCell align="right">{patient.gender}</StyledTableCell>
              <StyledTableCell align="right">{patient.bmw}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    
    </div>
    </>
    
  );
}
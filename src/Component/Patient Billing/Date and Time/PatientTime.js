import { memo } from "react";
import React from 'react';
import { TimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AiOutlineClockCircle } from "react-icons/ai";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { FormControl, FormHelperText, TextField, Checkbox, FormControlLabel, Grid } from '@mui/material';
export const PatientTime = memo(function PatientTime() {
  // const [dateValue1, setDateValue1] = React.useState(new Date());
  // const [dateValue2, setDateValue2] = React.useState(new Date());
  const [dateValue1, setDateValue1] = React.useState(null);
  const [dateValue2, setDateValue2] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const dateIsValid = dateStr => {
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    if (dateStr.match(regex) === null) {
      return false;
    }
    const date = new Date(dateStr);
    const timestamp = date.getTime();
    if (typeof timestamp !== 'number' || Number.isNaN(timestamp)) {
      return false;
    }
    return date.toISOString().startsWith(dateStr);
  };
  const validateDate = value => {
    let dobGivenYear = value.getFullYear();
    let dobGivenMonth = String(value.getMonth() + 1).padStart(2, "0");
    let dobGivenDay = String(value.getDate()).padStart(2, "0");
    let fullDOB = [dobGivenYear, dobGivenMonth, dobGivenDay].join("-");
    let isValidDate = dateIsValid(fullDOB);
    return isValidDate;
  };
  const setdateFormat = value => {
    let dobGivenYear = value.getFullYear();
    let dobGivenMonth = String(value.getMonth() + 1).padStart(2, "0");
    let dobGivenDay = String(value.getDate()).padStart(2, "0");
    let fullDOB = [dobGivenYear, dobGivenMonth, dobGivenDay].join("-");
    return fullDOB;
  };
  return <>
       <div className='md:mx-16 mx-3 md:w-4/12 overflow-hidden py-3 '>
   <Grid item lg={6} sm={8} className="flex space-x-2 mt-1 gap-8">
                    <FormControl sx={{
          backgroundColor: 'white'
        }} fullWidth size="small">
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <TimePicker
            // disablePast
            // maxDate={dateValue2}
            open={open} onOpen={() => setOpen(true)} onClose={() => setOpen(false)} minTime={dateValue1} label="Admission Time" value={dateValue1} inputProps={{
              readOnly: true
            }} onChange={value => {
              let isValidDate = validateDate(value);
              if (isValidDate) {
                setDateValue1(value);
                console.log(value);
                if (dateValue2 > value) {
                  setDateValue2(value);
                  console.log(value);
                }
              }
            }} renderInput={props => <TextField {...props} onClick={e => setOpen(true)} size="small" sx={{
              svg: {
                color: "#0B83A5"
              }
            }} />} name="startTime" defaultValue=""
            // inputFormat="dd/MM/yyyy"
            />
                        </LocalizationProvider>

                        <FormHelperText style={{
            color: "#d32f2f"
          }}>
                            {/* {errors.dob?.message} */}
                        </FormHelperText>
                    </FormControl>

                    <FormControl sx={{
          backgroundColor: 'white'
        }} fullWidth size="small">
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <TimePicker open={open1} onOpen={() => setOpen1(true)} onClose={() => setOpen1(false)} minTime={dateValue1} label="Discharge Time" value={dateValue2} inputProps={{
              readOnly: true
            }} onChange={value => {
              let isValidDate = validateDate(value);
              if (isValidDate) {
                console.log("toDate", value);
                setDateValue2(value);
              }
            }} renderInput={props => <TextField {...props} onClick={e => setOpen1(true)} size="small" sx={{
              svg: {
                color: "#0B83A5"
              }
            }} />} name="endTime" defaultValue="" />
                        </LocalizationProvider>

                        <FormHelperText style={{
            color: "#d32f2f"
          }}>
                            {/* {errors.dob?.message} */}
                        </FormHelperText>
                    </FormControl>
                </Grid>
   </div>
    </>;
});
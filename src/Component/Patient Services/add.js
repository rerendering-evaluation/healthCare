import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";
import { TextField } from "@mui/material";
import { GlobalContext } from "./PtnServicesContextApi";
import { useContext } from "react";
import { useForm } from "react-hook-form";

const theme = createTheme({});
export default function AddModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { setData } = useContext(GlobalContext);
  const { data } = useContext(GlobalContext);
  const { register, handleSubmit,reset} = useForm({});
  const onSubmit = (addData) => {
   

     const addObj={
    IDNo:addData.IDNo,
    PatientName:addData.PatientName,
    MobileNo:addData.MobileNo,
    EntryDate:addData.EntryDate,
    Timing:addData.Timing,
    Doctor:addData.Doctor,
    DoctServices:addData.DoctServices
   }

    setData([...data, addObj]);
    setOpen(false);
  };

  const resetButton=()=>{
    reset()
   }
   

  return (
    <div>
      <div className=" ml-1 border-black  bg-neutral-300 rounded-lg flex text-cyan-400 justify-end mb-5">
        <Button onClick={handleOpen} variant="contained" >+ New Patient</Button>
      </div>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
          <div>
            <fieldset className="border-slate-800 lg:w-96 w-60 lg:ml-36 mt-52 px-4 border-2 rounded-lg bg-white">
              <div>
<h1 className="lg:mx-20  relative top-8 text-xl text-gray-600">General Patient Info</h1>
              
              <Button
                onClick={handleClose}
                sx={{ marginLeft:{sm:100,lg:135}, color: "error.main" }}
              >
                <CloseIcon  className="border-red-700 border rounded m-2 text-xl"/>
              </Button>
              {/* <legend class=" mt-10 text-black text-xl">Add Patient</legend> */}
              </div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Box>
      
                   <div className='mt-3 lg:ml-20  font-semibold text-gray-700 lg:flex lg:gap-20 gap-4 grid grid-cols-1'>
    <TextField id="outlined-basic" variant="outlined" label="Patient ID" size="small" className='lg:w-60 w-64' type="number" {...register("IDNo.")}/>
    <TextField id="outlined-basic" variant="outlined" label="Patient Name" size="small" className='lg:w-60 w-64' {...register("PatientName")}/>
    <TextField id="outlined-basic" variant="outlined" label="Entry Timing" type="text" size="small" className='lg:w-60 w-64' {...register("Timing")}/>
    </div>

<div className='lg:mx-3 lg:mt-10 mt-3 lg:ml-20 lg:flex lg:gap-20 gap-4 grid grid-cols-1'>
<TextField id="outlined-basic" variant="outlined" label="Mobile No." type="number" size="small" className='lg:w-60 w-64' {...register("MobileNo.")}/>
<TextField id="outlined-basic" variant="outlined" label="Entry Date" type="text" size="small" className='lg:w-60 w-64' {...register("EntryDate")}/>

</div>
<div className='lg:mx-3 lg:mt-10 mt-3 lg:ml-20 lg:flex lg:gap-20 gap-4 grid grid-cols-1 '>
<TextField id="outlined-basic" variant="outlined" label="Doctor Assigned" size="small" className='lg:w-60 w-64' {...register("Doctor")}/>
<TextField id="outlined-basic" variant="outlined" label="Doctor Services" size="small" className='lg:w-60 w-64' {...register("DoctServices")}/>
</div>
                  <Box className=" ">
                    <div className="lg:ml-10 pb-4 space-x-4 mt-5 mb-5 mr-6 flex lg:justify-end ">
                      <Button
                     
                        sx={{ border: 1, color: "red", }}
                        type="button"
                        onClick={resetButton}
                      >
                        Reset
                      </Button>
                      <ThemeProvider theme={theme}>
                        <Button
                        variant="contained"
                        color="success"
                          type="submit"
                          sx={{ color: "white", }}
                        >
                         Add
                        </Button>
                      </ThemeProvider>
                    </div>
                  </Box>
                </Box>
              </form>
            </fieldset>
          </div>
        </Box>
      </Modal>
    </div>
  )
}

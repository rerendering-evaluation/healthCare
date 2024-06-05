import { memo } from "react";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { TextField } from "@mui/material";
import { MdModeEditOutline } from "react-icons/md";
import { GlobalContext } from "./PtnServicesContextApi";
import { useContext } from "react";
import { useForm } from "react-hook-form";

// Modal  Style 
const style = {
  position: "absolute",
  top: "40%",
  left: "50%",
  transform: "translate(-50%, -50%)"
};
const theme = createTheme({});
export default memo(function EditModal() {
  const [open, setOpen] = React.useState(false);
  // modal open
  const handleOpen = () => setOpen(true);
  // modal close
  const handleClose = () => setOpen(false);
  //  Edit Table row 
  const {
    editObj
  } = useContext(GlobalContext);
  const {
    data
  } = useContext(GlobalContext);
  const {
    setData
  } = useContext(GlobalContext);
  const {
    updateIndex
  } = useContext(GlobalContext);
  const {
    register,
    handleSubmit
  } = useForm();
  const onSubmit = addData => {
    const PatientName = addData.PatientName;
    const Doctor = addData.Doctor;
    const DoctServices = addData.DoctServices;

    // Checkbox Active and inActive
    const updateObj = {
      IDNo: editObj.IDNo,
      PatientName: PatientName,
      MobileNo: editObj.MobileNo,
      EntryDate: editObj.EntryDate,
      Timing: editObj.Timing,
      Doctor: Doctor,
      DoctServices: DoctServices
    };
    const temp = [...data];
    temp.splice(updateIndex - 1, 1, updateObj);
    setData(temp);
    setOpen(false);
  };
  return <div>
      <ThemeProvider theme={theme}>
        <Button onClick={handleOpen}>
          <MdModeEditOutline className="text-xl" />
        </Button>
      </ThemeProvider>

      <Modal open={open} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description" fullWidth maxWidth="sm">
        <Box sx={style} className="lg:w-[85%] w-[0%] -ml-96 mx-10 lg:mx-0 lg:ml-0">
          <fieldset className="border-slate-800 lg:ml-10 rounded-lg mt-40  px-8 border-2 bg-white ">
          <h1 className="lg:mx-20 relative top-8 lg:text-xl ml-20 lg:ml-20 text-gray-600">Update Patient Info</h1>
            <Button onClick={handleClose} sx={{
            marginLeft: 135,
            color: "error.main"
          }}>
              <CloseIcon className="border-red-700 border rounded m-2 text-xl" />
            </Button>
            {/* <legend class=" mt-10 text-black text-xl">Add Sub-Group</legend> */}
            <form onSubmit={handleSubmit(onSubmit)}>
              <Box className="lg:flex gap-10 lg:ml-20 ml-12 mt-9 space-x-2 space-y-9 lg:space-y-0">
                <Box className="ml-2 lg:ml-0">
                  <span>
                    <TextField label="PatientName*" defaultValue={editObj.PatientName} sx={{
                    width: 200
                  }} size="small"
                  // disabled
                  {...register("PatientName")} />
                  </span>
                </Box>
                <Box>
                  <span className="">
                    <TextField label="Assign Doctor *" defaultValue={editObj.Doctor} size="small" sx={{
                    width: 200
                  }} {...register("Doctor")} />
                  </span>
                </Box>
                <Box>
                  <span className="justify-self-center">
                    <FormControl>
                        <InputLabel>
                          Assign Services *
                        </InputLabel>
                        <Select size="small" label="DoctServices" defaultValue={editObj.DoctServices} sx={{
                      width: 200
                    }} {...register("DoctServices")}>
                          <MenuItem value={"Pathalogy"}>Pathology</MenuItem>
                          <MenuItem value={"Radiology"}>Radiology</MenuItem>
                          <MenuItem value={"OPD Charges"}>OPD Charges</MenuItem>
                        </Select>
                      </FormControl>
                  </span>
                </Box>

                <Box>
                  <div className=" mt-20 flex gap-10 mb-5 space-x-2 lg:ml-20">
                    <span>
                      <Button onClick={handleClose} sx={{
                      color: "error.main",
                      border: 1
                    }}>
                        Cancel
                      </Button>
                    </span>
                    <span>
                      <ThemeProvider theme={theme}>
                        <Button variant="contained" color="success" type="submit">
                          Update
                        </Button>
                      </ThemeProvider>
                    </span>
                  </div>
                </Box>
              </Box>
            </form>
          </fieldset>
        </Box>
      </Modal>
    </div>;
});
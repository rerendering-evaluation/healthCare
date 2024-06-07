import { useRef } from "react";
import * as React from "react";
import { Button, Box } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { GlobalContext } from "./PtnServicesContextApi";
import { useContext } from "react";
import EditModal from "./EditModal";
import { MdDelete } from "react-icons/md";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
// import DoctorServices from "../Doctor Services/DoctorServices";
// import { FaHospitalUser } from "react-icons/fa";
// import DoctorList from "../Doctor Services/DoctorList";
// import Services from './Services'

export function MainTable(props) {
  const [page, setPage] = React.useState(2);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const {
    data
  } = useContext(GlobalContext);
  const {
    setData
  } = useContext(GlobalContext);
  const {
    EditData
  } = useContext(GlobalContext);
  const {
    services,
    setServices
  } = useContext(GlobalContext);
  const index1 = React.useState(0);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 5));
    setPage(5);
  };
  const deleteRow = () => {
    console.log(index1.current);
    var newArr = data.filter(table => table.id !== index1.current);
    setData(newArr);
  };

  //  delete row with bug

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = index1 => {
    index1.current = index1;
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return <div className="grid w-[100%]">
    <Box>
    <Paper>
      <div>
        <TableContainer>
        <TablePagination rowsPerPageOptions={[3, 3, 25]} component="div" count={props.data.result.length} rowsPerPage={rowsPerPage} page={page} onPageChange={handleChangePage} onRowsPerPageChange={handleChangeRowsPerPage} />
          <Table sx={{
              marginTop: 2
            }}>
            <TableHead>
            <TableRow sx={{
                  bgcolor: "text.secondary"
                }}>
                <TableCell align="center">Sr.No</TableCell>
                <TableCell align="center"> Patient Name</TableCell>
                <TableCell align="center">Mobile No</TableCell>
                <TableCell align="center"> Entry Date</TableCell>
                <TableCell align="center">Timing</TableCell>
                <TableCell align="center">Doctor</TableCell>
                <TableCell align="center">Doctor Service</TableCell>
                <TableCell align="center">Actions</TableCell>
                
              </TableRow>
            </TableHead>
            <TableBody>
              {(rowsPerPage > 1 ? data.slice() : data).map((table, index) => <TableRow key={index}>
                  <TableCell align="center">{table.IDNo} </TableCell>
                  <TableCell align="center">{table.PatientName}</TableCell>
                  <TableCell align="center">
                    {table.MobileNo}
                  </TableCell>
                  <TableCell align="center">{table.EntryDate}</TableCell>
                  {/* <TableCell align="center">
                    {" "}
                    {table.status === 1 ? (
                      <span>
                        <p>Active</p>
                      </span>
                    ) : (
                      <span>
                        <p>Inactive</p>
                      </span>
                    )}
                   </TableCell> */}
                  <TableCell align="center">{table.Timing}</TableCell>
                  <TableCell align="center">{table.Doctor}</TableCell>
                  <TableCell align="center">{table.DoctServices}</TableCell>

                  <TableCell align="center">
                    <Button onClick={() => EditData(table.id)}>
                      <EditModal />
                    </Button>
                    <Button onClick={() => handleClickOpen(table.id)}>
                      <MdDelete className="text-xl text-red-500" /></Button>
                  </TableCell>

                    <div>
                      <Dialog sx={{}} open={open} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
                        <DialogTitle>
                          {"ARE YOU SURE DELETE ROW"}
                        </DialogTitle>
                        <Button sx={{
                        color: "error.main"
                      }} onClick={() => deleteRow(table.id)}> 
                        <button onClick={handleClose}>DELETE</button>
                        </Button>
                        <Button onClick={handleClose}>CLOSE</Button>
                      </Dialog>
                    </div>
                </TableRow>)}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </Paper>
    </Box>

  </div>;
}
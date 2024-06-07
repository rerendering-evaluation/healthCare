import { useRef } from "react";
import * as React from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import { TableRow, Button } from "@mui/material";
import TableSortLabel from "@mui/material/TableSortLabel";
import Paper from "@mui/material/Paper";
import { visuallyHidden } from "@mui/utils";
import EditPatientSchedule from "./EditPatientSchedule";
// import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";

import { useContext } from "react";
import { MyContext } from "./ServicesContextApi";
// import EditEmployee from './SchedulePopup/EditEmployee'
// import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { Schedule } from "@mui/icons-material";
import { MdDelete } from "react-icons/md";

//set descending sort order
function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

//set sort desc
function getComparator(order, orderBy) {
  return order === "desc" ? (a, b) => descendingComparator(a, b, orderBy) : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}
export default function PatientServices(props) {
  const contextData = useContext(MyContext);
  const {
    deleteRow
  } = contextData;
  const {
    addIndePatient
  } = contextData;

  //state varibale for the table
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState();
  const [page, setPage] = React.useState(0);
  const open = React.useState();
  const [rowsPerPage, setRowsPerPage] = React.useState(25);

  //actions
  const schedule = React.useState(false);
  const [deleteAction, setDeleteAction] = React.useState(true);

  // Patient Billing

  // const [delete, setDelete] = React.useState(true);
  // const [scheduleChips, setScheduleChips] = React.useState(true);

  // const [confirmAction, setconfirmAction] = React.useState(false);
  // const [rescheduleAction, setrescheduleAction] = React.useState(false);
  // const [cancelAction, setcancelAction] = React.useState(false);

  //by default asc order
  const handleSortRequest = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };
  const createSortHandler = property => event => {
    handleSortRequest(event, property);
  };
  const removeHeaders = (headers, fieldToRemove) => {
    return headers.filter(v => {
      return !fieldToRemove.includes(v);
    });
  };

  //set rows object to table
  const allHeaders = Object.keys(props.data.result[0]);
  const headers = removeHeaders(allHeaders, ["id"]);
  // headers.unshift("#");
  // headers[0] = "#";

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  //5,10.25 change as per the selection
  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 100));
    setPage(1);
  };
  React.useEffect(() => {
    props.data.actions.forEach(action => {
      if (schedule.current === "Schedule") {
        schedule.current = true;
      }
      if (deleteAction === "Delete") {
        setDeleteAction(false);
      }
    });
  }, []);

  //table start
  return <>
      <div className="grid w-[100%]">
        <Box sx={{
        width: "100%",
        overflow: "hidden"
      }}>
          <Paper sx={{
          width: "100%",
          mb: 2
        }}>
            <TableContainer sx={{
            marginTop: "0.8rem"
          }} className="rounded ">

              <TablePagination rowsPerPageOptions={[3, 3, 25]} component="div" count={props.data.result.length} rowsPerPage={rowsPerPage} page={page} onPageChange={handlePageChange} onRowsPerPageChange={handleChangeRowsPerPage} />

              <Table>
                <TableHead key="thead" className="bg-gray-300">
                  <TableRow>
                    {/* heading of table */}
                    
                    {headers.map((header, index) => <TableCell sortDirection={orderBy === header ? order : false} className="whitespace-nowrap" key={index} index={index}>
                        <TableSortLabel key="tTable" active={false} //arrow for sorting
                    direction={orderBy === header ? order : "asc"} onClick={createSortHandler(header)}>
                          <span className="text-gray-600 font-bold">
                            {header}
                          </span>
                          {orderBy === header ? <Box component="span" sx={visuallyHidden}>
                              {order === "desc" ? "sorted descending" : "sorted ascending"}
                            </Box> : null}
                        </TableSortLabel>
                      </TableCell>)}

                  <TableCell>
                      <span className="text-gray-600 font-bold whitespace-nowrap">
                        Actions
                      </span>
                    </TableCell>
                  
                  </TableRow>
                </TableHead>

                <TableBody key="tbody">
                  {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                   rows.slice().sort(getComparator(order, orderBy)) */}
                  {stableSort(props.data.result, getComparator(order, orderBy)).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) //splice use for show rows upto 5 when splice is not
                // use that time show all rows
                .map((row, index) => {
                  return <TableRow key={index.id} className=" ">
                          {headers && headers.map((header, i) => <TableCell className="whitespace-nowrap" key={i}
                    // onClick={() => {
                    //   props.displayView(row, index);
                    // }}
                    >
                                {row[header]}

                              </TableCell>)}
                    {props.data.actions.length > 0 ? <TableCell className="px-4 py-1 flex whitespace-nowrap leading-normal ">
                              <div className="flex gap-5 items-center">
                                {/* {displayActions(props.data.actions)} */}

                                {Schedule ? <a href="##" value="click" className="text-blue-500 mr-1 ">
                                    {/* eidttext - toggle to button edit to save */}
                                    <Button onClick={() => addIndePatient(row.id, index)}> 
                                    <EditPatientSchedule />
                                    </Button>


                                  </a> : ""}
  {deleteAction ? <a href="##" value="click" className="text-red-500 mr-3">
                                    <MdDelete className="text-2xl " onClick={() => deleteRow(index, row.id)} />
                                  </a> : ""}


                              </div>
                            </TableCell> : ""}

                    
                        </TableRow>;
                })}
                </TableBody>
              </Table>
            </TableContainer>

          </Paper>
        </Box>
      </div>
      
    </>;
}
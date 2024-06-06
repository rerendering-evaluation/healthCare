import { memo } from "react";
import React from "react";
import { Grid } from "@mui/material";
import Search from "./Select";
import { Container } from "@mui/system";
import Add from "./add";
const Main = memo(function Main() {
  console.log(window.globalCount++);
  return <div>

      <Container>
        <Grid container direction="row mt-6">
          <div className=" lg:text-xl text-center flex ">Patient Name</div>
          <div className="mr-10">
            <Search />
          </div>
          <Add />
        </Grid>
      </Container>
    </div>;
});
export default Main;
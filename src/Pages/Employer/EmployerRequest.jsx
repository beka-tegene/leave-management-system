import { Stack, Typography } from "@mui/material";
import React from "react";
import Dashboard from "../../Components/Employer/Dashboard";
import NewRequest from "../../Components/Employer/NewRequest";
import Navbar from "../../Components/Employer/Navbar";

const EmployerRequest = () => {
  return (
    <Stack direction={"row"}>
      <Dashboard />
      <Stack width={"100%"}>
        <Navbar />
        <Typography fontSize={"12px"}>
          <b style={{ color: "red", fontSize: "15px" }}>Note :</b> hello world
          this text you must read it
        </Typography>

        <NewRequest />
      </Stack>
    </Stack>
  );
};

export default EmployerRequest;

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
          <b style={{ color: "red", fontSize: "15px" }}>Note :</b>{" "}
          <ol style={{ paddingLeft: 15 }}>
            <li style={{ textDecoration: "dotted" }}>
              If you have not been employed with this company for at least one
              year, you must request one day off per month.
            </li>
            <li style={{ textDecoration: "dotted" }}>
              You must UPDATE your profile before sending a request.{" "}
            </li>
          </ol>
        </Typography>

        <NewRequest />
      </Stack>
    </Stack>
  );
};

export default EmployerRequest;

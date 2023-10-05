import React from "react";
import ChangePassword from "../../Components/Employer/ChangePassword";
import Navbar from "../../Components/Employer/Navbar";
import { Stack } from "@mui/material";
import Dashboard from "../../Components/Employer/Dashboard";

const EmployerChangePassword = () => {
  return (
    <Stack direction={"row"}>
      <Dashboard />
      <Stack width={"100%"}>
        <Navbar />
        <ChangePassword />
      </Stack>
    </Stack>
  );
};

export default EmployerChangePassword;

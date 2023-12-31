import { Stack } from "@mui/material";
import React from "react";
import Dashboard from "../../Components/Employer/Dashboard";
import AttendanceSystem from "../../Components/Employer/AttendanceSystem";
import Navbar from "../../Components/Employer/Navbar";

const EmployerDashboard = () => {
  return (
    <Stack direction={"row"}>
      <Dashboard />
      <Stack width={"100%"}>
        <Navbar />
        <AttendanceSystem />
      </Stack>
    </Stack>
  );
};

export default EmployerDashboard;

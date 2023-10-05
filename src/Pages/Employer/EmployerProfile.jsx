import React from "react";
import Profile from "../../Components/Employer/Profile";
import { Stack } from "@mui/material";
import Dashboard from "../../Components/Employer/Dashboard";
import Navbar from "../../Components/Employer/Navbar";

const EmployerProfile = () => {
  return (
    <Stack direction={"row"}>
      <Dashboard />
      <Stack width={"100%"}>
        <Navbar />
        <Profile />
      </Stack>
    </Stack>
  );
};

export default EmployerProfile;

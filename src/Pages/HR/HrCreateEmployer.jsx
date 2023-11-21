import { Stack } from "@mui/material";
import React from "react";
import HrDashboard from "../../Components/HR/HrDashboard";
import NavbarHr from "../../Components/HR/NavbarHr";
import CreateEmployer from "../../Components/HR/CreateEmployer";

const HrCreateEmployer = () => {
  return (
    <Stack direction={"row"}>
      <HrDashboard />
      <Stack width={"100%"}>
        <NavbarHr />
        <CreateEmployer />
      </Stack>
    </Stack>
  );
};

export default HrCreateEmployer;

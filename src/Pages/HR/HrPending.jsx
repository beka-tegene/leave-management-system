import { Stack } from "@mui/material";
import React from "react";
import HrDashboard from "../../Components/HR/HrDashboard";
import Pending from "../../Components/HR/Pending";
import NavbarHr from "../../Components/HR/NavbarHr";

const HrPending = () => {
  return (
    <Stack direction={"row"}>
      <HrDashboard />
      <Stack width={"85%"}>
        <NavbarHr />
        <Pending />
      </Stack>
    </Stack>
  );
};

export default HrPending;

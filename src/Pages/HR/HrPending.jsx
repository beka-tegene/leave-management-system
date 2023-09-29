import { Stack } from "@mui/material";
import React from "react";
import HrDashboard from "../../Components/HR/HrDashboard";
import Pending from "../../Components/HR/Pending";

const HrPending = () => {
  return (
    <Stack direction={"row"}>
      <HrDashboard />
      <Pending />
    </Stack>
  );
};

export default HrPending;

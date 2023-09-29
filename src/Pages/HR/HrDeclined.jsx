import { Stack } from "@mui/material";
import React from "react";
import HrDashboard from "../../Components/HR/HrDashboard";
import Declined from "../../Components/HR/Declined";

const HrDeclined = () => {
  return (
    <Stack direction={"row"}>
      <HrDashboard />
      <Declined />
    </Stack>
  );
};

export default HrDeclined;

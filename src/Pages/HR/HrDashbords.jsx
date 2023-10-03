import React from "react";
import HrDashboard from "../../Components/HR/HrDashboard";
import HrHome from "../../Components/HR/HrHome";
import { Stack } from "@mui/material";

const HrDashbords = () => {
  console.log("hello");
  return (
    <Stack direction={"row"}>
      <HrDashboard />
      <HrHome />
    </Stack>
  );
};

export default HrDashbords;

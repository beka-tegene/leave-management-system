import React from "react";
import HrDashboard from "../../Components/HR/HrDashboard";
import HrHome from "../../Components/HR/HrHome";
import { Stack } from "@mui/material";
import NavbarHr from "../../Components/HR/NavbarHr";

const HrDashbords = () => {
  console.log("hello");
  return (
    <Stack direction={"row"}>
      <HrDashboard />
      <Stack width={"100%"}>
        <NavbarHr />
        <HrHome />
      </Stack>
    </Stack>
  );
};

export default HrDashbords;

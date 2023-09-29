import { Stack } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Stack
      direction={"row"}
      sx={{
        position: "fixed",
        bottom: 0,
        p: 2,
        background: "#272727",
        width: "100%",
        color: "#FFF",
        fontSize:"14px"
      }}
      alignItems={"center"}
      justifyContent={"center"}
    >
      Copyright© 2023 Dan Energy S.C. | All Rights Reserved | Designed by
      Digital Economy team
    </Stack>
  );
};

export default Footer;

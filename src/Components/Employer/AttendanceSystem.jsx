import {
  Card,
  CardActionArea,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import jwt_decode from "jwt-decode";
const AttendanceSystem = () => {
  const token = window.localStorage.getItem("token");
  const decodedToken = jwt_decode(token);
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"center"}
      flexWrap={"wrap"}
      sx={{ width: "84%", background: "#171717" }}
      gap={3}
    >
      <Card
        sx={{ minWidth: "45%", height: "45dvh", backgroundColor: "#FFA500" }}
      >
        <CardActionArea
          sx={{ width: "100%", height: "100%", textAlign: "center" }}
        >
          <CardContent>
            <Typography>Pending Request</Typography>
            <Typography fontSize={"30px"} fontWeight={"bold"}>
              0
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card
        sx={{ minWidth: "45%", height: "45dvh", backgroundColor: "#008000" }}
      >
        <CardActionArea
          sx={{ width: "100%", height: "100%", textAlign: "center" }}
        >
          <CardContent>
            <Typography>Approved Request</Typography>
            <Typography fontSize={"30px"} fontWeight={"bold"}>
              0
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card
        sx={{ minWidth: "45%", height: "45dvh", backgroundColor: "#FF0000" }}
      >
        <CardActionArea
          sx={{ width: "100%", height: "100%", textAlign: "center" }}
        >
          <CardContent>
            <Typography>Declined Request</Typography>
            <Typography fontSize={"30px"} fontWeight={"bold"}>
              0
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card
        sx={{ minWidth: "45%", height: "45dvh", backgroundColor: "#CCCCCC" }}
      >
        <CardActionArea
          sx={{ width: "100%", height: "100%", textAlign: "center" }}
        >
          <CardContent>
            <Typography>Remaining Request</Typography>
            <Typography fontSize={"30px"} fontWeight={"bold"}>
              {decodedToken.data.total_leaves}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Stack>
  );
};

export default AttendanceSystem;

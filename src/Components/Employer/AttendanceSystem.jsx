import {
  Card,
  CardActionArea,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
import { getNewRequestData } from "../../Utils/Stores/LeaveStore";

const AttendanceSystem = () => {
  const token = window.localStorage.getItem("token");
  const decodedToken = jwt_decode(token);
  const approvedNotification = decodedToken.data?.Notification?.filter(
    (item) => item.type === "approved"
  );
  const declineNotification = decodedToken.data?.Notification?.filter(
    (item) => item.type === "declined"
  );
  const Leave = useSelector((state) => state.StoreLeave.OutputNewRequest);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getNewRequestData());
  }, [dispatch]);
  
  const userDataArray = Object.values(decodedToken || {});
  
  const joinData = (leaveItem) => {
    const matchingUser = userDataArray.find(
      (user) => user.email === leaveItem.email
    );
    return {
      leave: leaveItem,
      user: matchingUser,
    };
  };
  
  const pendingLeaveData = Leave.filter(
    (leaveItem) => leaveItem.status === "pending"
  );
  
  const joinedData = pendingLeaveData.map((leaveItem) => joinData(leaveItem));
  
  const filteredJoinedData = joinedData.filter((item) => item.user);
  
  
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
        sx={{ minWidth: "45%", height: "45dvh", backgroundColor: "#cccccc", "&:hover":{background:"#323445", color:"#FFFFFF"} }}
      >
        <CardActionArea
          sx={{ width: "100%", height: "100%", textAlign: "center" }}
        >
          <CardContent>
            <Typography>Pending Request</Typography>
            <Typography fontSize={"30px"} fontWeight={"bold"}>
              {filteredJoinedData.length}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card
        sx={{ minWidth: "45%", height: "45dvh", backgroundColor: "#cccccc", "&:hover":{background:"#323445", color:"#FFFFFF"} }}
      >
        <CardActionArea
          sx={{ width: "100%", height: "100%", textAlign: "center" }}
        >
          <CardContent>
            <Typography>Approved Request</Typography>
            <Typography fontSize={"30px"} fontWeight={"bold"}>
              {approvedNotification.length}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card
        sx={{ minWidth: "45%", height: "45dvh", backgroundColor: "#cccccc", "&:hover":{background:"#323445", color:"#FFFFFF"} }}
      >
        <CardActionArea
          sx={{ width: "100%", height: "100%", textAlign: "center" }}
        >
          <CardContent>
            <Typography>Declined Request</Typography>
            <Typography fontSize={"30px"} fontWeight={"bold"}>
              {declineNotification.length}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card
        sx={{ minWidth: "45%", height: "45dvh", backgroundColor: "#CCCCCC", "&:hover":{background:"#323445", color:"#FFFFFF"} }}
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

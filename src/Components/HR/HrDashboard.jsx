import {
  Badge,
  ImageListItem,
  List,
  ListItemButton,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getNewRequestData, getUsersData } from "../../Utils/Stores/LeaveStore";
const HrDashboard = () => {
  const navigate = useNavigate();
  const token = window.localStorage.getItem("token");

  const decodedToken = jwt_decode(token);

  const Leave = useSelector((state) => state.StoreLeave.OutputNewRequest);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNewRequestData());
  }, [dispatch]);
  const Users = useSelector((state) => state.StoreLeave.OutputUsers);
  useEffect(() => {
    dispatch(getUsersData());
  }, [dispatch]);
  const joinData = (leaveItem) => {
    const matchingUser = Users.find((user) => user.email === leaveItem.email);
    return {
      leave: leaveItem,
      user: matchingUser,
    };
  };
  const pendingLeaveData = Leave.filter(
    (leaveItem) => leaveItem.status === "pending"
  );
  const joinedData = pendingLeaveData.map((leaveItem) => joinData(leaveItem));
  return (
    <Stack
      position={"sticky"}
      sx={{
        width: 250,
        background: "#222c65",
        height: "100dvh",
        color: "#FFFFFF",
        top: 0,
      }}
    >
      <Stack
        sx={{ height: "30dvh" }}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <ImageListItem
          sx={{
            maxWidth: 90,
            borderRadius: "50%",
            border: "5px solid #EF9B01",
            p: 0.3,
          }}
        >
          <img
            src={decodedToken?.data?.photo}
            alt="profile"
            style={{ width: "100%", borderRadius: "50%" }}
          />
        </ImageListItem>
        <Typography
          fontSize="13px"
          color="#FFFFFF"
          sx={{ textAlign: "center" }}
        >
          {decodedToken?.data?.name}
        </Typography>
        <Typography
          color="#FFFFFF"
          sx={{ textAlign: "center", textTransform: "capitalize" }}
        >
          {decodedToken?.data?.role}
        </Typography>
      </Stack>
      <Stack
        sx={{
          height: "70dvh",
          background: "#272727",
          borderRadius: "0 5rem 0 0",
        }}
      >
        <List
          size="lg"
          component="nav"
          sx={{
            flex: "none",
            mt: 6,
            mb: 5,
            fontSize: "xl",
            "& > div": { justifyContent: "center" },
          }}
        >
          <ListItemButton
            sx={{ fontWeight: "lg" }}
            onClick={() => navigate("/hr-dashboard")}
          >
            Dashboard
          </ListItemButton>
          <ListItemButton onClick={() => navigate("/hr-pending")}>
            <Badge badgeContent={joinedData.length} color="error">
              Pending Request
            </Badge>
          </ListItemButton>

          <ListItemButton
            onClick={() => {
              localStorage.clear();
              window.location.href = "/";
            }}
          >
            Logout
          </ListItemButton>
        </List>
      </Stack>
    </Stack>
  );
};

export default HrDashboard;

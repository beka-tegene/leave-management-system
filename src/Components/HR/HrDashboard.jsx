import {
  Badge,
  ImageListItem,
  List,
  ListItemButton,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { useMatch, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getNewRequestData, getUsersData } from "../../Utils/Stores/LeaveStore";
import logo from "../../Image/logo.jpeg";

import Cookies from "js-cookie";
const HrDashboard = () => {
  const hrDashboard = useMatch("/hr-dashboard");
  const hrPending = useMatch("/hr-pending");
  const navigate = useNavigate();

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
    const matchingUser = Users.find((user) => user.Id === leaveItem.Id);
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
        direction={"row"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <ImageListItem
          sx={{
            maxWidth: 90,
            minWidth: 90,
            minHeight: 90,
            maxHeight: 90,
            p: 0.3,
          }}
        >
          <img
            src={logo}
            alt="profile"
            style={{ minWidth: "100%", maxWidth: "100%" }}
          />
        </ImageListItem>
        <Stack>
          <Typography
            fontSize="18px"
            color="#FFFFFF"
          >
            Dan Energy
          </Typography>
          <Typography
          fontSize="9px"
            color="#FFFFFF"
            sx={{  textTransform: "capitalize" }}
          >
            Leave Management System
          </Typography>
        </Stack>
      </Stack>
      <Stack
        sx={{
          height: "70dvh",
          background: "#323445",
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
            sx={{
              fontWeight: "lg",
              background: hrDashboard ? "#FFF" : "",
              color: hrDashboard ? "#171717" : "",
            }}
            onClick={() => navigate("/dashboard")}
          >
            Dashboard
          </ListItemButton>
          <ListItemButton
            onClick={() => navigate("/hr-pending")}
            sx={{
              background: hrPending ? "#FFF" : "",
              color: hrPending ? "#171717" : "",
            }}
          >
            <Badge badgeContent={joinedData.length} color="error">
              Pending Request
            </Badge>
          </ListItemButton>

          <ListItemButton
            onClick={() => {
              Cookies.remove("role");
              Cookies.remove("token");
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

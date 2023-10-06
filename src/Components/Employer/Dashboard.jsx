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
import jwt_decode from "jwt-decode";

import logo from "../../Image/logo.jpeg";
import { useDispatch } from "react-redux";
import { setNotification } from "../../Utils/Stores/AuthStore";
const Dashboard = () => {
  const employerDashboard = useMatch("/dashboard");
  const employerNotification = useMatch("/employer-Notification");
  const employerRequest = useMatch("/employer-request");
  const navigate = useNavigate();
  const token = window.localStorage.getItem("token");

  const decodedToken = jwt_decode(token);
  const dispatch = useDispatch();
  const notificationHandler = (userId, notificationId) => {
    dispatch(setNotification({ data: { userId, notificationId } }));
    navigate("/employer-Notification");
  };
  const len = decodedToken?.data?.Notification?.length - 1
  return (
    <Stack
      position={"sticky"}
      sx={{
        top: 0,
        left: 0,
        width: 250,
        background: "#292A2C",
        height: "100dvh",
        color: "#FFFFFF",
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
          <Typography fontSize="18px" color="#FFFFFF">
            Dan Energy
          </Typography>
          <Typography
            fontSize="9px"
            color="#FFFFFF"
            sx={{ textTransform: "capitalize" }}
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
              background: employerDashboard ? "#FFF" : "",
              color: employerDashboard ? "#171717" : "",
            }}
            onClick={() => navigate("/dashboard")}
          >
            Dashboard
          </ListItemButton>
          <ListItemButton
            onClick={() =>
              notificationHandler(
                decodedToken?.data?._id,
                decodedToken?.data?.Notification[len]?._id
              )
            }
            sx={{
              background: employerNotification ? "#FFF" : "",
              color: employerNotification ? "#171717" : "",
            }}
          >
            <Badge
              badgeContent={decodedToken?.data?.Notification[len]?.updated_at === true ? 0 : 1}
              color="error"
            >
              Notification
            </Badge>
          </ListItemButton>
          <ListItemButton
            onClick={() => navigate("/employer-request")}
            sx={{
              background: employerRequest ? "#FFF" : "",
              color: employerRequest ? "#171717" : "",
            }}
          >
            New Request
          </ListItemButton>
        </List>
      </Stack>
    </Stack>
  );
};

export default Dashboard;

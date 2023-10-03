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
import Cookies from "js-cookie";
const Dashboard = () => {
  const employerDashboard = useMatch("/employer-dashboard");
  const employerNotification = useMatch("/employer-Notification");
  const employerRequest = useMatch("/employer-request");
  const navigate = useNavigate();
  const token = window.localStorage.getItem("token");

  const decodedToken = jwt_decode(token);
  return (
    <Stack
      position={"sticky"}
      sx={{
        top: 0,
        width: 250,
        background: "#292A2C",
        height: "100dvh",
        color: "#FFFFFF",
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
            minWidth: 90,
            minHeight: 90,
            maxHeight: 90,
            borderRadius: "50%",
            border: "5px solid #EF9B01",
            p: 0.3,
          }}
        >
          <img
            src={decodedToken?.data?.photo}
            alt="profile"
            style={{ minWidth: "100%", maxWidth: "100%", borderRadius: "50%" }}
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
          {decodedToken.data.role}
        </Typography>
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
            onClick={() => navigate("/employer-Notification")}
            sx={{
              background: employerNotification ? "#FFF" : "",
              color: employerNotification ? "#171717" : "",
            }}
          >
            <Badge
              badgeContent={decodedToken?.data?.Notification?.length}
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

export default Dashboard;

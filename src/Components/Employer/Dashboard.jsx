import {
  ImageListItem,
  List,
  ListItemButton,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import profile from "../../Image/logo.jpeg";
import { useNavigate } from "react-router-dom";
const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <Stack
      position={"sticky"}
      sx={{
        top: 0,
        width: 250,
        background: "#272727",
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
            borderRadius: "50%",
            border: "5px solid #EF9B01",
            p: 0.3,
          }}
        >
          <img
            src={profile}
            alt="profile"
            style={{ width: "100%", borderRadius: "50%" }}
          />
        </ImageListItem>
        <Typography
          fontSize="13px"
          color="#FFFFFF"
          sx={{ textAlign: "center" }}
        >
          Daniel Tadesse
        </Typography>
        <Typography color="#FFFFFF" sx={{ textAlign: "center" }}>
          Employer
        </Typography>
      </Stack>
      <Stack
        sx={{
          height: "70dvh",
          background: "#222c65",
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
            onClick={() => navigate("/employer-dashboard")}
          >
            Dashboard
          </ListItemButton>
          <ListItemButton onClick={() => navigate("/employer-request")}>
            New Request
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

export default Dashboard;

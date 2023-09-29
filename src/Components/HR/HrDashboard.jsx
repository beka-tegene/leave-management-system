import {
  Badge,
  ImageListItem,
  List,
  ListItemButton,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import profile from "../../Image/logo.jpeg";
import { useNavigate } from "react-router-dom";
const HrDashboard = () => {
  const navigate = useNavigate();
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
          HR
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
            <Badge badgeContent={4} color="error">
              Pending Request
            </Badge>
          </ListItemButton>
          <ListItemButton onClick={() => navigate("/hr-approved")}>
            Approved Request
          </ListItemButton>
          <ListItemButton onClick={() => navigate("/hr-declined")}>
            Declined Request
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

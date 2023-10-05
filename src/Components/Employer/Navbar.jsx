import {
  ImageListItem,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import jwt_decode from "jwt-decode";
import { ArrowDropDown } from "@mui/icons-material";
import { useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import profile from "../../Image/avater.jpg";
const Navbar = () => {
  const token = window.localStorage.getItem("token");

  const decodedToken = jwt_decode(token);
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Stack
      sx={{
        height: "10vh",
        background: "#292A2C",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 10px",
        borderBottom: "1px solid #EF9B01",
      }}
      direction="row"
    >
      <Typography textTransform="capitalize" color="white" fontSize="20px">
        <b style={{ color: "#EF9B01" }}>Welcome</b> {decodedToken?.data?.name}
      </Typography>
      <Stack
        sx={{
          m: 0.5,
          mr: 2,
          cursor: "pointer",
          "&:hover": {
            color: "#EF9B01",
          },
        }}
        onClick={handleClick}
        direction="row"
        alignItems="center"
      >
        <ImageListItem
          sx={{
            maxWidth: 60,
            minWidth: 60,
            minHeight: 60,
            maxHeight: 60,
            borderRadius: "50%",
            border: ".5px solid #EF9B01",
            p: 0.3,
            overflow: "hidden",
          }}
        >
          {decodedToken?.data?.photo && (
            <img
              src={decodedToken?.data?.photo}
              alt="profile"
              style={{
                minWidth: 55,
                maxWidth: 55,
                minHeight: 55,
                maxHeight: 55,
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
          )}
          {!decodedToken?.data?.photo && (
            <img
              src={profile}
              alt="profile"
              style={{
                minWidth: 55,
                maxWidth: 55,
                minHeight: 55,
                maxHeight: 55,
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
          )}
        </ImageListItem>
        <ArrowDropDown sx={{ color: "white" }} />
      </Stack>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={() => navigate("/profile")}>Profile</MenuItem>
        <MenuItem>Change Password</MenuItem>
        <MenuItem
          onClick={() => {
            Cookies.remove("role");
            Cookies.remove("token");
            localStorage.clear();
            window.location.href = "/";
          }}
        >
          Logout
        </MenuItem>
      </Menu>
    </Stack>
  );
};

export default Navbar;

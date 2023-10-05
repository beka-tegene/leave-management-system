import { ImageListItem, Stack, Typography } from "@mui/material";
import React from "react";
import jwt_decode from "jwt-decode";
import profile from "../../Image/avater.jpg";
const NavbarHr = () => {
  const token = window.localStorage.getItem("token");

  const decodedToken = jwt_decode(token);
  return (
    <Stack
      sx={{
        height: "10vh",
        background: "#222c65",
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
        }}
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
      </Stack>
    </Stack>
  );
};

export default NavbarHr;

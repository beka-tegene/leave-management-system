import {
  Button,
  Card,
  CardContent,
  FormControl,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Stack
      sx={{ height: "100dvh", backgroundColor: "#F7F7F7" }}
      direction={"row"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Card sx={{ width: 450 }}>
        <CardContent>
          <Typography
            fontSize={"14px"}
            color={"#EF9B01"}
            sx={{ textAlign: "center" }}
          >
            Dan Energy Leave Management System
          </Typography>
          <Typography
            fontSize={"30px"}
            fontWeight={"bold"}
            color={"#3348BB"}
            sx={{ textAlign: "center" }}
          >
            LogIn
          </Typography>
          <Paper
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              justifyContent: "center",
              p: 2,
            }}
          >
            <FormControl sx={{ width: "100%" }} size="small" required>
              <TextField
                id="email-basic"
                label="Email"
                variant="outlined"
                type="email"
              />
            </FormControl>
            <FormControl sx={{ width: "100%" }} size="small" required>
              <TextField
                id="password-basic"
                label="Password"
                variant="outlined"
                type="password"
              />
            </FormControl>
            <Link
              style={{
                textAlign: "right",
                textDecoration: "none",
                color: "#272727",
              }}
            >
              Forget password
            </Link>
            <Stack direction={"row"} width={"100%"} gap={1}>
              <Button variant="contained" type="submit" sx={{ flex: "auto" }}>
                Login
              </Button>
            </Stack>
            <Typography
              sx={{
                textAlign: "center",
              }}
            >
              you don't have an account?
              <Link
                style={{
                  textDecoration: "none",
                  color: "#213322",
                }}
                to={"/register"}
              >
                Sign up
              </Link>
            </Typography>
          </Paper>
        </CardContent>
      </Card>
    </Stack>
  );
};

export default Login;

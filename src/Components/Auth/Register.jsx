import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardContent,
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

const Register = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [croppedImage, setCroppedImage] = useState(null);
  
    const handleImageChange = (e) => {
      const file = e.target.files[0];
  
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setSelectedImage(e.target.result);
          const img = new Image();
          img.src = e.target.result;
          img.onload = () => {
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");
            const maxSize = Math.min(img.width, img.height);
            canvas.width = maxSize;
            canvas.height = maxSize;
            ctx.drawImage(
              img,
              (img.width - maxSize) / 2,
              (img.height - maxSize) / 2,
              maxSize,
              maxSize,
              0,
              0,
              maxSize,
              maxSize
            );
            const croppedDataURL = canvas.toDataURL("image/jpeg");
            setCroppedImage(croppedDataURL);
          };
        };
        reader.readAsDataURL(file);
      }
      console.log(croppedImage);
    };
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="center"
      sx={{ backgroundColor: "#F7F7F7", padding: "4rem 0" }}
    >
      <Card sx={{ width: 450 }}>
        <CardContent>
          <Typography
            fontSize="14px"
            color="#EF9B01"
            sx={{ textAlign: "center" }}
          >
            Dan Energy Leave Management System
          </Typography>
          <Typography variant="h4" color="primary" align="center">
            Sign Up
          </Typography>
          <Paper
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              p: 2,
            }}
          >
            <FormControl fullWidth size="small" required>
              <TextField
                id="Name-basic"
                label="Full Name"
                variant="outlined"
                type="text"
              />
            </FormControl>
            <FormControl fullWidth size="small" required>
              <TextField
                id="email-basic"
                label="Email"
                variant="outlined"
                type="email"
              />
            </FormControl>
            <FormControl fullWidth size="small" required>
              <TextField
                id="Studied-basic"
                label="Studied"
                variant="outlined"
                type="text"
              />
            </FormControl>
            <FormControl fullWidth size="small" required>
              <InputLabel id="Department-label">Department</InputLabel>
              <Select labelId="Department-label" label="Department">
                <MenuItem value="Digital Economy">Digital Economy</MenuItem>
                <MenuItem value="Big Data">Big Data</MenuItem>
              </Select>
            </FormControl>
            <InputLabel htmlFor="Employed-basic">Employed Date</InputLabel>
            <FormControl fullWidth size="small" required>
              <Input id="Employed-basic" variant="outlined" type="date" />
            </FormControl>
            <InputLabel htmlFor="Photo-basic">Photo</InputLabel>
            <FormControl fullWidth size="small" required>
              <Input
                id="Photo-basic"
                variant="outlined"
                type="file"
                onChange={handleImageChange}
              />
            </FormControl>
            {selectedImage && (
              <div
                style={{
                  width: 200, 
                  height: 200, 
                  overflow: "hidden",
                  marginTop: "1rem",
                }}
              >
                <img
                  src={selectedImage}
                  alt="Selected"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover", 
                    display: "block",
                    margin: "0 auto",
                  }}
                />
              </div>
            )}
            
            <FormControl fullWidth size="small" required>
              <TextField
                id="password-basic"
                label="Password"
                variant="outlined"
                type="password"
              />
            </FormControl>
            <FormControl fullWidth size="small" required>
              <TextField
                id="confirm-password-basic"
                label="Confirm Password"
                variant="outlined"
                type="password"
              />
            </FormControl>
            <Stack mt={2}>
              <Button variant="contained" type="submit">
                Register
              </Button>
            </Stack>
            <Typography align="center" color="textSecondary" mt={2}>
              Already have an account?{" "}
              <Link
                to="/"
                style={{
                  textDecoration: "none",
                  color: "#213322",
                }}
              >
                Login
              </Link>
            </Typography>
          </Paper>
        </CardContent>
      </Card>
    </Stack>
  );
};

export default Register;

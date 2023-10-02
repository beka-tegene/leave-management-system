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
import { setRegister } from "../../Utils/Stores/AuthStore";
import { useDispatch } from "react-redux";

const Register = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedImageURL, setSelectedImageURL] = useState(null);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [studied, setStudied] = useState("");
  const [department, setDepartment] = useState("");
  const [employment_date, setemployment_date] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const dispatch = useDispatch();

  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);

    const imageURL = URL.createObjectURL(file);
    setSelectedImageURL(imageURL);
  };

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    if (!fullName) {
      newErrors.fullName = "Full Name is required";
      isValid = false;
    }

    if (!email) {
      newErrors.email = "Email is required";
      isValid = false;
    }

    if (!password) {
      newErrors.password = "Password is required";
      isValid = false;
    }

    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      const formData = new FormData();
      formData.append("photo", selectedImage);
      formData.append("fullName", fullName);
      formData.append("email", email);
      formData.append("studied", studied);
      formData.append("employment_date", employment_date);
      formData.append("department", department);
      formData.append("password", password);

      await dispatch(setRegister(formData));
      alert("Registration successful!");
      resetForm();
    }
  };

  const resetForm = () => {
    setSelectedImage(null);
    setFullName("");
    setEmail("");
    setStudied("");
    setDepartment("");
    setemployment_date("");
    setPassword("");
    setConfirmPassword("");
    setErrors({});
  };

  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="center"
      sx={{ backgroundColor: "#171717", padding: "4rem 0" }}
    >
      <Card sx={{ width: 450, background: "#323445" }}>
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
              background: "#323445",
              color: "#FFFFFF",
            }}
            onSubmit={submitHandler}
          >
            <FormControl fullWidth size="small" required>
              <TextField
                id="Name-basic"
                label="Full Name"
                variant="outlined"
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                error={!!errors.fullName}
                helperText={errors.fullName}
              />
            </FormControl>
            <FormControl fullWidth size="small" required>
              <TextField
                id="email-basic"
                label="Email"
                variant="outlined"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={!!errors.email}
                helperText={errors.email}
              />
            </FormControl>
            <FormControl fullWidth size="small" required>
              <TextField
                id="Studied-basic"
                label="Studied"
                variant="outlined"
                type="text"
                value={studied}
                onChange={(e) => setStudied(e.target.value)}
              />
            </FormControl>
            <FormControl fullWidth size="small" required>
              <InputLabel id="Department-label">Department</InputLabel>
              <Select
                labelId="Department-label"
                label="Department"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
              >
                <MenuItem value="Digital Economy">Digital Economy</MenuItem>
                <MenuItem value="Big Data">Big Data</MenuItem>
              </Select>
            </FormControl>
            <InputLabel htmlFor="Employed-basic">Employed Date</InputLabel>
            <FormControl fullWidth size="small" required>
              <Input
                id="Employed-basic"
                variant="outlined"
                type="date"
                value={employment_date}
                onChange={(e) => setemployment_date(e.target.value)}
              />
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
            {selectedImageURL && (
              <div
                style={{
                  width: 200,
                  height: 200,
                  overflow: "hidden",
                  marginTop: "1rem",
                }}
              >
                <img
                  src={selectedImageURL}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={!!errors.password}
                helperText={errors.password}
              />
            </FormControl>
            <FormControl fullWidth size="small" required>
              <TextField
                id="confirm-password-basic"
                label="Confirm Password"
                variant="outlined"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </FormControl>
            <Stack mt={2}>
              <Button variant="contained" type="submit">
                Register
              </Button>
            </Stack>
            <Typography align="center" mt={2}>
              Already have an account?{" "}
              <Link
                to="/"
                style={{
                  textDecoration: "none",
                  color: "#2299ff",
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

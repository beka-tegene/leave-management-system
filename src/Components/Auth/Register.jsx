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
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
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
    studied: "",
    department: "",
    employment_date: "",
    password: "",
    confirmPassword: "",
    selectedImage: "",
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);

    const imageURL = URL.createObjectURL(file);
    setSelectedImageURL(imageURL);
  };
  const validatePassword = (password) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    return passwordRegex.test(password);
  };
  const validateConfirmPassword = (confirmPassword) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    return passwordRegex.test(confirmPassword);
  };
  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    if (!selectedImage) {
      newErrors.selectedImage = "profile Image is required";
      isValid = false;
    }

    if (!fullName) {
      newErrors.fullName = "Full Name is required";
      isValid = false;
    }

    if (!email) {
      newErrors.email = "Email is required";
      isValid = false;
    }

    if (!studied) {
      newErrors.studied = "Studied is required";
      isValid = false;
    }
    if (!department) {
      newErrors.department = "Department is required";
      isValid = false;
    }

    if (!employment_date) {
      newErrors.employment_date = "Employment Date is required";
      isValid = false;
    }

    if (!password) {
      newErrors.password = "Password is required";
      isValid = false;
    } else if (!validatePassword(password)) {
      newErrors.password =
        "Please enter a strong password with at least 8 characters, including at least one uppercase letter, one lowercase letter, one number, and one special character (!@#$%^&*)";
      isValid = false;
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = "Confirm Password is required";
      isValid = false;
    } else if (!validateConfirmPassword(confirmPassword)) {
      newErrors.confirmPassword =
        "Please enter a strong password with at least 8 characters, including at least one uppercase letter, one lowercase letter, one number, and one special character (!@#$%^&*)";
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
    setSelectedImageURL(null);
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
      <ToastContainer />
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
            <FormControl fullWidth size="small">
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
            <FormControl fullWidth size="small">
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
            <FormControl fullWidth size="small">
              <TextField
                id="Studied-basic"
                label="Studied"
                variant="outlined"
                type="text"
                value={studied}
                onChange={(e) => setStudied(e.target.value)}
                error={!!errors.studied}
                helperText={errors.studied}
              />
            </FormControl>
            <FormControl fullWidth size="small">
              <InputLabel id="Department-label">Department</InputLabel>
              <Select
                labelId="Department-label"
                label="Department"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                error={!!errors.department}
                helperText={errors.department}
                MenuProps={MenuProps}
              >
                <MenuItem value="Digital Economy">Digital Economy</MenuItem>
                <MenuItem value="Big Data">Big Data</MenuItem>
                <MenuItem value="E-Learning">E-Learning</MenuItem>
                <MenuItem value="Cyber">Cyber</MenuItem>
                <MenuItem value="AWS">AWS</MenuItem>
                <MenuItem value="Finance">Finance</MenuItem>
                <MenuItem value="Payroll">Payroll</MenuItem>
                <MenuItem value="Website">Website</MenuItem>
                <MenuItem value="Mobility">Mobility</MenuItem>
                <MenuItem value="Robotics">Robotics</MenuItem>
                <MenuItem value="Net 0 Carbon +">Net 0 Carbon +</MenuItem>
                <MenuItem value="We Drone">We Drone</MenuItem>
                <MenuItem value="Remote Monitoring">Remote Monitoring</MenuItem>
                <MenuItem value="Internet of thing">Internet of thing</MenuItem>
                <MenuItem value="Agari Tech">Agari Tech</MenuItem>
                <MenuItem value="AI">AI</MenuItem>
                <MenuItem value="Graphics">Graphics</MenuItem>
                <MenuItem value="Security">Security</MenuItem>
                <MenuItem value="Remote and sensing">
                  Remote and sensing
                </MenuItem>
              </Select>
            </FormControl>
            <InputLabel htmlFor="Employed-basic">Employed Date</InputLabel>
            <FormControl fullWidth size="small">
              <Input
                id="Employed-basic"
                variant="outlined"
                type="date"
                value={employment_date}
                onChange={(e) => setemployment_date(e.target.value)}
                error={!!errors.employment_date}
                helperText={errors.employment_date}
              />
            </FormControl>
            <InputLabel htmlFor="Photo-basic">Profile Photo</InputLabel>
            <FormControl fullWidth size="small">
              <Input
                id="Photo-basic"
                variant="outlined"
                type="file"
                onChange={handleImageChange}
                error={!!errors.selectedImage}
                helperText={errors.selectedImage}
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

            <FormControl fullWidth size="small">
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
            <FormControl fullWidth size="small">
              <TextField
                id="confirm-password-basic"
                label="Confirm Password"
                variant="outlined"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                error={!!errors.confirmPassword}
                helperText={errors.confirmPassword}
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

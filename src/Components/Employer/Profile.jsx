import React, { useState } from "react";
import jwt_decode from "jwt-decode";
import moment from "moment";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardContent,
  FormControl,
  ImageListItem,
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
const Profile = () => {
  const token = window.localStorage.getItem("token");

  const decodedToken = jwt_decode(token);

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
      direction={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      sx={{ p: 2, background: "#171717", color: "white", minHeight: "90dvh" }}
      gap={2}
    >
      <Card sx={{ position: "fixed", right: "2%", top: "15%" }}>
        <CardContent>
          {decodedToken?.data?.photo && (
            <Stack>
              <Typography>Profile Photo</Typography>
              <ImageListItem
                sx={{
                  maxWidth: 120,
                  minWidth: 120,
                  minHeight: 120,
                  maxHeight: 120,
                }}
              >
                <img
                  src={decodedToken?.data?.photo}
                  alt="profile"
                  style={{
                    minWidth: 115,
                    maxWidth: 115,
                    minHeight: 115,
                    maxHeight: 115,
                  }}
                />
              </ImageListItem>
            </Stack>
          )}
          <Typography>
            <b>ID : </b> {decodedToken?.date?.Id}
          </Typography>
          <Typography>
            <b>Name : </b> {decodedToken?.data?.name}
          </Typography>
          <Typography>
            <b>Employment Data : </b>{" "}
            {moment(decodedToken?.data?.employment_date).fromNow()}
          </Typography>
          {decodedToken?.data?.email && (
            <Typography>
              <b>Email : </b> {decodedToken?.data?.email}
            </Typography>
          )}
          {decodedToken?.data?.studied && (
            <Typography>
              <b>Studied : </b> {decodedToken?.data?.studied}
            </Typography>
          )}
          {decodedToken?.data?.department_id && (
            <Typography>
              <b>Department : </b> {decodedToken?.data?.department_id}
            </Typography>
          )}
          {decodedToken?.data?.photo === null && (
            <Typography fontSize={"13px"}>
              <b style={{ color: "red", fontSize: "15px" }}>Note : </b> you must
              update your Profile
            </Typography>
          )}
        </CardContent>
      </Card>
      <Paper
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          p: 2,
        }}
        onSubmit={submitHandler}
      >
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
            <MenuItem value="Remote and sensing">Remote and sensing</MenuItem>
          </Select>
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

        <Stack mt={2} direction={"row"} gap={2} justifyContent={"flex-end"}>
          <Button variant="contained" type="reset">
            Cancel
          </Button>
          <Button variant="contained" type="submit">
            Update
          </Button>
        </Stack>
      </Paper>
    </Stack>
  );
};

export default Profile;

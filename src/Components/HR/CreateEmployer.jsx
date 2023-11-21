import React, { useState } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { setCreateEmployer } from "../../Utils/Stores/AuthStore";
import { useDispatch } from "react-redux";
import jwt_decode from "jwt-decode";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const CreateEmployer = () => {
  const token = window.localStorage.getItem("token");

  const decodedToken = jwt_decode(token);
  const userId = decodedToken?.data?._id;
  const [id, setId] = useState("");
  const [fullName, setFullName] = useState("");
  const [employmentDate, setEmploymentDate] = useState("");
  const dispatch = useDispatch();

  const [errors, setErrors] = useState({
    id: "",
    fullName: "",
    employmentDate: "",
  });

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    if (!id) {
      newErrors.id = "Id is required";
      isValid = false;
    }

    if (!fullName) {
      newErrors.fullName = "Full Name is required";
      isValid = false;
    }

    if (!employmentDate) {
      newErrors.employmentDate = "Employment Date is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      await dispatch(
        setCreateEmployer({ data: { id, fullName, employmentDate } })
      );
      resetForm();
    }
  };

  const resetForm = () => {
    setId("");
    setFullName("");
    setEmploymentDate("");
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
      <ToastContainer />
      <Paper
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          p: 2,
          width: 345,
        }}
        onSubmit={submitHandler}
      >
        <Typography>Create Employer</Typography>
        <FormControl fullWidth size="small">
          <FormLabel>Id</FormLabel>
          <TextField
            id="password-basic"
            variant="outlined"
            type="number"
            value={id}
            onChange={(e) => setId(e.target.value)}
            error={!!errors.id}
            helperText={errors.id}
          />
        </FormControl>
        <FormControl fullWidth size="small">
          <FormLabel>Full Name</FormLabel>
          <TextField
            id="confirm-password-basic"
            variant="outlined"
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            error={!!errors.fullName}
            helperText={errors.fullName}
          />
        </FormControl>
        <FormControl fullWidth size="small">
          <FormLabel>Employment Date</FormLabel>
          <TextField
            id="password-basic"
            variant="outlined"
            type="date"
            value={employmentDate}
            onChange={(e) => setEmploymentDate(e.target.value)}
            error={!!errors.employmentDate}
            helperText={errors.employmentDate}
          />
        </FormControl>
        <Stack mt={2} direction={"row"} gap={2} justifyContent={"flex-end"}>
          <Button variant="contained" type="reset">
            Cancel
          </Button>
          <Button variant="contained" type="submit">
            Create
          </Button>
        </Stack>
      </Paper>
    </Stack>
  );
};

export default CreateEmployer;

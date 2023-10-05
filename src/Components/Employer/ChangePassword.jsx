import React, { useState } from "react";
import { Button, FormControl, Paper, Stack, TextField } from "@mui/material";
import { setRegister } from "../../Utils/Stores/AuthStore";
import { useDispatch } from "react-redux";

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [NewPassword, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const dispatch = useDispatch();

  const [errors, setErrors] = useState({
    NewPassword: "",
    confirmPassword: "",
    oldPassword: "",
  });

  const validatePassword = (NewPassword) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    return passwordRegex.test(NewPassword);
  };
  const validateConfirmPassword = (confirmPassword) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    return passwordRegex.test(confirmPassword);
  };
  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    if (!oldPassword) {
      newErrors.oldPassword = "old Password is required";
      isValid = false;
    }

    if (!NewPassword) {
      newErrors.NewPassword = "new Password is required";
      isValid = false;
    } else if (!validatePassword(NewPassword)) {
      newErrors.NewPassword =
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

    if (NewPassword !== confirmPassword) {
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
      formData.append("oldPassword", oldPassword);
      formData.append("NewPassword", NewPassword);

      await dispatch(setRegister(formData));
      resetForm();
    }
  };

  const resetForm = () => {
    setOldPassword("");
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
        <FormControl fullWidth size="small">
          <TextField
            id="password-basic"
            label="Old Password"
            variant="outlined"
            type="password"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            error={!!errors.oldPassword}
            helperText={errors.oldPassword}
          />
        </FormControl>
        <FormControl fullWidth size="small">
          <TextField
            id="password-basic"
            label="New Password"
            variant="outlined"
            type="password"
            value={NewPassword}
            onChange={(e) => setPassword(e.target.value)}
            error={!!errors.NewPassword}
            helperText={errors.NewPassword}
          />
        </FormControl>
        <FormControl fullWidth size="small">
          <TextField
            id="confirm-password-basic"
            label="Confirm New Password"
            variant="outlined"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            error={!!errors.confirmPassword}
            helperText={errors.confirmPassword}
          />
        </FormControl>
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

export default ChangePassword;

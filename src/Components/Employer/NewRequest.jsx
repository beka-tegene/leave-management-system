import React, { useState } from "react";
import {
  Button,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  MenuItem,
  Paper,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { setNewRequest } from "../../Utils/Stores/LeaveStore";
import jwt_decode from "jwt-decode";
const NewRequest = () => {
  const [photo, setphoto] = useState(null);
  const [leave_type, setleave_type] = useState(null);
  const [duration, setduration] = useState(null);
  const [start_date, setstart_date] = useState(null);
  const [end_date, setend_date] = useState(null);
  const [reason, setreason] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const token = window.localStorage.getItem("token");
  const decodedToken = jwt_decode(token);
  const dispatch = useDispatch();
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setphoto(file);
    // if (file) {
    //   if (file.type === "application/pdf") {
    //     const fileSizeInMegabytes = file.size / (1024 * 1024); // Convert bytes to megabytes
    //     setphoto({
    //       file,
    //       sizeInMegabytes: fileSizeInMegabytes.toFixed(2), // Round to 2 decimal places
    //     });
    //   } else {
    //     setErrorMessage("Please select a PDF file.");
    //     setphoto(null);
    //   }
    // }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("_id", decodedToken.data._id);
    formData.append("email", decodedToken.data.email);
    formData.append("photo", photo);
    formData.append("duration", duration);
    formData.append("leave_type", leave_type);
    formData.append("start_date", start_date);
    formData.append("end_date", end_date);
    formData.append("reason", reason);
    console.log(formData.get("photo"));
    await dispatch(setNewRequest(formData));
  };
  return (
    <Stack
      direction={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      sx={{ p: 2, width: "84%" }}
      gap={2}
    >
      <Paper
        component={"form"}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          p: 2,
          width: 425,
        }}
        onSubmit={submitHandler}
      >
        <Typography fontSize={"20px"}>New Request</Typography>
        <Divider sx={{ m: 1 }} />
        <Stack direction={"column"} gap={2} sx={{ width: "100%" }}>
          <FormControl
            fullWidth
            required
            size="small"
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
            }}
          >
            <InputLabel id="Leave-label">Leave Type</InputLabel>
            <Select
              labelId="Leave-label"
              label="Leave"
              sx={{
                fontSize: "13px",
                // outline: "none",
                // border: "2px solid #3348BB",
                // borderRadius: 1,
              }}
              onChange={(e) => setleave_type(e.target.value)}
            >
              <MenuItem value="sick leave">sick leave</MenuItem>
              <MenuItem value="annual leave">annual leave</MenuItem>
              <MenuItem value="mourning leave">mourning leave</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth required>
            <FormLabel id="demo-controlled-radio-buttons-group">
              Day leave
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              //   value={value}
              //   onChange={handleChange}
              onChange={(e) => setduration(e.target.value)}
            >
              <FormControlLabel
                value="1"
                control={<Radio />}
                label="Half Day"
              />
              <FormControlLabel
                value="0.5"
                control={<Radio />}
                label="Full Day"
              />
            </RadioGroup>
          </FormControl>
          <FormControl fullWidth required>
            <FormLabel>Start date</FormLabel>
            <input
              type="date"
              style={{
                padding: "0.5rem 1rem",
                fontSize: "15px",
                outline: "none",
                border: "2px solid #3348BB",
                borderRadius: 4,
              }}
              onChange={(e) => setstart_date(e.target.value)}
            />
          </FormControl>
          <FormControl fullWidth required>
            <FormLabel>End date</FormLabel>
            <input
              type="date"
              style={{
                padding: "0.5rem 1rem",
                fontSize: "15px",
                outline: "none",
                border: "2px solid #3348BB",
                borderRadius: 4,
              }}
              onChange={(e) => setend_date(e.target.value)}
            />
          </FormControl>
          <FormControl fullWidth required>
            <FormLabel>Leave reason</FormLabel>
            <textarea
              style={{
                padding: "0.5rem 1rem",
                fontSize: "15px",
                outline: "none",
                border: "2px solid #3348BB",
                borderRadius: 4,
                resize: "none",
              }}
              onChange={(e) => setreason(e.target.value)}
            />
          </FormControl>
          <FormControl fullWidth required size="small">
            <FormLabel>Attachment</FormLabel>
            <input
              id="PdfFile-basic"
              variant="outlined"
              type="file"
              accept=".pdf"
              onChange={handleFileChange}
            />
          </FormControl>
          {!photo && (
            <Typography sx={{ color: "#FF0000" }} fontSize={"12px"}>
              {errorMessage}
            </Typography>
          )}
          {photo && (
            <div>
              <Typography fontSize={"12px"}>
                File Size: {photo.sizeInMegabytes} MB
              </Typography>
            </div>
          )}
        </Stack>
        <Stack
          direction={"row"}
          gap={2}
          sx={{ width: "100%" }}
          justifyContent={"flex-end"}
        >
          <Button type="reset">Cancel</Button>
          <Button type="submit">Request</Button>
        </Stack>
      </Paper>
    </Stack>
  );
};

export default NewRequest;

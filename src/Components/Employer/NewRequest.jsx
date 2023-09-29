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
const NewRequest = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [leaveType, setLeaveType] = useState(null);
  const [dayLeave, setDayLeave] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [description, setDescription] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();
  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      if (file.type === "application/pdf") {
        const fileSizeInMegabytes = file.size / (1024 * 1024); // Convert bytes to megabytes
        setSelectedFile({
          file,
          sizeInMegabytes: fileSizeInMegabytes.toFixed(2), // Round to 2 decimal places
        });
      } else {
        setErrorMessage("Please select a PDF file.");
        setSelectedFile(null);
      }
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("selectedFile", selectedFile);
    formData.append("leaveType", leaveType);
    formData.append("dayLeave", dayLeave);
    formData.append("startDate", startDate);
    formData.append("endDate", endDate);
    formData.append("description", description);

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
              onChange={(e) => setLeaveType(e.target.value)}
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
              onChange={(e) => setDayLeave(e.target.value)}
            >
              <FormControlLabel
                value="Half Day"
                control={<Radio />}
                label="Half Day"
              />
              <FormControlLabel
                value="Full Day"
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
              onChange={(e) => setStartDate(e.target.value)}
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
              onChange={(e) => setEndDate(e.target.value)}
            />
          </FormControl>
          <FormControl fullWidth required>
            <FormLabel>Leave Description</FormLabel>
            <textarea
              style={{
                padding: "0.5rem 1rem",
                fontSize: "15px",
                outline: "none",
                border: "2px solid #3348BB",
                borderRadius: 4,
                resize: "none",
              }}
              onChange={(e) => setDescription(e.target.value)}
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
          {!selectedFile && (
            <Typography sx={{ color: "#FF0000" }} fontSize={"12px"}>
              {errorMessage}
            </Typography>
          )}
          {selectedFile && (
            <div>
              <Typography fontSize={"12px"}>
                File Size: {selectedFile.sizeInMegabytes} MB
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

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
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const NewRequest = () => {
  const [photo, setPhoto] = useState(null);
  const [leaveType, setLeaveType] = useState("");
  const [duration, setDuration] = useState("0.5");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [reason, setReason] = useState("");

  const token = window.localStorage.getItem("token");
  const decodedToken = jwt_decode(token);
  const dispatch = useDispatch();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setPhoto(file);
  };

  const MAX_HOURS_DIFFERENCE = 2;
  const handleStartTimeChange = (e) => {
    const newStartTime = e.target.value;
    if (endTime && isTimeDifferenceValid(newStartTime, endTime)) {
      setStartTime(newStartTime);
    }
  };
  const handleEndTimeChange = (e) => {
    const newEndTime = e.target.value;
    if (startTime && isTimeDifferenceValid(startTime, newEndTime)) {
      setEndTime(newEndTime);
    }
  };

  const isTimeDifferenceValid = (start, end) => {
    const startTime = new Date(`1970-01-01T${start}`);
    const endTime = new Date(`1970-01-01T${end}`);
    const timeDifference = endTime - startTime;
    const hoursDifference = timeDifference / (1000 * 60 * 60);
    console.log(hoursDifference);
    return hoursDifference <= MAX_HOURS_DIFFERENCE;
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("_id", decodedToken.data._id);
    formData.append("Id", decodedToken.data.Id);
    formData.append("photo", photo);
    formData.append("duration", duration);
    formData.append("leave_type", leaveType);
    formData.append("start_date", startDate);
    formData.append("end_date", endDate);
    formData.append("reason", reason);

    await dispatch(setNewRequest(formData));
  };

  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{ p: 2, background: "#171717", minHeight: "90dvh" }}
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
          width: 425,
        }}
        onSubmit={submitHandler}
      >
        <Typography fontSize="20px">New Request</Typography>
        <Divider sx={{ m: 1 }} />
        <Stack direction="column" gap={2} sx={{ width: "100%" }}>
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
            <InputLabel id="leave-label">Leave Type</InputLabel>
            <Select
              labelId="leave-label"
              label="Leave"
              value={leaveType}
              onChange={(e) => setLeaveType(e.target.value)}
              sx={{
                fontSize: "13px",
              }}
            >
              <MenuItem value="Annual Leave">Annual Leave</MenuItem>
              <MenuItem value="Emergency Leave" disabled>Emergency Leave</MenuItem>
              <MenuItem value="Maternity Leave">Maternity Leave</MenuItem>
              <MenuItem value="Marriage Leave">Marriage Leave</MenuItem>
              <MenuItem value="Mourning Leave">Mourning Leave</MenuItem>
              <MenuItem value="Sick Leave">Sick Leave</MenuItem>
              <MenuItem value="Unpaid Leave">Unpaid Leave</MenuItem>
              <MenuItem value="Other types of Leave">
                Other types of Leave
              </MenuItem>
            </Select>
          </FormControl>
          {leaveType !== "Emergency Leave" && (
            <Stack gap={1.5}>
              <FormControl fullWidth required>
                <FormLabel>Day leave</FormLabel>
                <RadioGroup
                  name="controlled-radio-buttons-group"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                >
                  <FormControlLabel
                    value="0.5"
                    control={<Radio />}
                    label="Half Day"
                  />
                  <FormControlLabel
                    value="1"
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
                  value={startDate}
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
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                />
              </FormControl>
              <FormControl fullWidth required>
                <FormLabel>Title</FormLabel>
                <textarea
                  style={{
                    padding: "0.5rem 1rem",
                    fontSize: "15px",
                    outline: "none",
                    border: "2px solid #3348BB",
                    borderRadius: 4,
                    resize: "none",
                  }}
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                />
              </FormControl>
              <FormControl fullWidth required size="small">
                <FormLabel>Attachment</FormLabel>
                <input
                  id="pdf-file-basic"
                  variant="outlined"
                  type="file"
                  accept=".pdf, .jpg, .png"
                  onChange={handleFileChange}
                />
              </FormControl>
              {photo && (
                <div>
                  <Typography fontSize="12px">
                    File Size: {Math.round(photo.size / 1024)} KB
                  </Typography>
                </div>
              )}
            </Stack>
          )}
          {leaveType === "Emergency Leave" && (
            <Stack gap={1.5}>
              <FormControl fullWidth required>
                <FormLabel>Start Time</FormLabel>
                <input
                  type="time"
                  style={{
                    padding: "0.5rem 1rem",
                    fontSize: "15px",
                    outline: "none",
                    border: "2px solid #3348BB",
                    borderRadius: 4,
                  }}
                  // value={startTime}
                  onChange={handleStartTimeChange}
                />
              </FormControl>
              <FormControl fullWidth required>
                <FormLabel>End Time</FormLabel>
                <input
                  type="time"
                  style={{
                    padding: "0.5rem 1rem",
                    fontSize: "15px",
                    outline: "none",
                    border: "2px solid #3348BB",
                    borderRadius: 4,
                  }}
                  // value={endTime}
                  onChange={handleEndTimeChange}
                />
              </FormControl>
              <FormControl fullWidth required>
                <FormLabel>Title</FormLabel>
                <textarea
                  style={{
                    padding: "0.5rem 1rem",
                    fontSize: "15px",
                    outline: "none",
                    border: "2px solid #3348BB",
                    borderRadius: 4,
                    resize: "none",
                  }}
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                />
              </FormControl>
            </Stack>
          )}
        </Stack>
        <Stack
          direction="row"
          gap={2}
          sx={{ width: "100%" }}
          justifyContent="flex-end"
        >
          <Button
            type="reset"
            variant="contained"
            sx={{
              background: "#323445",
              "&:hover": { background: "#32344590" },
            }}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            variant="contained"
            sx={{
              background: "#005500",
              "&:hover": { background: "#00550090" },
            }}
          >
            Request
          </Button>
        </Stack>
      </Paper>
    </Stack>
  );
};

export default NewRequest;

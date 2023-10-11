import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  InputNewRequest: [],
  OutputNewRequest: [],
  OutputUsers: [],
  InputApproveLeave: [],
  InputDeclineLeave: [],
  OutputDownloadReport: [],
};

const StoreLeave = createSlice({
  name: "leave",
  initialState: initialState,
  reducers: {
    setNewRequestData(state) {},
    setNewRequest(state, action) {
      const newData = action.payload;
      state.InputNewRequest.push({
        selectedFile: newData.selectedFile,
        leaveType: newData.leaveType,
        dayLeave: newData.dayLeave,
        startDate: newData.startDate,
        endDate: newData.endDate,
        description: newData.description,
      });
    },
    getNewRequestData(state) {},
    getNewRequest(state, action) {
      state.OutputNewRequest = action.payload;
    },
    getUsersData(state) {},
    getUsers(state, action) {
      state.OutputUsers = action.payload;
    },
    setApproveLeaveData(state) {},
    setApproveLeave(state, action) {
      const newData = action.payload;
      state.InputApproveLeave.push({
        email: newData.email,
        leaveId: newData.leaveId,
        allowedLeaveDays: newData.allowedLeaveDays,
        leave_type: newData.leave_type,
      });
    },
    setDeclineLeaveData(state) {},
    setDeclineLeave(state, action) {
      const newData = action.payload;
      state.InputDeclineLeave.push({
        email: newData.email,
        leaveId: newData.leaveId,
      });
    },
    getDownloadReportData(state) {},
    getDownloadReport(state, action) {
      state.OutputDownloadReport = action.payload;
    },
  },
});

export const {
  setNewRequestData,
  setNewRequest,
  getNewRequestData,
  getNewRequest,
  getUsersData,
  getUsers,
  setApproveLeaveData,
  setApproveLeave,
  setDeclineLeaveData,
  setDeclineLeave,
  getDownloadReportData,
  getDownloadReport,
} = StoreLeave.actions;

export default StoreLeave.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  InputNewRequest: [],
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
  },
});

export const { setNewRequestData, setNewRequest } = StoreLeave.actions;

export default StoreLeave.reducer;

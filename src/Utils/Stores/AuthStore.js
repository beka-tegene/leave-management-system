import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  InputRegister: [],
};

const StoreAuth = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setRegisterData(state) {},
    setRegister(state, action) {
      const newData = action.payload;
      state.InputRegister.push({
        croppedImage: newData.croppedImage,
        fullName: newData.fullName,
        email: newData.email,
        studied: newData.studied,
        department: newData.department,
        employedDate: newData.employedDate,
        password: newData.password,
      });
    },
  },
});

export const { setRegister, setRegisterData } = StoreAuth.actions;

export default StoreAuth.reducer;

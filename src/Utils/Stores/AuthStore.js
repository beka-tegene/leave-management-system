import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  InputRegister: [],
  InputLogin: [],
};

const StoreAuth = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setLoginData(state) {},
    setLogin(state, action) {
      const newData = action.payload;
      state.InputLogin.push({
        email: newData.email,
        password: newData.password,
      });
    },
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

export const { setRegister, setRegisterData, setLoginData, setLogin } =
  StoreAuth.actions;

export default StoreAuth.reducer;

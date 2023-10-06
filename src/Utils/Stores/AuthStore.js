import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  InputRegister: [],
  InputLogin: [],
  InputUpdate: [],
  InputPassword: [],
  InputNotification: [],
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
        employed_date: newData.employed_date,
        password: newData.password,
      });
    },
    setUpdateData(state) {},
    setUpdate(state, action) {
      const newData = action.payload;
      state.InputUpdate.push({
        photo: newData.photo,
        email: newData.email,
        studied: newData.studied,
        department: newData.department,
        userId: newData.userId,
      });
    },
    setPasswordData(state) {},
    setPassword(state, action) {
      const newData = action.payload;
      state.InputPassword.push({
        oldPassword: newData.oldPassword,
        newPassword: newData.newPassword,
        userId: newData.userId,
      });
    },
    setNotificationData(state) {},
    setNotification(state, action) {
      const newData = action.payload;
      state.InputNotification.push({
        userId: newData.userId,
        notificationId: newData.newPassword,
      });
    },
  },
});

export const {
  setRegister,
  setRegisterData,
  setLoginData,
  setLogin,
  setUpdate,
  setUpdateData,
  setPasswordData,
  setPassword,
  setNotificationData,
  setNotification,
} = StoreAuth.actions;

export default StoreAuth.reducer;

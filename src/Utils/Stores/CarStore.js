import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  OutputCarSell: [],
  OutputCarRent: [],
};

const StoreCar = createSlice({
  name: "car",
  initialState: initialState,
  reducers: {
    getCarSellData(state) {},
    getCarSell(state, action) {
      state.OutputCarSell = action.payload;
    },
    getCarRentData(state) {},
    getCarRent(state, action) {
      state.OutputCarRent = action.payload;
    },
  },
});

export const {
  getCarSell,
  getCarSellData,
  getCarRentData,
  getCarRent,
} = StoreCar.actions;

export default StoreCar.reducer;

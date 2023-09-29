import { call, put, takeLatest } from "redux-saga/effects";
import { getCarRent, getCarSell } from "../Stores/CarStore";

export function* watchFetchAyzot() {
  yield takeLatest("car/getCarSellData", fetchCarSells);
  yield takeLatest("car/getCarRentData", fetchCarRents);
}

// Authentication and Authorization data

function* fetchCarSells(action) {
  try {
    const searchData = yield call(action, action.payload);
    yield put(getCarSell(searchData));
  } catch (error) {
    console.error("Saga Error:", error);
  }
}

function* fetchCarRents(action) {
  try {
    const searchData = yield call(action, action.payload);
    yield put(getCarRent(searchData));
  } catch (error) {
    console.error("Saga Error:", error);
  }
}

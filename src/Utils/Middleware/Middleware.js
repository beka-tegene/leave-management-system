import { call, put, takeLatest } from "redux-saga/effects";
import { setRegisterData } from "../Stores/AuthStore";
import { Register } from "../Api/Auth";

export function* watchFetchLeave() {
  yield takeLatest("auth/setRegister", fetchSetRegister);
}

// Authentication and Authorization data

function* fetchSetRegister(action) {
  try {
    yield call(Register, action.payload);
    yield setRegisterData();
  } catch (error) {
    console.error("Saga Error:", error);
  }
}

import { call, put, takeLatest } from "redux-saga/effects";
import { setLoginData, setRegisterData } from "../Stores/AuthStore";
import { Login, Register } from "../Api/Auth";

export function* watchFetchLeave() {
  yield takeLatest("auth/setRegister", fetchSetRegister);
  yield takeLatest("auth/setLogin", fetchSetLogin);
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

function* fetchSetLogin(action) {
  try {
    yield call(Login, action.payload);
    yield setLoginData();
  } catch (error) {
    console.error("Saga Error:", error);
  }
}

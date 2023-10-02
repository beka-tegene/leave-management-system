import { call, put, takeLatest } from "redux-saga/effects";
import { setLoginData, setRegisterData } from "../Stores/AuthStore";
import { Login, Register } from "../Api/Auth";
import {
  getNewRequest,
  getUsers,
  setNewRequestData,
} from "../Stores/LeaveStore";
import { NewRequest, fetchLeave, fetchUser } from "../Api/Leave";

export function* watchFetchLeave() {
  yield takeLatest("auth/setRegister", fetchSetRegister);
  yield takeLatest("auth/setLogin", fetchSetLogin);

  yield takeLatest("leave/setNewRequest", fetchSetNewRequest);
  yield takeLatest("leave/getNewRequestData", fetchGetNewRequest);
  yield takeLatest("leave/getUsersData", fetchGetUsers);
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

function* fetchSetNewRequest(action) {
  try {
    yield call(NewRequest, action.payload);
    yield setNewRequestData();
  } catch (error) {
    console.error("Saga Error:", error);
  }
}

function* fetchGetNewRequest(action) {
  try {
    const backData = yield call(fetchLeave, action.payload);
    yield put(getNewRequest(backData));
  } catch (error) {
    console.error("Saga Error:", error);
  }
}

function* fetchGetUsers(action) {
  try {
    const backData = yield call(fetchUser, action.payload);
    yield put(getUsers(backData));
  } catch (error) {
    console.error("Saga Error:", error);
  }
}

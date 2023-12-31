import { call, put, takeLatest } from "redux-saga/effects";
import {
  setCreateEmployerData,
  setLoginData,
  setNotificationData,
  setPasswordData,
  setRegisterData,
  setUpdateApproveData,
  setUpdateData,
} from "../Stores/AuthStore";
import {
  Login,
  Register,
  notificationUpdate,
  update,
  updatePassword,
} from "../Api/Auth";
import { toast } from "react-toastify";
import {
  getDownloadReport,
  getNewRequest,
  getUsers,
  setApproveLeaveData,
  setDeclineLeaveData,
  setNewRequestData,
} from "../Stores/LeaveStore";
import {
  CreateEmployer,
  NewRequest,
  UpdateAppAndDec,
  approveLeave,
  declineLeave,
  fetchApprovedMonth,
  fetchLeave,
  fetchUser,
} from "../Api/Leave";

export function* watchFetchLeave() {
  yield takeLatest("auth/setRegister", fetchSetRegister);
  yield takeLatest("auth/setUpdate", fetchSetUpdate);
  yield takeLatest("auth/setPassword", fetchSetPassword);
  yield takeLatest("auth/setLogin", fetchSetLogin);
  yield takeLatest("auth/setNotification", fetchSetNotification);
  yield takeLatest("auth/setCreateEmployer", fetchSetCreateEmployer);
  yield takeLatest("auth/setUpdateApprove", fetchSetUpdateLeaveApprove);

  yield takeLatest("leave/setNewRequest", fetchSetNewRequest);
  yield takeLatest("leave/getNewRequestData", fetchGetNewRequest);
  yield takeLatest("leave/getUsersData", fetchGetUsers);
  yield takeLatest("leave/setApproveLeave", fetchSetApproveLeave);
  yield takeLatest("leave/setDeclineLeave", fetchSetDeclineLeave);
  yield takeLatest("leave/getDownloadReportData", fetchDownloadReport);
}

// Authentication and Authorization data

function* fetchSetRegister(action) {
  try {
    yield call(Register, action.payload);
    yield setRegisterData();
  } catch (error) {
    toast.error(error.response.data.msg);
  }
}

function* fetchSetUpdate(action) {
  try {
    yield call(update, action.payload);
    yield setUpdateData();
  } catch (error) {
    toast.error(error.response.data.msg);
  }
}

function* fetchSetPassword(action) {
  try {
    yield call(updatePassword, action.payload.data);
    yield setPasswordData();
  } catch (error) {
    toast.error(error.response.data.message);
  }
}

function* fetchSetLogin(action) {
  try {
    yield call(Login, action.payload);
    yield setLoginData();
  } catch (error) {
    toast.error(error.response.data.msg);
  }
}

function* fetchSetNewRequest(action) {
  try {
    yield call(NewRequest, action.payload);
    yield setNewRequestData();
  } catch (error) {
    toast.error(error.response.data.error);
  }
}

function* fetchGetNewRequest(action) {
  try {
    const backData = yield call(fetchLeave, action.payload);
    yield put(getNewRequest(backData));
  } catch (error) {
    toast.error(error.response.data.msg);
  }
}

function* fetchGetUsers(action) {
  try {
    const backData = yield call(fetchUser, action.payload);
    yield put(getUsers(backData));
  } catch (error) {
    toast.error(error.response.data.msg);
  }
}

function* fetchSetApproveLeave(action) {
  try {
    yield call(approveLeave, action.payload.data);
    yield setApproveLeaveData();
  } catch (error) {
    toast.error(error.response.data.msg);
  }
}

function* fetchSetNotification(action) {
  try {
    yield call(notificationUpdate, action.payload.data);
    yield setNotificationData();
  } catch (error) {}
}

function* fetchSetDeclineLeave(action) {
  try {
    yield call(declineLeave, action.payload.data);
    yield setDeclineLeaveData();
  } catch (error) {
    toast.error(error.response.data.msg);
  }
}

function* fetchDownloadReport(action) {
  try {
    const backData = yield call(fetchApprovedMonth, action.payload);
    yield put(getDownloadReport(backData));
  } catch (error) {
    toast.error(error.response.data.msg);
  }
}

function* fetchSetCreateEmployer(action) {
  try {
    yield call(CreateEmployer, action.payload.data);
    yield setCreateEmployerData();
  } catch (error) {
    toast.error(error.response.data.msg);
  }
}

function* fetchSetUpdateLeaveApprove(action) {
  try {
    yield call(UpdateAppAndDec, action.payload.data);
    yield setUpdateApproveData();
  } catch (error) {
    toast.error(error.response.data.msg);
  }
}

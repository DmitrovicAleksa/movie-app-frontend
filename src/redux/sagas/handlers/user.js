import { call, put, takeLatest } from "@redux-saga/core/effects";
import { requestPostUser } from "../request/userRegistration";
import { requestLoginUser } from "../request/userLogin";
import { POST_USER, LOGIN } from "../../user/user.types";
import { loginSucceeded, postUserSuccess } from "../../user/user.actions";

// REGISTER USER SAGA

function* handlePostUser({ payload }) {
  console.log(payload);
  try {
    const response = yield call(requestPostUser, payload.values);
    const { data } = response;
    yield put(postUserSuccess(data));
    payload.history.push("/login");
  } catch (error) {
    console.log(error);
  }
}

// LOGIN USER SAGA

export function* handeleLoginUser({ payload }) {
  try {
    const response = yield call(requestLoginUser,payload.values);
    const { data } = response;
    yield put(loginSucceeded(data));
    localStorage.setItem("token", data.access);
    // payload.history.push("/movies");
  } catch (error) {
    console.log(error);
    localStorage.removeItem("token");
  }
}

export function* userSaga() {
  yield takeLatest(POST_USER, handlePostUser);
  yield takeLatest(LOGIN, handeleLoginUser);

}

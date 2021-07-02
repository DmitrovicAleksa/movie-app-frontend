import { call, put, takeLatest } from "@redux-saga/core/effects";
import { requestPostUser } from "../request/user";
import { postUserSuccess } from "../../user/user.actions";
import { POST_USER } from "../../user/user.types";

function* handlePostUser({payload}) {
  console.log(payload);
  try {
    const response = yield call(() => requestPostUser(payload.values));
    const { data } = response;
    yield put(postUserSuccess(data));
    // payload.history.push('/login')
  } catch (error) {
    console.log(error);
  }
}

export function* userSaga() {
  yield takeLatest(POST_USER, handlePostUser);
}

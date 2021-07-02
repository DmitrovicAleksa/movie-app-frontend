import { all } from "@redux-saga/core/effects";
import { userSaga } from "./handlers/user";

export function* rootSaga() {
  yield all([userSaga()]);
}

import { all } from "@redux-saga/core/effects";
import { movieSaga } from "./handlers/movie";
import { userSaga } from "./handlers/user";

export function* rootSaga() {
  yield all([userSaga(),movieSaga()]);
}

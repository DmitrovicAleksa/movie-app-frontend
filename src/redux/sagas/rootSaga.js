import { all } from "@redux-saga/core/effects";
import { genreSaga } from "./handlers/genre";
import { movieSaga } from "./handlers/movie";
import { userSaga } from "./handlers/user";

export function* rootSaga() {
  yield all([userSaga(),movieSaga(),genreSaga()]);
}

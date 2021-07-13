import { getMoviesSuccess, postMovieSuccess } from "../../movie/movie.actions";
import { requestMovieList } from "../request/movieList";
import { call, put, takeLatest } from "@redux-saga/core/effects";
import { GET_MOVIES,POST_MOVIE } from "../../movie/movie.types";
import { requestMoviePost } from "../request/moviePost";

function* handleGetMovies() {
  try {
    const response = yield call(requestMovieList);
    const { data } = response;
    yield put(getMoviesSuccess(data));
    // payload.history.push('movies/post');
  } catch (error) {
    console.log(error);
  }
}

function* handlePostMovie({ payload }) {
  try {
    const response = yield call(requestMoviePost, payload.values);
    const { data } = response;
    yield put(postMovieSuccess(data));
  } catch (error) {
    console.log(error);
  }
}


export function* movieSaga() {
  yield takeLatest(GET_MOVIES, handleGetMovies);
  yield takeLatest(POST_MOVIE, handlePostMovie);
}

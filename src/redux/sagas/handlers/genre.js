import { getGenresSuccess } from "../../genre/genre.actions";
import { GET_GENRES } from "../../genre/genre.types";
import { requestGenreList } from "../request/genreList";
import { call, put, takeLatest } from "@redux-saga/core/effects";




function* handleGenres() {
    try{
      const response = yield call(requestGenreList)
      const {data} = response;
      yield put(getGenresSuccess(data));
    }catch(error){
      console.log(error);
    }
  }

  export function* genreSaga() {
    yield takeLatest(GET_GENRES, handleGenres);
  }
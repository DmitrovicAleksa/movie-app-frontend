import { getMoviesSuccess } from "../../movie/movie.actions";
import { requestMovieList } from "../request/movieList";
import { call, put, takeLatest } from "@redux-saga/core/effects";
import {GET_MOVIES} from '../../movie/movie.types';


function* handleGetMovies() {
    try{
        const response = yield call(requestMovieList);
        const {data} = response;
        yield put(getMoviesSuccess(data));
    }catch (error) {
        console.log(error);
    }    
}

export function* movieSaga() {
    yield takeLatest(GET_MOVIES,handleGetMovies)
}
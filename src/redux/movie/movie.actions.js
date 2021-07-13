import {
  GET_MOVIES,
  GET_MOVIES_SUCCESS,
  POST_MOVIE,
  POST_MOVIE_SUCCESS,
} from "./movie.types";

export const getMovies = () => {
  return {
    type: GET_MOVIES,
  };
};

export const getMoviesSuccess = (payload) => {
  return {
    type: GET_MOVIES_SUCCESS,
    payload,
  };
};

export const postMovie = (payload) => {
  console.log(payload)
  return {
    type: POST_MOVIE,
    payload,
  };
};

export const postMovieSuccess = (payload) => {
  return {
    type: POST_MOVIE_SUCCESS,
    payload,
  };
};



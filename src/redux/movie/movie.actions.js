import {
  GET_MOVIES,
  GET_MOVIES_SUCCESS,
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

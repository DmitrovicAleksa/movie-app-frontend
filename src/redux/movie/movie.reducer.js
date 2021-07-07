import { GET_MOVIES_SUCCESS } from "./movie.types";

const initialState = {
  movies: [],
};

export const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES_SUCCESS:
      return {
        ...state,
        movies: action.movies,
      };
    default:
      return state;
  }
};

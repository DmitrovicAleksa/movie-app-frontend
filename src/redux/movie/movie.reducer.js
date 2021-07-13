import { GET_MOVIES_SUCCESS, POST_MOVIE_SUCCESS } from "./movie.types";

const initialState = {
  movies: [],
};

export const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES_SUCCESS:
      return {
        ...state,
        movies: action.payload,
      };
      case POST_MOVIE_SUCCESS:
      return {
        ...state,
        movie: action.payload,
      };
    default:
      return state;
  }
};

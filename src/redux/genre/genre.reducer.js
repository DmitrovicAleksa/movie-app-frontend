import { GET_GENRES_SUCCESS } from "./genre.types";

const initialState = {
  genres: [],
};

export const genreReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GENRES_SUCCESS:
      return {
        ...state,
        genres: action.payload,
      };
    default:
      return state;
  }
};

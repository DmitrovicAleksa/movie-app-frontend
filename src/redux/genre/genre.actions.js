import { GET_GENRES, GET_GENRES_SUCCESS } from "./genre.types";



export const getGenres = () => {
    return {
      type: GET_GENRES,
    };
  };
  
  export const getGenresSuccess = (payload) => {
    return {
      type: GET_GENRES_SUCCESS,
      payload,
    };
  };
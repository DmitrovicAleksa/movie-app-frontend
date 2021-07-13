import { combineReducers } from "redux";
import { authReducer } from "./user/user.reducer";
import { movieReducer } from "./movie/movie.reducer";
import { genreReducer } from "./genre/genre.reducer";

const rootReducer = combineReducers({
  authReducer,
  movieReducer,
  genreReducer,
});

export default rootReducer;

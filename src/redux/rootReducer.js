import { combineReducers } from "redux";
import { authReducer } from "./user/user.reducer";
import { movieReducer } from "./movie/movie.reducer";

const rootReducer = combineReducers({
  authReducer,
  movieReducer
});

export default rootReducer;

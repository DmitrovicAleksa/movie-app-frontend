import { combineReducers } from "redux";
import { authReducer } from "./user/user.reducer";

const rootReducer = combineReducers({
  authReducer
});

export default rootReducer;

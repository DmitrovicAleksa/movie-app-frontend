import { combineReducers } from "redux";
import {userReducer} from "./user/user.reducer";
import {loginReducer} from "./user/user.reducer";

const rootReducer = combineReducers({
  user : userReducer,
  loginUser : loginReducer,
});

export default rootReducer;

import { combineReducers } from "redux";
import {registerReducer} from "./user/user.reducer";
import {loginReducer} from "./user/user.reducer";

const rootReducer = combineReducers({
  registerReducer,
  loginReducer
});

export default rootReducer;

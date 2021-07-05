import { POST_USER_SUCCESS } from "./user.types";
import { LOGIN_FAILED,LOGIN_SUCCEEDED } from "./user.types";


// REGISTRATION REDUCER
const intitalState = {
  user: {},
};

export const userReducer = (state = intitalState, action) => {
  switch (action.type) {
    case POST_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};


// LOGIN REDUCER
const initState = {
  token: localStorage.getItem('token') || null,
  user: {},
  error: false
}

export const loginReducer = (state = initState, action)=> {
  switch (action.type) {
    case LOGIN_SUCCEEDED:
      return {
        ...state,
        token: action.payload.access_token,
        user: action.payload.user
      }
    case LOGIN_FAILED:
      return {
        ...state,
        error: true,
        user: {}
      }
    default:
      return state
  }
}


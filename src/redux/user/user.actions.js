import { POST_USER, POST_USER_SUCCESS,LOGIN_SUCCEEDED,LOGIN_FAILED,LOGIN } from "./user.types";

// REGISTRATION ACTIONS
export const postUser = (payload) => {
  console.log("postUser");
  return {
    type: POST_USER,
    payload,
  };
};

export const postUserSuccess = (payload) => {
  console.log("postUserSuccess");
  return {
    type: POST_USER_SUCCESS,
    payload,
  };
};

// LOGIN ACTIONS
export function login(payload) {
  return {
    type: LOGIN,
    payload,
  };
}

export function loginSucceeded(payload) {
  return {
    type: LOGIN_SUCCEEDED,
    payload,
  };
}

export function loginFailed(error) {
  return {
    type: LOGIN_FAILED,
    error,
  };
}

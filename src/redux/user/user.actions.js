import { POST_USER,POST_USER_SUCCESS } from "./user.types";


export const postUser = (payload) => {
  console.log('postUser')
  return {
    type: POST_USER,
    payload,
  };
};

export const postUserSuccess = (payload) => {
  console.log('postUserSuccess')
  return {
    type: POST_USER_SUCCESS,
    payload,
  };
};

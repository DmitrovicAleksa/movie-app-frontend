import { POST_USER_SUCCESS } from "./user.types";

const intitalState = {
  user: {},
};

const userReducer = (state = intitalState, action) => {
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

export default userReducer;

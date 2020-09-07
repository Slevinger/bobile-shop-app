import { ADD_ERROR, REMOVE_ERROR, CLEAR_ERRORS } from "../actions/errors";

import { SIGNUP, LOGIN } from "../actions/auth";

const initialState = {
  default: "",
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_ERROR:
      return { ...state, [payload.type]: payload.message };
    case REMOVE_ERROR:
      return { ...state, [payload.type]: "" };
    case CLEAR_ERRORS:
    case LOGIN:
    case SIGNUP:
      return initialState;
    default:
      return state;
  }
};

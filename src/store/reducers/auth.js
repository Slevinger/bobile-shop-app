import { SIGNUP, LOGIN, LOGOUT } from "../actions/auth";

const initialState = {
  id: null,
  username: "",
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SIGNUP:
    case LOGIN:
      return payload;
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
};

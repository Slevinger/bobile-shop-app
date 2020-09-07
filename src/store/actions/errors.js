export const ADD_ERROR = "ADD_ERROR";
export const REMOVE_ERROR = "REMOVE_ERROR";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

export const addError = (error, key = "default") => {
  return { type: ADD_ERROR, payload: { key, error } };
};

export const clearErrors = () => {
  return { type: CLEAR_ERRORS, payload: "" };
};
export const removeError = (key = "default") => {
  return { type: REMOVE_ERROR, payload: key };
};

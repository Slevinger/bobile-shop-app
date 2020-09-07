import { callApi } from "./ApiStore";
import { loginApi, signUpApi } from "../apis/AuthApi";
import { clearErrors } from "../actions/errors";

export const LOGIN = "LOGIN";
export const SIGNUP = "SIGNUP";
export const LOGOUT = "LOGOUT";

export const doLogin = (email, password) => async (dispatch) => {
  await dispatch(clearErrors());

  const response = await callApi(loginApi(email, password));

  const { error, localId: id, idToken: token } = response;
  if (error) {
    return dispatch(error);
  }

  localStorage.setItem("authCredentials", JSON.stringify({ email, id, token }));
  await dispatch({
    type: SIGNUP,
    payload: {
      email,
      token,
      id,
    },
  });
};

export const doSignup = (email, password) => async (dispatch) => {
  try {
    await dispatch(clearErrors());

    const response = await callApi(signUpApi(email, password));

    const { error, localId: id, idToken: token } = response;
    if (error) {
      return dispatch(error);
    }

    localStorage.setItem(
      "authCredentials",
      JSON.stringify({ email, id, token })
    );

    await dispatch({ type: SIGNUP, payload: { email, id, token } });
  } catch (e) {
    console.log(e);
  }
};

export const doLogout = () => {
  return { type: LOGOUT, payload: null };
};

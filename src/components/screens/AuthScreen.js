import React, { useCallback, useEffect } from "react";
import { Route, Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { doSignup, doLogin, tryLocalSignIn } from "../../store/actions/auth";
import Auth from "../UI/auth/AuthSignin";

// const history = createBrowserHistory();

export default () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const login = useCallback(async (email, password) => {
    await dispatch(doLogin(email, password));
    history.push("/home");
  }, []);

  const signup = useCallback(async (email, password) => {
    await dispatch(doSignup(email, password));
    history.push("/home");
  }, []);

  return (
    <div className="App">
      <Route exact path="/">
        <Auth
          key="signup"
          label={"Sign Up"}
          onSubmit={signup}
          link={
            <Link to="/login" replace>
              Already have an account? Login
            </Link>
          }
        />
      </Route>
      <Route path="/login">
        <Auth
          key="login"
          label="Log In"
          onSubmit={login}
          link={
            <Link to="/" replace>
              Not a member yet? Sign Up
            </Link>
          }
        />
      </Route>
    </div>
  );
  return;
};

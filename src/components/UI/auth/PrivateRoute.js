import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";

export default ({ children, ...rest }) => {
  const user = useSelector(({ auth }) => auth);

  return (
    <Route {...rest}>
      {user.token ? (
        children
      ) : (
        <Redirect to={{ pathname: "/login", state: { from: rest.location } }} />
      )}
    </Route>
  );
};

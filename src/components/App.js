import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useDispatch } from "react-redux";

import MainScreenContainer from "./screens/MainScreenContainer";
import AuthScreen from "./screens/AuthScreen";
import PrivateRoute from "./UI/auth/PrivateRoute";
import "./App.css";

// const history = createBrowserHistory();

function App() {
  return (
    <Router>
      <AuthScreen />
      <PrivateRoute component={MainScreenContainer} path="/home" />
    </Router>
  );
  return;
}

export default App;

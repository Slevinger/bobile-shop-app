import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";
import { createStore, combineReducers, applyMiddleware } from "redux";

import authReducer from "./store/reducers/auth";
import errorsReducer from "./store/reducers/errors";
import productsReducer from "./store/reducers/products";

import App from "./components/App";

import "./assets/fonts/OpenSans-Bold.ttf";
import "./index.css";

const rootReducer = combineReducers({
  productsStore: productsReducer,
  auth: authReducer,
  errors: errorsReducer,
});

const store = createStore(rootReducer, applyMiddleware(reduxThunk));
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

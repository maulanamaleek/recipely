import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./main.css";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { productsReducer, initialState } from "./components/reducers";
import thunk from "redux-thunk";

const middlewares = [thunk];

const store = createStore(
  productsReducer,
  initialState,
  applyMiddleware(...middlewares)
);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

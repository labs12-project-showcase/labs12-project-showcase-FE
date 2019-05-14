import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Router } from "react-router-dom";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./config/rootReducer.js";
import history from "./history.js";

import ScrollToTop from "./components/utils/ScrollToTop";

let newStore;

if (process.env.NODE_ENV === "production") {
  newStore = createStore(rootReducer, compose(applyMiddleware(thunk, logger)));
} else if (process.env.NODE_ENV === "development") {
  newStore = createStore(
    rootReducer,
    compose(
      applyMiddleware(thunk, logger),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
}

const store = newStore;

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </Router>
  </Provider>,

  document.getElementById("root")
);

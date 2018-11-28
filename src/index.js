import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

// import antd libs
import "../node_modules/antd/dist/antd.css";

// redux
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import promiseMiddleware from "redux-promise-middleware";

// Routes
import Routes from "./Routes";
import * as serviceWorker from "./serviceWorker";

// reducers
import rootReducer from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(promiseMiddleware()))
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Routes />
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

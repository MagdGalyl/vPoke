import React from "react";
import ReactDOM from "react-dom/client";
import { createStore } from "redux";
import { Provider } from "react-redux";
// import thunk from "redux-thunk";

import reducers from "./reducers";

import "./index.css";
import App from "./components/App";

const store = createStore(reducers);
// , applyMiddleware(thunk) , applyMiddleware
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

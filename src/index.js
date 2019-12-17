import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Pricing from "./components/Pricing";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { reducer } from "./reducers";

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <Pricing />
  </Provider>,
  document.getElementById("root")
);

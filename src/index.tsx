import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import "semantic-ui-css/semantic.min.css";
import { App } from "./components/Container";
import { store } from "./store";

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);

import * as React from "react";
import * as ReactDOM from "react-dom";
import "../styles/application";
import "babel-polyfill";
import { App } from "./components/App";

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <App />,
    document.querySelector("#app")
  );
});

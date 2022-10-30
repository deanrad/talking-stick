import React from "react";
import ReactDOM from "react-dom";
import App from "/src/client/App";
import { Unmounter } from "./components/Unmounter";

ReactDOM.render(
  <Unmounter>
    <App />
  </Unmounter>,
  document.getElementById("root")
);

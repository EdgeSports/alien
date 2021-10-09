import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./style.css";
import "animate.css/animate.min.css";
import App from "./App";
import { AuthTokenProvider } from "./api/AuthenticationContext";

ReactDOM.render(
  <React.StrictMode>
    <AuthTokenProvider>
      <App />
    </AuthTokenProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

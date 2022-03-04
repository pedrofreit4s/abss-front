import React from "react";
import ReactDOM from "react-dom";
import { WebRoutes } from "./routes/web.routes";
import "bootstrap/dist/css/bootstrap-grid.min.css";

ReactDOM.render(
  <React.StrictMode>
    <WebRoutes />
  </React.StrictMode>,
  document.getElementById("root")
);

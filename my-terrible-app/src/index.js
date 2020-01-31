import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "./Navbar/navbar";
import { HomePage } from "./Pages/HomePage";

ReactDOM.render(
  <div>
    <Navbar />
    <HomePage />
  </div>,
  document.getElementById("root")
);

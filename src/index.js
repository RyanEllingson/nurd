import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import Axios from "axios";

// Health check
Axios.get("https://ryan-nurd-be.herokuapp.com/ping")
  .then(() => {
    console.log("should be working");
  })
  .catch(() => {
    console.log("not connected to back end");
  });

ReactDOM.render(<App />, document.getElementById("root"));

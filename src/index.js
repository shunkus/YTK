import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

const rootElement = document.getElementById("root");

const localVideos = localStorage.getItem("videos");
let videos = [];
if (localVideos) {
  videos = JSON.parse(localVideos);
}

ReactDOM.render(
  <React.StrictMode>
    <App videos={videos} />
  </React.StrictMode>,
  rootElement
);

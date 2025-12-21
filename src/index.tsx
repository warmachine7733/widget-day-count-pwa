import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const rootDomElem = document.getElementById("root") as ReactDOM.Container;

const root = ReactDOM.createRoot(rootDomElem);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Register service worker
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/service-worker.js");
  });
}

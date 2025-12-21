import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
console.log("🔥 ENTRY FILE EXECUTED");
document.body.style.background = "red";

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

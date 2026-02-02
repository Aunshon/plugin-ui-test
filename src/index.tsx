import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./style.css";

function init() {
  const mount = document.getElementById("plugin-ui-demo-app");
  if (mount) {
    const root = createRoot(mount);
    root.render(<App />);
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}

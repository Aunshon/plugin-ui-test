import React from "react";
import { createRoot } from "react-dom/client";
import { DokanPluginDemo, WeMailPluginDemo, ButtonShowcaseDemo } from "./App";
import "./style.css";

function init() {
  // Mount Plugin A (Dokan - Purple Theme)
  const dokanMount = document.getElementById("plugin-dokan-app");
  if (dokanMount) {
    const root = createRoot(dokanMount);
    root.render(<DokanPluginDemo />);
  }

  // Mount Plugin B (WeMail - Blue Theme)
  const wemailMount = document.getElementById("plugin-wemail-app");
  if (wemailMount) {
    const root = createRoot(wemailMount);
    root.render(<WeMailPluginDemo />);
  }

  // Mount Button Showcase (Buttons submenu page)
  const buttonsMount = document.getElementById("plugin-buttons-showcase-app");
  if (buttonsMount) {
    const root = createRoot(buttonsMount);
    root.render(<ButtonShowcaseDemo />);
  }
}

// Handle both cases: DOM already loaded or still loading
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}

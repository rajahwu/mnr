import { createRoot } from "react-dom/client";

import App from "./components/app";
import React from "react";

const appContainer = document.getElementById("app");

if (appContainer) {
  const root = createRoot(appContainer);
  root.render(<App initialData={{ contests: [] }} />);
} else {
  console.error("App Container not found");
}

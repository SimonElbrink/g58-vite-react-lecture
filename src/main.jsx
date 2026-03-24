import { createRoot } from "react-dom/client";
import App from "./App.jsx";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { StrictMode } from "react";
import RouterDemo from "./5_router/RouterDemo.jsx";

// npm install bootstrap@5 @popperjs/core
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterDemo />
  </StrictMode>,
);

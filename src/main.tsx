import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import './assets/fonts/fonts.css';
import "./index.css";
import "./App.css";
import { HashRouter } from "react-router-dom";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>
);

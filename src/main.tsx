import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
    <a
      href="/Harpreet_Singh_Resume.pdf"
      download
      target="_blank"
      rel="noopener noreferrer"
    >
      Download My Resume
    </a>
  </React.StrictMode>
);

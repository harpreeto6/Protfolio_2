import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const RESUME_URL = `${import.meta.env.BASE_URL}Harpreet_Singh_Resume.html`;

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
    <a
      href={RESUME_URL}
      target="_blank"
      rel="noopener noreferrer"
    >
      Download My Resume
    </a>
  </React.StrictMode>
);
